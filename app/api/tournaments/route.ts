import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const tournaments = await sql`
      SELECT id, name, game_name, start_time, created_at
      FROM tournaments
      ORDER BY start_time ASC
    `;
    return NextResponse.json({ success: true, tournaments });
  } catch (error: any) {
    console.error("Fetch tournaments error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
