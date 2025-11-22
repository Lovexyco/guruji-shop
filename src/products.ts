// src/products.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export const initialProducts: Product[] = [
  {
    id: 1,
    title: "OLO 0.01mm Ultra Thin Condom (10pcs)",
    price: 25000,
    description:
      "OLO မှထုတ်လုပ်သော Ultra Thin 0.01mm Condom (10pcs). Hyaluronic ချောဆီပါဝင်ပြီး အနွေးဓါတ်၊ ခံစားမှုကောင်းမွန်မှုကို မြှင့်တင်ပေးနိုင်ပါတယ်။",
    image: "https://i.ibb.co/wZcx0Zgj/olo-condom.jpg",
  },
  {
    id: 2,
    title: "OLO Warming Feeling (Cup Packaging)",
    price: 25000,
    description:
      "ကွန်ဒုံးအမျိုးအစား Warming Feeling — ချောမွေ့ပြီး အရည်အသွေးမြင့်၊ တစ်ဘူးတွင် 10 ခုပါဝင်ပါသည်။",
    image: "https://i.ibb.co/wFwdxvht/olo-warm.jpg",
  },
];
