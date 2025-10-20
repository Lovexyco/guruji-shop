"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export default function ProductPage() {
  const isAdmin = false; // Admin mode → true / Public → false

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "အမျိုးသားသုံးပစ္စည်းများ (Men)",
      description: "အမျိုးသားတို့အတွက်ဆန်သစ်တဲ့ ခံစားမှုနှင့်အထိအတွေ့များစွာပေးနိုင်‌သည့်အရည်အသွေးမြင့်ပစ္စည်းဆန်းများ",
      image:
 "https://via.placeholder.com/400x250?text=အမျိုးသားသုံး",
    },
    {
      id: 2,
      title: "ကွန်ဒုံးများ (condoms)",
      description: "အသွင်ဆန်းပြီးအရည်အသွေးပြည့်မှီသောကွန်ဒုံးအမျိုးအစားများ",
      image:
     "https://images.unsplash.com/photo-1600185365483-26d7b82be1d5?auto=format&fit=crop&w=600&q=60",
    },
  ]);

  // form data
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price) return alert("Enter full info!");

    const product: Product = {
      id: Date.now(),
      title: newProduct.title,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      image: newProduct.image,
    };

    setProducts([...products, product]);
    setNewProduct({ title: "", price: "", description: "", image: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">🛍️ Product List</h2>

      {/* ✅ Add Product Form (Admin only) */}
      {isAdmin && (
        <div className="border p-4 rounded-2xl mb-6 bg-gray-50 shadow-sm">
          <h3 className="font-semibold mb-2">➕ Add New Product</h3>
          <input
            className="w-full mb-2 p-2 border rounded"
            placeholder="Product Title"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <textarea
            className="w-full mb-2 p-2 border rounded"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            placeholder="Image URL (optional)"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button
            onClick={handleAddProduct}
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
          >
            Add Product
          </button>
        </div>
      )}

      {/* ✅ Product List */}
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl p-4 shadow hover:shadow-md transition"
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
            )}
            <h4 className="font-bold text-lg">{p.title}</h4>
            <p className="text-gray-600 text-sm">{p.description}</p>
            <p className="font-semibold text-yellow-600 mt-2">
              💰 {p.price.toLocaleString()} Ks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
