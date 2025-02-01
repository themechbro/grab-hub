import Navbar from "@/components/navbar";
import ImageCarousel from "@/components/offers-carousel";
import RestaurantsGrid from "@/components/restaurants-grid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <ImageCarousel />

      <div className="w-full max-w-7xl">
        <RestaurantsGrid />
      </div>
    </div>
  );
}
