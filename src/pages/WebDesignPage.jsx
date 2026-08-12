import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Code, 
  Search, 
  BarChart3, 
  Mail, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Sliders, 
  ExternalLink,
  Layout,
  Smartphone,
  Zap,
  Globe,
  ShoppingCart,
  Building,
  Briefcase
} from 'lucide-react';
import './WebDesignPage.css';

export default function WebDesignPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const webDesignPillars = [
    {
      icon: Layout,
      title: 'Custom UI/UX Design',
      desc: 'Pixel-perfect, user-centered interface designs crafted to deliver memorable digital experiences.'
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First',
      desc: 'Seamless layouts that adapt dynamically across smartphones, tablets, laptops, and 4K displays.'
    },
    {
      icon: Zap,
      title: 'Lightning Speed Performance',
      desc: 'Optimized code structures, compressed assets, and fast loading speeds under 1.5 seconds.'
    },
    {
      icon: Search,
      title: 'Technical SEO Built-in',
      desc: 'Clean HTML5 semantic structure, Schema markup, and SEO best practices for high search rankings.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      desc: 'High-converting online store designs with payment gateway integrations and inventory controls.'
    },
    {
      icon: Code,
      title: 'Custom Web Apps',
      desc: 'Tailored SaaS platforms, dashboards, and enterprise web systems built with modern frameworks.'
    }
  ];

  const showcases = [
    {
      id: 'ecommerce',
      category: 'ecommerce',
      title: 'Modern E-Commerce Storefront',
      subtitle: 'Online Retail & Shopping Portal',
      image: '/assets/Pc-Android-IOS.jpg',
      tags: ['React', 'WooCommerce', 'Stripe Pay'],
      desc: 'High-conversion online shopping platform featuring real-time inventory, multi-currency checkout, and seamless mobile UX.'
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: 'Corporate Business Portal',
      subtitle: 'Enterprise & Agency Website',
      image: '/assets/campaign-creators-771730-unsplash.jpg',
      tags: ['Next.js', 'Tailwind', 'SEO Built-in'],
      desc: 'Sophisticated corporate platform with service showcases, interactive quote calculators, and multi-language support.'
    },
    {
      id: 'saas',
      category: 'saas',
      title: 'SaaS Platform Dashboard',
      subtitle: 'Cloud Tech & Analytics App',
      image: '/assets/Post-1.jpg',
      tags: ['React', 'Chart.js', 'REST API'],
      desc: 'Sleek dark/light theme dashboard interface designed for data visualization, user management, and cloud subscriptions.'
    },
    {
      id: 'realestate',
      category: 'corporate',
      title: 'Real Estate & Property Showcase',
      subtitle: 'Property Listing Portal',
      image: '/assets/Post-3.jpg',
      tags: ['Interactive Map', 'Filter Search'],
      desc: 'Feature-rich real estate website with interactive property maps, virtual tour embeds, and lead capture forms.'
    },
    {
      id: 'portfolio',
      category: 'creative',
      title: 'Creative Agency Portfolio',
      subtitle: 'Brand & Creative Studio',
      image: '/assets/Post-4.jpg',
      tags: ['Animated UI', 'GSAP', 'Minimalist'],
      desc: 'High-impact creative portfolio showcasing brand case studies with smooth micro-interactions and typography.'
    },
    {
      id: 'educational',
      category: 'saas',
      title: 'EdTech & Learning Management',
      subtitle: 'Online Courses & LMS Platform',
      image: '/assets/Post-5.jpg',
      tags: ['Video Streaming', 'Student LMS'],
      desc: 'Interactive learning portal with video lesson streaming, student progress tracking, and automated certificate generation.'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Wireframing', desc: 'Analyzing brand requirements, user personas, site architecture, and wireframe layouts.' },
    { num: '02', title: 'UI/UX Visual Prototype', desc: 'Designing high-fidelity interactive mockups with color palettes, typography, and UI assets.' },
    { num: '03', title: 'Frontend & Backend Code', desc: 'Developing clean, responsive, fast-loading codebase integrated with custom CMS or APIs.' },
    { num: '04', title: 'Testing & Official Launch', desc: 'Rigorous cross-browser QA testing, SEO audit, security checks, and official deployment.' }
  ];

  const team = [
    { name: 'Angel Sweeney', role: 'Head of Web Development', image: '/assets/Team-1.jpg' },
    { name: 'Nathanael Riley', role: 'Lead SEO Specialist', image: '/assets/Team-2.jpg' },
    { name: 'Chai Maldonado', role: 'UI/UX Brand Designer', image: '/assets/Team-3.jpg' },
    { name: 'Carlo Terrell', role: 'Senior Full Stack Developer', image: '/assets/pic-20.jpg' }
  ];

  const filteredShowcases = activeFilter === 'all' 
    ? showcases 
    : showcases.filter(s => s.category === activeFilter);

  return (
    <div className="web-design-page">
      {/* Page Header */}
      <section className="page-header text-center">
        <div className="container">
          <div className="badge"><Monitor size={14} /> WEB DESIGN & ENGINEERING</div>
          <h1>Custom Web Design & Digital Engineering</h1>
          <p className="page-header-sub">
            We build high-performance, responsive websites and web applications designed to elevate your brand credibility and drive maximum conversions.
          </p>
        </div>
      </section>

      {/* Pillars Overview Grid */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> CORE CAPABILITIES</div>
          <h2 className="section-title">Everything Your Website Needs to Succeed</h2>
          <p className="section-subtitle">
            From initial UI/UX wireframes to full-stack engineering, performance tuning, and technical SEO.
          </p>

          <div className="grid-3-col">
            {webDesignPillars.map((p, idx) => (
              <div key={idx} className="card pillar-card">
                <div className="pillar-icon-box">
                  <p.icon size={26} className="pillar-icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pillar-tag"><CheckCircle2 size={14} /> Included Standard</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Showcase Showcase Showcase Cards (Big Showcase Boxes) */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Layout size={14} /> PORTFOLIO SHOWCASE</div>
          <h2 className="section-title">Explore Our Modern Website Showcase</h2>
          <p className="section-subtitle">
            Discover some of our flagship website designs and interactive portal templates built for industry leaders.
          </p>

          {/* Filter Tabs */}
          <div className="showcase-filter-row flex-center gap-2 mb-4">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ecommerce')}
            >
              E-Commerce
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveFilter('corporate')}
            >
              Corporate
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'saas' ? 'active' : ''}`}
              onClick={() => setActiveFilter('saas')}
            >
              SaaS & Apps
            </button>
          </div>

          {/* Showcase Cards Grid */}
          <div className="grid-2-col showcase-grid">
            {filteredShowcases.map((project) => (
              <div key={project.id} className="card showcase-big-card">
                <div className="showcase-img-wrapper">
                  <img src={project.image} alt={project.title} className="showcase-img" />
                  <div className="showcase-overlay">
                    <Link to="/mail-professional" className="btn btn-primary btn-sm">
                      Request Similar Design <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="showcase-details">
                  <div className="showcase-header">
                    <div>
                      <span className="showcase-subtitle">{project.subtitle}</span>
                      <h3 className="showcase-title">{project.title}</h3>
                    </div>
                  </div>
                  <p className="showcase-desc">{project.desc}</p>
                  <div className="showcase-tags">
                    {project.tags.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="showcase-actions mt-3">
                    <Link to="/mail-professional" className="btn btn-outline full-width">
                      Consult Web Specialist
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Code size={14} /> METHODOLOGY</div>
          <h2 className="section-title">Our Web Design Process</h2>
          <p className="section-subtitle">A proven 4-stage engineering methodology to turn your concept into a live website.</p>

          <div className="grid-4-col process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="card process-card">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Users size={14} /> WEB DESIGN EXPERTS</div>
          <h2 className="section-title">Meet Our Web Design Team</h2>
          <p className="section-subtitle">A multidisciplinary team of developers, designers, and SEO strategists.</p>

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
          <h2>Ready to Launch Your Next-Gen Website?</h2>
          <p className="section-subtitle">Let our engineering and marketing experts build your company's next website.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Start Your Web Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
