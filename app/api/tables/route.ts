import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function GET() {
  try {
    const result = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `;
    return NextResponse.json({ success: true, tables: result });
  } catch (error: any) {
    console.error("Error listing tables:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
