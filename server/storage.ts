import { users, mbtiCompatibility, type User, type InsertUser, type MBTICompatibility, type InsertMBTICompatibility } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getMBTICompatibility(type1: string, type2: string): Promise<MBTICompatibility | undefined>;
  createMBTICompatibility(data: InsertMBTICompatibility): Promise<MBTICompatibility>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private mbtiData: Map<string, MBTICompatibility>;
  currentId: number;
  currentMBTIId: number;

  constructor() {
    this.users = new Map();
    this.mbtiData = new Map();
    this.currentId = 1;
    this.currentMBTIId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMBTICompatibility(type1: string, type2: string): Promise<MBTICompatibility | undefined> {
    const key1 = `${type1}+${type2}`;
    const key2 = `${type2}+${type1}`;
    
    return this.mbtiData.get(key1) || this.mbtiData.get(key2);
  }

  async createMBTICompatibility(insertData: InsertMBTICompatibility): Promise<MBTICompatibility> {
    const id = this.currentMBTIId++;
    const data: MBTICompatibility = { ...insertData, id };
    const key = `${data.type1}+${data.type2}`;
    this.mbtiData.set(key, data);
    return data;
  }
}

export const storage = new MemStorage();
