import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/generated/prisma";
import dotenv from "dotenv"
import ws from "ws"
dotenv.config()

neonConfig.webSocketConstructor = ws;

const connectionString = `${process.env.DATABASE_URL}`;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in the environment!");
}

const adapter = new PrismaNeon({ connectionString })
export const prisma = new PrismaClient({ adapter })

