import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, calendlyLink }: {
  icon: any;
  title: string;
  description: string;
  calendlyLink: string;
}) => (
  <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
    <CardHeader>
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-xl text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </CardDescription>
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white hover:shadow-soft"
        onClick={() => window.open(calendlyLink, '_blank')}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Book Session
      </Button>
    </CardContent>
  </Card>
);

export const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      title: t('services.happiness.title'),
      description: t('services.happiness.description'),
      calendlyLink: 'https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline'
    },
    {
      icon: Brain,
      title: t('services.health.title'),
      description: t('services.health.description'),
      calendlyLink: 'https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline'
    },
    {
      icon: Users,
      title: t('services.couples.title'),
      description: t('services.couples.description'),
      calendlyLink: 'https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline'
    },
    {
      icon: TrendingUp,
      title: t('services.organization.title'),
      description: t('services.organization.description'),
      calendlyLink: 'https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-8 py-4"
                onClick={() => window.open('https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline', '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-foreground hover:bg-white/10 hover:text-white text-lg px-8 py-4"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">{t('founder.name')}</h2>
                <h3 className="text-xl text-primary font-medium">{t('founder.title')}</h3>
                <p className="text-muted-foreground">
                  {t('founder.description')}
                </p>
                <div>
                  <a href="tel:+15145011194" className="text-muted-foreground hover:text-primary transition-colors">{t('founder.phone')}</a>
                  <br />
                  <a href="mailto:christian@dominiquestrategic.com" className="text-muted-foreground hover:text-primary transition-colors">{t('founder.email')}</a>
                  <br />
                  <span className="text-muted-foreground">{t('founder.office')}</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square bg-gradient-soft rounded-2xl p-8 shadow-soft">
                    <div className="w-full h-full bg-muted/30 rounded-xl flex items-center justify-center">
                      <img src="/images/ChristianDominique.jpg" alt="Dominique" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { id: 1, img: 'mai.thai-HEC_wide.png' },
              { id: 2, img: 'NicolasJimenez_wide.jpg' },
              { id: 3, img: 'Silvia.jpg' },
              { id: 4, img: 'MatthewJafarian_wide2.jpg' },
              { id: 5, img: 'JulianVaras_720_520.jpg' },
              { id: 6, img: 'Limor.jpg' }
            ].map(({ id, img }) => (
              <Card key={id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{t(`testimonials.${id}.quote`)}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                      <img 
                        src={`/testimonials/${img}`} 
                        alt={t(`testimonials.${id}.author`)}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0idy02IGgtNnYtNmgtMnY2SDZ2Mmg2djZoLTIiPjwvc3ZnPg==';
                          target.className = 'w-full h-full bg-gray-100 p-2';
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{t(`testimonials.${id}.author`)}</p>
                      <p className="text-sm text-muted-foreground truncate">{t(`testimonials.${id}.role`)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('logos.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('logos.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-center">
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/601Analytics.jpg" alt="601 Analytics" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/Carebook.jpg" alt="Carebook" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/Cura_2.jpg" alt="Cura" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/HAPLY-1.jpg" alt="HAPLY" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/HEC_bigger-1.jpg" alt="HEC" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/KineSixVR.jpg" alt="KineSix VR" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/McGill-1.jpg" alt="McGill University" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors h-32">
              <img src="/logos/miami-heat8168.jpg" alt="Miami Heat" className="max-h-16 max-w-full object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step towards a more fulfilling life. Book your free consultation today.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-12 py-4"
              onClick={() => window.open('https://calendly.com/christian-coach/1-hour-consult?embed_domain=dominiquestrategic.com&embed_type=Inline', '_blank')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              {t('contact.scheduleCall')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};