import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Zap, Layers, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const odooFeatures = [
    {
      title: 'Ultra-Fast Performance (<90ms)',
      desc: 'Experience true speed, reduced data entry, smart AI, and a lightning-fast UI. All operations complete in under 90ms.'
    },
    {
      title: 'Smooth & Easy User Adoption',
      desc: 'Intuitive interface designed to eliminate complexity so your team can adapt seamlessly with zero friction.'
    },
    {
      title: 'Fully Integrated Ecosystem',
      desc: 'Seamlessly connects Accounting, Invoicing, Inventory, Sales, CRM, HR, and Point-of-Sale in one single platform.'
    },
    {
      title: 'Modular & Scalable Growth',
      desc: 'Start with accounting and add apps as your business scales — one app at a time as your customer base expands.'
    }
  ];

  return (
    <div className="accounting-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Calculator size={14} /> ACCOUNTING & ERP</div>
          <h1>Odoo One Platform: All Your Business Accounting</h1>
          <p className="page-header-sub">
            Experience true speed, reduced data entry, smart AI, and a fast UI. All operations are done in less than 90ms — faster than a blink.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">WHY CHOOSE ODOO</div>
          <h2 className="section-title">What Makes Odoo Accounting Special?</h2>
          <p className="section-subtitle">The modern ERP solution trusted by millions of enterprises worldwide.</p>

          <div className="grid-2-col">
            {odooFeatures.map((item, idx) => (
              <div key={idx} className="card odoo-card">
                <div className="odoo-badge"><Zap size={16} /> Fast Tech</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2-col align-center">
          <div>
            <div className="badge"><Layers size={14} /> IMPLEMENTATION</div>
            <h2>Full Odoo Implementation & Local Support</h2>
            <p className="lead-text">
              We handle end-to-end Odoo setup, chart of accounts customization, tax configuration, electronic invoicing compliance, and employee training.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} className="check-icon" /> Custom Chart of Accounts & Tax Rules</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Automated Invoice & Payment Tracking</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Multi-Currency & Bank Reconciliation</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Real-time Financial Reporting & Dashboards</li>
            </ul>
            <Link to="/mail-professional" className="btn btn-primary">
              Consult Odoo Expert <ArrowRight size={18} />
            </Link>
          </div>
          <div className="card text-center p-5">
            <img 
              src="https://pom-agency.online/wp-content/uploads/2025/08/Odoo-implementation.png" 
              alt="Odoo Implementation" 
              className="img-fluid rounded"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
