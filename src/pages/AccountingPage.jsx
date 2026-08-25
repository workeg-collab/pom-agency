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
  Briefcase,
  ShoppingCart,
  Factory,
  Database,
  Headphones,
  Award,
  Zap,
  Lock,
  Cpu
} from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();

  const odooModules = [
    {
      icon: FileSpreadsheet,
      title: lang === 'ar' ? 'المحاسبة والمالية (Accounting)' : 'Accounting & Financial Ledger',
      desc: lang === 'ar' 
        ? 'شجرة حسابات معيارية، ميزان مراجعة فوري، قيود يومية تلقائية، وقوائم مالية معتمدة تدعم تعدد العملات.'
        : 'Automated general ledger, chart of accounts, bank feeds sync, balance sheets, and real-time P&L reporting.'
    },
    {
      icon: Receipt,
      title: lang === 'ar' ? 'الفاتورة والإيصال الإلكتروني (ETA)' : 'E-Invoicing & E-Receipt Compliance',
      desc: lang === 'ar'
        ? 'ربط وتكامل فوري ومباشر مع منظومة مصلحة الضرائب المصرية بالرمز الرقمي QR والتوقيع الإلكتروني.'
        : 'Direct API integration with the Egyptian Tax Authority portal, QR digital signatures, and automated tax filing.'
    },
    {
      icon: Boxes,
      title: lang === 'ar' ? 'المخازن والمستودعات (Inventory)' : 'Inventory & Multi-Warehouse',
      desc: lang === 'ar'
        ? 'تتبع المخزون بالقيد المزدوج Double-entry، التحويل بين الفروع، الباركود، وإعادة الطلب التلقائي.'
        : 'Double-entry stock tracking, multi-branch transfers, barcode scanning, and automated minimum reorder rules.'
    },
    {
      icon: TrendingUp,
      title: lang === 'ar' ? 'المبيعات وإدارة العملاء (Sales & CRM)' : 'Sales & Customer Pipeline (CRM)',
      desc: lang === 'ar'
        ? 'دورة مبيعات مؤتمتة تبدأ من عروض الأسعار، مسار الفرص البيعية، أوامر البيع، وحتى تحصيل المدفوعات.'
        : 'Lead pipeline management, automated quotation-to-sales conversion, customer credit limits, and invoicing.'
    },
    {
      icon: Briefcase,
      title: lang === 'ar' ? 'المشتريات والموردين (Purchases)' : 'Procurement & Vendor Bills',
      desc: lang === 'ar'
        ? 'إدارة طلبات عروض الأسعار RFQ، أوامر الشراء، فواتير الموردين ومطابقتها الثلاثية 3-Way Matching.'
        : 'Automated RFQs, vendor price lists comparison, purchase orders approval workflows, and bill matching.'
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'الموارد البشرية والمرتبات (HR & Payroll)' : 'HR & Payroll Automation',
      desc: lang === 'ar'
        ? 'حساب مسيرات الرواتب، البدلات والاستقطاعات، التأمينات، وسجلات الحضور والانصراف بدقة متناهية.'
        : 'Salary structures, payroll calculations, social insurance deductions, biometric attendance, and leave management.'
    },
    {
      icon: Factory,
      title: lang === 'ar' ? 'التصنيع وخطوط الإنتاج (MRP)' : 'Manufacturing & Production (MRP)',
      desc: lang === 'ar'
        ? 'قوائم مواد التصنيع BOM، أوامر العمل وتكلفة التشغيل، وجدولة الإنتاج للمصانع والورش.'
        : 'Multi-level Bill of Materials (BOM), work center routing, production cost tracking, and capacity planning.'
    },
    {
      icon: ShoppingCart,
      title: lang === 'ar' ? 'نقاط البيع السريعة (Point of Sale)' : 'Point of Sale (POS Retail/Resto)',
      desc: lang === 'ar'
        ? 'واجهة بيع سريعة تعمل أونلاين وأوفلاين مع دعم شاشات اللمس، طابعات الإيصالات وموازين الباركود.'
        : 'Online & offline cashier touch terminal, receipt printers, barcode scale integration, and shift reconciliations.'
    }
  ];

  const whyChooseOdoo = [
    {
      icon: Award,
      title: lang === 'ar' ? 'مهندسون واستشاريون معتمدون' : 'Certified Odoo Consultants',
      desc: lang === 'ar' ? 'فريق معتمد في التحليل المالي وتطبيق أنظمة Odoo لضمان نجاح دورة عملك.' : 'Certified technical and functional consultants with extensive enterprise ERP rollout track record.'
    },
    {
      icon: Database,
      title: lang === 'ar' ? 'ترحيل بيانات نظيف وآمن' : 'Seamless Data Migration',
      desc: lang === 'ar' ? 'نقل كافة أرصدتك الافتتاحية والمخزون والعملاء من Excel أو الأنظمة القديمة بدقة 100%.' : 'Zero data loss migration for opening balances, product catalogs, customer histories, and ledgers.'
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'تخصيص كامل وموديولات خاصة' : 'Tailored Customizations',
      desc: lang === 'ar' ? 'تطوير تقارير وشاشات إضافية تناسب طبيعة نشاطك التجاري بدقة دون التأثير على التحديثات.' : 'Custom module development and specialized reports matching your exact operational requirements.'
    },
    {
      icon: Headphones,
      title: lang === 'ar' ? 'تدريب عملي ودعم فني 24/7' : 'Hands-On Training & 24/7 SLA',
      desc: lang === 'ar' ? 'ورش عمل تدريبية لمحاسبيك وموظفيك مع دعم فني مستمر لضمان أعلى إنتاجية.' : 'Comprehensive user workshops, video training docs, and dedicated technical helpdesk SLA.'
    }
  ];

  const plans = [
    {
      id: 'starter-acc',
      title: lang === 'ar' ? 'باقة أودو للمحاسبة السريعة' : 'Odoo Starter Accounting',
      subtitle: lang === 'ar' ? 'للأنشطة التجارية والمحلات الناشئة' : 'Small Businesses & Retail Shops',
      price: 1999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'نظام حسابات عامة وقيود يومية متكامل',
        'ربط الفاتورة والإيصال الإلكتروني ETA',
        'إدارة فواتير المبيعات والموردين',
        'مستخدم واحد (1 User) + مخزن واحد',
        'نسخ احتياطي يومي سحابي آمن'
      ] : [
        'Core General Ledger & Invoicing',
        'ETA E-Invoice & E-Receipt Integration',
        'Sales & Vendor Invoicing Module',
        '1 Single User + 1 Warehouse',
        'Daily Automated Cloud Backup'
      ]
    },
    {
      id: 'business-erp',
      title: lang === 'ar' ? 'باقة أودو المتكاملة للشركات' : 'Odoo Business Enterprise Suite',
      subtitle: lang === 'ar' ? 'للشركات المتنامية والمتوسطة' : 'Growing & Medium Sized Companies',
      price: 4999.99,
      recommended: true,
      features: lang === 'ar' ? [
        'نظام Odoo ERP كامل (حسابات، مخازن، مبيعات، مشتريات)',
        'ربط كامل مع مصلحة الضرائب المصرية ETA',
        'حتى 5 مستخدمين + فروع ومخازن متعددة',
        'موديول الموارد البشرية والمرتبات HR & Payroll',
        'تقارير تحليلية وميزانيات أرباح وخسائر متقدمة',
        'تدريب عملي ودعم فني مباشر معتمد'
      ] : [
        'Full Odoo ERP (Accounting, Inventory, Sales, CRM)',
        'Full Tax Authority (ETA) Compliance',
        'Up to 5 Users + Multi-Warehouse / Multi-Branch',
        'HR & Biometric Attendance Payroll Module',
        'Advanced Analytics & Cost Center Reports',
        'Hands-on Training & Certified Engineer Support'
      ]
    },
    {
      id: 'enterprise-suite',
      title: lang === 'ar' ? 'باقة أودو للمصانع والمؤسسات الكبرى' : 'Odoo Unlimited Enterprise ERP',
      subtitle: lang === 'ar' ? 'للمصانع والشركات ذات الفروع المتعددة' : 'Factories, Holdings & Manufacturing',
      price: 9999.99,
      recommended: false,
      features: lang === 'ar' ? [
        'نظام Odoo مخصص بالكامل بدون حد لعدد المستخدمين',
        'موديول التصنيع وخطوط الإنتاج الكامل (MRP)',
        'تكامل كامل مع المتجر والموقع ونقاط البيع POS',
        'سيرفر سحابي مخصص فائق الأداء Dedicated Cloud',
        'تطوير موديولات وتقارير مخصصة لشركتك',
        'استشاري ومدير حسابات Odoo مخصص 24/7'
      ] : [
        'Unlimited Users & Custom ERP Architecture',
        'Full Manufacturing MRP & Production Routing',
        'Full E-Commerce & POS Multi-Terminal Sync',
        'Dedicated High-Performance Cloud Server',
        'Custom Module & Specialized Financial Report Dev',
        'Dedicated Senior ERP Account Manager & 24/7 SLA'
      ]
    }
  ];

  const workflowSteps = [
    { 
      num: '01', 
      title: lang === 'ar' ? 'دراسة الدورة المستندية والمالية' : 'Financial Audit & Blueprint', 
      desc: lang === 'ar' 
        ? 'جلسات عمل مع الإدارة المالية لتحليل شجرة الحسابات، الدورة المستندية، وتحديد موديولات Odoo المطلوبة.' 
        : 'Deep dive into chart of accounts, document flows, approval hierarchies, and mapping exact Odoo modules.' 
    },
    { 
      num: '02', 
      title: lang === 'ar' ? 'إعداد النظام وتخصيص الموديولات' : 'System Setup & Customization', 
      desc: lang === 'ar' 
        ? 'تجهيز السيرفر وضبط إعدادات Odoo، الضرائب المصرية، شاشات الإدخال، والصلاحيات لكل مستخدم.' 
        : 'Cloud provisioning, tax parameterization, access permission matrix, and custom dashboard branding.' 
    },
    { 
      num: '03', 
      title: lang === 'ar' ? 'ترحيل الأرصدة والاختبار الشامل' : 'Data Migration & User Acceptance', 
      desc: lang === 'ar' 
        ? 'نقل الأرصدة الافتتاحية والمخزون، واختبار دورة العمل المالية كاملة والتأكد من مطابقتها بنسبة 100%.' 
        : 'Migrating opening ledger balances, product catalogs, and end-to-end user acceptance testing (UAT).' 
    },
    { 
      num: '04', 
      title: lang === 'ar' ? 'التدريب العملي والتشغيل الرسمي' : 'Hands-On Training & Go-Live', 
      desc: lang === 'ar' 
        ? 'تدريب المحاسبين والموظفين عملياً، وتواجد مهندسينا الميداني لدعم الفريق لحظة التشغيل الفعلي.' 
        : 'Comprehensive staff training, user role onboarding, and live engineer presence on go-live day.' 
    }
  ];

  return (
    <div className="accounting-page">
      {/* 1. Top Hero Banner */}
      <section className="acc-hero-section">
        <div className="container acc-hero-grid">
          <div className="acc-hero-text">
            <div className="badge">
              <Calculator size={14} /> {lang === 'ar' ? 'حلول المحاسبة وإدارة المؤسسات Odoo ERP' : 'Odoo ERP & Financial Engineering'}
            </div>
            <h1 className="acc-hero-title">
              {lang === 'ar' 
                ? 'أنظمة محاسبية ذكية وتطبيق شامل لـ Odoo ERP' 
                : 'Next-Gen Accounting & Certified Odoo ERP Systems'}
            </h1>
            <p className="acc-hero-subtitle">
              {lang === 'ar'
                ? 'ارتقِ بإدارة شركتك المالية مع حلول Odoo المتكاملة: ربط الفاتورة والإيصال الإلكتروني ETA، إدارة المخازن المتعددة، المبيعات والمشتريات، والمرتبات في نظام واحد فائق السرعة والأمان.'
                : 'Streamline your enterprise finances with certified Odoo ERP: Egyptian Tax Authority (ETA) e-invoicing, multi-warehouse inventory, CRM, procurement, and payroll unified on a single high-performance cloud platform.'}
            </p>

            <div className="hero-odoo-badge">
              <ShieldCheck size={18} color="#1388fd" />
              <span>{lang === 'ar' ? 'شريك تنفيذ معتمد - متوافق 100% مع الفاتورة الإلكترونية' : 'Certified Odoo Implementation & 100% ETA E-Invoice Ready'}</span>
            </div>

            <div className="acc-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {lang === 'ar' ? 'طلب استشارة Odoo مجانية' : 'Request Free ERP Consultation'} <ArrowRight size={18} />
              </Link>
              <a href="#plans" className="btn btn-secondary">
                {lang === 'ar' ? 'عرض باقات الأسعار' : 'Explore ERP Packages'}
              </a>
            </div>
          </div>

          <div className="acc-hero-visual">
            <div className="acc-img-wrapper">
              <img 
                src="/assets/Odoo-implementation.png" 
                alt="Odoo ERP Accounting Systems Implementation" 
                className="acc-hero-img" 
              />
              <div className="acc-float-card acc-float-card-1">
                <div className="acc-float-icon" style={{ background: 'rgba(19, 136, 253, 0.1)', color: '#1388fd' }}>
                  <Receipt size={20} />
                </div>
                <div className="acc-float-text">
                  <strong>{lang === 'ar' ? 'الفاتورة الإلكترونية ETA' : 'ETA E-Invoicing'}</strong>
                  <span>{lang === 'ar' ? 'ربط آلي معتمد 100%' : '100% Direct Portal Sync'}</span>
                </div>
              </div>
              <div className="acc-float-card acc-float-card-2">
                <div className="acc-float-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                  <TrendingUp size={20} />
                </div>
                <div className="acc-float-text">
                  <strong>{lang === 'ar' ? 'تقارير مالية فورية' : 'Real-Time Reports'}</strong>
                  <span>{lang === 'ar' ? 'ميزان مراجعة وأرباح وخسائر' : 'P&L & Trial Balance'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats & Trust Bar */}
      <section className="acc-stats-section">
        <div className="container">
          <div className="acc-stats-grid">
            <div className="acc-stat-item">
              <span className="acc-stat-num">100%</span>
              <span className="acc-stat-label">{lang === 'ar' ? 'مطابقة ضريبية ETA' : 'Tax Compliance'}</span>
            </div>
            <div className="acc-stat-item">
              <span className="acc-stat-num">99.9%</span>
              <span className="acc-stat-label">{lang === 'ar' ? 'جاهزية السيرفرات Uptime' : 'Cloud Uptime SLA'}</span>
            </div>
            <div className="acc-stat-item">
              <span className="acc-stat-num">50+</span>
              <span className="acc-stat-label">{lang === 'ar' ? 'نظام Odoo مُنفذ بنجاح' : 'Successful ERP Deployments'}</span>
            </div>
            <div className="acc-stat-item">
              <span className="acc-stat-num">24/7</span>
              <span className="acc-stat-label">{lang === 'ar' ? 'دعم فني واستشاري' : 'Dedicated Support'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Odoo ERP Modules Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">
            <Sparkles size={14} /> {lang === 'ar' ? 'موديولات أودو المتكاملة' : 'Comprehensive Odoo ERP Suite'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'كل ما تحتاجه لإدارة مؤسستك في نظام واحد متكامل' : 'Everything Your Business Needs to Run on Autopilot'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تغطي أنظمة Odoo المحاسبية كافة العمليات المالية والإدارية بدقة وسلاسة متناهية.' 
              : 'End-to-end enterprise modularity built to scale seamlessly with your company operations.'}
          </p>

          <div className="odoo-modules-grid">
            {odooModules.map((mod, idx) => (
              <div key={idx} className="odoo-module-card">
                <div className="module-card-top">
                  <div className="module-icon-box">
                    <mod.icon size={24} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                </div>
                <div className="module-tag">
                  <CheckCircle2 size={13} /> {lang === 'ar' ? 'موديول قياسي معتمد' : 'Standard Odoo App'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose POM Implementation */}
      <section className="section">
        <div className="container">
          <div className="badge-center">
            <Building2 size={14} /> {lang === 'ar' ? 'لماذا تختار POM Agency؟' : 'Why Implement with POM?'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'خبرة تقنية ومحاسبية تضمن نجاح استثمارك' : 'Technical & Financial Mastery in Every ERP Rollout'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'لا نكتفي بتركيب البرنامج، بل نعيد هندسة وتطوير دورتك المستندية لتلائم أفضل الممارسات العالمية.' 
              : 'We don’t just install software; we re-engineer your workflows to match international accounting standards.'}
          </p>

          <div className="why-odoo-grid">
            {whyChooseOdoo.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <item.icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Plans */}
      <section className="section bg-surface" id="plans">
        <div className="container">
          <div className="badge-center">
            <Calculator size={14} /> {lang === 'ar' ? 'باقات وتكاليف Odoo' : 'Transparent ERP Packages'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'اختر الباقة الأنسب لحجم وأهداف شركتك' : 'Choose the Perfect ERP Tier for Your Growth'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'أسعار واضحة وباقات مرنة تشمل الاستضافة، الدعم الفني، والربط الإلكتروني.' 
              : 'Predictable monthly investment including secure cloud hosting, tax sync, and direct engineer support.'}
          </p>

          <div className="pricing-grid">
            {plans.map((p) => (
              <div key={p.id} className={`pricing-card ${p.recommended ? 'recommended' : ''}`}>
                {p.recommended && <div className="popular-badge">{t('popularChoice')}</div>}
                <div>
                  <h3 className="plan-title">{p.title}</h3>
                  <span className="plan-subtitle">{p.subtitle}</span>
                  <div className="plan-price">
                    <span className="currency">{t('currency')}</span>
                    <span className="amount">{p.price}</span>
                    <span className="period">{t('perMonth')}</span>
                  </div>
                  <ul className="plan-features">
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

      {/* 6. Implementation 4-Step Methodology */}
      <section className="section">
        <div className="container">
          <div className="badge-center">
            <Layers size={14} /> {lang === 'ar' ? 'منهجية العمل والتشغيل' : 'Implementation Roadmap'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? '4 خطوات مدروسة للانتقال السلس إلى Odoo ERP' : '4-Step Proven Methodology to Go-Live'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'خارطة طريق واضحة المعالم تبدأ من التحليل الأولي وحتى التشغيل النهائي دون أي توقف لعملياتك اليومية.' 
              : 'Structured roadmap ensuring zero operational downtime and 100% staff adoption.'}
          </p>

          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-card">
                <span className="workflow-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="section text-center" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="acc-cta-card">
            <h2>
              {lang === 'ar' 
                ? 'جاهز لتطوير نظامك المحاسبي والانتقال إلى Odoo ERP؟' 
                : 'Ready to Transform Your Business with Odoo ERP?'}
            </h2>
            <p>
              {lang === 'ar' 
                ? 'احصل على جلسة استشارية وعرض توضيحي حي (Live Demo) مخصص لشركتك مع خبرائنا المعتمدين.' 
                : 'Schedule a free consultation and customized live demo with our certified Odoo solution architects.'}
            </p>
            <div className="acc-cta-btns">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.95rem 2rem' }}>
                {lang === 'ar' ? 'تواصل معنا لحجز العرض الحي' : 'Book a Free Live Demo'} <ArrowRight size={18} />
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
