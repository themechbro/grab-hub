"use client";
import { Typography } from "@mui/joy";
import { Paper, CircularProgress, Alert } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function RestaurantsGrid() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("/api/fetchRestaurants");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // ✅ Parse JSON response
      setRestaurants(data); // ✅ Set parsed data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []); // ✅ Empty array to run only once

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {restaurants.map((restaurant) => (
        <Paper
          key={restaurant.id}
          className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            width={300}
            height={200}
            className="rounded-md mb-2"
          />
          <Typography level="title-md" className="font-bold">
            {restaurant.name}
          </Typography>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-yellow-500">
              ★ {restaurant.userRating.rating}
            </span>
            <span className="text-gray-500">
              {restaurant.costForTwo} for two
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
          <p className="text-blue-600 text-xs">{restaurant.location}</p>
        </Paper>
      ))}
    </div>
  );
}
