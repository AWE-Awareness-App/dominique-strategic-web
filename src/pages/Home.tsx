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
      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <CardTitle className="text-xl text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </CardDescription>
      <Button 
        className="w-full bg-gradient-hero hover:shadow-soft"
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
      calendlyLink: 'https://calendly.com/your-happiness-coaching'
    },
    {
      icon: Brain,
      title: t('services.health.title'),
      description: t('services.health.description'),
      calendlyLink: 'https://calendly.com/your-health-tech-coaching'
    },
    {
      icon: Users,
      title: t('services.couples.title'),
      description: t('services.couples.description'),
      calendlyLink: 'https://calendly.com/your-couples-coaching'
    },
    {
      icon: TrendingUp,
      title: t('services.organization.title'),
      description: t('services.organization.description'),
      calendlyLink: 'https://calendly.com/your-organization-coaching'
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
                onClick={() => window.open('https://calendly.com/your-main-calendly-link', '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
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
              Personalized coaching tailored to your unique goals and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
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
              onClick={() => window.open('https://calendly.com/your-free-consultation', '_blank')}
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