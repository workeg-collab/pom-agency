import React, { useState } from 'react';
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
  Cpu,
  BarChart3,
  PieChart,
  Activity,
  FileCheck2,
  Truck,
  DollarSign,
  ArrowUpRight,
  Monitor
} from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const { addToCart } = useCart();
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('financial');

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

      {/* 3. Interactive Odoo Dashboard & Visual Charts Showcase */}
      <section className="dashboard-showcase-section">
        <div className="container">
          <div className="badge-center">
            <BarChart3 size={14} /> {lang === 'ar' ? 'لوحات تحكم ورسوم بيانية ذكية' : 'Live Odoo ERP Visual Dashboards'}
          </div>
          <h2 className="section-title">
            {lang === 'ar' ? 'شاشات ورسوم بيانية تفاعلية لإدارة أعمالك لحظة بلحظة' : 'Interactive Analytics & Real-Time Financial Visibility'}
          </h2>
          <p className="section-subtitle">
            {lang === 'ar' 
              ? 'تتيح لك شاشات Odoo مراقبة التدفقات النقدية، حركة المستودعات، الدورة المستندية، وحالة الفواتير الضريبية بنقرة زر.' 
              : 'Monitor real-time cashflow, stock movements, procurement pipelines, and tax verification across all branches.'}
          </p>

          {/* Tab Switcher */}
          <div className="dashboard-tab-buttons">
            <button 
              className={`dash-tab-btn ${activeTab === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveTab('financial')}
            >
              <DollarSign size={16} />
              <span>{lang === 'ar' ? 'التحليل المالي والأرباح والخسائر' : 'Financial P&L & Cash Flow'}</span>
            </button>
            <button 
              className={`dash-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
              onClick={() => setActiveTab('inventory')}
            >
              <Boxes size={16} />
              <span>{lang === 'ar' ? 'رقابة المخازن وحركة الأصناف' : 'Warehouse & Stock Flow'}</span>
            </button>
            <button 
              className={`dash-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('pipeline')}
            >
              <Activity size={16} />
              <span>{lang === 'ar' ? 'الدورة المستندية المؤتمتة' : 'Automated Sales Pipeline'}</span>
            </button>
            <button 
              className={`dash-tab-btn ${activeTab === 'eta' ? 'active' : ''}`}
              onClick={() => setActiveTab('eta')}
            >
              <Receipt size={16} />
              <span>{lang === 'ar' ? 'الفاتورة والإيصال الضريبي (ETA)' : 'ETA Tax Direct Sync'}</span>
            </button>
          </div>

          {/* Dashboard Visual Window */}
          <div className="dashboard-window">
            <div className="window-header-bar">
              <div className="window-dots">
                <div className="window-dot dot-red" />
                <div className="window-dot dot-yellow" />
                <div className="window-dot dot-green" />
              </div>
              <div className="window-title">
                <Monitor size={15} />
                <span>Odoo Enterprise v18.0 &bull; {lang === 'ar' ? 'لوحة المراقبة المركزية المعتمدة' : 'Unified Executive Management Console'}</span>
              </div>
              <span className="window-badge">{lang === 'ar' ? 'متزامن لحظياً (Live)' : 'Live Synced'}</span>
            </div>

            <div className="window-body">
              {/* Tab 1: Financial */}
              {activeTab === 'financial' && (
                <div>
                  <div className="dash-kpis-grid">
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'إجمالي الإيرادات (المبيعات)' : 'Total Revenue (MTD)'}</span>
                      <span className="kpi-value">$128,450</span>
                      <span className="kpi-badge-gain"><ArrowUpRight size={14} /> +18.4% {lang === 'ar' ? 'عن الشهر السابق' : 'vs last month'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'المصروفات التشغيلية' : 'Operating Expenses'}</span>
                      <span className="kpi-value">$42,300</span>
                      <span className="kpi-badge-neutral"><CheckCircle2 size={14} /> {lang === 'ar' ? 'ضمن الميزانية المقدرة' : 'Within Target Budget'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'صافي الربح التشغيلي (EBIT)' : 'Net Operating Profit'}</span>
                      <span className="kpi-value" style={{ color: '#34d399' }}>$86,150</span>
                      <span className="kpi-badge-gain"><ArrowUpRight size={14} /> 67.1% {lang === 'ar' ? 'هامش الربحية' : 'Profit Margin'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'السيولة والتدفق النقدي' : 'Cash Flow Liquidity'}</span>
                      <span className="kpi-value" style={{ color: '#38bdf8' }}>$312,900</span>
                      <span className="kpi-badge-neutral"><ShieldCheck size={14} /> {lang === 'ar' ? 'مطابقة بنكية 100%' : '100% Bank Reconciled'}</span>
                    </div>
                  </div>

                  <div className="dash-charts-row">
                    <div className="dash-main-chart-box">
                      <div className="dash-chart-header">
                        <h4>{lang === 'ar' ? 'رسم بياني للإيرادات والمصروفات الشهرية' : 'Monthly Revenue vs Expense Trend'}</h4>
                        <div className="chart-legend">
                          <span className="legend-item"><span className="legend-dot dot-blue" /> {lang === 'ar' ? 'الإيرادات' : 'Revenue'}</span>
                          <span className="legend-item"><span className="legend-dot dot-purple" /> {lang === 'ar' ? 'المصروفات' : 'Expenses'}</span>
                        </div>
                      </div>
                      <div className="bar-graph-container">
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-rev" style={{ height: '65%' }} title="Revenue: $65k" />
                            <div className="bar-stick stick-exp" style={{ height: '30%' }} title="Expenses: $30k" />
                          </div>
                          <span className="bar-month-label">Jan</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-rev" style={{ height: '75%' }} title="Revenue: $75k" />
                            <div className="bar-stick stick-exp" style={{ height: '35%' }} title="Expenses: $35k" />
                          </div>
                          <span className="bar-month-label">Feb</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-rev" style={{ height: '85%' }} title="Revenue: $85k" />
                            <div className="bar-stick stick-exp" style={{ height: '38%' }} title="Expenses: $38k" />
                          </div>
                          <span className="bar-month-label">Mar</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-rev" style={{ height: '95%' }} title="Revenue: $95k" />
                            <div className="bar-stick stick-exp" style={{ height: '40%' }} title="Expenses: $40k" />
                          </div>
                          <span className="bar-month-label">Apr</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-rev" style={{ height: '100%' }} title="Revenue: $128k" />
                            <div className="bar-stick stick-exp" style={{ height: '42%' }} title="Expenses: $42k" />
                          </div>
                          <span className="bar-month-label">May</span>
                        </div>
                      </div>
                    </div>

                    <div className="dash-side-panel">
                      <h4>{lang === 'ar' ? 'توزيع المصروفات حسب مراكز التكلفة' : 'Cost Center Budget Allocation'}</h4>
                      <div className="progress-metric-list">
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'المشتريات وتكلفة البضاعة' : 'Cost of Goods Sold (COGS)'}</span>
                            <strong>48%</strong>
                          </div>
                          <div className="metric-bar-bg">
                            <div className="metric-bar-fill" style={{ width: '48%', background: '#1388fd' }} />
                          </div>
                        </div>
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'الرواتب والأجور والتأمينات' : 'Salaries & Payroll'}</span>
                            <strong>32%</strong>
                          </div>
                          <div className="metric-bar-bg">
                            <div className="metric-bar-fill" style={{ width: '32%', background: '#8b5cf6' }} />
                          </div>
                        </div>
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'المصاريف الإدارية والعمومية' : 'Admin & Operational'}</span>
                            <strong>14%</strong>
                          </div>
                          <div className="metric-bar-bg">
                            <div className="metric-bar-fill" style={{ width: '14%', background: '#38bdf8' }} />
                          </div>
                        </div>
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'التسويق وتطوير الأعمال' : 'Marketing & Growth'}</span>
                            <strong>6%</strong>
                          </div>
                          <div className="metric-bar-bg">
                            <div className="metric-bar-fill" style={{ width: '6%', background: '#10b981' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Inventory & Warehouse */}
              {activeTab === 'inventory' && (
                <div>
                  <div className="dash-kpis-grid">
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'إجمالي قيمة المخزون الحالي' : 'Total Stock Valuation (FIFO)'}</span>
                      <span className="kpi-value" style={{ color: '#38bdf8' }}>$485,200</span>
                      <span className="kpi-badge-neutral"><Boxes size={14} /> 3 {lang === 'ar' ? 'مستودعات رئيسية' : 'Main Warehouses'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'حركات التحويل بين الفروع' : 'Internal Stock Transfers'}</span>
                      <span className="kpi-value">142</span>
                      <span className="kpi-badge-gain"><CheckCircle2 size={14} /> {lang === 'ar' ? 'مكتملة ومطابقة بالباركود' : '100% Barcode Verified'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'أوامر إعادة الطلب التلقائي' : 'Auto Reorder Triggers'}</span>
                      <span className="kpi-value" style={{ color: '#f59e0b' }}>8 {lang === 'ar' ? 'أصناف' : 'Items'}</span>
                      <span className="kpi-badge-gain" style={{ color: '#f59e0b' }}><Activity size={14} /> {lang === 'ar' ? 'تم إنشاء أوامر شراء تلقائية' : 'PO Generated Automatically'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'دقة الجرد الدوري' : 'Inventory Audit Accuracy'}</span>
                      <span className="kpi-value" style={{ color: '#34d399' }}>99.8%</span>
                      <span className="kpi-badge-gain"><ShieldCheck size={14} /> {lang === 'ar' ? 'بدون أي هدر أو فروقات' : 'Zero Discrepancy'}</span>
                    </div>
                  </div>

                  <div className="dash-charts-row">
                    <div className="dash-main-chart-box">
                      <div className="dash-chart-header">
                        <h4>{lang === 'ar' ? 'مستويات المخزون حسب الفروع والمستودعات' : 'Inventory Distribution by Warehouse'}</h4>
                        <span className="window-badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>{lang === 'ar' ? 'تحديث فوري' : 'Live Sync'}</span>
                      </div>
                      <div className="bar-graph-container">
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-stock" style={{ height: '90%', width: '22px' }} />
                          </div>
                          <span className="bar-month-label">{lang === 'ar' ? 'مستودع القاهرة الرئيسي' : 'Cairo Central'}</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-stock" style={{ height: '65%', width: '22px' }} />
                          </div>
                          <span className="bar-month-label">{lang === 'ar' ? 'فرع الإسكندرية' : 'Alexandria Hub'}</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-stock" style={{ height: '45%', width: '22px' }} />
                          </div>
                          <span className="bar-month-label">{lang === 'ar' ? 'فرع الجيزة' : 'Giza Depot'}</span>
                        </div>
                        <div className="bar-col">
                          <div className="bar-dual">
                            <div className="bar-stick stick-stock" style={{ height: '35%', width: '22px' }} />
                          </div>
                          <span className="bar-month-label">{lang === 'ar' ? 'مخزن العبور' : 'Obour Storage'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="dash-side-panel">
                      <h4>{lang === 'ar' ? 'الأصناف الأكثر حركة ودوراناً' : 'Fast-Moving Inventory Velocity'}</h4>
                      <div className="progress-metric-list">
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'مجموعة الإلكترونيات والشبكات' : 'Hardware & Servers'}</span>
                            <strong>89%</strong>
                          </div>
                          <div className="metric-bar-bg"><div className="metric-bar-fill" style={{ width: '89%', background: '#10b981' }} /></div>
                        </div>
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'أنظمة التحكم وأجهزة IoT' : 'Smart IoT Devices'}</span>
                            <strong>72%</strong>
                          </div>
                          <div className="metric-bar-bg"><div className="metric-bar-fill" style={{ width: '72%', background: '#38bdf8' }} /></div>
                        </div>
                        <div className="progress-metric-item">
                          <div className="metric-row-labels">
                            <span>{lang === 'ar' ? 'كابلات ومستلزمات التركيب' : 'Cables & Accessories'}</span>
                            <strong>54%</strong>
                          </div>
                          <div className="metric-bar-bg"><div className="metric-bar-fill" style={{ width: '54%', background: '#8b5cf6' }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Sales Pipeline */}
              {activeTab === 'pipeline' && (
                <div>
                  <div className="dash-chart-header" style={{ marginBottom: '1rem' }}>
                    <h4>{lang === 'ar' ? 'مراحل الدورة المستندية المؤتمتة في Odoo ERP' : 'Automated Sales-to-Cash Workflow'}</h4>
                    <span className="window-badge">{lang === 'ar' ? '100% مؤتمتة بدون تدخل يدوي' : '100% Zero Manual Friction'}</span>
                  </div>

                  <div className="pipeline-flow-grid">
                    <div className="pipeline-step-box active-step">
                      <div className="pipeline-icon-circle"><FileSpreadsheet size={20} /></div>
                      <h5>{lang === 'ar' ? '1. عرض الأسعار' : '1. Quotation'}</h5>
                      <span>{lang === 'ar' ? 'إرسال عرض سعر إلكتروني مع رابط الدفع المباشر' : 'Send branded quotation with digital sign'}</span>
                    </div>
                    <div className="pipeline-step-box active-step">
                      <div className="pipeline-icon-circle"><CheckCircle2 size={20} /></div>
                      <h5>{lang === 'ar' ? '2. أمر البيع (SO)' : '2. Sales Order'}</h5>
                      <span>{lang === 'ar' ? 'تأكيد العميل وحجز المخزون آلياً' : 'Customer approval & stock reservation'}</span>
                    </div>
                    <div className="pipeline-step-box active-step">
                      <div className="pipeline-icon-circle"><Truck size={20} /></div>
                      <h5>{lang === 'ar' ? '3. إذن الصرف والتسليم' : '3. Delivery Note'}</h5>
                      <span>{lang === 'ar' ? 'مسح الباركود وخصم الأصناف من المستودع' : 'Barcode picking & stock deduction'}</span>
                    </div>
                    <div className="pipeline-step-box active-step">
                      <div className="pipeline-icon-circle"><Receipt size={20} /></div>
                      <h5>{lang === 'ar' ? '4. الفاتورة الإلكترونية' : '4. Tax E-Invoice'}</h5>
                      <span>{lang === 'ar' ? 'إرسال آلي لمصلحة الضرائب المصرية ETA' : 'Direct ETA Portal submission & QR code'}</span>
                    </div>
                    <div className="pipeline-step-box active-step">
                      <div className="pipeline-icon-circle"><DollarSign size={20} /></div>
                      <h5>{lang === 'ar' ? '5. التحصيل والتسوية' : '5. Bank Reconcile'}</h5>
                      <span>{lang === 'ar' ? 'قيد اليومية التلقائي وإقفال الحساب' : 'Automated journal entry & bank feed sync'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: ETA E-Invoicing */}
              {activeTab === 'eta' && (
                <div>
                  <div className="dash-kpis-grid">
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'حالة الربط مع مصلحة الضرائب ETA' : 'ETA Server API Status'}</span>
                      <span className="kpi-value" style={{ color: '#34d399' }}>CONNECTED</span>
                      <span className="kpi-badge-gain"><CheckCircle2 size={14} /> {lang === 'ar' ? 'شهادة التوقيع الإلكتروني سارية' : 'e-Token Signature Valid'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'الفواتير المرسلة والمقبولة (الشهر)' : 'Accepted Tax Invoices (MTD)'}</span>
                      <span className="kpi-value">1,480</span>
                      <span className="kpi-badge-gain"><CheckCircle2 size={14} /> 100% {lang === 'ar' ? 'قبول بدون أي رفض' : 'Zero Rejection'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'الإيصالات الإلكترونية B2C' : 'Consumer Receipts (B2C)'}</span>
                      <span className="kpi-value">6,240</span>
                      <span className="kpi-badge-gain"><CheckCircle2 size={14} /> {lang === 'ar' ? 'كود استجابة سريعة QR فوري' : 'Instant QR Validated'}</span>
                    </div>
                    <div className="dash-kpi-card">
                      <span className="kpi-title">{lang === 'ar' ? 'زمن التزامن اللحظي' : 'Average Sync Latency'}</span>
                      <span className="kpi-value" style={{ color: '#38bdf8' }}>0.4s</span>
                      <span className="kpi-badge-neutral"><Zap size={14} /> {lang === 'ar' ? 'فائق السرعة والموثوقية' : 'High Speed Queue'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Feature Breakdown with Images */}
      {/* Section A: Odoo Ecosystem Image */}
      <section className="visual-split-section">
        <div className="container visual-split-grid">
          <div className="split-img-card">
            <img 
              src="/assets/odoo-image.png" 
              alt="Odoo Unified ERP Cloud Ecosystem" 
            />
          </div>
          <div className="split-content">
            <div className="badge"><Layers size={14} /> {lang === 'ar' ? 'منظومة Odoo السحابية المتكاملة' : 'Unified Cloud Architecture'}</div>
            <h3>
              {lang === 'ar' 
                ? 'اربط جميع إدارات وفروع شركتك في قاعدة بيانات مركزية واحدة' 
                : 'Unify All Departments & Branches on One Powerful Database'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'تخلص من تشتت البرامج والملفات المنفصلة. يوفر Odoo تكاملاً شاملاً يربط المحاسبة بالمخازن، المشتريات بالمبيعات، والمصانع بنقاط البيع مع إمكانية الوصول من أي جهاز بأعلى معايير التشفير والأمان.'
                : 'Eliminate disconnected spreadsheets and siloed software. Odoo connects accounting to inventory, purchasing to sales, and manufacturing to POS in real time with enterprise-grade encryption and automated daily backups.'}
            </p>
            <ul className="split-feature-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'إمكانية الوصول الآمن من المتصفح وتطبيقات الهواتف الذكية' : 'Cross-platform access on Web, iOS, and Android devices'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'إدارة صلاحيات متقدمة وتحديد أدوار كل محاسب وموظف' : 'Granular role-based user access and audit log trails'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'نسخ احتياطي سحابي تلقائي لضمان عدم فقدان أي بيانات' : 'Automated daily encrypted off-site cloud snapshots'}</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              {lang === 'ar' ? 'استشر مهندس Odoo الآن' : 'Speak with an ERP Engineer'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section B: Financial Charts & Stock Graph */}
      <section className="visual-split-section bg-surface">
        <div className="container visual-split-grid reverse">
          <div className="split-img-card">
            <img 
              src="/assets/stock-graph.png" 
              alt="Financial Analytics & KPI Reports in Odoo" 
            />
          </div>
          <div className="split-content">
            <div className="badge"><BarChart3 size={14} /> {lang === 'ar' ? 'تقارير مالية وتحليلات استثمارية' : 'Executive Business Intelligence'}</div>
            <h3>
              {lang === 'ar' 
                ? 'تقارير مالية تفصيلية ومؤشرات أداء KPI لاتخاذ القرارات الاستثمارية' 
                : 'Granular Financial Insights & KPI Dashboards for Confident Decisions'}
            </h3>
            <p>
              {lang === 'ar'
                ? 'احصل على رؤية شاملة لموقف السيولة، أرباح وخسائر كل فرع، وتكاليف مراكز التشغيل بضغطة زر واحدة، مع إمكانية تصدير كافة الجداول والتقارير إلى ملفات Excel و PDF المعتمدة.'
                : 'Gain immediate visibility into cash liquidity, branch profitability, and cost center allocations with one click. Export audit-ready financial statements directly to formatted Excel and PDF files.'}
            </p>
            <ul className="split-feature-checklist">
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'ميزان مراجعة وقائمة مركز مالي لحظية بنقرة زر' : 'Instant trial balance and balance sheet generation'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تحليل ربحية كل منتج وفرع ومركز تكلفة بدقة' : 'Profitability drilldown per product, branch, and cost center'}</li>
              <li><CheckCircle2 size={18} color="#1388fd" /> {lang === 'ar' ? 'تنبيهات ذكية بالفواتير المستحقة والديون المتأخرة' : 'Automated payment due dates & customer aging reminders'}</li>
            </ul>
            <a href="#plans" className="btn btn-secondary">
              {lang === 'ar' ? 'عرض تفاصيل باقات الأسعار' : 'View Transparent Pricing'}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Core Odoo ERP Modules Grid */}
      <section className="section">
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

      {/* 6. Why Choose POM Implementation */}
      <section className="section bg-surface">
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

      {/* 7. Pricing Plans */}
      <section className="section" id="plans">
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

      {/* 8. Implementation 4-Step Methodology */}
      <section className="section bg-surface">
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

      {/* 9. Bottom CTA Banner */}
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
