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

  const getFeatureTitle = (index) => {
    const titles = {
      0: {
        ar: 'الدعم الفني والـ Helpdesk المدار 24/7',
        fr: 'Support IT & Helpdesk Géré 24/7',
        hi: 'आईटी हेल्पडेस्क और 24/7 प्रबंधित सहायता',
        en: 'IT Helpdesk & Managed Support 24/7'
      },
      1: {
        ar: 'البنية السحابية وهندسة الـ DevOps',
        fr: 'Infrastructure Cloud & Ingénierie DevOps',
        hi: 'क्लाउड इंफ्रास्ट्रक्चर और डेवऑप्स',
        en: 'Cloud Infrastructure & DevOps'
      },
      2: {
        ar: 'الأمن السيبراني وحماية البيانات',
        fr: 'Cybersécurité & Protection des Données',
        hi: 'साइबर सुरक्षा और डेटा सुरक्षा',
        en: 'Cybersecurity & Data Protection'
      },
      3: {
        ar: 'صيانة الأجهزة والمعدات بالـ SLA',
        fr: 'Maintenance Matérielle & SLA',
        hi: 'हार्डवेयर रखरखाव और एसएलए',
        en: 'Hardware Maintenance & SLA'
      },
      4: {
        ar: 'التعافي من الكوارث والنسخ الاحتياطي',
        fr: 'Reprise après Sinistre & Sauvegarde',
        hi: 'आपदा से उबरना और डेटा बैकअप',
        en: 'Disaster Recovery & Data Backup'
      },
      5: {
        ar: 'تدقيق تراخيص البرمجيات (Software Audit)',
        fr: 'Audification des Licences Logicielles',
        hi: 'सॉफ्टवेयर लाइसेंसिंग और ऑडिटिंग',
        en: 'Software Licensing & Auditing'
      }
    };
    return titles[index][lang] || titles[index]['en'];
  };

  const getFeatureDesc = (index) => {
    const descs = {
      0: {
        ar: 'فريق دعم فني متخصص لحل مشكلات الموظفين والأجهزة عن بُعد وميدانياً على مدار الساعة.',
        fr: 'Équipe d\'assistance technique dédiée 24/7 à distance et sur site pour vos employés.',
        hi: 'आपके कर्मचारियों और उपकरणों के लिए 24/7 रिमोट और ऑन-साइट तकनीकी सहायता टीम।',
        en: '24/7 remote and on-site technical helpdesk, ticketing system, and rapid response SLAs.'
      },
      1: {
        ar: 'إدارة سيرفرات AWS, Azure, و DigitalOcean، وأتمتة النشر والتطوير بأعلى معايير الأمان.',
        fr: 'Gestion des serveurs cloud AWS/Azure et automatisation CI/CD sécurisée.',
        hi: 'AWS/Azure क्लाउड सर्वर प्रबंधन और सुरक्षित CI/CD स्वचालन।',
        en: 'Automated CI/CD pipelines, AWS/Azure cloud architecture, and server performance scaling.'
      },
      2: {
        ar: 'تقييم الثغرات Security Audits، تشفير البيانات، وحماية المؤسسة من برمجيات الفدية.',
        fr: 'Évaluation des vulnérabilités, cryptage des données et protection contre les rançongiciels.',
        hi: 'कमजोरी का मूल्यांकन, डेटा एन्क्रिप्शन और रैंसमवेयर से सुरक्षा।',
        en: 'Vulnerability assessment, ransomware prevention, endpoint security, and data encryption.'
      },
      3: {
        ar: 'عقود صيانة دورية لأجهزة الكمبيوتر، الطابعات، والسيرفرات لضمان استقرار العمل بنسبة 100%.',
        fr: 'Maintenance préventive pour PC, imprimantes et serveurs garantissant 100% de stabilité.',
        hi: '100% स्थिरता सुनिश्चित करने के लिए पीसी, प्रिंटर और सर्वर के लिए निवारक रखरखाव।',
        en: 'Preventive hardware servicing, PC/laptop repair, printer setup, and spare parts replacement.'
      },
      4: {
        ar: 'أنظمة نسخ احتياطي مشفرة وموزعة سحابياً لضمان استرجاع البيانات الفوري عند الطوارئ.',
        fr: 'Sauvegardes cloud automatisées et cryptées garantissant une récupération instantanée.',
        hi: 'तत्काल पुनर्प्राप्ति की गारंटी देने वाले स्वचालित और एन्क्रिप्टेड क्लाउड बैकअप।',
        en: 'Automated cloud & off-site data backup, failover clustering, and zero-data-loss recovery.'
      },
      5: {
        ar: 'إدارة تراخيص Windows, Office 365, وتطبيقات الشركة لضمان الامتثال وتخفيض التكاليف.',
        fr: 'Gestion des licences Microsoft 365 et Windows Server pour réduire vos coûts.',
        hi: 'लागत कम करने के लिए Microsoft 365 और Windows सर्वर लाइसेंस का प्रबंधन।',
        en: 'Enterprise Microsoft 365, Windows Server, and software license compliance management.'
      }
    };
    return descs[index][lang] || descs[index]['en'];
  };

  const getPlanFeatures = (planIndex) => {
    const feats = {
      0: {
        ar: [
          'دعم فني عن بُعد Remote Helpdesk حتى 10 أجهزة',
          'فحص وحماية الأجهزة من الفيروسات',
          'مراقبة استقرار الشبكة والسيرفر',
          'زمن استجابة خلال ساعتين'
        ],
        fr: [
          'Support Helpdesk à distance jusqu\'à 10 appareils',
          'Protection antivirus et sécurité',
          'Surveillance proactive du réseau et du serveur',
          'Temps de réponse garanti en 2 heures'
        ],
        hi: [
          '10 उपकरणों तक रिमोट हेल्पडेस्क सहायता',
          'एंटीवायरस और सुरक्षा सुरक्षा',
          'सक्रिय नेटवर्क और सर्वर निगरानी',
          '2 घंटे का प्रतिक्रिया समय'
        ],
        en: [
          'Remote Helpdesk Support up to 10 Devices',
          'Endpoint Antivirus & Security Protection',
          'Proactive Network & Server Monitoring',
          '2-Hour Response Time SLA'
        ]
      },
      1: {
        ar: [
          'دعم فني شامل عن بُعد وميداني On-site حتى 30 جهاز',
          'إدارة السيرفرات والـ Active Directory',
          'نسخ احتياطي يومي آمن سحابياً',
          'صيانة دورية وقائية شهرياً',
          'زمن استجابة فوري خلال 30 دقيقة'
        ],
        fr: [
          'Support complet à distance & sur site jusqu\'à 30 appareils',
          'Gestion de Windows Server & Active Directory',
          'Sauvegarde quotidienne cryptée sur le Cloud',
          'Maintenance préventive mensuelle sur site',
          'Temps de réponse prioritaire en 30 minutes'
        ],
        hi: [
          '30 उपकरणों तक पूर्ण रिमोट और ऑन-साइट सहायता',
          'विंडोज सर्वर और एक्टिव डायरेक्टरी प्रबंधन',
          'स्वचालित दैनिक एन्क्रिप्टेड क्लाउड बैकअप',
          'मासिक ऑन-साइट हार्डवेयर निवारक रखरखाव',
          'प्राथमिकता 30 मिनट प्रतिक्रिया समय'
        ],
        en: [
          'Full Remote & On-Site Support up to 30 Devices',
          'Windows Server & Active Directory Management',
          'Automated Daily Encrypted Cloud Backup',
          'Monthly On-Site Hardware Preventive Maintenance',
          'Priority 30-Minute Response Time SLA'
        ]
      },
      2: {
        ar: [
          'إدارة كاملة للبنية التحتية بدون حد للأجهزة',
          'مهندس دعم مقيم أو مخصص 24/7 Dedicated IT Engineer',
          'إدارة الأمن السيبراني وجدران الحماية Firewall',
          'استرجاع البيانات الفوري والتعافي من الكوارث Disaster Recovery',
          'عقد اتفاقية مستوى خدمة SLA معتمد بحوافز استقرار'
        ],
        fr: [
          'Gestion complète d\'infrastructure (nombre illimité d\'appareils)',
          'Ingénieur informatique senior dédié 24/7',
          'Gouvernance Pare-feu de nouvelle génération & Cybersécurité',
          'Garantie zéro perte de données et basculement d\'urgence',
          'Contrat SLA personnalisé avec garantie de disponibilité'
        ],
        hi: [
          'अनलिमिटेड डिवाइस इंफ्रास्ट्रक्चर प्रबंधन',
          '24/7 समर्पित वरिष्ठ आईटी इंजीनियर',
          'नेक्स्ट-जेन फ़ायरवॉल और साइबर सुरक्षा शासन',
          'शून्य डेटा हानि गारंटी और तत्काल पुनर्प्राप्ति',
          'अपटाइम गारंटी के साथ अनुकूलित एसएलए अनुबंध'
        ],
        en: [
          'Omnichannel Infrastructure Management (Unlimited Devices)',
          '24/7 Dedicated Senior IT Systems Engineer',
          'Next-Gen Firewall & Cybersecurity Governance',
          'Disaster Recovery Failover & Zero-Loss Guarantee',
          'Customized SLA Contract with Uptime Guarantee'
        ]
      }
    };
    return feats[planIndex][lang] || feats[planIndex]['en'];
  };

  const featureIcons = [Headphones, Cloud, ShieldCheck, Wrench, Database, FileCode2];

  const features = [0, 1, 2, 3, 4, 5].map(i => ({
    icon: featureIcons[i],
    title: getFeatureTitle(i),
    desc: getFeatureDesc(i)
  }));

  const pricingPlans = [
    {
      id: 'starter-it',
      titleKey: 'planStarterIT',
      subtitleKey: 'planStarterITSub',
      price: 1499.99,
      recommended: false,
      features: getPlanFeatures(0)
    },
    {
      id: 'managed-it-pro',
      titleKey: 'planManagedITPro',
      subtitleKey: 'planManagedITProSub',
      price: 3499.99,
      recommended: true,
      features: getPlanFeatures(1)
    },
    {
      id: 'enterprise-care-sla',
      titleKey: 'planEnterpriseCareSLA',
      subtitleKey: 'planEnterpriseCareSLASub',
      price: 7999.99,
      recommended: false,
      features: getPlanFeatures(2)
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
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خدمة IT مُدارة' : lang === 'fr' ? 'Service IT Géré' : lang === 'hi' ? 'प्रबंधित आईटी सेवा' : 'Managed IT Service'}</div>
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
          <h2>{lang === 'ar' ? 'هل تريد استشارة وفحص مجاني لبنية IT بشركتك؟' : lang === 'fr' ? 'Besoin d\'un Audit IT Gratuit pour Votre Entreprise ?' : lang === 'hi' ? 'क्या आप अपनी कंपनी के लिए मुफ्त आईटी ऑडिट चाहते हैं?' : 'Ready to Elevate Your Company IT Reliability & Security?'}</h2>
          <p className="section-subtitle">{lang === 'ar' ? 'تواصل مع المهندسين المعتمدين لدينا للحصول على معاينة فورية.' : lang === 'fr' ? 'Contactez nos ingénieurs certifiés dès aujourd\'hui.' : lang === 'hi' ? 'हमारे प्रमाणित इंजीनियरों से आज ही संपर्क करें।' : 'Schedule an on-site IT audit and infrastructure roadmap with our certified team.'}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('requestITAudit')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
