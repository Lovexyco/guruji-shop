
import React, { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "အမျိုးသားသုံးပစ္စည်းများ (Men)",
      description: "အမျိုးသားတို့အတွက်ဆန်သစ်တဲ့ ခံစားမှုနှင့်အထိအတွေ့များစွာပေးနိုင်‌သည့်အရည်အသွေးမြင့်ပစ္စည်းဆန်းများ",
      image: "https://via.placeholder.com/400x250?text=အမျိုးသားသုံး",
    },
    {
      id: 2,
      title: "ကွန်ဒုံးများ (condoms)",
      description: "အသွင်ဆန်းပြီးအရည်အသွေးပြည့်မှီသောကွန်ဒုံးအမျိုးအစားများ",
      image: "https://via.placeholder.com/400x250?text=ကွန်ဒုံး",
    },
  ]);

  // New product data
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price) {
      alert("Please fill in the product title and price!");
      return;
    }

    const productToAdd = { ...newProduct, id: Date.now() };
    setProducts([...products, productToAdd]);
    setNewProduct({ id: 0, title: "", price: 0, description: "", image: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🛍 Product List
      </h1>

      {/* Add new product form */}
      <div className="bg-white p-5 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">
          ➕ Add New Product
        </h2>
        <div className="grid gap-3">
          <input
            type="text"
            placeholder="Product Title"
            className="border rounded-xl p-2"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price (Ks)"
            className="border rounded-xl p-2"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: Number(e.target.value),
              })
            }
          />
          <textarea
            placeholder="Description"
            className="border rounded-xl p-2"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            className="border rounded-xl p-2"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button
            onClick={handleAddProduct}
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-xl"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product display */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg"
          >
            <img
              src={item.image || "https://via.placeholder.com/400x250?text=No+Image"}
              alt={item.title}
              className="rounded-xl w-full h-48 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="text-amber-600 font-bold mt-2">
              {item.price.toLocaleString()} Ks
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;