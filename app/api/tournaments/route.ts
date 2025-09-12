import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const tournaments = await sql`
      SELECT id, name, game_name, start_time, created_at, twitch_channel
      FROM tournaments
      ORDER BY start_time ASC
    `;
    return NextResponse.json({ success: true, tournaments });
  } catch (error: any) {
    console.error("Fetch tournaments error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, game_name, start_time, twitch_channel } = body;

    const result = await sql`
      INSERT INTO tournaments (name, game_name, start_time, twitch_channel)
      VALUES (${name}, ${game_name}, ${start_time}, ${twitch_channel})
      RETURNING *;
    `;

    return NextResponse.json({ tournament: result[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
