import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";
    const res = await fetch(`${apiBase}/api/v1/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, source }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ error: "Unknown error" }));
      return NextResponse.json(
        { success: false, error: errorData.error || "Failed to join waitlist" },
        { status: res.status }
      );
    }

    const data = await res.json().catch(() => ({ success: true }));
    return NextResponse.json({ success: true, ...data });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process waitlist signup" },
      { status: 500 }
    );
  }
}
