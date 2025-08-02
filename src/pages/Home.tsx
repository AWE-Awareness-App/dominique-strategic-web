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

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Meet Dominique
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of experience in strategic consulting and personal development, 
                  Dominique has helped thousands of individuals and organizations achieve breakthrough results. 
                  Combining expertise in psychology, technology, and business strategy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Certified Professional Coach (ICF)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Master's in Organizational Psychology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Former Tech Executive at Fortune 500</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square bg-gradient-soft rounded-2xl p-8 shadow-soft">
                    <div className="w-full h-full bg-muted/30 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">👤</span>
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
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from people whose lives have been transformed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "Dominique's coaching completely transformed my approach to leadership. 
                  The strategies we developed increased my team's productivity by 40%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "Working with Dominique saved our marriage. The communication tools and 
                  intimacy coaching created a deeper connection than we ever thought possible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">M&A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mike & Anna Chen</p>
                    <p className="text-sm text-muted-foreground">Married 12 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "I was struggling with burnout and unhappiness. Dominique's happiness 
                  coaching gave me tools to find joy and purpose again. Life-changing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">David Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted By Leading Organizations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Speaking engagements, consulting partnerships, and transformational work
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-center">
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">GOOGLE</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">MICROSOFT</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">APPLE</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">TESLA</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">NETFLIX</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">STANFORD</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">MIT</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">HARVARD</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">TEDx</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="text-2xl font-bold text-muted-foreground">Y COMBINATOR</div>
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