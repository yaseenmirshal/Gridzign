import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.projects);
  } catch {
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      title: payload.title,
      category: payload.category,
      description: payload.description,
      image: payload.image || "",
      link: payload.link || "",
      featured: Boolean(payload.featured),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, projects: [item, ...current.projects] }));
    return NextResponse.json(result.projects[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
