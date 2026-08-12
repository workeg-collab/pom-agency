import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, Search, BarChart3, Mail, TrendingUp, Users, ArrowRight, CheckCircle2, Sparkles, Layers, Sliders } from 'lucide-react';
import './WebDesignPage.css';

export default function WebDesignPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  const team = [
    { name: 'Angel Sweeney', role: 'Head of Web Development', image: '/assets/Team-1.jpg' },
    { name: 'Nathanael Riley', role: 'Lead SEO Specialist', image: '/assets/Team-2.jpg' },
    { name: 'Chai Maldonado', role: 'UI/UX Brand Designer', image: '/assets/Team-3.jpg' },
    { name: 'Carlo Terrell', role: 'Senior Full Stack Developer', image: '/assets/pic-20.jpg' }
  ];

  return (
    <div className="web-design-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="badge"><Monitor size={14} /> About</div>
          <h1>AI Experts Dedicated to Your Success</h1>
          <p className="page-header-sub">
            Case read they must it of cold that. Speaking trifling an to unpacked moderate debating learning. An particular contrasted he excellence favourable on.
          </p>
        </div>
      </section>

      {/* Key Feature Highlights */}
      <section className="section">
        <div className="container grid-3-col">
          <div className="card text-center p-4">
            <Layers size={32} className="text-primary mb-3" />
            <h3>Feature List</h3>
            <p className="text-muted font-size-sm">Add multiple feature items, set different icons or images for each feature and also give custom links if needed.</p>
          </div>
          <div className="card text-center p-4">
            <Sliders size={32} className="text-primary mb-3" />
            <h3>Key Features</h3>
            <p className="text-muted font-size-sm">Choose your style from three different layouts and two unique icon background shapes.</p>
          </div>
          <div className="card text-center p-4">
            <Sparkles size={32} className="text-primary mb-3" />
            <h3>Connector Line</h3>
            <p className="text-muted font-size-sm">Show a connector line between each icon, changes its color and style to fit your unique design.</p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">WHAT WE DO</div>
          <h2 className="section-title">AI Services We Provide To Our Clients</h2>
          <p className="section-subtitle">In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as.</p>

          <div className="grid-3-col">
            {services.map((s, idx) => (
              <div key={idx} className="card service-feature-card">
                <s.icon size={32} className="service-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="feature-check"><CheckCircle2 size={16} /> Included Feature</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Users size={14} /> Company Team</div>
          <h2 className="section-title">Our Amazing Team</h2>
          <p className="section-subtitle">A multidisciplinary team of developers, designers, and marketing strategists.</p>

          <div className="grid-4-col">
            {team.map((member, idx) => (
              <div key={idx} className="card team-card text-center">
                <div className="team-avatar-box">
                  <img src={member.image} alt={member.name} className="team-avatar" />
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
          <h2>Grow Your Business Within Few Month</h2>
          <p className="section-subtitle">Let our engineering and marketing experts build your company's next-gen website.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
