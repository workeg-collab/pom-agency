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

    // Common Headings
    heroSubtitle: 'Turning Ideas Into Software, Hardware & Digital Engineering Solutions.',
    pricingPlans: 'Pricing Plans',
    whatWeDo: 'What We Do',
    contactInfo: 'Contact Information',
    
    // Footer & Meta
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

    // Actions & Buttons
    getStarted: 'ابدأ الآن',
    contactUs: 'تواصل معنا',
    addToCart: 'أضف إلى السلة',
    subscribeNow: 'اشترك الآن',
    learnMore: 'اعرف المزيد',
    viewDetails: 'عرض التفاصيل',
    allRightsReserved: 'جميع الحقوق محفوظة.',

    // Common Headings
    heroSubtitle: 'تحويل الأفكار إلى حلول برمجية وأنظمة هندسية وتحديث رقمي شامل.',
    pricingPlans: 'خطط الأسعار',
    whatWeDo: 'ماذا نقدم',
    contactInfo: 'معلومات الاتصال',

    // Footer & Meta
    footerDesc: 'مؤسسة رائدة في تقديم حلول تصميم المواقع، أنظمة ERP المحاسبية، التحكم الذكي، والتسويق الرقمي.'
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

    // Common Headings
    heroSubtitle: 'Transformer les idées en solutions logicielles, matérielles et ingénierie numérique.',
    pricingPlans: 'Plans de Tarification',
    whatWeDo: 'Ce Que Nous Faisons',
    contactInfo: 'Informations de Contact',

    // Footer & Meta
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

    // Actions & Buttons
    getStarted: 'शुरू करें',
    contactUs: 'संपर्क करें',
    addToCart: 'कार्ट में जोड़ें',
    subscribeNow: 'अभी सदस्यता लें',
    learnMore: 'और जानें',
    viewDetails: 'विवरण देखें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',

    // Common Headings
    heroSubtitle: 'विचारों को सॉफ्टवेयर, हार्डवेयर और डिजिटल इंजीनियरिंग समाधानों में बदलना।',
    pricingPlans: 'मूल्य निर्धारण योजनाएं',
    whatWeDo: 'हम क्या करते हैं',
    contactInfo: 'संपर्क विवरण',

    // Footer & Meta
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
