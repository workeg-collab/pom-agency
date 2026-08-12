import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    webDesign: 'Web Design',
    digitalMarketing: 'Digital Marketing',
    accounting: 'Accounting Systems',
    networkServers: 'Network & Servers',
    smartControl: 'Smart Control',
    it: 'IT Services',
    mailPro: 'Mail Professional',
    cart: 'Cart',
    
    // Actions & Buttons
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
    addToCart: 'Add to Cart',
    subscribeNow: 'Subscribe Now',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    allRightsReserved: 'All rights reserved.',
    requestDemo: 'Request Free Demo',
    requestQuote: 'Request Quote',
    popularChoice: 'POPULAR CHOICE',
    sale: 'SALE',

    // Pricing Labels
    currency: 'EGP',
    perMonth: '/Month',

    // Pricing Plans Translation
    planIndividual: 'Individual',
    planIndividualSub: 'Single Use',
    planBusiness: 'Business',
    planBusinessSub: 'Multiple Users',
    planProfessional: 'Professional',
    planProfessionalSub: 'Multiple Users',

    planStarterAccounting: 'Starter Accounting',
    planStarterAccountingSub: 'Small Businesses & Startups',
    planBusinessERP: 'Business ERP',
    planBusinessERPSub: 'Growing Companies',
    planEnterpriseSuite: 'Enterprise Suite',
    planEnterpriseSuiteSub: 'Large Scale Organizations',

    planStarterMarketing: 'Starter Marketing',
    planStarterMarketingSub: 'Small Businesses & Launching Brands',
    planGrowthProMarketing: 'Growth Pro Marketing',
    planGrowthProMarketingSub: 'Scaling Companies & E-Commerce',
    planEnterpriseDominance: 'Enterprise Dominance',
    planEnterpriseDominanceSub: 'Market Leaders & Multi-Brands',

    // Home Page Full Localization
    digitalPlatform: 'DIGITAL PLATFORM',
    heroHeading: 'Turning Ideas Into',
    heroDesc: 'We provide complete solutions in software, hardware, professional email, accounting systems, smart control, website development, and social media management — your business growth starts here.',
    webDesignAndServices: 'Web Design & Services',
    uptimeGuarantee: 'Uptime Guarantee',
    techSupport: 'Technical Support',
    globalClients: 'Global Clients',
    featuresBadge: 'FEATURES',
    allInOneTitle: 'Your All-in-One Tech Partner',
    allInOneDesc: 'From professional email and smart control to websites, accounting, and social media — our integrated services cover every step of your business growth.',
    integratedDigitalEngineering: 'Integrated Digital Engineering & Infrastructure',
    integratedDesc: 'We bring together software engineering, hardware installations, smart control systems, and enterprise accounting into a single unified partner for your organization.',
    lowCurrentCert: 'Certified Low-Current & Network Installations',
    cloudEmailCert: 'Automated Cloud Email & Domain Management',
    webErpCert: 'High-Performance Web & ERP Solutions',
    smartScalableTech: 'Smart & Scalable Tech',
    smartScalableTechDesc: 'Smart & scalable tech solutions',
    secureEmail: 'Secure Email',
    secureEmailDesc: 'Secure professional email',
    modernWebsites: 'Modern Websites',
    modernWebsitesDesc: 'Modern websites that convert',
    accountingSystems: 'Accounting Systems',
    accountingSystemsDesc: 'Accounting & business tracking',
    socialMedia: 'Social Media',
    socialMediaDesc: 'Social media that drives sales',
    proEmailCardDesc: 'Secure, branded email services that enhance your business credibility.',
    socialCardDesc: 'Engaging content and smart strategies to grow your audience and sales.',
    accCardDesc: 'Easy-to-use solutions to track finances, manage invoices, and control expenses.',
    networkCardDesc: 'Reliable, high-speed networking and server solutions built for your business.',
    pricingPlans: 'Pricing Plans',
    pricingSub: 'Choose the right professional email package for your business.',
    whatWeDo: 'WHAT WE DO',
    techSolutionsTitle: 'Tech Solutions Tailored to Your Business',
    techSolutionsSub: 'We specialize in delivering high-impact services in professional email, social media, accounting, networking, and servers — built to keep your business running smarter and faster.',
    worldwideTrust: 'WORLDWIDE TRUST',
    worldwideTrustTitle: 'Empowering Businesses with Professional Email Solutions',
    worldwideTrustSub: 'Trusted by companies worldwide for secure, branded, and reliable communication.',

    // Footer
    footerDesc: 'Empowering businesses with modern web engineering, ERP systems, smart control, and digital growth.',
    quickLinks: 'Quick Links',
    techSolutions: 'Tech Solutions',
    contactInfo: 'Contact Information'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    webDesign: 'تصميم المواقع',
    digitalMarketing: 'التسويق الرقمي',
    accounting: 'الأنظمة المحاسبية',
    networkServers: 'الشبكات والسيرفرات',
    smartControl: 'التحكم الذكي',
    it: 'خدمات تكنولوجيا المعلومات',
    mailPro: 'بريد الشركات الاحترافي',
    cart: 'السلة',

    // Actions & Buttons
    getStarted: 'ابدأ الآن',
    contactUs: 'تواصل معنا',
    addToCart: 'أضف إلى السلة',
    subscribeNow: 'اشترك الآن',
    learnMore: 'اعرف المزيد',
    viewDetails: 'عرض التفاصيل',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    requestDemo: 'طلب تجربة مجانية',
    requestQuote: 'طلب عرض سعر',
    popularChoice: 'الأكثر طلباً',
    sale: 'خصم خاص',

    // Pricing Labels
    currency: 'ج.م',
    perMonth: '/شهرياً',

    // Pricing Plans Translation
    planIndividual: 'باقة الفردي',
    planIndividualSub: 'استخدام فردي',
    planBusiness: 'باقة الأعمال',
    planBusinessSub: 'مستخدمين متعددين',
    planProfessional: 'الباقة الاحترافية',
    planProfessionalSub: 'مستخدمين متعددين',

    planStarterAccounting: 'المحاسبة المبتدئة',
    planStarterAccountingSub: 'للشركات الناشئة والمحلات',
    planBusinessERP: 'إدارة المؤسسات ERP',
    planBusinessERPSub: 'للشركات المتنامية والمتوسطة',
    planEnterpriseSuite: 'جناح الشركات الكبرى',
    planEnterpriseSuiteSub: 'للمؤسسات الكبرى متعددة الفروع',

    planStarterMarketing: 'التسويق المبتدئ',
    planStarterMarketingSub: 'للشركات الناشئة والعلامات الجديدة',
    planGrowthProMarketing: 'باقة نمو التسويق الاحترافي',
    planGrowthProMarketingSub: 'للمتاجر والشركات للتوسع السريع',
    planEnterpriseDominance: 'الهيمنة والتوسع الشامل',
    planEnterpriseDominanceSub: 'لكبرى العلامات والقنوات المتعددة',

    // Home Page Full Localization
    digitalPlatform: 'منصة رقمية',
    heroHeading: 'تحويل الأفكار إلى',
    heroDesc: 'نحن نقدم حلولاً متكاملة في البرمجيات والأجهزة والبريد الإلكتروني الاحترافي والأنظمة المحاسبية والتحكم الذكي وتطوير المواقع والتسويق — نمو أعمالك يبدأ من هنا.',
    webDesignAndServices: 'تصميم المواقع والخدمات',
    uptimeGuarantee: 'ضمان تشغيل واستقرار 99.9%',
    techSupport: 'دعم فني متواصل 24/7',
    globalClients: 'عميل محلي وعالمي',
    featuresBadge: 'المميزات',
    allInOneTitle: 'شريكك التقني المتكامل',
    allInOneDesc: 'من البريد الاحترافي والتحكم الذكي إلى المواقع الإلكترونية والمحاسبة والتسويق — خدماتنا تغطي جميع مراحل نمو عملك.',
    integratedDigitalEngineering: 'الهندسة الرقمية والبنية التحتية المتكاملة',
    integratedDesc: 'نجمع بين هندسة البرمجيات، تركيبات الشبكات والأنظمة، شبكات التحكم الذكي، وأنظمة ERP المحاسبية تحت سقف شريك تقني واحد لمؤسستك.',
    lowCurrentCert: 'تركيبات وشبكات معتمدة وشاملة',
    cloudEmailCert: 'إدارة السيرفرات والنطاقات والبريد السحابي',
    webErpCert: 'حلول الويب المتقدمة وأنظمة الـ ERP',
    smartScalableTech: 'تكنولوجيا ذكية وقابلة للتوسع',
    smartScalableTechDesc: 'حلول تقنية ذكية وقابلة للنمو',
    secureEmail: 'بريد سحابي آمن',
    secureEmailDesc: 'بريد إلكتروني مخصص ومؤمن بالكامل',
    modernWebsites: 'مواقع حديثة عالية الأداء',
    modernWebsitesDesc: 'مواقع إلكترونية سريعة وجذابة',
    accountingSystems: 'أنظمة محاسبية متطورة',
    accountingSystemsDesc: 'متابعة وإدارة الحسابات بدقة',
    socialMedia: 'تسويق رقمي وإعلانات',
    socialMediaDesc: 'تسويق رقمي يزيد مبيعاتك',
    proEmailCardDesc: 'خدمات بريد إلكتروني رسمية ومؤمنة تعزز مصداقية واسم عملك التجاري.',
    socialCardDesc: 'محتوى جذاب وإستراتيجيات تسويقية لزيادة متابعيك ومبيعاتك.',
    accCardDesc: 'حلول سهلة لإدارة الحسابات، إصدار الفواتير الإلكترونية، والتحكم بالمرتبات.',
    networkCardDesc: 'شبكات وسيرفرات فائقة السرعة معتمدة لحماية واستقرار شركتك.',
    pricingPlans: 'خطط الأسعار',
    pricingSub: 'اختر باقة البريد الإلكتروني أو الحل المناسب لشركتك.',
    whatWeDo: 'ماذا نقدم',
    techSolutionsTitle: 'حلول تقنية مخصصة لنشاطك التجاري',
    techSolutionsSub: 'نحن متخصصون في تقديم خدمات عالية التأثير في البريد الإلكتروني، شبكات التواصل، المحاسبة، الشبكات والسيرفرات.',
    worldwideTrust: 'ثقة عالمية ومحلية',
    worldwideTrustTitle: 'تمكين الشركات بحلول البريد الإلكتروني والأنظمة التقنية',
    worldwideTrustSub: 'محل ثقة كبرى الشركات والتجار لتوفير اتصالات وأنظمة آمنة وموثوقة.',

    // Footer
    footerDesc: 'تمكين الشركات والمؤسسات بأحدث تكنولوجيات البرمجة، أنظمة ERP المحاسبية، التحكم الذكي، والتسويق الرقمي.',
    quickLinks: 'روابط سريعة',
    techSolutions: 'الحلول التقنية',
    contactInfo: 'معلومات الاتصال'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    webDesign: 'Conception Web',
    digitalMarketing: 'Marketing Digital',
    accounting: 'Systèmes Comptables',
    networkServers: 'Réseaux & Serveurs',
    smartControl: 'Contrôle Intelligent',
    it: 'Services Informatiques',
    mailPro: 'E-mail Professionnel',
    cart: 'Panier',

    // Actions & Buttons
    getStarted: 'Commencer',
    contactUs: 'Contactez-nous',
    addToCart: 'Ajouter au panier',
    subscribeNow: "S'abonner",
    learnMore: 'En savoir plus',
    viewDetails: 'Voir les détails',
    allRightsReserved: 'Tous droits réservés.',
    requestDemo: 'Demander une démo',
    requestQuote: 'Demander un devis',
    popularChoice: 'CHOIX POPULAIRE',
    sale: 'PROMOTION',

    // Pricing Labels
    currency: 'EGP',
    perMonth: '/Mois',

    // Pricing Plans Translation
    planIndividual: 'Individuel',
    planIndividualSub: 'Usage Unique',
    planBusiness: 'Business',
    planBusinessSub: 'Utilisateurs Multiples',
    planProfessional: 'Professionnel',
    planProfessionalSub: 'Utilisateurs Multiples',

    planStarterAccounting: 'Comptabilité Débutant',
    planStarterAccountingSub: 'Petites Entreprises',
    planBusinessERP: 'ERP Entreprise',
    planBusinessERPSub: 'Entreprises en Croissance',
    planEnterpriseSuite: 'Suite Entreprise',
    planEnterpriseSuiteSub: 'Grandes Organisations',

    planStarterMarketing: 'Marketing Débutant',
    planStarterMarketingSub: 'Marques en Lancement',
    planGrowthProMarketing: 'Marketing Croissance Pro',
    planGrowthProMarketingSub: 'E-Commerce & Scalabilité',
    planEnterpriseDominance: 'Dominance Entreprise',
    planEnterpriseDominanceSub: 'Lois du Marché',

    // Home Page Full Localization
    digitalPlatform: 'PLATEFORME NUMÉRIQUE',
    heroHeading: 'Transformer les idées en',
    heroDesc: 'Nous fournissons des solutions complètes en logiciels, matériel, e-mail professionnel, systèmes comptables, contrôle intelligent et développement web.',
    webDesignAndServices: 'Conception Web & Services',
    uptimeGuarantee: 'Garantie de Disponibilité 99.9%',
    techSupport: 'Support Technique 24/7',
    globalClients: 'Clients Mondiaux',
    featuresBadge: 'FONCTIONNALITÉS',
    allInOneTitle: 'Votre Partenaire Tech Tout-en-Un',
    allInOneDesc: 'De l’e-mail professionnel au contrôle intelligent en passant par les sites web et la comptabilité — nos services couvrent chaque étape de votre croissance.',
    integratedDigitalEngineering: 'Ingénierie & Infrastructure Numérique Intégrée',
    integratedDesc: 'Nous réunissons ingénierie logicielle, réseaux, systèmes intelligents et comptabilité d\'entreprise sous un même partenaire.',
    lowCurrentCert: 'Installations Réseaux Certifiées',
    cloudEmailCert: 'Gestion E-mail Cloud & Domaines',
    webErpCert: 'Solutions Web & ERP Hautes Performances',
    smartScalableTech: 'Tech Intelligente & Scalable',
    smartScalableTechDesc: 'Solutions technologiques évolutives',
    secureEmail: 'E-mail Sécurisé',
    secureEmailDesc: 'E-mail professionnel sécurisé',
    modernWebsites: 'Sites Web Modernes',
    modernWebsitesDesc: 'Sites web modernes qui convertissent',
    accountingSystems: 'Systèmes Comptables',
    accountingSystemsDesc: 'Gestion comptable & suivi',
    socialMedia: 'Médias Sociaux',
    socialMediaDesc: 'Marketing réseaux sociaux dynamique',
    proEmailCardDesc: 'Services d\'e-mail sécurisés qui renforcent votre crédibilité.',
    socialCardDesc: 'Contenu captivant et stratégies intelligentes pour développer vos ventes.',
    accCardDesc: 'Solutions simples pour suivre vos finances et gérer vos factures.',
    networkCardDesc: 'Réseaux et serveurs haute vitesse conçus pour votre entreprise.',
    pricingPlans: 'Plans de Tarification',
    pricingSub: 'Choisissez le forfait e-mail professionnel adapté à votre entreprise.',
    whatWeDo: 'CE QUE NOUS FAISONS',
    techSolutionsTitle: 'Solutions Tech Adaptées à Votre Entreprise',
    techSolutionsSub: 'Nous sommes spécialisés dans les services haute performance.',
    worldwideTrust: 'CONFIANCE MONDIALE',
    worldwideTrustTitle: 'Autonomiser les Entreprises avec des Solutions E-mail',
    worldwideTrustSub: 'Approuvé par des entreprises du monde entier.',

    // Footer
    footerDesc: "Autonomiser les entreprises grâce à l'ingénierie web moderne, aux systèmes ERP et au contrôle intelligent.",
    quickLinks: 'Liens Rapides',
    techSolutions: 'Solutions Tech',
    contactInfo: 'Informations de Contact'
  },
  hi: {
    // Navigation
    home: 'मुख्य पृष्ठ',
    webDesign: 'वेब डिजाइनिंग',
    digitalMarketing: 'डिजिटल मार्केटिंग',
    accounting: 'अकाउंटिंग सिस्टम',
    networkServers: 'नेटवर्क और सर्वर',
    smartControl: 'स्मार्ट कंट्रोल',
    it: 'आईटी सेवाएं',
    mailPro: 'प्रोफेशनल ईमेल',
    cart: 'कार्ट',

    // Actions & Buttons
    getStarted: 'शुरू करें',
    contactUs: 'संपर्क करें',
    addToCart: 'कार्ट में जोड़ें',
    subscribeNow: 'अभी सदस्यता लें',
    learnMore: 'और जानें',
    viewDetails: 'विवरण देखें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    requestDemo: 'मुफ्त डेमो मांगें',
    requestQuote: 'कोटेशन मांगें',
    popularChoice: 'लोकप्रिय विकल्प',
    sale: 'सेल',

    // Pricing Labels
    currency: 'ईजीपी',
    perMonth: '/माह',

    // Pricing Plans Translation
    planIndividual: 'व्यक्तिगत',
    planIndividualSub: 'एकल उपयोग',
    planBusiness: 'बिजनेस',
    planBusinessSub: 'अनेक उपयोगकर्ता',
    planProfessional: 'प्रोफेशनल',
    planProfessionalSub: 'अनेक उपयोगकर्ता',

    planStarterAccounting: 'स्टार्टर अकाउंटिंग',
    planStarterAccountingSub: 'छोटे व्यवसाय',
    planBusinessERP: 'बिजनेस ईआरपी',
    planBusinessERPSub: 'बढ़ती कंपनियां',
    planEnterpriseSuite: 'एंटरप्राइज सूट',
    planEnterpriseSuiteSub: 'बडे संगठन',

    planStarterMarketing: 'स्टार्टर मार्केटिंग',
    planStarterMarketingSub: 'ब्रांड्स',
    planGrowthProMarketing: 'ग्रोथ प्रो मार्केटिंग',
    planGrowthProMarketingSub: 'ई-कॉमर्स',
    planEnterpriseDominance: 'एंटरप्राइज डोमिनेंस',
    planEnterpriseDominanceSub: 'मार्केट लीडर्स',

    // Home Page Full Localization
    digitalPlatform: 'डिजिटल प्लेटफॉर्म',
    heroHeading: 'विचारों को बदलना',
    heroDesc: 'हम सॉफ्टवेयर, हार्डवेयर, प्रोफेशनल ईमेल, अकाउंटिंग सिस्टम, स्मार्ट कंट्रोल और वेब डेवलपमेंट में संपूर्ण समाधान प्रदान करते हैं।',
    webDesignAndServices: 'वेब डिजाइनिंग और सेवाएं',
    uptimeGuarantee: '99.9% अपटाइम गारंटी',
    techSupport: '24/7 तकनीकी सहायता',
    globalClients: 'वैश्विक ग्राहक',
    featuresBadge: 'विशेषताएं',
    allInOneTitle: 'आपका ऑल-इन-वन टेक पार्टनर',
    allInOneDesc: 'प्रोफेशनल ईमेल से लेकर स्मार्ट कंट्रोल, वेब पोर्टल और अकाउंटिंग तक — हमारी सेवाएं आपके व्यवसाय को बढ़ाती हैं।',
    integratedDigitalEngineering: 'एकीकृत डिजिटल इंजीनियरिंग और इंफ्रास्ट्रक्चर',
    integratedDesc: 'हम सॉफ्टवेयर, नेटवर्क, स्मार्ट कंट्रोल और ईआरपी को एक साथ लाते हैं।',
    lowCurrentCert: 'प्रमाणित नेटवर्क इंस्टॉलेशन',
    cloudEmailCert: 'क्लाउड ईमेल और डोमेन प्रबंधन',
    webErpCert: 'उच्च प्रदर्शन वेब और ईआरपी',
    smartScalableTech: 'स्मार्ट और स्केलेबल टेक',
    smartScalableTechDesc: 'स्मार्ट तकनीक समाधान',
    secureEmail: 'सुरक्षित ईमेल',
    secureEmailDesc: 'सुरक्षित व्यावसायिक ईमेल',
    modernWebsites: 'आधुनिक वेबसाइटें',
    modernWebsitesDesc: 'रूपांतरण करने वाली वेबसाइटें',
    accountingSystems: 'अकाउंटिंग सिस्टम',
    accountingSystemsDesc: 'वित्तीय ट्रैकिंग',
    socialMedia: 'सोशल मीडिया',
    socialMediaDesc: 'बिक्री बढ़ाने वाला मीडिया',
    proEmailCardDesc: 'सुरक्षित ईमेल सेवाएं जो विश्वसनीयता बढ़ाती हैं।',
    socialCardDesc: 'बिक्री बढ़ाने के लिए आकर्षक सामग्री।',
    accCardDesc: 'वित्त और चालान प्रबंधित करने के लिए समाधान।',
    networkCardDesc: 'व्यवसाय के लिए हाई-स्पीड नेटवर्क समाधान।',
    pricingPlans: 'मूल्य निर्धारण योजनाएं',
    pricingSub: 'अपने व्यवसाय के लिए सही ईमेल पैकेज चुनें।',
    whatWeDo: 'हम क्या करते हैं',
    techSolutionsTitle: 'आपके व्यवसाय के लिए अनुकूलित समाधान',
    techSolutionsSub: 'हम व्यावसायिक ईमेल और तकनीक में विशेषज्ञ हैं।',
    worldwideTrust: 'वैश्विक विश्वास',
    worldwideTrustTitle: 'व्यावसायिक ईमेल समाधानों से सशक्त बनाना',
    worldwideTrustSub: 'दुनिया भर की कंपनियों द्वारा विश्वसनीय।',

    // Footer
    footerDesc: 'आधुनिक वेब इंजीनियरिंग, ईआरपी सिस्टम, स्मार्ट कंट्रोल और डिजिटल विकास के साथ व्यवसायों को सशक्त बनाना।',
    quickLinks: 'त्वरित लिंक',
    techSolutions: 'टेक समाधान',
    contactInfo: 'संपर्क विवरण'
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('pom_app_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('pom_app_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
