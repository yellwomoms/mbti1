import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getMBTICompatibility } from "../client/src/lib/mbti-data";
import { analyzeMBTICompatibility } from "./openai";

export async function registerRoutes(app: Express): Promise<Server> {
  
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
      
      // If not in storage, provide basic data first for fast response
      if (!compatibility) {
        // Get basic data immediately
        const data = getMBTICompatibility(type1, type2);
        if (!data) {
          return res.status(404).json({ message: "Compatibility data not found" });
        }
        
        // Store basic data in memory storage
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
        
        // Run AI analysis in background (non-blocking)
        analyzeMBTICompatibility(type1, type2)
          .then(aiAnalysis => {
            // Update storage with AI analysis when complete
            storage.createMBTICompatibility({
              type1,
              type2,
              score: aiAnalysis.score,
              compatibilityType: aiAnalysis.compatibilityType,
              title: aiAnalysis.title,
              description: aiAnalysis.description,
              characteristics: aiAnalysis.characteristics,
              tips: aiAnalysis.tips
            });
          })
          .catch(error => {
            console.log("백그라운드 AI 분석 실패:", error);
          });
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
