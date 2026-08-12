import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, Search, BarChart3, Mail, TrendingUp, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import './WebDesignPage.css';

export default function WebDesignPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      desc: 'High performance React, Vite, and Next.js custom web applications designed for conversion and speed.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      desc: 'Comprehensive technical and on-page search engine optimization to boost organic rankings and reach.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      desc: 'Data-driven competitor research, user experience audits, and growth analytics for digital campaigns.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      desc: 'Automated email sequence campaigns, newsletter design, and high deliverability inbox infrastructure.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      desc: 'Cross-platform paid ad management, audience targeting, and ROI focused growth strategies.'
    }
  ];

  const team = [
    { name: 'Angel Sweeney', role: 'Head of Web Development', image: 'https://pom-agency.online/wp-content/uploads/2023/04/Team-1.jpg' },
    { name: 'Nathanael Riley', role: 'Lead SEO & Analytics Specialist', image: 'https://pom-agency.online/wp-content/uploads/2023/04/Team-2.jpg' },
    { name: 'Chai Maldonado', role: 'UI/UX & Brand Designer', image: 'https://pom-agency.online/wp-content/uploads/2023/04/Team-3.jpg' },
    { name: 'Carlo Terrell', role: 'Senior Full Stack Developer', image: 'https://pom-agency.online/wp-content/uploads/2023/04/pic-20.jpg' }
  ];

  return (
    <div className="web-design-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="badge"><Monitor size={14} /> WEB DESIGN & ABOUT</div>
          <h1>AI Experts Dedicated to Your Digital Success</h1>
          <p className="page-header-sub">
            We combine high-end UI/UX design, modern Web Development, and AI innovation to build impactful digital platforms.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">WHAT WE DO</div>
          <h2 className="section-title">Web & AI Services We Provide</h2>
          <p className="section-subtitle">Tailored digital engineering and marketing solutions built for growing businesses.</p>

          <div className="grid-3-col">
            {services.map((s, idx) => (
              <div key={idx} className="card service-feature-card">
                <s.icon size={32} className="service-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="feature-check"><CheckCircle2 size={16} /> Enterprise Grade</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Users size={14} /> OUR AMAZING TEAM</div>
          <h2 className="section-title">Meet Our Experts</h2>
          <p className="section-subtitle">A multidisciplinary team of developers, designers, and marketing strategists.</p>

          <div className="grid-4-col">
            {team.map((member, idx) => (
              <div key={idx} className="card team-card text-center">
                <div className="team-avatar-box">
                  <img src={member.image} alt={member.name} className="team-avatar" onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400';
                  }} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth CTA */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2>Grow Your Business Within a Few Months</h2>
          <p className="section-subtitle">Let our engineering and marketing experts build your company's next-gen website.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
