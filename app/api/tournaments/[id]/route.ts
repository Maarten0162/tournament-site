import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// GET one tournament
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await sql`
      SELECT id, name, game_name, start_time, created_at, twitch_channel
      FROM tournaments
      WHERE id = ${params.id}
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ tournament: result[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT update tournament
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { name, game_name, start_time, twitch_channel } = body;

    await sql`
      UPDATE tournaments
      SET name = ${name},
          game_name = ${game_name},
          start_time = ${start_time},
          twitch_channel = ${twitch_channel}
      WHERE id = ${params.id}
    `;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
