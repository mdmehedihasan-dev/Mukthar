"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/hero.png",
    name: "La Marzocco GB5 S",
    price: "SAR 44,850.00",
    oldPrice: "SAR 50,000.00",
  },
  {
    id: 2,
    image: "/hero.png",
    name: "La Marzocco Linea PB",
    price: "SAR 39,900.00",
    oldPrice: "SAR 45,000.00",
  },
  {
    id: 3,
    image: "/hero.png",
    name: "Nuova Simonelli Appia Life",
    price: "SAR 21,500.00",
    oldPrice: "SAR 25,000.00",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"
      >
        <ChevronLeft size={30} className="text-white" />
      </button>

      <div className="relative z-10 text-center text-white px-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <img src={slides[currentIndex].image} alt={slides[currentIndex].name} />
        </div>

        {/* Product Name & Price */}
        <div className="flex items-center justify-center space-x-8">
          <h1 className="text-4xl font-bold mt-2">{slides[currentIndex].name}</h1>
          <p className="text-lg mt-2">
            <span className="font-semibold">{slides[currentIndex].price}</span>
            <span className="line-through text-gray-400 ml-2 ">
              {slides[currentIndex].oldPrice}
            </span>
          </p>
        </div>

        <button className="mt-6 px-20 py-3 bg-[#69704d] text-white">
          View All Deals
        </button>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full hover:bg-gray-700"
      >
        <ChevronRight size={30} className="text-white" />
      </button>
    </section>
  );
}
