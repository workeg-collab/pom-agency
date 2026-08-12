import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Bot, LineChart, Cloud, ShieldCheck, ArrowRight, Award, MessageSquare, Newspaper } from 'lucide-react';
import './ITPage.css';

export default function ITPage() {
  const itPillars = [
    { icon: Bot, title: 'Automation AI', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: LineChart, title: 'Analytics & Insights', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' },
    { icon: ShieldCheck, title: 'Fast & Secure Platform', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.' }
  ];

  const counters = [
    { num: '15M+', label: 'Downloaded' },
    { num: '99%', label: 'Positive Feedback' },
    { num: '2M+', label: 'Active Users' },
    { num: '500+', label: 'Contributors' }
  ];

  return (
    <div className="it-page">
      <section className="page-header">
        <div className="container grid-2-col align-center">
          <div>
            <div className="badge"><Cpu size={14} /> DIGITAL PLATFORM</div>
            <h1>Turning Ideas Into Your Reality Unreal Projects |</h1>
            <p className="page-header-sub text-left">
              Much evil soon high in hope do view. Out may few northward believing attempted. Yet timed being songs marry one defer men our. Although finished blessing do of. Consider speaking me prospect whatever if. Ten nearer rather hunted.
            </p>
            <Link to="/mail-professional" className="btn btn-primary mt-4">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/assets/Illustration-2.jpg" alt="IT Platform" className="hero-official-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">FEATURES</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own uncommonly travelling now acceptance.</p>

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

      {/* Counters section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Award size={14} /> WORLDWIDE EXPERIENCE</div>
          <h2 className="section-title">We Always Try To Understand Users Expectation</h2>
          <p className="section-subtitle">Delivering high quality enterprise solutions globally.</p>

          <div className="grid-4-col mt-4">
            {counters.map((c, i) => (
              <div key={i} className="card text-center p-4">
                <span className="stat-num text-primary" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{c.num}</span>
                <h4 className="mt-2" style={{ color: '#0f172a' }}>{c.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Newspaper size={14} /> NEWS</div>
          <h2 className="section-title">Latest Posts & News</h2>

          <div className="grid-3-col mt-4">
            <div className="card p-4">
              <span className="text-muted font-size-sm">DECEMBER 12, 2025</span>
              <h3 className="mt-2 font-size-md">12-12-2025-888 casino online594985903517</h3>
              <p className="text-muted font-size-sm mt-2">Latest industry updates and technology news.</p>
            </div>
            <div className="card p-4">
              <span className="text-muted font-size-sm">DECEMBER 10, 2025</span>
              <h3 className="mt-2 font-size-md">Spojrzenie na twindor</h3>
              <p className="text-muted font-size-sm mt-2">Practical information intended for tech platforms.</p>
            </div>
            <div className="card p-4">
              <span className="text-muted font-size-sm">DECEMBER 08, 2025</span>
              <h3 className="mt-2 font-size-md">Gaming site Online: Practical Information</h3>
              <p className="text-muted font-size-sm mt-2">Wagering and online platform technology insights.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
