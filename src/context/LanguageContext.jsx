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

    // Home Page
    heroHeading: 'Turning Ideas Into',
    heroDesc: 'We provide complete solutions in software, hardware, professional email, accounting systems, smart control, website development, and social media management — your business growth starts here.',
    allInOneTitle: 'Your All-in-One Tech Partner',
    allInOneDesc: 'From professional email and smart control to websites, accounting, and social media — our integrated services cover every step of your business growth.',
    coreServices: 'Core Services',

    // Web Design Page
    webDesignHeroTitle: 'Custom Web Design & Digital Engineering',
    webDesignHeroSub: 'We build high-performance, responsive websites and custom web applications designed to elevate your brand credibility, delight users, and drive maximum business conversions.',
    exploreShowcase: 'Explore Our Modern Website Showcase',
    processTitle: 'Our Web Design Process',

    // Digital Marketing Page
    marketingHeroTitle: 'Data-Driven Digital Marketing & Growth Engineering',
    marketingHeroSub: 'We engineer high-ROI digital marketing campaigns, social media strategies, targeted paid advertising, and search engine dominance to scale your revenue.',
    marketingPackages: 'Growth Marketing Packages',

    // Accounting Page
    accountingHeroTitle: 'Smart Accounting & Odoo ERP Systems for Modern Enterprises',
    accountingHeroSub: 'Take full control of your company financial health, electronic invoicing, inventory, and payroll with our certified Odoo ERP and custom accounting implementations.',
    accountingPlans: 'Accounting & ERP Pricing Plans',

    // Footer
    footerDesc: 'Empowering businesses with modern web engineering, ERP systems, smart control, and digital growth.'
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

    // Home Page
    heroHeading: 'تحويل الأفكار إلى',
    heroDesc: 'نحن نقدم حلولاً متكاملة في البرمجيات والأجهزة والبريد الإلكتروني الاحترافي والأنظمة المحاسبية والتحكم الذكي وتطوير المواقع وتطوير الأعمال.',
    allInOneTitle: 'شريكك التقني المتكامل',
    allInOneDesc: 'من البريد الاحترافي والتحكم الذكي إلى المواقع الإلكترونية والمحاسبة والتسويق — خدماتنا تغطي جميع مراحل نمو عملك.',
    coreServices: 'الخدمات الرئيسية',

    // Web Design Page
    webDesignHeroTitle: 'تصميم المواقع وتطوير الهندسة الرقمية',
    webDesignHeroSub: 'نقوم ببناء مواقع إلكترونية متجاوبة وعالية الأداء وتطبيقات ويب مخصصة لتعزيز مصداقية علامتك التجارية وزيادة المبيعات.',
    exploreShowcase: 'استكشف معرض نماذج المواقع الحديثة',
    processTitle: 'مراحل وخطوات تصميم المواقع',

    // Digital Marketing Page
    marketingHeroTitle: 'التسويق الرقمي القائم على البيانات واستراتيجيات النمو',
    marketingHeroSub: 'نقوم بصياغة حملات تسويق رقمي عالية العائد وإدارة منصات التواصل الاجتماعي وإعلانات ممولة مستهدفة وتصدر محركات البحث.',
    marketingPackages: 'باقات التسويق الرقمي والنمو',

    // Accounting Page
    accountingHeroTitle: 'الأنظمة المحاسبية الذكية وحلول Odoo ERP للمؤسسات الحديثة',
    accountingHeroSub: 'سيطر بالكامل على الصحة المالية لشركتك والفاتورة الإلكترونية والمخازن والمرتبات مع حلول Odoo ERP المعتمدة.',
    accountingPlans: 'خطط وأسعار الأنظمة المحاسبية والـ ERP',

    // Footer
    footerDesc: 'تمكين الشركات والمؤسسات بأحدث تكنولوجيات البرمجة، أنظمة ERP المحاسبية، التحكم الذكي، والتسويق الرقمي.'
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

    // Home Page
    heroHeading: 'Transformer les idées en',
    heroDesc: 'Nous fournissons des solutions complètes en logiciels, matériel, e-mail professionnel, systèmes comptables, contrôle intelligent et développement web.',
    allInOneTitle: 'Votre Partenaire Tech Tout-en-Un',
    allInOneDesc: 'De l’e-mail professionnel au contrôle intelligent en passant par les sites web et la comptabilité — nos services couvrent chaque étape de votre croissance.',
    coreServices: 'Services Principaux',

    // Web Design Page
    webDesignHeroTitle: 'Conception Web Sur Mesure & Ingénierie Numérique',
    webDesignHeroSub: 'Nous construisons des sites web performants, réactifs et des applications sur mesure pour renforcer votre crédibilité et stimuler vos conversions.',
    exploreShowcase: 'Explorez Notre Vitrine de Sites Web',
    processTitle: 'Notre Processus de Conception Web',

    // Digital Marketing Page
    marketingHeroTitle: 'Marketing Digital Basé sur les Données & Croissance',
    marketingHeroSub: 'Nous concevons des campagnes marketing à fort ROI, des stratégies médias sociaux et des publicités ciblées pour développer vos revenus.',
    marketingPackages: 'Packages Marketing & Croissance',

    // Accounting Page
    accountingHeroTitle: 'Comptabilité Intelligente & Systèmes Odoo ERP',
    accountingHeroSub: 'Prenez le contrôle total de la santé financière de votre entreprise, de la facturation électronique et de la paie avec Odoo ERP.',
    accountingPlans: 'Plans Comptabilité & ERP',

    // Footer
    footerDesc: "Autonomiser les entreprises grâce à l'ingénierie web moderne, aux systèmes ERP et au contrôle intelligent."
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

    // Home Page
    heroHeading: 'विचारों को बदलना',
    heroDesc: 'हम सॉफ्टवेयर, हार्डवेयर, प्रोफेशनल ईमेल, अकाउंटिंग सिस्टम, स्मार्ट कंट्रोल और वेब डेवलपमेंट में संपूर्ण समाधान प्रदान करते हैं।',
    allInOneTitle: 'आपका ऑल-इन-वन टेक पार्टनर',
    allInOneDesc: 'प्रोफेशनल ईमेल से लेकर स्मार्ट कंट्रोल, वेब पोर्टल और अकाउंटिंग तक — हमारी सेवाएं आपके व्यवसाय के विकास के हर चरण को कवर करती हैं।',
    coreServices: 'मुख्य सेवाएं',

    // Web Design Page
    webDesignHeroTitle: 'कस्टम वेब डिजाइनिंग और डिजिटल इंजीनियरिंग',
    webDesignHeroSub: 'हम आपके ब्रांड की विश्वसनीयता बढ़ाने और अधिकतम रूपांतरण लाने के लिए उच्च प्रदर्शन वाली वेबसाइटें और ऐप बनाते हैं।',
    exploreShowcase: 'हमारी आधुनिक वेबसाइट शोकेस देखें',
    processTitle: 'हमारी वेब डिजाइन प्रक्रिया',

    // Digital Marketing Page
    marketingHeroTitle: 'डेटा-ड्रिवन डिजिटल मार्केटिंग और ग्रोथ इंजीनियरिंग',
    marketingHeroSub: 'हम उच्च आरओआई डिजिटल मार्केटिंग अभियानों, सोशल मीडिया रणनीतियों और लक्षित विज्ञापनों के माध्यम से राजस्व बढ़ाते हैं।',
    marketingPackages: 'ग्रोथ मार्केटिंग पैकेज',

    // Accounting Page
    accountingHeroTitle: 'आधुनिक उद्यमों के लिए स्मार्ट अकाउंटिंग और ओडू ईआरपी सिस्टम',
    accountingHeroSub: 'हमारे प्रमाणित ओडू ईआरपी कार्यान्वयन के साथ कंपनी के वित्तीय स्वास्थ्य, ई-इनवॉइसिंग और पेरोल पर पूर्ण नियंत्रण पाएं।',
    accountingPlans: 'अकाउंटिंग और ईआरपी मूल्य निर्धारण योजनाएं',

    // Footer
    footerDesc: 'आधुनिक वेब इंजीनियरिंग, ईआरपी सिस्टम, स्मार्ट कंट्रोल और डिजिटल विकास के साथ व्यवसायों को सशक्त बनाना।'
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
