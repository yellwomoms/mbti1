import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const mbtiCompatibility = pgTable("mbti_compatibility", {
  id: serial("id").primaryKey(),
  type1: text("type1").notNull(),
  type2: text("type2").notNull(),
  score: integer("score").notNull(),
  compatibilityType: text("compatibility_type").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  characteristics: text("characteristics").notNull(),
  tips: text("tips").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMBTICompatibilitySchema = createInsertSchema(mbtiCompatibility).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type MBTICompatibility = typeof mbtiCompatibility.$inferSelect;
export type InsertMBTICompatibility = z.infer<typeof insertMBTICompatibilitySchema>;
