import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";
  const startTime = Date.now();

  try {
    const response = await fetch(`${apiBase}/health`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const latency = Date.now() - startTime;

    if (!response.ok) {
      return NextResponse.json(
        { status: "unhealthy", latency, error: `HTTP ${response.status}` },
        { status: 503 }
      );
    }

    const data = await response.json().catch(() => ({ status: "unknown" }));
    return NextResponse.json({ ...data, latency });
  } catch {
    const latency = Date.now() - startTime;
    return NextResponse.json(
      { status: "offline", latency, error: "Connection failed" },
      { status: 503 }
    );
  }
}
