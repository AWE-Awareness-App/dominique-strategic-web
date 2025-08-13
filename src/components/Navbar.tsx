import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Heart, Menu, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CALENDLY_LINKS } from '@/config/app';

export const Navbar = () => {
  const { t } = useLanguage();

  const NavLinks = ({ mobile = false }) => (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      <Link 
        to="/" 
        className="text-white hover:text-primary-soft transition-colors font-medium"
      >
        {t('nav.home')}
      </Link>
      <Link 
        to="/blog" 
        className="text-white hover:text-primary-soft transition-colors font-medium"
      >
        {t('nav.blog')}
      </Link>
      <Link 
        to="/contact" 
        className="text-white hover:text-primary-soft transition-colors font-medium"
      >
        {t('nav.contact')}
      </Link>
      <Link 
        to="/corporate-finance" 
        className="flex items-center text-white hover:text-primary-soft transition-colors font-medium"
      >
        {t('nav.corporateFinance')}
      </Link>
      <Button 
        asChild 
        variant="secondary" 
        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={() => window.open(CALENDLY_LINKS.ONE_HOUR_CONSULT, '_blank')}
      >
        <a href={CALENDLY_LINKS.ONE_HOUR_CONSULT} target="_blank" rel="noopener noreferrer">
          {t('hero.cta')}
        </a>
      </Button>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Takes priority on mobile */}
          <Link to="/" className="flex-shrink-0 z-10">
            <img src="/logo-white.png" alt="Logo" className="h-10 md:h-12" />
          </Link>

          {/* Mobile Navigation - Pushed to the right */}
          <div className="flex-1 flex justify-end items-center space-x-3 md:space-x-6">
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLinks />
            </div>
            
            {/* Language Selector - Positioned absolutely on mobile */}
            <div className="relative z-20">
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-primary to-accent text-white">
                  <div className="mt-8">
                    <NavLinks mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};