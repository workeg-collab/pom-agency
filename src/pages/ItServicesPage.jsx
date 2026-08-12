import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Headphones, 
  ShieldCheck, 
  Cloud, 
  Wrench, 
  Database, 
  FileCode2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Server, 
  Terminal, 
  Lock 
} from 'lucide-react';
import './ItServicesPage.css';

export default function ItServicesPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();

  const features = [
    {
      icon: Headphones,
      title: lang === 'ar' ? 'الدعم الفني والـ Helpdesk المدار 24/7' : 'IT Helpdesk & Managed Support 24/7',
      desc: lang === 'ar' 
        ? 'فريق دعم فني متخصص لحل مشكلات الموظفين والأجهزة عن بُعد وميدانياً على مدار الساعة.'
        : '24/7 remote and on-site technical helpdesk, ticketing system, and rapid response SLAs.'
    },
    {
      icon: Cloud,
      title: lang === 'ar' ? 'البنية السحابية وهندسة الـ DevOps' : 'Cloud Infrastructure & DevOps',
      desc: lang === 'ar'
        ? 'إدارة سيرفرات AWS, Azure, و DigitalOcean، وأتمتة النشر والتطوير بأعلى معايير الأمان.'
        : 'Automated CI/CD pipelines, AWS/Azure cloud architecture, and server performance scaling.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'الأمن السيبراني وحماية البيانات' : 'Cybersecurity & Data Protection',
      desc: lang === 'ar'
        ? 'تقييم الثغرات Security Audits، تشفير البيانات، وحماية المؤسسة من برمجيات الفدية.'
        : 'Vulnerability assessment, ransomware prevention, endpoint security, and data encryption.'
    },
    {
      icon: Wrench,
      title: lang === 'ar' ? 'صيانة الأجهزة والمعدات بالـ SLA' : 'Hardware Maintenance & SLA',
      desc: lang === 'ar'
        ? 'عقود صيانة دورية لأجهزة الكمبيوتر، الطابعات، والسيرفرات لضمان استقرار العمل بنسبة 100%.'
        : 'Preventive hardware servicing, PC/laptop repair, printer setup, and spare parts replacement.'
    },
    {
      icon: Database,
      title: lang === 'ar' ? 'التعافي من الكوارث والنسخ الاحتياطي' : 'Disaster Recovery & Data Backup',
      desc: lang === 'ar'
        ? 'أنظمة نسخ احتياطي مشفرة وموزعة سحابياً لضمان استرجاع البيانات الفوري عند الطوارئ.'
        : 'Automated cloud & off-site data backup, failover clustering, and zero-data-loss recovery.'
    },
    {
      icon: FileCode2,
      title: lang === 'ar' ? 'تدقيق تراخيص البرمجيات (Software Audit)' : 'Software Licensing & Auditing',
      desc: lang === 'ar'
        ? 'إدارة تراخيص Windows, Office 365, وتطبيقات الشركة لضمان الامتثال وتخفيض التكاليف.'
        : 'Enterprise Microsoft 365, Windows Server, and software license compliance management.'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter-it',
      titleKey: 'planStarterIT',
      subtitleKey: 'planStarterITSub',
      price: 1499.99,
      recommended: false,
      features: lang === 'ar' ? [
        'دعم فني عن بُعد Remote Helpdesk حتى 10 أجهزة',
        'فحص وحماية الأجهزة من الفيروسات',
        'مراقبة استقرار الشبكة والسيرفر',
        'زمن استجابة خلال ساعتين'
      ] : [
        'Remote Helpdesk Support up to 10 Devices',
        'Endpoint Antivirus & Security Protection',
        'Proactive Network & Server Monitoring',
        '2-Hour Response Time SLA'
      ]
    },
    {
      id: 'managed-it-pro',
      titleKey: 'planManagedITPro',
      subtitleKey: 'planManagedITProSub',
      price: 3499.99,
      recommended: true,
      features: lang === 'ar' ? [
        'دعم فني شامل عن بُعد وميداني On-site حتى 30 جهاز',
        'إدارة السيرفرات والـ Active Directory',
        'نسخ احتياطي يومي آمن سحابياً',
        'صيانة دورية وقائية شهرياً',
        'زمن استجابة فوري خلال 30 دقيقة'
      ] : [
        'Full Remote & On-Site Support up to 30 Devices',
        'Windows Server & Active Directory Management',
        'Automated Daily Encrypted Cloud Backup',
        'Monthly On-Site Hardware Preventive Maintenance',
        'Priority 30-Minute Response Time SLA'
      ]
    },
    {
      id: 'enterprise-care-sla',
      titleKey: 'planEnterpriseCareSLA',
      subtitleKey: 'planEnterpriseCareSLASub',
      price: 7999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'إدارة كاملة للبنية التحتية بدون حد للأجهزة',
        'مهندس دعم مقيم أو مخصص 24/7 Dedicated IT Engineer',
        'إدارة الأمن السيبراني وجدران الحماية Firewall',
        'استرجاع البيانات الفوري والتعافي من الكوارث Disaster Recovery',
        'عقد اتفاقية مستوى خدمة SLA معتمد بحوافز استقرار'
      ] : [
        'Omnichannel Infrastructure Management (Unlimited Devices)',
        '24/7 Dedicated Senior IT Systems Engineer',
        'Next-Gen Firewall & Cybersecurity Governance',
        'Disaster Recovery Failover & Zero-Loss Guarantee',
        'Customized SLA Contract with Uptime Guarantee'
      ]
    }
  ];

  return (
    <div className="it-services-page">
      {/* Top Hero Banner */}
      <section className="it-hero-section">
        <div className="container grid-2-col align-center">
          <div className="it-hero-text">
            <div className="badge"><Headphones size={14} /> {t('itBadge')}</div>
            <h1 className="it-hero-title">{t('itHeroTitle')}</h1>
            <p className="page-header-sub text-left mb-4">
              {t('itHeroSub')}
            </p>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('requestITAudit')} <ArrowRight size={18} />
              </Link>
              <a href="#plans" className="btn btn-secondary">
                {t('exploreITPackages')}
              </a>
            </div>
          </div>
          <div className="it-hero-visual">
            <div className="it-big-img-box">
              <img 
                src="/assets/Home-3.png" 
                alt="Managed Enterprise IT Services & Support" 
                className="it-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core IT Services */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('coreITServices')}</div>
          <h2 className="section-title">{t('everythingIT')}</h2>
          <p className="section-subtitle">
            {t('everythingITSub')}
          </p>

          <div className="grid-3-col">
            {features.map((f, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <f.icon size={26} className="pillar-icon" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خدمة IT مُدارة' : 'Managed IT Service'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed IT Pricing Packages */}
      <section className="section" id="plans">
        <div className="container">
          <div className="badge-center"><Terminal size={14} /> {t('itPackages')}</div>
          <h2 className="section-title">{t('itPackages')}</h2>
          <p className="section-subtitle">
            {t('itPackagesSub')}
          </p>

          <div className="grid-3-col pricing-grid">
            {pricingPlans.map((p) => (
              <div key={p.id} className={`card pricing-card text-center ${p.recommended ? 'recommended' : ''}`}>
                {p.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <h3 className="plan-title mt-2">{t(p.titleKey)}</h3>
                <span className="plan-subtitle">{t(p.subtitleKey)}</span>
                <div className="plan-price">
                  <span className="currency">{t('currency')}</span>
                  <span className="amount">{p.price}</span>
                  <span className="period">{t('perMonth')}</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((feat, idx) => (
                    <li key={idx}><CheckCircle2 size={16} className="check-icon" /> {feat}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: p.id,
                      title: `${t(p.titleKey)} Managed IT Plan`,
                      price: p.price,
                      image: '/assets/Home-3.png'
                    })}
                    className={`btn ${p.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2>{lang === 'ar' ? 'هل تريد استشارة وفحص مجاني لبنية IT بشركتك؟' : 'Ready to Elevate Your Company IT Reliability & Security?'}</h2>
          <p className="section-subtitle">{lang === 'ar' ? 'تواصل مع المهندسين المعتمدين لدينا للحصول على معاينة فورية.' : 'Schedule an on-site IT audit and infrastructure roadmap with our certified team.'}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('requestITAudit')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
