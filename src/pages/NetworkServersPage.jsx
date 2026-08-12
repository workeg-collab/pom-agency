import React from 'react';
import { Link } from 'react-router-dom';
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
  Globe 
} from 'lucide-react';
import './NetworkServersPage.css';

export default function NetworkServersPage() {
  const { t, lang } = useLanguage();

  const features = [
    {
      icon: Server,
      title: lang === 'ar' ? 'إعداد النطاق والدليل النشط (Active Directory)' : 'Active Directory & Domain Setup',
      desc: lang === 'ar' 
        ? 'إدارة صلاحيات المستخدمين، النطاقات المركزية، وقواعد الأمان لجميع أجهزة وموظفي الشركة.'
        : 'Centralized user access control, group policies, domain security, and single sign-on authentication.'
    },
    {
      icon: HardDrive,
      title: lang === 'ar' ? 'وحدات التخزين السحابي والنسخ الاحتياطي' : 'Data Storage & NAS Backup',
      desc: lang === 'ar'
        ? 'حلول التخزين الشبكي NAS، حماية الملفات من الفيروسات، والنسخ الاحتياطي التلقائي اليومي.'
        : 'Enterprise Network Attached Storage (NAS), automated cloud backups, and disaster recovery.'
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'أمان الشبكات والجدران النارية (Firewall)' : 'Network Security & Firewalls',
      desc: lang === 'ar'
        ? 'تركيب وتخصيص أجهزة الفايروول لحظر الاختراقات، تصفية المحتوى، وتأمين اتصال المؤسسة.'
        : 'Fortinet and Sophos hardware firewalls, intrusion prevention systems, and web filtering.'
    },
    {
      icon: Cpu,
      title: lang === 'ar' ? 'السيرفرات الافتراضية (Virtualization)' : 'Server Virtualization (VMware/Proxmox)',
      desc: lang === 'ar'
        ? 'تقسيم السيرفرات الفيزيائية إلى بيئات افتراضية متعددة لتقليل التكلفة وزيادة الكفاءة.'
        : 'Optimizing server hardware through VMware vSphere and Proxmox hypervisor deployments.'
    },
    {
      icon: Wifi,
      title: lang === 'ar' ? 'شبكات العمل عن بُعد (VPN)' : 'VPN & Remote Work Setup',
      desc: lang === 'ar'
        ? 'ربط الفروع البعيدة وتوفير اتصالات VPN مشفرة وآمنة للموظفين للعمل من أي مكان.'
        : 'Encrypted site-to-site and remote user VPN connections ensuring secure off-site access.'
    },
    {
      icon: Network,
      title: lang === 'ar' ? 'تمديد الكابلات الهيكلية (CAT6 & Fiber)' : 'Structured Fiber & CAT6 Cabling',
      desc: lang === 'ar'
        ? 'تمديد كابلات الألياف الضوئية والـ CAT6 المعتمدة وتنظيم كبائن ومعدات السيرفرات.'
        : 'Certified CAT6/CAT6A copper and optical fiber cabling, patch paneling, and rack organization.'
    }
  ];

  const serverTypes = [
    {
      title: lang === 'ar' ? 'سيرفرات التحكم بالنطاق (Domain Controller)' : 'Domain Controller Servers',
      desc: lang === 'ar' ? 'سيرفرات فائقة السرعة مخصصة لإدارة حسابات المستخدمين وصلاحيات الدخول لشبكة الشركة.' : 'Dedicated high-speed Windows Server nodes managing authentication and domain security.',
      specs: lang === 'ar' ? ['إدارة الصلاحيات', 'النسخ التناظري', 'DNS/DHCP'] : ['User Rights', 'DNS/DHCP', 'Redundant DC']
    },
    {
      title: lang === 'ar' ? 'سيرفرات التخزين الشبكي والسحابي (NAS Storage)' : 'NAS & Cloud Storage Servers',
      desc: lang === 'ar' ? 'سيرفرات مجهزة بأقراص RAID فائقة السعة لتخزين ملفات الشركة والنسخ الاحتياطي التلقائي.' : 'Enterprise RAID storage arrays providing high-throughput file sharing and instant backups.',
      specs: lang === 'ar' ? ['تخزين RAID', 'نسخ تلقائي', 'حماية المشفرات'] : ['RAID Array', 'Auto Backup', 'Ransomware Shield']
    },
    {
      title: lang === 'ar' ? 'أجهزة الجدران النارية والفايروول (Firewall Appliances)' : 'Firewall & Gateway Appliances',
      desc: lang === 'ar' ? 'أجهزة حماية شبكات متطورة لمنع الاختراقات وتشفير اتصالات الفروع بعالية الدقة.' : 'Next-Generation Firewalls (NGFW) protecting network perimeters from external threats.',
      specs: lang === 'ar' ? ['تشفير VPN', 'تصفية المواقع', 'حظر الاختراق'] : ['VPN Tunnel', 'Content Filter', 'IPS / IDS']
    }
  ];

  return (
    <div className="network-page">
      {/* Top Hero Banner */}
      <section className="network-hero-section">
        <div className="container grid-2-col align-center">
          <div className="network-hero-text">
            <div className="badge"><Network size={14} /> {t('networkBadge')}</div>
            <h1 className="network-hero-title">{t('networkHeroTitle')}</h1>
            <p className="page-header-sub text-left mb-4">
              {t('networkHeroSub')}
            </p>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('requestNetworkConsultation')} <ArrowRight size={18} />
              </Link>
              <a href="#servers" className="btn btn-secondary">
                {t('exploreServerSolutions')}
              </a>
            </div>
          </div>
          <div className="network-hero-visual">
            <div className="network-big-img-box">
              <img 
                src="/assets/Post-2.jpg" 
                alt="High Performance Enterprise Network Server Room" 
                className="network-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Infrastructure Services */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('coreNetworkServices')}</div>
          <h2 className="section-title">{t('everythingNetwork')}</h2>
          <p className="section-subtitle">
            {t('everythingNetworkSub')}
          </p>

          <div className="grid-3-col">
            {features.map((f, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <f.icon size={26} className="pillar-icon" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'خدمة معتمدة' : 'Enterprise Certified'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Architectures */}
      <section className="section" id="servers">
        <div className="container">
          <div className="badge-center"><Server size={14} /> {t('serverArchitectures')}</div>
          <h2 className="section-title">{t('serverArchitectures')}</h2>
          <p className="section-subtitle">
            {t('serverArchitecturesSub')}
          </p>

          <div className="grid-3-col">
            {serverTypes.map((st, idx) => (
              <div key={idx} className="card server-card">
                <div className="server-icon-box">
                  <Server size={32} className="text-primary" />
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
                <div className="server-specs-row flex-center gap-2 mt-3">
                  {st.specs.map((sp, i) => (
                    <span key={i} className="tech-badge">{sp}</span>
                  ))}
                </div>
                <Link to="/mail-professional" className="btn btn-outline full-width mt-4">
                  {t('requestQuote')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Network Blueprint CTA */}
      <section className="section bg-surface text-center">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('customBlueprintBadge')}</div>
          <h2>{t('needCustomBlueprint')}</h2>
          <p className="section-subtitle">{t('needCustomBlueprintSub')}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('requestNetworkConsultation')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
