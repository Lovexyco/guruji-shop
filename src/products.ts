// src/products.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "အမျိုးသားသုံးပစ္စည်းများ (Men)",
    price: 0,
    description:
      "အမျိုးသားတို့အတွက် ဆန်းသစ်သော ခံစားမှုနှင့် အထိအတွေ့အသစ်များကိုပေးနိုင်သည့် အရည်အသွေးမြင့်ပစ္စည်းများ",
    image: "https://via.placeholder.com/400x250?text=Men+Category",
  },
  {
    id: 2,
    title: "ကွန်ဒုံးများ (Condoms)",
    price: 3500,
    description:
      "အသွင်ခုံဆန်းသစ်ပြီး အရည်အသွေးမြင့်ကွန်ဒုံးအမျိုးအစားများ",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7b82be1d5?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    title: "Massage Oil (Relax & Refresh)",
    price: 6500,
    description: "ရောဂါမဖြစ်အောင် ကာကွယ်ပေးပြီး ခံစားမှုကောင်းမွန်စေတဲ့ Massage Oil",
    image:
      "https://via.placeholder.com/400x250?text=Massage+Oil",
  },
  {
    id: 4,
    title: "Romantic Spray",
    price: 9500,
    description: "အဆင့်မြင့် အနံ့ဓါတ်နှင့် ချစ်သူတွေအတွက် Romantic Mood Booster",
    image:
      "https://via.placeholder.com/400x250?text=Romantic+Spray",
  },
];
