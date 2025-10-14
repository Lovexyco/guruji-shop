import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-light/20 via-accent/10 to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              ဆက်သွယ်ရန်
            </h2>
            <p className="text-lg text-muted-foreground font-pyidaungsu max-w-2xl mx-auto">
              သင့်လိုအပ်ချက်များအတွက် ကျွန်ုပ်တို့ကို ဆက်သွယ်နိုင်ပါသည်။ ကျွန်ုပ်တို့၏အဖွဲ့သည် အမြဲအဆင်သင့်ရှိပါသည်။
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
            <Card className="border-border/50 bg-card shadow-card hover:shadow-hover transition-smooth animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
                      ဖုန်းဖြင့် ဆက်သွယ်ရန်
                    </h3>
                    <p className="text-muted-foreground font-pyidaungsu text-sm">
                      တနင်္လာနေ့မှ စနေနေ့ (9:00 - 18:00)
                    </p>
                    <a 
                      href="tel:+959420765270" 
                      className="text-primary hover:text-primary/80 transition-smooth font-medium block"
                    >
                      09-420765270
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
                      Viber ဖြင့် ဆက်သွယ်ရန်
                    </h3>
                    <p className="text-muted-foreground font-pyidaungsu text-sm">
                      အမြန်ဆုံး တုံ့ပြန်မှုရရန်
                    </p>
                    <a 
                      href="viber://chat?number=+959420765270" 
                      className="text-primary hover:text-primary/80 transition-smooth font-medium block"
                    >
                      09-420765270
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card shadow-card hover:shadow-hover transition-smooth animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
                      အီးမေးလ်ပို့ရန်
                    </h3>
                    <p className="text-muted-foreground font-pyidaungsu text-sm">
                      အသေးစိတ်မေးမြန်းလိုပါက
                    </p>
                    <a 
                      href="mailto:kmabusiness.market@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-smooth font-medium block break-all"
                    >
                      kmabusiness.market@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-pyidaungsu">
                      ရုံးလိပ်စာ
                    </h3>
                    <p className="text-muted-foreground font-pyidaungsu text-sm">
                      တနင်္လာနေ့မှ စနေနေ့ လာရောက်ဝယ်ယူနိုင်ပါသည်
                    </p>
                    <p className="text-foreground font-pyidaungsu">
                      မြန်မာ (ရန်ကုန်မြို့)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="border-border/50 bg-gradient-hero shadow-card animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  ယခုပင်စတင်အော်ဒါမှာလိုက်ပါ
                </h3>
                <p className="text-primary-foreground/90 font-pyidaungsu text-sm sm:text-base max-w-2xl mx-auto">
                  အထူးလျှော့စျေးများနှင့် အရည်အသွေးမြင့် ပစ္စည်းများကို ယနေ့ပင် ရယူလိုက်ပါ။ 
                  ကျွန်ုပ်တို့၏အဖွဲ့သည် သင့်ကို ကူညီရန် အဆင်သင့်ရှိပါသည်။
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-card hover:bg-card/90 text-foreground shadow-card hover:shadow-hover transition-smooth w-full sm:w-auto font-pyidaungsu"
                  onClick={() => window.open('tel:+959420765270', '_self')}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  ယခုပင်ဖုန်းဆက်ရန်
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto font-pyidaungsu"
                  onClick={() => window.open('viber://chat?number=+959420765270', '_blank')}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Viber မက်ဆေ့ခ်ပို့ရန်
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
