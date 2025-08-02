import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Your Life Through Personalized Coaching',
    'hero.subtitle': 'Expert guidance for happiness, relationships, health, and organizational growth',
    'hero.cta': 'Book a Session',
    
    // Services
    'services.title': 'Our Coaching Services',
    'services.happiness.title': 'Happiness & Kindness',
    'services.happiness.description': 'Discover inner peace, cultivate kindness, and build lasting happiness through personalized coaching sessions.',
    'services.health.title': 'Health & Technology',
    'services.health.description': 'Balance your digital life with physical wellness. Learn to leverage technology for better health outcomes.',
    'services.couples.title': 'Couples & Intimacy',
    'services.couples.description': 'Strengthen your relationship and enhance intimacy through guided coaching for couples.',
    'services.organization.title': 'Organizational Growth',
    'services.organization.description': 'Scale your business with strategic coaching focused on sustainable growth and team development.',
    
    // Blog
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Discover tips, insights, and inspiration for your personal and professional growth',
    'blog.readMore': 'Read More',
    
    // Founder Section
    'founder.name': 'Christian Dominique, BSc, MBA',
    'founder.title': 'Founder and Executive Director',
    'founder.description': 'Psychology, neuroscience, business strategy and coach. Christian is a digital wellness and happiness expert. He is an author and speaker with technology, international management and scientific research expertise.',
    'founder.phone': 'Phone: (514) 501-1194',
    'founder.email': 'Email: christian@dominiquestrategic.com',
    'founder.office': 'Office: 88 Boul. St. Joseph E., Montreal, QC – H2T 1H1',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your transformation journey?',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.scheduleCall': 'Schedule a Free Consultation',
    
    // Footer
    'footer.tagline': 'Empowering growth through personalized coaching',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transformez Votre Vie Grâce au Coaching Personnalisé',
    'hero.subtitle': 'Conseils d\'experts pour le bonheur, les relations, la santé et la croissance organisationnelle',
    'hero.cta': 'Réserver une Séance',
    
    // Services
    'services.title': 'Nos Services de Coaching',
    'services.happiness.title': 'Bonheur et Bienveillance',
    'services.happiness.description': 'Découvrez la paix intérieure, cultivez la bienveillance et construisez un bonheur durable grâce à des séances de coaching personnalisées.',
    'services.health.title': 'Santé et Technologie',
    'services.health.description': 'Équilibrez votre vie numérique avec le bien-être physique. Apprenez à utiliser la technologie pour de meilleurs résultats de santé.',
    'services.couples.title': 'Couples et Intimité',
    'services.couples.description': 'Renforcez votre relation et améliorez l\'intimité grâce au coaching guidé pour couples.',
    'services.organization.title': 'Croissance Organisationnelle',
    'services.organization.description': 'Développez votre entreprise avec un coaching stratégique axé sur la croissance durable et le développement d\'équipe.',
    
    // Blog
    'blog.title': 'Dernières Perspectives',
    'blog.subtitle': 'Découvrez des conseils, des perspectives et de l\'inspiration pour votre croissance personnelle et professionnelle',
    'blog.readMore': 'Lire Plus',
    
    // Contact
    // Founder Section - French
    'founder.name': 'Christian Dominique, BSc, MBA',
    'founder.title': 'Fondateur et Directeur Général',
    'founder.description': 'Psychologie, neurosciences, stratégie d\'entreprise et coaching. Christian est un expert en bien-être numérique et en bonheur. Il est auteur et conférencier avec une expertise en technologie, gestion internationale et recherche scientifique.',
    'founder.phone': 'Téléphone : (514) 501-1194',
    'founder.email': 'Courriel : christian@dominiquestrategic.com',
    'founder.office': 'Bureau : 88 Boul. St. Joseph E., Montréal, QC – H2T 1H1',
    
    'contact.title': 'Nous Contacter',
    'contact.subtitle': 'Prêt à commencer votre parcours de transformation ?',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.scheduleCall': 'Planifier une Consultation Gratuite',
    
    // Footer
    'footer.tagline': 'Favoriser la croissance grâce au coaching personnalisé',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions de Service',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Transforma Tu Vida a Través del Coaching Personalizado',
    'hero.subtitle': 'Orientación experta para la felicidad, relaciones, salud y crecimiento organizacional',
    'hero.cta': 'Reservar una Sesión',
    
    // Services
    'services.title': 'Nuestros Servicios de Coaching',
    'services.happiness.title': 'Felicidad y Bondad',
    'services.happiness.description': 'Descubre la paz interior, cultiva la bondad y construye felicidad duradera a través de sesiones de coaching personalizadas.',
    'services.health.title': 'Salud y Tecnología',
    'services.health.description': 'Equilibra tu vida digital con el bienestar físico. Aprende a aprovechar la tecnología para mejores resultados de salud.',
    'services.couples.title': 'Parejas e Intimidad',
    'services.couples.description': 'Fortalece tu relación y mejora la intimidad a través del coaching guiado para parejas.',
    'services.organization.title': 'Crecimiento Organizacional',
    'services.organization.description': 'Escala tu negocio con coaching estratégico enfocado en crecimiento sostenible y desarrollo de equipos.',
    
    // Blog
    'blog.title': 'Últimas Perspectivas',
    'blog.subtitle': 'Descubre consejos, perspectivas e inspiración para tu crecimiento personal y profesional',
    'blog.readMore': 'Leer Más',
    
    // Contact
    // Founder Section - Spanish
    'founder.name': 'Christian Dominique, BSc, MBA',
    'founder.title': 'Fundador y Director Ejecutivo',
    'founder.description': 'Psicología, neurociencia, estrategia empresarial y coaching. Christian es un experto en bienestar digital y felicidad. Es autor y orador con experiencia en tecnología, gestión internacional e investigación científica.',
    'founder.phone': 'Teléfono: (514) 501-1194',
    'founder.email': 'Correo electrónico: christian@dominiquestrategic.com',
    'founder.office': 'Oficina: 88 Boul. St. Joseph E., Montreal, QC – H2T 1H1',
    
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para comenzar tu viaje de transformación?',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Dirección de Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.scheduleCall': 'Programar una Consulta Gratuita',
    
    // Footer
    'footer.tagline': 'Empoderando el crecimiento a través del coaching personalizado',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};