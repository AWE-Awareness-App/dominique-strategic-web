import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BarChart2, Briefcase, DollarSign, Handshake, PieChart, Target } from 'lucide-react';
import { CALENDLY_LINKS } from '@/config/app';

export const CorporateFinance = () => {
  const { t, language } = useLanguage();

  // Use translations when available, fallback to English
  const getTranslatedContent = () => {
    if (language === 'fr') {
      return {
        corporateFinance: {
          title: t('corporateFinance.hero.title'),
          description1: t('corporateFinance.overview.description1'),
          description2: t('corporateFinance.overview.description2'),
          approach: t('corporateFinance.overview.approach')
        },
        portfolioManagement: {
          title: t('portfolioManagement.title'),
          description: t('portfolioManagement.description'),
          strategicAllocation: t('portfolioManagement.strategicAllocation'),
          portfolioDesign: t('portfolioManagement.portfolioDesign')
        }
      };
    }
    
    if (language === 'es') {
      return {
        corporateFinance: {
          title: t('corporateFinance.hero.title'),
          description1: t('corporateFinance.overview.description1'),
          description2: t('corporateFinance.overview.description2'),
          approach: t('corporateFinance.overview.approach')
        },
        portfolioManagement: {
          title: t('portfolioManagement.title'),
          description: t('portfolioManagement.description'),
          strategicAllocation: t('portfolioManagement.strategicAllocation'),
          portfolioDesign: t('portfolioManagement.portfolioDesign')
        }
      };
    }

    // Default English content
    return {
      corporateFinance: {
        title: 'Corporate Finance Advisory',
        description1: 'We provide the full spectrum of corporate finance advice to all businesses. This includes advising shareholders, directors and investors who are going through strategic change such as acquiring or selling all or part of a business, raising funds or exploring new business opportunities.',
        description2: 'DSC is a highly specialized firm of corporate finance consultants providing its services. Whether advising individuals, owner-managed businesses, listed companies, or international entities, our goal is to work closely with our clients and help them achieve their ambitions. Our clients include publicly traded and privately held companies, government entities and investment organizations such as private equity firms and hedge funds. Our approach revolves around exceptional client service and the key to our success has been a result of the deep relationships we have built with our clients.',
        approach: 'We view ourselves as your partners, rather than service providers, and are here to support you throughout the business life-cycle – be it Corporate Strategy, M&A, Valuations, Due-diligence, Capital Raising or IPOs.'
      },
      portfolioManagement: {
        title: 'Portfolio Management Advisory',
        description: 'We help clients to optimise their long-term asset allocation, providing support with;',
        strategicAllocation: 'Strategic asset allocation: DSC supports clients in setting the most suitable long-term strategic asset mix for their specific needs. Leveraging world-leading technology, we assist both investors without explicit liabilities (such as endowments and family offices) and those that require detailed asset-liability balance sheet modelling (pensions, insurers).',
        portfolioDesign: 'Portfolio Design: The DSC Portfolio Solutions team helps investors to build portfolios that fit their unique circumstances and objectives. Blending quantitative and qualitative portfolio construction with robust implementation planning, dedicated solutions strategists and asset class specialists support each step of the process.'
      }
    };
  };

  const content = getTranslatedContent();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {content.corporateFinance.title}
            </h1>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-8 py-4"
                onClick={() => window.open(CALENDLY_LINKS.ONE_HOUR_CONSULT, '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                {t('contact.scheduleCall')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">{content.corporateFinance.description1}</p>
              <p className="mb-6">{content.corporateFinance.description2}</p>
              <p className="text-foreground/90 italic">{content.corporateFinance.approach}</p>
            </div>
          </div>
        </div>
      </section>



      {/* Portfolio Management Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {content.portfolioManagement.title}
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">{content.portfolioManagement.description}</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{content.portfolioManagement.strategicAllocation}</span>
                </li>
                <li className="flex items-start">
                  <BarChart2 className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>{content.portfolioManagement.portfolioDesign}</span>
                </li>
              </ul>
              <div className="mt-10 text-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white hover:shadow-soft text-lg px-8 py-6"
                  onClick={() => window.open(CALENDLY_LINKS.ONE_HOUR_CONSULT, '_blank')}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {t('contact.scheduleCall')}
                </Button>
              </div>
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
              {t('corporateFinance.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('corporateFinance.cta.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-warm text-lg px-12 py-4"
              onClick={() => window.open(CALENDLY_LINKS.ONE_HOUR_CONSULT, '_blank')}
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

export default CorporateFinance;
