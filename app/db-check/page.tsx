import { pool } from "~/app/db/client";

export default async function DbCheckPage() {
  const client = await pool.connect();

  const result = await client.query("SELECT NOW()");

  client.release();

  const formattedDate = new Date(result.rows?.[0]?.now).toLocaleString(
    "en-US",
    {
      timeZone: "America/New_York",
    },
  );

  return (
    <div className="flex items-center justify-center h-screen">
      DB is connected ✅ — Time: {formattedDate}
    </div>
  );
}
