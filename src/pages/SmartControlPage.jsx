import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
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
  Layers,
  Tv,
  Flame,
  Sliders,
  Sun,
  Film,
  Home,
  Building2,
  Thermometer,
  Activity,
  Zap,
  Coffee,
  Power
} from 'lucide-react';
import './SmartControlPage.css';

export default function SmartControlPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  const [activeScene, setActiveScene] = useState('welcome');

  const cctvCapabilities = [
    {
      icon: Eye,
      title: lang === 'ar' ? 'المراقبة التتبعية وتحديد المسار' : 'AI Object & Movement Tracking',
      desc: lang === 'ar' 
        ? 'تحديد مسارات الحركة في الوقت الفعلي مع إرسال إشعارات فورية ولقطات ذكية عند رصد أي اختراق للمنطقة.'
        : 'Real-time directional path tracking with automated instant push snapshots upon boundary crossing.'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'عدّ وتحليل تدفق الأشخاص (People Counting)' : 'AI People Counting & Footfall Flow',
      desc: lang === 'ar'
        ? 'حساب دقيق لعدد المارين في المداخل والممرات وتوليد تقارير بيانية عن ساعات الذروة والكثافة البشرية.'
        : 'High-precision footfall density analytics in corridors, malls, and enterprise reception lobbies.'
    },
    {
      icon: UserCheck,
      title: lang === 'ar' ? 'التعرف على الوجوه ومطابقة الهوية' : 'Face Recognition & Access Verification',
      desc: lang === 'ar'
        ? 'مطابقة الوجوه مع قواعد البيانات المعتمدة لفتح الأبواب تلقائياً وتسجيل الحضور والانصراف بدقة.'
        : 'Instant facial biometric matching against authorized databases for automated access and attendance.'
    },
    {
      icon: Moon,
      title: lang === 'ar' ? 'رؤية ليلية فائقة بالألوان الكاملة' : 'ColorVu 24/7 Full-Color Night Vision',
      desc: lang === 'ar'
        ? 'عدسات بؤرية حساسة للإضاءة المنخفضة تمنحك صوراً واضحة تماماً بالألوان الطبيعية في الظلام الدامس.'
        : 'Ultra-low-light optical sensors delivering crisp full-color video streams even in zero-light environments.'
    },
    {
      icon: Car,
      title: lang === 'ar' ? 'قراءة لوحات السيارات (ANPR/LPR)' : 'Automatic License Plate Recognition (ANPR)',
      desc: lang === 'ar'
        ? 'كاميرات ذكية مخصصة لقراءة لوحات المركبات وفتح البوابات تلقائياً للسيارات المصرح لها.'
        : 'Dedicated ANPR cameras capturing license plates to trigger automated barrier gate opening.'
    },
    {
      icon: Server,
      title: lang === 'ar' ? 'سيرفرات NVR مركزية ونقل الفيديو المشفر' : 'Enterprise NVR Storage & Video Wall',
      desc: lang === 'ar'
        ? 'منظومات تسجيل سحابية ومحلية فائقة السعة مع تشفير H.265+ لتوفير 70% من مساحات التخزين.'
        : 'High-capacity redundant NVR arrays with H.265+ compression, reducing storage overhead by 70%.'
    }
  ];

  const lowCurrentSystems = [
    { 
      icon: Video, 
      title: lang === 'ar' ? 'كاميرات المراقبة الذكية (CCTV)' : '4K AI CCTV Surveillance', 
      desc: lang === 'ar' ? 'كاميرات شبكية Hikvision و EZVIZ بدقة 4K مع تحليلات ذكية وتخزين NVR سحابي.' : 'Hikvision & EZVIZ 4K IP cameras with edge AI analytics and cloud NVR backup.' 
    },
    { 
      icon: Flame, 
      title: lang === 'ar' ? 'أنظمة إنذار الحريق المعنونة' : 'Addressable Fire Alarm (Hochiki)', 
      desc: lang === 'ar' ? 'لوحات تحكم وكواشف دخان وحرارة معتمدة من الدفاع المدني لسلامة المنشآت.' : 'Civil defense certified Hochiki addressable fire alarm panels and smoke detectors.' 
    },
    { 
      icon: Home, 
      title: lang === 'ar' ? 'أتمتة المنازل والفلل (Smart Home)' : 'Smart Home & Villa Automation', 
      desc: lang === 'ar' ? 'تحكم ذكي في الإضاءة، التكييف، الستائر، والسيناريوهات عبر الشاشات وتطبيقات الموبايل.' : 'KNX & Zigbee multi-zone lighting, HVAC climate control, motorized shades, and scenes.' 
    },
    { 
      icon: KeyRound, 
      title: lang === 'ar' ? 'التحكم بالدخول والأبواب الذكية' : 'Biometric Access Control & Intercom', 
      desc: lang === 'ar' ? 'بوابات مرور إلكترونية، بصمة الوجه، كروت ذكية، وانتركم مرئي IP عالي الوضوح.' : 'Speed turnstiles, biometric facial readers, smart magnetic locks, and IP video intercoms.' 
    },
    { 
      icon: Volume2, 
      title: lang === 'ar' ? 'الأنظمة الصوتية والنداء العام (Bose)' : 'Public Address & Bose Sound Systems', 
      desc: lang === 'ar' ? 'سماعات سقفية ومكبرات صوت فائقة النقاء للمطاعم والمباني والفنادق متعددة المناطق.' : 'High-fidelity Bose background music amplifiers, ceiling speakers, and multi-zone PA audio.' 
    },
    { 
      icon: PhoneCall, 
      title: lang === 'ar' ? 'السنترالات والبدالات الذكية (IP-PBX)' : 'IP-PBX Telephony & VoIP', 
      desc: lang === 'ar' ? 'سنترالات IP متطورة وخطوط داخلية رقمية لربط المكاتب والفروع والمكالمات الهاتفية.' : 'Enterprise IP-PBX communication servers, Grandstream/Panasonic phones, and branch VoIP.' 
    },
    { 
      icon: Radio, 
      title: lang === 'ar' ? 'الستلايت المركزي الذكي (SMATV)' : 'Central Satellite (SMATV & IPTV)', 
      desc: lang === 'ar' ? 'شبكات توزيع البث التلفزيوني والـ IPTV المركزي للفنادق والمجمعات السكنية.' : 'Central satellite distribution, IPTV hotel hospitality solutions, and IF coaxial networks.' 
    },
    { 
      icon: Car, 
      title: lang === 'ar' ? 'بوابات ومواقف السيارات الذكية' : 'Automated Parking & Barrier Gates', 
      desc: lang === 'ar' ? 'بوابات دخول وخروج سريعة مع شرائح RFID وقارئات اللوحات الذكية للمواقف.' : 'High-speed automated boom barriers, RFID long-range tags, and parking management systems.' 
    }
  ];

  const smartPackages = [
    {
      id: 'villa-smart-home',
      title: lang === 'ar' ? 'باقة الفلل والمنازل الذكية' : 'Luxury Villa Smart Automation',
      subtitle: lang === 'ar' ? 'للشقق والفلل الفاخرة' : 'Apartments & Luxury Villas',
      price: 3499.99,
      recommended: false,
      image: '/assets/smart-home-villa.jpg',
      features: lang === 'ar' ? [
        'شاشة لمس جدارية مركزية للتحكم بالمنزل',
        'تحكم ذكي بالإضاءة والتعتيم (Dimming)',
        'تحكم بالتكييف والحرارة الذكية (Smart Thermostat)',
        'محركات ستائر أوتوماتيكية مع حساسات الشمس',
        'نظام انتركم مرئي IP مع فتح القفل عن بعد',
        'تطبيق موبايل موحد للتحكم من أي مكان'
      ] : [
        'Wall-Mounted Smart Touchscreen Controller',
        'Multi-Zone Smart Lighting & Mood Dimming',
        'Smart Thermostat HVAC Climate Automation',
        'Motorized Curtain Motors with Sun Sensors',
        'HD IP Video Intercom with Remote Door Unlock',
        'Unified Smartphone Mobile App Control'
      ]
    },
    {
      id: 'commercial-low-current',
      title: lang === 'ar' ? 'باقة المنشآت والشركات (تيار خفيف)' : 'Commercial Low-Current Pro',
      subtitle: lang === 'ar' ? 'للشركات والمباني التجارية' : 'Offices, Showrooms & Commercial Buildings',
      price: 7999.99,
      recommended: true,
      image: '/assets/smart-cctv-soc.jpg',
      features: lang === 'ar' ? [
        'شبكة كاميرات مراقبة 4K AI Hikvision مع جهاز NVR',
        'نظام إنذار حريق معنون معتمد (Hochiki)',
        'بوابات تحكم بالدخول ببصمة الوجه والكروت الذكية',
        'نظام صوتي وسماعات سقفية ومكبرات نداء عام',
        'سنترال بدالة IP-PBX مع هواتف مكتبية',
        'ضمان وصيانة دورية معتمدة على مدار 24/7'
      ] : [
        'Hikvision 4K AI Surveillance Grid + NVR',
        'Certified Addressable Fire Alarm Panel (Hochiki)',
        'Biometric Facial Recognition Speed Gates',
        'Multi-Zone Public Address Background Audio',
        'Enterprise IP-PBX Telephony System',
        '24/7 Priority Maintenance & SLA Warranty'
      ]
    },
    {
      id: 'bms-tower-automation',
      title: lang === 'ar' ? 'باقة إدارة الأبراج والمباني (BMS)' : 'Enterprise BMS & Tower Automation',
      subtitle: lang === 'ar' ? 'للأبراج والمستشفيات والمصانع' : 'Towers, Hospitals, Hotels & Factories',
      price: 14999.99,
      recommended: false,
      image: '/assets/smart-bms-system.jpg',
      features: lang === 'ar' ? [
        'نظام BMS مركزي للتحكم بجميع مرافق المبنى',
        'أتمتة محطات التبريد والتكييف المركزي (Chillers)',
        'مراقبة جودة الهواء واستهلاك الطاقة وخفض الفواتير 35%',
        'ربط بوابات السيارات الذكية وقراءة اللوحات ANPR',
        'لوحة مراقبة وتحكم غرف العمليات SOC المتكاملة',
        'مهندس أنظمة تيار خفيف مخصص ومدير حساب'
      ] : [
        'Full Central Building Management System (BMS)',
        'Chiller Plant & HVAC Central Automation',
        'Air Quality Telemetry & 35% Energy Reduction',
        'ANPR Smart Parking & High-Speed Barrier System',
        'Integrated Security Operations Center (SOC) Wall',
        'Dedicated Low-Current Project Engineer'
      ]
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: lang === 'ar' ? 'المعاينة الهندسية ودراسة المخططات' : 'Site Survey & Engineering Blueprint',
      desc: lang === 'ar' 
        ? 'مراجعة المخططات المعمارية (CAD/Shop Drawings)، حصر مساحات التغطية، وتحديد نقاط الكاميرات والحساسات.' 
        : 'Reviewing architectural CAD shop drawings, calculating coverage zones, and mapping device placements.'
    },
    {
      num: '02',
      title: lang === 'ar' ? 'تمديد المواسير والكابلات المعزولة' : 'Conduit Piping & Shielded Cabling',
      desc: lang === 'ar' 
        ? 'تنفيذ مسارات الكابلات المقاومة للحريق (Fire-Rated) وكابلات الشبكات CAT6A المعزولة وفق المواصفات القياسية.' 
        : 'Installing fire-rated cabling, EMT conduits, and shielded low-current communication lines.'
    },
    {
      num: '03',
      title: lang === 'ar' ? 'تركيب الأجهزة والبرمجة المركزية' : 'Device Mounting & Central Commissioning',
      desc: lang === 'ar' 
        ? 'تثبيت الكاميرات، لوحات إنذار الحريق، شاشات التحكم، وتكوين بروتوكولات KNX و BACnet المركزية.' 
        : 'Mounting sensors, fire panels, touchscreens, and programming KNX / BACnet / IP controllers.'
    },
    {
      num: '04',
      title: lang === 'ar' ? 'الاختبارات الشاملة والتسليم المعتمد' : 'System Stress Testing & Handover',
      desc: lang === 'ar' 
        ? 'إجراء اختبارات محاكاة الطوارئ والحرائق، فحص نقاء الصوت وزوايا الكاميرات، وتسليم شهادات الاعتماد.' 
        : 'Emergency drill validation, sound acoustics calibration, and certified civil defense documentation.'
    }
  ];

  const visualGallery = [
    {
      img: '/assets/smart-home-villa.jpg',
      title: lang === 'ar' ? 'أتمتة الفلل والشاشات الذكية' : 'Luxury Smart Villa Automation',
      desc: lang === 'ar' ? 'شاشات لمس أنيقة للتحكم الشامل في الإضاءة والمناخ والصوتيات.' : 'Sleek wall touchscreen for lighting, audio, and climate scenes.'
    },
    {
      img: '/assets/smart-bms-system.jpg',
      title: lang === 'ar' ? 'إدارة المباني الذكية (BMS)' : 'Building Management Systems (BMS)',
      desc: lang === 'ar' ? 'مخططات ثلاثية الأبعاد وتحكم ذكي في التكييف والطاقة.' : '3D digital twin monitoring HVAC, air quality, and power savings.'
    },
    {
      img: '/assets/smart-cctv-soc.jpg',
      title: lang === 'ar' ? 'غرف مراقبة الكاميرات (SOC)' : 'Security Operations Center (SOC)',
      desc: lang === 'ar' ? 'جدران فيديو 4K وتحليلات ذكية للوجوه والمركبات.' : 'Ultra-HD video wall with AI face & license plate analytics.'
    },
    {
      img: '/assets/smart-access-control.jpg',
      title: lang === 'ar' ? 'بوابات الدخول ومواقف السيارات' : 'Biometrics & Smart Parking Gates',
      desc: lang === 'ar' ? 'بوابات مرور سريعة ببصمة الوجه وقارئات اللوحات الذكية.' : 'Speed turnstiles with facial recognition and automated barriers.'
    }
  ];

  return (
    <div className="smart-page">
      {/* 1. Top Hero Section */}
      <section className="smart-hero-section">
        <div className="container smart-hero-grid">
          <div className="smart-hero-text">
            <div className="badge">
              <ShieldAlert size={14} /> {lang === 'ar' ? 'أنظمة التحكم الذكي والمراقبة والتيار الخفيف' : 'Smart Automation & Low-Current Engineering'}
            </div>
            <h1 className="smart-hero-title">
              {lang === 'ar' 
                ? 'أنظمة التحكم الذكي، إدارة المباني (BMS) وحلول التيار الخفيف' 
                : 'Intelligent Smart Control, BMS & Low-Current Engineering'}
            </h1>
            <p className="smart-hero-subtitle">
              {lang === 'ar'
                ? 'نقدم حلولاً تكنولوجية متكاملة للمنازل الذكية (Smart Home)، إدارة المباني والأبراج (BMS)، كاميرات المراقبة بالذكاء الاصطناعي (Hikvision & EZVIZ)، وأنظمة إنذار الحريق المعنونة (Hochiki) بأعلى معايير الأمان والجودة العالمية.'
                : 'Turn-key engineering for Smart Home automation, Building Management Systems (BMS), 4K AI video surveillance, addressable fire alarms, and biometric access control engineered for maximum reliability.'}
            </p>

            <div className="smart-partner-badge">
              <ShieldCheck size={18} color="#1388fd" />
              <span>{lang === 'ar' ? 'شريك هيكفيجن وهوكيكي وبوز معتمد - ضمان رسمي وشهادات اعتماد' : 'Certified Hikvision, Hochiki & Bose Integration Partner'}</span>
            </div>

            <div className="smart-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {lang === 'ar' ? 'طلب معاينة واستشارة للمشروع' : 'Request Project Site Survey'} <ArrowRight size={18} />
              </Link>
              <a href="#packages" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات الأنظمة الذكية' : 'Explore Smart Packages'}
              </a>
            </div>
          </div>

          <div className="smart-hero-visual">
            <div className="smart-img-wrapper">
              <img 
                src="/assets/smart-home-villa.jpg" 
                alt="Luxury Smart Home Automation & Touch Controller" 
                className="smart-hero-img" 
              />
              <div className="smart-float-card smart-float-card-1">
                <div className="smart-float-icon" style={{ background: 'rgba(19, 136, 253, 0.1)', color: '#1388fd' }}>
                  <Home size={20} />
                </div>
                <div className="smart-float-text">
                  <strong>{lang === 'ar' ? 'أتمتة المنازل والفلل' : 'Smart Home Control'}</strong>
                  <span>{lang === 'ar' ? 'إضاءة ومناخ وصوتيات' : 'KNX & Zigbee Protocols'}</span>
                </div>
              </div>
              <div className="smart-float-card smart-float-card-2">
                <div className="smart-float-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Video size={20} />
                </div>
                <div className="smart-float-text">
                  <strong>{lang === 'ar' ? 'مراقبة 4K ذكية' : '4K AI Surveillance'}</strong>
                  <span>{lang === 'ar' ? 'تعرف على الوجوه والمركبات' : 'Facial & ANPR Active'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats & Trust Bar */}
      <section className="smart-stats-section">
        <div className="container">
          <div className="smart-stats-grid">
            <div className="smart-stat-item">
              <span className="smart-stat-num">99.99%</span>
              <span className="smart-stat-label">{lang === 'ar' ? 'اعتمادية واستقرار المنظومات' : 'System Reliability SLA'}</span>
            </div>
            <div className="smart-stat-item">
              <span className="smart-stat-num">-35%</span>
              <span className="smart-stat-label">{lang === 'ar' ? 'توفير استهلاك الكهرباء (BMS)' : 'Energy Consumption Saved'}</span>
            </div>
            <div className="smart-stat-item">
              <span className="smart-stat-num">250+</span>
              <span className="smart-stat-label">{lang === 'ar' ? 'مشروع وبرج تم تجهيزه' : 'Smart Projects Completed'}</span>
            </div>
            <div className="smart-stat-item">
              <span className="smart-stat-num">{"< 10ms"}</span>
              <span className="smart-stat-label">{lang === 'ar' ? 'سرعة استجابة الأوامر الذكية' : 'Ultra-Fast Smart Latency'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Smart Operations & Automation Console */}
      <section className="smart-console-section">
        <div className="container">
          <div className="badge-center">
            <Activity size={14} /> {lang === 'ar' ? 'شاشات التحكم والمراقبة التفاعلية' : 'Live Smart Control & BMS Console'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تحكم مركزي ومراقبة ذكية لجميع أجهزة ومرافق المنشأة' : 'Centralized Command & Live Facility Telemetry'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'لوحات تحكم متطورة تتيح لك إدارة الإضاءة، التكييف، استهلاك الطاقة، وكاميرات المراقبة بلمسة واحدة.' 
              : 'End-to-end interface managing smart lighting scenes, HVAC chiller telemetry, CCTV video streams, and life safety loops.'}
          </p>

          {/* Tab Switcher */}
          <div className="smart-tab-buttons">
            <button 
              className={`smart-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              <Home size={16} />
              <span>{lang === 'ar' ? 'أتمتة الفلل والمنازل (Smart Home)' : 'Smart Home & Living'}</span>
            </button>
            <button 
              className={`smart-tab-btn ${activeTab === 'bms' ? 'active' : ''}`}
              onClick={() => setActiveTab('bms')}
            >
              <Building2 size={16} />
              <span>{lang === 'ar' ? 'إدارة المباني الذكية (BMS)' : 'Building Automation (BMS)'}</span>
            </button>
            <button 
              className={`smart-tab-btn ${activeTab === 'cctv' ? 'active' : ''}`}
              onClick={() => setActiveTab('cctv')}
            >
              <Video size={16} />
              <span>{lang === 'ar' ? 'المراقبة وتحليلات الذكاء الاصطناعي' : 'AI Video Analytics'}</span>
            </button>
            <button 
              className={`smart-tab-btn ${activeTab === 'safety' ? 'active' : ''}`}
              onClick={() => setActiveTab('safety')}
            >
              <Flame size={16} />
              <span>{lang === 'ar' ? 'إنذار الحريق وسلامة الأرواح' : 'Fire Alarm & Safety Loops'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="smart-console-window">
            <div className="smart-window-header">
              <div className="smart-window-dots">
                <div className="smart-window-dot" style={{ background: '#ef4444' }} />
                <div className="smart-window-dot" style={{ background: '#f59e0b' }} />
                <div className="smart-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="smart-window-title">
                <Sliders size={15} />
                <span>POM Smart Control Hub &bull; {lang === 'ar' ? 'منصة الأتمتة المركزية' : 'Central Smart Management Console'}</span>
              </div>
              <span className="smart-window-badge">{lang === 'ar' ? 'جميع الأنظمة متصلة وتعمل (OK)' : 'All Controllers Online'}</span>
            </div>

            <div className="smart-window-body">
              {/* Tab 1: Smart Home */}
              {activeTab === 'home' && (
                <div>
                  <div className="smart-kpis-grid">
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'حالة الإضاءة العامة' : 'Active Lighting Circuits'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>14 / 18 ON</span>
                      <span className="smart-kpi-badge-gain"><Sun size={14} /> {lang === 'ar' ? 'مستوى السطوع 75%' : 'Dimmed to 75%'}</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'حرارة التكييف الحالية' : 'Climate AC Target'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>22.0 °C</span>
                      <span className="smart-kpi-badge-neutral"><Thermometer size={14} /> {lang === 'ar' ? 'الرطوبة 48% (مثالي)' : 'Humidity 48% (Optimal)'}</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'الستائر الأوتوماتيكية' : 'Motorized Shades'}</span>
                      <span className="smart-kpi-value">OPEN (80%)</span>
                      <span className="smart-kpi-badge-neutral"><Sun size={14} /> {lang === 'ar' ? 'تتبع مسار الشمس' : 'Daylight Sync Active'}</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'النظام الصوتي (Bose)' : 'Multi-Room Audio'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>Living & Lounge</span>
                      <span className="smart-kpi-badge-gain"><Volume2 size={14} /> {lang === 'ar' ? 'موسيقى هادئة 45%' : 'Chillout Playlist'}</span>
                    </div>
                  </div>

                  {/* Interactive Scene Switcher */}
                  <div style={{ marginTop: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
                      {lang === 'ar' ? 'السيناريوهات الذكية المعدة مسبقاً (Smart Scenes):' : 'Pre-Configured Smart Living Scenes:'}
                    </span>
                    <div className="smart-scenes-grid">
                      <div 
                        className={`smart-scene-card ${activeScene === 'welcome' ? 'active' : ''}`}
                        onClick={() => setActiveScene('welcome')}
                      >
                        <Coffee size={20} color="#f59e0b" />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff' }}>{lang === 'ar' ? 'سيناريو الترحيب' : 'Welcome Home'}</strong>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lang === 'ar' ? 'إضاءة دافئة + تكييف 22C' : 'Warm Light + 22C'}</span>
                        </div>
                      </div>

                      <div 
                        className={`smart-scene-card ${activeScene === 'cinema' ? 'active' : ''}`}
                        onClick={() => setActiveScene('cinema')}
                      >
                        <Film size={20} color="#8b5cf6" />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff' }}>{lang === 'ar' ? 'سيناريو السينما' : 'Cinema Mode'}</strong>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lang === 'ar' ? 'إغلاق الستائر + إعتام 15%' : 'Close Shades + Dim 15%'}</span>
                        </div>
                      </div>

                      <div 
                        className={`smart-scene-card ${activeScene === 'night' ? 'active' : ''}`}
                        onClick={() => setActiveScene('night')}
                      >
                        <Moon size={20} color="#38bdf8" />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff' }}>{lang === 'ar' ? 'سيناريو النوم' : 'Goodnight'}</strong>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lang === 'ar' ? 'إطفاء الأنوار + تفعيل الإنذار' : 'All Off + Alarm Armed'}</span>
                        </div>
                      </div>

                      <div 
                        className={`smart-scene-card ${activeScene === 'away' ? 'active' : ''}`}
                        onClick={() => setActiveScene('away')}
                      >
                        <Lock size={20} color="#10b981" />
                        <div>
                          <strong style={{ display: 'block', fontSize: '0.85rem', color: '#fff' }}>{lang === 'ar' ? 'سيناريو السفر' : 'Vacation Away'}</strong>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{lang === 'ar' ? 'توفير الطاقة + محاكاة وجود' : 'Energy Saver + Security'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: BMS */}
              {activeTab === 'bms' && (
                <div>
                  <div className="smart-kpis-grid">
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'توفير الطاقة الكهربائية' : 'Energy Reduction Rate'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>-34.8%</span>
                      <span className="smart-kpi-badge-gain"><Zap size={14} /> AI Peak Shaving</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'محطات التبريد المركزي (Chillers)' : 'Central Chiller Plant'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>3 / 4 Running</span>
                      <span className="smart-kpi-badge-neutral"><Activity size={14} /> Variable Speed Flow</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'مؤشر جودة الهواء الداخلي (AQI)' : 'Indoor Air Quality (AQI)'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>32 (Excellent)</span>
                      <span className="smart-kpi-badge-gain"><CheckCircle2 size={14} /> Fresh Air Active</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'إجمالي الحساسات الذكية (IoT)' : 'Connected IoT Sensors'}</span>
                      <span className="smart-kpi-value">485 Points</span>
                      <span className="smart-kpi-badge-neutral"><Building2 size={14} /> BACnet / IP Protocol</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: CCTV */}
              {activeTab === 'cctv' && (
                <div>
                  <div className="smart-kpis-grid">
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'كاميرات المراقبة النشطة 4K' : 'Active 4K Video Streams'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>64 / 64 LIVE</span>
                      <span className="smart-kpi-badge-gain"><CheckCircle2 size={14} /> Zero Frame Loss</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'قراءة لوحات المركبات (ANPR)' : 'License Plates Logged (Today)'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>842 Vehicles</span>
                      <span className="smart-kpi-badge-neutral"><Car size={14} /> Auto Barrier Triggered</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'تنبيهات اختراق السياج الأمني' : 'Perimeter Line Crossings'}</span>
                      <span className="smart-kpi-value">0 Incidents</span>
                      <span className="smart-kpi-badge-gain"><ShieldCheck size={14} /> DeepinView AI Active</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'سعة التسجيل والتخزين NVR' : 'Retention Archive'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>90 Days</span>
                      <span className="smart-kpi-badge-neutral"><Server size={14} /> H.265+ Compression</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Fire Safety */}
              {activeTab === 'safety' && (
                <div>
                  <div className="smart-kpis-grid">
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'لوحة إنذار الحريق المركزية (Hochiki)' : 'Hochiki Main Fire Panel'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>NORMAL (0 Faults)</span>
                      <span className="smart-kpi-badge-gain"><CheckCircle2 size={14} /> Civil Defense Certified</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'كواشف الدخان والحرارة المعنونة' : 'Addressable Loops'}</span>
                      <span className="smart-kpi-value">256 Detectors</span>
                      <span className="smart-kpi-badge-gain"><Flame size={14} /> 100% Loop Integrity</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'منظومة الإخلاء الصوتي الآلي' : 'Voice Evacuation Audio'}</span>
                      <span className="smart-kpi-value" style={{ color: '#38bdf8' }}>STANDBY</span>
                      <span className="smart-kpi-badge-neutral"><Volume2 size={14} /> EN-54 Certified</span>
                    </div>
                    <div className="smart-kpi-card">
                      <span className="smart-kpi-title">{lang === 'ar' ? 'بوابات ومصاعد الطوارئ' : 'Emergency Dampers & Lifts'}</span>
                      <span className="smart-kpi-value" style={{ color: '#34d399' }}>AUTO-LINKED</span>
                      <span className="smart-kpi-badge-gain"><ShieldCheck size={14} /> Ground Recall Ready</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multiple Visual Feature Showcases with High-Res Images */}
      {/* Showcase 1: Smart Building Management Systems (BMS) */}
      <section className="smart-visual-split-section">
        <div className="container smart-visual-split-grid">
          <div className="smart-split-img-card">
            <img 
              src="/assets/smart-bms-system.jpg" 
              alt="Building Management System BMS Automation Interface" 
            />
          </div>
          <div className="smart-split-content">
            <div className="badge"><Building2 size={14} /> {lang === 'ar' ? 'إدارة المباني الذكية (BMS)' : 'Building Management Systems (BMS)'}</div>
            <h3>
              {lang === 'ar' 
                ? 'أنظمة إدارة المباني والأبراج الذكية (BMS) وخفض استهلاك الطاقة' 
                : 'Intelligent BMS Command Centers Delivering 35% Energy Efficiency'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نصمم وننفذ أنظمة إدارة المباني المتطورة عبر بروتوكولات BACnet و Modbus: تحكم ذكي بمحطات التكييف والتبريد المركزي (Chillers)، تتبع جودة الهواء والتهوية، ومراقبة استهلاك الطاقة لتقليل فواتير الكهرباء وتكاليف الصيانة التشغيلية بنسبة تصل إلى 35%.'
                : 'We engineer robust BMS infrastructures utilizing BACnet and Modbus protocols: automated central chiller plant control, indoor air quality monitoring, and predictive power management reducing facility operational costs by up to 35%.'}
            </p>
            <ul className="smart-split-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تحكم ذكي في درجات الحرارة وتدفق الهواء عبر خوارزميات الذكاء الاصطناعي' : 'AI-driven airflow and variable temperature setpoint automation'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'مخططات رقمية تفاعلية (3D Digital Twin) لجميع طوابق ومرافق المنشأة' : 'Interactive 3D digital twin architectural floor plan visualization'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تنبيهات استباقية عند وجود أي خلل ميكانيكي قبل تفاقم الأعطال' : 'Proactive predictive maintenance alerts for pumps and AHU units'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              {lang === 'ar' ? 'طلب دراسة BMS لمنشأتك' : 'Request BMS Engineering Study'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 2: AI Video Surveillance & SOC Operations */}
      <section className="smart-visual-split-section bg-surface">
        <div className="container smart-visual-split-grid reverse">
          <div className="smart-split-img-card">
            <img 
              src="/assets/smart-cctv-soc.jpg" 
              alt="Security Operations Center SOC Video Wall & AI CCTV" 
            />
          </div>
          <div className="smart-split-content">
            <div className="badge"><Video size={14} /> {lang === 'ar' ? 'المراقبة وغرف العمليات (SOC)' : 'AI Video Analytics & SOC'}</div>
            <h3>
              {lang === 'ar' 
                ? 'كاميرات المراقبة بالذكاء الاصطناعي وتجهيز غرف العمليات الأمنية (SOC)' 
                : 'Next-Gen 4K AI CCTV & Security Operations Center Engineering'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'منظومات مراقبة متقدمة من Hikvision و EZVIZ مدعومة بالذكاء الاصطناعي DeepinView: التعرف على الوجوه، قراءة لوحات السيارات (ANPR)، الرؤية الليلية بالألوان الكاملة، وتجهيز غرف عمليات أمنية متكاملة (SOC Video Walls) للمؤسسات والمصانع.'
                : 'State-of-the-art surveillance powered by Hikvision & EZVIZ DeepinView AI: facial recognition, ANPR license plate logging, ColorVu night vision, and turn-key Security Operations Center (SOC) multi-screen video walls.'}
            </p>
            <ul className="smart-split-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'رؤية ليلية فائقة الوضوح بالألوان الكاملة حتى في الظلام الدامس' : '24/7 ColorVu full-color streaming in absolute dark conditions'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'كشف التسلل واختراق الخطوط الافتراضية بدقة تتجاوز 99%' : 'Intelligent perimeter line-crossing and intrusion detection'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'ربط البث المباشر بالشاشات وتطبيق الهاتف مع التخزين السحابي المشفر' : 'Direct mobile app access and encrypted multi-tier NVR archive'}</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">
              {lang === 'ar' ? 'طلب عرض سعر كاميرات المراقبة' : 'Get CCTV Systems Quote'}
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase 3: Biometric Speed Gates & Smart Parking */}
      <section className="smart-visual-split-section">
        <div className="container smart-visual-split-grid">
          <div className="smart-split-img-card">
            <img 
              src="/assets/smart-access-control.jpg" 
              alt="Biometric Facial Speed Gates & Smart Parking Barriers" 
            />
          </div>
          <div className="smart-split-content">
            <div className="badge"><KeyRound size={14} /> {lang === 'ar' ? 'التحكم بالدخول ومواقف السيارات' : 'Biometrics & Parking Barriers'}</div>
            <h3>
              {lang === 'ar' 
                ? 'بوابات المرور الذكية، قراءة بصمة الوجه، ومواقف السيارات الإلكترونية' 
                : 'High-Speed Optical Turnstiles, Facial Biometrics & Automated Parking'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'نظام متكامل للتحكم في وصول الموظفين والزوار عبر بوابات Speed Gates الزجاجية الفاخرة، قراءة بصمة الوجه بدون تلامس، بوابات مواقف السيارات السريعة بحساسات الأمان وقارئات الشرائح بعيدة المدى RFID.'
                : 'Seamless corporate access management featuring optical speed turnstiles, touchless facial recognition, and automated barrier gates with long-range RFID readers and parking space guidance.'}
            </p>
            <ul className="smart-split-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'بوابات مرور سريعة ومصقولة مصنوعة من الستانلس ستيل المقاوم للصدأ' : 'Brushed stainless steel optical turnstiles with anti-tailgating'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'ربط فوري مع أنظمة الموارد البشرية لتسجيل الحضور والانصراف' : 'Instant synchronization with HR payroll and attendance databases'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'بوابات سيارات آلية سريعة مع قراءة اللوحات والشرائح الذكية' : 'High-speed automated boom barriers with RFID tag authorization'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              {lang === 'ar' ? 'طلب تجهيز بوابات الدخول' : 'Request Access Gates Buildout'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Rich Image Gallery Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Sparkles size={14} /> {lang === 'ar' ? 'معرض المنظومات الذكية' : 'Smart Solutions Gallery'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'حلول عملية منفذة بأعلى التقنيات العالمية' : 'Real-World Smart Engineering Deployments'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'شاهد جانباً من تجهيزاتنا الميدانية في أتمتة الفلل، المباني الذكية، غرف العمليات، وبوابات الدخول.' 
              : 'Explore our turn-key implementations across luxury villas, smart towers, and high-security enterprises.'}
          </p>

          <div className="smart-gallery-grid">
            {visualGallery.map((item, idx) => (
              <div key={idx} className="smart-gallery-item">
                <img src={item.img} alt={item.title} />
                <div className="smart-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core 8 Low-Current & Smart Control Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center">
            <Layers size={14} /> {lang === 'ar' ? 'خدمات التيار الخفيف الشاملة' : 'Core Low-Current Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'منظومات التيار الخفيف والأنظمة الإلكترونية المعتمدة' : 'Comprehensive Low-Current & Electronic Systems'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تجهيز وتوريد وتركيب وصيانة كافة أنظمة التيار الخفيف للشركات، الفنادق، المستشفيات، والمجمعات السكنية.' 
              : 'End-to-end low-current supply, installation, and certified maintenance for commercial and residential sectors.'}
          </p>

          <div className="smart-modules-grid">
            {lowCurrentSystems.map((sys, idx) => (
              <div key={idx} className="smart-module-card">
                <div className="smart-module-top">
                  <div className="smart-icon-box">
                    <sys.icon size={24} />
                  </div>
                  <h3>{sys.title}</h3>
                  <p>{sys.desc}</p>
                </div>
                <div className="smart-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'تركيب وضمان معتمد' : 'Certified System'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI CCTV Capabilities Highlights */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Video size={14} /> {lang === 'ar' ? 'مميزات المراقبة الذكية' : 'AI Video Analytics Highlights'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'تقنيات المراقبة المدعومة بالذكاء الاصطناعي' : 'AI-Powered Security & Video Intelligence'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'كاميرات ذكية تتجاوز المراقبة التقليدية لتمنحك تحليلات آنية وحماية استباقية على مدار الساعة.' 
              : 'Intelligent vision beyond standard recording: instant facial alerts, ANPR logging, and people flow tracking.'}
          </p>

          <div className="smart-modules-grid">
            {cctvCapabilities.map((cap, idx) => (
              <div key={idx} className="smart-module-card">
                <div className="smart-module-top">
                  <div className="smart-icon-box">
                    <cap.icon size={24} />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
                <div className="smart-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'خاصية معتمدة' : 'Smart AI Feature'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Smart Automation Packages & Pricing */}
      <section className="section" id="packages">
        <div className="container">
          <div className="badge-center">
            <Sliders size={14} /> {lang === 'ar' ? 'باقات وحلول الأنظمة الذكية' : 'Smart Solutions & Pricing Tiers'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر الباقة المناسبة لمشروعك ومنشأتك' : 'Select the Ideal Smart Control Package for Your Space'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات متكاملة تشمل التوريد، التمديد، التركيب الهندسي، والبرمجة مع الضمان والدعم الفني المعتمد.' 
              : 'Comprehensive packages covering hardware supply, installation wiring, software commissioning, and SLA warranty.'}
          </p>

          <div className="smart-pricing-grid">
            {smartPackages.map((p) => (
              <div key={p.id} className={`smart-pricing-card ${p.recommended ? 'recommended' : ''}`}>
                {p.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <div>
                  <h3 className="smart-plan-title">{p.title}</h3>
                  <span className="smart-plan-subtitle">{p.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{p.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="smart-plan-features">
                    {p.features.map((f, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: p.id,
                      title: p.title,
                      price: p.price,
                      image: p.image
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

      {/* 9. Implementation 4-Step Methodology */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Layers size={14} /> {lang === 'ar' ? 'خارطة طريق التنفيذ والتركيب' : 'Engineering Deployment Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات هندسية دقيقة من المخطط وحتى التشغيل' : '4-Step Methodology for Seamless Smart Rollout'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتبع مسار عمل هندسي معتمد لضمان أعلى معايير الجودة والسلامة والتشغيل الخالي من الأعطال.' 
              : 'A structured roadmap from architectural shop drawings to Fluke cable testing and civil defense approval.'}
          </p>

          <div className="smart-workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="smart-workflow-card">
                <span className="smart-workflow-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Official Global Brand Partners */}
      <section className="section text-center">
        <div className="container">
          <div className="badge-center">
            <Award size={14} /> {lang === 'ar' ? 'الشركاء والتوكيلات العالمية' : 'GLOBAL CERTIFIED PARTNERS'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'العلامات التجارية والشركاء الرسميون' : 'Official Hardware Partners & Manufacturers'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نعمل مباشرة مع كبرى الشركات المصنعة لضمان أصلية المعدات وأعلى فترات الضمان والاستقرار.' 
              : 'Direct integration with tier-1 international manufacturers ensuring genuine hardware and long-term warranties.'}
          </p>
          <div className="smart-partners-row mt-4">
            <img src="/assets/LOGO-Hikvision-300x179-1.png" alt="Hikvision Partner" className="smart-partner-logo" />
            <img src="/assets/EZVIZ_logo.png" alt="EZVIZ Partner" className="smart-partner-logo" />
            <img src="/assets/Hochiki-Global-Banner-Logo-2019-with-Strapline-black-_-red-web-1.png" alt="Hochiki Fire Partner" className="smart-partner-logo" />
            <img src="/assets/png-clipart-bose-factory-store-bose-corporation-logo-home-automation-kits-others-cdr-text-1.png" alt="Bose Partner" className="smart-partner-logo" />
          </div>
        </div>
      </section>

      {/* 11. Bottom CTA Banner */}
      <section className="section text-center" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="smart-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل ترغب في تجهيز أنظمة التحكم الذكي والتيار الخفيف لمشروعك؟' 
                : 'Ready to Engineer Smart Control & Low-Current for Your Facility?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على معاينة ميدانية مجانية ودراسة هندسية مخصصة لمشروعك من خبرائنا المعتمدين.' 
                : 'Schedule a free on-site survey, CAD shop drawings review, and tailored proposal with our engineers.'}
            </p>
            <div className="smart-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                {lang === 'ar' ? 'طلب معاينة هندسية مجانية' : 'Book Free Site Survey'} <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/201093706027" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}>
                {lang === 'ar' ? 'محادثة هندسية عبر واتساب' : 'Chat with an Engineer'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
