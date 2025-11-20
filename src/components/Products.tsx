import React, { useState } from "react";
import { products as initialProducts } from "../products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export default function ProductPage() {
  const isAdmin = false;

  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price)
      return alert("Enter full info!");

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
            placeholder="Image URL"
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
