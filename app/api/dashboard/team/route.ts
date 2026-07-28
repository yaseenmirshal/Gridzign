import { NextResponse } from "next/server";
import { saveDashboardStore } from "@/lib/server/store";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.team);
  } catch {
    return NextResponse.json({ error: "Failed to load team" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      name: payload.name,
      role: payload.role,
      description: payload.description,
      linkedin: payload.linkedin || "",
      twitter: payload.twitter || "",
      image: payload.image || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, team: [item, ...current.team] }));
    return NextResponse.json(result.team[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create team member" }, { status: 500 });
  }
}
