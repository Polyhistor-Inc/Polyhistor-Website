import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
  const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";

  try {
    const response = await fetch(`${apiBase}/api/v1/suggestions/random`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch random suggestion" },
      { status: 500 }
    );
  }
}
