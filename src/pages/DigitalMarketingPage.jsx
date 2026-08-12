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
  FileText
} from 'lucide-react';
import './DigitalMarketingPage.css';

export default function DigitalMarketingPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const marketingPillars = [
    {
      icon: Target,
      title: lang === 'ar' ? 'الإعلانات الممولة والـ PPC' : 'Paid Advertising & PPC',
      desc: lang === 'ar' 
        ? 'حملات إعلانات موجهة بدقة عالية على فيسبوك، إنستغرام، جوجل، وتيك توك لتحقيق أعلى مبيعات.'
        : 'Precision-targeted paid campaigns across Facebook, Instagram, Google Ads, and TikTok with optimized CPA.'
    },
    {
      icon: Share2,
      title: lang === 'ar' ? 'إدارة منصات التواصل الاجتماعي' : 'Social Media Management',
      desc: lang === 'ar'
        ? 'صناعة وإدارة محتوى إبداعي جذاب يومياً وتنمية التفاعل والمتابعين على كافة المنصات.'
        : 'Full-suite content creation, copywriters, grid design, community management, and audience growth.'
    },
    {
      icon: Search,
      title: lang === 'ar' ? 'تصدر محركات البحث (SEO)' : 'SEO & Search Dominance',
      desc: lang === 'ar'
        ? 'استراتيجيات تحسين محركات البحث وتصدر الكلمات المفتاحية في جوجل لجلب زيارات مستهدفة مجاناً.'
        : 'On-page, technical, and off-page SEO strategies engineered to rank your brand at #1 on Google.'
    },
    {
      icon: Megaphone,
      title: lang === 'ar' ? 'التسويق بالمحتوى وصناعة الفيديو' : 'Content Marketing & Copywriting',
      desc: lang === 'ar'
        ? 'كتابة نصوص إعلانية مقنعة وصناعة فيديوهات قصيرة Reels و TikTok جذابة تضاعف التحويلات.'
        : 'High-impact copywriting, viral video scriptwriting, and promotional brand storytelling.'
    },
    {
      icon: Layers,
      title: lang === 'ar' ? 'التسويق بالبريد والربط الآلي' : 'Email & Automation Campaigns',
      desc: lang === 'ar'
        ? 'إرسال حملات بريد إلكتروني مؤتمتة وتذكير بالسلات المتروكة لزيادة القيمة الإجمالية للعميل.'
        : 'Automated email flows, abandoned cart recovery, newsletter campaigns, and customer retention.'
    },
    {
      icon: BarChart3,
      title: lang === 'ar' ? 'تحسين نسبة التحويل (CRO)' : 'Conversion Rate Optimization (CRO)',
      desc: lang === 'ar'
        ? 'تحليل سلوك الزوار وتطوير صفحات الهبوط لزيادة نسبة الشراء بدون الحاجة لميزانيات إضافية.'
        : 'A/B testing, heatmap tracking, landing page optimization, and frictionless checkout funnels.'
    }
  ];

  const packages = [
    {
      id: 'starter-mkt',
      titleKey: 'planStarterMarketing',
      subtitleKey: 'planStarterMarketingSub',
      price: 1499.99,
      recommended: false,
      features: lang === 'ar' ? [
        'إدارة 2 منصة تواصل (فيسبوك + انستجرام)',
        '12 تصميم بوست احترافي شهرياً',
        'إدارة ميزانية الإعلانات حتى 10,000 ج.م',
        'تقرير أداء وإحصائيات شهري'
      ] : [
        '2 Social Channels (FB + IG)',
        '12 Custom Post Designs / Mo',
        'Ad Budget Management up to 10k',
        'Monthly Performance Report'
      ]
    },
    {
      id: 'growth-pro-mkt',
      titleKey: 'planGrowthProMarketing',
      subtitleKey: 'planGrowthProMarketingSub',
      price: 2999.99,
      recommended: true,
      features: lang === 'ar' ? [
        'إدارة 4 منصات (FB, IG, TikTok, Google)',
        '24 بوست + 4 فيديوهات Reels شهرياً',
        'حملات إعلانات موجهة ممولة مكثفة',
        'تهيئة واستراتيجية SEO الأساسية',
        'تقرير ورفع التحويلات أسبوعياً'
      ] : [
        '4 Social Channels (FB, IG, TikTok, Google)',
        '24 Custom Posts + 4 Reels Videos',
        'Full High-ROI Ad Campaign Management',
        'Standard Technical SEO Optimization',
        'Weekly Conversion Optimization'
      ]
    },
    {
      id: 'enterprise-mkt',
      titleKey: 'planEnterpriseDominance',
      subtitleKey: 'planEnterpriseDominanceSub',
      price: 4999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'إدارة شاملة لجميع منصات التواصل',
        'صناعة محتوى يومي + 10 فيديوهات Reels',
        'إدارة حملات المبيعات الضخمة والمتاجر',
        'تصدر محركات البحث SEO الشامل',
        'مدير حساب استراتيجي مخصص 24/7'
      ] : [
        'Omnichannel Full Suite Management',
        'Daily Posts + 10 High-Quality Reels',
        'Enterprise E-Commerce Sales Funnels',
        'Complete Organic SEO Dominance',
        'Dedicated 24/7 Senior Strategist'
      ]
    }
  ];

  const showcases = [
    {
      id: 'showcase-1',
      category: 'social',
      title: lang === 'ar' ? 'حملة إعلانات متجر أزياء ملابس' : 'Fashion Retail E-Commerce Scale',
      metrics: lang === 'ar' ? 'عائد استثمار 4.8x ROAS' : '4.8x ROAS Achieved',
      desc: lang === 'ar' ? 'حملة إعلانات ممولة مستهدفة على إنستغرام وتيك توك حققت 3500+ طلب في 30 يوماً.' : 'Targeted IG & TikTok Video Ads resulting in 3,500+ orders in 30 days.'
    },
    {
      id: 'showcase-2',
      category: 'seo',
      title: lang === 'ar' ? 'تصدر نتائج البحث لعقارات كبرى' : 'Real Estate SEO Dominance',
      metrics: lang === 'ar' ? '120,000+ زيارة مجانية' : '120,000+ Organic Visits',
      desc: lang === 'ar' ? 'استراتيجية SEO شاملة تصدرت الكلمات المفتاحية الرئيسية في محرك بحث جوجل.' : 'On-page & Technical SEO strategy reaching #1 rankings for target keywords.'
    },
    {
      id: 'showcase-3',
      category: 'performance',
      title: lang === 'ar' ? 'حملة جلب عملاء لشركة برمجيات' : 'B2B Software Lead Generation',
      metrics: lang === 'ar' ? '450+ عميل مستهدف' : '450+ High-Intent B2B Leads',
      desc: lang === 'ar' ? 'حملات إعلانات LinkedIn و Google Search نجحت في جلب عقود مؤسسية ضخمة.' : 'Google Search & LinkedIn Ads capturing enterprise SaaS software inquiries.'
    }
  ];

  const workflowSteps = [
    { num: '01', title: lang === 'ar' ? 'أبحاث السوق والجمهور' : 'Data & Market Research', desc: lang === 'ar' ? 'تحليل المنافسين، دراسة الجمهور المستهدف، وتحديد الكلمات المفتاحية وسلوك الشراء.' : 'Analyzing market competitors, target persona demographics, and high-intent keyword search trends.' },
    { num: '02', title: lang === 'ar' ? 'استراتيجية القنوات المتعددة' : 'Omnichannel Strategy', desc: lang === 'ar' ? 'بناء خطة المحتوى وتوزيع الميزانية على منصات الإعلانات للحصول على أفضل عائد.' : 'Building the content calendar, ad funnel architecture, and channel budget allocation.' },
    { num: '03', title: lang === 'ar' ? 'إطلاق الحملات والمحتوى' : 'Creative Campaign Launch', desc: lang === 'ar' ? 'تصميم البوستات والفيديوهات وتدشين الحملات الإعلانية الممولة بدقة عالية.' : 'Designing visual graphics, copywriting ad variations, and launching targeted PPC ads.' },
    { num: '04', title: lang === 'ar' ? 'التحسين والتوسع (Scale)' : 'Optimization & Scaling', desc: lang === 'ar' ? 'متابعة المؤشرات يومياً، خفض تكلفة الشراء (CPA)، وزيادة الميزانية على الحملات الأكثر ربحية.' : 'A/B testing creatives, lowering cost per acquisition (CPA), and scaling winning ad sets.' }
  ];

  return (
    <div className="digital-marketing-page">
      {/* Hero Header Banner */}
      <section className="mkt-hero-section">
        <div className="container grid-2-col align-center">
          <div className="mkt-hero-text">
            <div className="badge"><TrendingUp size={14} /> {t('marketingBadge')}</div>
            <h1 className="mkt-hero-title">{t('marketingHeroTitle')}</h1>
            <p className="page-header-sub text-left mb-4">
              {t('marketingHeroSub')}
            </p>
            <div className="hero-stats-row flex-center gap-4 mb-4">
              <div className="mkt-stat-box">
                <span className="stat-value">5.2x</span>
                <span className="stat-name">{lang === 'ar' ? 'متوسط عائد الإعلانات ROAS' : 'Average ROAS'}</span>
              </div>
              <div className="mkt-stat-box">
                <span className="stat-value">1.8M+</span>
                <span className="stat-name">{lang === 'ar' ? 'نقرة وزيارة مستهدفة' : 'Targeted Clicks'}</span>
              </div>
              <div className="mkt-stat-box">
                <span className="stat-value">98%</span>
                <span className="stat-name">{lang === 'ar' ? 'نسبة تجديد العملاء' : 'Client Retention'}</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('startGrowthCampaign')} <ArrowRight size={18} />
              </Link>
              <a href="#packages" className="btn btn-secondary">
                {t('explorePackages')}
              </a>
            </div>
          </div>
          <div className="mkt-hero-visual">
            <div className="mkt-big-img-box">
              <img 
                src="/assets/Post-6.jpg" 
                alt="Digital Marketing Campaign Strategy" 
                className="mkt-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Marketing Pillars */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('coreMarketingPillars')}</div>
          <h2 className="section-title">{t('endToEndGrowth')}</h2>
          <p className="section-subtitle">
            {t('endToEndSub')}
          </p>

          <div className="grid-3-col">
            {marketingPillars.map((p, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <p.icon size={26} className="pillar-icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خدمة متخصصة' : 'Specialized Service'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Showcase Tabs */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Megaphone size={14} /> {t('campaignShowcase')}</div>
          <h2 className="section-title">{t('campaignShowcase')}</h2>
          <p className="section-subtitle">
            {t('campaignShowcaseSub')}
          </p>

          <div className="showcase-filter-row flex-center gap-2 mb-4">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {t('allChannels')}
            </button>
            <button 
              className={`filter-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              {t('socialMediaAds')}
            </button>
            <button 
              className={`filter-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              {t('seoSearchDominance')}
            </button>
            <button 
              className={`filter-btn ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              {t('performanceMarketing')}
            </button>
          </div>

          <div className="grid-3-col">
            {(activeTab === 'all' ? showcases : showcases.filter(s => s.category === activeTab)).map((sc) => (
              <div key={sc.id} className="card mkt-showcase-card">
                <div className="mkt-metrics-badge">{sc.metrics}</div>
                <h3>{sc.title}</h3>
                <p>{sc.desc}</p>
                <Link to="/mail-professional" className="card-link mt-3">
                  {t('getStarted')} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section bg-surface" id="packages">
        <div className="container">
          <div className="badge-center"><Zap size={14} /> {t('marketingPackages')}</div>
          <h2 className="section-title">{t('marketingPackages')}</h2>
          <p className="section-subtitle">
            {t('marketingPackagesSub')}
          </p>

          <div className="grid-3-col pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`card pricing-card text-center ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <h3 className="plan-title mt-2">{t(pkg.titleKey)}</h3>
                <span className="plan-subtitle">{t(pkg.subtitleKey)}</span>
                <div className="plan-price">
                  <span className="currency">{t('currency')}</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">{t('perMonth')}</span>
                </div>
                <ul className="plan-features">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}><CheckCircle2 size={16} className="check-icon" /> {feat}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: pkg.id,
                      title: `${t(pkg.titleKey)} Package`,
                      price: pkg.price,
                      image: '/assets/Post-6.jpg'
                    })}
                    className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Workflow */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><BarChart3 size={14} /> {t('strategyWorkflowBadge')}</div>
          <h2 className="section-title">{t('marketingWorkflow')}</h2>
          <p className="section-subtitle">
            {t('marketingWorkflowSub')}
          </p>

          <div className="grid-4-col process-grid">
            {workflowSteps.map((step, idx) => (
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
          <h2>{t('readyScaleBrand')}</h2>
          <p className="section-subtitle">{t('readyScaleSub')}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('startGrowthCampaign')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
