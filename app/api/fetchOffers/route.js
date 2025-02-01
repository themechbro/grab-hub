// app/api/fetchOffers/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://apis.ccbp.in/restaurants-list/offers",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `API request failed with status ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch offers" },
      { status: 500 }
    );
  }
}

// Optionally add other HTTP methods
// export async function POST() { ... }
// export async function PUT() { ... }
