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
  Award
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();

  const phrases = lang === 'ar' ? [
    'أنظمة البرمجيات',
    'أنظمة الأجهزة',
    'التحكم الذكي',
    'بريد الشركات',
    'الأنظمة المحاسبية',
    'تصميم المواقع',
    'التسويق الرقمي'
  ] : lang === 'fr' ? [
    'Solutions Logicielles',
    'Systèmes Matériels',
    'Contrôle Intelligent',
    'E-mail Professionnel',
    'Systèmes Comptables',
    'Sites Web',
    'Marketing Digital'
  ] : lang === 'hi' ? [
    'सॉफ्टवेयर समाधान',
    'हार्डवेयर सिस्टम',
    'स्मार्ट कंट्रोल',
    'प्रोफेशनल ईमेल',
    'अकाउंटिंग सिस्टम',
    'वेबसाइट डिजाइनिंग',
    'डिजिटल मार्केटिंग'
  ] : [
    'Software Solutions',
    'Hardware Systems',
    'Smart Control',
    'Professional Email',
    'Accounting Systems',
    'Websites & Web Design',
    'Social Media Marketing'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = phrases[phraseIndex] || phrases[0];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, phrases]);

  const pricingPlans = [
    {
      id: 'individual-mail',
      titleKey: 'planIndividual',
      subtitleKey: 'planIndividualSub',
      price: 99.99,
      image: '/assets/iiii.png',
      features: [
        '1 mailbox included',
        '5GB for emails',
        'Cloud infrastructure',
        'Antivirus check'
      ],
      recommended: false
    },
    {
      id: 'business-mail',
      titleKey: 'planBusiness',
      subtitleKey: 'planBusinessSub',
      price: 499.99,
      image: '/assets/bbbb-300x300.png',
      features: [
        '3 mailboxes included',
        '30GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support'
      ],
      recommended: true
    },
    {
      id: 'professional-mail',
      titleKey: 'planProfessional',
      subtitleKey: 'planProfessionalSub',
      price: 999.99,
      image: '/assets/pppp-300x300.png',
      features: [
        '5 mailboxes included',
        '75GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support',
        'Free domain'
      ],
      recommended: false
    }
  ];

  return (
    <div className="home-page">
      {/* Top Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <Sparkles size={14} /> {t('digitalPlatform')}
            </div>
            <h1 className="hero-title">
              {t('heroHeading')}{' '}
              <span className="animated-typography-text">
                {currentText}
                <span className="animated-cursor">|</span>
              </span>
            </h1>
            <p className="hero-description">
              {t('heroDesc')}
            </p>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('getStarted')} <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                {t('webDesignAndServices')}
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">{t('uptimeGuarantee')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-label">{t('techSupport')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-label">{t('globalClients')}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-transparent">
              <img 
                src="/assets/Home-3.png" 
                alt="POM Digital Platform Main Hero" 
                className="hero-official-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your All-in-One Tech Partner Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('featuresBadge')}</div>
          <h2 className="section-title">{t('allInOneTitle')}</h2>
          <p className="section-subtitle">
            {t('allInOneDesc')}
          </p>

          <div className="all-in-one-banner grid-2-col align-center">
            <div className="all-in-one-text">
              <h3 className="mb-3" style={{ fontSize: '1.75rem', color: '#343f5a' }}>{t('integratedDigitalEngineering')}</h3>
              <p className="text-muted mb-4">
                {t('integratedDesc')}
              </p>
              <div className="check-list">
                <div><CheckCircle2 size={16} className="check-icon" /> {t('lowCurrentCert')}</div>
                <div><CheckCircle2 size={16} className="check-icon" /> {t('cloudEmailCert')}</div>
                <div><CheckCircle2 size={16} className="check-icon" /> {t('webErpCert')}</div>
              </div>
            </div>
            <div className="all-in-one-graphic">
              <img 
                src="/assets/Illustration-2.png" 
                alt="All in One Tech Partner Graphic" 
                className="all-in-one-img"
              />
            </div>
          </div>

          <div className="grid-5-col mt-4">
            <div className="tech-pill">
              <Zap size={20} className="pill-icon" />
              <h4>{t('smartScalableTech')}</h4>
              <p>{t('smartScalableTechDesc')}</p>
            </div>
            <div className="tech-pill">
              <Mail size={20} className="pill-icon" />
              <h4>{t('secureEmail')}</h4>
              <p>{t('secureEmailDesc')}</p>
            </div>
            <div className="tech-pill">
              <Monitor size={20} className="pill-icon" />
              <h4>{t('modernWebsites')}</h4>
              <p>{t('modernWebsitesDesc')}</p>
            </div>
            <div className="tech-pill">
              <Calculator size={20} className="pill-icon" />
              <h4>{t('accountingSystems')}</h4>
              <p>{t('accountingSystemsDesc')}</p>
            </div>
            <div className="tech-pill">
              <TrendingUp size={20} className="pill-icon" />
              <h4>{t('socialMedia')}</h4>
              <p>{t('socialMediaDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-4-col">
            <div className="card service-card">
              <div className="service-icon"><Mail size={28} /></div>
              <h3>{t('mailPro')}</h3>
              <p>{t('proEmailCardDesc')}</p>
              <Link to="/mail-professional" className="card-link">{t('learnMore')} <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Share2 size={28} /></div>
              <h3>{t('digitalMarketing')}</h3>
              <p>{t('socialCardDesc')}</p>
              <Link to="/digital-marketing" className="card-link">{t('learnMore')} <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Calculator size={28} /></div>
              <h3>{t('accounting')}</h3>
              <p>{t('accCardDesc')}</p>
              <Link to="/accounting" className="card-link">{t('learnMore')} <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Server size={28} /></div>
              <h3>{t('networkServers')}</h3>
              <p>{t('networkCardDesc')}</p>
              <Link to="/network-servers" className="card-link">{t('learnMore')} <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Zap size={14} /> {t('pricingPlans')}</div>
          <h2 className="section-title">{t('pricingPlans')}</h2>
          <p className="section-subtitle">
            {t('pricingSub')}
          </p>

          <div className="grid-3-col pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`card pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <div className="plan-img-box mb-3">
                  <img src={plan.image} alt={t(plan.titleKey)} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{t(plan.titleKey)}</h3>
                <span className="plan-subtitle">{t(plan.subtitleKey)}</span>
                <div className="plan-price">
                  <span className="currency">{t('currency')}</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{t('perMonth')}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}><CheckCircle2 size={16} className="check-icon" /> {feat}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: plan.id,
                      title: `${t(plan.titleKey)} Mail Plan`,
                      price: plan.price,
                      image: plan.image
                    })}
                    className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    {t('addToCart')}
                  </button>
                  <Link to={`/product/${plan.id}`} className="view-product-link">
                    {t('viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Cpu size={14} /> {t('whatWeDo')}</div>
          <h2 className="section-title">{t('techSolutionsTitle')}</h2>
          <p className="section-subtitle">
            {t('techSolutionsSub')}
          </p>

          <div className="grid-4-col">
            <div className="card feature-box">
              <Monitor size={32} className="box-icon" />
              <h3>{t('webDesign')}</h3>
              <p>{t('modernWebsitesDesc')}</p>
              <Link to="/about" className="box-link">{t('learnMore')} →</Link>
            </div>

            <div className="card feature-box">
              <Shield size={32} className="box-icon" />
              <h3>{t('smartControl')}</h3>
              <p>{t('smartScalableTechDesc')}</p>
              <Link to="/smart-control" className="box-link">{t('learnMore')} →</Link>
            </div>

            <div className="card feature-box">
              <Cpu size={32} className="box-icon" />
              <h3>{t('it')}</h3>
              <p>{t('techSupport')}</p>
              <Link to="/it" className="box-link">{t('learnMore')} →</Link>
            </div>

            <div className="card feature-box">
              <TrendingUp size={32} className="box-icon" />
              <h3>{t('digitalMarketing')}</h3>
              <p>{t('socialMediaDesc')}</p>
              <Link to="/digital-marketing" className="box-link">{t('learnMore')} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Trust Banner */}
      <section className="section trust-section text-center">
        <div className="container">
          <div className="badge-center"><Award size={14} /> {t('worldwideTrust')}</div>
          <h2 className="section-title">{t('worldwideTrustTitle')}</h2>
          <p className="section-subtitle">
            {t('worldwideTrustSub')}
          </p>
        </div>
      </section>
    </div>
  );
}
