import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
      <Button 
        asChild 
        variant="secondary" 
        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
      >
        <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
          {t('hero.cta')}
        </a>
      </Button>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Heart className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">CoachingHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <LanguageSelector />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSelector />
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
    </nav>
  );
};