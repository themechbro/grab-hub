"use client";
import { Divider, Typography } from "@mui/joy";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BannerPlusDetail from "./banner-plus-detail";
import Offers from "./offers";
import DishesGrid from "./dishes-grid";

export default function ViewRestaurantSlug() {
  const path = usePathname().split("/")[2];
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(
          `https://apis.ccbp.in/restaurants-list/${path}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (path) {
      fetchRestaurant();
    }
  }, [path]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!restaurant) return <div>No restaurant found</div>;

  return (
    <div className="flex flex-col  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="p-2">
        <Typography level="h3" sx={{ mb: 2 }}>
          {restaurant.name}
        </Typography>
        <Divider />
      </div>

      {/* banner plus details */}
      <BannerPlusDetail restaurant={restaurant} />

      {/* offers */}

      <div className="offers">
        <Offers />
      </div>

      <div className="dishes-grid">
        <DishesGrid foodData={restaurant.food_items} />
      </div>

      {/* Add more restaurant details as needed */}
    </div>
  );
}
