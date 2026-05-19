import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const tribeId = searchParams.get("tribe_id");
  const limit = searchParams.get("limit") || "500";
  const epsilon = searchParams.get("epsilon") || "0.1";

  if (!city) {
    return NextResponse.json(
      { error: "Missing city parameter" },
      { status: 400 }
    );
  }

  const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";
  const url = new URL(`${apiBase}/api/v1/tribe/heatmap`);
  url.searchParams.set("city", city);
  url.searchParams.set("limit", limit);
  url.searchParams.set("epsilon", epsilon);
  if (tribeId) url.searchParams.set("tribe_id", tribeId);

  try {
    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    return NextResponse.json(await response.json());
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch heatmap data" },
      { status: 500 }
    );
  }
}
