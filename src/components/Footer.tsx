import { ShoppingBag, Facebook, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-pyidaungsu">Guruji</span>
            </div>
            <p className="text-sm text-muted-foreground font-pyidaungsu leading-relaxed">
              အိမ်ထောင်ရေးသုံးပစ္စည်းများအရောင်းဆိုင်
            </p>
            <p className="text-sm text-muted-foreground font-pyidaungsu">
              အရည်အသွေးမြင့် ကုန်ပစ္စည်းများကို သင့်အိမ်သို့ ပို့ဆောင်ပေးပါသည်။
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
              အမြန်လင့်ခ်များ
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('hero');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
                >
                  ပင်မစာမျက်နှာ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('products');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
                >
                  ကုန်ပစ္စည်းများ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
                >
                  ဆက်သွယ်ရန်
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
              ဆက်သွယ်ရန်
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+959123456789" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-smooth group"
              >
                <Phone className="w-4 h-4 group-hover:text-primary transition-smooth" />
                <span>+95 9 123 456 789</span>
              </a>
              <a 
                href="viber://chat?number=+959123456789" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-smooth group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-primary transition-smooth" />
                <span className="font-pyidaungsu">Viber မက်ဆေ့ခ်ပို့ရန်</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-smooth group"
              >
                <Facebook className="w-4 h-4 group-hover:text-primary transition-smooth" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground font-pyidaungsu">
            © {currentYear} Guruji. အခွင့်အရေးအားလုံးကို လေးစားဆက်ဆံထားရှိသည်။
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
