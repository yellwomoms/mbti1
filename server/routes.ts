import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getMBTICompatibility } from "../client/src/lib/mbti-data";

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
      
      // If not in storage, get from data and store it
      if (!compatibility) {
        const data = getMBTICompatibility(type1, type2);
        if (!data) {
          return res.status(404).json({ message: "Compatibility data not found" });
        }
        
        // Store in memory storage
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
