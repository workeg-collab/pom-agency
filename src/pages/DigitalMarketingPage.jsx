import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  Share2, 
  TrendingUp, 
  Target, 
  Search, 
  BarChart3, 
  Zap, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Users, 
  Award, 
  Radio, 
  Compass, 
  PenTool, 
  Layers, 
  PieChart 
} from 'lucide-react';
import './DigitalMarketingPage.css';

export default function DigitalMarketingPage() {
  const { addToCart } = useCart();
  const [activeChannel, setActiveChannel] = useState('all');

  const marketingPillars = [
    {
      icon: Share2,
      title: 'Social Media Management',
      desc: '360° management of your brand presence across Facebook, Instagram, TikTok, LinkedIn, and X with custom graphics and reels.'
    },
    {
      icon: Target,
      title: 'Performance Marketing & Paid Ads',
      desc: 'High-ROI Meta Ads (Facebook/Instagram), Google Search & Display Ads, TikTok Ads, and LinkedIn Ads targeted to ready buyers.'
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Dominate Google search results with technical SEO audits, high-intent keyword research, content optimization, and backlink authority.'
    },
    {
      icon: PenTool,
      title: 'Content Strategy & Copywriting',
      desc: 'Persuasive ad copy, viral short-form video scripts, high-converting landing page text, and engaging blog articles.'
    },
    {
      icon: Video,
      title: 'Video Production & Motion Graphics',
      desc: 'Professional reel editing, promotional videos, motion graphic animations, and high-impact visual storytelling.'
    },
    {
      icon: BarChart3,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'A/B testing, funnel optimization, heatmap analytics, and landing page enhancements to turn visitors into paying customers.'
    }
  ];

  const channelsShowcase = [
    {
      id: 'meta-ads',
      channel: 'social',
      title: 'Meta Ads & Instagram Reels Growth',
      subtitle: 'Facebook & Instagram Ads',
      image: '/assets/Post-6.jpg',
      tags: ['Meta Ads', 'ROAS Optimization', 'Reels Strategy'],
      desc: 'Scalable paid advertising campaigns engineered for maximum ROAS, audience targeting, and viral engagement.'
    },
    {
      id: 'google-ads',
      channel: 'search',
      title: 'Google Search & PPC Campaigns',
      subtitle: 'High-Intent Search Ads',
      image: '/assets/Post-2.jpg',
      tags: ['Google PPC', 'Keyword Bidding', 'Conversion Tracking'],
      desc: 'Capture ready-to-buy customers searching for your services with hyper-targeted Google Search & Shopping ads.'
    },
    {
      id: 'tiktok-viral',
      channel: 'social',
      title: 'TikTok & Short-Form Video Growth',
      subtitle: 'Viral Video Content',
      image: '/assets/Post-1.jpg',
      tags: ['TikTok Ads', 'Viral Scripts', 'Gen-Z Reach'],
      desc: 'High-energy short-form video campaigns designed to capture attention in the first 3 seconds and drive viral sales.'
    },
    {
      id: 'seo-dominance',
      channel: 'search',
      title: 'Organic Search Engine Dominance',
      subtitle: 'Rank #1 on Google',
      image: '/assets/Post-3.jpg',
      tags: ['Technical SEO', 'Keyword Rank', 'Backlinks'],
      desc: 'Long-term organic traffic strategies that secure top 3 Google rankings for your most lucrative business keywords.'
    }
  ];

  const marketingPackages = [
    {
      id: 'starter-marketing',
      title: 'Starter Marketing',
      subtitle: 'Small Businesses & Launching Brands',
      price: 3999.99,
      period: '/Month',
      image: '/assets/Post-6.jpg',
      features: [
        '12 Custom Social Media Posts',
        'Facebook & Instagram Management',
        'Basic Meta Paid Ads Setup',
        'Monthly Analytics Report',
        'Community Engagement'
      ],
      recommended: false
    },
    {
      id: 'growth-pro-marketing',
      title: 'Growth Pro Marketing',
      subtitle: 'Scaling Companies & E-Commerce',
      price: 7999.99,
      period: '/Month',
      image: '/assets/Post-2.jpg',
      features: [
        '24 Custom Posts & 8 Video Reels',
        'Meta Ads + Google Search Ads',
        'Professional Ad Copywriting',
        'Conversion Funnel Optimization',
        'Weekly Performance Reports',
        'Dedicated Marketing Strategist'
      ],
      recommended: true
    },
    {
      id: 'enterprise-dominance',
      title: 'Enterprise Dominance',
      subtitle: 'Market Leaders & Multi-Brands',
      price: 14999.99,
      period: '/Month',
      image: '/assets/Post-1.jpg',
      features: [
        'Unlimited Content & Video Reels',
        '360° Omnichannel Marketing (Meta, Google, TikTok, LinkedIn)',
        'Full Video Production & Motion Graphics',
        'SEO Ranking Strategy & PR Distribution',
        'Dedicated Growth Marketing Team',
        '24/7 Priority Support & Weekly Calls'
      ],
      recommended: false
    }
  ];

  const stats = [
    { num: '3.8x', label: 'Average Campaign ROAS' },
    { num: '10M+', label: 'Monthly Ad Reach' },
    { num: '450+', label: 'Campaigns Executed' },
    { num: '98%', label: 'Client Retention Rate' }
  ];

  const steps = [
    { num: '01', title: 'Market Audit & Persona Research', desc: 'Analyzing competitor ads, target audience demographics, and high-converting keywords.' },
    { num: '02', title: 'Creative Strategy & Content Engine', desc: 'Designing high-impact graphics, writing viral ad copy, and scripting video reels.' },
    { num: '03', title: 'Multi-Channel Ad Launch', desc: 'Deploying hyper-targeted campaigns across Meta, Google, TikTok, and LinkedIn.' },
    { num: '04', title: 'A/B Testing & ROAS Scaling', desc: 'Continuous ad optimization, budget scaling, and conversion rate enhancement.' }
  ];

  const filteredShowcases = activeChannel === 'all' 
    ? channelsShowcase 
    : channelsShowcase.filter(c => c.channel === activeChannel);

  return (
    <div className="digital-marketing-page">
      {/* 1. Main Top Hero Section */}
      <section className="marketing-hero-section">
        <div className="container grid-2-col align-center">
          <div className="marketing-hero-content">
            <div className="badge">
              <TrendingUp size={14} /> DIGITAL MARKETING & GROWTH
            </div>
            <h1 className="marketing-hero-title">
              Data-Driven Digital Marketing & Growth Engineering
            </h1>
            <p className="page-header-sub text-left mb-4">
              We engineer high-ROI digital marketing campaigns, social media strategies, targeted paid advertising, and search engine dominance to scale your revenue.
            </p>
            <div className="marketing-hero-checklist mb-4">
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Targeted Meta Ads, Google Ads & TikTok Marketing</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> High-Converting Content, Graphic Design & Video Reels</div>
              <div className="check-item"><CheckCircle2 size={16} className="check-icon" /> Guaranteed Organic Google #1 Ranking SEO Strategies</div>
            </div>
            <div className="hero-actions">
              <a href="#packages" className="btn btn-primary">
                View Marketing Packages <ArrowRight size={16} />
              </a>
              <Link to="/mail-professional" className="btn btn-secondary">
                Request Free Audit
              </Link>
            </div>
          </div>
          <div className="marketing-hero-visual">
            <div className="marketing-img-box">
              <img 
                src="/assets/Post-6.jpg" 
                alt="Digital Marketing Campaign Strategy" 
                className="marketing-official-img"
              />
              <div className="marketing-floating-badge">
                <Sparkles size={16} className="text-primary" />
                <span>3.8x Average Campaign ROAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section */}
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

      {/* 3. Core Pillars & Services */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> SERVICES</div>
          <h2 className="section-title">End-to-End Digital Marketing Services</h2>
          <p className="section-subtitle">
            Complete digital marketing firepower to position your brand as an industry leader and generate qualified sales leads.
          </p>

          <div className="grid-3-col mt-4">
            {marketingPillars.map((p, idx) => (
              <div key={idx} className="card marketing-pillar-card">
                <div className="pillar-icon-box mb-3">
                  <p.icon size={26} className="pillar-icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="feature-check"><CheckCircle2 size={16} /> Standard Strategy</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Channel Showcase */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Target size={14} /> CAMPAIGN SHOWCASE</div>
          <h2 className="section-title">Omnichannel Campaign Excellence</h2>
          <p className="section-subtitle">
            Explore our high-performing campaign models across search engines, social media, and short-form video.
          </p>

          {/* Filter Tabs */}
          <div className="showcase-filter-row flex-center gap-2 mb-4">
            <button 
              className={`filter-btn ${activeChannel === 'all' ? 'active' : ''}`}
              onClick={() => setActiveChannel('all')}
            >
              All Channels
            </button>
            <button 
              className={`filter-btn ${activeChannel === 'social' ? 'active' : ''}`}
              onClick={() => setActiveChannel('social')}
            >
              Social Media & Ads
            </button>
            <button 
              className={`filter-btn ${activeChannel === 'search' ? 'active' : ''}`}
              onClick={() => setActiveChannel('search')}
            >
              Search & SEO
            </button>
          </div>

          <div className="grid-2-col showcase-grid mt-4">
            {filteredShowcases.map((project) => (
              <div key={project.id} className="card showcase-big-card">
                <div className="showcase-img-wrapper">
                  <img src={project.image} alt={project.title} className="showcase-img" />
                  <div className="showcase-overlay">
                    <Link to="/mail-professional" className="btn btn-primary btn-sm">
                      Consult Strategist <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="showcase-details">
                  <span className="showcase-subtitle">{project.subtitle}</span>
                  <h3 className="showcase-title">{project.title}</h3>
                  <p className="showcase-desc">{project.desc}</p>
                  <div className="showcase-tags">
                    {project.tags.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Marketing Packages / Pricing Plans */}
      <section className="section bg-surface" id="packages">
        <div className="container">
          <div className="badge-center"><Zap size={14} /> MARKETING PACKAGES</div>
          <h2 className="section-title">Growth Marketing Packages</h2>
          <p className="section-subtitle">Transparent pricing plans built for brands ready to accelerate their online sales.</p>

          <div className="grid-3-col pricing-grid mt-4">
            {marketingPackages.map((pkg) => (
              <div key={pkg.id} className={`card pricing-card text-center ${pkg.recommended ? 'recommended' : ''}`}>
                {pkg.recommended && <div className="popular-badge">POPULAR CHOICE</div>}
                <div className="plan-img-box mb-3">
                  <img src={pkg.image} alt={pkg.title} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{pkg.title}</h3>
                <span className="plan-subtitle">{pkg.subtitle}</span>
                <div className="plan-price">
                  <span className="currency">EGP</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
                <ul className="plan-features text-left">
                  {pkg.features.map((f, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="plan-actions mt-4">
                  <button 
                    onClick={() => addToCart({
                      id: pkg.id,
                      title: `${pkg.title} Package`,
                      price: pkg.price,
                      image: pkg.image
                    })}
                    className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    Launch Campaign
                  </button>
                  <Link to={`/product/${pkg.id}`} className="view-product-link text-center mt-2">
                    View Package Scope →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Campaign Workflow Methodology */}
      <section className="section">
        <div className="container text-center">
          <div className="badge-center"><Compass size={14} /> METHODOLOGY</div>
          <h2 className="section-title">Our Growth Strategy Workflow</h2>
          <p className="section-subtitle">A proven 4-stage engineering methodology to turn ad spend into high revenue.</p>

          <div className="grid-4-col process-grid mt-4">
            {steps.map((step, idx) => (
              <div key={idx} className="card process-card text-left">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Growth CTA Section */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2>Ready to Scale Your Brand's Digital Growth?</h2>
          <p className="section-subtitle">Get a free custom marketing proposal and ROI forecast from our senior strategists.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Request Free Marketing Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
