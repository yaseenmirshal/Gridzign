import { NextResponse } from "next/server";
import { getDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getDashboardStore();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load dashboard data" }, { status: 500 });
  }
}
