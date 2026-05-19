import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const city = searchParams.get("city");
    const limit = searchParams.get("limit") || "5";

    if (!query || !city) {
      return NextResponse.json(
        { error: "Missing query or city parameter" },
        { status: 400 }
      );
    }

    const apiBase = process.env.API_BASE_URL || "https://api.thepolyhistor.com";
    const url = `${apiBase}/api/v1/demo/search?query=${encodeURIComponent(query)}&city=${encodeURIComponent(city)}&limit=${limit}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: "Backend API error", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Demo search proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
