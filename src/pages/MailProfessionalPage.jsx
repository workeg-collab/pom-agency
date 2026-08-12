import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Settings, 
  CreditCard, 
  UserCheck, 
  Star, 
  Cpu, 
  Layers, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Search, 
  Share2, 
  FileText, 
  Award,
  Globe
} from 'lucide-react';
import './MailProfessionalPage.css';

export default function MailProfessionalPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();

  const steps = [
    {
      step: '01',
      titleKey: 'step1Title',
      descKey: 'step1Desc',
      icon: Mail
    },
    {
      step: '02',
      titleKey: 'step2Title',
      descKey: 'step2Desc',
      icon: UserCheck
    },
    {
      step: '03',
      titleKey: 'step3Title',
      descKey: 'step3Desc',
      icon: CreditCard
    },
    {
      step: '04',
      titleKey: 'step4Title',
      descKey: 'step4Desc',
      icon: Settings
    }
  ];

  const plans = [
    {
      id: 'individual-mail',
      titleKey: 'planIndividual',
      subtitleKey: 'planIndividualSub',
      price: 99.99,
      image: '/assets/iiii.png',
      isSale: false,
      featureKeys: [
        'feat1Mailbox',
        'feat5GB',
        'featCloudInfra',
        'featAntivirus'
      ]
    },
    {
      id: 'business-mail',
      titleKey: 'planBusiness',
      subtitleKey: 'planBusinessSub',
      price: 499.99,
      image: '/assets/bbbb.png',
      isSale: false,
      featureKeys: [
        'feat3Mailboxes',
        'feat30GB',
        'featCloudInfra',
        'featAntivirus',
        'featFullMobileSync'
      ]
    },
    {
      id: 'professional-mail',
      titleKey: 'planProfessional',
      subtitleKey: 'planProfessionalSub',
      price: 999.99,
      image: '/assets/pppp.png',
      isSale: true,
      featureKeys: [
        'feat5Mailboxes',
        'feat75GB',
        'featCloudInfra',
        'featAntivirus',
        'featFullMobileSync',
        'featFreeDomain'
      ]
    }
  ];

  const aiServices = [
    {
      icon: Search,
      titleKey: 'seoOptimization',
      descKey: 'seoOptDesc'
    },
    {
      icon: Share2,
      titleKey: 'socialEngagement',
      descKey: 'socialEngDesc'
    },
    {
      icon: FileText,
      titleKey: 'contentMarketing',
      descKey: 'contentMktDesc'
    }
  ];

  const timelineEvents = [
    {
      date: 'March 2013',
      location: 'LA, California',
      titleKey: 'event1Title',
      descKey: 'event1Desc'
    },
    {
      date: 'May 2015',
      location: 'JP, Tokyo',
      titleKey: 'event2Title',
      descKey: 'event2Desc'
    },
    {
      date: 'Sept 2018',
      location: 'Workshops',
      titleKey: 'event3Title',
      descKey: 'event3Desc'
    },
    {
      date: 'Jun 2022',
      location: 'New Order',
      titleKey: 'event4Title',
      descKey: 'event4Desc'
    }
  ];

  return (
    <div className="mail-pro-page">
      {/* 1. Top Hero Header Banner */}
      <section className="mail-hero-section">
        <div className="container grid-2-col align-center">
          <div className="mail-hero-content">
            <div className="badge"><Mail size={14} /> {t('mailBadge')}</div>
            <h1 className="mail-hero-title">{t('mailHeroTitle')}</h1>
            <p className="page-header-sub text-left mb-4">
              {t('mailHeroSub')}
            </p>
            <div className="hero-features-checklist mb-4">
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> {t('customDomainAccounts')}</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> {t('cloudInfraSecurity')}</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> {t('mobileDesktopSync')}</div>
            </div>
            <div className="hero-actions">
              <a href="#plans" className="btn btn-primary">
                {t('getStarted')} <ArrowRight size={16} />
              </a>
              <Link to="/terms-and-conditions" className="btn btn-secondary">
                {t('requestQuote')}
              </Link>
            </div>
          </div>
          <div className="mail-hero-visual">
            <div className="mail-logo-box">
              <img 
                src="/assets/12.png" 
                alt="Mail Professional Logo" 
                className="mail-official-logo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 Steps Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">{t('mailBadge')}</div>
          <h2 className="section-title">{t('howItWorks')}</h2>
          <p className="section-subtitle">{t('howItWorksSub')}</p>

          <div className="grid-4-col steps-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="card step-card">
                <div className="step-num">{s.step}</div>
                <s.icon size={28} className="step-icon" />
                <h3>{t(s.titleKey)}</h3>
                <p>{t(s.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Plans */}
      <section className="section" id="plans">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('pricingPlans')}</div>
          <h2 className="section-title">{t('pricingPlans')}</h2>
          <p className="section-subtitle">{t('pricingSub')}</p>

          <div className="grid-3-col pricing-grid mb-5">
            {plans.map((p) => (
              <div key={p.id} className={`card pricing-card text-center ${p.isSale ? 'recommended' : ''}`}>
                {p.isSale && <div className="popular-badge">{t('sale')}</div>}
                <div className="plan-img-box mb-3">
                  <img src={p.image} alt={t(p.titleKey)} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{t(p.titleKey)}</h3>
                <span className="plan-subtitle">{t(p.subtitleKey)}</span>
                <div className="plan-price">
                  <span className="currency">{t('currency')}</span>
                  <span className="amount">{p.price}</span>
                  <span className="period">{t('perMonth')}</span>
                </div>
                <ul className="plan-features">
                  {p.featureKeys.map((fKey, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check-icon" /> {t(fKey)}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: p.id,
                      title: `${t(p.titleKey)} Mail Plan`,
                      price: p.price,
                      image: p.image
                    })}
                    className={`btn ${p.isSale ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    {t('addToCart')}
                  </button>
                  <Link to={`/product/${p.id}`} className="view-product-link text-center mt-2">
                    {t('viewDetails')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 4. AI Development & Specialized Services Section */}
          <div className="mt-5 pt-4">
            <div className="badge-center"><Cpu size={14} /> {t('servicesBadge')}</div>
            <h2 className="section-title">{t('aiDevTitle')}</h2>
            <p className="section-subtitle">{t('aiDevSub')}</p>

            <div className="grid-3-col mt-4">
              {aiServices.map((srv, idx) => (
                <div key={idx} className="card pillar-card">
                  <div className="pillar-icon-box">
                    <srv.icon size={26} className="pillar-icon" />
                  </div>
                  <h3>{t(srv.titleKey)}</h3>
                  <p>{t(srv.descKey)}</p>
                  <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خدمة متخصصة' : 'Specialized Solution'}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Custom Plan Banner */}
          <div className="custom-plan-banner card mt-5">
            <div className="banner-text">
              <div className="badge mb-2"><Sparkles size={12} /> {t('whatWeDo')}</div>
              <h3>{t('needMore')}</h3>
              <p>{t('needMoreDesc')}</p>
            </div>
            <Link to="/terms-and-conditions" className="btn btn-primary">
              {t('getInTouch')} <ArrowRight size={16} />
            </Link>
          </div>

          {/* 6. Company Timeline Section */}
          <div className="timeline-section mt-5 pt-5">
            <div className="badge-center"><Award size={14} /> {t('companyTimelineBadge')}</div>
            <h2 className="section-title">{t('companyTimelineTitle')}</h2>
            <p className="section-subtitle">{t('companyTimelineSub')}</p>

            <div className="grid-4-col timeline-grid mt-4">
              {timelineEvents.map((ev, idx) => (
                <div key={idx} className="card timeline-card">
                  <div className="timeline-date-row flex-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="timeline-date">{ev.date}</span>
                  </div>
                  <div className="timeline-location-row flex-center gap-1 text-muted mb-3">
                    <MapPin size={12} />
                    <span style={{ fontSize: '0.8rem' }}>{ev.location}</span>
                  </div>
                  <h3>{t(ev.titleKey)}</h3>
                  <p>{t(ev.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
