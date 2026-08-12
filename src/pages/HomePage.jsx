import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  Mail, 
  Share2, 
  Calculator, 
  Server, 
  Monitor, 
  Cpu, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Award
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const { addToCart } = useCart();

  const pricingPlans = [
    {
      id: 'individual-mail',
      title: 'Individual',
      subtitle: 'Single Use',
      price: 99.99,
      period: '/Month',
      image: '/assets/iiii.png',
      features: [
        '1 mailbox included',
        '5GB for emails',
        'Cloud infrastructure',
        'Antivirus check'
      ],
      recommended: false
    },
    {
      id: 'business-mail',
      title: 'Business',
      subtitle: 'Multiple Users',
      price: 499.99,
      period: '/Month',
      image: '/assets/bbbb-300x300.png',
      features: [
        '3 mailboxes included',
        '30GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support'
      ],
      recommended: true
    },
    {
      id: 'professional-mail',
      title: 'Professional',
      subtitle: 'Multiple Users',
      price: 999.99,
      period: '/Month',
      image: '/assets/pppp-300x300.png',
      features: [
        '5 mailboxes included',
        '75GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support',
        'Free domain'
      ],
      recommended: false
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">
              <Sparkles size={14} /> DIGITAL PLATFORM
            </div>
            <h1 className="hero-title">
              Turning Ideas Into Software Solutions, Hardware Systems, Smart Control, Professional Email, Accounting Systems, Websites, Social Media |
            </h1>
            <p className="hero-description">
              We provide complete solutions in software, hardware, professional email, accounting systems, smart control, website development, and social media management — your business growth starts here.
            </p>
            <div className="hero-actions">
              <Link to="/mail-professional" className="btn btn-primary">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Web Design & Services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">Uptime Guarantee</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Technical Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-label">Global Clients</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img 
                src="/assets/Illustration-2.jpg" 
                alt="POM Digital Platform" 
                className="hero-official-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> FEATURES</div>
          <h2 className="section-title">Your All-in-One Tech Partner</h2>
          <p className="section-subtitle">
            From professional email and smart control to websites, accounting, and social media — our integrated services cover every step of your business growth.
          </p>

          <div className="grid-5-col">
            <div className="tech-pill">
              <Zap size={20} className="pill-icon" />
              <h4>Smart & Scalable Tech</h4>
              <p>Smart & scalable tech solutions</p>
            </div>
            <div className="tech-pill">
              <Mail size={20} className="pill-icon" />
              <h4>Secure Email</h4>
              <p>Secure professional email</p>
            </div>
            <div className="tech-pill">
              <Monitor size={20} className="pill-icon" />
              <h4>Modern Websites</h4>
              <p>Modern websites that convert</p>
            </div>
            <div className="tech-pill">
              <Calculator size={20} className="pill-icon" />
              <h4>Accounting Systems</h4>
              <p>Accounting & business tracking</p>
            </div>
            <div className="tech-pill">
              <TrendingUp size={20} className="pill-icon" />
              <h4>Social Media</h4>
              <p>Social media that drives sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-4-col">
            <div className="card service-card">
              <div className="service-icon"><Mail size={28} /></div>
              <h3>Professional Email</h3>
              <p>Secure, branded email services that enhance your business credibility.</p>
              <Link to="/mail-professional" className="card-link">Learn More <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Share2 size={28} /></div>
              <h3>Social Media Management</h3>
              <p>Engaging content and smart strategies to grow your audience and sales.</p>
              <Link to="/digital-marketing" className="card-link">Learn More <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Calculator size={28} /></div>
              <h3>Accounting Systems</h3>
              <p>Easy-to-use solutions to track finances, manage invoices, and control expenses.</p>
              <Link to="/accounting" className="card-link">Learn More <ArrowRight size={14} /></Link>
            </div>

            <div className="card service-card">
              <div className="service-icon"><Server size={28} /></div>
              <h3>Network & Servers</h3>
              <p>Reliable, high-speed networking and server solutions built for your business.</p>
              <Link to="/network-servers" className="card-link">Learn More <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Email Section */}
      <section className="section bg-surface email-feature-section">
        <div className="container grid-2-col">
          <div className="email-feature-content">
            <div className="badge"><Mail size={14} /> Mail Professional</div>
            <h2>Professional Email Solutions: Power Your Business Communication</h2>
            <p className="lead-text">
              Secure, branded, and reliable email services that build trust and keep your business connected — anytime, anywhere.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={18} className="check-icon" /> Custom domain email addresses to enhance brand credibility</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Secure, encrypted communication to protect your data</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Easy integration with your devices and applications</li>
              <li><CheckCircle2 size={18} className="check-icon" /> Large mailbox storage and flexible plans</li>
              <li><CheckCircle2 size={18} className="check-icon" /> 24/7 technical support for uninterrupted service</li>
            </ul>
            <Link to="/mail-professional" className="btn btn-primary mt-4">
              Learn More About Professional Email
            </Link>
          </div>
          <div className="email-feature-graphic text-center">
            <img 
              src="/assets/iiii.png" 
              alt="Professional Email Solutions" 
              className="email-pro-official-img"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Zap size={14} /> PRICING PLANS</div>
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">
            Choose the right professional email package for your business.
          </p>

          <div className="grid-3-col pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`card pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <div className="popular-badge">POPULAR CHOICE</div>}
                <div className="plan-img-box mb-3">
                  <img src={plan.image} alt={plan.title} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{plan.title}</h3>
                <span className="plan-subtitle">{plan.subtitle}</span>
                <div className="plan-price">
                  <span className="currency">EGP</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}><CheckCircle2 size={16} className="check-icon" /> {feat}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: plan.id,
                      title: `${plan.title} Mail Plan`,
                      price: plan.price,
                      image: plan.image
                    })}
                    className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/product/${plan.id}`} className="view-product-link">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Cpu size={14} /> WHAT WE DO</div>
          <h2 className="section-title">Tech Solutions Tailored to Your Business</h2>
          <p className="section-subtitle">
            We specialize in delivering high-impact services in professional email, social media, accounting, networking, and servers — built to keep your business running smarter and faster.
          </p>

          <div className="grid-4-col">
            <div className="card feature-box">
              <Monitor size={32} className="box-icon" />
              <h3>Web Design</h3>
              <p>Modern, responsive websites built to impress and convert visitors into customers.</p>
              <Link to="/about" className="box-link">Learn More →</Link>
            </div>

            <div className="card feature-box">
              <Shield size={32} className="box-icon" />
              <h3>Smart Control</h3>
              <p>Integrated smart control systems for homes and businesses.</p>
              <Link to="/smart-control" className="box-link">Learn More →</Link>
            </div>

            <div className="card feature-box">
              <Cpu size={32} className="box-icon" />
              <h3>IT Services</h3>
              <p>Complete IT support, networking, and system maintenance for your business.</p>
              <Link to="/it" className="box-link">Learn More →</Link>
            </div>

            <div className="card feature-box">
              <TrendingUp size={32} className="box-icon" />
              <h3>Digital Marketing</h3>
              <p>Targeted online strategies to grow your brand and increase sales.</p>
              <Link to="/digital-marketing" className="box-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Trust Banner */}
      <section className="section trust-section text-center">
        <div className="container">
          <div className="badge-center"><Award size={14} /> WORLDWIDE TRUST</div>
          <h2 className="section-title">Empowering Businesses with Professional Email Solutions</h2>
          <p className="section-subtitle">
            Trusted by companies worldwide for secure, branded, and reliable communication..
          </p>
        </div>
      </section>
    </div>
  );
}
