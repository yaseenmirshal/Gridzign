import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { saveDashboardStore } from "@/lib/server/store";

export const dynamic = "force-dynamic";

const sectionMap = {
  team: "team",
  blogs: "blogs",
  "case-studies": "caseStudies",
  services: "services",
  projects: "projects",
  inquiries: "inquiries",
} as const;

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const section = pathname.split("/").filter(Boolean).pop();
  const key = section ? sectionMap[section as keyof typeof sectionMap] : undefined;

  if (!key) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result[key as keyof typeof result]);
  } catch {
    return NextResponse.json({ error: "Failed to load section" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { pathname } = new URL(request.url);
  const section = pathname.split("/").filter(Boolean).pop();
  const key = section ? sectionMap[section as keyof typeof sectionMap] : undefined;

  if (!key) {
    return NextResponse.json({ error: "Invalid section" }, { status: 400 });
  }

  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      ...payload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => {
      const collection = current[key as keyof typeof current] as unknown as Array<Record<string, unknown>>;
      return {
        ...current,
        [key]: [item, ...collection],
      } as typeof current;
    });

    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Failed to create item" }, { status: 500 });
  }
}
