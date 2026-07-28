import { NextResponse } from "next/server";
import { saveDashboardStore } from "@/lib/server/store";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await import("@/lib/server/store").then((mod) => mod.getDashboardStore());
    const result = await data;
    return NextResponse.json(result.inquiries);
  } catch {
    return NextResponse.json({ error: "Failed to load inquiries" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const item = {
      id: randomUUID(),
      name: payload.name,
      email: payload.email,
      company: payload.company || "",
      subject: payload.subject || "",
      message: payload.message,
      status: payload.status || "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const result = await saveDashboardStore((current) => ({ ...current, inquiries: [item, ...current.inquiries] }));
    return NextResponse.json(result.inquiries[0]);
  } catch {
    return NextResponse.json({ error: "Failed to create inquiry" }, { status: 500 });
  }
}
