import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldAlert, 
  Video, 
  Bell, 
  Volume2, 
  Radio, 
  KeyRound, 
  PhoneCall, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Eye, 
  Users, 
  UserCheck, 
  Moon, 
  Server, 
  Cpu, 
  Network, 
  Compass, 
  Briefcase, 
  ShieldCheck, 
  Sparkles,
  Lock,
  Layers
} from 'lucide-react';
import './SmartControlPage.css';

export default function SmartControlPage() {
  const { t, lang } = useLanguage();

  const cctvCapabilities = [
    {
      icon: Eye,
      title: lang === 'ar' ? 'تحديد الموقع وإرسال الصور التتبعية' : 'Location Tracking & Snapshot Alert',
      desc: lang === 'ar' 
        ? 'إمكانية تحديد موقع معين وإرسال صورة بدون إمالة عند التحرك في المكان المختار في الوقت الفعلي.'
        : 'Specify target zones and trigger zero-tilt snapshot alerts automatically upon motion detection.'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'حساب وعد الأشخاص والمارة' : 'AI People Counting & Analytics',
      desc: lang === 'ar'
        ? 'القدرة على حساب عدد الأشخاص الذين يتحركون في ممر أو مدخل معين بدقة عالية لاستخراج الإحصائيات.'
        : 'High-precision people counting in corridors, entryways, and retail passageways.'
    },
    {
      icon: UserCheck,
      title: lang === 'ar' ? 'الكشف عن الوجوه وتسجيلها' : 'Face Detection & Identification',
      desc: lang === 'ar'
        ? 'إمكانية الكشف عن الوجوه وتسجيلها وقراءتها آلياً ومطابقتها مع قواعد البيانات المعتمدة.'
        : 'Advanced facial recognition, detection, and database matching algorithms.'
    },
    {
      icon: Moon,
      title: lang === 'ar' ? 'رؤية ليلية بالألوان الكاملة' : 'Full-Color Night Vision',
      desc: lang === 'ar'
        ? 'تقنيات الرؤية الليلية فائقة الوضوح بالألوان الكاملة للتعرف الدقيق على الهويات والتفاصيل ليلاً.'
        : 'Crystal-clear full-color surveillance under ultra-low light and night conditions.'
    },
    {
      icon: Server,
      title: lang === 'ar' ? 'سيرفرات مخصصة لكاميرات المراقبة' : 'Dedicated Surveillance Servers',
      desc: lang === 'ar'
        ? 'إمكانية عمل سيرفرات متخصصة ومحمية بكاميرات المراقبة ونقل الصوت والفيديو بجودة عالية جداً.'
        : 'Enterprise NVR servers with high-speed video/audio bandwidth and data backup.'
    }
  ];

  const mainServices = [
    {
      num: '01',
      title: lang === 'ar' ? 'حلول الأجهزة والبرامج' : 'Hardware & Software Solutions',
      tagline: lang === 'ar' ? 'الحل التكنولوجي المتكامل الذي يوحي بالثقة' : 'Integrated Tech Solutions You Can Trust',
      desc: lang === 'ar'
        ? 'غالباً ما تكون حلول الأجهزة والبرامج هي أغلى استثمارات تكنولوجيا المعلومات التي تقوم بها شركتك، لذلك يضمن فريقنا التكنولوجي تحديث أجهزتك وبرامجك وأداءها بأعلى معايير الجودة والاستقرار.'
        : 'Hardware and software are key IT investments. Our tech team ensures your systems are updated and operating at top quality.',
      icon: Cpu,
      bullets: lang === 'ar' ? [
        'تحديث الأجهزة والسيرفرات والمكونات البرمجية',
        'ضمان الأداء بأعلى المعايير العالمية',
        'تكامل كامل بين الأجهزة والبرامج المعتمدة'
      ] : [
        'Hardware & Server Upgrades',
        'Top Global Standard Performance',
        'Full Hardware-Software Integration'
      ]
    },
    {
      num: '02',
      title: lang === 'ar' ? 'حلول البنية التحتية والشبكات' : 'Infrastructure & Networking Solutions',
      tagline: lang === 'ar' ? 'بنية تحتية متطورة وكابلات هيكلية معتمدة' : 'Advanced Structured Cabling & Rack Design',
      desc: lang === 'ar'
        ? 'تأسيس وتصميم شبكات البيانات والبنية التحتية للمؤسسات والمباني الذكية وفق أحدث القياسات الهندسية.'
        : 'Building robust enterprise network infrastructure, structured cabling, and server rack environments.',
      icon: Network,
      bullets: lang === 'ar' ? [
        'نظام وتصميم الشبكات والهندسة البرمجية',
        'ترحيل الخوادم والسيرفرات (Server Migration)',
        'الكابلات الهيكلية للبيانات والشبكات الذكية',
        'تنفيذ أنظمة طوارئ الكهرباء (UPS للخادم)',
        'إعداد ورص رف المعدات (Server Rack Setup)'
      ] : [
        'Network Architecture & Engineering',
        'Seamless Server Migration',
        'Structured Data & Fiber Cabling',
        'Server UPS Emergency Power Setup',
        'Rack Setup & Cable Management'
      ]
    },
    {
      num: '03',
      title: lang === 'ar' ? 'خدمات الاستشارات والتحول الرقمي' : 'IT Consulting & Digital Transformation',
      tagline: lang === 'ar' ? 'إستراتيجية شاملة لتكنولوجيا المعلومات' : 'Strategic Digital & Tech Transformation',
      desc: lang === 'ar'
        ? 'نقوم بتطوير إستراتيجية شاملة لتكنولوجيا المعلومات من أجل التحول الرقمي والتكنولوجي لمؤسستك التي تتوافق مع أهداف عملك وتساعدك في أتمتة العمليات ورقمية النظام.'
        : 'We craft comprehensive IT strategies aligning digital transformation with your core business objectives.',
      icon: Compass,
      bullets: lang === 'ar' ? [
        'أتمتة العمليات ورقمنة الخدمات',
        'تحسين مجموعة البرامج والتطبيقات المستعملة',
        'مراجعة بيئة تكنولوجيا المعلومات وتكامل قواعد البيانات',
        'تحليل تعقيد الشبكات وتكامل مخازن البيانات'
      ] : [
        'Process Automation & Digitization',
        'Software Stack Optimization',
        'IT Environment & Database Audit',
        'Network Complexity & Data Warehouse Integration'
      ]
    },
    {
      num: '04',
      title: lang === 'ar' ? 'خدمات الدعم والمصادر الخارجية (Outsourcing)' : 'Outsourcing & Support Services',
      tagline: lang === 'ar' ? 'أدوات وحلول برمجية للحوكمة والتشغيل' : 'Governance & Strategic Business Process Outsourcing',
      desc: lang === 'ar'
        ? 'نحن نقدم قيمة مستدامة للقوى العاملة والإنتاجية، وأظهرنا التفوق في التعامل مع مبادرات تعهيد العمليات التجارية وميزة التكلفة المستدامة عبر مهنيين عاليي التأهيل.'
        : 'Sustainable value and workforce productivity through specialized BPO initiatives and IT outsourcing.',
      icon: Briefcase,
      bullets: lang === 'ar' ? [
        'أدوات وحلول برمجية متخصصة للحوكمة',
        'تعهيد العمليات التجارية (BPO Services)',
        'مهنيون متخصصون ذوو مؤهلات عالية خبرة ميدانية',
        'ميزة تكلفة مستدامة وجودة تشغيلية مرتفعة'
      ] : [
        'Governance Software Solutions',
        'Business Process Outsourcing (BPO)',
        'Highly Certified Field IT Professionals',
        'Sustainable Cost Advantage & High Quality'
      ]
    }
  ];

  const lowCurrentSystems = [
    { icon: Video, title: lang === 'ar' ? 'أنظمة كاميرات المراقبة (CCTV)' : 'CCTV Systems', desc: lang === 'ar' ? 'كاميرات شبكية HD/IP، أجهزة NVR/DVR، ومتابعة سحابية عبر الموبايل.' : 'HD IP Cameras, NVR/DVR units, and remote smartphone monitoring.' },
    { icon: Bell, title: lang === 'ar' ? 'أنظمة إنذار الحريق' : 'Fire Alarm Systems', desc: lang === 'ar' ? 'لوحات تحكم عادية ومعنونة، كواشف دخان، ومحطات كسر الزجاج.' : 'Conventional & addressable fire alarm control panels and smoke detectors.' },
    { icon: Volume2, title: lang === 'ar' ? 'الأنظمة الصوتية والنداء الآلي' : 'Sound Systems', desc: lang === 'ar' ? 'مكبرات صوت، سماعات سقفية، وأنظمة نداء عام للمؤسسات والفنادق.' : 'Background music amplifiers, ceiling speakers, and public address sound.' },
    { icon: PhoneCall, title: lang === 'ar' ? 'الأنظمة الهاتفية والبدالات' : 'Telephone Systems', desc: lang === 'ar' ? 'سنترالات بدالة PABX، أجهزة IP Phone، وتمديدات هواتف المكاتب.' : 'Internal PABX, IP phones, and office telephone extensions.' },
    { icon: Radio, title: lang === 'ar' ? 'الستلايت المركزي (SMATV)' : 'Satellite (SMATV)', desc: lang === 'ar' ? 'شبكات توزيع البث الفضائي المركزي للمجمعات السكنية والفنادق.' : 'Central satellite television distribution networks for hotels and compounds.' },
    { icon: KeyRound, title: lang === 'ar' ? 'التحكم بالدخول والانتركم' : 'Access Control & Intercom', desc: lang === 'ar' ? 'بصمة، كروت ذكية، أقفال مغناطيسية، وأنظمة انتركم مرئي وصوتي.' : 'Biometric readers, magnetic door locks, and video/audio intercom units.' },
    { icon: Car, title: lang === 'ar' ? 'أنظمة مواقف السيارات الذكية' : 'Smart Parking Systems', desc: lang === 'ar' ? 'بوابات الكترونية، قراءة شرائح RFID، وأجهزة تحكم بالمواقف.' : 'Automated barrier gates, RFID vehicle tags, and parking controllers.' }
  ];

  return (
    <div className="smart-page">
      {/* Top Hero Section */}
      <section className="smart-hero-section">
        <div className="container grid-2-col align-center">
          <div className="smart-hero-text">
            <div className="badge"><ShieldAlert size={14} /> {lang === 'ar' ? 'أنظمة التحكم الذكي والمراقبة' : 'SMART CONTROL & SURVEILLANCE'}</div>
            <h1 className="smart-hero-title">
              {lang === 'ar' ? 'تركيب وصيانة أنظمة المراقبة والتحكم الذكي' : 'Surveillance Systems & Smart Control Engineering'}
            </h1>
            <p className="page-header-sub text-left mb-4">
              {lang === 'ar' 
                ? 'نحن نعمل مع أفضل العلامات التجارية العالمية وأكثرها كفاءة على الإطلاق، مع استقرار كامل وممتد للعمليات وخوادم قوية لنقل الصوت والفيديو بجودة عالية جداً بأكثر من إمكانيات ممتازة.'
                : 'We partner with leading global brands to deliver ultra-reliable surveillance systems, smart control infrastructure, and high-definition video/audio server solutions.'}
            </p>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('requestQuote')} <ArrowRight size={18} />
              </Link>
              <a href="#cctv-features" className="btn btn-secondary">
                {lang === 'ar' ? 'استكشف الإمكانيات' : 'Explore Capabilities'}
              </a>
            </div>
          </div>
          <div className="smart-hero-visual">
            <div className="smart-img-wrapper">
              <img 
                src="/assets/Illustration-2.png" 
                alt="Smart Control & CCTV Systems" 
                className="smart-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CCTV AI Capabilities Grid */}
      <section className="section bg-surface" id="cctv-features">
        <div className="container">
          <div className="badge-center"><Video size={14} /> {lang === 'ar' ? 'إمكانيات المراقبة الذكية' : 'AI SURVEILLANCE CAPABILITIES'}</div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تقنيات ومميزات أنظمة المراقبة المتقدمة' : 'Advanced Video Analytics & Surveillance Features'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تكنولوجيا كاميرات المراقبة المدعومة بالذكاء الاصطناعي لحماية المؤسسات والمنشآت على مدار 24 ساعة.'
              : 'AI-powered camera solutions engineered for 24/7 commercial and industrial security.'}
          </p>

          <div className="grid-3-col cctv-grid">
            {cctvCapabilities.map((cap, idx) => (
              <div key={idx} className="card cctv-card">
                <div className="cctv-icon-box">
                  <cap.icon size={28} className="cctv-icon" />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="cctv-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خاصية معتمدة' : 'Certified Feature'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services 01 - 04 Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Layers size={14} /> {lang === 'ar' ? 'خدماتنا المؤسسية' : 'OUR SPECIALIZED SERVICES'}</div>
          <h2 className="section-title">
            {lang === 'ar' ? 'خدماتنا التكنولوجية والهندسية المتكاملة' : 'Comprehensive Tech & Infrastructure Services'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar'
              ? 'نحن شركة مبتكرة وتقدمية متخصصة في حماية سمعتك وسلسلة التوريد الخاصة بك من خلال خدماتنا.'
              : 'Innovative and progressive solutions designed to protect your corporate reputation and supply chain.'}
          </p>

          <div className="grid-2-col services-01-04-grid">
            {mainServices.map((srv, idx) => (
              <div key={idx} className="card service-num-card">
                <div className="card-top-row">
                  <span className="srv-number">{srv.num}</span>
                  <div className="srv-icon-badge">
                    <srv.icon size={26} />
                  </div>
                </div>
                <h3 className="srv-title">{srv.title}</h3>
                <span className="srv-tagline">{srv.tagline}</span>
                <p className="srv-desc">{srv.desc}</p>
                <div className="srv-bullets">
                  {srv.bullets.map((b, i) => (
                    <div key={i} className="bullet-row">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Low-Current Systems Overview */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><ShieldCheck size={14} /> {lang === 'ar' ? 'أنظمة التيار الخفيف' : 'LOW-CURRENT SYSTEMS'}</div>
          <h2 className="section-title">
            {lang === 'ar' ? 'حلول التيار الخفيف والأنظمة الإلكترونية' : 'Low-Current & Ultra-Low Voltage Systems'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar'
              ? 'تجهيز وتوريد وتركيب كافة أنظمة التيار الخفيف المعتمدة للمستشفيات، الفنادق، الشركات، والمباني السكنية.'
              : 'Certified low-current installations for hospitals, hotels, corporate headquarters, and residential complexes.'}
          </p>

          <div className="grid-3-col">
            {lowCurrentSystems.map((sys, idx) => (
              <div key={idx} className="card sys-card">
                <sys.icon size={30} className="sys-icon" />
                <h3>{sys.title}</h3>
                <p>{sys.desc}</p>
                <div className="sys-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'تركيب وضمان رسمي' : 'Certified Installation'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Partners */}
      <section className="section text-center">
        <div className="container">
          <div className="badge-center"><Award size={14} /> {lang === 'ar' ? 'الشركاء والتوكيلات' : 'GLOBAL PARTNERS'}</div>
          <h2 className="section-title">
            {lang === 'ar' ? 'العلامات التجارية والشركاء الرسميون' : 'Official System Partners & Manufacturers'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' ? 'نعمل مع أفضل الشركات العالمية المعتمدة لضمان أقصى كفاءة واستقرار.' : 'Partnering with certified international manufacturers for maximum uptime and reliability.'}
          </p>
          <div className="brand-logos-row flex-center gap-5 mt-4 flex-wrap">
            <img src="/assets/EZVIZ_logo.png" alt="EZVIZ Partner" className="partner-logo-img" />
            <img src="/assets/Hochiki-Global-Banner-Logo-2019-with-Strapline-black-_-red-web-1.png" alt="Hochiki Partner" className="partner-logo-img" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2>{lang === 'ar' ? 'هل تريد استشارة وتجهيز أنظمة التحكم لشركتك؟' : 'Ready to Secure & Automate Your Organization?'}</h2>
          <p className="section-subtitle">
            {lang === 'ar' ? 'تواصل مع فريقنا الهندسي للحصول على دراسة موقع وعرض سعر مخصص.' : 'Contact our engineering team for site audits, system design, and custom proposals.'}
          </p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('contactUs')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
