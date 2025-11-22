import React from "react";
import { products } from "../products";

export default function HomePage() {
  return (
    <div className="w-full text-gray-800">

      {/* 🌟 HERO SECTION */}
      <div className="bg-blue-900 text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Rainy Offers For Hot Summer!
            </h1>
            <p className="opacity-80 mb-6">
              Best quality products for daily lifestyle & couples.
            </p>
            <button className="bg-yellow-400 px-6 py-3 font-semibold rounded-lg text-black">
              Shop Now
            </button>
          </div>

          <img
            src="/banner/main_girl.png"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* 🟦 CATEGORY SECTION (Men / Women / Accessories) */}
      <div className="py-12 px-6 md:px-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img src="/categories/men.png" className="h-56 w-full object-cover" />
          <div className="p-4 font-semibold text-lg text-center">MEN</div>
        </div>

        <div className="rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img src="/categories/women.png" className="h-56 w-full object-cover" />
          <div className="p-4 font-semibold text-lg text-center">WOMEN</div>
        </div>

        <div className="rounded-xl shadow hover:shadow-xl transition overflow-hidden">
          <img src="/categories/accessories.png" className="h-56 w-full object-cover" />
          <div className="p-4 font-semibold text-lg text-center">Accessories</div>
        </div>
      </div>

      {/* ⭐ FEATURED PRODUCTS */}
      <div className="px-6 md:px-12 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-sm hover:shadow-md transition p-4"
            >
              <img
                src={item.image}
                className="h-48 w-full object-cover rounded-lg mb-3"
              />
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-500 text-sm">{item.category}</div>
              <div className="text-blue-700 font-bold mt-2">
                {item.price.toLocaleString()} Ks
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📢 MIDDLE BANNER */}
      <div className="bg-blue-100 px-6 md:px-12 py-14 my-12 text-center rounded-2xl">
        <h3 className="text-3xl font-bold mb-3">Special Edition</h3>
        <p className="text-gray-600 mb-5">
          Limited stock for this week only. Shop premium collections.
        </p>
        <button className="bg-blue-800 text-white px-6 py-3 rounded-lg">
          Explore Now
        </button>
      </div>

      {/* ⭐ SERVICES ROW */}
      <div className="py-12 px-6 md:px-12 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <img src="/icons/delivery.png" className="mx-auto h-12 mb-3" />
          <div className="font-semibold">Fast Delivery</div>
        </div>
        <div>
          <img src="/icons/quality.png" className="mx-auto h-12 mb-3" />
          <div className="font-semibold">Premium Quality</div>
        </div>
        <div>
          <img src="/icons/support.png" className="mx-auto h-12 mb-3" />
          <div className="font-semibold">24/7 Support</div>
        </div>
        <div>
          <img src="/icons/payment.png" className="mx-auto h-12 mb-3" />
          <div className="font-semibold">Secure Payment</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        Guruji Shop © {new Date().getFullYear()} — All Rights Reserved
      </footer>
    </div>
  );
      }
