import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Cpu, 
  Bot, 
  LineChart, 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Headphones, 
  Server, 
  HardDrive, 
  Lock, 
  RefreshCw, 
  Sliders, 
  Globe, 
  Activity, 
  FileText, 
  Database, 
  LifeBuoy, 
  Terminal
} from 'lucide-react';
import './ITPage.css';

export default function ITPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('helpdesk');

  const itPillars = [
    {
      icon: Headphones,
      title: lang === 'ar' ? 'الدعم الفني المدار والمكتب المساعد (Helpdesk 24/7)' : '24/7 Managed IT Helpdesk & Remote Support',
      desc: lang === 'ar' 
        ? 'فريق مهندسين متخصص لحل كافة مشاكل أجهزة الموظفين، الطابعات، الشبكات، والبرمجيات عن بُعد وفي الموقع فورياً.'
        : 'Rapid SLA tier-1 to tier-3 technical support resolving workstation, software, and hardware bottlenecks in minutes.'
    },
    {
      icon: Cloud,
      title: lang === 'ar' ? 'إدارة السحابة وبيئات Microsoft 365 & Azure' : 'Cloud Architecture & Microsoft 365',
      desc: lang === 'ar'
        ? 'هجرة آمنة للبيانات، إدارة البريد المؤسسي Exchange، Teams، SharePoint، وحوكمة أجهزة الموظفين عبر Intune.'
        : 'Enterprise cloud migration, Azure Active Directory, Exchange Online, SharePoint, and Intune MDM management.'
    },
    {
      icon: Lock,
      title: lang === 'ar' ? 'الأمن السيبراني وحماية نقط النهاية (EDR & SOC)' : 'Cybersecurity & Endpoint EDR Protection',
      desc: lang === 'ar'
        ? 'حماية استباقية ضد برمجيات الفدية (Ransomware)، الفيروسات، وتدريب الموظفين ضد التصيد الإلكتروني مع مراقبة مدارة.'
        : 'Next-gen anti-ransomware protection, CrowdStrike/SentinelOne EDR, SOC monitoring, and phishing defense.'
    },
    {
      icon: Server,
      title: lang === 'ar' ? 'إدارة السيرفرات والافتراضية (VMware & Hyper-V)' : 'Server Virtualization & Infrastructure',
      desc: lang === 'ar'
        ? 'تهيئة خوادم Windows Server و Linux، إدارة الدومين Active Directory، بيئات Proxmox و VMware عالية التوافر.'
        : 'High-availability virtualization, Active Directory domain control, Linux/Windows enterprise clustering.'
    },
    {
      icon: Database,
      title: lang === 'ar' ? 'النسخ الاحتياطي والتعافي من الكوارث (DRaaS)' : 'Automated Backup & Disaster Recovery (DRaaS)',
      desc: lang === 'ar'
        ? 'نسخ احتياطي سحابي ومحلي مؤتمت يومياً غير قابل للاختراق (Immutable Backups) يضمن استعادة العمل في دقائق.'
        : 'Immutable cloud & on-prem backups with automated daily recovery testing and zero-data-loss RPO/RTO.'
    },
    {
      icon: HardDrive,
      title: lang === 'ar' ? 'عقود الصيانة الدورية وتوريد العتاد (SLA)' : 'Annual IT Maintenance & Hardware SLA',
      desc: lang === 'ar'
        ? 'عقود صيانة سنوية معتمدة تشمل الفحص الوقائي، ترقية الأجهزة، وتوفير قطع الغيار الأصلية مع ضمان استجابة ملزم.'
        : 'Preventive hardware maintenance contracts, enterprise lifecycle procurement, and guaranteed response SLAs.'
    },
    {
      icon: Globe,
      title: lang === 'ar' ? 'ربط الفروع والشبكات الآمنة (SD-WAN & VPN)' : 'Enterprise SD-WAN & Secure VPNs',
      desc: lang === 'ar'
        ? 'ربط فروع الشركة وقنوات العمل عن بُعد عبر شبكات VPN مشفرة، وتوزيع أحمال الإنترنت بأقصى سرعة واستقرار.'
        : 'Multi-branch SD-WAN routing, site-to-site encrypted IPSec VPN tunnels, and intelligent traffic shaping.'
    },
    {
      icon: FileText,
      title: lang === 'ar' ? 'الاستشارات التقنية والتدقيق الأمني (IT Audits)' : 'IT Strategy, Audits & Compliance',
      desc: lang === 'ar'
        ? 'تقييم شامل للبنية التحتية، إعداد خطط التحول الرقمي، وضمان الامتثال للمعايير واللوائح العالمية (ISO 27001).'
        : 'Comprehensive IT infrastructure gap analysis, cybersecurity readiness scoring, and digital roadmap advisory.'
    }
  ];

  const packages = [
    {
      id: 'it-essential-support',
      title: lang === 'ar' ? 'باقة الدعم التقني الأساسي (IT Essential)' : 'IT Essential Support Plan',
      subtitle: lang === 'ar' ? 'للشركات والمكاتب حتى 20 موظف' : 'Small Businesses up to 20 Workstations',
      price: 999.99,
      recommended: false,
      image: '/assets/it-helpdesk-center.jpg',
      features: lang === 'ar' ? [
        'دعم فني عن بُعد للموظفين خلال ساعات العمل',
        'إدارة وتحديث أنظمة التشغيل ومكافحة الفيروسات',
        'مراقبة الخوادم الأساسية وجدار الحماية',
        'نسخ احتياطي سحابي أسبوعي مؤتمت',
        'زمن استجابة للتذاكر أقل من ساعة واحدة'
      ] : [
        'Business Hours Remote Helpdesk (up to 20 Users)',
        'OS Patch Management & Managed Antivirus',
        'Basic Server & Firewall Health Monitoring',
        'Weekly Automated Cloud Data Backup',
        'Guaranteed < 1 Hour SLA Response'
      ]
    },
    {
      id: 'it-managed-pro',
      title: lang === 'ar' ? 'باقة الإدارة التقنية الشاملة (Managed IT Pro)' : 'Managed IT Pro 360°',
      subtitle: lang === 'ar' ? 'للشركات المتوسطة حتى 75 موظف' : 'Growing Medium Enterprises (up to 75 Users)',
      price: 2499.99,
      recommended: true,
      image: '/assets/net-server-rack.jpg',
      features: lang === 'ar' ? [
        'دعم فني مدار 24/7 عن بُعد وزيارات ميدانية دورية',
        'إدارة كاملة لبيئة Microsoft 365 / Google Workspace',
        'حماية متقدمة لنقط النهاية EDR ضد برمجيات الفدية',
        'نسخ احتياطي يومي مؤتمت مع اختبارات الاستعادة',
        'إدارة وصيانة شبكات السيرفرات والـ VPN',
        'زمن استجابة فوري للتذاكر الحرجة (< 15 دقيقة)'
      ] : [
        '24/7 Remote & Scheduled On-Site IT Support',
        'Full Microsoft 365 & Cloud Identity Administration',
        'Next-Gen EDR Anti-Ransomware Endpoint Shield',
        'Daily Automated Immutable Cloud Backups',
        'Server Virtualization & VPN Tunnel Management',
        'Priority Critical Response SLA (< 15 Minutes)'
      ]
    },
    {
      id: 'it-enterprise-dedicated',
      title: lang === 'ar' ? 'باقة المؤسسات والهيئات (Enterprise Dedicated)' : 'Enterprise Dedicated IT & SOC',
      subtitle: lang === 'ar' ? 'للمصانع والمستشفيات والشركات الكبرى' : 'Large Holdings, Plants & Multi-Branch Orgs',
      price: 4999.99,
      recommended: false,
      image: '/assets/net-soc-noc.jpg',
      features: lang === 'ar' ? [
        'مهندس دعم فني مقيم (On-Site) وفريق مساند 24/7',
        'مراقبة أمنية مدارة (SOC) ورصد التهديدات السيبرانية',
        'خطة تعافي من الكوارث (DRaaS) مع استعادة خلال دقائق',
        'حوكمة وإدارة سحابية هجينة (Hybrid Azure/AWS)',
        'تدقيق أمني ربع سنوي وتوريد العتاد بأسعار خاصة',
        'مدير حسابات تقني تنفيذي (Virtual CIO) مخصص'
      ] : [
        'Dedicated Resident On-Site IT Engineer + 24/7 SOC',
        'Continuous Cyber Threat Hunting & Zero-Trust Architecture',
        'Disaster Recovery as a Service (RTO < 30 mins)',
        'Hybrid Multi-Cloud Infrastructure Governance',
        'Quarterly Security Penetration Testing & Audits',
        'Dedicated Virtual CIO (vCIO) Strategic Guidance'
      ]
    }
  ];

  const visualGallery = [
    {
      img: '/assets/it-helpdesk-center.jpg',
      title: lang === 'ar' ? 'مركز عمليات الدعم الفني 24/7' : '24/7 Managed IT Helpdesk Operations',
      desc: lang === 'ar' ? 'استجابة فورية وحل جذري لمشاكل الأجهزة والبرمجيات.' : 'Rapid-dispatch tier-3 engineers resolving tickets.'
    },
    {
      img: '/assets/net-server-rack.jpg',
      title: lang === 'ar' ? 'إدارة الخوادم والبيئات السحابية' : 'Enterprise Hybrid Cloud Infrastructure',
      desc: lang === 'ar' ? 'بنية تحتية افتراضية عالية التوافر ومستقرة تماماً.' : 'High-density virtualization and active directory clustering.'
    },
    {
      img: '/assets/net-soc-noc.jpg',
      title: lang === 'ar' ? 'مراقبة الأمن السيبراني (SOC/NOC)' : 'Cybersecurity Operations & Threat Defense',
      desc: lang === 'ar' ? 'رصد فوري للهجمات وحماية البيانات الحساسة للشركات.' : '24/7 continuous cyber threat detection and EDR response.'
    },
    {
      img: '/assets/net-fiber-infra.jpg',
      title: lang === 'ar' ? 'ربط الفروع وشبكات الفايبر' : 'High-Speed Enterprise Networking',
      desc: lang === 'ar' ? 'ربط فروع مؤمن بالكامل مع أنظمة VPN و SD-WAN.' : 'Encrypted multi-branch interconnectivity and hardware SLA.'
    }
  ];

  const processSteps = [
    { 
      num: '01', 
      title: lang === 'ar' ? 'التدقيق التقني الشامل (IT Audit)' : 'Infrastructure Discovery & Audit', 
      desc: lang === 'ar' ? 'فحص شامل لجميع الأجهزة، السيرفرات، الشبكات، البرمجيات، وثغرات الأمان في منشأتك.' : 'Comprehensive assessment of endpoints, server health, active licenses, and cyber vulnerabilities.' 
    },
    { 
      num: '02', 
      title: lang === 'ar' ? 'التحديث والتأمين السحابي' : 'Modernization & Cloud Hardening', 
      desc: lang === 'ar' ? 'ترقية الأنظمة، ضبط النسخ الاحتياطي، إعداد حماية EDR، وتنظيم بيئة Microsoft 365.' : 'Deploying immutable backups, hardening firewalls, and configuring Microsoft 365 cloud policies.' 
    },
    { 
      num: '03', 
      title: lang === 'ar' ? 'تفعيل الدعم المدار 24/7' : '24/7 Helpdesk & SLA Activation', 
      desc: lang === 'ar' ? 'ربط منصة التذاكر مع جميع الموظفين وتخصيص مهندسين للاستجابة السريعة لأي طارئ.' : 'Onboarding all team devices onto our automated monitoring agents and instant ticketing channels.' 
    },
    { 
      num: '04', 
      title: lang === 'ar' ? 'المراقبة المستمرة والتقارير' : 'Continuous Monitoring & Optimization', 
      desc: lang === 'ar' ? 'رصد أداء الأنظمة لحظة بلحظة، إرسال تقارير شهرية، وعقد اجتماعات لتطوير البنية التقنية.' : 'Proactive maintenance, quarterly security reviews, and strategic vCIO technology roadmapping.' 
    }
  ];

  return (
    <div className="it-page">
      {/* 1. Distinctive Managed IT Operations Hero Layout */}
      <section className="it-hero-section">
        <div className="container">
          <div className="it-hero-content">
            <div className="it-platform-pills">
              <span style={{ color: '#0891b2', fontWeight: 800 }}>24/7 Helpdesk</span> &bull; 
              <span style={{ color: '#0078d4', fontWeight: 800 }}>Microsoft 365</span> &bull; 
              <span style={{ color: '#0f172a', fontWeight: 800 }}>Azure Cloud</span> &bull; 
              <span style={{ color: '#ef4444', fontWeight: 800 }}>EDR SOC</span> &bull; 
              <span style={{ color: '#10b981', fontWeight: 800 }}>Veeam Backup</span> &bull; 
              <span style={{ color: '#0891b2', fontWeight: 800 }}>VMware</span>
            </div>

            <h1 className="it-hero-title">
              {lang === 'ar' 
                ? 'خدمات تكنولوجيا المعلومات والدعم الفني المدار لضمان استمرارية أعمالك 24/7' 
                : 'Enterprise Managed IT Services, 24/7 Helpdesk & Cybersecurity'}
            </h1>
            
            <p className="it-hero-subtitle">
              {lang === 'ar'
                ? 'نمكن شركاتك من العمل بأعلى درجات الكفاءة والأمان: دعم فني فوري لأجهزة الموظفين، إدارة السيرفرات والسحابة، حماية استباقية ضد الهجمات السيبرانية، ونسخ احتياطي يضمن عدم توقف أعمالك أبداً.'
                : 'We keep your business operations running seamlessly with zero downtime: 24/7 remote helpdesk, Microsoft 365 cloud administration, next-gen cyber defense, and immutable automated disaster recovery.'}
            </p>

            <div className="it-hero-actions">
              <Link to="/contact" className="btn btn-primary" style={{ background: '#0891b2', borderColor: '#0891b2' }}>
                {lang === 'ar' ? 'طلب عقد دعم فني مدار' : 'Request Managed IT Proposal'} <ArrowRight size={18} />
              </Link>
              <a href="#packages" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات الدعم والأسعار' : 'Explore IT Packages'}
              </a>
            </div>
          </div>

          {/* Hero Big Centerpiece Graphic */}
          <div className="it-hero-centerpiece">
            <div className="it-centerpiece-wrapper">
              <img 
                src="/assets/it-helpdesk-center.jpg" 
                alt="Managed IT Helpdesk Operations Command Center" 
                className="it-hero-img" 
              />
              
              <div className="it-float-widget it-float-widget-1">
                <div className="it-widget-icon" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#0891b2' }}>
                  <Headphones size={22} />
                </div>
                <div className="it-widget-text">
                  <strong>{lang === 'ar' ? 'استجابة فورية (< 15 دقيقة)' : '< 15m Instant Ticket SLA'}</strong>
                  <span>{lang === 'ar' ? 'حل 98.6% من المشكلات فورياً' : '98.6% First-Contact Fix'}</span>
                </div>
              </div>

              <div className="it-float-widget it-float-widget-2">
                <div className="it-widget-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <ShieldCheck size={22} />
                </div>
                <div className="it-widget-text">
                  <strong>{lang === 'ar' ? 'حماية 100% ضد الفيروسات' : 'Zero Ransomware Incidents'}</strong>
                  <span>{lang === 'ar' ? 'نسخ احتياطي مشفر يومياً' : 'Daily Immutable Backups'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IT SLA Stats & Performance Bar */}
      <section className="it-stats-section">
        <div className="container">
          <div className="it-stats-grid">
            <div className="it-stat-item">
              <span className="it-stat-num">&lt; 15m</span>
              <span className="it-stat-label">{lang === 'ar' ? 'زمن الاستجابة لتذاكر الدعم الفني' : 'Average Response SLA'}</span>
            </div>
            <div className="it-stat-item">
              <span className="it-stat-num">99.99%</span>
              <span className="it-stat-label">{lang === 'ar' ? 'استقرار وجاهزية أنظمة العمل' : 'Infrastructure Uptime'}</span>
            </div>
            <div className="it-stat-item">
              <span className="it-stat-num">100%</span>
              <span className="it-stat-label">{lang === 'ar' ? 'امتثال النسخ الاحتياطي السحابي' : 'Backup Recovery Success'}</span>
            </div>
            <div className="it-stat-item">
              <span className="it-stat-num">24/7/365</span>
              <span className="it-stat-label">{lang === 'ar' ? 'مراقبة وحماية على مدار الساعة' : 'Continuous Monitoring'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive IT Operations & SLA Console */}
      <section className="it-console-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
            <Activity size={14} /> {lang === 'ar' ? 'منصة مراقبة العمليات والدعم الفني المدار' : 'Managed IT Operations Telemetry'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'متابعة حية لحالة الأجهزة، السيرفرات، والأمن السيبراني' : 'Real-Time Health Telemetry Across Your Entire IT Estate'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاشات تحكم مدارة تكشف حالة تذاكر الدعم، صحة بيئة مايكروسوفت 365، وسلامة النسخ الاحتياطي لحظة بلحظة.' 
              : 'Complete visibility into workstation tickets, cloud identities, endpoint defense, and automated backup RTO/RPO.'}
          </p>

          {/* Tab Switcher */}
          <div className="it-tab-buttons">
            <button 
              className={`it-tab-btn ${activeTab === 'helpdesk' ? 'active' : ''}`}
              onClick={() => setActiveTab('helpdesk')}
            >
              <Headphones size={16} />
              <span>{lang === 'ar' ? 'الدعم الفني المدار (Helpdesk 24/7)' : '24/7 Managed Helpdesk'}</span>
            </button>
            <button 
              className={`it-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
              onClick={() => setActiveTab('cloud')}
            >
              <Cloud size={16} />
              <span>{lang === 'ar' ? 'سحابة Microsoft 365 & Azure' : 'Cloud & Microsoft 365'}</span>
            </button>
            <button 
              className={`it-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <ShieldCheck size={16} />
              <span>{lang === 'ar' ? 'الأمن السيبراني و EDR' : 'Cybersecurity & SOC'}</span>
            </button>
            <button 
              className={`it-tab-btn ${activeTab === 'backup' ? 'active' : ''}`}
              onClick={() => setActiveTab('backup')}
            >
              <Database size={16} />
              <span>{lang === 'ar' ? 'النسخ الاحتياطي والتعافي (DRaaS)' : 'Disaster Recovery & Backups'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="it-console-window">
            <div className="it-window-header">
              <div className="it-window-dots">
                <div className="it-window-dot" style={{ background: '#ef4444' }} />
                <div className="it-window-dot" style={{ background: '#f59e0b' }} />
                <div className="it-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="it-window-title">
                <Terminal size={15} />
                <span>POM IT Ops Command &bull; {lang === 'ar' ? 'لوحة إدارة العمليات المركزية' : 'Enterprise NOC/SOC Diagnostics'}</span>
              </div>
              <span className="it-window-badge">{lang === 'ar' ? 'الأنظمة مستقرة تماماً (All Systems Operational)' : 'All Systems Operational'}</span>
            </div>

            <div className="it-window-body">
              {/* Tab 1: Helpdesk */}
              {activeTab === 'helpdesk' && (
                <div className="it-kpis-grid">
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'متوسط سرعة الرد على التذاكر' : 'Avg First Response Time'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>8.4 Mins</span>
                    <span className="it-kpi-badge-gain"><CheckCircle2 size={14} /> Guaranteed &lt; 15m SLA</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'نسبة الحل من أول اتصال' : 'First-Contact Resolution'}</span>
                    <span className="it-kpi-value" style={{ color: '#22d3ee' }}>98.6%</span>
                    <span className="it-kpi-badge-gain"><LifeBuoy size={14} /> High Customer CSAT</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'الأجهزة النشطة تحت الإدارة' : 'Managed Workstations'}</span>
                    <span className="it-kpi-value">480 Nodes</span>
                    <span className="it-kpi-badge-neutral"><Sliders size={14} /> Auto-Patching Active</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'رضا المستخدمين والموظفين' : 'Employee CSAT Score'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>4.98 / 5.0</span>
                    <span className="it-kpi-badge-gain"><Award size={14} /> Tier-3 Certified Engineers</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Cloud */}
              {activeTab === 'cloud' && (
                <div className="it-kpis-grid">
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'صحة بيئة Microsoft 365' : 'M365 Tenant Health'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>100% HEALTHY</span>
                    <span className="it-kpi-badge-gain"><Cloud size={14} /> Zero Sync Conflicts</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'إدارة الهواتف عبر Intune MDM' : 'Intune Mobile Compliance'}</span>
                    <span className="it-kpi-value" style={{ color: '#22d3ee' }}>100% COMPLIANT</span>
                    <span className="it-kpi-badge-gain"><CheckCircle2 size={14} /> Encrypted Profiles</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'حسابات البريد Exchange النشطة' : 'Active Mailboxes'}</span>
                    <span className="it-kpi-value">320 Inboxes</span>
                    <span className="it-kpi-badge-neutral"><Globe size={14} /> Anti-Spam Filter 99.9%</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'مساحة التخزين السحابي المشترك' : 'SharePoint Cloud Data'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>14.8 TB</span>
                    <span className="it-kpi-badge-gain"><Database size={14} /> Auto-Versioning Enabled</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Security */}
              {activeTab === 'security' && (
                <div className="it-kpis-grid">
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'حالة حماية EDR ونقط النهاية' : 'EDR Endpoint Protection'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>ARMED (100%)</span>
                    <span className="it-kpi-badge-gain"><ShieldCheck size={14} /> SentinelOne/CrowdStrike</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'هجمات الفدية المحجوبة' : 'Ransomware Blocked'}</span>
                    <span className="it-kpi-value" style={{ color: '#22d3ee' }}>0 BREACHES</span>
                    <span className="it-kpi-badge-gain"><Lock size={14} /> Zero-Trust Policy</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'مراقبة المركز الأمني (SOC)' : '24/7 SOC Threat Hunting'}</span>
                    <span className="it-kpi-value">ACTIVE</span>
                    <span className="it-kpi-badge-neutral"><Activity size={14} /> AI Telemetry Stream</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'درجة الأمان المؤسسي (Score)' : 'Cyber Posture Score'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>94 / 100</span>
                    <span className="it-kpi-badge-gain"><CheckCircle2 size={14} /> ISO 27001 Ready</span>
                  </div>
                </div>
              )}

              {/* Tab 4: Backup */}
              {activeTab === 'backup' && (
                <div className="it-kpis-grid">
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'حالة النسخ الاحتياطي اليومي' : 'Immutable Backup Status'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>SUCCESSFUL</span>
                    <span className="it-kpi-badge-gain"><CheckCircle2 size={14} /> Air-Gapped Cloud Storage</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'نقطة التعافي من البيانات (RPO)' : 'Recovery Point Objective'}</span>
                    <span className="it-kpi-value" style={{ color: '#22d3ee' }}>15 Mins</span>
                    <span className="it-kpi-badge-gain"><RefreshCw size={14} /> Minimal Data Gap</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'زمن الاستعادة الكاملة (RTO)' : 'Recovery Time Objective'}</span>
                    <span className="it-kpi-value">&lt; 30 Mins</span>
                    <span className="it-kpi-badge-neutral"><Database size={14} /> Instant VM Spin-Up</span>
                  </div>
                  <div className="it-kpi-card">
                    <span className="it-kpi-title">{lang === 'ar' ? 'اختبار الاستعادة التلقائي' : 'Automated Disaster Drill'}</span>
                    <span className="it-kpi-value" style={{ color: '#34d399' }}>100% VERIFIED</span>
                    <span className="it-kpi-badge-gain"><Award size={14} /> 3-2-1 Backup Strategy</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multiple Visual Feature Showcases with High-Res Images */}
      {/* Showcase 1: Helpdesk Operations */}
      <section className="it-visual-split-section">
        <div className="container it-visual-split-grid">
          <div className="it-split-img-card">
            <img 
              src="/assets/it-helpdesk-center.jpg" 
              alt="Managed IT Helpdesk Command Center Operations" 
            />
          </div>
          <div className="it-split-content">
            <div className="badge" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
              <Headphones size={14} /> {lang === 'ar' ? 'مركز عمليات الدعم الفني المدار 24/7' : '24/7 Managed IT Helpdesk'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'دعم فني استباقي يحل مشكلات أجهزة وبرمجيات الموظفين في دقائق' 
                : 'Rapid-Response IT Support Eliminating Downtime for Your Team'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'لا تدع الأعطال التقنية تعطل إنتاجية موظفيك. يوفر مركز عمليات الدعم الفني لدينا استجابة فورية عبر الهاتف، التذاكر، والتحكم عن بُعد لحل مشاكل الويندوز والماك، الطابعات، الإيميلات، والشبكات وفق معايير SLA صارمة.'
                : 'Empower your workforce with instant technical assistance. Our dedicated tier-3 engineers resolve workstation bugs, network dropouts, Outlook/Teams glitches, and printer errors via remote control and on-site visits.'}
            </p>
            <ul className="it-split-checklist">
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'زمن استجابة فوري للتذاكر الحرجة في أقل من 15 دقيقة مع حل فوري' : 'Guaranteed under 15-minute response SLA for critical company outages'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'تثبيت التحديثات الدورية وترقيع الثغرات الأمنية تلقائياً دون إزعاج الموظفين' : 'Silent background OS patch management and software license compliance'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'تهيئة وتجهيز أجهزة الموظفين الجدد (Onboarding) بضغطة زر' : 'Zero-touch automated deployment and onboarding for new employee laptops'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#0891b2', borderColor: '#0891b2' }}>
              {lang === 'ar' ? 'طلب تجربة دعم فني مدار' : 'Start Helpdesk Trial'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 2: Hybrid Cloud & Datacenter Infrastructure */}
      <section className="it-visual-split-section bg-surface">
        <div className="container it-visual-split-grid reverse">
          <div className="it-split-img-card">
            <img 
              src="/assets/net-server-rack.jpg" 
              alt="Datacenter Cloud Server Infrastructure and Virtualization" 
            />
          </div>
          <div className="it-split-content">
            <div className="badge" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
              <Server size={14} /> {lang === 'ar' ? 'السحابة وإدارة السيرفرات المؤسسية' : 'Cloud & Hybrid Server Infrastructure'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'بنية تحتية سحابية هجينة وخوادم افتراضية تضمن أعلى كفاءة وأمان' 
                : 'High-Availability Server Virtualization & Cloud Governance'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نصمم وندير بيئات الخوادم عالية التوافر (High Availability): خوادم الدومين Active Directory، قواعد البيانات SQL، بيئات VMware و Proxmox، مع هجرة سلسة إلى سحابة Microsoft Azure و AWS بدون أي توقف في سير العمل.'
                : 'We design and maintain enterprise server clusters: Windows Server Active Directory, VMware vSphere virtualization, Proxmox environments, and seamless hybrid cloud migrations to Microsoft Azure and AWS.'}
            </p>
            <ul className="it-split-checklist">
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'هجرة بيانات سلسة إلى السحابة مع ضمان عدم فقدان أي ملف (Zero Data Loss)' : 'Seamless zero-data-loss migration to Microsoft 365, Azure, and AWS'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'حوكمة أجهزة وهواتف الموظفين وحماية الملفات الحساسة عبر Microsoft Intune' : 'Centralized mobile device management and DLP data protection via Intune'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'مراقبة سعة التخزين والذاكرة والمعالجات لمنع أي بطء في النظام' : '24/7 proactive CPU, RAM, and disk telemetry to prevent server degradation'}</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              {lang === 'ar' ? 'استشارة بنية تحتية وسحابة' : 'Consult Cloud Architect'}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 3: Cybersecurity & Threat Defense */}
      <section className="it-visual-split-section">
        <div className="container it-visual-split-grid">
          <div className="it-split-img-card">
            <img 
              src="/assets/net-soc-noc.jpg" 
              alt="Cybersecurity SOC Threat Defense and Incident Response" 
            />
          </div>
          <div className="it-split-content">
            <div className="badge" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
              <ShieldCheck size={14} /> {lang === 'ar' ? 'الأمن السيبراني وحماية البيانات (SOC)' : 'Cybersecurity & Zero-Trust Defense'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'جدار حماية سيبراني فولاذي يحمي شركتك من برمجيات الفدية والاختراق' 
                : 'Next-Gen Endpoint Detection & Continuous Cyber Threat Neutralization'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نطبق معايير الأمان العالمية Zero-Trust: أنظمة حماية متقدمة لنقط النهاية (EDR)، جدران حماية من الجيل القادم (NGFW)، وتدريب دوري للموظفين لكشف رسائل التصيد الاحتيالي، مما يجعل بيانات منشأتك محصنة بالكامل.'
                : 'We enforce enterprise Zero-Trust security: AI-driven EDR endpoint defense (SentinelOne / CrowdStrike), Next-Generation Firewalls (Fortinet / Sophos), and automated employee phishing simulations.'}
            </p>
            <ul className="it-split-checklist">
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'رصد استباقي للهجمات السيبرانية والتصدي الفوري لمحاولات التسلل' : 'Real-time SOC monitoring and automated incident response isolation'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'حماية شاملة ضد فيروسات الفدية وتشفير البيانات والبرمجيات الخبيثة' : 'Multi-layered anti-ransomware with instant immutable snapshot rollback'}</li>
              <li><CheckCircle2 size={18} color="#0891b2" /> {lang === 'ar' ? 'تدريب ومحاكاة دورية للموظفين لرفع الوعي الأمني ومنع الاختراق البشري' : 'Automated employee phishing drills and cybersecurity compliance scoring'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#0891b2', borderColor: '#0891b2' }}>
              {lang === 'ar' ? 'طلب فحص أمني لشبكة شركتك' : 'Request Security Audit'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Rich Image Gallery Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'معرض البنية التحتية والعمليات' : 'IT Operations Showcase Gallery'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'بنية تقنية معيارية مطبقة في كبرى الشركات والمؤسسات' : 'Production Deployments & Managed Infrastructure'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاهد جانباً من عمليات الدعم المدار، غرف السيرفرات، ومراكز العمليات الأمنية التي نديرها لعملائنا.' 
              : 'Explore our multi-tenant helpdesk centers, cloud server clusters, and enterprise fiber networks.'}
          </p>

          <div className="it-gallery-grid">
            {visualGallery.map((item, idx) => (
              <div key={idx} className="it-gallery-item">
                <img src={item.img} alt={item.title} />
                <div className="it-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core 8 IT Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'خدمات وقدرات تكنولوجيا المعلومات' : 'Core IT Service Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'منظومة خدمات تقنية متكاملة تدعم نمو واستقرار أعمالك' : 'Comprehensive Managed Solutions Built for Business Continuity'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نغطي كافة متطلبات تكنولوجيا المعلومات من مكتب الدعم الفني وحتى التخطيط الاستراتيجي للبنية السحابية.' 
              : 'From daily desktop helpdesk to virtual CIO IT roadmap governance, we handle every layer.'}
          </p>

          <div className="it-modules-grid">
            {itPillars.map((p, idx) => (
              <div key={idx} className="it-module-card">
                <div className="it-module-top">
                  <div className="it-icon-box">
                    <p.icon size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="it-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'معيار SLA ملزم' : 'SLA Guaranteed'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Managed IT Packages & Pricing */}
      <section className="section bg-surface" id="packages">
        <div className="container">
          <div className="badge-center" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
            <Cpu size={14} /> {lang === 'ar' ? 'باقات وعقود الدعم الفني المدار' : 'Managed IT Support Packages'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر باقة الدعم الفني والصيانة المناسبة لحجم شركتك' : 'Select the Ideal IT Support Tier for Your Organization'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات شاملة للدعم الفني، إدارة السحابة، مكافحة الفيروسات، والنسخ الاحتياطي مع التزام كامل بـ SLA.' 
              : 'Predictable monthly IT support covering unlimited helpdesk, cloud administration, backups, and cybersecurity.'}
          </p>

          <div className="it-pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`it-pricing-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge" style={{ background: '#0891b2' }}>{t('popularChoice')}</div>}
                <div className="plan-img-box">
                  <img src={pkg.image} alt={pkg.title} className="plan-thumb" />
                </div>
                <div>
                  <h3 className="it-plan-title">{pkg.title}</h3>
                  <span className="it-plan-subtitle">{pkg.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="it-plan-features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="check-icon" style={{ color: '#0891b2' }} />
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
                    style={pkg.recommended ? { background: '#0891b2', borderColor: '#0891b2' } : {}}
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
          <div className="badge-center" style={{ color: '#0891b2', borderColor: '#a5f3fc', background: '#ecfeff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'منهجية الإدارة والتشغيل' : 'Structured Onboarding Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات مدروسة للانتقال بشركتك إلى بيئة تقنية مستقرة ومؤمنة' : '4-Step Proven Methodology for Seamless IT Operations'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتبع مسار عمل هندسي دقيق يبدأ من التدقيق الأمني وحتى تفعيل الدعم المدار 24/7 دون أي توقف.' 
              : 'A rigorous roadmap from full infrastructure discovery to cloud modernization, endpoint hardening, and SLA support.'}
          </p>

          <div className="it-workflow-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="it-workflow-card">
                <span className="it-workflow-step-num">{step.num}</span>
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
          <div className="it-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل تبحث عن شريك تقني معتمد يدير تكنولوجيا المعلومات في شركتك؟' 
                : 'Looking for a Trusted Managed IT Partner for Your Enterprise?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على فحص أمني مجاني لشبكة شركتك واستشارة متخصصة مع مهندسينا لحل أي مشكلات تقنية.' 
                : 'Schedule a free infrastructure audit and IT consultation with our senior network and systems engineers.'}
            </p>
            <div className="it-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', background: '#0891b2', borderColor: '#0891b2' }}>
                {lang === 'ar' ? 'طلب استشارة وفحص مجاني' : 'Book Free IT Audit'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة دعم فني عبر واتساب' : 'Chat with IT on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
