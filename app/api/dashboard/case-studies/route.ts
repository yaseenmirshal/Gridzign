import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.caseStudies);
  } catch {
    return NextResponse.json({ error: "Failed to load case studies" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      title: payload.title,
      client: payload.client,
      summary: payload.summary,
      description: payload.description,
      category: payload.category,
      image: payload.image || "",
      link: payload.link || "",
      tags: payload.tags || [],
      featured: Boolean(payload.featured),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, caseStudies: [item, ...current.caseStudies] }));
    return NextResponse.json(result.caseStudies[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create case study" }, { status: 500 });
  }
}
