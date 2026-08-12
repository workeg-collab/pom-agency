import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Bot, LineChart, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';
import './ITPage.css';

export default function ITPage() {
  const itPillars = [
    { icon: Bot, title: 'Automation AI', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: LineChart, title: 'Analytics & Insights', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: ShieldCheck, title: 'Fast & Secure Platform', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' }
  ];

  return (
    <div className="it-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Cpu size={14} /> DIGITAL PLATFORM</div>
          <h1>Turning Ideas Into Your Reality | Unreal Projects</h1>
          <p className="page-header-sub">
            Much evil soon high in hope do view. Out may few northward believing attempted. Yet timed being songs marry one defer men our.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">FEATURES</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">Do play they miss give so up. Words to up style of since world. We leaf to snug on no need.</p>

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
          <h2>Unlock the Power of AI: Leading the Way in Digital Innovation</h2>
          <p className="section-subtitle">Hear from our clients and stay up-to-date on AI trends and insights.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
