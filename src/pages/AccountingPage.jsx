import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Calculator, 
  FileSpreadsheet, 
  Receipt, 
  Boxes, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Layers, 
  Briefcase 
} from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();

  const capabilities = [
    {
      icon: FileSpreadsheet,
      title: lang === 'ar' ? 'دفتر الأستاذ والتقارير المالية' : 'General Ledger & Financial Reporting',
      desc: lang === 'ar' 
        ? 'متابعة الدفاتر المحاسبية، القوائم المالية المعتمدة، وميزانية العمومية بضغط زر واحدة.'
        : 'Automated trial balance, balance sheets, profit & loss, and audit-ready financial statements.'
    },
    {
      icon: Receipt,
      title: lang === 'ar' ? 'منظومة الفاتورة الإلكترونية' : 'Electronic Invoicing (E-Invoice)',
      desc: lang === 'ar'
        ? 'ربط مباشر مع مصلحة الضرائب المصرية وإصدار الفواتير الإلكترونية المعتمدة طبقاً للقوانين.'
        : 'Full integration with ETA e-invoicing portal, automated tax codes, and QR digital signatures.'
    },
    {
      icon: Boxes,
      title: lang === 'ar' ? 'إدارة المخازن والمستودعات' : 'Inventory & Multi-Warehouse',
      desc: lang === 'ar'
        ? 'تتبع حركة الأصناف، الجرد الدوري، تكلفة البضاعة المباعة، والتنبيه التلقائي بنواقص المخزون.'
        : 'Real-time stock tracking, multi-location inventory transfer, and automated reorder points.'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'إدارة المرتبات والموارد البشرية' : 'Payroll & HR Management',
      desc: lang === 'ar'
        ? 'حساب مسيرات الراتب، الاستقطاعات، التأمينات الاجتماعية، والإجازات بدقة بدون أخطاء.'
        : 'Automated salary calculations, social insurance deductions, attendance, and leave management.'
    },
    {
      icon: Briefcase,
      title: lang === 'ar' ? 'إدارة المبيعات وأوامر الشراء' : 'Sales & Purchase Orders',
      desc: lang === 'ar'
        ? 'دورة مستندية كاملة من عروض الأسعار، أمر البيع، إذن الصرف وحتى استلام الدفعات.'
        : 'Complete procurement pipeline from Quotations, Sales Orders, Purchase Orders to Delivery Notes.'
    },
    {
      icon: Layers,
      title: lang === 'ar' ? 'تكامل تطبيق أنظمة Odoo ERP' : 'Odoo ERP Module Integration',
      desc: lang === 'ar'
        ? 'تطبيق وتخصيص كافة موديولات Odoo المعيارية لتناسب دورة العمل الخاصة بشركتك.'
        : 'Custom Odoo Enterprise/Community setup, module development, and database configuration.'
    }
  ];

  const plans = [
    {
      id: 'starter-acc',
      titleKey: 'planStarterAccounting',
      subtitleKey: 'planStarterAccountingSub',
      price: 1999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'نظام حسابات عامة ومبيعات متكامل',
        'ربط الفاتورة الإلكترونية الحكومية',
        'مستخدم واحد + 1 مخزن',
        'نسخ احتياطي يومي سحابي'
      ] : [
        'Core General Ledger & Invoicing',
        'Government E-Invoice Integration',
        '1 Single User + 1 Warehouse',
        'Daily Automated Cloud Backup'
      ]
    },
    {
      id: 'business-erp',
      titleKey: 'planBusinessERP',
      subtitleKey: 'planBusinessERPSub',
      price: 4999.99,
      recommended: true,
      features: lang === 'ar' ? [
        'نظام Odoo ERP كامل (حسابات، مخازن، مبيعات)',
        'ربط الفواتير والإقرارات الضريبية',
        'حتى 5 مستخدمين + multi-warehouse',
        'موديول المرتبات والحضور والانصراف',
        'دعم وتدريب مباشر من مهندسين معتمدين'
      ] : [
        'Full Odoo ERP (Accounting, CRM, Inventory)',
        'E-Invoice & E-Receipt Tax Compliance',
        'Up to 5 Users + Multi-Warehouse',
        'Payroll & Attendance HR Module',
        'Direct Certified Engineer Support & Training'
      ]
    },
    {
      id: 'enterprise-suite',
      titleKey: 'planEnterpriseSuite',
      subtitleKey: 'planEnterpriseSuiteSub',
      price: 9999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'نظام Odoo ERP مخصص بالكامل بدون حد للمستخدمين',
        'ربط خطوط الإنتاج والمصانع والتصنيع',
        'سيرفرات مخصصة فائقة الأداء Dedicated Cloud',
        'تكامل كامل مع المتجر والموقع الإلكتروني',
        'مدير حساب محاسبي ومهندس تنفيذ مخصص'
      ] : [
        'Unlimited User Enterprise Odoo Customization',
        'Manufacturing (MRP) & Production Lines',
        'Dedicated High-Performance Cloud Server',
        'Full E-Commerce & Web Portal Sync',
        'Dedicated Senior ERP Consultant'
      ]
    }
  ];

  const workflowSteps = [
    { num: '01', title: lang === 'ar' ? 'فحص ودراسة الدورة المحاسبية' : 'Requirement Audit & Blueprint', desc: lang === 'ar' ? 'دراسة دليل الحسابات وتحديد الدورة المستندية وموديلات Odoo المطلوبة.' : 'Auditing chart of accounts, document flows, and mapping custom Odoo modules.' },
    { num: '02', title: lang === 'ar' ? 'نقل البيانات وإعداد Odoo' : 'Data Migration & Odoo Setup', desc: lang === 'ar' ? 'نقل الأرصدة الافتتاحية والمخزون، ضبط الضرائب وإعداد السيرفر السحابي.' : 'Migrating opening balances, inventory items, tax codes, and server deployment.' },
    { num: '03', title: lang === 'ar' ? 'تدريب الفريق والتشغيل الرسمي' : 'Staff Training & Go-Live', desc: lang === 'ar' ? 'تدريب المحاسبين والموظفين وتوفير الدعم المباشر عند بدء التشغيل الرسمي.' : 'Hands-on user training, user access roles setup, and smooth live system go-live.' }
  ];

  return (
    <div className="accounting-page">
      {/* Top Hero Banner */}
      <section className="acc-hero-section">
        <div className="container grid-2-col align-center">
          <div className="acc-hero-text">
            <div className="badge"><Calculator size={14} /> {t('accountingBadge')}</div>
            <h1 className="acc-hero-title">{t('accountingHeroTitle')}</h1>
            <p className="page-header-sub text-left mb-4">
              {t('accountingHeroSub')}
            </p>
            <div className="hero-odoo-badge mb-4 flex-center gap-2">
              <ShieldCheck size={18} className="text-primary" />
              <span>{t('certifiedOdooPartner')}</span>
            </div>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                {t('requestErpConsultation')} <ArrowRight size={18} />
              </Link>
              <a href="#plans" className="btn btn-secondary">
                {t('exploreErpPlans')}
              </a>
            </div>
          </div>
          <div className="acc-hero-visual">
            <div className="acc-big-img-box">
              <img 
                src="/assets/Odoo-implementation.png" 
                alt="Odoo ERP Accounting Systems Implementation" 
                className="acc-hero-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> {t('accountingCapabilities')}</div>
          <h2 className="section-title">{t('everythingAccounting')}</h2>
          <p className="section-subtitle">
            {t('everythingAccountingSub')}
          </p>

          <div className="grid-3-col">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <cap.icon size={26} className="pillar-icon" />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> {lang === 'ar' ? 'موديول معتمد' : 'Standard Module'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section" id="plans">
        <div className="container">
          <div className="badge-center"><Calculator size={14} /> {t('accountingPlans')}</div>
          <h2 className="section-title">{t('accountingPlans')}</h2>
          <p className="section-subtitle">
            {t('accountingPlansSub')}
          </p>

          <div className="grid-3-col pricing-grid">
            {plans.map((p) => (
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
                  {p.features.map((f, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: p.id,
                      title: `${t(p.titleKey)} ERP System`,
                      price: p.price,
                      image: '/assets/Odoo-implementation.png'
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

      {/* 3-Step Workflow */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Building2 size={14} /> {t('methodologyBadge')}</div>
          <h2 className="section-title">{t('integrationWorkflow')}</h2>
          <p className="section-subtitle">{t('integrationWorkflowSub')}</p>

          <div className="grid-3-col process-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="card process-card">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section text-center">
        <div className="container">
          <h2>{lang === 'ar' ? 'هل تريد استشارة مجانية لإدارة حسابات شركتك بنظام Odoo؟' : 'Ready to Automate Your Business Accounting & ERP?'}</h2>
          <p className="section-subtitle">{lang === 'ar' ? 'تواصل معنا الآن للحصول على عرض توضيحي حي مجاني.' : 'Contact our ERP certified engineers today for a live demo.'}</p>
          <Link to="/mail-professional" className="btn btn-primary">
            {t('requestErpConsultation')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
