import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Settings, CreditCard, UserCheck, Star, Cpu, Layers, Sparkles, Calendar, MapPin, Search, Share2, FileText } from 'lucide-react';
import './MailProfessionalPage.css';

export default function MailProfessionalPage() {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      title: 'Create a professional email for your business',
      desc: 'An email address that matches your custom domain to make your brand appear more credible.',
      icon: Mail
    },
    {
      step: '02',
      title: 'Choose an email hosting plan',
      desc: 'Are you running a new business? Follow the Individual, Business, or Professional hosting plans.',
      icon: UserCheck
    },
    {
      step: '03',
      title: 'Go to payment',
      desc: 'Select the number of mailboxes and the subscription period. After the payment process is complete, you will be directed to your hosting account control panel.',
      icon: CreditCard
    },
    {
      step: '04',
      title: 'Configure your email hosting',
      desc: "Finally, create an email account, set up DNS settings, and sync your email with other devices. All that's left is to send your emails.",
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
      image: '/assets/bbbb-300x300.png',
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
      image: '/assets/pppp-300x300.png',
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
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Custom domain name email accounts</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Enterprise cloud infrastructure & antivirus protection</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Full smartphone & desktop sync support</div>
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
          <div className="badge-center">HOW IT WORKS</div>
          <h2 className="section-title">{t('howItWorks')}</h2>
          <p className="section-subtitle">Get your custom domain email live in minutes.</p>

          <div className="grid-4-col steps-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="card step-card">
                <div className="step-num">{s.step}</div>
                <s.icon size={28} className="step-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
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

          <div className="grid-3-col pricing-grid">
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

          {/* 4. Custom Plan Banner */}
          <div className="custom-plan-banner card mt-5">
            <div className="banner-text">
              <div className="badge mb-2"><Sparkles size={12} /> {t('whatWeDo')}</div>
              <h3>{t('needMore')}</h3>
              <p>{t('needMoreDesc')}</p>
            </div>
            <Link to="/terms-and-conditions" className="btn btn-primary">
              {t('contactUs')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
