import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 정적 파일 제공 (구글 인증 파일 포함)
app.use(express.static(path.resolve(import.meta.dirname, "..", "public")));
app.use(express.static(path.resolve(import.meta.dirname, "..", "client", "public")));

// 구글 인증 파일을 가장 먼저 처리 (모든 변형 지원)
app.use((req, res, next) => {
  const googleFiles = [
    '/google8334862f75f6dc65.html',
    '/google8334862f75f6dc65',
    '/google-site-verification: google8334862f75f6dc65.html'
  ];
  
  if (googleFiles.includes(req.url) || googleFiles.includes(req.path)) {
    console.log('Google verification file intercepted:', req.url);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    return res.end('google-site-verification: google8334862f75f6dc65.html');
  }
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // 구글 인증 파일을 최우선으로 처리 (모든 미들웨어보다 먼저)
  app.all('/google8334862f75f6dc65.html', (req, res) => {
    console.log('Google verification file accessed directly from:', req.url, req.method);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
    res.end('google-site-verification: google8334862f75f6dc65.html');
  });

  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
