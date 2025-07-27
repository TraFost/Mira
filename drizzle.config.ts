import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schema/index.schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:admin@localhost:5432/mira?sslmode=disable",
  },
  verbose: true,
  strict: true,
  schemaFilter: "public",
});
