import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Share2, 
  Calculator, 
  Server, 
  Monitor, 
  Cpu, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Activity,
  Layers,
  Globe,
  Building2,
  Lock,
  Sliders,
  Database,
  Smartphone,
  Video,
  ShoppingBag
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('cloud');

  const phrases = lang === 'ar' ? [
    'الأنظمة المحاسبية (Odoo ERP)',
    'الشبكات والسيرفرات المؤسسية',
    'التحكم الذكي والتيار الخفيف',
    'التسويق الرقمي ونمو المبيعات',
    'تصميم وتطوير المواقع الحديثة',
    'خدمات تكنولوجيا المعلومات 24/7',
    'البريد الإلكتروني المهني السحابي'
  ] : [
    'Integrated Accounting (Odoo ERP)',
    'Enterprise Networks & Servers',
    'Smart Control & Low-Current BMS',
    'Data-Driven Digital Marketing',
    'Modern Web & UI/UX Development',
    '24/7 Managed IT & Helpdesk',
    'Enterprise Cloud Mailboxes'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Dynamic Typing Animation
  useEffect(() => {
    const fullText = phrases[phraseIndex] || phrases[0];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, phrases]);

  // The 7 Core Activities (All verified image assets in public/assets)
  const coreActivities = [
    {
      id: 'accounting',
      title: lang === 'ar' ? 'الأنظمة المحاسبية وإدارة المؤسسات (Odoo ERP)' : 'Odoo ERP & Integrated Accounting',
      desc: lang === 'ar' 
        ? 'ربط الفاتورة والإيصال الإلكتروني ETA، نقاط البيع السريعة POS، وإدارة المخازن والجرد والميزانيات العمومية.'
        : 'Official ETA e-invoicing compliance, POS cashier sync, multi-warehouse automation, and live financial reporting.',
      image: '/assets/accounting-dashboard.png',
      link: '/accounting',
      tag: lang === 'ar' ? 'معتمد من الضرائب' : 'Tax Compliant',
      features: lang === 'ar' 
        ? ['الفاتورة والإيصال الإلكتروني ETA', 'نقاط البيع والمطاعم والتجزئة POS', 'إدارة المخازن والجرد الفوري', 'الرواتب وشؤون الموظفين HR']
        : ['ETA Electronic Invoicing', 'Retail & F&B POS Systems', 'Automated Inventory & Warehouses', 'Payroll & HR Administration']
    },
    {
      id: 'network-servers',
      title: lang === 'ar' ? 'حلول الشبكات والسيرفرات المؤسسية' : 'Enterprise Networks & Datacenter Servers',
      desc: lang === 'ar'
        ? 'تصميم غرف الخوادم، بيئات VMware السحابية، شبكات الفايبر، وحماية الجدران النارية Fortinet و Cisco.'
        : 'Datacenter server racks, VMware/Proxmox clustering, fiber cabling, and Fortinet enterprise firewalls.',
      image: '/assets/net-server-rack.jpg',
      link: '/network-servers',
      tag: lang === 'ar' ? 'ضمان تشغيل 99.99%' : '99.99% Uptime',
      features: lang === 'ar'
        ? ['خوادم Dell & HPE عالية التوافر', 'شبكات الفايبر وسويتشات 10Gbps', 'جدران الحماية والأمان السيبراني', 'ربط الفروع VPN & SD-WAN']
        : ['High-Availability Dell/HPE Servers', '10Gbps Fiber Core Switching', 'Next-Gen Firewall Cybersecurity', 'Multi-Branch Encrypted VPN']
    },
    {
      id: 'smart-control',
      title: lang === 'ar' ? 'التحكم الذكي وأنظمة التيار الخفيف (BMS)' : 'Smart Automation & Low-Current Systems',
      desc: lang === 'ar'
        ? 'إدارة المباني الذكية BMS، كاميرات المراقبة بالذكاء الاصطناعي، إنذار الحريق Hochiki، والتحكم بالفيلات والقصور.'
        : 'Smart building BMS automation, AI CCTV video analytics, addressable fire alarm loops, and luxury KNX smart homes.',
      image: '/assets/smart-home-villa.jpg',
      link: '/smart-control',
      tag: lang === 'ar' ? 'توفير 35% طاقة' : '-35% Energy Saved',
      features: lang === 'ar'
        ? ['كاميرات المراقبة بالذكاء الاصطناعي', 'أنظمة إنذار الحريق المعتمدة', 'أنظمة إدارة المباني والأبراج BMS', 'بوابات الدخول ومواقف السيارات']
        : ['4K AI Face & ANPR Cameras', 'Hochiki Fire Alarm Safety', 'Central Building BMS Telemetry', 'Biometric Speed Gates & Parking']
    },
    {
      id: 'digital-marketing',
      title: lang === 'ar' ? 'التسويق الرقمي ومضاعفة المبيعات (ROAS)' : 'Performance Digital Marketing & Ads',
      desc: lang === 'ar'
        ? 'إعلانات ممولة فائقة التحويل على ميتا وجوجل وتيك توك، صناعة محتوى إبداعي وتصدر محركات البحث SEO.'
        : 'Data-driven Meta, Google, and TikTok ad funnels delivering 4.8x average ROAS with creative video production.',
      image: '/assets/mkt-growth-dashboard.jpg',
      link: '/digital-marketing',
      tag: lang === 'ar' ? 'عائد إعلاني 4.8x' : '4.8x ROAS',
      features: lang === 'ar'
        ? ['إعلانات ميتا وجوجل وتيك توك', 'تصوير سينمائي ومونتاج Reels', 'تصدر نتائج بحث جوجل (SEO)', 'إعلانات ومسارات المتاجر الإلكترونية']
        : ['Meta, Google & TikTok PPC Ads', 'Creative Studio Video & Reels', 'Google Top #1 Keyword SEO', 'E-Commerce Sales Funnels']
    },
    {
      id: 'web-design',
      title: lang === 'ar' ? 'تصميم وتطوير المواقع وتطبيقات الويب' : 'Modern Web Development & UI/UX Design',
      desc: lang === 'ar'
        ? 'مواقع ومتاجر إلكترونية فائقة السرعة والأناقة مبنية بأحدث تقنيات React 19 مع تجاوب كامل وسرعة 100/100.'
        : 'Ultra-fast React 19 & Next.js web applications, luxury e-commerce stores, and Lighthouse 100/100 performance.',
      image: '/assets/web-ecommerce-ux.jpg',
      link: '/web-design',
      tag: lang === 'ar' ? 'سرعة < 1.2 ثانية' : '< 1.2s Load Time',
      features: lang === 'ar'
        ? ['واجهات UI/UX مخصصة ومتجاوبة', 'متاجر إلكترونية مع بوابات الدفع', 'تطبيقات ويب ولوحات تحكم SaaS', 'تهيئة سيو كاملة وسرعة فائقة']
        : ['Custom Responsive UI/UX Design', 'Full-Suite E-Commerce Storefronts', 'Custom SaaS Analytics Portals', 'Built-in Technical SEO & Speed']
    },
    {
      id: 'it-services',
      title: lang === 'ar' ? 'خدمات تكنولوجيا المعلومات والدعم الفني المدار' : '24/7 Managed IT Support & Cloud',
      desc: lang === 'ar'
        ? 'دعم فني فوري لأجهزة الموظفين، إدارة بيئات Microsoft 365، وحماية متقدمة لنقط النهاية EDR ضد الفيروسات.'
        : 'Instant helpdesk SLA under 15 mins, Microsoft 365 cloud administration, and enterprise EDR cybersecurity.',
      image: '/assets/it-helpdesk-center.jpg',
      link: '/it',
      tag: lang === 'ar' ? 'استجابة < 15 دقيقة' : '< 15m Response',
      features: lang === 'ar'
        ? ['دعم فني مدار للموظفين 24/7', 'إدارة سحابة Microsoft 365', 'حماية EDR ضد برمجيات الفدية', 'نسخ احتياطي سحابي معزول يومياً']
        : ['24/7 Managed Remote Helpdesk', 'Microsoft 365 & Azure Cloud', 'Next-Gen EDR Anti-Ransomware', 'Automated Disaster Recovery (DRaaS)']
    },
    {
      id: 'mail-professional',
      title: lang === 'ar' ? 'البريد الإلكتروني المهني السحابي للشركات' : 'Enterprise Cloud Email & Collaboration',
      desc: lang === 'ar'
        ? 'بريد رسمي باسم شركتك name@company.com، وصول مضمون لصندوق الوارد 100%، ومزامنة فورية مع Outlook.'
        : 'Custom domain business email with strict DMARC/SPF deliverability, AI anti-spam, and Outlook ActiveSync.',
      image: '/assets/web-corporate-portal.jpg',
      link: '/mail-professional',
      tag: lang === 'ar' ? '100% تسليم إنبوكس' : '100% Inbox Placement',
      features: lang === 'ar'
        ? ['عناوين بريد باسم نطاق شركتك', 'توثيق أمني DMARC و SPF و DKIM', 'مزامنة Outlook والآيفون والأندرويد', 'هجرة مجانية بدون انقطاع']
        : ['Branded Custom Domain Email', 'Hardened DMARC/DKIM Security', 'Real-Time Outlook & Phone Sync', 'Zero-Downtime Mail Migration']
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Real Master Showreel Video Hero (Combined 6-Clip Professional Action Video) */}
      <section className="live-video-hero-section">
        {/* Continuous Master Showreel Video */}
        <video 
          className="hero-live-video"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/assets/web-hero-multidevice.jpg"
        >
          <source src="/assets/pom-showreel.mp4" type="video/mp4" />
        </video>

        {/* Translucent Light Cinematic Overlay & Grid */}
        <div className="hero-video-overlay" />
        <div className="hero-subtle-grid" />

        {/* Content Directly Over Live Video (NO BOX) */}
        <div className="container hero-direct-content">
          <div className="hero-pill-badge">
            <span className="pill-dot" />
            <span>{lang === 'ar' ? 'منصة الحلول التقنية والهندسية المتكاملة' : 'Integrated Technology & Engineering Agency'}</span>
          </div>

          <h1 className="hero-main-title">
            {lang === 'ar' ? 'شريكك الهندسي والتقني الموثوق في' : 'Your Trusted Technology & Engineering Partner for'}{' '}
            <br />
            <span className="animated-service-word">
              {currentText}
              <span className="animated-cursor">|</span>
            </span>
          </h1>
          
          <p className="hero-main-subtitle">
            {lang === 'ar'
              ? 'نبني وندير بنيتك التحتية من الصفر: أنظمة ERP المحاسبية، السيرفرات والشبكات السحابية، التحكم الذكي بالمباني، والتسويق الرقمي عالي العائد لمضاعفة أرباح منشأتك.'
              : 'End-to-end enterprise solutions: certified Odoo ERP accounting, high-availability datacenter servers, low-current building automation, and high-ROI performance marketing.'}
          </p>

          <div className="hero-main-actions">
            <Link to="/contact" className="btn-hero-primary">
              <span>{lang === 'ar' ? 'ابدأ الآن واحجز استشارتك المجانية' : 'Get Started & Book Free Audit'}</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#services" className="btn-hero-secondary">
              <span>{lang === 'ar' ? 'استكشف كافة الخدمات الـ 7' : 'Explore All 7 Services'}</span>
            </a>
          </div>

          {/* Direct Trust Highlights Row */}
          <div className="hero-trust-bar">
            <div className="hero-trust-point">
              <CheckCircle2 size={18} className="hero-trust-icon" />
              <span>{lang === 'ar' ? 'ضمان استقرار السيرفرات 99.99% SLA' : '99.99% Server Uptime SLA'}</span>
            </div>
            <div className="hero-trust-point">
              <CheckCircle2 size={18} className="hero-trust-icon" />
              <span>{lang === 'ar' ? 'دعم فني واستجابة فورية 24/7/365' : '24/7/365 Dedicated Live Support'}</span>
            </div>
            <div className="hero-trust-point">
              <CheckCircle2 size={18} className="hero-trust-icon" />
              <span>{lang === 'ar' ? '500+ مؤسسة وعميل معتمد في مصر والخليج' : '500+ Delivered Enterprise Projects'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Trust & SLA Metrics Bar (Clean White) */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat-item">
              <span className="home-stat-num">12+</span>
              <span className="home-stat-label">{lang === 'ar' ? 'عاماً من الخبرة والتميز التقني' : 'Years of Tech Excellence'}</span>
            </div>
            <div className="home-stat-item">
              <span className="home-stat-num">99.99%</span>
              <span className="home-stat-label">{lang === 'ar' ? 'استقرار وجاهزية السيرفرات والشبكات' : 'Infrastructure Uptime SLA'}</span>
            </div>
            <div className="home-stat-item">
              <span className="home-stat-num">500+</span>
              <span className="home-stat-label">{lang === 'ar' ? 'مؤسسة وعميلاً معتمداً في مصر والخليج' : 'Enterprise Client Deployments'}</span>
            </div>
            <div className="home-stat-item">
              <span className="home-stat-num">24/7</span>
              <span className="home-stat-label">{lang === 'ar' ? 'دعم فني مدار واستجابة فورية' : 'Continuous Expert Support'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 7 Core Business Pillars Showcase (Clean Light Cards with Verified Images) */}
      <section className="home-services-section" id="services">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Layers size={14} /> {lang === 'ar' ? 'منظومة خدماتنا المتكاملة' : 'Core Business Pillars'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '7 قطاعات هندسية وتقنية تقود أعمالك نحو المستقبل' : '7 Comprehensive Pillars Powering Your Digital Evolution'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نقدم حلولاً متكاملة من البداية وحتى النهاية: من البنية التحتية والشبكات وحتى البرمجيات المحاسبية والتسويق الرقمي.' 
              : 'End-to-end expertise spanning low-current engineering, server clustering, ERP accounting, modern web, and revenue marketing.'}
          </p>

          <div className="home-services-grid">
            {coreActivities.map((act) => (
              <div key={act.id} className="home-service-card">
                <div className="home-service-img-wrapper">
                  <img src={act.image} alt={act.title} className="home-service-img" />
                  <div className="home-service-badge">
                    <Sparkles size={12} color="#34d399" />
                    <span>{act.tag}</span>
                  </div>
                </div>
                <div className="home-service-body">
                  <div>
                    <h3>{act.title}</h3>
                    <p>{act.desc}</p>
                    <ul className="home-service-checklist">
                      {act.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} color="#10b981" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={act.link} className="home-service-btn">
                    <span>{lang === 'ar' ? 'تفاصيل الخدمة والباقات' : 'Explore Service & Plans'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Central Operations Hub (4 Tabs) */}
      <section className="home-console-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Activity size={14} /> {lang === 'ar' ? 'مركز مراقبة العمليات المركزية' : 'Central Enterprise Command'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'منصة موحدة لمتابعة استقرار وتكامل كافة قطاعات شركتك' : 'Unified Telemetry Across Your Entire Digital Estate'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'مؤشرات لحظية دقيقة تغطي السيرفرات السحابية، المعاملات المحاسبية، كفاءة الطاقة، وعائد الإعلانات.' 
              : 'Real-time telemetry monitoring server load, ERP transactional throughput, building energy, and digital ad ROAS.'}
          </p>

          {/* Tab Switcher */}
          <div className="home-tab-buttons">
            <button 
              className={`home-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
              onClick={() => setActiveTab('cloud')}
            >
              <Server size={16} />
              <span>{lang === 'ar' ? 'السحابة والشبكات (Infra)' : 'Cloud & Networks'}</span>
            </button>
            <button 
              className={`home-tab-btn ${activeTab === 'erp' ? 'active' : ''}`}
              onClick={() => setActiveTab('erp')}
            >
              <Calculator size={16} />
              <span>{lang === 'ar' ? 'المحاسبة و Odoo ERP' : 'Accounting & ERP'}</span>
            </button>
            <button 
              className={`home-tab-btn ${activeTab === 'smart' ? 'active' : ''}`}
              onClick={() => setActiveTab('smart')}
            >
              <Building2 size={16} />
              <span>{lang === 'ar' ? 'التحكم الذكي و BMS' : 'Smart Control & BMS'}</span>
            </button>
            <button 
              className={`home-tab-btn ${activeTab === 'growth' ? 'active' : ''}`}
              onClick={() => setActiveTab('growth')}
            >
              <TrendingUp size={16} />
              <span>{lang === 'ar' ? 'التسويق ونمو المبيعات' : 'Marketing & Growth'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="home-console-window">
            <div className="home-window-header">
              <div className="home-window-dots">
                <div className="home-window-dot" style={{ background: '#ef4444' }} />
                <div className="home-window-dot" style={{ background: '#f59e0b' }} />
                <div className="home-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="home-window-title">
                <Activity size={15} />
                <span>POM Global Ops &bull; {lang === 'ar' ? 'مركز مراقبة الأداء المتكامل' : 'Master Operations Telemetry'}</span>
              </div>
              <span className="home-window-badge">{lang === 'ar' ? 'المنظومة تعمل بكفاءة 100%' : 'All 7 Pillars Fully Operational'}</span>
            </div>

            <div className="home-window-body">
              {/* Tab 1: Cloud */}
              {activeTab === 'cloud' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'جاهزية السيرفرات السحابية' : 'Cloud Server Uptime'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>99.99% SLA</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> High Availability</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة استجابة الدعم الفني' : 'Helpdesk Response SLA'}</span>
                    <span className="home-kpi-value" style={{ color: '#38bdf8' }}>8.4 Mins</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Guaranteed &lt; 15m</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'حالة جدران الحماية والأمان' : 'Cybersecurity EDR'}</span>
                    <span className="home-kpi-value">ARMED (100%)</span>
                    <span className="home-kpi-badge-neutral"><Shield size={14} /> Zero-Trust Fortinet</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'النسخ الاحتياطي المعزول' : 'Immutable Cloud Backups'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>DAILY (Verified)</span>
                    <span className="home-kpi-badge-gain"><Database size={14} /> RPO 15m / RTO &lt; 30m</span>
                  </div>
                </div>
              )}

              {/* Tab 2: ERP */}
              {activeTab === 'erp' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'ربط الفاتورة الإلكترونية ETA' : 'ETA e-Invoice Sync'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>CONNECTED</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> 100% Tax Compliant</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة معاملات نقاط البيع POS' : 'POS Cashier Latency'}</span>
                    <span className="home-kpi-value" style={{ color: '#38bdf8' }}>0.08s</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Offline Mode Active</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'دقة الجرد ومطابقة المخازن' : 'Inventory Accuracy'}</span>
                    <span className="home-kpi-value">99.98%</span>
                    <span className="home-kpi-badge-neutral"><Sliders size={14} /> Barcode Multi-Warehouse</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'التقارير المالية والأرباح' : 'Financial Statement Sync'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>AUTOMATED</span>
                    <span className="home-kpi-badge-gain"><Award size={14} /> Live Trial Balance</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Smart */}
              {activeTab === 'smart' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'توفير استهلاك الطاقة الكهربائية' : 'Building Energy Reduction'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>-34.8%</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Smart Chiller Logic</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'كاميرات المراقبة بالذكاء الاصطناعي' : 'AI CCTV Stream Streams'}</span>
                    <span className="home-kpi-value" style={{ color: '#38bdf8' }}>64 4K Feeds</span>
                    <span className="home-kpi-badge-gain"><Video size={14} /> ANPR + Face Recognition</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'حالة شبكة إنذار الحريق' : 'Fire Alarm Safety Loops'}</span>
                    <span className="home-kpi-value">NORMAL (100%)</span>
                    <span className="home-kpi-badge-neutral"><Shield size={14} /> Hochiki Addressable</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'استجابة بوابات الدخول Speed Gates' : 'Access Gate Throughput'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>0.2s Facial</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> 45 Persons / Min</span>
                  </div>
                </div>
              )}

              {/* Tab 4: Growth */}
              {activeTab === 'growth' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'متوسط العائد الإعلاني (ROAS)' : 'Omnichannel ROAS'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>4.8x ROAS</span>
                    <span className="home-kpi-badge-gain"><TrendingUp size={14} /> Meta, Google & TikTok</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'تصدر بحث جوجل (Google SEO)' : 'Top #1 Google Keywords'}</span>
                    <span className="home-kpi-value" style={{ color: '#38bdf8' }}>142 Keywords</span>
                    <span className="home-kpi-badge-gain"><Award size={14} /> 785K Organic Visits</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة فتح مواقع الويب' : 'Web Speed (Lighthouse)'}</span>
                    <span className="home-kpi-value">99 / 100</span>
                    <span className="home-kpi-badge-neutral"><Zap size={14} /> React 19 & Next.js</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'تسليم البريد في صندوق الوارد' : 'Mail Deliverability (DMARC)'}</span>
                    <span className="home-kpi-value" style={{ color: '#34d399' }}>100% INBOX</span>
                    <span className="home-kpi-badge-gain"><Mail size={14} /> Zero Spam Placement</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certified Brand Partners & Global Vendors */}
      <section className="home-partners-section">
        <div className="container">
          <div className="badge-center"><Award size={14} /> {lang === 'ar' ? 'التوكيلات والشراكات العالمية المعتمدة' : 'Certified Global Brand Partners'}</div>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
            {lang === 'ar' ? 'نعتمد على أفضل التقنيات والماركات العالمية لضمان أعلى جودة' : 'Built on Leading Global Hardware & Software Technologies'}
          </h3>

          <div className="home-partners-grid">
            <img src="/assets/LOGO-Hikvision-300x179-1.png" alt="Hikvision Partner" className="home-partner-logo" />
            <img src="/assets/EZVIZ_logo.png" alt="EZVIZ Partner" className="home-partner-logo" />
            <img src="/assets/Hochiki-Global-Banner-Logo-2019-with-Strapline-black-_-red-web-1.png" alt="Hochiki Fire Safety Partner" className="home-partner-logo" />
            <img src="/assets/png-clipart-bose-factory-store-bose-corporation-logo-home-automation-kits-others-cdr-text-1.png" alt="Bose Audio Partner" className="home-partner-logo" />
          </div>
        </div>
      </section>

      {/* 6. Bottom Master CTA Banner */}
      <section className="section text-center" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="home-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل أنت مستعد لنقل أعمالك ومنشأتك إلى أحدث المعايير التقنية؟' 
                : 'Ready to Transform Your Enterprise with Next-Gen Technology?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'تواصل مع فريق مهندسينا اليوم للحصول على استشارة متخصصة ودراسة شاملة لمتطلبات مشروعك.' 
                : 'Schedule a comprehensive consultation with our senior systems, network, and software engineers.'}
            </p>
            <div className="home-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', background: '#10b981', borderColor: '#10b981' }}>
                {lang === 'ar' ? 'طلب استشارة ومقترح هندسي' : 'Request Engineering Proposal'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
