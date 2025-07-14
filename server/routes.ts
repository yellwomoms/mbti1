import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getMBTICompatibility } from "../client/src/lib/mbti-data";
import { analyzeMBTICompatibility } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // robots.txt 라우트
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /

Sitemap: https://mbti-master.replit.app/sitemap.xml`);
  });

  // sitemap.xml 라우트
  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mbti-master.replit.app/</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mbti-master.replit.app/results/ENFP/INFP</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mbti-master.replit.app/results/ENFJ/INFJ</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mbti-master.replit.app/results/ENTP/INTP</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mbti-master.replit.app/results/ENTJ/INTJ</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);
  });

  // 구글 사이트 인증 파일 제공 (다중 경로 대응)
  const googleVerificationHandler = (req: any, res: any) => {
    console.log('Google verification route hit:', req.url);
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('google-site-verification: google8334862f75f6dc65.html');
  };
  
  app.get('/google8334862f75f6dc65.html', googleVerificationHandler);
  app.get('/google8334862f75f6dc65', googleVerificationHandler);
  app.use('/google8334862f75f6dc65.html', googleVerificationHandler);
  
  // Get MBTI compatibility data
  app.get("/api/mbti-compatibility/:type1/:type2", async (req, res) => {
    try {
      const { type1, type2 } = req.params;
      
      // Validate MBTI types
      const validTypes = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP',
                         'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
      
      if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        return res.status(400).json({ message: "Invalid MBTI types" });
      }

      // First check storage
      let compatibility = await storage.getMBTICompatibility(type1, type2);
      
      // If not in storage, get from AI analysis
      if (!compatibility) {
        try {
          // Always use AI analysis for all combinations
          const aiAnalysis = await analyzeMBTICompatibility(type1, type2);
          
          // Store AI analysis result
          compatibility = await storage.createMBTICompatibility({
            type1,
            type2,
            score: aiAnalysis.score,
            compatibilityType: aiAnalysis.compatibilityType,
            title: aiAnalysis.title,
            description: aiAnalysis.description,
            characteristics: aiAnalysis.characteristics,
            tips: aiAnalysis.tips
          });
        } catch (aiError) {
          console.error("AI 분석 실패:", aiError);
          
          // Only use basic data as fallback if AI fails
          const data = getMBTICompatibility(type1, type2);
          if (data) {
            compatibility = await storage.createMBTICompatibility({
              type1,
              type2,
              score: data.score,
              compatibilityType: data.compatibilityType,
              title: data.title,
              description: data.description,
              characteristics: data.characteristics,
              tips: data.tips
            });
          } else {
            // If both AI and basic data fail, create a generic response
            compatibility = await storage.createMBTICompatibility({
              type1,
              type2,
              score: 70,
              compatibilityType: "특별한 관계",
              title: `${type1}과 ${type2}의 궁합`,
              description: "두 타입의 독특한 매력",
              characteristics: "연애할 때 우리는 서로 다른 매력을 가진 두 사람으로서 특별한 관계를 만들어갑니다. 각자의 고유한 성격과 장점들이 만나 새로운 시너지를 창출하며, 서로에게서 배울 점이 많은 관계입니다. 때로는 차이로 인한 갈등이 있을 수 있지만, 이를 통해 서로를 더 깊이 이해하고 성장할 수 있는 기회를 얻게 됩니다.",
              tips: "서로의 차이점을 존중하고 이해하려고 노력하세요. 각자의 고유한 장점과 특성을 인정하고, 때로는 서로의 관점에서 세상을 바라보려 노력해보세요. 소통을 통해 서로의 필요와 감정을 공유하고, 갈등이 생겼을 때는 인내심을 갖고 해결해나가세요. 서로의 성장을 지지하고 격려하며, 함께 만들어가는 관계의 소중함을 기억하세요."
            });
          }
        }
      }

      res.json(compatibility);
    } catch (error) {
      console.error("Error fetching MBTI compatibility:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
