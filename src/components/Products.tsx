import React from "react";
import { products, Product } from "@/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";
import { toast } from "sonner";

export default function ProductPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `${product.price.toLocaleString()} Ks`,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center font-pyidaungsu">
        🛍️ ကုန်ပစ္စည်းများ
      </h2>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p, index) => (
          <div
            key={p.id}
            className="bg-card border rounded-2xl p-4 shadow-card hover:shadow-hover transition-smooth flex flex-col"
          >
            <p className="text-sm text-muted-foreground mb-2">
              🏷️ Item {index + 1}
            </p>

            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}

            <h4 className="font-bold text-lg text-foreground">{p.name}</h4>
            <p className="text-muted-foreground text-sm mt-1 flex-1 line-clamp-2">
              {p.description}
            </p>
            <p className="font-semibold text-primary mt-3 text-lg">
              💰 {p.price.toLocaleString()} Ks
            </p>

            <Button
              onClick={() => handleAddToCart(p)}
              className="mt-4 w-full gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
