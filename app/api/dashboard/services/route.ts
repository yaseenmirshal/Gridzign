import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.services);
  } catch {
    return NextResponse.json({ error: "Failed to load services" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      name: payload.name,
      description: payload.description,
      icon: payload.icon || "",
      featured: Boolean(payload.featured),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, services: [item, ...current.services] }));
    return NextResponse.json(result.services[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}
