import { NextResponse } from "next/server";
import postgres from "postgres";
import { Tournament } from "@/app/lib/domain/tournament";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const tournaments: Tournament[] = await sql`
      SELECT id, name, game_name, start_time, created_at, twitch_channel
      FROM tournaments
      ORDER BY start_time ASC
    `;
    return NextResponse.json({ tournaments });
  } catch (err: unknown) {
  return NextResponse.json({ error: "Unknown error" }, { status: 500 });
}
}

export async function POST(req: Request) {
  try {
    const body: Tournament = await req.json();
    const { name, game_name, start_time, channel } = body;

    const result = await sql`
      INSERT INTO tournaments (name, game_name, start_time, twitch_channel)
      VALUES (${name}, ${game_name}, ${start_time}, ${channel})
      RETURNING *;
    `;

    return NextResponse.json({ tournament: result[0] });
  } catch (err: unknown) {
  return NextResponse.json({ error: "Unknown error" }, { status: 500 });
}
}
