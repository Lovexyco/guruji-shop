import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Checkout() {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order message for Viber
    const orderItems = items
      .map((item) => `• ${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} Ks`)
      .join("\n");
    
    const orderMessage = `
📦 New Order from Real Kings

👤 Customer: ${formData.name}
📞 Phone: ${formData.phone}
📍 Address: ${formData.address}
${formData.notes ? `📝 Notes: ${formData.notes}` : ""}

🛒 Order Items:
${orderItems}

💰 Total: ${getCartTotal().toLocaleString()} Ks
    `.trim();

    // Open Viber with the order message
    const encodedMessage = encodeURIComponent(orderMessage);
    window.open(`viber://chat?number=09788851201&text=${encodedMessage}`, "_blank");
    
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Order Submitted!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We will contact you shortly to confirm your order.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={() => navigate("/")} className="w-full">
                Continue Shopping
              </Button>
              <a href="viber://chat?number=09788851201" className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Contact via Viber
                </Button>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Add some products to your cart before checking out.
            </p>
            <Button onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Order Summary */}
          <div className="bg-card rounded-xl p-6 border">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-primary font-semibold">
                      {(item.price * item.quantity).toLocaleString()} Ks
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">{getCartTotal().toLocaleString()} Ks</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-card rounded-xl p-6 border">
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="09xxxxxxxxx"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter your full delivery address"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Order Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any special instructions..."
                  rows={2}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Place Order via Viber
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your order will be sent to our Viber for confirmation
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
