"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-[#0B0B0C] text-white min-h-screen pb-16">

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full max-w-6xl mx-auto px-4 py-10">
        <img
          src="/hero/main_couple.png"
          alt="Hero Banner"
          className="w-full rounded-3xl shadow-xl object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 text-center">
          Premium Men & Women Intimacy Store
        </h1>
        <p className="text-center text-gray-300 mt-3">
          High-quality lifestyle products that enhance confidence, attraction,
          and intimacy.
        </p>
      </section>

      {/* 🔥 CATEGORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* MEN */}
          <div className="bg-[#141416] hover:scale-105 transition rounded-2xl p-5 shadow-lg">
            <img
              src="/categories/men.png"
              className="w-full h-44 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mt-3">Men</h3>
            <p className="text-gray-400 text-sm">
              Grooming • Performance • Confidence Boosters
            </p>
          </div>

          {/* WOMEN */}
          <div className="bg-[#141416] hover:scale-105 transition rounded-2xl p-5 shadow-lg">
            <img
              src="/categories/women.png"
              className="w-full h-44 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mt-3">Women</h3>
            <p className="text-gray-400 text-sm">
              Beauty • Sensual • Self-care Enhancers
            </p>
          </div>

          {/* ACCESSORIES */}
          <div className="bg-[#141416] hover:scale-105 transition rounded-2xl p-5 shadow-lg">
            <img
              src="/categories/accessories.png"
              className="w-full h-44 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mt-3">Accessories</h3>
            <p className="text-gray-400 text-sm">
              Perfumes • Sprays • Oils • Eyemasks • More
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-4xl mx-auto mt-14 px-4 grid sm:grid-cols-3 gap-6">

        {/* DELIVERY */}
        <div className="flex flex-col items-center text-center bg-[#141416] p-6 rounded-2xl shadow-lg">
          <img src="/icons/delivery.png" className="w-16 h-16 mb-3" />
          <h4 className="font-bold text-lg">Fast Delivery</h4>
          <p className="text-gray-400 text-sm">Quick & secure shipping</p>
        </div>

        {/* SUPPORT */}
        <div className="flex flex-col items-center text-center bg-[#141416] p-6 rounded-2xl shadow-lg">
          <img src="/icons/support.png" className="w-16 h-16 mb-3" />
          <h4 className="font-bold text-lg">24/7 Support</h4>
          <p className="text-gray-400 text-sm">We are always available</p>
        </div>

        {/* BRANDING */}
        <div className="flex flex-col items-center text-center bg-[#141416] p-6 rounded-2xl shadow-lg">
          <img src="/icons/secure.png" className="w-16 h-16 mb-3" />
          <h4 className="font-bold text-lg">Official Shop</h4>
          <p className="text-gray-400 text-sm">Trusted premium products</p>
        </div>

      </section>
    </div>
  );
}
