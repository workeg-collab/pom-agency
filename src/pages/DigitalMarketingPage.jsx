import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Share2, Target, BarChart2, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import './DigitalMarketingPage.css';

export default function DigitalMarketingPage() {
  const pillars = [
    {
      icon: Share2,
      title: 'Social Media Management',
      desc: 'Creative visual production, daily campaign management, and audience growth across Facebook, Instagram, TikTok & LinkedIn.'
    },
    {
      icon: Target,
      title: 'Targeted Advertising',
      desc: 'High-converting Meta Ads, Google PPC campaigns, and re-targeting pipelines designed for maximum ROI.'
    },
    {
      icon: BarChart2,
      title: 'Performance & Analytics',
      desc: 'Real-time conversion tracking, funnel optimization, and data analytics dashboards.'
    },
    {
      icon: MessageSquare,
      title: 'Content Strategy & Copywriting',
      desc: 'Persuasive sales scripts, visual storytelling, and brand voice positioning that convert followers into customers.'
    }
  ];

  return (
    <div className="digital-marketing-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><TrendingUp size={14} /> DIGITAL MARKETING</div>
          <h1>Social Media & Digital Growth That Drives Sales</h1>
          <p className="page-header-sub">
            Data-driven online marketing strategies, compelling visual content, and targeted ad campaigns tailored to expand your client base.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">WHAT WE DO</div>
          <h2 className="section-title">Core Marketing Solutions</h2>
          <p className="section-subtitle">Empowering brands with high engagement and predictable lead generation.</p>

          <div className="grid-2-col">
            {pillars.map((item, idx) => (
              <div key={idx} className="card marketing-pillar-card">
                <div className="pillar-header">
                  <item.icon size={28} className="pillar-icon" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
                <ul className="pillar-list">
                  <li><CheckCircle2 size={16} className="check-icon" /> Customized Strategy</li>
                  <li><CheckCircle2 size={16} className="check-icon" /> Weekly Performance Reports</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Ready to Scale Your Brand's Digital Presence?</h2>
          <p className="section-subtitle">Get in touch with our marketing strategists to create your custom campaign.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Request Marketing Plan <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
