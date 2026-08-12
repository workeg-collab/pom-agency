import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Bot, LineChart, Cloud, ShieldCheck, Wifi, ArrowRight } from 'lucide-react';
import './ITPage.css';

export default function ITPage() {
  const itPillars = [
    { icon: Bot, title: 'Automation AI', desc: 'Custom AI bots and automated workflows to streamline operations and response times.' },
    { icon: LineChart, title: 'Analytics & Insights', desc: 'Deep data analytics, machine learning predictive models, and real-time business telemetry.' },
    { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Scalable cloud deployment, server migration, Kubernetes, and enterprise container hosting.' },
    { icon: ShieldCheck, title: 'Fast & Secure Platform', desc: 'End-to-end encryption, firewall defense, vulnerability scanning, and 24/7 server monitoring.' }
  ];

  return (
    <div className="it-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Cpu size={14} /> IT SERVICES</div>
          <h1>Turning Ideas Into Reality: Next-Gen IT Infrastructure</h1>
          <p className="page-header-sub">
            From cloud server deployment to automated AI systems and cybersecurity — we power your enterprise with cutting-edge IT engineering.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">AI & CLOUD</div>
          <h2 className="section-title">Delivering AI-Powered IT Solutions</h2>
          <p className="section-subtitle">Scalable technology architecture tailored for enterprise performance.</p>

          <div className="grid-4-col">
            {itPillars.map((p, idx) => (
              <div key={idx} className="card it-card text-center">
                <p.icon size={36} className="it-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Empower Your Organization with Custom IT Support</h2>
          <p className="section-subtitle">Get in touch for a comprehensive system audit and IT architecture plan.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Contact IT Specialist <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
