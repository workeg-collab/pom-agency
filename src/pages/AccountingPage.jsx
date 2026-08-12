import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Zap, Layers, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import './AccountingPage.css';

export default function AccountingPage() {
  const odooFeatures = [
    {
      title: 'A Smooth and Easy Experience',
      desc: 'Designed to ensure hassle-free user adoption across your entire company.'
    },
    {
      title: 'Full Integration for Complex Businesses',
      desc: 'Odoo’s fluidity and full integration cover the needs of even the most complex enterprise workflows.'
    },
    {
      title: 'Modular & Scalable Growth',
      desc: 'Allows you to add apps as your business grows, with one app added at a time as your customer base expands.'
    },
    {
      title: 'Massive Developer Ecosystem',
      desc: 'Thanks to its open-source release, Odoo effectively leverages a large developer base to deliver innovative solutions.'
    }
  ];

  return (
    <div className="accounting-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Calculator size={14} /> ACCOUNTING PROGRAMS</div>
          <h1>Odoo One Platform: All Your Business</h1>
          <p className="page-header-sub">
            Experience true speed, reduced data entry, smart AI, and a fast UI. All operations are done in less than 90ms — faster than a blink.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">WHAT MAKES ODOO SPECIAL</div>
          <h2 className="section-title">What Makes Odoo Special?</h2>
          <p className="section-subtitle">The all-in-one management software trusted by millions of companies.</p>

          <div className="grid-2-col">
            {odooFeatures.map((item, idx) => (
              <div key={idx} className="card odoo-card">
                <div className="odoo-badge"><Zap size={16} /> Fast Performance</div>
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
            <h2>Full Odoo Implementation & Consultation</h2>
            <p className="lead-text">
              We provide complete Odoo setup, customization, and local electronic invoicing integration tailored to your company needs.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} className="check-icon" /> Customized Chart of Accounts</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Automated Invoicing & Expenses</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Multi-Currency & Bank Sync</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Real-time Financial Reports</li>
            </ul>
            <Link to="/mail-professional" className="btn btn-primary">
              Consult Odoo Specialist <ArrowRight size={18} />
            </Link>
          </div>
          <div className="card text-center p-4">
            <img 
              src="/assets/Odoo-implementation.png" 
              alt="Odoo Implementation" 
              className="img-fluid rounded"
              onError={(e) => {
                e.target.src = '/assets/odoo-image.png';
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
