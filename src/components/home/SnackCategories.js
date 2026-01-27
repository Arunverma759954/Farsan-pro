"use client";

import Image from "next/image";

const categories = [
  { name: "Bhakawari", image: "/products/bhakarwadi.jpeg", products: 50 },
  { name: "Kachori", image: "/products/kachori.jpeg", products: 75 },
  { name: "Wafers", image: "/products/wafers.jpeg", products: 60 },
  { name: "Chips", image: "/products/chips.jpeg", products: 80 },
  { name: "Farsan Mix", image: "/products/soyabhel.jpeg", products: 90 },
];

export default function SnackCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-12 md:text-center">
          Explore Our Snacks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-yellow-50 rounded-xl p-4 sm:p-6 md:p-6 shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-[200px]"
            >
              {/* Circle with image filling edges */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-4 sm:mb-5 rounded-full flex items-center justify-center bg-yellow-200 relative overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-green-800 text-center">
                {cat.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-sm text-gray-500 text-center">
                {cat.products}+ Products
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
