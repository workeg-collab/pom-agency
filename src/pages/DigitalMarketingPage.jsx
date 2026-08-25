import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  TrendingUp, 
  Target, 
  Share2, 
  Search, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Megaphone, 
  Globe, 
  Users, 
  Eye, 
  Award, 
  Layers, 
  Video, 
  ShoppingBag, 
  DollarSign, 
  Activity, 
  MousePointer, 
  Flame, 
  Rocket, 
  Sliders, 
  PieChart, 
  Repeat
} from 'lucide-react';
import './DigitalMarketingPage.css';

export default function DigitalMarketingPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('meta');

  const marketingPillars = [
    {
      icon: Target,
      title: lang === 'ar' ? 'إعلانات ميتا وإنستجرام فائقة التحويل' : 'Meta & Instagram Performance Ads',
      desc: lang === 'ar' 
        ? 'حملات إعلانات موجهة بدقة عبر خوارزميات الذكاء الاصطناعي مع تحسين الـ ROAS وتتبع البيكسل المتقدم.'
        : 'AI-driven Meta & Instagram ads engineered for maximum ROAS, pixel retargeting, and low CPA acquisition.'
    },
    {
      icon: Search,
      title: lang === 'ar' ? 'إعلانات جوجل والشراء الفوري (Google Search & PPC)' : 'Google Search & High-Intent PPC',
      desc: lang === 'ar'
        ? 'الظهور في أول نتيجة بحث في جوجل للعملاء الذين يبحثون بنية الشراء الفورية عبر حملات البحث والـ Shopping.'
        : 'Capture bottom-of-funnel buyers searching on Google with optimized Quality Scores and Performance Max.'
    },
    {
      icon: Video,
      title: lang === 'ar' ? 'إعلانات تيك توك وسناب شات الفيروسية' : 'TikTok & Snapchat Viral Video Funnels',
      desc: lang === 'ar'
        ? 'صناعة فيديوهات قصيرة Reels و TikTok سريعة الانتشار تخطف الانتباه في أول 3 ثوانٍ وتضاعف الطلبات.'
        : 'High-converting vertical video ads (Reels/TikTok) with scroll-stopping hooks and direct store integration.'
    },
    {
      icon: Globe,
      title: lang === 'ar' ? 'تصدر نتائج البحث العضوية (SEO Dominance)' : 'Organic SEO & Search Dominance',
      desc: lang === 'ar'
        ? 'استراتيجيات سيو تقنية ومحتوى متصدر في جوجل لجلب آلاف الزوار والعملاء المهتمين مجاناً على مدار الساعة.'
        : 'Technical, on-page, and authority backlink SEO strategies designed to rank your brand at #1 on Google.'
    },
    {
      icon: Sparkles,
      title: lang === 'ar' ? 'استوديو صناعة المحتوى والإخراج الإعلاني' : 'Creative Studio & Ad Production',
      desc: lang === 'ar'
        ? 'تصوير احترافي للمنتجات، تصميمات جرافيك تفاعلية، موشن جرافيك، وكتابة نصوص إعلانية مقنعة (Copywriting).'
        : 'High-end product videography, motion graphics, viral creative storyboards, and persuasive ad copywriting.'
    },
    {
      icon: Share2,
      title: lang === 'ar' ? 'إدارة السوشيال ميديا وخدمة العملاء' : 'Social Media Growth & Community Care',
      desc: lang === 'ar'
        ? 'نشر يومي جذاب، إدارة التفاعل والرد السريع على الرسائل والتعليقات، وبناء مجتمع مخلص لعلامتك.'
        : 'Daily engaging content calendar, rapid response community moderation, and brand loyalty growth.'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'التسويق عبر المؤثرين (UGC & Influencers)' : 'UGC Creators & Influencer Collabs',
      desc: lang === 'ar'
        ? 'التعاون مع صناع المحتوى المؤثرين (UGC) لإنشاء مراجعات موثوقة لمنتجاتك ترفع معدل الثقة والشراء.'
        : 'Authentic UGC creator video reviews and macro/micro-influencer partnerships that drive massive trust.'
    },
    {
      icon: Repeat,
      title: lang === 'ar' ? 'مسارات التحويل المؤتمتة (Funnels & Retention)' : 'Automated Sales Funnels & Email Retargeting',
      desc: lang === 'ar'
        ? 'استعادة السلات المتروكة، حملات بريد إلكتروني وواتساب ذكية لمضاعفة القيمة الإجمالية لكل عميل (LTV).'
        : 'Abandoned cart recovery flows, automated WhatsApp bots, and retention campaigns maximizing customer LTV.'
    }
  ];

  const packages = [
    {
      id: 'starter-growth-mkt',
      title: lang === 'ar' ? 'باقة نمو المبيعات (Starter)' : 'Growth Starter Package',
      subtitle: lang === 'ar' ? 'للمشاريع والمتاجر الناشئة' : 'Emerging Brands & Online Stores',
      price: 1499.99,
      recommended: false,
      image: '/assets/mkt-viral-social.jpg',
      features: lang === 'ar' ? [
        'إدارة منصتين إعلانيتين (Meta + Google)',
        '16 تصميم بوست احترافي شهرياً',
        'صناعة 4 فيديوهات Reels تفاعلية للمتجر',
        'إعداد بيكسل التتبع وتحسين التحويلات',
        'تقرير أداء وتحليل مبيعات أسبوعي'
      ] : [
        '2 Ad Channels (Meta Ads + Google PPC)',
        '16 Custom High-Converting Posts / Mo',
        '4 Dynamic Short-Form Reels Videos',
        'Pixel & Conversion Tracking Setup',
        'Weekly Sales & ROAS Performance Report'
      ]
    },
    {
      id: 'scale-viral-mkt',
      title: lang === 'ar' ? 'باقة الانتشار ومضاعفة المبيعات (Scale Pro)' : 'Scale & Viral Dominance Pro',
      subtitle: lang === 'ar' ? 'للشركات والمتاجر سريعة النمو' : 'Fast-Growing E-Commerce & Businesses',
      price: 2999.99,
      recommended: true,
      image: '/assets/mkt-growth-dashboard.jpg',
      features: lang === 'ar' ? [
        'إدارة 4 منصات (Meta, Google, TikTok, Snapchat)',
        'صناعة محتوى يومي + 10 فيديوهات Reels/TikTok',
        'تصوير فيديو احترافي داخل استوديو الوكالة',
        'استراتيجية تصدر محركات البحث SEO الأساسية',
        'إعلانات إعادة الاستهداف واستعادة السلات المتروكة',
        'جلسة استراتيجية أسبوعية مع مدير النمو'
      ] : [
        '4 Omnichannel Platforms (Meta, Google, TikTok, Snap)',
        'Daily Engaging Posts + 10 Viral Reels/TikToks',
        'Professional Creative Studio Video Shoot',
        'Core Technical & On-Page SEO Campaign',
        'Smart Retargeting & Abandoned Cart Recovery',
        'Weekly 1-on-1 Growth Strategy Reviews'
      ]
    },
    {
      id: 'omnichannel-enterprise-mkt',
      title: lang === 'ar' ? 'باقة الهيمنة الشاملة 360° (Enterprise)' : '360° Omnichannel Market Dominance',
      subtitle: lang === 'ar' ? 'للكيانات والمؤسسات والعلامات الكبرى' : 'Established Brands, Holdings & Large Chains',
      price: 4999.99,
      recommended: false,
      image: '/assets/mkt-social-studio.jpg',
      features: lang === 'ar' ? [
        'إدارة تسويقية شاملة لجميع المنصات والقنوات',
        'إنتاج سينمائي غير محدود وفيديوهات UGC مؤثرين',
        'حملات SEO شاملة لتصدر الكلمات الرئيسية في جوجل',
        'حملات إعلانات B2B على LinkedIn وجلب صفقات كبرى',
        'مسارات بيع متطورة (Funnels) وربط أنظمة CRM',
        'فريق تسويقي كامل مخصص ومدير حساب 24/7'
      ] : [
        'Full 360° Omnichannel Digital Dominance',
        'Unlimited Studio Production & Influencer UGC',
        'Full Authority SEO Ranking for High-Volume Terms',
        'High-Ticket B2B LinkedIn & Search Lead Gen',
        'Automated Advanced Sales Funnels & CRM Sync',
        'Dedicated Full-Stack Marketing Team & Lead'
      ]
    }
  ];

  const visualGallery = [
    {
      img: '/assets/mkt-growth-dashboard.jpg',
      title: lang === 'ar' ? 'لوحات قياس العائد الإعلاني (ROAS)' : 'Live ROAS Performance Command',
      desc: lang === 'ar' ? 'تتبع فوري لمبيعات المتاجر وعائد الإنفاق عبر القنوات المتعددة.' : 'Real-time multi-channel ad spend telemetry and conversion tracking.'
    },
    {
      img: '/assets/mkt-social-studio.jpg',
      title: lang === 'ar' ? 'استوديو الإنتاج الإعلاني' : 'Creative Studio Video Production',
      desc: lang === 'ar' ? 'تصوير سينمائي للمنتجات وصناعة فيديوهات فيروسية خاطفة.' : 'High-impact product cinematography and viral short-form reels.'
    },
    {
      img: '/assets/mkt-viral-social.jpg',
      title: lang === 'ar' ? 'إعلانات المبيعات والتجارة الإلكترونية' : 'Viral E-Commerce Social Funnels',
      desc: lang === 'ar' ? 'إعلانات مباشرة عبر تيك توك وسناب تضاعف طلبات الشراء.' : 'Direct checkout social ad hooks delivering rapid orders.'
    },
    {
      img: '/assets/mkt-seo-google.jpg',
      title: lang === 'ar' ? 'تصدر نتائج بحث جوجل (SEO)' : 'Google Search SEO Dominance',
      desc: lang === 'ar' ? 'الوصول للمركز الأول في الكلمات التنافسية لجلب زيارات مجانية.' : 'Ranking #1 for high-volume keywords to drive organic leads.'
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: lang === 'ar' ? 'أبحاث السوق وتفكيك المنافسين' : 'Market Research & Competitor Deconstruction',
      desc: lang === 'ar' 
        ? 'تحليل إعلانات المنافسين الرابحة، دراسة سلوك جمهورك المستهدف، وتحديد زوايا الإقناع الأكثر تأثيراً.' 
        : 'Auditing competitor funnels, researching buyer psychology, and identifying winning unique selling propositions.'
    },
    {
      num: '02',
      title: lang === 'ar' ? 'صناعة المحتوى والإبداع البصري' : 'High-Converting Creative Production',
      desc: lang === 'ar' 
        ? 'كتابة نصوص إعلانية قوية (Hooks & Copy)، تصوير فيديوهات تيك توك وريلز، وتصميم عروض بصرية جذابة.' 
        : 'Drafting high-hook ad copy, filming vertical reels/TikToks, and designing scroll-stopping visual assets.'
    },
    {
      num: '03',
      title: lang === 'ar' ? 'إطلاق الحملات وتوجيه الاستهداف' : 'Omnichannel Launch & Micro-Targeting',
      desc: lang === 'ar' 
        ? 'تدشين الحملات على المنصات المحددة، ضبط البيكسل، استهداف الجماهير المخصصة والشبيهة (Lookalike).' 
        : 'Launching laser-targeted campaigns across Meta, Google, TikTok, and Snap with custom audience segments.'
    },
    {
      num: '04',
      title: lang === 'ar' ? 'التحسين اليومي والتوسع (Scale)' : 'Daily ROAS Optimization & Scaled Growth',
      desc: lang === 'ar' 
        ? 'متابعة المؤشرات يومياً، إيقاف الإعلانات الضعيفة، مضاعفة الميزانية على الحملات الرابحة وخفض تكلفة CPA.' 
        : 'A/B testing ad variations, killing underperformers, and scaling winning ad sets to compound profitability.'
    }
  ];

  return (
    <div className="digital-marketing-page">
      {/* 1. Unique Omnichannel Command Hero Section */}
      <section className="mkt-hero-section">
        <div className="container">
          <div className="mkt-hero-content">
            <div className="mkt-platform-pills">
              <span style={{ color: '#1877f2', fontWeight: 800 }}>Meta</span> &bull; 
              <span style={{ color: '#ea4335', fontWeight: 800 }}>Google Ads</span> &bull; 
              <span style={{ color: '#000000', fontWeight: 800 }}>TikTok</span> &bull; 
              <span style={{ color: '#fffc00', fontWeight: 800 }}>Snapchat</span> &bull; 
              <span style={{ color: '#0a66c2', fontWeight: 800 }}>LinkedIn</span> &bull; 
              <span style={{ color: '#10b981', fontWeight: 800 }}>SEO #1</span>
            </div>

            <h1 className="mkt-hero-title">
              {lang === 'ar' 
                ? 'نمو مبيعات استثنائي وعائد إعلاني مضاعف (4.8x ROAS)' 
                : 'Data-Driven Digital Marketing That Multiplies Your Revenue'}
            </h1>
            
            <p className="mkt-hero-subtitle">
              {lang === 'ar'
                ? 'نحول ميزانيتك الإعلانية إلى ماكينة نمو ومبيعات مستمرة: إعلانات ممولة فائقة التحويل على ميتا وجوجل وتيك توك، صناعة محتوى إبداعي جذاب، وتصدر محركات البحث (SEO) بأعلى معايير الربحية.'
                : 'We transform your advertising spend into a predictable revenue engine: high-converting Meta, Google, TikTok and Snap ad funnels, viral content studio production, and organic Google SEO dominance.'}
            </p>

            <div className="mkt-hero-actions">
              <Link to="/contact" className="btn btn-primary" style={{ background: '#10b981', borderColor: '#10b981' }}>
                {lang === 'ar' ? 'احجز استراتيجية نمو مخصصة لمشروعك' : 'Book Free Growth Strategy'} <ArrowRight size={18} />
              </Link>
              <a href="#packages" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات التسويق والأسعار' : 'Explore Marketing Packages'}
              </a>
            </div>
          </div>

          {/* Hero Big Centerpiece Graphic */}
          <div className="mkt-hero-centerpiece">
            <div className="mkt-centerpiece-wrapper">
              <img 
                src="/assets/mkt-growth-dashboard.jpg" 
                alt="Omnichannel Digital Marketing Analytics Command Dashboard" 
                className="mkt-hero-dashboard-img" 
              />
              
              <div className="mkt-float-widget mkt-float-widget-1">
                <div className="mkt-widget-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <TrendingUp size={22} />
                </div>
                <div className="mkt-widget-text">
                  <strong>{lang === 'ar' ? 'متوسط عائد الإعلانات 4.8x' : '4.8x Average ROAS'}</strong>
                  <span>{lang === 'ar' ? '+420% نمو مبيعات المتاجر' : '+420% E-Commerce Scale'}</span>
                </div>
              </div>

              <div className="mkt-float-widget mkt-float-widget-2">
                <div className="mkt-widget-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                  <Search size={22} />
                </div>
                <div className="mkt-widget-text">
                  <strong>{lang === 'ar' ? 'المركز #1 في بحث Google' : 'Top #1 Google Ranking'}</strong>
                  <span>{lang === 'ar' ? 'زيارات مجانية مستهدفة يومياً' : 'Organic Inbound Leads'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Growth Stats & Performance Bar */}
      <section className="mkt-stats-section">
        <div className="container">
          <div className="mkt-stats-grid">
            <div className="mkt-stat-item">
              <span className="mkt-stat-num">4.8x</span>
              <span className="mkt-stat-label">{lang === 'ar' ? 'متوسط عائد الإنفاق الإعلاني (ROAS)' : 'Average Campaign ROAS'}</span>
            </div>
            <div className="mkt-stat-item">
              <span className="mkt-stat-num">12M+</span>
              <span className="mkt-stat-label">{lang === 'ar' ? 'وصول وتفاعل شهري مستهدف' : 'Monthly Targeted Reach'}</span>
            </div>
            <div className="mkt-stat-item">
              <span className="mkt-stat-num">#1</span>
              <span className="mkt-stat-label">{lang === 'ar' ? 'تصدر نتائج بحث جوجل (SEO)' : 'Google Top Keyword Rank'}</span>
            </div>
            <div className="mkt-stat-item">
              <span className="mkt-stat-num">+320%</span>
              <span className="mkt-stat-label">{lang === 'ar' ? 'مضاعفة معدل التحويل والمبيعات' : 'Conversion Rate Uplift'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Omnichannel Campaign Console */}
      <section className="mkt-console-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <BarChart3 size={14} /> {lang === 'ar' ? 'منصة مراقبة الحملات والعائد الإعلاني' : 'Omnichannel Campaign Telemetry'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تتبع حي لأداء الحملات الإعلانية ومعدلات التحويل لحظياً' : 'Real-Time ROAS, CPA & Ad Performance Monitoring'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاشات تحليلية دقيقة تمنحك رؤية كاملة لعائد كل جنيه أو دولار مستثمر في الإعلانات عبر مختلف المنصات.' 
              : 'Granular telemetry tracking cost per acquisition (CPA), return on ad spend (ROAS), and multi-touch attribution.'}
          </p>

          {/* Tab Switcher */}
          <div className="mkt-tab-buttons">
            <button 
              className={`mkt-tab-btn ${activeTab === 'meta' ? 'active' : ''}`}
              onClick={() => setActiveTab('meta')}
            >
              <Target size={16} />
              <span>{lang === 'ar' ? 'إعلانات ميتا وإنستجرام (Meta)' : 'Meta & Instagram Ads'}</span>
            </button>
            <button 
              className={`mkt-tab-btn ${activeTab === 'google' ? 'active' : ''}`}
              onClick={() => setActiveTab('google')}
            >
              <Search size={16} />
              <span>{lang === 'ar' ? 'إعلانات جوجل والشراء الفوري' : 'Google Search & PPC'}</span>
            </button>
            <button 
              className={`mkt-tab-btn ${activeTab === 'tiktok' ? 'active' : ''}`}
              onClick={() => setActiveTab('tiktok')}
            >
              <Video size={16} />
              <span>{lang === 'ar' ? 'تيك توك وسناب شات الفيروسي' : 'TikTok & Snap Ads'}</span>
            </button>
            <button 
              className={`mkt-tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              <Globe size={16} />
              <span>{lang === 'ar' ? 'سيو وتصدر محركات البحث' : 'Organic Google SEO'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="mkt-console-window">
            <div className="mkt-window-header">
              <div className="mkt-window-dots">
                <div className="mkt-window-dot" style={{ background: '#ef4444' }} />
                <div className="mkt-window-dot" style={{ background: '#f59e0b' }} />
                <div className="mkt-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="mkt-window-title">
                <BarChart3 size={15} />
                <span>POM Growth Engine &bull; {lang === 'ar' ? 'لوحة تحليلات العائد الإعلاني' : 'Live Attribution Dashboard'}</span>
              </div>
              <span className="mkt-window-badge">{lang === 'ar' ? 'الحملات نشطة ومربحة (+28% ROAS)' : 'Campaigns Scaled & Active'}</span>
            </div>

            <div className="mkt-window-body">
              {/* Tab 1: Meta */}
              {activeTab === 'meta' && (
                <div className="mkt-kpis-grid">
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'عائد الإنفاق الإعلاني (ROAS)' : 'Meta Return on Ad Spend'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>4.2x ROAS</span>
                    <span className="mkt-kpi-badge-gain"><TrendingUp size={14} /> +32% vs Last Month</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'تكلفة الشراء / الطلب (CPA)' : 'Cost Per Acquisition (CPA)'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#38bdf8' }}>$3.20 / Order</span>
                    <span className="mkt-kpi-badge-gain"><CheckCircle2 size={14} /> -45% Lower Ad Cost</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'نسبة النقر للظهور (CTR)' : 'Click-Through Rate (CTR)'}</span>
                    <span className="mkt-kpi-value">3.84%</span>
                    <span className="mkt-kpi-badge-neutral"><MousePointer size={14} /> Top 5% Industry Benchmark</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'إجمالي الطلبات المحققة' : 'Attributed Store Orders'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>4,820 Orders</span>
                    <span className="mkt-kpi-badge-gain"><ShoppingBag size={14} /> Pixel Synced (100%)</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Google */}
              {activeTab === 'google' && (
                <div className="mkt-kpis-grid">
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'عائد إعلانات جوجل (Google ROAS)' : 'Google Ads ROAS'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>5.1x ROAS</span>
                    <span className="mkt-kpi-badge-gain"><TrendingUp size={14} /> High-Intent Purchase</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'درجة جودة الكلمات (Quality Score)' : 'Avg Quality Score'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#38bdf8' }}>9.4 / 10</span>
                    <span className="mkt-kpi-badge-gain"><CheckCircle2 size={14} /> Lowest CPC Bidding</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'الظهور في أول نتيجة بحث' : 'Top of Page Impression'}</span>
                    <span className="mkt-kpi-value">88.2%</span>
                    <span className="mkt-kpi-badge-neutral"><Search size={14} /> High Commercial Intent</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'معدل تحويل الزوار (CVR)' : 'Conversion Rate'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>8.4%</span>
                    <span className="mkt-kpi-badge-gain"><Rocket size={14} /> Ready-to-Buy Leads</span>
                  </div>
                </div>
              )}

              {/* Tab 3: TikTok & Snap */}
              {activeTab === 'tiktok' && (
                <div className="mkt-kpis-grid">
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'عائد تيك توك وسناب (ROAS)' : 'TikTok & Snap ROAS'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>4.9x ROAS</span>
                    <span className="mkt-kpi-badge-gain"><Flame size={14} /> Viral Hook Scaling</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'مشاهدات الفيديو القصيرة' : 'Total Video Views'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#38bdf8' }}>2.4M Views</span>
                    <span className="mkt-kpi-badge-gain"><Video size={14} /> Hook Rate 72% (3s)</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'المشاركات والتفاعل الفيروسي' : 'Viral Shares & Saves'}</span>
                    <span className="mkt-kpi-value">48.5K Shares</span>
                    <span className="mkt-kpi-badge-neutral"><Share2 size={14} /> Organic Amplification</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'إجمالي المبيعات المباشرة' : 'Direct Checkout Orders'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>3,150 Orders</span>
                    <span className="mkt-kpi-badge-gain"><DollarSign size={14} /> Scaled UGC Videos</span>
                  </div>
                </div>
              )}

              {/* Tab 4: SEO */}
              {activeTab === 'seo' && (
                <div className="mkt-kpis-grid">
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'قوة النطاق في جوجل (Domain Rating)' : 'Ahrefs Domain Rating (DR)'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>81 DR</span>
                    <span className="mkt-kpi-badge-gain"><Award size={14} /> High Authority Domain</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'الكلمات المتصدرة في المركز الأول #1' : 'Top #1 Google Keywords'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#38bdf8' }}>142 Keywords</span>
                    <span className="mkt-kpi-badge-gain"><Search size={14} /> +35 New Terms Rank #1</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'الزيارات العضوية المجانية شهرياً' : 'Monthly Organic Traffic'}</span>
                    <span className="mkt-kpi-value">785.4K Visits</span>
                    <span className="mkt-kpi-badge-gain"><TrendingUp size={14} /> +128% Free Traffic</span>
                  </div>
                  <div className="mkt-kpi-card">
                    <span className="mkt-kpi-title">{lang === 'ar' ? 'صحة السيو التقني ومؤشرات الويب' : 'Technical SEO Health'}</span>
                    <span className="mkt-kpi-value" style={{ color: '#34d399' }}>99 / 100</span>
                    <span className="mkt-kpi-badge-gain"><Zap size={14} /> Core Web Vitals Pass</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multiple Visual Feature Showcases with High-Res Images */}
      {/* Showcase 1: Creative Production Studio */}
      <section className="mkt-visual-split-section">
        <div className="container mkt-visual-split-grid">
          <div className="mkt-split-img-card">
            <img 
              src="/assets/mkt-social-studio.jpg" 
              alt="Creative Digital Marketing Video Production Studio" 
            />
          </div>
          <div className="mkt-split-content">
            <div className="badge" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
              <Video size={14} /> {lang === 'ar' ? 'استوديو الإنتاج وصناعة المحتوى الإبداعي' : 'Creative Studio & Ad Production'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'صناعة فيديوهات وإعلانات سينمائية تخطف الانتباه وتحقق أعلى مبيعات' 
                : 'Cinematic Creative Production Engineered to Stop the Scroll & Convert'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'داخل استوديو الإنتاج الخاص بنا، نجمع بين كاميرات التصوير السينمائي، الإضاءة الاحترافية، وكتابة السيناريوهات البصرية المتقنة. ننتج فيديوهات تيك توك، ريلز، وإعلانات تجارية تعكس قوة علامتك وتدفع العميل لاتخاذ قرار الشراء فوراً.'
                : 'Inside our dedicated agency studio, we combine cinema-grade cameras, professional studio lighting, and psychological ad copywriting to produce high-converting vertical TikToks, Instagram Reels, and brand commercials that drive instant purchases.'}
            </p>
            <ul className="mkt-split-checklist">
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'سيناريوهات إعلانية مبتكرة تصنع هوك (Hook) قوي في أول 3 ثوانٍ' : 'Scroll-stopping creative hooks tested for maximum retention'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'تصوير فوتوغرافي وفيديو احترافي للمنتجات يبرز أدق التفاصيل الفاخرة' : 'High-resolution macro product photography and dynamic video'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'مونتاج سينمائي سريع ومؤثرات صوتية ترفع معدل استكمال الفيديو' : 'Fast-paced cinematic editing and viral trending sound design'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#10b981', borderColor: '#10b981' }}>
              {lang === 'ar' ? 'طلب جلسة تصوير وإنتاج إعلاني' : 'Book Creative Studio Shoot'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 2: Viral E-Commerce Social Funnels */}
      <section className="mkt-visual-split-section bg-surface">
        <div className="container mkt-visual-split-grid reverse">
          <div className="mkt-split-img-card">
            <img 
              src="/assets/mkt-viral-social.jpg" 
              alt="Viral E-Commerce Social Ad Funnels & Live Shopping" 
            />
          </div>
          <div className="mkt-split-content">
            <div className="badge" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
              <ShoppingBag size={14} /> {lang === 'ar' ? 'إعلانات التجارة الإلكترونية والمبيعات' : 'Viral E-Commerce Funnels'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'مسارات بيع مؤتمتة وإعلانات سريعة الانتشار لمضاعفة مبيعات متجرك' 
                : 'Automated Social Ad Funnels Turning Browsers into Loyal Repeat Buyers'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نبني مسارات بيع إلكترونية متكاملة (Full-Funnel Marketing): إعلانات استقطاب الجمهور البارد (Top of Funnel)، إعادة الاستهداف الذكي للمهتمين بالمنتجات، وتنبيهات استعادة السلات المتروكة لضمان تحقيق أعلى عائد على الإنفاق الإعلاني (ROAS).'
                : 'We build end-to-end automated e-commerce sales funnels: dynamic product ads targeting cold shoppers, intelligent retargeting for warm visitors, and automated abandoned cart recovery flows ensuring unmatched profitability.'}
            </p>
            <ul className="mkt-split-checklist">
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'إعلانات ديناميكية DPA تعرض للمستخدم المنتجات التي تصفحها بالمتجر' : 'Dynamic catalog ads automatically displaying viewed items'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'ربط فوري ومباشر مع شوبيفاي، ووكومرس، ومتاجر سلة وزد' : 'Seamless integration with Shopify, WooCommerce, and Salla'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'حملات إعادة استهداف ذكية لزيادة متوسط قيمة الطلب (AOV)' : 'Smart retargeting flows engineered to maximize average order value'}</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              {lang === 'ar' ? 'عرض خطة نمو المتجر الإلكتروني' : 'Get E-Commerce Growth Plan'}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 3: SEO Google Dominance */}
      <section className="mkt-visual-split-section">
        <div className="container mkt-visual-split-grid">
          <div className="mkt-split-img-card">
            <img 
              src="/assets/mkt-seo-google.jpg" 
              alt="Google Search Engine Optimization SEO Dominance Analytics" 
            />
          </div>
          <div className="mkt-split-content">
            <div className="badge" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
              <Globe size={14} /> {lang === 'ar' ? 'تصدر نتائج بحث جوجل (SEO)' : 'Organic SEO Dominance'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'هيمنة كاملة على نتائج بحث جوجل والوصول للمركز الأول مجاناً' 
                : 'Dominate Google Search #1 Rankings for Sustainable Free Inbound Leads'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'استراتيجيات سيو علمية متقدمة تجعل موقعك الوجهة الأولى لعملائك المحتملين: تهيئة البنية التحتية وسرعة الموقع (Core Web Vitals)، بناء شبكة روابط خلفية ذات ثقة عالية (High DR Backlinks)، وتصدر الكلمات المفتاحية الأكثر ربحية في مجالك.'
                : 'Advanced data-backed SEO engineered to establish permanent search authority: speed optimization, high-authority backlink architecture, and ranking #1 for the most profitable commercial search keywords in your industry.'}
            </p>
            <ul className="mkt-split-checklist">
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'تدقيق تقني شامل لمعالجة كافة أخطاء الفهرسة وتحسين سرعة الموقع' : 'Technical SEO audits eliminating indexing errors and boosting speed'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'بناء مقالات متخصصة وهيكلية محتوى متوافقة مع خوارزميات جوجل الذكية' : 'Content cluster architecture aligned with Google Helpful Content updates'}</li>
              <li><CheckCircle2 size={18} color="#10b981" /> {lang === 'ar' ? 'استحواذ على الزيارات المستهدفة بدون دفع تكلفة نقرة للإعلانات' : '100% organic, recurring traffic without continuous ad spend'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#10b981', borderColor: '#10b981' }}>
              {lang === 'ar' ? 'طلب فحص سيو مجاني لموقعك' : 'Request Free SEO Audit'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Rich Image Gallery Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'معرض الحملات والإنتاج الإبداعي' : 'Creative Campaigns Gallery'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'نتائج حقيقية وحملات إبداعية ملهمة' : 'Real-World Creative Deployments & Scaling'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاهد جانباً من حملاتنا الإعلانية، إنتاج الاستوديو، وتصدر محركات البحث لعملائنا في مختلف القطاعات.' 
              : 'Explore our multi-channel advertising creative execution, studio shoots, and SEO case studies.'}
          </p>

          <div className="mkt-gallery-grid">
            {visualGallery.map((item, idx) => (
              <div key={idx} className="mkt-gallery-item">
                <img src={item.img} alt={item.title} />
                <div className="mkt-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core 8 Digital Marketing Pillars Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Layers size={14} /> {lang === 'ar' ? 'ركائز التسويق الرقمي الشاملة' : 'Core Marketing Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'حلول تسويقية متكاملة تدفع علامتك التجارية للصدارة' : 'End-to-End Growth Pillars Driving Measurable ROI'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نغطي كافة قنوات التسويق الرقمي من الإنتاج الإبداعي وحتى التحسين اليومي لمعدلات التحويل والربحية.' 
              : 'Complete marketing ecosystem mastery from creative ad production to daily conversion rate scaling.'}
          </p>

          <div className="mkt-modules-grid">
            {marketingPillars.map((p, idx) => (
              <div key={idx} className="mkt-module-card">
                <div className="mkt-module-top">
                  <div className="mkt-icon-box">
                    <p.icon size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="mkt-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'عائد استثمار مثبت' : 'Proven ROI Standard'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Marketing Growth Packages & Pricing */}
      <section className="section bg-surface" id="packages">
        <div className="container">
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Zap size={14} /> {lang === 'ar' ? 'باقات وحلول النمو التسويقي' : 'Marketing Packages & Pricing'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر باقة التسويق الرقمي المناسبة لحجم أهدافك' : 'Select the Ideal Growth Tier for Your Business'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات شاملة لإدارة الإعلانات، إنتاج المحتوى، التصوير الاحترافي، والتحسين المستمر لمضاعفة المبيعات.' 
              : 'Transparent growth packages covering ad management, studio production, copywriting, and weekly optimization.'}
          </p>

          <div className="mkt-pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`mkt-pricing-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge" style={{ background: '#10b981' }}>{t('popularChoice')}</div>}
                <div>
                  <h3 className="mkt-plan-title">{pkg.title}</h3>
                  <span className="mkt-plan-subtitle">{pkg.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="mkt-plan-features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="check-icon" style={{ color: '#10b981' }} />
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
                    style={pkg.recommended ? { background: '#10b981', borderColor: '#10b981' } : {}}
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
          <div className="badge-center" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
            <Layers size={14} /> {lang === 'ar' ? 'منهجية العمل والنمو' : 'Data-Driven Growth Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات مدروسة للانتقال من إطلاق الحملة إلى مضاعفة المبيعات' : '4-Step Proven Methodology for Compounded Scale'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتبع مسار عمل هندسي دقيق يبدأ من فحص السوق وحتى الوصول لأعلى عائد استثماري على كل دولار مستثمر.' 
              : 'A structured roadmap from deep competitor deconstruction to viral creative production and daily ad set scaling.'}
          </p>

          <div className="mkt-workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="mkt-workflow-card">
                <span className="mkt-workflow-step-num">{step.num}</span>
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
          <div className="mkt-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل أنت مستعد لمضاعفة مبيعاتك وتصدر السوق في مجالك؟' 
                : 'Ready to Scale Your Brand with High-ROI Digital Marketing?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على استشارة تسويقية مخصصة وجلسة تحليل مجانية لمدة 30 دقيقة مع فريق خبراء النمو لدينا.' 
                : 'Schedule a free 30-minute growth strategy session and competitor ad audit with our senior strategists.'}
            </p>
            <div className="mkt-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', background: '#10b981', borderColor: '#10b981' }}>
                {lang === 'ar' ? 'طلب استشارة تسويقية مجانية' : 'Book Free Strategy Call'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة تسويقية عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
