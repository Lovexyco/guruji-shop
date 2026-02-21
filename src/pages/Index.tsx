"use client";
import React from "react";
import { products } from "@/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, MessageCircle, Package, Truck, Shield, Users, Send } from "lucide-react";
import { toast } from "sonner";

export default function HomePage() {
  const { addToCart } = useCart();

  const bestSellers = products.slice(0, 4);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `${product.price.toLocaleString()} Ks`,
    });
  };

  const scrollToProducts = () => {
    const el = document.getElementById("best-sellers");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground min-h-screen pb-16">

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/main_couple.png"
            alt="Real Kings Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 sm:py-32 md:py-40 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Boost Confidence.<br />
            <span className="text-primary-foreground bg-primary/80 px-3 py-1 rounded-lg inline-block mt-2">
              Enhance Performance.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            Premium couple lifestyle products with discreet packaging and fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="w-full sm:w-auto gap-2 text-base shadow-hover"
            >
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="https://t.me/realkings_adm" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Message on Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUST & SAFETY ROW ═══════════════════ */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: Package, title: "Discreet Packaging", desc: "Guaranteed" },
            { icon: Shield, title: "Cash on Delivery", desc: "Available" },
            { icon: Truck, title: "Fast & Secure", desc: "Delivery" },
            { icon: Users, title: "1000+", desc: "Satisfied Customers" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-4 text-center shadow-card flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-sm text-foreground leading-tight">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ BEST SELLERS ═══════════════════ */}
      <section id="best-sellers" className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          🔥 Best Sellers
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((p) => (
            <div
              key={p.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h4 className="font-bold text-sm sm:text-base text-foreground line-clamp-2">{p.name}</h4>
                <p className="font-semibold text-primary mt-1 text-base sm:text-lg">
                  {p.price.toLocaleString()} Ks
                </p>
                <Button
                  onClick={() => handleAddToCart(p)}
                  size="sm"
                  className="mt-3 w-full gap-1.5 text-xs sm:text-sm"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ PRIVACY REASSURANCE BANNER ═══════════════════ */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
            Your Privacy is Our Priority
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            All orders are packed discreetly with no product name on the package. 
            Your personal information is always kept confidential.
          </p>
        </div>
      </section>

      {/* ═══════════════════ CATEGORY SECTION ═══════════════════ */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              img: "/assets/categories/men.png",
              title: "Men",
              desc: "Performance sprays, condoms & confidence boosters",
              alt: "Men Category",
            },
            {
              img: "/assets/categories/women.png",
              title: "Women",
              desc: "Sensual wear, beauty enhancers & self-care essentials",
              alt: "Women Category",
            },
            {
              img: "/assets/categories/accessories.png",
              title: "Accessories",
              desc: "Perfumes, oils, toys & intimate accessories",
              alt: "Accessories Category",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="group bg-card border border-border hover:border-primary/30 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ FEATURES ROW ═══════════════════ */}
      <section className="max-w-4xl mx-auto mt-16 px-4 grid sm:grid-cols-3 gap-4">
        {[
          { img: "/assets/icons/delivery.png", title: "Fast Delivery", desc: "Quick & secure shipping" },
          { img: "/assets/icons/support.png", title: "24/7 Support", desc: "We are always available" },
          { img: "/assets/icons/secure.png", title: "Official Shop", desc: "Trusted premium products" },
        ].map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center bg-card border border-border p-6 rounded-2xl shadow-card">
            <img src={f.img} alt={f.title} className="w-14 h-14 mb-3" loading="lazy" />
            <h4 className="font-bold text-base text-foreground">{f.title}</h4>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* ═══════════════════ STICKY TELEGRAM BUTTON ═══════════════════ */}
      <a
        href="https://t.me/realkings_adm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-3 shadow-hover flex items-center gap-2 transition-smooth hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">Chat on Telegram</span>
      </a>
    </div>
  );
}
