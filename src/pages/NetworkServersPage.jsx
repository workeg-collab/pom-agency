import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Server, 
  Network, 
  ShieldCheck, 
  HardDrive, 
  Lock, 
  Wifi, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Globe,
  Activity,
  Zap,
  Layers,
  Database,
  Terminal,
  Radio,
  Sliders,
  Award,
  Headphones,
  Building2,
  Monitor
} from 'lucide-react';
import './NetworkServersPage.css';

export default function NetworkServersPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('hypervisor');

  const coreModules = [
    {
      icon: Server,
      title: lang === 'ar' ? 'إعداد الدليل النشط والنطاق (Active Directory)' : 'Active Directory & Domain Control',
      desc: lang === 'ar' 
        ? 'إدارة مركزية لجميع مستخدمي وأجهزة المؤسسة، تطبيق سياسات الأمان GPO، والتحقق الأحادي Single Sign-On.'
        : 'Enterprise Windows Server Domain Controller, GPO security policies, and centralized LDAP/SSO authentication.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'الجدران النارية والفايروول (Fortinet / Sophos)' : 'Next-Gen Firewalls & Perimeter Security',
      desc: lang === 'ar'
        ? 'تأمين محيط الشبكة بأجهزة فورتينت وسوفوس لمنع الاختراقات IPS/IDS وتصفية محتوى الويب وحظر التهديدات.'
        : 'Enterprise NGFW deployment, Intrusion Prevention (IPS/IDS), deep SSL inspection, and multi-branch security.'
    },
    {
      icon: Cpu,
      title: lang === 'ar' ? 'السيرفرات الافتراضية (VMware / Proxmox)' : 'Hypervisor Virtualization Clusters',
      desc: lang === 'ar'
        ? 'تقسيم السيرفرات الفيزيائية إلى بيئات افتراضية مجمعة High Availability مع دعم الترحيل الحي Live Migration.'
        : 'High-availability hypervisor clustering, automated resource balancing, and instantaneous VM failover.'
    },
    {
      icon: HardDrive,
      title: lang === 'ar' ? 'وحدات التخزين الشبكي والسحابي (NAS / SAN)' : 'Enterprise NAS / SAN Storage & RAID',
      desc: lang === 'ar'
        ? 'منظومات تخزين Synology / TrueNAS فائقة السرعة مع مصفوفات RAID ونسخ احتياطي يومي ضد فيروسات الفدية.'
        : 'High-throughput RAID arrays, immutable ransomware snapshots, and automated hybrid cloud disaster recovery.'
    },
    {
      icon: Wifi,
      title: lang === 'ar' ? 'شبكات العمل عن بُعد والربط البيني (VPN)' : 'Site-to-Site & Remote Access VPN',
      desc: lang === 'ar'
        ? 'ربط الفروع البعيدة والمصانع بأنفاق IPsec مشفرة وتوفير وصول آمن وموثوق للموظفين من أي مكان.'
        : 'Hardware-accelerated site-to-site IPsec tunnels and zero-trust remote employee access with MFA.'
    },
    {
      icon: Network,
      title: lang === 'ar' ? 'سويتشات وتوجيه سيسكو (Cisco Catalyst)' : 'Cisco Enterprise Switching & Routing',
      desc: lang === 'ar'
        ? 'بناء شبكات Layer 3 مع تقسيم الفروع VLANs، عزل حركة الكاميرات والـ VoIP، وضمان أقصى سرعة نقل.'
        : 'Core & Distribution Layer 3 switching, VLAN segmentation, STP loop prevention, and 10G SFP+ uplinks.'
    },
    {
      icon: Radio,
      title: lang === 'ar' ? 'شبكات الواي فاي المؤسسية (Wi-Fi 6/7 Mesh)' : 'High-Density Enterprise Wi-Fi 6/7',
      desc: lang === 'ar'
        ? 'تغطية لاسلكية شاملة بدون انقطاع مع دعم التجوال السلس Seamless Roaming وعزل شبكة الضيوف.'
        : 'Ubiquiti UniFi & Aruba high-density APs, zero-handoff roaming, captive guest portals, and RF optimization.'
    },
    {
      icon: Layers,
      title: lang === 'ar' ? 'تمديد كابلات الألياف والـ CAT6 المعتمدة' : 'Structured Optical Fiber & CAT6A',
      desc: lang === 'ar'
        ? 'تمديد كابلات الشبكات المعتمدة، لحام الفيبر بأجهزة Fusion Splicing، وتنظيم كبائن السيرفرات Racks.'
        : 'Fluke-certified CAT6/CAT6A copper drops, optical fiber backbone splicing, and organized patch panel racks.'
    }
  ];

  const whyChoosePom = [
    {
      icon: Award,
      title: lang === 'ar' ? 'مهندسو شبكات وسيرفرات معتمدون' : 'Cisco & Fortinet Certified Engineers',
      desc: lang === 'ar' ? 'فريق يحمل شهادات CCNA, CCNP, NSE4 مع خبرة طويلة في تجهيز داتا سنتر كبرى المؤسسات.' : 'Certified infrastructure specialists with proven multi-site enterprise and data center deployment track record.'
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'جاهزية شبكية 99.99% بدون انقطاع' : '99.99% Network Uptime SLA',
      desc: lang === 'ar' ? 'تصميم شبكات ذو مسارات مزدوجة Redundant Links ومولدات طاقة UPS لضمان عدم توقف العمل.' : 'Dual-homed link redundancy, multi-WAN load balancing, and uninterruptible power UPS protection.'
    },
    {
      icon: Lock,
      title: lang === 'ar' ? 'أمان سيبراني ومنع الاختراق' : 'Zero-Trust Perimeter Defense',
      desc: lang === 'ar' ? 'عزل كامل للشبكات الحساسة، فحص الحزم العميقة، وحماية السيرفرات من هجمات DDoS والفدية.' : 'Next-gen threat intelligence, endpoint detection and response (EDR), and micro-segmented networks.'
    },
    {
      icon: Headphones,
      title: lang === 'ar' ? 'مراقبة حية ودعم فني 24/7' : '24/7 NOC Proactive Monitoring',
      desc: lang === 'ar' ? 'مركز عمليات الشبكة (NOC) يراقب استقرار أجهزتك وسرعات الخطوط والتدخل الفوري عند أي طارئ.' : 'Continuous telemetry monitoring, SNMP alerting, and guaranteed 15-minute emergency incident response.'
    }
  ];

  const infrastructureTiers = [
    {
      id: 'branch-infra',
      title: lang === 'ar' ? 'باقة شبكات الفروع والمكاتب' : 'Branch & Small Office Network',
      subtitle: lang === 'ar' ? 'للشركات والمكاتب حتى 30 مستخدم' : 'Offices & Branches up to 30 Users',
      price: 2499.99,
      recommended: false,
      features: lang === 'ar' ? [
        'راوتر وسويتش مدار Cisco / Mikrotik',
        'جدار حماية فايروول وتشفير VPN',
        'شبكة واي فاي Wi-Fi 6 احترافية مع عزل الضيوف',
        'وحدة تخزين شبكي NAS مع نسخ احتياطي',
        'دعم فني ومراقبة عن بعد 24/7'
      ] : [
        'Managed Cisco / Mikrotik Switch & Router',
        'Next-Gen Firewall with Encrypted VPN',
        'High-Speed Wi-Fi 6 with Guest Isolation',
        'Enterprise NAS Network Backup Storage',
        '24/7 Remote Monitoring & Support SLA'
      ]
    },
    {
      id: 'enterprise-net-pro',
      title: lang === 'ar' ? 'باقة السيرفرات والشبكات المتقدمة' : 'Enterprise Infrastructure Pro',
      subtitle: lang === 'ar' ? 'للشركات المتوسطة والمتعددة الفروع' : 'Growing Medium Enterprises & Multi-Sites',
      price: 5999.99,
      recommended: true,
      features: lang === 'ar' ? [
        'سيرفر فيزيائي مخصص + بيئات VMware الافتراضية',
        'نظام Active Directory وإدارة مركزية للصلاحيات',
        'جدار حماية فورتينت Fortinet NGFW مع IPS/IDS',
        'ربط الفروع بأنفاق IPsec VPN فائق السرعة',
        'تخزين RAID مصفوفة سحابية مضادة للفدية',
        'زيارات صيانة ميدانية دورية ودعم NOC مخصص'
      ] : [
        'Dedicated Server + VMware Virtualization Cluster',
        'Active Directory Domain Controller & SSO',
        'Fortinet NGFW with Deep Packet Inspection',
        'Site-to-Site Fast IPsec VPN Branch Interconnect',
        'Immutable RAID Backup with Ransomware Shield',
        'On-Site Maintenance Visits & Dedicated NOC SLA'
      ]
    },
    {
      id: 'datacenter-holding',
      title: lang === 'ar' ? 'باقة الداتا سنتر والمؤسسات الكبرى' : 'Data Center & Holding Architecture',
      subtitle: lang === 'ar' ? 'للمصانع والشركات القابضة الكبرى' : 'Holdings, Multi-Floor HQ & Factories',
      price: 11999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'بناء وتجهيز غرفة سيرفرات Data Center متكاملة',
        'كابينة سيرفرات 42U مع كابلات ألياف ضوئية 10G',
        'سيرفرات فائقة التوافر High Availability Cluster',
        'منظومة موازنة الحمل Multi-WAN Failover',
        'أنظمة تبريد ذكية وإطفاء تلقائي للكبائن',
        'مهندس بنية تحتية مخصص ومدير حساب 24/7'
      ] : [
        'Full Data Center Room Engineering & Buildout',
        '42U Server Rack with 10G Optical Fiber Uplinks',
        'High Availability Cluster with Instant Node Failover',
        'Multi-WAN Load Balancing & BGP Routing',
        'Precision Cooling & Automated Rack Fire Suppression',
        'Dedicated Infrastructure Lead & 24/7 Priority NOC'
      ]
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: lang === 'ar' ? 'المعاينة الميدانية وفحص الموقع' : 'Site Survey & Infrastructure Audit',
      desc: lang === 'ar' 
        ? 'زيارة مهندسينا الميدانية لفحص أجهزة الشبكة الحالية، قياس مسافات الكابلات، وتحديد متطلبات السيرفرات.' 
        : 'On-site technical audit examining existing switches, cable runs, rack space, and server workload demands.'
    },
    {
      num: '02',
      title: lang === 'ar' ? 'التصميم الهندسي ومخطط التوبولوجي' : 'Network Topology & Hardware Spec',
      desc: lang === 'ar' 
        ? 'رسم مخطط الشبكة (Network Topology)، اختيار السيرفرات وأجهزة الفايروول، وضبط خريطة الـ IP و الـ VLANs.' 
        : 'Engineering detailed network blueprints, selecting Cisco/Fortinet hardware, and planning IP/VLAN subnets.'
    },
    {
      num: '03',
      title: lang === 'ar' ? 'التركيب والتمديد وتجهيز الكبائن' : 'Deployment, Cabling & Rack Mount',
      desc: lang === 'ar' 
        ? 'تمديد كابلات الـ CAT6A والألياف، تنظيم كبائن السيرفرات Racks، تثبيت السيرفرات وإعداد البرمجيات.' 
        : 'Structured cabling installation, patch panel termination, rack mounting, and OS/Hypervisor deployment.'
    },
    {
      num: '04',
      title: lang === 'ar' ? 'اختبارات الأداء وتسليم التوثيق' : 'Penetration Testing & Go-Live',
      desc: lang === 'ar' 
        ? 'اختبار سرعات النقل بأجهزة Fluke، فحص أمان الفايروول، وتسليم توثيق كامل للشبكة مع تدريب الفريق.' 
        : 'Fluke cable certification, firewall penetration tests, network documentation handover, and staff orientation.'
    }
  ];

  return (
    <div className="network-page">
      {/* 1. Top Hero Banner */}
      <section className="net-hero-section">
        <div className="container net-hero-grid">
          <div className="net-hero-text">
            <div className="badge">
              <Network size={14} /> {lang === 'ar' ? 'هندسة الشبكات وتجهيز السيرفرات المؤسسية' : 'Enterprise Network & Server Architecture'}
            </div>
            <h1 className="net-hero-title">
              {lang === 'ar' 
                ? 'بنية تحتية متطورة للشبكات وسيرفرات المؤسسات' 
                : 'High-Performance Enterprise Networks & Server Infrastructure'}
            </h1>
            <p className="net-hero-subtitle">
              {lang === 'ar'
                ? 'نقدم حلولاً هندسية متكاملة لتجهيز غرف السيرفرات (Data Centers)، أنظمة الدليل النشط (Active Directory)، الجدران النارية الفايروول (Fortinet / Sophos)، وسيرفرات التخزين والنسخ الاحتياطي بأعلى معايير الاستقرار والأمان.'
                : 'End-to-end network architecture and data center engineering: Active Directory domain setups, Fortinet & Sophos next-gen firewalls, VMware virtualization, NAS/SAN storage arrays, and optical fiber backbones with 99.99% uptime.'}
            </p>

            <div className="hero-partner-badge">
              <ShieldCheck size={18} color="#1388fd" />
              <span>{lang === 'ar' ? 'شريك سيسكو وفورتينت معتمد - ضمان استقرار 99.99%' : 'Certified Cisco & Fortinet Stack - 99.99% Network Uptime'}</span>
            </div>

            <div className="net-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {lang === 'ar' ? 'طلب معاينة واستشارة مجانية' : 'Request Free Site Assessment'} <ArrowRight size={18} />
              </Link>
              <a href="#servers" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات البنية التحتية' : 'Explore Infrastructure Tiers'}
              </a>
            </div>
          </div>

          <div className="net-hero-visual">
            <div className="net-img-wrapper">
              <img 
                src="/assets/Post-2.jpg" 
                alt="High Performance Enterprise Server Room & Rack" 
                className="net-hero-img" 
              />
              <div className="net-float-card net-float-card-1">
                <div className="net-float-icon" style={{ background: 'rgba(19, 136, 253, 0.1)', color: '#1388fd' }}>
                  <Zap size={20} />
                </div>
                <div className="net-float-text">
                  <strong>{lang === 'ar' ? 'سرعات 10 Gbps Fiber' : '10 Gbps Fiber Core'}</strong>
                  <span>{lang === 'ar' ? 'نقل فائق السرعة بدون تأخير' : 'Ultra-Low Latency'}</span>
                </div>
              </div>
              <div className="net-float-card net-float-card-2">
                <div className="net-float-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <Lock size={20} />
                </div>
                <div className="net-float-text">
                  <strong>{lang === 'ar' ? 'حماية فايروول متقدمة' : 'Zero-Trust Security'}</strong>
                  <span>{lang === 'ar' ? 'حظر الاختراقات والهجمات' : 'Intrusion Prevention Active'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats & Trust Bar */}
      <section className="net-stats-section">
        <div className="container">
          <div className="net-stats-grid">
            <div className="net-stat-item">
              <span className="net-stat-num">99.99%</span>
              <span className="net-stat-label">{lang === 'ar' ? 'جاهزية واستقرار الشبكة' : 'Network Uptime SLA'}</span>
            </div>
            <div className="net-stat-item">
              <span className="net-stat-num">10 Gbps</span>
              <span className="net-stat-label">{lang === 'ar' ? 'سرعة خطوط الفايبر المركزية' : 'Fiber Backbone Speed'}</span>
            </div>
            <div className="net-stat-item">
              <span className="net-stat-num">100+</span>
              <span className="net-stat-label">{lang === 'ar' ? 'غرفة سيرفرات وداتا سنتر' : 'Data Centers Deployed'}</span>
            </div>
            <div className="net-stat-item">
              <span className="net-stat-num">{"< 15 min"}</span>
              <span className="net-stat-label">{lang === 'ar' ? 'زمن الاستجابة للطوارئ' : 'Emergency Response Time'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Network Topology & Server Health Console */}
      <section className="net-console-section">
        <div className="container">
          <div className="badge-center">
            <Activity size={14} /> {lang === 'ar' ? 'شاشات مراقبة البنية التحتية' : 'Live Infrastructure Telemetry Console'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'مراقبة حية لأداء السيرفرات وحركة الشبكة لحظياً' : 'Real-Time Server Load, Throughput & Security Monitoring'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تتيح لك منصات المراقبة المتقدمة رؤية شاملة لصحة المعالجات، الذاكرة، حركة المرور الشبكية، وحالة الفايروول على مدار الساعة.' 
              : 'End-to-end visibility into CPU/RAM loads, storage pool health, bandwidth spikes, and perimeter firewall defense.'}
          </p>

          {/* Tab Switcher */}
          <div className="net-tab-buttons">
            <button 
              className={`net-tab-btn ${activeTab === 'hypervisor' ? 'active' : ''}`}
              onClick={() => setActiveTab('hypervisor')}
            >
              <Cpu size={16} />
              <span>{lang === 'ar' ? 'أداء السيرفرات والبيئات الافتراضية' : 'Hypervisors & Server Load'}</span>
            </button>
            <button 
              className={`net-tab-btn ${activeTab === 'bandwidth' ? 'active' : ''}`}
              onClick={() => setActiveTab('bandwidth')}
            >
              <Zap size={16} />
              <span>{lang === 'ar' ? 'حركة المرور وسرعات الشبكة' : 'Bandwidth & Traffic Flow'}</span>
            </button>
            <button 
              className={`net-tab-btn ${activeTab === 'firewall' ? 'active' : ''}`}
              onClick={() => setActiveTab('firewall')}
            >
              <ShieldCheck size={16} />
              <span>{lang === 'ar' ? 'الأمن السيبراني والجدران النارية' : 'Next-Gen Firewall & VPN'}</span>
            </button>
            <button 
              className={`net-tab-btn ${activeTab === 'storage' ? 'active' : ''}`}
              onClick={() => setActiveTab('storage')}
            >
              <HardDrive size={16} />
              <span>{lang === 'ar' ? 'وحدات التخزين والنسخ الاحتياطي' : 'NAS Storage & Disaster Recovery'}</span>
            </button>
          </div>

          {/* Console Mockup Window */}
          <div className="net-console-window">
            <div className="net-window-header">
              <div className="net-window-dots">
                <div className="net-window-dot" style={{ background: '#ef4444' }} />
                <div className="net-window-dot" style={{ background: '#f59e0b' }} />
                <div className="net-window-dot" style={{ background: '#10b981' }} />
              </div>
              <div className="net-window-title">
                <Terminal size={15} />
                <span>POM Enterprise NOC Center &bull; {lang === 'ar' ? 'لوحة مراقبة السيرفرات المركزية' : 'Central Network Operations Console'}</span>
              </div>
              <span className="net-window-badge">{lang === 'ar' ? 'النظام متصل ومستقر (100% OK)' : 'All Nodes Healthy'}</span>
            </div>

            <div className="net-window-body">
              {/* Tab 1: Hypervisor */}
              {activeTab === 'hypervisor' && (
                <div>
                  <div className="net-kpis-grid">
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'سيرفرات الـ Hypervisor النشطة' : 'Active Hypervisors'}</span>
                      <span className="net-kpi-value" style={{ color: '#34d399' }}>3 Nodes (Cluster)</span>
                      <span className="net-kpi-badge-gain"><CheckCircle2 size={14} /> {lang === 'ar' ? 'تبديل آلي عند الأعطال HA' : 'High Availability Active'}</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'إجمالي السيرفرات الافتراضية (VMs)' : 'Active Virtual Machines'}</span>
                      <span className="net-kpi-value">28 VMs</span>
                      <span className="net-kpi-badge-neutral"><Cpu size={14} /> {lang === 'ar' ? 'توازن أحمال ذكي' : 'DRS Load Balanced'}</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'استهلاك المعالجات (CPU Load)' : 'Cluster CPU Utilization'}</span>
                      <span className="net-kpi-value">22.4%</span>
                      <span className="net-kpi-badge-gain"><Activity size={14} /> {lang === 'ar' ? 'أداء فائق ومستقر' : 'Optimal Headroom'}</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'الذاكرة العشوائية RAM' : 'Memory Allocated'}</span>
                      <span className="net-kpi-value" style={{ color: '#38bdf8' }}>384 GB / 512 GB</span>
                      <span className="net-kpi-badge-neutral"><Sliders size={14} /> {lang === 'ar' ? 'حماية من الفيض' : '75% Capacity'}</span>
                    </div>
                  </div>

                  <div className="net-console-row">
                    <div className="net-main-chart-box">
                      <div className="net-chart-header">
                        <h4>{lang === 'ar' ? 'مستوى الحمل على السيرفرات الفيزيائية الثلاثة' : 'Physical Server Compute Nodes Load'}</h4>
                        <span className="net-window-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>VMware vSphere 8.0</span>
                      </div>
                      <div className="net-bar-graph-container">
                        <div className="net-bar-col">
                          <div className="net-bar-stick stick-blue" style={{ height: '35%' }} />
                          <span className="net-bar-label">Node-01 (DC & DB)</span>
                        </div>
                        <div className="net-bar-col">
                          <div className="net-bar-stick stick-green" style={{ height: '28%' }} />
                          <span className="net-bar-label">Node-02 (ERP & Web)</span>
                        </div>
                        <div className="net-bar-col">
                          <div className="net-bar-stick stick-purple" style={{ height: '18%' }} />
                          <span className="net-bar-label">Node-03 (Backup & Files)</span>
                        </div>
                      </div>
                    </div>

                    <div className="net-side-panel">
                      <h4>{lang === 'ar' ? 'صحة الخدمات الحيوية' : 'Critical Infrastructure Health'}</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <span>Active Directory & DNS</span>
                          <strong style={{ color: '#34d399' }}>ONLINE (0 ms)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <span>Odoo ERP Database Node</span>
                          <strong style={{ color: '#34d399' }}>RUNNING (99.99%)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <span>Mail & Exchange Relay</span>
                          <strong style={{ color: '#34d399' }}>SYNCED (OK)</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <span>UPS Power & Battery</span>
                          <strong style={{ color: '#38bdf8' }}>100% (AC Grid Normal)</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Bandwidth */}
              {activeTab === 'bandwidth' && (
                <div>
                  <div className="net-kpis-grid">
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'سرعة التبديل بالسويتشات المركزية' : 'Core Switching Capacity'}</span>
                      <span className="net-kpi-value" style={{ color: '#38bdf8' }}>1.28 Tbps</span>
                      <span className="net-kpi-badge-gain"><CheckCircle2 size={14} /> Cisco Catalyst Layer 3</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'معدل نقل البيانات الحالي (LAN)' : 'Internal LAN Throughput'}</span>
                      <span className="net-kpi-value">4.8 Gbps</span>
                      <span className="net-kpi-badge-neutral"><Activity size={14} /> 10G SFP+ Uplinks</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'زمن الاستجابة المحلي (Latency)' : 'Average Local Latency'}</span>
                      <span className="net-kpi-value" style={{ color: '#34d399' }}>0.4 ms</span>
                      <span className="net-kpi-badge-gain"><Zap size={14} /> Zero Packet Drop</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'الأجهزة المتصلة بالشبكة' : 'Active Connected Endpoints'}</span>
                      <span className="net-kpi-value">186 Devices</span>
                      <span className="net-kpi-badge-neutral"><Globe size={14} /> Isolated VLANs</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Firewall & Security */}
              {activeTab === 'firewall' && (
                <div>
                  <div className="net-kpis-grid">
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'حالة الجدار الناري Fortinet NGFW' : 'Perimeter Firewall Status'}</span>
                      <span className="net-kpi-value" style={{ color: '#34d399' }}>ARMED & ACTIVE</span>
                      <span className="net-kpi-badge-gain"><ShieldCheck size={14} /> IPS/IDS Engine Running</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'التهديدات والهجمات المحظورة (اليوم)' : 'Blocked Cyber Attacks (24h)'}</span>
                      <span className="net-kpi-value" style={{ color: '#f59e0b' }}>1,842 Threats</span>
                      <span className="net-kpi-badge-gain" style={{ color: '#34d399' }}><CheckCircle2 size={14} /> 100% Mitigated</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'أنفاق الـ VPN بين الفروع' : 'Site-to-Site IPsec VPN'}</span>
                      <span className="net-kpi-value">6 / 6 Tunnels</span>
                      <span className="net-kpi-badge-gain"><Lock size={14} /> AES-256 Encrypted</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'تصفية المحتوى وفحص SSL' : 'Deep SSL Inspection'}</span>
                      <span className="net-kpi-value" style={{ color: '#38bdf8' }}>ENABLED</span>
                      <span className="net-kpi-badge-neutral"><ShieldCheck size={14} /> Anti-Botnet Active</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Storage */}
              {activeTab === 'storage' && (
                <div>
                  <div className="net-kpis-grid">
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'إجمالي السعة التخزينية NAS' : 'Total NAS Storage Pool'}</span>
                      <span className="net-kpi-value" style={{ color: '#38bdf8' }}>64 TB</span>
                      <span className="net-kpi-badge-gain"><HardDrive size={14} /> RAID-6 Redundant</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'حالة النسخ الاحتياطي اليومي' : 'Last Daily Snapshot'}</span>
                      <span className="net-kpi-value" style={{ color: '#34d399' }}>COMPLETED</span>
                      <span className="net-kpi-badge-gain"><CheckCircle2 size={14} /> 03:00 AM (Verified)</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'الحماية من فيروسات الفدية' : 'Immutable Backup Lock'}</span>
                      <span className="net-kpi-value" style={{ color: '#34d399' }}>PROTECTED</span>
                      <span className="net-kpi-badge-gain"><Lock size={14} /> WORM Anti-Ransomware</span>
                    </div>
                    <div className="net-kpi-card">
                      <span className="net-kpi-title">{lang === 'ar' ? 'زمن استعادة البيانات (RTO)' : 'Recovery Time Objective'}</span>
                      <span className="net-kpi-value">{"< 30 Mins"}</span>
                      <span className="net-kpi-badge-neutral"><Zap size={14} /> Instant Failback</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Feature Breakdown with Images */}
      {/* Section A: Server Rack & Data Center Build */}
      <section className="net-visual-split-section">
        <div className="container net-visual-split-grid">
          <div className="net-split-img-card">
            <img 
              src="/assets/Post-1.jpg" 
              alt="Enterprise Data Center Rack Architecture" 
            />
          </div>
          <div className="net-split-content">
            <div className="badge"><Server size={14} /> {lang === 'ar' ? 'تجهيز كبائن وداتا سنتر السيرفرات' : 'Data Center & Rack Buildout'}</div>
            <h3>
              {lang === 'ar' 
                ? 'تجهيز كبائن وسيرفرات المؤسسات بأعلى معايير التنظيم والكفاءة' 
                : 'Enterprise Server Racks Engineered for Maximum Efficiency & Uptime'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'ننفذ بناء غرف السيرفرات والكبائن المركزية وفق المعايير القياسية العالمية: كابلات منظمة ومرقمة بدقة، وحدات توزيع طاقة ذكية (PDU)، بطاريات احتياطية (UPS)، وأنظمة مراقبة درجات الحرارة والرطوبة لضمان استقرار العمل بنسبة 100%.'
                : 'We design and construct turn-key server rooms and high-density 42U racks: precision labeled patch panels, intelligent power distribution (PDU), redundant uninterruptible power (UPS), and climate telemetry.'}
            </p>
            <ul className="net-split-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تنظيم وترقيم كابلات الشبكة بالكامل لسهولة الصيانة والتشخيص' : 'Color-coded, structured cable management with clear port mapping'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'سيرفرات فائقة الأداء من Dell PowerEdge و HPE ProLiant' : 'Enterprise-grade Dell PowerEdge & HPE ProLiant server hardware'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تأمين مسارات تبريد ممرات الهواء البارد والساخن' : 'Optimized airflow design and rack temperature monitoring'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              {lang === 'ar' ? 'طلب فحص وتجهيز غرفة السيرفرات' : 'Request Server Room Buildout'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section B: Cabling, Switching & Multi-Branch VPN */}
      <section className="net-visual-split-section bg-surface">
        <div className="container net-visual-split-grid reverse">
          <div className="net-split-img-card">
            <img 
              src="/assets/Post-3.jpg" 
              alt="Structured Cabling & Multi-Branch VPN Interconnect" 
            />
          </div>
          <div className="net-split-content">
            <div className="badge"><Network size={14} /> {lang === 'ar' ? 'ربط الفروع وشبكات الألياف' : 'Multi-Site Optical Backbone'}</div>
            <h3>
              {lang === 'ar' 
                ? 'ربط فروع شركتك والمصانع بأنفاق VPN مشفرة وشبكات فايبر فائقة السرعة' 
                : 'Connect Multi-Branch Offices & Factories with Ultra-Fast Encrypted VPN'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'تمتع ببيئة عمل موحدة وسريعة بين المقر الرئيسي وجميع الفروع والمستودعات. نربط أنظمتك المحاسبية (Odoo ERP)، كاميرات المراقبة، وأنظمة الهواتف IP-PBX في شبكة خاصة مشفرة مع عزل كامل لحركة المرور وحماية من انقطاع الإنترنت عبر خطوط Backup مزدوجة.'
                : 'Unify your business operations across headquarters, factories, and remote branches. Connect ERP databases, IP surveillance, and VoIP telephony across dedicated encrypted IPsec tunnels with multi-WAN failover.'}
            </p>
            <ul className="net-split-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تقسيم الشبكة VLANs لحماية أنظمة المحاسبة والبيانات الحساسة' : 'VLAN micro-segmentation isolating financial databases & cameras'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تحويل تلقائي للإنترنت الاحتياطي Multi-WAN عند انقطاع الخط الرئيسي' : 'Automated Multi-WAN link failover ensuring zero business downtime'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'وصول آمن للموظفين عن بُعد مع التحقق الثنائي MFA' : 'Zero-trust remote workforce access with multi-factor authentication'}</li>
            </ul>
            <a href="#servers" className="btn btn-secondary">
              {lang === 'ar' ? 'عرض باقات الشبكات والأسعار' : 'Explore Network Packages'}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Core Infrastructure Capabilities Grid */}
      <section className="section">
        <div className="container">
          <div className="badge-center">
            <Sparkles size={14} /> {lang === 'ar' ? 'خدمات البنية التحتية الشاملة' : 'Core Network & Server Capabilities'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'حلول هندسية متكاملة لشبكات وسيرفرات الشركات' : 'Engineered for Scale, Security & Uncompromised Reliability'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نغطي كافة متطلبات البنية التحتية لتكنولوجيا المعلومات من الكابلات الفيزيائية وحتى السيرفرات السحابية المتقدمة.' 
              : 'End-to-end IT infrastructure mastery from physical structured copper to advanced cloud virtualization.'}
          </p>

          <div className="net-modules-grid">
            {coreModules.map((mod, idx) => (
              <div key={idx} className="net-module-card">
                <div className="net-module-top">
                  <div className="net-icon-box">
                    <mod.icon size={24} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                </div>
                <div className="net-module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'معتمد هندسياً' : 'Enterprise Standard'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose POM Infrastructure */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Building2 size={14} /> {lang === 'ar' ? 'لماذا تختار POM لتنفيذ شبكاتك؟' : 'Why Engineer with POM?'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'خبرة هندسية موثوقة تضمن استقرار أعمالك' : 'Proven Engineering Rigor Behind Every Cable & Server'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نجمع بين أحدث أجهزة سيسكو وفورتينت مع أفضل ممارسات الحماية والمراقبة الاستباقية لمنع الأعطال قبل حدوثها.' 
              : 'Deploying tier-1 Cisco & Fortinet hardware with proactive 24/7 telemetry to eliminate downtime before it occurs.'}
          </p>

          <div className="net-why-grid">
            {whyChoosePom.map((item, idx) => (
              <div key={idx} className="net-why-card">
                <div className="net-why-icon-box">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Infrastructure Packages & Pricing */}
      <section className="section" id="servers">
        <div className="container">
          <div className="badge-center">
            <Server size={14} /> {lang === 'ar' ? 'باقات وحلول البنية التحتية' : 'Infrastructure Tiers & Pricing'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر باقة الشبكات والسيرفرات المناسبة لمؤسستك' : 'Select the Ideal Infrastructure Tier for Your Needs'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'باقات شاملة للأجهزة، الإعداد الهندسي، الصيانة الميدانية، والدعم الفني على مدار الساعة.' 
              : 'Transparent infrastructure packages covering enterprise hardware, engineering deployment, and SLA support.'}
          </p>

          <div className="net-pricing-grid">
            {infrastructureTiers.map((p) => (
              <div key={p.id} className={`net-pricing-card ${p.recommended ? 'recommended' : ''}`}>
                {p.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <div>
                  <h3 className="net-plan-title">{p.title}</h3>
                  <span className="net-plan-subtitle">{p.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{p.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="net-plan-features">
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
                      image: '/assets/Post-2.jpg'
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

      {/* 8. Implementation 4-Step Methodology */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Layers size={14} /> {lang === 'ar' ? 'منهجية التنفيذ والتركيب' : 'Engineering Rollout Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات مدروسة لتنفيذ بنية تحتية آمنة ومستقرة' : '4-Step Proven Methodology for Flawless Go-Live'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'نتبع مسار عمل هندسي دقيق يبدأ من فحص الموقع وحتى التسليم النهائي واختبارات الأمان دون أي توقف لسير العمل.' 
              : 'A structured roadmap from initial site survey to Fluke cable testing and live failover verification.'}
          </p>

          <div className="net-workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="net-workflow-card">
                <span className="net-workflow-step-num">{step.num}</span>
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
          <div className="net-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'هل تحتاج إلى تقييم شامل لشبكات وسيرفرات شركتك؟' 
                : 'Need a Full Infrastructure Assessment & Server Audit?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على معاينة ميدانية مجانية من مهندسينا المعتمدين لتحديد نقاط الضعف وتقديم تقرير هندسي متكامل.' 
                : 'Schedule a free on-site survey and network topology review with our certified Cisco & Fortinet engineers.'}
            </p>
            <div className="net-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                {lang === 'ar' ? 'طلب معاينة ميدانية مجانية' : 'Book Free Site Survey'} <ArrowRight size={18} />
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
