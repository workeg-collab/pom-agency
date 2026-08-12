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
    
    // Actions & Common Buttons
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

    // Home Page
    heroHeading: 'Turning Ideas Into',
    heroDesc: 'We provide complete solutions in software, hardware, professional email, accounting systems, smart control, website development, and social media management — your business growth starts here.',
    allInOneTitle: 'Your All-in-One Tech Partner',
    allInOneDesc: 'From professional email and smart control to websites, accounting, and social media — our integrated services cover every step of your business growth.',
    coreServices: 'Core Services',
    uptimeGuarantee: 'Uptime Guarantee',
    techSupport: 'Technical Support',
    globalClients: 'Global Clients',

    // Web Design Page
    webDesignBadge: 'WEB DESIGN & ENGINEERING',
    webDesignHeroTitle: 'Custom Web Design & Digital Engineering',
    webDesignHeroSub: 'We build high-performance, responsive websites and custom web applications designed to elevate your brand credibility, delight users, and drive maximum business conversions.',
    coreCapabilities: 'CORE CAPABILITIES',
    everythingNeeded: 'Everything Your Website Needs to Succeed',
    exploreShowcase: 'Explore Our Modern Website Showcase',
    processTitle: 'Our Web Design Process',
    startWebProject: 'Start Your Web Project',
    viewShowcase: 'View Project Showcase',
    allProjects: 'All Projects',
    eCommerce: 'E-Commerce',
    corporate: 'Corporate',
    saasApps: 'SaaS & Apps',

    // Digital Marketing Page
    marketingBadge: 'DIGITAL MARKETING & GROWTH',
    marketingHeroTitle: 'Data-Driven Digital Marketing & Growth Engineering',
    marketingHeroSub: 'We engineer high-ROI digital marketing campaigns, social media strategies, targeted paid advertising, and search engine dominance to scale your revenue.',
    marketingPackages: 'Growth Marketing Packages',
    campaignShowcase: 'Omnichannel Campaign Excellence',
    marketingWorkflow: 'Our Growth Strategy Workflow',

    // Accounting Page
    accountingBadge: 'ERP & FINANCIAL SYSTEMS',
    accountingHeroTitle: 'Smart Accounting & Odoo ERP Systems for Modern Enterprises',
    accountingHeroSub: 'Take full control of your company financial health, electronic invoicing, inventory, and payroll with our certified Odoo ERP and custom accounting implementations.',
    accountingPlans: 'Accounting & ERP Pricing Plans',
    integrationWorkflow: 'Seamless 3-Step System Integration',

    // Mail Professional Page
    mailBadge: 'FEATURES',
    mailHeroTitle: 'Create a professional email for your business',
    mailHeroSub: 'An email address that matches your custom domain to make your brand appear more credible. Boost team collaboration, enhance data security, and establish customer trust with custom domain email hosting.',
    howItWorks: '4 Steps to Setup Your Professional Email',
    needMore: 'Need more? Get a custom plan',
    needMoreDesc: 'If you need more than 50 email accounts or want Private Email for more than 20 domains, reach out, and one of our team will create a custom plan for your business.',
    aiDevTitle: 'AI Development: Cutting-Edge Solutions for Your Industry',
    companyTimeline: 'Company Timeline',

    // Footer & Meta
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

    // Actions & Common Buttons
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

    // Home Page
    heroHeading: 'تحويل الأفكار إلى',
    heroDesc: 'نحن نقدم حلولاً متكاملة في البرمجيات والأجهزة والبريد الإلكتروني الاحترافي والأنظمة المحاسبية والتحكم الذكي وتطوير المواقع وتطوير الأعمال.',
    allInOneTitle: 'شريكك التقني المتكامل',
    allInOneDesc: 'من البريد الاحترافي والتحكم الذكي إلى المواقع الإلكترونية والمحاسبة والتسويق — خدماتنا تغطي جميع مراحل نمو عملك.',
    coreServices: 'الخدمات الرئيسية',
    uptimeGuarantee: 'ضمان الاستقرار والتشغيل',
    techSupport: 'دعم فني على مدار 24 ساعة',
    globalClients: 'عميل عالمي ومحلي',

    // Web Design Page
    webDesignBadge: 'تصميم وهندسة المواقع',
    webDesignHeroTitle: 'تصميم المواقع وتطوير الهندسة الرقمية',
    webDesignHeroSub: 'نقوم ببناء مواقع إلكترونية متجاوبة وعالية الأداء وتطبيقات ويب مخصصة لتعزيز مصداقية علامتك التجارية وزيادة المبيعات.',
    coreCapabilities: 'القدرات والخدمات المتاحة',
    everythingNeeded: 'كل ما يحتاجه موقعك الإلكتروني للنجاح',
    exploreShowcase: 'استكشف معرض نماذج المواقع الحديثة',
    processTitle: 'مراحل وخطوات تصميم المواقع',
    startWebProject: 'ابدأ مشروع موقعك الآن',
    viewShowcase: 'استعراض النماذج',
    allProjects: 'جميع المشاريع',
    eCommerce: 'المتاجر الإلكترونية',
    corporate: 'مواقع الشركات',
    saasApps: 'المنصات والتطبيقات',

    // Digital Marketing Page
    marketingBadge: 'التسويق الرقمي والنمو',
    marketingHeroTitle: 'التسويق الرقمي القائم على البيانات واستراتيجيات النمو',
    marketingHeroSub: 'نقوم بصياغة حملات تسويق رقمي عالية العائد وإدارة منصات التواصل الاجتماعي وإعلانات ممولة مستهدفة وتصدر محركات البحث.',
    marketingPackages: 'باقات التسويق الرقمي والنمو',
    campaignShowcase: 'معرض إعلانات وحملات التسويق',
    marketingWorkflow: 'مسار استراتيجية النمو والتسويق',

    // Accounting Page
    accountingBadge: 'أنظمة ERP والحسابات',
    accountingHeroTitle: 'الأنظمة المحاسبية الذكية وحلول Odoo ERP للمؤسسات الحديثة',
    accountingHeroSub: 'سيطر بالكامل على الصحة المالية لشركتك والفاتورة الإلكترونية والمخازن والمرتبات مع حلول Odoo ERP المعتمدة.',
    accountingPlans: 'خطط وأسعار الأنظمة المحاسبية والـ ERP',
    integrationWorkflow: 'خطوات الربط والدمج الثلاثية',

    // Mail Professional Page
    mailBadge: 'المميزات',
    mailHeroTitle: 'إنشاء بريد إلكتروني احترافي لنشاطك التجاري',
    mailHeroSub: 'عنوان بريد إلكتروني يتطابق مع النطاق الخاص بك لجعل علامتك التجارية تبدو أكثر مصداقية وتعزيز ثقة العملاء.',
    howItWorks: '4 خطوات لإعداد البريد الإلكتروني الاحترافي',
    needMore: 'تحتاج خطة مخصصة أكبر؟',
    needMoreDesc: 'إذا كنت بحاجة إلى أكثر من 50 حساب بريد إلكتروني أو تريد بريدًا خاصًا لأكثر من 20 نطاقًا، فتواصل معنا وسينشئ فريقنا خطة مخصصة لشركتك.',
    aiDevTitle: 'تطوير الذكاء الاصطناعي: حلول متطورة لمجالك',
    companyTimeline: 'الجدول الزمني للشركة',

    // Footer & Meta
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

    // Actions & Common Buttons
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

    // Home Page
    heroHeading: 'Transformer les idées en',
    heroDesc: 'Nous fournissons des solutions complètes en logiciels, matériel, e-mail professionnel, systèmes comptables, contrôle intelligent et développement web.',
    allInOneTitle: 'Votre Partenaire Tech Tout-en-Un',
    allInOneDesc: 'De l’e-mail professionnel au contrôle intelligent en passant par les sites web et la comptabilité — nos services couvrent chaque étape de votre croissance.',
    coreServices: 'Services Principaux',
    uptimeGuarantee: 'Garantie de Disponibilité',
    techSupport: 'Support Technique 24/7',
    globalClients: 'Clients Mondiaux',

    // Web Design Page
    webDesignBadge: 'CONCEPTION & INGÉNIERIE WEB',
    webDesignHeroTitle: 'Conception Web Sur Mesure & Ingénierie Numérique',
    webDesignHeroSub: 'Nous construisons des sites web performants, réactifs et des applications sur mesure pour renforcer votre crédibilité et stimuler vos conversions.',
    coreCapabilities: 'CAPACITÉS PRINCIPALES',
    everythingNeeded: 'Tout ce dont votre site a besoin pour réussir',
    exploreShowcase: 'Explorez Notre Vitrine de Sites Web',
    processTitle: 'Notre Processus de Conception Web',
    startWebProject: 'Démarrer Votre Projet Web',
    viewShowcase: 'Voir la Vitrine',
    allProjects: 'Tous les Projets',
    eCommerce: 'E-Commerce',
    corporate: 'Entreprise',
    saasApps: 'SaaS & Applications',

    // Digital Marketing Page
    marketingBadge: 'MARKETING DIGITAL & CROISSANCE',
    marketingHeroTitle: 'Marketing Digital Basé sur les Données & Croissance',
    marketingHeroSub: 'Nous concevons des campagnes marketing à fort ROI, des stratégies médias sociaux et des publicités ciblées pour développer vos revenus.',
    marketingPackages: 'Packages Marketing & Croissance',
    campaignShowcase: 'Excellence des Campagnes',
    marketingWorkflow: 'Notre Processus de Croissance',

    // Accounting Page
    accountingBadge: 'SYSTÈMES ERP & COMPTABILITÉ',
    accountingHeroTitle: 'Comptabilité Intelligente & Systèmes Odoo ERP',
    accountingHeroSub: 'Prenez le contrôle total de la santé financière de votre entreprise, de la facturation électronique et de la paie avec Odoo ERP.',
    accountingPlans: 'Plans Tarifs Comptabilité & ERP',
    integrationWorkflow: 'Intégration en 3 Étapes',

    // Mail Professional Page
    mailBadge: 'FONCTIONNALITÉS',
    mailHeroTitle: 'Créez un e-mail professionnel pour votre entreprise',
    mailHeroSub: 'Une adresse e-mail qui correspond à votre domaine personnalisé pour rendre votre marque plus crédible.',
    howItWorks: '4 Étapes pour Configurer Votre E-mail Professionnel',
    needMore: 'Besoin de plus ? Obtenez un plan sur mesure',
    needMoreDesc: 'Si vous avez besoin de plus de 50 comptes e-mail, contactez notre équipe pour créer un plan personnalisé.',
    aiDevTitle: 'Développement IA: Solutions de Pointe',
    companyTimeline: 'Chronologie de l\'Entreprise',

    // Footer & Meta
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

    // Actions & Common Buttons
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

    // Home Page
    heroHeading: 'विचारों को बदलना',
    heroDesc: 'हम सॉफ्टवेयर, हार्डवेयर, प्रोफेशनल ईमेल, अकाउंटिंग सिस्टम, स्मार्ट कंट्रोल और वेब डेवलपमेंट में संपूर्ण समाधान प्रदान करते हैं।',
    allInOneTitle: 'आपका ऑल-इन-वन टेक पार्टनर',
    allInOneDesc: 'प्रोफेशनल ईमेल से लेकर स्मार्ट कंट्रोल, वेब पोर्टल और अकाउंटिंग तक — हमारी सेवाएं आपके व्यवसाय के विकास के हर चरण को कवर करती हैं।',
    coreServices: 'मुख्य सेवाएं',
    uptimeGuarantee: 'अपटाइम गारंटी',
    techSupport: '24/7 तकनीकी सहायता',
    globalClients: 'वैश्विक ग्राहक',

    // Web Design Page
    webDesignBadge: 'वेब डिजाइन और इंजीनियरिंग',
    webDesignHeroTitle: 'कस्टम वेब डिजाइनिंग और डिजिटल इंजीनियरिंग',
    webDesignHeroSub: 'हम आपके ब्रांड की विश्वसनीयता बढ़ाने और अधिकतम रूपांतरण लाने के लिए उच्च प्रदर्शन वाली वेबसाइटें और ऐप बनाते हैं।',
    coreCapabilities: 'मुख्य क्षमताएं',
    everythingNeeded: 'आपकी वेबसाइट की सफलता के लिए सब कुछ',
    exploreShowcase: 'हमारी आधुनिक वेबसाइट शोकेस देखें',
    processTitle: 'हमारी वेब डिजाइन प्रक्रिया',
    startWebProject: 'अपना वेब प्रोजेक्ट शुरू करें',
    viewShowcase: 'शोकेस देखें',
    allProjects: 'सभी प्रोजेक्ट',
    eCommerce: 'ई-कॉमर्स',
    corporate: 'कॉरपोरेट',
    saasApps: 'सास और ऐप्स',

    // Digital Marketing Page
    marketingBadge: 'डिजिटल मार्केटिंग और ग्रोथ',
    marketingHeroTitle: 'डेटा-ड्रिवन डिजिटल मार्केटिंग और ग्रोथ इंजीनियरिंग',
    marketingHeroSub: 'हम उच्च आरओआई डिजिटल मार्केटिंग अभियानों, सोशल मीडिया रणनीतियों और लक्षित विज्ञापनों के माध्यम से राजस्व बढ़ाते हैं।',
    marketingPackages: 'ग्रोथ मार्केटिंग पैकेज',
    campaignShowcase: 'मल्टी-चैनल अभियान',
    marketingWorkflow: 'ग्रोथ रणनीति वर्कफ़्लो',

    // Accounting Page
    accountingBadge: 'ईआरपी और वित्तीय प्रणाली',
    accountingHeroTitle: 'आधुनिक उद्यमों के लिए स्मार्ट अकाउंटिंग और ओडू ईआरपी सिस्टम',
    accountingHeroSub: 'हमारे प्रमाणित ओडू ईआरपी कार्यान्वयन के साथ कंपनी के वित्तीय स्वास्थ्य, ई-इनवॉइसिंग और पेरोल पर पूर्ण नियंत्रण पाएं।',
    accountingPlans: 'अकाउंटिंग और ईआरपी योजनाएं',
    integrationWorkflow: '3-चरण एकीकरण प्रक्रिया',

    // Mail Professional Page
    mailBadge: 'विशेषताएं',
    mailHeroTitle: 'अपने व्यवसाय के लिए पेशेवर ईमेल बनाएं',
    mailHeroSub: 'अपने कस्टम डोमेन से मेल खाता ईमेल पता ताकि आपका ब्रांड अधिक विश्वसनीय दिखे।',
    howItWorks: 'प्रोफेशनल ईमेल सेटअप करने के 4 आसान चरण',
    needMore: 'कस्टम प्लान चाहिए?',
    needMoreDesc: 'यदि आपको 50 से अधिक ईमेल खातों की आवश्यकता है, तो संपर्क करें और हमारी टीम एक कस्टम प्लान तैयार करेगी।',
    aiDevTitle: 'एआई विकास: अत्याधुनिक समाधान',
    companyTimeline: 'कंपनी टाइमलाइन',

    // Footer & Meta
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
