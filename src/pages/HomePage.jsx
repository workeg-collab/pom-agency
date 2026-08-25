import React, { useState, useEffect, useRef } from 'react';
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
  ShoppingBag,
  Star,
  ChevronDown,
  Headphones,
  FileCheck,
  Clock,
  Check
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('cloud');
  const [openFaq, setOpenFaq] = useState(null);
  const videoRef = useRef(null);

  // Guarantee Mobile Autoplay on iOS / Android WebKit
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playVideo = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          // If iOS low power mode blocks unprompted play, kick off on scroll/touch
          const unlockPlay = () => {
            video.play().catch(() => {});
            window.removeEventListener('touchstart', unlockPlay);
            window.removeEventListener('scroll', unlockPlay);
          };
          window.addEventListener('touchstart', unlockPlay, { once: true, passive: true });
          window.addEventListener('scroll', unlockPlay, { once: true, passive: true });
        });
      }
    };

    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);
    playVideo();

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const phrases = lang === 'ar' ? [
    'الأنظمة المحاسبية Odoo ERP',
    'الشبكات والسيرفرات المؤسسية',
    'التحكم الذكي والتيار الخفيف',
    'التسويق الرقمي ونمو المبيعات',
    'تصميم وتطوير المواقع الحديثة',
    'خدمات الدعم الفني المدار 24/7',
    'البريد السحابي المهني'
  ] : [
    'Integrated Accounting (Odoo ERP)',
    'Enterprise Networks & Servers',
    'Smart Automation & Low-Current',
    'Data-Driven Growth Marketing',
    'Modern Web & UI/UX Development',
    '24/7 Managed IT Support',
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

  // The 7 Core Activities
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

  // Guarantees Data
  const guarantees = [
    {
      icon: <Clock size={28} />,
      title: lang === 'ar' ? 'عقود صيانة رسمية و SLA معتمد' : 'Guaranteed SLA & Rapid Helpdesk',
      desc: lang === 'ar' ? 'استجابة هندسية فورية في أقل من 15 دقيقة مع ضمان جاهزية السيرفرات والشبكات 99.99%.' : 'Sub-15m response SLA with 99.99% infrastructure uptime guaranteed by contract.'
    },
    {
      icon: <FileCheck size={28} />,
      title: lang === 'ar' ? 'ضمان الامتثال الضريبي 100%' : '100% ETA Tax Compliance',
      desc: lang === 'ar' ? 'ربط رسمي ومعتمد لنظام Odoo ERP مع منظومة الفاتورة والإيصال الإلكتروني بدون أخطاء.' : 'Fully certified Egyptian Tax Authority integration for e-invoicing and e-receipts.'
    },
    {
      icon: <Shield size={28} />,
      title: lang === 'ar' ? 'توكيلات وأجهزة أصلية معتمدة' : 'Certified Enterprise Hardware',
      desc: lang === 'ar' ? 'ضمان رسمي مباشر من الشركات العالمية (Hikvision, Hochiki, Dell, Fortinet, Bose).' : 'Official direct warranty on all low-current, datacenter servers, and security cameras.'
    },
    {
      icon: <Headphones size={28} />,
      title: lang === 'ar' ? 'مدير حسابات هندسي مخصص' : 'Dedicated Technical Lead',
      desc: lang === 'ar' ? 'مهندس متخصص يتابع مشروعك لحظة بلحظة لضمان أعلى معايير الجودة والسرعة في التنفيذ.' : 'Direct point of contact for all your enterprise low-current, ERP, and marketing initiatives.'
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: lang === 'ar' ? 'م. أحمد الشناوي' : 'Eng. Ahmed El-Shennawy',
      role: lang === 'ar' ? 'الرئيس التنفيذي &bull; شركة الصرح للتطوير العقاري' : 'CEO &bull; Al-Sarh Real Estate Dev',
      rating: 5,
      quote: lang === 'ar' 
        ? 'نفذت شركة POM Agency نظام إدارة المباني BMS والتحكم الذكي لكامل المقر الإداري مع شبكات السيرفرات. دقة متناهية والتزام بالجدول الزمني.'
        : 'POM Agency delivered our full BMS automation and server infrastructure on schedule with outstanding precision.'
    },
    {
      name: lang === 'ar' ? 'أ. طارق عبد العزيز' : 'Tarek Abdelaziz',
      role: lang === 'ar' ? 'المدير المالي &bull; مجموعة الدلتا للصناعات الغذائية' : 'CFO &bull; Delta Food Industries',
      rating: 5,
      quote: lang === 'ar' 
        ? 'الربط المحاسبي مع Odoo ERP والفاتورة الإلكترونية نقل كفاءة المخازن والحسابات لمستوى آخر تماماً. الدعم الفني متواجد دائماً.'
        : 'The Odoo ERP tax integration streamlined our inventory and ledger operations with 100% compliance.'
    },
    {
      name: lang === 'ar' ? 'د. سارة المنصوري' : 'Dr. Sara Al-Mansouri',
      role: lang === 'ar' ? 'مديرة التسويق &bull; سلسلة مراكز ريادة الطبية' : 'Marketing Director &bull; Reyada Medical Group',
      rating: 5,
      quote: lang === 'ar' 
        ? 'حملات التسويق الرقمي وتطوير الموقع الإلكتروني حققت لنا عائداً إعلانياً تجاوز 5.2x وتصدرنا الصفحة الأولى في بحث جوجل.'
        : 'Our digital ad funnels and new React portal generated over 5.2x ROAS with top-tier Google search rankings.'
    }
  ];

  // FAQ Data
  const faqs = [
    {
      q: lang === 'ar' ? 'ما هي المدة اللازمة لتنفيذ وتطبيق نظام Odoo ERP وربطه بالفاتورة الإلكترونية؟' : 'How long does Odoo ERP deployment and ETA tax integration take?',
      a: lang === 'ar' 
        ? 'يستغرق التطبيق النموذجي من أسبوعين إلى 6 أسابيع حسب حجم المؤسسة وعدد الفروع، ويشمل ذلك تهيئة شجرة الحسابات، دورات المخازن، تدريب المحاسبين، والربط الرسمي مع بوابة الضرائب ETA.'
        : 'Typical implementations range from 2 to 6 weeks based on branch count, including chart of accounts setup, inventory workflows, cashier training, and official ETA portal sync.'
    },
    {
      q: lang === 'ar' ? 'هل تقدمون عقود صيانة ودعم فني دوري للشبكات وكاميرات المراقبة وأنظمة التيار الخفيف؟' : 'Do you provide SLA maintenance contracts for low-current systems and networks?',
      a: lang === 'ar' 
        ? 'نعم، نوفر عقود صيانة سنوية (SLA) تشمل زيارات وقائية شهرية، ودعماً طارئاً على مدار الساعة 24/7 مع استبدال فوري للقطع التالفة من التوكيلات المعتمدة.'
        : 'Yes, we offer comprehensive annual SLA agreements covering preventative monthly audits, 24/7 rapid emergency dispatch, and direct OEM hardware replacements.'
    },
    {
      q: lang === 'ar' ? 'هل يمكن ربط فروع الشركة ومخازنها في شبكة واحدة مشفرة وآمنة تماماً؟' : 'Can you connect multi-branch locations with private encrypted networks?',
      a: lang === 'ar' 
        ? 'بالتأكيد، نقوم بتصميم وربط شبكات الفروع عبر تقنيات VPN المشفرة و SD-WAN وجدران الحماية Fortinet لضمان سرعة نقل البيانات وحمايتها من الاختراق.'
        : 'Yes, we implement hardware-accelerated IPsec VPNs, SD-WAN topologies, and Fortinet firewalls for high-throughput, secure inter-branch connectivity.'
    },
    {
      q: lang === 'ar' ? 'كيف تضمنون وصول البريد الإلكتروني المهني لصندوق الوارد (Inbox) بدون الذهاب للـ Spam؟' : 'How do you guarantee custom domain email deliverability to Inbox?',
      a: lang === 'ar' 
        ? 'نقوم بتهيئة سجلات التوثيق الأمني المتقدمة (DMARC, DKIM, SPF, PTR) على خوادمنا المعتمدة ونقوم بتدفئة النطاق (Domain Warmup) لضمان أعلى سمعة بريدية لدى Google و Microsoft.'
        : 'We enforce strict cryptographic DNS policies (DMARC p=reject, DKIM 2048-bit, SPF, PTR records) paired with dedicated enterprise IP warming.'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Real Master Showreel Video Hero (100% Mobile Autoplay & Pure Clarity) */}
      <section className="live-video-hero-section">
        {/* Continuous Master Showreel Video with Guaranteed Mobile Autoplay */}
        <video 
          ref={videoRef}
          className="hero-live-video"
          src="/assets/pom-showreel.mp4"
          autoPlay 
          loop 
          muted 
          defaultMuted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/assets/pom-showreel-poster.jpg"
          onCanPlay={(e) => e.target.play().catch(() => {})}
          onLoadedData={(e) => e.target.play().catch(() => {})}
          onEnded={(e) => {
            e.target.currentTime = 0;
            e.target.play().catch(() => {});
          }}
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
            </span>
          </h1>
          
          <div className="hero-main-actions" style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn-hero-primary">
              <span>{lang === 'ar' ? 'ابدأ الآن واحجز استشارتك المجانية' : 'Get Started & Book Free Audit'}</span>
              <ArrowRight size={18} />
            </Link>
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

      {/* 3. The 7 Core Business Pillars Showcase */}
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
                    <span className="home-kpi-value" style={{ color: '#047857' }}>99.99% SLA</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> High Availability</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة استجابة الدعم الفني' : 'Helpdesk Response SLA'}</span>
                    <span className="home-kpi-value" style={{ color: '#0284c7' }}>8.4 Mins</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Guaranteed &lt; 15m</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'حالة جدران الحماية والأمان' : 'Cybersecurity EDR'}</span>
                    <span className="home-kpi-value" style={{ color: '#0f172a' }}>ARMED (100%)</span>
                    <span className="home-kpi-badge-neutral"><Shield size={14} /> Zero-Trust Fortinet</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'النسخ الاحتياطي المعزول' : 'Immutable Cloud Backups'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>DAILY (Verified)</span>
                    <span className="home-kpi-badge-gain"><Database size={14} /> RPO 15m / RTO &lt; 30m</span>
                  </div>
                </div>
              )}

              {/* Tab 2: ERP */}
              {activeTab === 'erp' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'ربط الفاتورة الإلكترونية ETA' : 'ETA e-Invoice Sync'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>CONNECTED</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> 100% Tax Compliant</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة معاملات نقاط البيع POS' : 'POS Cashier Latency'}</span>
                    <span className="home-kpi-value" style={{ color: '#0284c7' }}>0.08s</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Offline Mode Active</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'دقة الجرد ومطابقة المخازن' : 'Inventory Accuracy'}</span>
                    <span className="home-kpi-value" style={{ color: '#0f172a' }}>99.98%</span>
                    <span className="home-kpi-badge-neutral"><Sliders size={14} /> Barcode Multi-Warehouse</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'التقارير المالية والأرباح' : 'Financial Statement Sync'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>AUTOMATED</span>
                    <span className="home-kpi-badge-gain"><Award size={14} /> Live Trial Balance</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Smart */}
              {activeTab === 'smart' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'توفير استهلاك الطاقة الكهربائية' : 'Building Energy Reduction'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>-34.8%</span>
                    <span className="home-kpi-badge-gain"><Zap size={14} /> Smart Chiller Logic</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'كاميرات المراقبة بالذكاء الاصطناعي' : 'AI CCTV Stream Streams'}</span>
                    <span className="home-kpi-value" style={{ color: '#0284c7' }}>64 4K Feeds</span>
                    <span className="home-kpi-badge-gain"><Video size={14} /> ANPR + Face Recognition</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'حالة شبكة إنذار الحريق' : 'Fire Alarm Safety Loops'}</span>
                    <span className="home-kpi-value" style={{ color: '#0f172a' }}>NORMAL (100%)</span>
                    <span className="home-kpi-badge-neutral"><Shield size={14} /> Hochiki Addressable</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'استجابة بوابات الدخول Speed Gates' : 'Access Gate Throughput'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>0.2s Facial</span>
                    <span className="home-kpi-badge-gain"><CheckCircle2 size={14} /> 45 Persons / Min</span>
                  </div>
                </div>
              )}

              {/* Tab 4: Growth */}
              {activeTab === 'growth' && (
                <div className="home-kpis-grid">
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'متوسط العائد الإعلاني (ROAS)' : 'Omnichannel ROAS'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>4.8x ROAS</span>
                    <span className="home-kpi-badge-gain"><TrendingUp size={14} /> Meta, Google & TikTok</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'تصدر بحث جوجل (Google SEO)' : 'Top #1 Google Keywords'}</span>
                    <span className="home-kpi-value" style={{ color: '#0284c7' }}>142 Keywords</span>
                    <span className="home-kpi-badge-gain"><Award size={14} /> 785K Organic Visits</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'سرعة فتح مواقع الويب' : 'Web Speed (Lighthouse)'}</span>
                    <span className="home-kpi-value" style={{ color: '#0f172a' }}>99 / 100</span>
                    <span className="home-kpi-badge-neutral"><Zap size={14} /> React 19 & Next.js</span>
                  </div>
                  <div className="home-kpi-card">
                    <span className="home-kpi-title">{lang === 'ar' ? 'تسليم البريد في صندوق الوارد' : 'Mail Deliverability (DMARC)'}</span>
                    <span className="home-kpi-value" style={{ color: '#047857' }}>100% INBOX</span>
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

      {/* 6. REDESIGNED: Light Wide Rectangular Master Action Banner */}
      <section className="home-light-cta-section">
        <div className="container">
          <div className="home-cta-card-light">
            <div className="cta-light-text-side">
              <div className="cta-light-badge">
                <Sparkles size={15} />
                <span>{lang === 'ar' ? 'استشارة ودراسة هندسية متكاملة' : 'Free Engineering Consultation'}</span>
              </div>
              <h2 className="cta-light-title">
                {lang === 'ar' 
                  ? 'هل أنت مستعد لنقل أعمالك ومنشأتك إلى أحدث المعايير التقنية؟' 
                  : 'Ready to Transform Your Enterprise with Next-Gen Technology?'}
              </h2>
              <p className="cta-light-desc">
                {lang === 'ar'
                  ? 'تواصل مع فريق مهندسينا اليوم للحصول على دراسة فنية شاملة وعرض سعر مفصل يناسب حجم وطبيعة أعمالك مع ضمان استجابة فورية.'
                  : 'Connect with our senior systems, network, and software engineers for a comprehensive technical roadmap tailored to your operations.'}
              </p>
              <ul className="cta-light-features">
                <li><CheckCircle2 size={18} color="#059669" /> {lang === 'ar' ? 'دراسة موقعية ومعاينة مجانية' : 'Complimentary Site Audit'}</li>
                <li><CheckCircle2 size={18} color="#059669" /> {lang === 'ar' ? 'عقود صيانة رسمية وضمان معتمد' : 'Certified SLA Agreements'}</li>
                <li><CheckCircle2 size={18} color="#059669" /> {lang === 'ar' ? 'تنفيذ وتسليم بمواصفات عالمية' : 'Zero-Downtime Delivery'}</li>
              </ul>
            </div>

            <div className="cta-light-btn-side">
              <Link to="/contact" className="btn-cta-primary-light">
                <span>{lang === 'ar' ? 'طلب استشارة ومقترح هندسي' : 'Request Engineering Proposal'}</span>
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn-cta-secondary-light">
                <span>{lang === 'ar' ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp (Instant)'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Enterprise SLA Guarantees & Why Choose POM */}
      <section className="home-guarantees-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Shield size={14} /> {lang === 'ar' ? 'لماذا تختار وكالة POM؟' : 'The POM Advantage'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'ضمانات تنفيذ وتشغيل معتمدة تحمي استثمارك التقني' : 'Enterprise Guarantees Safeguarding Your Digital Estate'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نلتزم بأعلى معايير الجودة العالمية في التصميم والتوريد والبرمجة مع دعم فني مستمر على مدار الساعة.' 
              : 'End-to-end engineering governance delivering verified hardware, certified tax compliance, and sub-15m support.'}
          </p>

          <div className="guarantees-grid">
            {guarantees.map((g, idx) => (
              <div key={idx} className="guarantee-card">
                <div className="guarantee-icon-box">{g.icon}</div>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Client Success Stories & Testimonials */}
      <section className="home-testimonials-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Star size={14} /> {lang === 'ar' ? 'شهادات وقصص نجاح العملاء' : 'Client Success Stories'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'شركاء النجاح يشهدون بتميز وجودة حلولنا الهندسية' : 'Trusted by Leading Enterprises Across Egypt & The GCC'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'أكثر من 500 مؤسسة وشركة اعتمدت على POM لتطوير شبكاتها، أنظمتها المحاسبية، وبنيتها التحتية.' 
              : 'Over 500 corporations rely on POM Agency to power their cloud servers, BMS automation, and business systems.'}
          </p>

          <div className="testimonials-grid">
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{item.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.name.charAt(0)}</div>
                  <div className="author-info">
                    <h5>{item.name}</h5>
                    <span dangerouslySetInnerHTML={{ __html: item.role }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Interactive FAQ Accordion */}
      <section className="home-faq-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'الأسئلة الأكثر شيوعاً' : 'Frequently Asked Questions'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'كل ما تود معرفته حول خدماتنا وكيفية بدء مشروعك' : 'Everything You Need to Know About Working with POM'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'إجابات مباشرة وواضحة على أهم الاستفسارات التقنية والتنفيذية لشركائنا وعملائنا.' 
              : 'Clear, transparent answers to the most common questions regarding our ERP, IT, low-current, and marketing services.'}
          </p>

          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq-icon-toggle" />
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
