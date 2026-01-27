"use client";

import { Leaf, Sparkles, Star } from "lucide-react";

export default function ShopClient() {
  return (
    <>
      {/* ===== SHOP BANNER ===== */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-lime-700 pt-40 pb-48 md:pt-52 md:pb-56 overflow-hidden">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating Icons */}
        <Leaf className="absolute top-24 left-10 text-white/25 w-16 h-16 animate-pulse" />
        <Star className="absolute top-40 right-20 text-white/20 w-14 h-14" />
        <Sparkles className="absolute bottom-32 left-1/2 text-white/20 w-12 h-12" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About Our Shop
          </h1>

          <p className="mt-6 text-white/90 max-w-3xl mx-auto text-base md:text-lg">
            Discover authentic Indian farsan snacks crafted with premium
            ingredients, timeless recipes and modern hygiene standards.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="w-full h-28 md:h-36"
          >
            <path
              d="M0,40 C360,120 720,0 1080,80 1260,120 1440,100 1440,100 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SHOP CONTENT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent">
              Farsan That Feels Like Home
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Farsan Gold brings you a wide variety of freshly prepared farsan
              snacks inspired by traditional Indian flavors. Every bite is
              crafted with care, using high-quality ingredients and hygienic
              processes.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ Freshly prepared & hygienically packed</li>
              <li>✔ Authentic recipes with modern quality standards</li>
              <li>✔ Perfect for tea-time, travel & gifting</li>
              <li>✔ Loved by families across India</li>
            </ul>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-green-100 to-lime-100 p-6">
              <h3 className="font-semibold text-green-800">Premium Quality</h3>
              <p className="text-sm text-gray-600 mt-2">
                Only the best ingredients, sourced carefully for great taste.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-lime-100 p-6">
              <h3 className="font-semibold text-green-800">Traditional Taste</h3>
              <p className="text-sm text-gray-600 mt-2">
                Authentic farsan flavors passed down through generations.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-lime-100 to-green-100 p-6">
              <h3 className="font-semibold text-green-800">Fast Delivery</h3>
              <p className="text-sm text-gray-600 mt-2">
                Carefully packed & delivered fresh to your doorstep.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-green-100 to-yellow-100 p-6">
              <h3 className="font-semibold text-green-800">Trusted Brand</h3>
              <p className="text-sm text-gray-600 mt-2">
                Thousands of happy customers trust Farsan Gold.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto md:text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Story
          </h2>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Farsan Gold started with a simple belief – snacks should not just
            taste good, they should feel wholesome. Inspired by traditional
            Indian kitchens, our journey began with small batches of freshly
            prepared farsan made for families who value quality and authenticity.
          </p>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Today, we continue the same tradition with modern processes,
            ensuring every product reaches you fresh, flavorful and full of
            love.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-green-800">
                Rooted in Tradition
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Authentic recipes inspired by Indian households.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-green-800">
                Crafted with Care
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Every batch prepared with attention to quality & hygiene.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-green-800">
                Made for Families
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Snacks perfect for every age and every occasion.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
