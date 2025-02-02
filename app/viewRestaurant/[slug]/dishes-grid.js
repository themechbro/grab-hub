import { Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image"; // If using Next.js, otherwise use <img>
import { Star } from "lucide-react";

const DishCard = ({ dish }) => {
  return (
    <Card className="flex justify-between items-center p-4 shadow-md rounded-lg border border-gray-200">
      {/* Left Section */}
      <div className="flex-1">
        {/* Dish Title */}
        <Typography variant="h6" className="font-semibold">
          {dish.name}
        </Typography>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <Typography variant="body1" className="text-green-600 font-bold">
            ₹{dish.cost}
          </Typography>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-green-600">
          <Star fontSize="small" />
          <Typography variant="body2" className="font-semibold">
            {dish.rating}
          </Typography>
        </div>

        {/* Description */}
        <Typography variant="body2" className="text-gray-600 mt-1">
          {dish.food_type}
        </Typography>
      </div>

      {/* Right Section - Image & Button */}
      <div className="relative w-28 h-28 flex flex-col items-center">
        <Image
          src={dish.image_url}
          alt={dish.name}
          width={100}
          height={50}
          className="rounded-full object-cover"
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          className="absolute bottom-0 w-full"
        >
          ADD
        </Button>
      </div>
    </Card>
  );
};

const DishesGrid = ({ foodData }) => {
  const dishes = [
    {
      name: "Veg Darjeeling Steam Momo",
      originalPrice: 219,
      discountedPrice: 99,
      rating: 4.0,
      reviews: 19,
      description:
        "Momo stuffed with freshly chopped vegetables, herbs, and spices. Served with spicy red chutney.",
      image: "/momo.jpg", // Replace with actual image path
    },
    // Add more dishes here...
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <Typography variant="h5" className="font-bold">
        Recommended ({dishes.length})
      </Typography>
      {foodData.map((dish, index) => (
        <DishCard key={index} dish={dish} />
      ))}
    </div>
  );
};

export default DishesGrid;
