import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productKitchen from "@/assets/product-kitchen.jpg";
import productDecor from "@/assets/product-decor.jpg";
import productBathroom from "@/assets/product-bathroom.jpg";
import productBedroom from "@/assets/product-bedroom.jpg";

const products = [
  {
    id: 1,
    title: "မီးဖိုချောင်သုံးပစ္စည်းများ",
    description: "အရည်အသွေးမြင့် ချက်ပြုတ်ရေးကိရိယာများ၊ ပန်းကန်လုံးများနှင့် သိုလှောင်ရေးပစ္စည်းများ",
    image: productKitchen,
    featured: true,
  },
  {
    id: 2,
    title: "အိမ်အလှဆင်ပစ္စည်းများ",
    description: "လှပသောပန်းအိုးများ၊ အလှဆင်ပစ္စည်းများနှင့် နံရံအလှဆင်များ",
    image: productDecor,
    featured: false,
  },
  {
    id: 3,
    title: "ရေချိုးခန်းသုံးပစ္စည်းများ",
    description: "ခေတ်မီသောရေချိုးခန်းကိရိယာများ၊ သိုလှောင်ရေးနှင့် အလှပြင်ပစ္စည်းများ",
    image: productBathroom,
    featured: false,
  },
  {
    id: 4,
    title: "အိပ်ခန်းသုံးပစ္စည်းများ",
    description: "နူးညံ့သောအိပ်ယာစုံများ၊ ခေါင်းအုံးများနှင့် အိပ်ခန်းအလှဆင်များ",
    image: productBedroom,
    featured: false,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary font-pyidaungsu">
              ကျွန်ုပ်တို့၏ကုန်ပစ္စည်းများ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            အရည်အသွေးမြင့် ထုတ်ကုန်များ
          </h2>
          <p className="text-lg text-muted-foreground font-pyidaungsu">
            သင့်အိမ်အတွက် လိုအပ်သမျှကို တစ်နေရာတည်းတွင် ရှာဖွေပါ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-border/50 bg-card hover:shadow-hover transition-smooth cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <CardContent className="p-4 sm:p-6 space-y-3">
                {product.featured && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent/50 rounded-md text-xs font-medium text-accent-foreground font-pyidaungsu">
                    <Sparkles className="w-3 h-3" />
                    အထူးပစ္စည်း
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-smooth font-pyidaungsu">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-pyidaungsu">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card space-y-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="text-lg font-semibold text-foreground font-pyidaungsu">
              အမြန်ပို့ဆောင်ခြင်း
            </h4>
            <p className="text-sm text-muted-foreground font-pyidaungsu">
              မြို့တွင်း 24 နာရီအတွင်း ပို့ဆောင်ပေးပါသည်
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card space-y-3 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">✓</span>
            </div>
            <h4 className="text-lg font-semibold text-foreground font-pyidaungsu">
              အာမခံချက်
            </h4>
            <p className="text-sm text-muted-foreground font-pyidaungsu">
              100% ကျေနပ်မှု အာမခံချက်ဖြင့်
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card space-y-3 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="text-lg font-semibold text-foreground font-pyidaungsu">
              အရည်အသွေးမြင့်
            </h4>
            <p className="text-sm text-muted-foreground font-pyidaungsu">
              ရွေးချယ်ထားသော ပစ္စည်းများသာ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
