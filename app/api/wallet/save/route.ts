import { NextApiRequest, NextApiResponse } from "next";

import { db } from "~/lib/db/client";
import { users } from "~/lib/db/schema/main.schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { accountId } = JSON.parse(req.body ?? "{}");

  if (!accountId) {
    return res.status(400).json({ error: "Missing accountId" });
  }

  try {
    await db
      .insert(users)
      .values({ walletAddress: accountId })
      .onConflictDoNothing();

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to save wallet:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
