import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  Calculator, 
  FileText, 
  BarChart3, 
  PieChart, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Database, 
  TrendingUp, 
  Building2, 
  Users, 
  Zap,
  Globe,
  Award
} from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const { addToCart } = useCart();

  const accountingFeatures = [
    {
      icon: Calculator,
      title: 'General Ledger & Financial Accounting',
      desc: 'Automate balance sheets, profit & loss statements, and real-time cash flow tracking with zero manual errors.'
    },
    {
      icon: Database,
      title: 'Odoo ERP Implementation & Customization',
      desc: 'Seamless deployment of Odoo ERP modules tailored to your operational workflows and supply chain.'
    },
    {
      icon: FileText,
      title: 'Electronic Invoicing & E-Tax Compliance',
      desc: '100% compliant with Egyptian Tax Authority (ETA) e-invoicing laws and international tax regulations.'
    },
    {
      icon: Globe,
      title: 'Multi-Currency & Global Reporting',
      desc: 'Manage multi-currency transactions with automated live exchange rate conversions and consolidated reports.'
    },
    {
      icon: Layers,
      title: 'Inventory & Asset Management',
      desc: 'Real-time stock valuation, automated reordering levels, asset depreciation tracking, and warehouse control.'
    },
    {
      icon: Users,
      title: 'Payroll & Expense Management',
      desc: 'Automated salary processing, tax deductions, employee reimbursement portals, and attendance sync.'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter-accounting',
      title: 'Starter Accounting',
      subtitle: 'Small Businesses & Startups',
      price: 1499.99,
      period: '/Month',
      image: '/assets/Odoo-implementation.png',
      features: [
        'Up to 2 User Accounts',
        'General Ledger & Invoicing',
        'Basic Financial Reports',
        'E-Tax Compliance Ready',
        'Standard Email Support'
      ],
      recommended: false
    },
    {
      id: 'business-erp',
      title: 'Business ERP',
      subtitle: 'Growing Companies',
      price: 3999.99,
      period: '/Month',
      image: '/assets/Odoo-implementation.png',
      features: [
        'Up to 10 User Accounts',
        'Full Odoo Accounting Module Sync',
        'Multi-Currency & Bank Feed Sync',
        'Advanced Inventory & Asset Tracking',
        'Payroll & Expense Management',
        'Priority Technical Support'
      ],
      recommended: true
    },
    {
      id: 'enterprise-suite',
      title: 'Enterprise Suite',
      subtitle: 'Large Scale Organizations',
      price: 7999.99,
      period: '/Month',
      image: '/assets/Odoo-implementation.png',
      features: [
        'Unlimited User Accounts',
        'Full Odoo ERP Module Suite',
        'Custom Workflow & API Integrations',
        'Dedicated ERP Account Manager',
        '24/7 SLA Technical Support',
        'On-Premise or Private Cloud Hosting'
      ],
      recommended: false
    }
  ];

  const stats = [
    { num: '99.9%', label: 'Financial Data Accuracy' },
    { num: '500+', label: 'ERP Deployments' },
    { num: '100%', label: 'ETA Tax Compliance' },
    { num: '1.5s', label: 'Report Generation Speed' }
  ];

  return (
    <div className="accounting-page">
      {/* 1. Main Top Hero Section */}
      <section className="accounting-hero-section">
        <div className="container grid-2-col align-center">
          <div className="accounting-hero-content">
            <div className="badge">
              <Calculator size={14} /> ERP & FINANCIAL SYSTEMS
            </div>
            <h1 className="accounting-hero-title">
              Smart Accounting & Odoo ERP Systems for Modern Enterprises
            </h1>
            <p className="page-header-sub text-left mb-4">
              Take full control of your company financial health, electronic invoicing, inventory, and payroll with our certified Odoo ERP and custom accounting implementations.
            </p>
            <div className="accounting-hero-checklist mb-4">
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Certified Odoo ERP Implementation & Customization</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Official ETA Electronic Invoicing (E-Tax Integration)</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Real-time Financial Reporting & Cash Flow Dashboards</div>
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="btn btn-primary">
                View Accounting Plans <ArrowRight size={16} />
              </a>
              <Link to="/mail-professional" className="btn btn-secondary">
                Request Free Demo
              </Link>
            </div>
          </div>
          <div className="accounting-hero-visual">
            <div className="accounting-img-box">
              <img 
                src="/assets/Odoo-implementation.png" 
                alt="Odoo ERP Accounting Implementation" 
                className="accounting-official-img"
              />
              <div className="accounting-floating-badge">
                <Sparkles size={16} className="text-primary" />
                <span>Certified Odoo ERP Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="section stats-bar-section">
        <div className="container">
          <div className="grid-4-col stats-grid text-center">
            {stats.map((st, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-number-large">{st.num}</span>
                <span className="stat-label-text">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features & Pillars Overview */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> CAPABILITIES</div>
          <h2 className="section-title">Comprehensive Financial & ERP Capabilities</h2>
          <p className="section-subtitle">
            Engineered to streamline corporate accounting, ensure regulatory compliance, and drive operational efficiency.
          </p>

          <div className="grid-3-col mt-4">
            {accountingFeatures.map((feat, idx) => (
              <div key={idx} className="card feature-card-animated">
                <div className="pillar-icon-box mb-3">
                  <feat.icon size={26} className="pillar-icon" />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
                <div className="feature-check"><CheckCircle2 size={16} /> Fully Integrated</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Plans Section */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="badge-center"><Zap size={14} /> PRICING PLANS</div>
          <h2 className="section-title">Accounting & ERP Pricing Plans</h2>
          <p className="section-subtitle">
            Flexible subscription options designed for businesses of all sizes.
          </p>

          <div className="grid-3-col pricing-grid mt-4">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`card pricing-card text-center ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <div className="popular-badge">POPULAR CHOICE</div>}
                <div className="plan-img-box mb-3">
                  <img src={plan.image} alt={plan.title} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{plan.title}</h3>
                <span className="plan-subtitle">{plan.subtitle}</span>
                <div className="plan-price">
                  <span className="currency">EGP</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features text-left">
                  {plan.features.map((f, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="plan-actions mt-4">
                  <button 
                    onClick={() => addToCart({
                      id: plan.id,
                      title: `${plan.title} Subscription`,
                      price: plan.price,
                      image: plan.image
                    })}
                    className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    Subscribe Now
                  </button>
                  <Link to={`/product/${plan.id}`} className="view-product-link text-center mt-2">
                    View System Specifications →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Animated Interactive Workflow / Methodology */}
      <section className="section bg-surface">
        <div className="container text-center">
          <div className="badge-center"><Layers size={14} /> INTEGRATION WORKFLOW</div>
          <h2 className="section-title">Seamless 3-Step System Integration</h2>
          <p className="section-subtitle">How we transform your business financial accounting in 3 simple phases.</p>

          <div className="grid-3-col workflow-grid mt-4">
            <div className="card workflow-card">
              <span className="workflow-step-num">01</span>
              <h3>Requirement Analysis & Data Audit</h3>
              <p>Evaluating existing chart of accounts, tax requirements, and mapping historical data.</p>
            </div>
            <div className="card workflow-card">
              <span className="workflow-step-num">02</span>
              <h3>System Configuration & Odoo Setup</h3>
              <p>Deploying Odoo ERP accounting modules, configuring e-invoicing APIs, and setting user roles.</p>
            </div>
            <div className="card workflow-card">
              <span className="workflow-step-num">03</span>
              <h3>User Training & Live Deployment</h3>
              <p>Comprehensive staff training, parallel run testing, and 24/7 go-live support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Growth CTA Section */}
      <section className="section text-center">
        <div className="container">
          <h2>Ready to Automate Your Business Accounting?</h2>
          <p className="section-subtitle">Consult our certified ERP consultants for a custom implementation quote.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Request ERP Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
