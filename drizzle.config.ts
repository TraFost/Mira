import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
import { Client } from "pg";

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT_NO || "5432"),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => {
    console.log("✅ Connected to PostgreSQL!");
    return client.end();
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err);
  });

export default defineConfig({
  schema: "./app/db/schema/index.schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT_NO!),
    user: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: false,
  },
  verbose: true,
  strict: true,
  schemaFilter: "public",
});
