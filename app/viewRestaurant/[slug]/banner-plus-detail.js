import { Star, Phone, MapPin } from "lucide-react";
import { Typography } from "@mui/joy";
import Image from "next/image";

export default function BannerPlusDetail({ restaurant }) {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <Image
        src={restaurant.image_url}
        alt={restaurant.name}
        width={1920}
        height={400}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-lg"
        priority
      />

      {/* Overlay Card */}
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg max-w-[90%] sm:max-w-[70%] md:max-w-[50%]">
        {/* Rating and Price */}
        <div className="flex items-center gap-2">
          <Star className="text-green-500" size={20} />
          <Typography level="h4" className="font-semibold">
            {restaurant.rating} on Google • ₹{restaurant.cost_for_two} for two
          </Typography>
        </div>

        {/* Cuisine Type */}
        <Typography level="body-lg" className="font-semibold mt-1">
          {restaurant.cuisine}
        </Typography>

        {/* Location */}
        <Typography level="body-md" className="text-gray-600 mt-1">
          <span className="font-bold">Location:</span> {restaurant.location}
        </Typography>

        {/* Open/Close Status */}
        <Typography
          level="body-md"
          className={`mt-1 ${
            restaurant.is_closed ? "text-red-500" : "text-green-500"
          }`}
        >
          {restaurant.is_closed ? "Closed" : "Open"} • {restaurant.opens_at}
        </Typography>

        {/* Call & Directions */}
        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center gap-2 text-red-500 font-semibold">
            <Phone size={18} />
            Call
          </button>
          <button className="flex items-center gap-2 text-orange-500 font-semibold">
            <MapPin size={18} />
            Direction
          </button>
        </div>
      </div>

      {/* Show All Images Button */}
      <button className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-md shadow-md flex items-center gap-2 text-gray-700 font-semibold">
        🔍 Show all images
      </button>
    </div>
  );
}
