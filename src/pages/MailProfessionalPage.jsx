import React, { useState } from 'react';
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
  Globe, 
  Inbox, 
  Lock, 
  RefreshCw, 
  Sliders, 
  Smartphone, 
  HardDrive, 
  Send 
} from 'lucide-react';
import './MailProfessionalPage.css';

export default function MailProfessionalPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('deliverability');

  const mailPillars = [
    {
      icon: Mail,
      title: lang === 'ar' ? 'بريد رسمي باسم شركتك (name@company.com)' : 'Custom Domain Business Mailboxes',
      desc: lang === 'ar' 
        ? 'عناوين بريد إلكتروني مخصصة تعكس احترافية شركتك، تزيد من ثقة العملاء وتفتح أبواب الصفقات الكبرى.'
        : 'Brand-name email addresses that establish instant enterprise credibility and corporate authority.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'توثيق الحماية والتسليم (SPF, DKIM, DMARC)' : '100% Inbox Deliverability & DNS Authentication',
      desc: lang === 'ar'
        ? 'ضبط سجلات DNS المعتمدة عالمياً لمنع وصول رسائلك إلى مجلد Spam وحماية نطاقك من الانتحال والتزوير.'
        : 'Hardened DMARC, DKIM, SPF, and BIMI protocols ensuring your emails land directly in the primary inbox.'
    },
    {
      icon: Lock,
      title: lang === 'ar' ? 'درع الذكاء الاصطناعي لمكافحة السبام والتصيد' : 'AI-Powered Anti-Spam & Anti-Phishing Shield',
      desc: lang === 'ar'
        ? 'فلاتر ذكية متعددة الطبقات تفحص المرفقات والروابط في بيئة معزولة (Sandbox) لمنع الفيروسات ورسائل الاحتيال.'
        : 'Multi-layered AI filtering neutralizing 99.98% of spam, spoofing attempts, and malicious ransomware payloads.'
    },
    {
      icon: Smartphone,
      title: lang === 'ar' ? 'مزامنة كاملة عبر Outlook و iPhone و Android' : 'Cross-Device Push ActiveSync & Outlook',
      desc: lang === 'ar'
        ? 'مزامنة فورية للرسائل، التقويم، وجهات الاتصال عبر جميع أجهزتك ببروتوكولات Exchange و IMAP و ActiveSync.'
        : 'Instant real-time sync across Microsoft Outlook, Apple Mail, Webmail, and native iOS/Android apps.'
    },
    {
      icon: Calendar,
      title: lang === 'ar' ? 'مشاركة التقويم والمجلدات وفريق العمل' : 'Shared Team Calendars & Contact Books',
      desc: lang === 'ar'
        ? 'تنظيم المواعيد، حجز غرف الاجتماعات، ومشاركة المجلدات البرمجية بين الموظفين والمدراء بكل سلاسة.'
        : 'Effortlessly schedule meetings, share availability, and organize delegated mailboxes with colleagues.'
    },
    {
      icon: HardDrive,
      title: lang === 'ar' ? 'سعات تخزين سحابية ضخمة على أقراص SSD' : 'High-Capacity Cloud SSD Mail Storage',
      desc: lang === 'ar'
        ? 'مساحات بريد رحبة تصل إلى 100 جيجابايت لكل مستخدم مع إمكانية إرسال مرفقات كبيرة الحجم دون قيود.'
        : 'Generous mailbox storage allocations with fast SSD infrastructure and support for large file attachments.'
    },
    {
      icon: RefreshCw,
      title: lang === 'ar' ? 'هجرة بريد سلسة بدون توقف (Zero Downtime)' : 'Zero-Downtime Mailbox Migration',
      desc: lang === 'ar'
        ? 'نقل كافة رسائلك القديمة ومجلداتك من أي مزود سابق (cPanel, Google, Zoho, Exchange) دون فقدان أي رسالة.'
        : 'Seamless 1-click migration of all historical emails, subfolders, and contacts with zero business disruption.'
    },
    {
      icon: Globe,
      title: lang === 'ar' ? 'أرشفة سحابية قانونية ونسخ احتياطي يومي' : '10-Year Cloud Archiving & Legal Hold',
      desc: lang === 'ar'
        ? 'حفظ وأرشفة كافة المراسلات الواردة والصادرة تلقائياً مع محرك بحث فوري للحماية القانونية واسترجاع البيانات.'
        : 'Immutable cloud email archiving meeting compliance standards with lightning-fast discovery search.'
    }
  ];

  const packages = [
    {
      id: 'individual-mail',
      title: lang === 'ar' ? 'باقة البريد الفردي والأعمال الناشئة' : 'Starter Individual Business Mail',
      subtitle: lang === 'ar' ? 'لرواد الأعمال وأصحاب المشاريع الفردية' : 'Solo Entrepreneurs & Small Consultancies',
      price: 99.99,
      recommended: false,
      image: '/assets/iiii.png',
      features: lang === 'ar' ? [
        '1 حساب بريد إلكتروني رسمي باسم نطاقك',
        'مساحة تخزين سحابية 10 جيجابايت فائقة السرعة',
        'ضبط وتوثيق سجلات الحماية SPF و DKIM',
        'تطبيق بريد إلكتروني للويب والموبايل والـ Outlook',
        'حماية أساسية ضد الفيروسات والرسائل المزعجة'
      ] : [
        '1 Custom Domain Business Mailbox',
        '10 GB High-Speed Cloud SSD Storage',
        'SPF & DKIM DNS Authentication Included',
        'Webmail, Mobile App & Outlook IMAP/POP',
        'Standard Anti-Spam & Antivirus Filter'
      ]
    },
    {
      id: 'business-mail',
      title: lang === 'ar' ? 'باقة بريد الشركات الاحترافية (Business Pro)' : 'Corporate Team Mail Pro',
      subtitle: lang === 'ar' ? 'للشركات والمكاتب وفرق العمل النشطة' : 'Growing Teams & Commercial Companies',
      price: 499.99,
      recommended: true,
      image: '/assets/bbbb.png',
      features: lang === 'ar' ? [
        '5 حسابات بريد إلكتروني رسمية مخصصة',
        'مساحة تخزين 50 جيجابايت سحابية مشتركة',
        'توثيق أمني شامل SPF و DKIM و DMARC',
        'مزامنة فورية كاملة للتقويم وجهات الاتصال (ActiveSync)',
        'فلاتر ذكاء اصطناعي لمنع هجمات التصيد الاحتيالي',
        'هجرة مجانية لكافة رسائلك من المزود القديم'
      ] : [
        '5 Custom Domain Business Mailboxes',
        '50 GB Pooled High-Speed Cloud SSD',
        'Full SPF, DKIM & DMARC Strict Security',
        'Real-Time Exchange ActiveSync Calendar & Contacts',
        'AI Anti-Phishing & Zero-Day Malicious Filter',
        'Free Zero-Downtime Historical Mail Migration'
      ]
    },
    {
      id: 'professional-mail',
      title: lang === 'ar' ? 'باقة المؤسسات المتقدمة (Enterprise Exchange)' : 'Enterprise Dedicated Cloud Mail Suite',
      subtitle: lang === 'ar' ? 'للكيانات والمؤسسات والشركات الكبرى' : 'Established Holdings & High-Volume Orgs',
      price: 999.99,
      recommended: false,
      image: '/assets/pppp.png',
      features: lang === 'ar' ? [
        '15 حساب بريد إلكتروني رسمي (مع إمكانية الزيادة)',
        'مساحة تخزين ضخمة 250 جيجابايت مع أرشفة سحابية',
        'حماية متقدمة DMARC Reject Mode وحظر التزييف',
        'مشاركة المجلدات وغرف الاجتماعات وصناديق البريد المشتركة',
        'نسخ احتياطي يومي مشفر واستعادة فورية بنقرة زر',
        'دعم فني مخصص وأولوية في معالجة الطلبات 24/7'
      ] : [
        '15+ Enterprise Mailboxes (Scalable)',
        '250 GB Cloud Storage + 10-Yr Archiving',
        'Strict DMARC Reject Mode & Brand Spoofing Shield',
        'Shared Team Inboxes, Resource & Meeting Calendars',
        'Daily Immutable Backups with 1-Click Recovery',
        'Dedicated 24/7 Enterprise Mail Administrator'
      ]
    }
  ];

  const visualGallery = [
    {
      img: '/assets/web-corporate-portal.jpg',
      title: lang === 'ar' ? 'واجهات البريد السحابي وتطبيق Outlook' : 'Modern Webmail & Outlook Workspace',
      desc: lang === 'ar' ? 'مراسلات رسمية فائقة السلاسة مع تصميم متطور.' : 'Clean corporate webmail interface with seamless Outlook integration.'
    },
    {
      img: '/assets/it-helpdesk-center.jpg',
      title: lang === 'ar' ? 'مراقبة التوثيق والأمان (DMARC & SOC)' : 'DNS Deliverability & Security Command',
      desc: lang === 'ar' ? 'رصد فوري لسلامة تسليم الرسائل وحماية النطاق.' : 'Active monitoring of SPF, DKIM, and DMARC enforcement.'
    },
    {
      img: '/assets/web-hero-multidevice.jpg',
      title: lang === 'ar' ? 'المزامنة المتزامنة عبر الهواتف واللابتوب' : 'Multi-Device Push ActiveSync',
      desc: lang === 'ar' ? 'وصول فوري لكافة المراسلات على الآيفون والماك والكمبيوتر.' : 'Instant notification push on iPhone, Android, and PC.'
    },
    {
      img: '/assets/campaign-creators-771730-unsplash.jpg',
      title: lang === 'ar' ? 'تعاون الفريق والتقويم الموحد' : 'Collaborative Shared Calendars',
      desc: lang === 'ar' ? 'جدولة مواعيد العمل وتنظيم مهام الفريق المشتركة.' : 'Team collaboration with shared inboxes and resource booking.'
    }
  ];

  const processSteps = [
    { 
      num: '01', 
      title: lang === 'ar' ? 'تهيئة النطاق وضبط سجلات DNS' : 'Domain Verification & DNS Hardening', 
      desc: lang === 'ar' ? 'ربط اسم نطاق شركتك وضبط سجلات MX و SPF و DKIM و DMARC لضمان وصول الرسائل للإنبوكس.' : 'Configuring DNS records, MX routing, SPF, DKIM 2048-bit keys, and DMARC policies.' 
    },
    { 
      num: '02', 
      title: lang === 'ar' ? 'إنشاء وتخصيص حسابات الموظفين' : 'Mailbox Provisioning & Groups', 
      desc: lang === 'ar' ? 'إنشاء حسابات الموظفين (info, sales, ceo) وتحديد الصلاحيات والمجموعات البريدية المشتركة.' : 'Setting up user mailboxes, shared distribution groups, aliases, and custom signatures.' 
    },
    { 
      num: '03', 
      title: lang === 'ar' ? 'هجرة الرسائل القديمة تلقائياً' : 'Zero-Downtime Data Migration', 
      desc: lang === 'ar' ? 'نقل كافة الرسائل والمجلدات من استضافتك السابقة بأمان ودون أي انقطاع في استقبال الإيميلات.' : 'Migrating historical inboxes, sent folders, and contacts seamlessly from your legacy provider.' 
    },
    { 
      num: '04', 
      title: lang === 'ar' ? 'الربط مع الهواتف والإطلاق الرسمي' : 'Multi-Device Sync & Go-Live', 
      desc: lang === 'ar' ? 'مزامنة البريد مع تطبيقات Outlook و iOS و Android وتدريب فريقك على الاستخدام الأمثل.' : 'Connecting team devices via automated profiles and delivering ongoing 24/7 technical support.' 
    }
  ];

  return (
    <div className="mail-pro-page">
      {/* 1. Distinctive Professional Mail Hero Layout */}
      <section className="mail-hero-section">
        <div className="container">
          <div className="mail-hero-content">
            <div className="mail-platform-pills">
              <span style={{ color: '#2563eb', fontWeight: 800 }}>Custom Domain</span> &bull; 
              <span style={{ color: '#0078d4', fontWeight: 800 }}>Outlook ActiveSync</span> &bull; 
              <span style={{ color: '#10b981', fontWeight: 800 }}>100% Inbox Delivery</span> &bull; 
              <span style={{ color: '#f59e0b', fontWeight: 800 }}>DMARC Protected</span> &bull; 
              <span style={{ color: '#2563eb', fontWeight: 800 }}>Zero Spam</span> &bull; 
              <span style={{ color: '#0f172a', fontWeight: 800 }}>SSD Cloud</span>
            </div>

            <h1 className="mail-hero-title">
              {lang === 'ar' 
                ? 'بريد إلكتروني رسمي باسم شركتك يعزز مصداقيتك ويحمي مراسلاتك 100%' 
                : 'Enterprise Business Email & Cloud Collaboration for Modern Brands'}
            </h1>
            
            <p className="mail-hero-subtitle">
              {lang === 'ar'
                ? 'امنح أعمالك واجهة رسمية موثوقة: عناوين بريد باسم نطاق شركتك (name@company.com)، وصول مضمون لصندوق الوارد (Inbox) بدون سبام، تشفير كامل للمراسلات، ومزامنة فورية عبر كافة الهواتف والـ Outlook.'
                : 'Elevate your brand authority with secure, high-deliverability business email: bespoke custom domains, strict DMARC/DKIM authentication, AI anti-phishing defense, and instant sync across Outlook, iPhone, and Android.'}
            </p>

            <div className="mail-hero-actions">
              <Link to="/contact" className="btn btn-primary" style={{ background: '#2563eb', borderColor: '#2563eb' }}>
                {lang === 'ar' ? 'احجز بريد شركتك الرسمي الآن' : 'Get Your Business Email'} <ArrowRight size={18} />
              </Link>
              <a href="#plans" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات البريد والأسعار' : 'Explore Mail Plans'}
              </a>
            </div>
          </div>

          {/* Hero Big Centerpiece Graphic */}
          <div className="mail-hero-centerpiece">
            <div className="mail-centerpiece-wrapper">
              <img 
                src="/assets/web-corporate-portal.jpg" 
                alt="Professional Business Email and Collaboration Workspace" 
                className="mail-hero-img" 
              />
              
              <div className="mail-float-widget mail-float-widget-1">
                <div className="mail-widget-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb' }}>
                  <Inbox size={22} />
                </div>
                <div className="mail-widget-text">
                  <strong>{lang === 'ar' ? 'تسليم 100% في صندوق الوارد' : '100% Inbox Placement'}</strong>
                  <span>{lang === 'ar' ? 'توثيق SPF / DKIM / DMARC' : 'Zero Spam Filtering Guarantee'}</span>
                </div>
              </div>

              <div className="mail-float-widget mail-float-widget-2">
                <div className="mail-widget-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Smartphone size={22} />
                </div>
                <div className="mail-widget-text">
                  <strong>{lang === 'ar' ? 'مزامنة فورية ActiveSync' : 'Real-Time Multi-Device Sync'}</strong>
                  <span>{lang === 'ar' ? 'Outlook + iOS + Android' : 'Push Notifications & Calendars'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mail SLA Stats & Performance Bar */}
      <section className="mail-stats-section">
        <div className="container">
          <div className="mail-stats-grid">
            <div className="mail-stat-item">
              <span className="mail-stat-num">99.99%</span>
              <span className="mail-stat-label">{lang === 'ar' ? 'جاهزية واستقرار خوادم البريد' : 'Mail Server Uptime SLA'}</span>
            </div>
            <div className="mail-stat-item">
              <span className="mail-stat-num">100%</span>
              <span className="mail-stat-label">{lang === 'ar' ? 'نسبة الوصول لصندوق الوارد (Inbox)' : 'Inbox Placement Rate'}</span>
            </div>
            <div className="mail-stat-item">
              <span className="mail-stat-num">99.98%</span>
              <span className="mail-stat-label">{lang === 'ar' ? 'حجب الرسائل المزعجة والتصيد' : 'Spam & Phishing Blocked'}</span>
            </div>
            <div className="mail-stat-item">
              <span className="mail-stat-num">0 Sec</span>
              <span className="mail-stat-label">{lang === 'ar' ? 'انقطاع خلال هجرة البريد (Zero Downtime)' : 'Migration Downtime'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Mail & Deliverability Console */}
      <section className="mail-console-section">
        <div className="container">
          <div className="badge-center" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <Mail size={14} /> {lang === 'ar' ? 'منصة فحص أمان وجودة البريد الإلكتروني' : 'Email Deliverability & Security Diagnostics'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'مراقبة حية لصحة الدومين وسلامة تسليم المراسلات' : 'Real-Time DNS Health, Spam Scoring & Encryption Telemetry'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تأكد من أن رسائلك تصل دائماً للعملاء دون الوقوع في الفولدرات غير المرغوبة وبأعلى درجات التشفير.' 
              : 'Complete visibility into domain reputation, TLS 1.3 encryption, SPF/DKIM verification, and spam filters.'}
          </p>

          {/* Tab Switcher */}
          <div className="mail-tab-buttons">
            <button 
              className={`mail-tab-btn ${activeTab === 'deliverability' ? 'active' : ''}`}
              onClick={() => setActiveTab('deliverability')}
            >
              <Inbox size={16} />
              <span>{lang === 'ar' ? 'التسليم والتوثيق (DMARC / SPF)' : 'Deliverability & DNS'}</span>
            </button>
            <button 
              className={`mail-tab-btn ${activeTab === 'sync' ? 'active' : ''}`}
              onClick={() => setActiveTab('sync')}
            >
              <Smartphone size={16} />
              <span>{lang === 'ar' ? 'المزامنة و Outlook ActiveSync' : 'ActiveSync & Mobile'}</span>
            </button>
            <button 
              className={`mail-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <ShieldCheck size={16} />
              <span>{lang === 'ar' ? 'مكافحة السبام والتصيد (Anti-Spam)' : 'Anti-Spam & Phishing'}</span>
            </button>
            <button 
              className={`mail-tab-btn ${activeTab === 'archiving' ? 'active' : ''}`}
              onClick={() => setActiveTab('archiving')}
            >
              <HardDrive size={16} />
              <span>{lang === 'ar' ? 'الأرشفة والهجرة الآمنة' : 'Archiving & Migration'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="mail-console-window">
            <div className="mail-window-header">
              <div className="mail-window-dots">
                <div className="mail-window-dot" style={{ background: '#ef4444' }} />
                <div className="mail-window-dot" style={{ background: '#f59e0b' }} />
                <div className="mail-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="mail-window-title">
                <Send size={15} />
                <span>POM Mail Engine &bull; {lang === 'ar' ? 'لوحة قياس تسليم البريد' : 'Enterprise Deliverability Telemetry'}</span>
              </div>
              <span className="mail-window-badge">{lang === 'ar' ? 'سمعة الدومين ممتازة (10/10 Inbox Score)' : 'Domain Score: 10/10 (High Trust)'}</span>
            </div>

            <div className="mail-window-body">
              {/* Tab 1: Deliverability */}
              {activeTab === 'deliverability' && (
                <div className="mail-kpis-grid">
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'حالة توثيق DMARC' : 'DMARC Policy Mode'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>p=reject (Strict)</span>
                    <span className="mail-kpi-badge-gain"><ShieldCheck size={14} /> 100% Anti-Spoofing</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'مفتاح التشفير DKIM' : 'DKIM 2048-bit Key'}</span>
                    <span className="mail-kpi-value" style={{ color: '#60a5fa' }}>VERIFIED (Active)</span>
                    <span className="mail-kpi-badge-gain"><CheckCircle2 size={14} /> Cryptographic Signature</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'سجل SPF للنطاق' : 'SPF Record Alignment'}</span>
                    <span className="mail-kpi-value">PASS (v=spf1)</span>
                    <span className="mail-kpi-badge-neutral"><Globe size={14} /> Authorized Relay IP</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'القوائم السوداء (Blacklists)' : 'Blacklist Status'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>0 / 120 (Clean)</span>
                    <span className="mail-kpi-badge-gain"><Award size={14} /> Flawless IP Reputation</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Sync */}
              {activeTab === 'sync' && (
                <div className="mail-kpis-grid">
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'بروتوكول المزامنة الفورية' : 'Exchange ActiveSync'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>PUSH (Instant)</span>
                    <span className="mail-kpi-badge-gain"><Smartphone size={14} /> Real-Time Arrival</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'مزامنة التقويم وجهات الاتصال' : 'CalDAV / CardDAV Sync'}</span>
                    <span className="mail-kpi-value" style={{ color: '#60a5fa' }}>100% SYNCED</span>
                    <span className="mail-kpi-badge-gain"><Calendar size={14} /> Shared Meetings Active</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'التوافق مع برامج البريد' : 'Mail Clients Supported'}</span>
                    <span className="mail-kpi-value">ALL CLIENTS</span>
                    <span className="mail-kpi-badge-neutral"><Sliders size={14} /> Outlook, Apple, Android</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'سرعة فتح البريد عبر الويب' : 'Webmail Load Latency'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>0.38s</span>
                    <span className="mail-kpi-badge-gain"><Cpu size={14} /> SSD Edge Acceleration</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Security */}
              {activeTab === 'security' && (
                <div className="mail-kpis-grid">
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'كفاءة فلاتر الرسائل المزعجة' : 'Anti-Spam Precision'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>99.98%</span>
                    <span className="mail-kpi-badge-gain"><Lock size={14} /> AI Heuristic Scoring</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'فحص المرفقات والروابط' : 'Malware & Zero-Day Shield'}</span>
                    <span className="mail-kpi-value" style={{ color: '#60a5fa' }}>SANDBOXED</span>
                    <span className="mail-kpi-badge-gain"><ShieldCheck size={14} /> Instant Ransomware Block</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'تشفير المراسلات (TLS)' : 'In-Transit Encryption'}</span>
                    <span className="mail-kpi-value">TLS 1.3 / SSL</span>
                    <span className="mail-kpi-badge-neutral"><Globe size={14} /> End-to-End Encrypted</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'حماية الحسابات (MFA / 2FA)' : 'Two-Factor Authentication'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>ENFORCED</span>
                    <span className="mail-kpi-badge-gain"><CheckCircle2 size={14} /> Zero Credential Theft</span>
                  </div>
                </div>
              )}

              {/* Tab 4: Archiving */}
              {activeTab === 'archiving' && (
                <div className="mail-kpis-grid">
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'الأرشفة السحابية غير القابلة للحذف' : 'Immutable Mail Archiving'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>10 YEARS</span>
                    <span className="mail-kpi-badge-gain"><HardDrive size={14} /> Legal Hold Compliant</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'سرعة البحث في الأرشيف' : 'eDiscovery Search Speed'}</span>
                    <span className="mail-kpi-value" style={{ color: '#60a5fa' }}>&lt; 1.0s</span>
                    <span className="mail-kpi-badge-gain"><Search size={14} /> Full-Text Indexed</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'نسبة نجاح هجرة الرسائل' : 'Migration Success Rate'}</span>
                    <span className="mail-kpi-value">100% (0 Lost)</span>
                    <span className="mail-kpi-badge-neutral"><RefreshCw size={14} /> IMAP/Exchange Sync</span>
                  </div>
                  <div className="mail-kpi-card">
                    <span className="mail-kpi-title">{lang === 'ar' ? 'النسخ الاحتياطي اليومي للبريد' : 'Daily Mailbox Snapshot'}</span>
                    <span className="mail-kpi-value" style={{ color: '#34d399' }}>AUTOMATED</span>
                    <span className="mail-kpi-badge-gain"><CheckCircle2 size={14} /> 1-Click Mail Restore</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multiple Visual Feature Showcases with High-Res Images */}
      {/* Showcase 1: Custom Domain & Modern Workspace */}
      <section className="mail-visual-split-section">
        <div className="container mail-visual-split-grid">
          <div className="mail-split-img-card">
            <img 
              src="/assets/web-corporate-portal.jpg" 
              alt="Professional Business Email Suite & Custom Domain" 
            />
          </div>
          <div className="mail-split-content">
            <div className="badge" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
              <Mail size={14} /> {lang === 'ar' ? 'بريد رسمي بهوية شركتك' : 'Custom Corporate Domain Email'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'مراسلات رسمية موثوقة تعزز مكانة علامتك وتجعل عملاءك يثقون بك فورياً' 
                : 'Build Unshakable Trust with Official Business Email on Your Own Domain'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'استخدام بريد مجاني مثل Gmail أو Yahoo يضعف من مصداقية شركتك أمام العملاء والشركاء. نوفر لك بريداً إلكترونياً رسمياً باسم شركتك (info@yourcompany.com) مع توقيع إلكتروني مخصص وشعار شركتك لترك انطباع احترافي يدوم.'
                : 'Ditch generic free email providers and give your business the enterprise prestige it deserves. We deploy custom domain mailboxes (name@yourbrand.com) with branded HTML signatures and automated out-of-office workflows.'}
            </p>
            <ul className="mail-split-checklist">
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'عناوين بريد مخصصة لجميع موظفيك وأقسام الشركة (sales, ceo, billing)' : 'Dedicated department aliases (sales@, info@, support@) with automated routing'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'واجهة ويب ميل (Webmail) عربية فائقة السلاسة والأناقة وسريعة الاستجابة' : 'Modern, ultra-fast webmail interface available in full Arabic and English'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'توقيع إلكتروني احترافي موحد لجميع أفراد فريق العمل يعزز هويتك' : 'Centralized corporate HTML signatures with social links and official branding'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#2563eb', borderColor: '#2563eb' }}>
              {lang === 'ar' ? 'طلب بريد رسمي لشركتك' : 'Get Custom Email Today'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 2: Deliverability & Threat Defense */}
      <section className="mail-visual-split-section bg-surface">
        <div className="container mail-visual-split-grid reverse">
          <div className="mail-split-img-card">
            <img 
              src="/assets/it-helpdesk-center.jpg" 
              alt="DNS DMARC Authentication and Anti-Phishing Security" 
            />
          </div>
          <div className="mail-split-content">
            <div className="badge" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
              <ShieldCheck size={14} /> {lang === 'ar' ? 'التسليم المضمون ومكافحة السبام' : '100% Deliverability & Anti-Phishing'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'ضمان وصول رسائلك لصندوق الوارد وحماية تامة ضد التزييف والتصيد' 
                : 'Guaranteed Primary Inbox Delivery with Military-Grade DNS Hardening'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نضبط أعلى معايير التوثيق العالمية (SPF, DKIM, DMARC): نضمن عدم وصول عروض أسعارك ورسائلك إلى مجلد المهملات (Spam)، ونحمي اسم نطاقك من محاولات التزوير وانتحال الشخصية من قِبل المخترقين.'
                : 'We eliminate the risk of missed deals with strict DNS authentication: DMARC enforcement blocks unauthorized domain spoofing, while 2048-bit DKIM signatures ensure your quotes and proposals land in the primary inbox.'}
            </p>
            <ul className="mail-split-checklist">
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'فحص تلقائي للمرفقات والروابط الخبيثة لحماية أجهزة موظفيك' : 'Automated malware sandbox scanning blocking dangerous attachments'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'حظر رسائل السبام والدعايات المزعجة بنسبة 99.98% لتوفير وقت الفريق' : 'Advanced Bayesian filters eliminating 99.98% of unwanted clutter'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'مراقبة سمعة الدومين عالمياً لمنع إدراجه في أي قائمة سوداء' : 'Continuous IP blacklist monitoring and proactive IP reputation warming'}</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              {lang === 'ar' ? 'فحص جودة تسليم بريدك الحالي' : 'Test Email Deliverability'}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 3: Cross-Device Sync & Collaboration */}
      <section className="mail-visual-split-section">
        <div className="container mail-visual-split-grid">
          <div className="mail-split-img-card">
            <img 
              src="/assets/campaign-creators-771730-unsplash.jpg" 
              alt="Team Collaboration, Shared Calendars & Outlook Sync" 
            />
          </div>
          <div className="mail-split-content">
            <div className="badge" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
              <Calendar size={14} /> {lang === 'ar' ? 'التعاون والمزامنة اللحظية' : 'Team Sync & Shared Calendars'}
            </div>
            <h3>
              {lang === 'ar' 
                ? 'مزامنة لحظية عبر الهواتف والكمبيوتر مع تقويم مشترك لفريق العمل' 
                : 'Seamless Real-Time Sync Across All Devices with Team Collaboration'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'ابقَ على اتصال دائم مع أعمالك أينما كنت: إشعارات فورية بوصول الرسائل على هاتفك الذكي (Push Notifications)، مزامنة تلقائية للتقويم والمواعيد مع زملائك، ومشاركة جهات اتصال الشركة بكل سهولة.'
                : 'Stay productive on the go with real-time push synchronization: calendar scheduling across teams, shared address books, resource booking, and flawless Outlook / iOS / Android integration.'}
            </p>
            <ul className="mail-split-checklist">
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'مزامنة كاملة عبر تطبيقات Microsoft Outlook والآيفون والأندرويد' : 'Seamless setup on Outlook, Apple Mail, and standard IMAP/Exchange apps'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'تقويم مواعيد مشترك وجدولة الاجتماعات وتفويض الصلاحيات بين الزملاء' : 'Shared corporate calendars with meeting invitations and room booking'}</li>
              <li><CheckCircle2 size={18} color="#2563eb" /> {lang === 'ar' ? 'هجرة سلسة لجميع رسائلك السابقة من المزود القديم بنسبة نجاح 100%' : 'Zero-loss migration from cPanel, Google Workspace, Zoho, or cPanel'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ background: '#2563eb', borderColor: '#2563eb' }}>
              {lang === 'ar' ? 'طلب هجرة البريد لشركتك' : 'Request Mail Migration'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Rich Image Gallery Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'معرض بيئات المراسلة والتعاون' : 'Mail & Workspace Gallery'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تجربة مراسلة سحابية راقية ومصممة للشركات الحديثة' : 'Enterprise Workspace Experiences Crafted for Scale'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاهد جانباً من واجهات البريد، تطبيقات المزامنة، ومراكز الأمان التي نوفرها لعملائنا في مختلف القطاعات.' 
              : 'Explore our multi-tenant email architectures, Outlook integrations, and deliverability monitoring.'}
          </p>

          <div className="mail-gallery-grid">
            {visualGallery.map((item, idx) => (
              <div key={idx} className="mail-gallery-item">
                <img src={item.img} alt={item.title} />
                <div className="mail-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core 8 Mail Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'قدرات البريد المهني المتكاملة' : 'Core Business Email Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'منظومة مراسلات سحابية شاملة تدعم احترافية وتوسع شركتك' : 'Comprehensive Email Infrastructure Built for Maximum Reliability'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نغطي كافة متطلبات البريد الإلكتروني من ضبط الدومين والتسليم وحتى الأرشفة السحابية واستعادة البيانات.' 
              : 'From strict DNS reputation warming to 10-year immutable archiving and mobile ActiveSync.'}
          </p>

          <div className="mail-modules-grid">
            {mailPillars.map((p, idx) => (
              <div key={idx} className="mail-module-card">
                <div className="mail-module-top">
                  <div className="mail-icon-box">
                    <p.icon size={24} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="mail-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'مدرج في الباقات' : 'Enterprise Included'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Mail Packages & Pricing */}
      <section className="section bg-surface" id="plans">
        <div className="container">
          <div className="badge-center" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <Sparkles size={14} /> {lang === 'ar' ? 'باقات البريد المهني والأسعار' : 'Professional Email Packages'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر باقة البريد الإلكتروني المناسبة لحجم فريقك' : 'Select the Ideal Business Email Plan for Your Team'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات مرنة تشمل اسم النطاق، سعات التخزين السحابية، التوثيق الأمني، والمزامنة الكاملة.' 
              : 'Transparent plans covering mailbox storage, DNS authentication, mobile sync, and 24/7 support.'}
          </p>

          <div className="mail-pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`mail-pricing-card ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge" style={{ background: '#2563eb' }}>{t('popularChoice')}</div>}
                <div>
                  <h3 className="mail-plan-title">{pkg.title}</h3>
                  <span className="mail-plan-subtitle">{pkg.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="mail-plan-features">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="check-icon" style={{ color: '#2563eb' }} />
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
                    style={pkg.recommended ? { background: '#2563eb', borderColor: '#2563eb' } : {}}
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
          <div className="badge-center" style={{ color: '#2563eb', borderColor: '#bfdbfe', background: '#eff6ff' }}>
            <Layers size={14} /> {lang === 'ar' ? 'خطوات التفعيل والهجرة' : '4-Step Setup & Migration Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات بسيطة للحصول على بريدك الرسمي وتشغيله على كافة أجهزتك' : '4-Step Proven Setup from DNS Hardening to Multi-Device Go-Live'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتولى كافة الإعدادات التقنية المعقدة نيابة عنك لتستمتع ببريد إلكتروني سريع ومحمي تماماً.' 
              : 'Our engineers handle domain verification, SPF/DKIM key generation, and zero-downtime mailbox sync.'}
          </p>

          <div className="mail-workflow-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="mail-workflow-card">
                <span className="mail-workflow-step-num">{step.num}</span>
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
          <div className="mail-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل تريد نقل بريد شركتك أو تفعيل بريد رسمي جديد الآن؟' 
                : 'Ready to Upgrade Your Corporate Email Infrastructure?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'تواصل مع فريقنا التقني اليوم لنقوم بتهيئة نطاقك ونقل كافة رسائلك القديمة مجاناً وبدون أي انقطاع.' 
                : 'Contact our email engineering specialists today for free zero-downtime mailbox migration and DNS audit.'}
            </p>
            <div className="mail-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem', background: '#2563eb', borderColor: '#2563eb' }}>
                {lang === 'ar' ? 'طلب تفعيل البريد الرسمي' : 'Activate Business Email'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة سريعة عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
