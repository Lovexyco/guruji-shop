import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b shadow-soft transition-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-hero rounded-lg flex items-center justify-center transition-smooth group-hover:scale-110">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-pyidaungsu text-foreground">
              Real Kings
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
            >
              ပင်မစာမျက်နှာ
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
            >
              ကုန်ပစ္စည်းများ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth font-pyidaungsu"
            >
              ဆက်သွယ်ရန်
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-hover transition-smooth font-pyidaungsu"
            >
              စုံစမ်းမေးမြန်းရန်
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth font-pyidaungsu"
            >
              ပင်မစာမျက်နှာ
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth font-pyidaungsu"
            >
              ကုန်ပစ္စည်းများ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth font-pyidaungsu"
            >
              ဆက်သွယ်ရန်
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full font-pyidaungsu"
            >
              စုံစမ်းမေးမြန်းရန်
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
