import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  Monitor, 
  Code, 
  Search, 
  BarChart3, 
  Mail, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Sliders, 
  ExternalLink,
  Layout,
  Smartphone,
  Zap,
  Globe,
  ShoppingCart,
  Building,
  Briefcase
} from 'lucide-react';
import './WebDesignPage.css';

export default function WebDesignPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const webDesignPillars = [
    {
      icon: Layout,
      title: lang === 'ar' ? 'تصميم واجهات UI/UX المخصصة' : 'Custom UI/UX Design',
      desc: lang === 'ar' 
        ? 'تصميم واجهات ومستندات بيكسل-بيرفكت ترتكز على تجربة المستخدم لترسيخ الهوية في الأذهان.'
        : 'Pixel-perfect, user-centered interface designs crafted to deliver memorable digital experiences.'
    },
    {
      icon: Smartphone,
      title: lang === 'ar' ? 'تجاوب كامل مع الهواتف الذكية' : 'Responsive & Mobile-First',
      desc: lang === 'ar'
        ? 'تجاوب تلقائي انسيابي يتيح تصفح موقعك على الهواتف والأجهزة اللوحية وشاشات 4K بكفاءة عالية.'
        : 'Seamless layouts that adapt dynamically across smartphones, tablets, laptops, and 4K displays.'
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'سرعة فتح فائقة فائقة الأداء' : 'Lightning Speed Performance',
      desc: lang === 'ar'
        ? 'أكواد ومكونات برمجية فائقة السرعة تضمن فتح صفحة موقعك في أقل من 1.5 ثانية.'
        : 'Optimized code structures, compressed assets, and fast loading speeds under 1.5 seconds.'
    },
    {
      icon: Search,
      title: lang === 'ar' ? 'تهيئة محركات البحث (SEO)' : 'Technical SEO Built-in',
      desc: lang === 'ar'
        ? 'هيكلية برمجة متوافقة مع محركات البحث جوجل مع خراط السيرفر وسكيمة داتا لتصدر النتائج.'
        : 'Clean HTML5 semantic structure, Schema markup, and SEO best practices for high search rankings.'
    },
    {
      icon: ShoppingCart,
      title: lang === 'ar' ? 'حلول المتاجر الإلكترونية' : 'E-Commerce Solutions',
      desc: lang === 'ar'
        ? 'تصميم متاجر الكترونية عالية التحويل مع ربط بوابات الدفع الإلكتروني وحركة المخازن.'
        : 'High-converting online store designs with payment gateway integrations and inventory controls.'
    },
    {
      icon: Code,
      title: lang === 'ar' ? 'تطبيقات الويب المخصصة' : 'Custom Web Apps',
      desc: lang === 'ar'
        ? 'منصات SaaS، لوحات تحكم، وأنظمة إدارة ويب مخصصة ومبنية بأحدث أطر البرمجة.'
        : 'Tailored SaaS platforms, dashboards, and enterprise web systems built with modern frameworks.'
    }
  ];

  const showcases = [
    {
      id: 'ecommerce',
      category: 'ecommerce',
      title: lang === 'ar' ? 'متجر إلكتروني حديث متكامل' : 'Modern E-Commerce Storefront',
      subtitle: lang === 'ar' ? 'منصة تسوق وتجزئة عبر الإنترنت' : 'Online Retail & Shopping Portal',
      image: '/assets/Pc-Android-IOS.jpg',
      tags: ['React', 'WooCommerce', 'Stripe Pay'],
      desc: lang === 'ar'
        ? 'منصة تسوق إلكتروني عالية التحويل تتميز بإدارة المخزون الفوري، الدفع بأسعار عملات متعددة وتجربة هاتف انسيابية.'
        : 'High-conversion online shopping platform featuring real-time inventory, multi-currency checkout, and seamless mobile UX.'
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: lang === 'ar' ? 'بوابة شركات ومؤسسات كبرى' : 'Corporate Business Portal',
      subtitle: lang === 'ar' ? 'موقع مؤسسي ومكاتب استشارية' : 'Enterprise & Agency Website',
      image: '/assets/campaign-creators-771730-unsplash.jpg',
      tags: ['Next.js', 'Tailwind', 'SEO Built-in'],
      desc: lang === 'ar'
        ? 'منصة متطورة للشركات تعرض جميع الخدمات وحاسبة أسعار تفاعلية ودعم كامل للغات متعددة.'
        : 'Sophisticated corporate platform with service showcases, interactive quote calculators, and multi-language support.'
    },
    {
      id: 'saas',
      category: 'saas',
      title: lang === 'ar' ? 'لوحة تحكم منصات SaaS الذكية' : 'SaaS Platform Dashboard',
      subtitle: lang === 'ar' ? 'تطبيق حوسبة وتليمتري سحابي' : 'Cloud Tech & Analytics App',
      image: '/assets/Post-1.jpg',
      tags: ['React', 'Chart.js', 'REST API'],
      desc: lang === 'ar'
        ? 'لوحة تحكم بنظاميها المظلم والفاتح مصممة لتحليل البيانات ورسم المخططات وإدارة الاشتراكات.'
        : 'Sleek dark/light theme dashboard interface designed for data visualization, user management, and cloud subscriptions.'
    },
    {
      id: 'realestate',
      category: 'corporate',
      title: lang === 'ar' ? 'منصة العقارات والاستثمار' : 'Real Estate & Property Showcase',
      subtitle: lang === 'ar' ? 'بوابة عرض وعقارات تفاعلية' : 'Property Listing Portal',
      image: '/assets/Post-3.jpg',
      tags: ['Interactive Map', 'Filter Search'],
      desc: lang === 'ar'
        ? 'موقع عقاري غني بالخصائص خرائط تفاعلية، جولات افتراضية للمشاريع ونماذج جلب العملاء.'
        : 'Feature-rich real estate website with interactive property maps, virtual tour embeds, and lead capture forms.'
    },
    {
      id: 'portfolio',
      category: 'creative',
      title: lang === 'ar' ? 'معرض أعمال الوكالات الإبداعية' : 'Creative Agency Portfolio',
      subtitle: lang === 'ar' ? 'استوديو الهوية والعلامات التجارية' : 'Brand & Creative Studio',
      image: '/assets/Post-4.jpg',
      tags: ['Animated UI', 'GSAP', 'Minimalist'],
      desc: lang === 'ar'
        ? 'معرض إبداعي فريد يعرض دراسات الحالة بتأثيرات بصرية وانيميشن تفاعلي راقي.'
        : 'High-impact creative portfolio showcasing brand case studies with smooth micro-interactions and typography.'
    },
    {
      id: 'educational',
      category: 'saas',
      title: lang === 'ar' ? 'منصة التعليم والتطوير الذكي' : 'EdTech & Learning Management',
      subtitle: lang === 'ar' ? 'منصة كورسات ودورات إلكترونية' : 'Online Courses & LMS Platform',
      image: '/assets/Post-5.jpg',
      tags: ['Video Streaming', 'Student LMS'],
      desc: lang === 'ar'
        ? 'بوابة تعليمية تفاعلية تتيح بث الدروس والتحكم في تقدم الطلاب وإصدار الشهادات التلقائي.'
        : 'Interactive learning portal with video lesson streaming, student progress tracking, and automated certificate generation.'
    }
  ];

  const processSteps = [
    { 
      num: '01', 
      title: lang === 'ar' ? 'الاستكشاف وتخطيط الهيكل (Wireframing)' : 'Discovery & Wireframing', 
      desc: lang === 'ar' ? 'تحليل متطلبات العلامة التجارية والهوية، دراسة الجمهور وتحديد هيكل وصفحات الموقع.' : 'Analyzing brand requirements, user personas, site architecture, and wireframe layouts.' 
    },
    { 
      num: '02', 
      title: lang === 'ar' ? 'التصميم البصري للواجهات (UI/UX)' : 'UI/UX Visual Prototype', 
      desc: lang === 'ar' ? 'تصميم الواجهات والنماذج التفاعلية باختيار الألوان والخطوط والأيقونات المناسبة.' : 'Designing high-fidelity interactive mockups with color palettes, typography, and UI assets.' 
    },
    { 
      num: '03', 
      title: lang === 'ar' ? 'البرمجة والتطوير المتقدم' : 'Frontend & Backend Code', 
      desc: lang === 'ar' ? 'تطوير الأكواد البرمجية سريعة التجاوب والربط مع قواعد البيانات وقنوات API.' : 'Developing clean, responsive, fast-loading codebase integrated with custom CMS or APIs.' 
    },
    { 
      num: '04', 
      title: lang === 'ar' ? 'الاختبار والإطلاق الرسمي' : 'Testing & Official Launch', 
      desc: lang === 'ar' ? 'اختبار التوافق الشامل مع كافة المتصفحات، فحص الأمان وسرعة الفتح، والإطلاق الرسمي.' : 'Rigorous cross-browser QA testing, SEO audit, security checks, and official deployment.' 
    }
  ];

  const filteredShowcases = activeFilter === 'all' 
    ? showcases 
    : showcases.filter(s => s.category === activeFilter);

  return (
    <div className="web-design-page">
      {/* Top Hero Section */}
      <section className="webdesign-hero-section">
        <div className="container grid-2-col align-center">
          <div className="webdesign-hero-text">
            <div className="badge"><Monitor size={14} /> {t('webDesignBadge')}</div>
            <h1 className="webdesign-hero-title">{t('webDesignHeroTitle')}</h1>
            <p className="page-header-sub text-left">
              {t('webDesignHeroSub')}
            </p>
            <div className="hero-actions mt-4">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('startWebProject')} <ArrowRight size={18} />
              </Link>
              <a href="#showcase" className="btn btn-secondary">
                {t('viewShowcase')}
              </a>
            </div>
          </div>
          <div className="webdesign-hero-visual">
            <div className="webdesign-big-image-box">
              <img 
                src="/assets/campaign-creators-771730-unsplash.jpg" 
                alt="Web Design Engineering Team in Action" 
                className="webdesign-big-hero-img"
              />
              <div className="hero-img-floating-badge">
                <Sparkles size={16} className="text-primary" />
                <span>{lang === 'ar' ? 'تصميم مخصص 100% متجاوب' : '100% Custom Responsive Design'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Overview Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('coreCapabilities')}</div>
          <h2 className="section-title">{t('everythingNeeded')}</h2>
          <p className="section-subtitle">
            {t('webDesignPillarsSub')}
          </p>

          <div className="grid-3-col">
            {webDesignPillars.map((p, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <p.icon size={26} className="pillar-icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'مدرج ضمن القياسات' : 'Included Standard'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Showcase Cards */}
      <section className="section" id="showcase">
        <div className="container">
          <div className="badge-center"><Layout size={14} /> {t('portfolioShowcaseBadge')}</div>
          <h2 className="section-title">{t('exploreShowcase')}</h2>
          <p className="section-subtitle">
            {t('showcaseSub')}
          </p>

          {/* Filter Tabs */}
          <div className="showcase-filter-row flex-center gap-2 mb-4">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {t('allProjects')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ecommerce')}
            >
              {t('eCommerce')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveFilter('corporate')}
            >
              {t('corporate')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'saas' ? 'active' : ''}`}
              onClick={() => setActiveFilter('saas')}
            >
              {t('saasApps')}
            </button>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid-2-col showcase-grid">
            {filteredShowcases.map((project) => (
              <div key={project.id} className="card showcase-big-card">
                <div className="showcase-img-wrapper">
                  <img src={project.image} alt={project.title} className="showcase-img" />
                  <div className="showcase-overlay">
                    <Link to="/mail-professional" className="btn btn-primary btn-sm">
                      {t('requestSimilarDesign')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="showcase-details">
                  <div className="showcase-header">
                    <div>
                      <span className="showcase-subtitle">{project.subtitle}</span>
                      <h3 className="showcase-title">{project.title}</h3>
                    </div>
                  </div>
                  <p className="showcase-desc">{project.desc}</p>
                  <div className="showcase-tags">
                    {project.tags.map((tItem, i) => (
                      <span key={i} className="tech-badge">{tItem}</span>
                    ))}
                  </div>
                  <div className="showcase-actions mt-3">
                    <Link to="/mail-professional" className="btn btn-outline full-width">
                      {t('getStarted')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Code size={14} /> {t('methodologyBadge')}</div>
          <h2 className="section-title">{t('processTitle')}</h2>
          <p className="section-subtitle">{t('processSub')}</p>

          <div className="grid-4-col process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="card process-card">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth CTA */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2>{t('readyLaunchWebsite')}</h2>
          <p className="section-subtitle">{t('readyLaunchSub')}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('startWebProject')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
