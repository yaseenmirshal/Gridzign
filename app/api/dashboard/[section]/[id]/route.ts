import { NextResponse } from "next/server";
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

export async function DELETE(request: Request) {
  const { pathname } = new URL(request.url);
  const parts = pathname.split("/").filter(Boolean);
  const section = parts[parts.length - 2];
  const id = parts[parts.length - 1];
  const key = section ? sectionMap[section as keyof typeof sectionMap] : undefined;

  if (!key || !id) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const result = await saveDashboardStore((current) => ({
      ...current,
      [key]: ((current[key as keyof typeof current] as unknown) as Array<{ id: string }>).filter((item) => item.id !== id),
    }) as typeof current);

    return NextResponse.json({ success: true, id });
  } catch {
    return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
  }
}
