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
    'services.title': 'Our Services',
    'services.subtitle': 'Personalized solutions tailored to your unique goals and challenges',
    'services.happiness.title': 'Happiness & Kindness',
    'services.happiness.description': 'Discover inner peace, cultivate kindness, and build lasting happiness through personalized coaching sessions.',
    'services.health.title': 'Health & Technology',
    'services.health.description': 'Balance digital life with physical wellbeing. Learn to leverage technology for better health outcomes.',
    'services.couples.title': 'Couples & Intimacy',
    'services.couples.description': 'Strengthen your relationship and enhance intimacy through guided couples coaching.',
    'services.organization.title': 'Organizational Growth',
    'services.organization.description': 'Scale your business with strategic coaching focused on sustainable growth and team development.',
    'services.finance.title': 'Corporate Finance Advisory',
    'services.finance.description': 'Full spectrum corporate finance advice for businesses, from M&A to capital raising and portfolio management.',
    
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
    'contact.sendMessage': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.messageSent': 'Message Sent!',
    'contact.scheduleCall': 'Schedule a Free Consultation',
    'contact.formTitle': 'Send us a Message',
    'contact.formDescription': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'contact.firstName': 'First Name',
    'contact.firstNamePlaceholder': 'John',
    'contact.lastName': 'Last Name',
    'contact.lastNamePlaceholder': 'Doe',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.subjectPlaceholder': 'How can we help you?',
    'contact.messagePlaceholder': 'Tell us more about what you\'re looking for...',
    'contact.quickContact': 'Quick Contact',
    'contact.scheduleCallDescription': 'Book a 30-minute free consultation to discuss your goals and how we can help you achieve them.',
    'contact.scheduleCallButton': 'Schedule Now',
    'contact.scheduleCallNote': 'No commitment required • 100% confidential',
    'contact.serviceAreas': 'Our Specialties',
    
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
    
    // Corporate Finance Section
    'corporateFinance.title': 'Corporate Finance Advisory',
    'corporateFinance.description1': 'We provide the full spectrum of corporate finance advice to all businesses. This includes advising shareholders, directors and investors who are going through strategic change such as acquiring or selling all or part of a business, raising funds or exploring new business opportunities.',
    'corporateFinance.description2': 'DSC is a highly specialized firm of corporate finance consultants providing its services. Whether advising individuals, owner-managed businesses, listed companies, or international entities, our goal is to work closely with our clients and help them achieve their ambitions. Our clients include publicly traded and privately held companies, government entities and investment organizations such as private equity firms and hedge funds. Our approach revolves around exceptional client service and the key to our success has been a result of the deep relationships we have built with our clients.',
    'corporateFinance.approach': 'We view ourselves as your partners, rather than service providers, and are here to support you throughout the business life-cycle – be it Corporate Strategy, M&A, Valuations, Due-diligence, Capital Raising or IPOs.',
    'portfolioManagement.title': 'Portfolio Management Advisory',
    'portfolioManagement.description': 'We help clients to optimize their long-term asset allocation, providing support with;',
    'portfolioManagement.strategicAllocation': 'Strategic asset allocation: DSC supports clients in setting the most suitable long-term strategic asset mix for their specific needs. Leveraging world-leading technology, we assist both investors without explicit liabilities (such as endowments and family offices) and those that require detailed asset-liability balance sheet modelling (pensions, insurers).',
    'portfolioManagement.portfolioDesign': 'Portfolio Design: The DSC Portfolio Solutions team helps investors to build portfolios that fit their unique circumstances and objectives. Blending quantitative and qualitative portfolio construction with robust implementation planning, dedicated solutions strategists and asset class specialists support each step of the process.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Life?',
    'cta.subtitle': 'Take the first step towards a more fulfilling life. Book your free consultation today.',
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
    'services.title': 'Nos Services',
    'services.subtitle': 'Solutions personnalisées adaptées à vos objectifs et défis uniques',
    'services.happiness.title': 'Bonheur et Gentillesse',
    'services.happiness.description': 'Découvrez la paix intérieure, cultivez la gentillesse et construisez un bonheur durable grâce à des séances de coaching personnalisées.',
    'services.health.title': 'Santé et Technologie',
    'services.health.description': 'Équilibrez la vie numérique avec le bien-être physique. Apprenez à tirer parti de la technologie pour de meilleurs résultats de santé.',
    'services.couples.title': 'Couples et Intimité',
    'services.couples.description': 'Renforcez votre relation et améliorez l\'intimité grâce à un coaching de couple guidé.',
    'services.organization.title': 'Croissance Organisationnelle',
    'services.organization.description': 'Développez votre entreprise avec un coaching stratégique axé sur une croissance durable et le développement d\'équipe.',
    'services.finance.title': 'Conseil en Finance d\'Entreprise',
    'services.finance.description': 'Conseil complet en finance d\'entreprise, des fusions et acquisitions à la levée de fonds et à la gestion de portefeuille.',
    
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
    'contact.sendMessage': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
    'contact.messageSent': 'Message Envoyé !',
    'contact.scheduleCall': 'Planifier une Consultation Gratuite',
    'contact.formTitle': 'Envoyez-nous un Message',
    'contact.formDescription': 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.',
    'contact.firstName': 'Prénom',
    'contact.firstNamePlaceholder': 'Jean',
    'contact.lastName': 'Nom de famille',
    'contact.lastNamePlaceholder': 'Dupont',
    'contact.emailPlaceholder': 'jean@exemple.com',
    'contact.subjectPlaceholder': 'Comment pouvons-nous vous aider ?',
    'contact.messagePlaceholder': 'Dites-nous plus sur ce que vous recherchez...',
    'contact.quickContact': 'Contact Rapide',
    'contact.scheduleCallDescription': 'Réservez une consultation gratuite de 30 minutes pour discuter de vos objectifs et de la façon dont nous pouvons vous aider à les atteindre.',
    'contact.scheduleCallButton': 'Planifier Maintenant',
    'contact.scheduleCallNote': 'Sans engagement • 100% confidentiel',
    'contact.serviceAreas': 'Nos Spécialités',
    
    // Testimonials Section - French
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.subtitle': 'Témoignages de personnes dont la vie a été transformée',
    // Corporate Finance Section - French
    'corporateFinance.title': 'Conseil en Finance d\'Entreprise',
    'corporateFinance.description1': 'Nous offrons un éventail complet de conseils en finance d\'entreprise à toutes les entreprises. Cela comprend le conseil aux actionnaires, administrateurs et investisseurs qui traversent des changements stratégiques tels que l\'acquisition ou la vente de tout ou partie d\'une entreprise, la levée de fonds ou l\'exploration de nouvelles opportunités commerciales.',
    'corporateFinance.description2': 'DSC est un cabinet hautement spécialisé de consultants en finance d\'entreprise. Qu\'il s\'agisse de conseiller des particuliers, des entreprises gérées par leurs propriétaires, des sociétés cotées ou des entités internationales, notre objectif est de travailler en étroite collaboration avec nos clients et de les aider à réaliser leurs ambitions. Nos clients comprennent des sociétés cotées en bourse et privées, des entités gouvernementales et des organisations d\'investissement telles que des sociétés de capital-investissement et des fonds spéculatifs. Notre approche tourne autour d\'un service client exceptionnel et la clé de notre succès a été le résultat des relations profondes que nous avons bâties avec nos clients.',
    'corporateFinance.approach': 'Nous nous considérons comme vos partenaires, plutôt que comme des prestataires de services, et sommes là pour vous soutenir tout au long du cycle de vie de l\'entreprise - qu\'il s\'agisse de stratégie d\'entreprise, de fusions et acquisitions, d\'évaluations, de due diligence, de levée de capitaux ou d\'introductions en bourse.',
    'portfolioManagement.title': 'Conseil en Gestion de Portefeuille',
    'portfolioManagement.description': 'Nous aidons les clients à optimiser leur allocation d\'actifs à long terme, en fournissant un soutien pour :',
    'portfolioManagement.strategicAllocation': 'Allocation stratégique d\'actifs : DSC aide les clients à définir le mix d\'actifs stratégiques à long terme le plus adapté à leurs besoins spécifiques. En tirant parti d\'une technologie de pointe, nous aidons à la fois les investisseurs sans passif explicite (tels que les fonds de dotation et les family offices) et ceux qui nécessitent une modélisation détaillée du bilan actif-passif (caisses de retraite, assureurs).',
    'portfolioManagement.portfolioDesign': 'Conception de portefeuille : L\'équipe DSC Portfolio Solutions aide les investisseurs à construire des portefeuilles qui correspondent à leur situation et à leurs objectifs uniques. En associant une construction de portefeuille quantitative et qualitative à une planification de mise en œuvre robuste, des stratèges dédiés et des spécialistes de classe d\'actifs soutiennent chaque étape du processus.',
    
    // CTA Section - French
    'cta.title': 'Prêt à Transformer Votre Vie ?',
    'cta.subtitle': 'Faites le premier pas vers une vie plus épanouissante. Réservez votre consultation gratuite dès aujourd\'hui.',
    
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
    
    // Contact Form
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¿Listo para comenzar su viaje de transformación?',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sendMessage': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.messageSent': '¡Mensaje Enviado!',
    'contact.scheduleCall': 'Programar una Consulta Gratuita',
    'contact.formTitle': 'Envíenos un Mensaje',
    'contact.formDescription': 'Complete el formulario a continuación y nos pondremos en contacto con usted dentro de las 24 horas.',
    'contact.firstName': 'Nombre',
    'contact.firstNamePlaceholder': 'Juan',
    'contact.lastName': 'Apellido',
    'contact.lastNamePlaceholder': 'Pérez',
    'contact.emailPlaceholder': 'juan@ejemplo.com',
    'contact.subjectPlaceholder': '¿Cómo podemos ayudarle?',
    'contact.messagePlaceholder': 'Cuéntenos más sobre lo que está buscando...',
    'contact.quickContact': 'Contacto Rápido',
    'contact.scheduleCallDescription': 'Reserve una consulta gratuita de 30 minutos para discutir sus objetivos y cómo podemos ayudarle a alcanzarlos.',
    'contact.scheduleCallButton': 'Programar Ahora',
    'contact.scheduleCallNote': 'Sin compromiso • 100% confidencial',
    'contact.serviceAreas': 'Nuestras Especialidades',
    
    // Hero Section
    'hero.title': 'Transforma Tu Vida a Través del Coaching Personalizado',
    'hero.subtitle': 'Orientación experta para la felicidad, relaciones, salud y crecimiento organizacional',
    'hero.cta': 'Reservar una Sesión',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones personalizadas adaptadas a tus metas y desafíos únicos',
    'services.happiness.title': 'Felicidad y Bondad',
    'services.happiness.description': 'Descubre la paz interior, cultiva la bondad y construye felicidad duradera a través de sesiones de coaching personalizadas.',
    'services.health.title': 'Salud y Tecnología',
    'services.health.description': 'Equilibra tu vida digital con el bienestar físico. Aprende a aprovechar la tecnología para mejores resultados de salud.',
    'services.couples.title': 'Parejas e Intimidad',
    'services.couples.description': 'Fortalece tu relación y mejora la intimidad a través del coaching guiado para parejas.',
    'services.organization.title': 'Crecimiento Organizacional',
    'services.organization.description': 'Escala tu negocio con coaching estratégico enfocado en crecimiento sostenible y desarrollo de equipos.',
    'services.finance.title': 'Asesoría en Finanzas Corporativas',
    'services.finance.description': 'Asesoramiento integral en finanzas corporativas, desde fusiones y adquisiciones hasta recaudación de capital y gestión de carteras.',
    
    // Blog
    'blog.title': 'Últimas noticias',
    'blog.subtitle': 'Descubre consejos, ideas e inspiración para tu crecimiento personal y profesional',
    'blog.latestArticles': 'Artículos recientes',
    'blog.readMore': 'Leer más',
    'blog.postedOn': 'Publicado el',
    'blog.author': 'Autor',
    'blog.minRead': 'min de lectura',
    'blog.actions.back': 'Atrás',
    'blog.actions.backToBlog': 'Volver al blog',
    'blog.error.invalidUrl': 'URL no válida',
    'blog.error.noPostSpecified': 'No se especificó ninguna publicación en la URL',
    'blog.error.postNotFound': 'Publicación no encontrada',
    'blog.error.postNotFoundDescription': 'No se pudo encontrar la publicación solicitada.',
    'blog.error.translationNotFound': 'Traducción no disponible',
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
    
    // Contact Section - Spanish translations are already defined above (lines 278-303)
    
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
    
    // Corporate Finance Section - Spanish
    'corporateFinance.title': 'Asesoría en Finanzas Corporativas',
    'corporateFinance.description1': 'Brindamos todo el espectro de asesoramiento en finanzas corporativas a todo tipo de empresas. Esto incluye asesorar a accionistas, directores e inversores que están atravesando cambios estratégicos como la adquisición o venta total o parcial de un negocio, la recaudación de fondos o la exploración de nuevas oportunidades comerciales.',
    'corporateFinance.description2': 'DSC es una firma altamente especializada de consultores en finanzas corporativas. Ya sea asesorando a particulares, empresas gestionadas por sus propietarios, empresas que cotizan en bolsa o entidades internacionales, nuestro objetivo es trabajar en estrecha colaboración con nuestros clientes y ayudarlos a alcanzar sus ambiciones. Nuestros clientes incluyen empresas que cotizan en bolsa y privadas, entidades gubernamentales y organizaciones de inversión como firmas de capital privado y fondos de cobertura. Nuestro enfoque gira en torno a un servicio al cliente excepcional y la clave de nuestro éxito ha sido el resultado de las relaciones profundas que hemos construido con nuestros clientes.',
    'corporateFinance.approach': 'Nos vemos como sus socios, en lugar de proveedores de servicios, y estamos aquí para apoyarlo durante todo el ciclo de vida de su negocio, ya sea en Estrategia Corporativa, Fusiones y Adquisiciones, Valoraciones, Due Diligence, Recaudación de Capital u Ofertas Públicas Iniciales (OPI).',
    'portfolioManagement.title': 'Asesoría en Gestión de Carteras',
    'portfolioManagement.description': 'Ayudamos a los clientes a optimizar su asignación de activos a largo plazo, brindando apoyo con;',
    'portfolioManagement.strategicAllocation': 'Asignación estratégica de activos: DSC ayuda a los clientes a establecer la combinación estratégica de activos a largo plazo más adecuada para sus necesidades específicas. Aprovechando tecnología de clase mundial, asistimos tanto a inversores sin pasivos explícitos (como fundaciones y family offices) como a aquellos que requieren un modelado detallado del balance de activos y pasivos (fondos de pensiones, aseguradoras).',
    'portfolioManagement.portfolioDesign': 'Diseño de cartera: El equipo de Soluciones de Cartera de DSC ayuda a los inversores a construir carteras que se ajusten a sus circunstancias y objetivos únicos. Combinando la construcción de carteras cuantitativas y cualitativas con una planificación de implementación sólida, estrategas de soluciones dedicados y especialistas en clases de activos respaldan cada paso del proceso.',
    
    // CTA Section - Spanish
    'cta.title': '¿Listo para Transformar tu Vida?',
    'cta.subtitle': 'Da el primer paso hacia una vida más plena. Reserva tu consulta gratuita hoy mismo.',
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