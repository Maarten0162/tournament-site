import { Tournament } from "@/app/lib/domain/tournament";
import Error from "next/error";
import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// GET one tournament
export async function GET(
  req: Request,
 context: { params: { id: string } }
) {
  try {
    const result = await sql`
      SELECT id, name, game_name, start_time, created_at, twitch_channel
      FROM tournaments
      WHERE id = ${context.params.id}
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ tournament: result[0] });
  }  catch (err: unknown) {}
}

// PUT update tournament
export async function PUT(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const body: Tournament = await req.json();
    const { name, game_name, start_time, channel } = body;

    await sql`
      UPDATE tournaments
      SET name = ${name},
          game_name = ${game_name},
          start_time = ${start_time},
          twitch_channel = ${channel}
      WHERE id = ${context.params.id}
    `;

    return NextResponse.json({ success: true });
  } catch (err: unknown) {}
}
export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    await sql`DELETE FROM tournaments WHERE id = ${context.params.id}`;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    
  }
}
