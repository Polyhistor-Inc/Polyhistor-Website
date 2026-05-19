import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, tier } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";
    const res = await fetch(`${apiBase}/api/v1/auth/key`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, tier }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ message: "Unknown error" }));
      return NextResponse.json(
        { message: errorData.message || "Failed to create key" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Key generation error:", error);
    return NextResponse.json(
      { message: "Failed to generate API key" },
      { status: 500 }
    );
  }
}
