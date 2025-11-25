"use client";
import React, { useState } from "react";
import { products as initialProducts, Product } from "@/products";

export default function ProductPage() {
  const isAdmin = false; // Admin → true (for adding product)
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price)
      return alert("Please fill all required fields!");

    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      image: newProduct.image,
      category: newProduct.category,
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", description: "", image: "", category: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">🛍️ Product List</h2>

      {/* Admin Add Form */}
      {isAdmin && (
        <div className="border p-4 rounded-2xl mb-6 bg-gray-50 shadow-sm">
          <h3 className="font-semibold mb-2">➕ Add New Product</h3>
          <input
            className="w-full mb-2 p-2 border rounded"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
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

          <input
            className="w-full mb-2 p-2 border rounded"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
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

      {/* Product List */}
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((p, index) => (
          <div
            key={p.id}
            className="border rounded-2xl p-4 shadow hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-1">
              🏷️ Item {index + 1}
            </p>

            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
            )}

            <h4 className="font-bold text-lg">{p.name}</h4>
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
