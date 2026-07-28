import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.blogs);
  } catch {
    return NextResponse.json({ error: "Failed to load blogs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      title: payload.title,
      excerpt: payload.excerpt,
      content: payload.content,
      category: payload.category,
      tags: payload.tags || [],
      featuredImage: payload.featuredImage || "",
      seoTitle: payload.seoTitle || "",
      seoDescription: payload.seoDescription || "",
      published: Boolean(payload.published),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, blogs: [item, ...current.blogs] }));
    return NextResponse.json(result.blogs[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
  }
}
