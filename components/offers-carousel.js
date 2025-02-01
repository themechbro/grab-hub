"use client";
import { useState, useEffect } from "react";
import { IconButton, Paper, CircularProgress, Alert } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOffers = async () => {
    try {
      const response = await fetch("/api/fetchOffers");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOffers(data.offers || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % offers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    if (offers.length > 0) {
      const autoRotate = setInterval(handleNext, 5000);
      return () => clearInterval(autoRotate);
    }
  }, [activeIndex, offers.length]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-96">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-4">
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  if (offers.length === 0) {
    return (
      <div className="w-full p-4">
        <Alert severity="info">No offers available</Alert>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden p-4">
      <Paper className="relative w-full h-96 rounded-lg shadow-lg">
        <div className="w-full h-full flex items-center justify-center">
          {offers.map((offer, index) => (
            <Image
              key={offer.id}
              src={offer.image_url}
              alt={offer.image_url}
              className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              fill
            />
          ))}
        </div>

        {offers.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50"
              sx={{ color: "black" }}
            >
              <ChevronLeft fontSize="large" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50"
              sx={{ color: "black" }}
            >
              <ChevronRight fontSize="large" />
            </IconButton>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </Paper>
    </div>
  );
};

export default ImageCarousel;
