import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo-white.png" alt="Dominique Strategic" className="h-12" />
            </Link>
            <p className="text-white/80 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@dominiquestrategic.com" className="hover:text-secondary transition-colors">info@dominiquestrategic.com</a>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+15145011194" className="hover:text-secondary transition-colors">(514) 501-1194</a>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <a href="https://www.google.com/maps/place/88+Boulevard+St+Joseph+E,+Montreal,+Quebec,+H2T+1H1" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">88 Boul. St. Joseph E., Montreal, QC - H2T 1H1</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80 hover:text-secondary transition-colors cursor-pointer">
                  {t('services.happiness.title')}
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-secondary transition-colors cursor-pointer">
                  {t('services.health.title')}
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-secondary transition-colors cursor-pointer">
                  {t('services.couples.title')}
                </span>
              </li>
              <li>
                <span className="text-white/80 hover:text-secondary transition-colors cursor-pointer">
                  {t('services.organization.title')}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-secondary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-secondary transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-secondary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Dominique Strategic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-white/60 hover:text-secondary text-sm cursor-pointer transition-colors">
              {t('footer.privacy')}
            </span>
            <span className="text-white/60 hover:text-secondary text-sm cursor-pointer transition-colors">
              {t('footer.terms')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};