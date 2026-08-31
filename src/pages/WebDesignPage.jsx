import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Monitor, 
  Smartphone, 
  Layout, 
  Code, 
  Zap, 
  Search, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Sliders, 
  Globe, 
  Building2, 
  Briefcase, 
  Award, 
  Activity, 
  Eye, 
  Palette, 
  ShieldCheck, 
  Cpu, 
  ExternalLink, 
  FileText
} from 'lucide-react';
import './WebDesignPage.css';

export default function WebDesignPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('performance');

  const webDesignPillars = [
    {
      icon: Layout,
      title: lang === 'ar' ? 'تصميم واجهات وتجربة المستخدم (UI/UX)' : 'Custom UI/UX Architecture',
      desc: lang === 'ar' 
        ? 'تصميم واجهات بيكسل-بيرفكت ترتكز على سهولة الاستخدام وتوجيه الزائر نحو قرار الشراء والطلب.'
        : 'Pixel-perfect, conversion-driven UI/UX design crafted on Figma with seamless user journey mapping.'
    },
    {
      icon: Code,
      title: lang === 'ar' ? 'تطوير مواقع وتطبيقات React 19 & Next.js' : 'React 19 & Next.js Full-Stack',
      desc: lang === 'ar'
        ? 'برمجة حديثة فائقة المرونة تضمن أعلى معايير الأمان وقابلية التوسع مع واجهات برمجية REST/GraphQL.'
        : 'Modern component-driven frontend architecture, Server-Side Rendering (SSR), and seamless API integration.'
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'سرعة فتح البرق (Lighthouse 100/100)' : 'Lightning Speed (< 1.2s Load Time)',
      desc: lang === 'ar'
        ? 'ضغط ذكي للملفات والصور، كود نظيف وتخزين مؤقت متطور لفتح صفحات موقعك في أجزاء من الثانية.'
        : 'Engineered for instant rendering with edge CDN caching, image WebP compression, and zero code bloat.'
    },
    {
      icon: Search,
      title: lang === 'ar' ? 'تهيئة محركات البحث المتقدمة (SEO Built-in)' : 'Built-in Technical SEO & Schema',
      desc: lang === 'ar'
        ? 'بنية برمجية متوافقة بالكامل مع خوارزميات جوجل مع خرائط XML وسكيمة داتا لتصدر النتائج الأولى.'
        : 'Semantic HTML5 markup, Schema.org rich snippets, OpenGraph social cards, and instant Google indexing.'
    },
    {
      icon: ShoppingCart,
      title: lang === 'ar' ? 'متاجر إلكترونية عالية التحويل (E-Commerce)' : 'High-Converting E-Commerce Stores',
      desc: lang === 'ar'
        ? 'بناء متاجر شوبيفاي، ووكومرس، ومتاجر مخصصة مع ربط بوابات الدفع الإلكتروني وحساب الشحن التلقائي.'
        : 'Custom WooCommerce and Shopify storefronts with multi-currency checkout, Apple Pay, and inventory sync.'
    },
    {
      icon: Smartphone,
      title: lang === 'ar' ? 'تجاوب فائق مع جميع الهواتف الذكية' : '100% Mobile-First Responsive Design',
      desc: lang === 'ar'
        ? 'مظهر انسيابي متناسق يتكيف تلقائياً مع شاشات الهواتف والتابلت واللابتوب وشاشات الـ 4K بدقة متناهية.'
        : 'Fluid responsive layout system guaranteeing flawless visual appeal across all iPhone, Android, and tablets.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'أمان فائق وحماية من الاختراق (SSL & WAF)' : 'Enterprise Security & SSL Encryption',
      desc: lang === 'ar'
        ? 'شهادات أمان SSL مشفرة، جدران حماية ضد هجمات DDoS وفحص أمني دوري لقواعد البيانات والمكونات.'
        : 'Automated DDoS mitigation, end-to-end HTTPS encryption, daily cloud backups, and sanitization filters.'
    },
    {
      icon: Sliders,
      title: lang === 'ar' ? 'لوحة تحكم سهلة وتدريب كامل لفريقك' : 'Custom CMS & Easy Content Control',
      desc: lang === 'ar'
        ? 'لوحة إدارة محتوى عربية سهلة وسلسة تتيح لك تعديل النصوص وإضافة المنتجات والمقالات بضغطة زر.'
        : 'Intuitive bilingual content management panel allowing non-technical staff to update content effortlessly.'
    }
  ];

  const packages = [
    {
      id: 'web-starter-business',
      title: lang === 'ar' ? 'باقة موقع الشركات والأعمال (Business)' : 'Corporate Business Website',
      subtitle: lang === 'ar' ? 'للشركات والمكاتب الاستشارية والخدمية' : 'Consulting, Corporate & Service Firms',
      price: 1999.99,
      recommended: false,
      image: '/assets/web-corporate-portal.jpg',
      features: lang === 'ar' ? [
        'تصميم مخصص من 5 إلى 7 صفحات رئيسية',
        'تجاوب كامل 100% مع الهواتف الذكية',
        'لوحة تحكم سهلة لإدارة وتعديل المحتوى',
        'شهادة أمان SSL مجانية ونموذج تواصل ذكي',
        'تهيئة أساسية لمحركات البحث في جوجل (SEO)'
      ] : [
        'Custom 5 to 7 Corporate Pages',
        '100% Mobile-First Responsive Layout',
        'User-Friendly CMS Content Control Panel',
        'Free SSL Certificate & Lead Contact Forms',
        'Standard Google SEO & Meta Tags'
      ]
    },
    {
      id: 'web-ecommerce-scale',
      title: lang === 'ar' ? 'باقة المتجر الإلكتروني المتكامل (E-Commerce Pro)' : 'Full E-Commerce Storefront Pro',
      subtitle: lang === 'ar' ? 'للعلامات التجارية والمتاجر الإلكترونية' : 'Growing E-Commerce Brands & Retailers',
      price: 3999.99,
      recommended: true,
      image: '/assets/web-ecommerce-ux.jpg',
      features: lang === 'ar' ? [
        'متجر إلكتروني متكامل حتى 500 منتج',
        'ربط بوابات الدفع الإلكتروني (فيزا، ماستركارد، مدى، تقسيط)',
        'نظام حساب الشحن وتتبع الطلبات التلقائي',
        'سلة مشتريات ذكية منبثقة (Quick Cart Drawer)',
        'ربط بيكسل إعلانات فيسبوك، تيك توك وجوجل',
        'تدريب كامل لفريقك ودعم فني مخصص'
      ] : [
        'Complete Storefront (up to 500 Products)',
        'Payment Gateways (Stripe, Visa, Apple Pay)',
        'Automated Shipping Rates & Order Tracking',
        'High-Converting Quick Slide Cart Drawer',
        'Full Meta, TikTok & Google Pixel Tracking',
        'Dedicated Staff Training & Priority Support'
      ]
    },
    {
      id: 'web-custom-saas-enterprise',
      title: lang === 'ar' ? 'باقة المنصات وتطبيقات الويب (SaaS & Enterprise)' : 'Custom Web App & SaaS Platform',
      subtitle: lang === 'ar' ? 'للمنصات التقنية والأنظمة الكبرى' : 'SaaS Startups, Web Portals & Holdings',
      price: 7999.99,
      recommended: false,
      image: '/assets/web-saas-dashboard.jpg',
      features: lang === 'ar' ? [
        'تطوير مخصص بأحدث أطر العمل (React 19 / Next.js)',
        'لوحات تحكم تفاعلية مع رسوم بيانية حية',
        'نظام تسجيل دخول المستخدمين والصلاحيات المتعددة',
        'ربط قواعد البيانات وواجهات API السحابية',
        'أعلى درجات الأمان وحماية البيانات وتشفيرها',
        'مهندس برمجيات رئيسي مخصص وضمان تشغيل 100%'
      ] : [
        'Custom Architecture (React 19 / Next.js / Node)',
        'Interactive Analytics Dashboards & Charts',
        'Role-Based User Authentication & Permissions',
        'Cloud Database & REST/GraphQL API Integration',
        'Enterprise Security, WAF & Cloudflare CDN',
        'Dedicated Lead Engineer & 100% SLA Guarantee'
      ]
    }
  ];

  const visualGallery = [
    {
      img: '/assets/web-hero-multidevice.jpg',
      title: lang === 'ar' ? 'تجاوب متعدد الأجهزة (Multi-Device UX)' : 'Multi-Device Responsive Canvas',
      desc: lang === 'ar' ? 'تصميمات انسيابية تتألق على اللابتوب والتابلت وشاشات الهواتف.' : 'Flawless visual rendering across desktop, tablet, and smartphone screens.'
    },
    {
      img: '/assets/web-ecommerce-ux.jpg',
      title: lang === 'ar' ? 'متاجر إلكترونية فائقة الأناقة' : 'Luxury E-Commerce Storefronts',
      desc: lang === 'ar' ? 'واجهات تجزئة ترتكز على سرعة الطلب وتجربة سلة سلسة.' : 'Conversion-optimized product catalogs with instant checkout flows.'
    },
    {
      img: '/assets/web-saas-dashboard.jpg',
      title: lang === 'ar' ? 'لوحات تحكم منصات SaaS' : 'SaaS Analytics & Web Apps',
      desc: lang === 'ar' ? 'منصات رقمية متطورة لإدارة الاشتراكات والبيانات السحابية.' : 'High-tech dark UI dashboards with interactive data visualization.'
    },
    {
      img: '/assets/web-corporate-portal.jpg',
      title: lang === 'ar' ? 'بوابات الشركات والمؤسسات' : 'Corporate Identity Web Portals',
      desc: lang === 'ar' ? 'مواقع تعكس فخامة علامتك التجارية وتجلب صفقات مستمرة.' : 'Sophisticated corporate portals engineered for brand prestige.'
    }
  ];

  const processSteps = [
    { 
      num: '01', 
      title: lang === 'ar' ? 'تحليل المتطلبات وتخطيط الهيكل (Wireframing)' : 'Discovery & Architecture Blueprint', 
      desc: lang === 'ar' ? 'دراسة هوية علامتك التجارية، تحليل تجربة المستخدم، ورسم المخططات الهيكلية (Wireframes).' : 'Analyzing user personas, competitive landscape, site sitemap, and interactive wireframes.' 
    },
    { 
      num: '02', 
      title: lang === 'ar' ? 'التصميم البصري التفاعلي (Figma UI/UX)' : 'Interactive UI/UX Prototype', 
      desc: lang === 'ar' ? 'ابتكار واجهات بصرية عصرية بألوان وخطوط جذابة مع بروتوتايب تفاعلي حي قبل البرمجة.' : 'Crafting high-fidelity prototypes with brand colors, typography, and micro-interactions.' 
    },
    { 
      num: '03', 
      title: lang === 'ar' ? 'التطوير البرمجي والربط السحابي' : 'Modern Full-Stack Engineering', 
      desc: lang === 'ar' ? 'كتابة أكواد برمجية نظيفة وسريعة (React/Next.js)، ربط بوابات الدفع وقواعد البيانات.' : 'Developing clean, modular code with server-side rendering, secure APIs, and custom CMS.' 
    },
    { 
      num: '04', 
      title: lang === 'ar' ? 'اختبارات الأداء والإطلاق الرسمي' : 'Speed Testing & Official Launch', 
      desc: lang === 'ar' ? 'فحص سرعة الفتح، تدقيق السيو، والتأكد من التوافق الكامل مع كافة المتصفحات والهواتف.' : 'Lighthouse performance audit, technical SEO verification, QA testing, and live deployment.' 
    }
  ];

  return (
    <div className="web-design-page">
      {/* 1. Distinctive Multi-Device Responsive Hero Layout */}
      <section className="web-hero-section">
        <div className="container">
          <div className="web-hero-content">
            <div className="web-platform-pills">
              <span style={{ color: '#6366f1', fontWeight: 800 }}>React 19</span> &bull; 
              <span style={{ color: '#0f172a', fontWeight: 800 }}>Next.js</span> &bull; 
              <span style={{ color: '#38bdf8', fontWeight: 800 }}>Tailwind CSS</span> &bull; 
              <span style={{ color: '#10b981', fontWeight: 800 }}>WooCommerce</span> &bull; 
              <span style={{ color: '#f59e0b', fontWeight: 800 }}>Shopify</span> &bull; 
              <span style={{ color: '#6366f1', fontWeight: 800 }}>UI/UX Figma</span>
            </div>

            <h1 className="web-hero-title">
              {lang === 'ar' 
                ? 'تصميم وبرمجة مواقع وتطبيقات ويب حديثة تخلب الألباب وتضاعف مبيعاتك' 
                : 'Modern Web Architecture & UI/UX Engineered for Maximum Conversion'}
            </h1>
            
            <p className="web-hero-subtitle">
              {lang === 'ar'
                ? 'نصمم ونطور مواقع ومتاجر إلكترونية فائقة السرعة والأناقة: واجهات UI/UX مخصصة، تجاوب كامل مع الهواتف، درجة سرعة 100/100 في Google Lighthouse، وتوافق تام مع محركات البحث SEO لترسيخ مكانة علامتك في الصدارة.'
                : 'We design and build ultra-fast, high-converting digital storefronts and corporate portals: bespoke UI/UX, 100% mobile-first responsiveness, 100/100 Lighthouse performance, and built-in technical SEO dominance.'}
            </p>

            <div className="web-hero-actions">
              <Link to="/contact" className="btn btn-primary" style={{ background: '#6366f1', borderColor: '#6366f1' }}>
                {lang === 'ar' ? 'ابدأ مشروع موقعك الآن' : 'Start Your Web Project'} <ArrowRight size={18} />
              </Link>
              <a href="#packages" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات تصميم المواقع' : 'Explore Web Packages'}
              </a>
            </div>
          </div>

          {/* Hero Big Centerpiece Graphic */}
          <div className="web-hero-centerpiece">
            <div className="web-centerpiece-wrapper">
              <img 
                src="/assets/web-hero-multidevice.jpg" 
                alt="Multi-Device Responsive Web Design Showcase" 
                className="web-hero-img" 
              />
              
              <div className="web-float-widget web-float-widget-1">
                <div className="web-widget-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                  <Zap size={22} />
                </div>
                <div className="web-widget-text">
                  <strong>{lang === 'ar' ? 'سرعة فتح البرق (< 1.2s)' : '< 1.2s Load Time'}</strong>
                  <span>{lang === 'ar' ? 'درجة 99/100 في Lighthouse' : 'Lighthouse 99/100 Performance'}</span>
                </div>
              </div>

              <div className="web-float-widget web-float-widget-2">
                <div className="web-widget-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Smartphone size={22} />
                </div>
                <div className="web-widget-text">
                  <strong>{lang === 'ar' ? 'تجاوب 100% مع الهواتف' : '100% Mobile-First'}</strong>
                  <span>{lang === 'ar' ? 'تجربة مستخدم انسيابية وسلسة' : 'Pixel-Perfect Touch UX'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Web Engineering Stats & Performance Bar */}
      <section className="web-stats-section">
        <div className="container">
          <div className="web-stats-grid">
            <div className="web-stat-item">
              <span className="web-stat-num">99.9%</span>
              <span className="web-stat-label">{lang === 'ar' ? 'جاهزية واستقرار السيرفرات' : 'Hosting Uptime SLA'}</span>
            </div>
            <div className="web-stat-item">
              <span className="web-stat-num">&lt; 1.2s</span>
              <span className="web-stat-label">{lang === 'ar' ? 'زمن فتح الصفحة الفوري' : 'Ultra-Fast Page Load'}</span>
            </div>
            <div className="web-stat-item">
              <span className="web-stat-num">100/100</span>
              <span className="web-stat-label">{lang === 'ar' ? 'توافق Google Lighthouse' : 'Lighthouse SEO & Speed'}</span>
            </div>
            <div className="web-stat-item">
              <span className="web-stat-num">+280%</span>
              <span className="web-stat-label">{lang === 'ar' ? 'زيادة معدل تحويل الزوار' : 'Conversion Rate Boost'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Web Architecture Console */}
      <section className="web-console-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
            <Activity size={14} /> {lang === 'ar' ? 'منصة الأداء والتطوير الهندسي' : 'Web Engineering Telemetry'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'بنية برمجية فائقة التطور تمنح موقعك القوة والسرعة والأمان' : 'Engineered for Scale, Speed & Flawless Execution'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نعتمد أحدث التقنيات لضمان أعلى سرعة تحميل، توافق تام مع محركات البحث، وحماية متكاملة ضد التهديدات.' 
              : 'End-to-end transparency into Core Web Vitals, conversion rate optimization, and cloud scalability.'}
          </p>

          {/* Tab Switcher */}
          <div className="web-tab-buttons">
            <button 
              className={`web-tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              <Zap size={16} />
              <span>{lang === 'ar' ? 'السرعة ومؤشرات الويب (Lighthouse)' : 'Core Web Vitals & Speed'}</span>
            </button>
            <button 
              className={`web-tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveTab('ecommerce')}
            >
              <ShoppingCart size={16} />
              <span>{lang === 'ar' ? 'تحويلات المتاجر الإلكترونية' : 'E-Commerce CRO'}</span>
            </button>
            <button 
              className={`web-tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              <Search size={16} />
              <span>{lang === 'ar' ? 'السيو والهيكلية البرمجية' : 'Technical SEO Architecture'}</span>
            </button>
            <button 
              className={`web-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <ShieldCheck size={16} />
              <span>{lang === 'ar' ? 'الأمان والتوافر السحابي' : 'Cloud Security & CDN'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="web-console-window">
            <div className="web-window-header">
              <div className="web-window-dots">
                <div className="web-window-dot" style={{ background: '#ef4444' }} />
                <div className="web-window-dot" style={{ background: '#f59e0b' }} />
                <div className="web-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="web-window-title">
                <Code size={15} />
                <span>POM Web Engine &bull; {lang === 'ar' ? 'لوحة تليمتري أداء الموقع' : 'Production Web Diagnostics'}</span>
              </div>
              <span className="web-window-badge">{lang === 'ar' ? 'الأداء ممتاز (Grade A+)' : 'Build Healthy (100% Passed)'}</span>
            </div>

            <div className="web-window-body">
              {/* Tab 1: Performance */}
              {activeTab === 'performance' && (
                <div className="web-kpis-grid">
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'مؤشر أداء Google Lighthouse' : 'Google Lighthouse Score'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>99 / 100</span>
                    <span className="web-kpi-badge-gain"><Zap size={14} /> Top Tier Optimization</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'سرعة ظهور المحتوى (FCP)' : 'First Contentful Paint (FCP)'}</span>
                    <span className="web-kpi-value" style={{ color: '#818cf8' }}>0.45s</span>
                    <span className="web-kpi-badge-gain"><CheckCircle2 size={14} /> Instant First Paint</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'استقرار التصميم التراكمي (CLS)' : 'Cumulative Layout Shift (CLS)'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>0.00 (Zero Shift)</span>
                    <span className="web-kpi-badge-gain"><Layout size={14} /> Pixel-Stable View</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'حجم الصفحة بعد الضغط' : 'Compressed Bundle Payload'}</span>
                    <span className="web-kpi-value">148 KB</span>
                    <span className="web-kpi-badge-neutral"><Sliders size={14} /> Gzip & Brotli Active</span>
                  </div>
                </div>
              )}

              {/* Tab 2: E-Commerce */}
              {activeTab === 'ecommerce' && (
                <div className="web-kpis-grid">
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'معدل إتمام الشراء السريع' : 'Checkout Completion Rate'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>68.4%</span>
                    <span className="web-kpi-badge-gain"><ShoppingCart size={14} /> 1-Click Fast Checkout</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'تقليل التخلي عن السلة' : 'Cart Abandonment Drop'}</span>
                    <span className="web-kpi-value" style={{ color: '#818cf8' }}>-42%</span>
                    <span className="web-kpi-badge-gain"><CheckCircle2 size={14} /> Slide Drawer UX</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'بوابات الدفع الإلكتروني' : 'Payment Gateways'}</span>
                    <span className="web-kpi-value">100% ONLINE</span>
                    <span className="web-kpi-badge-neutral"><ShieldCheck size={14} /> Apple Pay & Cards</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'معدل الطلب عبر الهواتف' : 'Mobile Purchase Share'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>82.6%</span>
                    <span className="web-kpi-badge-gain"><Smartphone size={14} /> Touch-Optimized</span>
                  </div>
                </div>
              )}

              {/* Tab 3: SEO */}
              {activeTab === 'seo' && (
                <div className="web-kpis-grid">
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'درجة التوافق مع محركات البحث' : 'Lighthouse SEO Score'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>100 / 100</span>
                    <span className="web-kpi-badge-gain"><Search size={14} /> All Audits Passed</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'بيانات المخطط المهيكلة (Schema)' : 'Structured Schema.org'}</span>
                    <span className="web-kpi-value" style={{ color: '#818cf8' }}>VALID (0 Errors)</span>
                    <span className="web-kpi-badge-gain"><Code size={14} /> Rich Snippets Ready</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'خريطة الموقع والفهرسة' : 'Sitemap & Robots.txt'}</span>
                    <span className="web-kpi-value">SYNCED</span>
                    <span className="web-kpi-badge-neutral"><Globe size={14} /> Instant Indexing</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'عنونة الروابط الصديقة (URLs)' : 'Clean URL Routing'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>CANONICAL</span>
                    <span className="web-kpi-badge-gain"><CheckCircle2 size={14} /> Multi-Language SEO</span>
                  </div>
                </div>
              )}

              {/* Tab 4: Security */}
              {activeTab === 'security' && (
                <div className="web-kpis-grid">
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'شهادة التشفير والأمان' : 'SSL/TLS Encryption'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>ACTIVE (Grade A)</span>
                    <span className="web-kpi-badge-gain"><ShieldCheck size={14} /> 256-bit Encryption</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'شبكة توزيع المحتوى (CDN)' : 'Edge Cloud CDN'}</span>
                    <span className="web-kpi-value" style={{ color: '#818cf8' }}>285+ Edge Nodes</span>
                    <span className="web-kpi-badge-gain"><Globe size={14} /> Global Zero-Latency</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'حماية جدار الويب (WAF & DDoS)' : 'DDoS & Bot Mitigation'}</span>
                    <span className="web-kpi-value">ARMED</span>
                    <span className="web-kpi-badge-neutral"><ShieldCheck size={14} /> 100% Attack Blocked</span>
                  </div>
                  <div className="web-kpi-card">
                    <span className="web-kpi-title">{lang === 'ar' ? 'النسخ الاحتياطي التلقائي' : 'Automated Cloud Backup'}</span>
                    <span className="web-kpi-value" style={{ color: '#34d399' }}>DAILY (Verified)</span>
                    <span className="web-kpi-badge-gain"><CheckCircle2 size={14} /> 1-Click Instant Restore</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multiple Visual Feature Showcases with High-Res Images */}
      {/* Showcase 1: E-Commerce Experience */}
      <section className="web-visual-split-section">
        <div className="container web-visual-split-grid">
          <div className="web-split-img-card">
            <img 
              src="/assets/web-ecommerce-ux.jpg" 
              alt="Luxury E-Commerce Website Storefront UI Design" 
            />
          </div>
          <div className="web-split-content">
            <div className="badge" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
              <ShoppingCart size={14} /> {lang === 'ar' ? 'تصميم وتطوير المتاجر الإلكترونية' : 'E-Commerce Engineering'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'متاجر إلكترونية فاخرة مصممة لمضاعفة سلة المشتريات ومعدلات الدفع' 
                : 'High-Converting Online Storefronts Engineered to Maximize Sales'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نصمم متاجر إلكترونية حديثة وسريعة تركز على سيكولوجية المشتري: فلاتر تصفية ذكية للمنتجات، سلة مشتريات منبثقة سريعة (Slide Drawer Cart)، دفع فوري بدون تعقيد، وتكامل كامل مع بوابات الدفع وشركات الشحن.'
                : 'We build modern, ultra-fast online stores engineered around buyer psychology: smart faceted filters, quick-view product drawers, frictionless 1-page checkout, and seamless payment gateway and inventory integrations.'}
            </p>
            <ul className="web-split-checklist">
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'تجربة سلة مشتريات منبثقة فائقة السرعة ترفع معدل إتمام الطلبات' : 'Slide-out cart drawer with free shipping threshold progress bars'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'دعم الدفع عبر Apple Pay، فيزا، ماستركارد، وخدمات التقسيط (تابي وتمارا)' : 'Seamless checkout with Apple Pay, credit cards, and Buy-Now-Pay-Later'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'ربط آلي مع فواتير وأنظمة المخازن Odoo ERP لتحديث الكميات تلقائياً' : 'Real-time synchronization with ERP inventory and ETA electronic invoices'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#6366f1', borderColor: '#6366f1' }}>
              {lang === 'ar' ? 'طلب عرض سعر متجر إلكتروني' : 'Request E-Commerce Quote'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 2: SaaS & Web Applications */}
      <section className="web-visual-split-section bg-surface">
        <div className="container web-visual-split-grid reverse">
          <div className="web-split-img-card">
            <img 
              src="/assets/web-saas-dashboard.jpg" 
              alt="High-Tech Dark Theme SaaS Web Application Dashboard" 
            />
          </div>
          <div className="web-split-content">
            <div className="badge" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
              <Code size={14} /> {lang === 'ar' ? 'تطبيقات الويب ومنصات SaaS' : 'SaaS Platforms & Web Apps'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'تطوير منصات وتطبيقات ويب سحابية معقدة بأحدث أطر العمل العالمية' 
                : 'Custom Full-Stack Web Applications Built on Scalable Modern Architecture'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نبني تطبيقات ويب ومنصات SaaS متطورة باستخدام React 19 و Next.js: لوحات تحكم تفاعلية مع رسوم بيانية حية، إدارة الصلاحيات للمستخدمين، وتكامل سحابي فائق الأداء يتحمل ملايين الطلبات المتزامنة.'
                : 'We engineer robust web platforms and SaaS solutions utilizing React 19 and Next.js: real-time interactive telemetry dashboards, role-based user access controls, and high-concurrency cloud API scalability.'}
            </p>
            <ul className="web-split-checklist">
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'واجهات مستخدم تفاعلية بنظاميها المظلم والفاتح (Dark / Light Mode)' : 'Modern dark & light theme modes with seamless micro-animations'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'رسوم بيانية حية تعرض البيانات والمؤشرات بدقة وسرعة فائقة' : 'Real-time WebSocket data charts and instant export capabilities'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'أكواد معيارية نظيفة وسهلة التطوير تضمن سهولة إضافة مزايا مستقبلية' : 'Modular, maintainable codebase engineered for long-term product evolution'}</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              {lang === 'ar' ? 'استشارة برمجية لمنصتك' : 'Book Software Consultation'}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 3: Corporate Identity & Business Portals */}
      <section className="web-visual-split-section">
        <div className="container web-visual-split-grid">
          <div className="web-split-img-card">
            <img 
              src="/assets/web-corporate-portal.jpg" 
              alt="Corporate Business Website & Brand Identity Showcase" 
            />
          </div>
          <div className="web-split-content">
            <div className="badge" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
              <Building2 size={14} /> {lang === 'ar' ? 'بوابات ومواقع الشركات والمؤسسات' : 'Corporate Identity Portals'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'مواقع رسمية تعكس قوة وهيبة علامتك التجارية وتجلب عملاء نوعيين' 
                : 'Prestigious Corporate Portals Built to Inspire Trust & Win Contracts'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'موقعك الإلكتروني هو المقر الرئيسي الرقمي لشركتك. نصمم بوابات مؤسسية راقية تدعم تعدد اللغات (عربي / إنجليزي)، تعرض خدماتك ومشاريعك بطريقة ملهمة، وتتضمن نماذج ذكية لجلب العملاء وعروض الأسعار.'
                : 'Your website is your global digital headquarters. We create sophisticated corporate portals with bilingual Arabic/English switching, compelling case study showcases, and high-conversion enterprise lead capture funnels.'}
            </p>
            <ul className="web-split-checklist">
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'دعم كامل للغتين العربية والإنجليزية مع اتجاهات RTL و LTR متقنة' : 'Flawless bilingual Arabic & English typography with native RTL/LTR'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'حاسبة أسعار ونماذج طلب عروض مخصصة تزيد من كفاءة التواصل' : 'Interactive quote calculators and multi-step inquiry forms'}</li>
              <li><CheckCircle2 size={18} color="#6366f1" /> {lang === 'ar' ? 'لوحة تحكم مرنة تتيح لفريقك إضافة الأخبار والمشاريع بكل سهولة' : 'Flexible management console for publishing news, careers, and projects'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#6366f1', borderColor: '#6366f1' }}>
              {lang === 'ar' ? 'طلب تصميم موقع لشركتك' : 'Request Corporate Proposal'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Rich Image Gallery Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'معرض نماذج وتطبيقات الويب' : 'Web UI/UX Showcase Gallery'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تصميمات عملية منفذة بأعلى معايير الإبداع العالمية' : 'Inspiring Digital Experiences Crafted with Precision'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تصفح باقة من الواجهات الحديثة والمتاجر الإلكترونية ولوحات التحكم التي صممناها وطورناها لعملائنا.' 
              : 'Explore our portfolio of responsive e-commerce storefronts, corporate portals, and custom SaaS dashboards.'}
          </p>

          <div className="web-gallery-grid">
            {visualGallery.map((item, idx) => (
              <div key={idx} className="web-gallery-item">
                <img src={item.img} alt={item.title} />
                <div className="web-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core 8 Web Engineering Pillars Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'ركائز هندسة وتطوير الويب' : 'Core Web Engineering Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'حلول متكاملة تضمن تفوق موقعك في التصميم والسرعة والأمان' : 'End-to-End Capabilities for Exceptional Digital Products'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نغطي كافة مراحل بناء موقعك من دراسة تجربة المستخدم والتصميم البصري وحتى البرمجة والإطلاق السلس.' 
              : 'From Figma interactive prototyping to full-stack cloud deployment, we cover every technical milestone.'}
          </p>

          <div className="web-modules-grid">
            {webDesignPillars.map((p, idx) => (
              <div key={idx} className="web-module-card">
                <div className="web-module-top">
                  <div className="web-icon-box">
                    <p.icon size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="web-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'معيار هندسي معتمد' : 'Production Grade'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Web Design Packages & Pricing */}
      <section className="section bg-surface" id="packages">
        <div className="container">
          <div className="badge-center" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
            <Zap size={14} /> {lang === 'ar' ? 'باقات وحلول تصميم المواقع' : 'Web Packages & Pricing'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر الباقة البرمجية المناسبة لحجم ونوع مشروعك' : 'Select the Ideal Development Tier for Your Project'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات شاملة للتصميم المخصص، البرمجة الكاملة، التجاوب مع الهواتف، الاستضافة، وشهادات الأمان.' 
              : 'Transparent packages covering custom UI/UX design, full-stack coding, mobile optimization, and SLA warranty.'}
          </p>

          <div className="web-pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`web-pricing-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge" style={{ background: '#6366f1' }}>{t('popularChoice')}</div>}
                <div className="plan-img-box">
                  <img src={pkg.image} alt={pkg.title} className="plan-thumb" />
                </div>
                <div>
                  <h3 className="web-plan-title">{pkg.title}</h3>
                  <span className="web-plan-subtitle">{pkg.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="web-plan-features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="check-icon" style={{ color: '#6366f1' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: pkg.id,
                      title: pkg.title,
                      price: pkg.price,
                      image: pkg.image
                    })}
                    className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                    style={pkg.recommended ? { background: '#6366f1', borderColor: '#6366f1' } : {}}
                  >
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Implementation 4-Step Methodology */}
      <section className="section">
        <div className="container">
          <div className="badge-center" style={{ color: '#6366f1', borderColor: '#c7d2fe', background: '#eef2ff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'منهجية التطوير والإطلاق' : 'Agile Development Methodology'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات مدروسة لتحويل فكرتك إلى موقع حي فائق الأداء' : '4-Step Proven Roadmap from Concept to Flawless Go-Live'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتبع مسار عمل هندسي دقيق يبدأ من المخططات الهيكلية وحتى الاختبارات الصارمة والإطلاق الرسمي.' 
              : 'A structured roadmap from interactive Figma mockups to clean React engineering and speed optimization.'}
          </p>

          <div className="web-workflow-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="web-workflow-card">
                <span className="web-workflow-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Bottom CTA Banner */}
      <section className="section text-center" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="web-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل أنت مستعد لإطلاق موقعك الإلكتروني الجديد بأعلى معايير الجودة؟' 
                : 'Ready to Launch a High-Impact Website That Converts?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على استشارة برمجية مجانية ودراسة متكاملة لمتطلبات مشروعك مع فريق مهندسينا.' 
                : 'Schedule a free consultation and project scope review with our senior UI/UX and software engineers.'}
            </p>
            <div className="web-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', background: '#6366f1', borderColor: '#6366f1' }}>
                {lang === 'ar' ? 'طلب استشارة وتحديد موعد' : 'Book Free Consultation'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة برمجية عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
