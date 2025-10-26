import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner-wide.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Banner Image */}
      <div className="absolute top-16 sm:top-20 left-0 right-0 z-0 h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden">
        <img 
          src={heroBanner} 
          alt="Real Kings Banner" 
          className="w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[200px] sm:pt-[250px] md:pt-[350px]">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 backdrop-blur-sm rounded-full border border-accent-foreground/10 animate-scale-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground font-pyidaungsu">
              အရည်အသွေးမြင့် ကုန်ပစ္စည်းများ
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Real Kings
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-pyidaungsu font-medium">
            အိမ်ထောင်ရေးသုံးပစ္စည်းများအရောင်းဆိုင်
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-pyidaungsu leading-relaxed">
            သင့်အိမ်အတွက် လိုအပ်သော အရည်အသွေးမြင့် ပစ္စည်းများကို ကျွန်ုပ်တို့ဆီတွင် ရှာဖွေနိုင်ပါသည်။ 
            မိသားစုအတွက် လုံခြုံစိတ်ချရသော ကုန်ပစ္စည်းများကို ပေးအပ်လျက်ရှိပါသည်။
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-hover transition-smooth group w-full sm:w-auto font-pyidaungsu"
            >
              ယခုပင် စုံစမ်းရန်
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 w-full sm:w-auto font-pyidaungsu"
            >
              ကုန်ပစ္စည်းများကြည့်ရန်
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 sm:pt-12">
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-pyidaungsu">ကုန်ပစ္စည်းများ</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-pyidaungsu">ကျေနပ်သောဖောက်သည်များ</div>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-pyidaungsu">အာမခံချက်</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
