import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  wallet: text("wallet").primaryKey(),
  connectedAt: timestamp("connected_at").defaultNow(),
  lastActiveAt: timestamp("last_active_at"),
});

export type User = typeof users.$inferSelect;
