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
    'services.subtitle': 'Personalized coaching tailored to your unique goals and challenges',
    
    // Blog
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Discover tips, insights, and inspiration for your personal and professional growth',
    'blog.readMore': 'Read More',
    'blog.postedOn': 'Posted on',
    'blog.author': 'Author',
    'blog.minRead': 'min read',
    'blog.actions.back': 'Back',
    'blog.actions.backToBlog': 'Back to Blog',
    'blog.error.invalidUrl': 'Invalid URL',
    'blog.error.noPostSpecified': 'No blog post specified in the URL',
    'blog.error.postNotFound': 'Post Not Found',
    'blog.error.postNotFoundDescription': 'The requested blog post could not be found.',
    'blog.error.translationNotFound': 'Translation Not Available',
    'blog.readingTime': 'min read',
    'blog.tags': 'Tags',
    'blog.backToBlog': 'Back to Blog',
    'blog.share': 'Share this post',
    'blog.loadMore': 'Load More Articles',
    'blog.categories.all': 'All',
    'blog.categories.happiness': 'Happiness',
    'blog.categories.health&tech': 'Health & Tech',
    'blog.categories.relationships': 'Relationships',
    'blog.categories.leadership': 'Leadership',
    'blog.categories.digitalhealth': 'Digital Health',
    'blog.categories.wellness': 'Wellness',
    'blog.categories.mindfulness': 'Mindfulness',
    'blog.categories.nutrition': 'Nutrition',
    'blog.categories.work-life': 'Work-Life',
    
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
    
    // Testimonials Section
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': 'Real stories from people whose lives have been transformed',
    'testimonials.1.quote': "Christian has been a mentor, judge, and trainer. His fluency in four languages and consultant experience have been strong assets helping across the world in business creation.",
    'testimonials.1.author': 'Prof Mai Thai',
    'testimonials.1.role': 'HEC Montreal',
    'testimonials.2.quote': "Always insightful, proactive, able to think outside the box and see the big picture. He understands neurology, technology, innovation, fundraising, business, and healthcare systems internationally.",
    'testimonials.2.author': 'Nicolás Jiménez',
    'testimonials.2.role': 'CEO',
    'testimonials.3.quote': "Christian allowed me to be substantially happier in my daily life. My family and friends noticed and benefited.",
    'testimonials.3.author': 'Silvia A.',
    'testimonials.3.role': 'MEng',
    'testimonials.4.quote': "Your output was critical in ensuring our design agency quickly understood the company, product, and goal. Thank you again for all your help.",
    'testimonials.4.author': 'Matthew Jafarian',
    'testimonials.4.role': 'EVP, Business Strategy',
    'testimonials.5.quote': "Christian is vastly aware, comfortable with complex and new ideas, quickly absorbs and consolidates knowledge, and synthesizes key actionable findings.",
    'testimonials.5.author': 'Julian Varas, MD',
    'testimonials.5.role': 'CEO',
    'testimonials.6.quote': "Thanks for the great work on the report and presentation, it was very useful for our business.",
    'testimonials.6.author': 'Limor E.',
    'testimonials.6.role': 'LLB, MBA - Venture Capital Executive',
    
    // Logos Section
    'logos.title': 'Trusted By Leading Organizations',
    'logos.subtitle': 'Speaking engagements, consulting partnerships, and transformational work',
    
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
    'services.subtitle': 'Coaching personnalisé adapté à vos objectifs et défis uniques',
    
    // Blog
    'blog.title': 'Derniers Articles',
    'blog.subtitle': 'Découvrez des conseils, des idées et de l\'inspiration pour votre développement personnel et professionnel',
    'blog.readMore': 'Lire la suite',
    'blog.postedOn': 'Publié le',
    'blog.author': 'Auteur',
    'blog.minRead': 'min de lecture',
    'blog.actions.back': 'Retour',
    'blog.actions.backToBlog': 'Retour au blog',
    'blog.error.invalidUrl': 'URL invalide',
    'blog.error.noPostSpecified': 'Aucun article de blog spécifié dans l\'URL',
    'blog.error.postNotFound': 'Article non trouvé',
    'blog.error.postNotFoundDescription': 'L\'article de blog demandé n\'a pas pu être trouvé.',
    'blog.error.translationNotFound': 'Traduction non disponible',
    'blog.readingTime': 'min de lecture',
    'blog.tags': 'Étiquettes',
    'blog.backToBlog': 'Retour au blog',
    'blog.share': 'Partager cet article',
    'blog.loadMore': 'Charger plus d\'articles',
    'blog.categories.all': 'Tous',
    'blog.categories.happiness': 'Bonheur',
    'blog.categories.health&tech': 'Santé et Techno',
    'blog.categories.relationships': 'Relations',
    'blog.categories.leadership': 'Leadership',
    'blog.categories.digitalhealth': 'Santé Numérique',
    'blog.categories.wellness': 'Bien-être',
    'blog.categories.mindfulness': 'Pleine Conscience',
    'blog.categories.nutrition': 'Nutrition',
    'blog.categories.work-life': 'Vie Professionnelle',
    
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
    
    // Testimonials Section - French
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'Témoignages de personnes dont la vie a été transformée',
    'testimonials.1.quote': "Christian a été un mentor, un juge et un formateur. Sa maîtrise de quatre langues et son expérience en tant que consultant ont été des atouts majeurs pour aider à la création d'entreprises dans le monde entier.",
    'testimonials.1.author': 'Prof Mai Thai',
    'testimonials.1.role': 'HEC Montréal',
    'testimonials.2.quote': "Toujours perspicace, proactif, capable de penser différemment et de voir la situation dans son ensemble. Il comprend la neurologie, la technologie, l'innovation, le financement, les affaires et les systèmes de santé à l'échelle internationale.",
    'testimonials.2.author': 'Nicolás Jiménez',
    'testimonials.2.role': 'PDG',
    'testimonials.3.quote': "Christian m'a permis d'être considérablement plus heureuse dans ma vie quotidienne. Ma famille et mes amis l'ont remarqué et en ont bénéficié.",
    'testimonials.3.author': 'Silvia A.',
    'testimonials.3.role': 'MEng',
    'testimonials.4.quote': "Votre contribution a été essentielle pour que notre agence de design comprenne rapidement l'entreprise, le produit et l'objectif. Merci encore pour toute votre aide.",
    'testimonials.4.author': 'Matthew Jafarian',
    'testimonials.4.role': 'Vice-président exécutif, Stratégie d\'entreprise',
    'testimonials.5.quote': "Christian est extrêmement conscient, à l'aise avec les idées complexes et nouvelles, absorbe et consolide rapidement les connaissances, et synthétise des résultats exploitables clés.",
    'testimonials.5.author': 'Julian Varas, MD',
    'testimonials.5.role': 'PDG',
    'testimonials.6.quote': "Merci pour l'excellent travail sur le rapport et la présentation, cela a été très utile pour notre entreprise.",
    'testimonials.6.author': 'Limor E.',
    'testimonials.6.role': 'LLB, MBA - Cadre en capital-risque',
    
    // Logos Section - French
    'logos.title': 'Approuvé par des organisations de premier plan',
    'logos.subtitle': 'Conférences, partenariats de conseil et travail transformationnel',
    
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
    'services.subtitle': 'Coaching personalizado adaptado a tus metas y desafíos únicos',
    
    // Blog
    'blog.title': 'Últimas noticias',
    'blog.subtitle': 'Descubre consejos, ideas e inspiración para tu crecimiento personal y profesional',
    'blog.latestArticles': 'Artículos recientes',
    'blog.readMore': 'Leer más',
    'blog.postedOn': 'Publicado el',
    'blog.author': 'Autor',
    'blog.readingTime': 'min de lectura',
    'blog.tags': 'Etiquetas',
    'blog.backToBlog': 'Volver al blog',
    'blog.share': 'Compartir esta publicación',
    'blog.loadMore': 'Cargar más artículos',
    'blog.categories.all': 'Todos',
    'blog.categories.happiness': 'Felicidad',
    'blog.categories.health&tech': 'Salud y Tecnología',
    'blog.categories.relationships': 'Relaciones',
    'blog.categories.leadership': 'Liderazgo',
    'blog.categories.digitalhealth': 'Salud Digital',
    'blog.categories.wellness': 'Bienestar',
    'blog.categories.mindfulness': 'Atención Plena',
    'blog.categories.nutrition': 'Nutrición',
    'blog.categories.work-life': 'Vida Laboral',
    
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
    
    // Testimonials Section - Spanish
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.subtitle': 'Historias reales de personas cuyas vidas han sido transformadas',
    'testimonials.1.quote': "Christian ha sido mentor, juez y formador. Su dominio de cuatro idiomas y su experiencia como consultor han sido activos importantes para ayudar en la creación de negocios en todo el mundo.",
    'testimonials.1.author': 'Prof Mai Thai',
    'testimonials.1.role': 'HEC Montreal',
    'testimonials.2.quote': "Siempre perspicaz, proactivo, capaz de pensar fuera de la caja y ver el panorama general. Comprende la neurología, la tecnología, la innovación, la recaudación de fondos, los negocios y los sistemas de salud a nivel internacional.",
    'testimonials.2.author': 'Nicolás Jiménez',
    'testimonials.2.role': 'CEO',
    'testimonials.3.quote': "Christian me permitió ser sustancialmente más feliz en mi vida diaria. Mi familia y amigos lo notaron y se beneficiaron.",
    'testimonials.3.author': 'Silvia A.',
    'testimonials.3.role': 'MEng',
    'testimonials.4.quote': "Tu aporte fue fundamental para que nuestra agencia de diseño comprendiera rápidamente la empresa, el producto y el objetivo. Nuevamente, gracias por toda tu ayuda.",
    'testimonials.4.author': 'Matthew Jafarian',
    'testimonials.4.role': 'Vicepresidente Ejecutivo, Estrategia Empresarial',
    'testimonials.5.quote': "Christian es sumamente consciente, se desenvuelve bien con ideas complejas y nuevas, absorbe y consolida rápidamente el conocimiento y sintetiza hallazgos clave y accionables.",
    'testimonials.5.author': 'Julian Varas, MD',
    'testimonials.5.role': 'CEO',
    'testimonials.6.quote': "Gracias por el excelente trabajo en el informe y la presentación, fue muy útil para nuestro negocio.",
    'testimonials.6.author': 'Limor E.',
    'testimonials.6.role': 'LLB, MBA - Ejecutiva de Capital de Riesgo',
    
    // Logos Section - Spanish
    'logos.title': 'Con la confianza de organizaciones líderes',
    'logos.subtitle': 'Conferencias, asociaciones de consultoría y trabajo transformacional',
    
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