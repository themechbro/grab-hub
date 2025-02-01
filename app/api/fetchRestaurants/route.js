import { NextResponse } from "next/server";

export async function GET() {
  try {
    const currPage = "1";
    const LIMIT = 8;
    const offset = (currPage - 1) * LIMIT;
    const response = await fetch(
      `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}`,
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
    const modifiedData = data.restaurants.map((e) => ({
      id: e.id,
      costForTwo: e.cost_for_two,
      cuisine: e.cuisine,
      groupByTime: e.group_by_time,
      hasOnlineDelivery: e.has_online_delivery,
      hasTableBooking: e.has_table_booking,
      imageUrl: e.image_url,
      isDeliveringNow: e.is_delivering_now,
      location: e.location,
      menuType: e.menu_type,
      name: e.name,
      opensAt: e.opens_at,
      userRating: {
        rating: e.user_rating.rating,
        ratingColor: e.user_rating.rating_color,
        totalReviews: e.user_rating.total_reviews,
      },
    }));
    return NextResponse.json(modifiedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch offers" },
      { status: 500 }
    );
  }
}
