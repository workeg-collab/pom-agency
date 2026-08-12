import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Settings, CreditCard, UserCheck, Star, Cpu, Layers, Sparkles, Calendar, MapPin, Search, Share2, FileText } from 'lucide-react';
import './MailProfessionalPage.css';

export default function MailProfessionalPage() {
  const { addToCart } = useCart();

  const steps = [
    {
      step: '01',
      title: 'Create a professional email for your business',
      desc: 'An email address that matches your custom domain to make your brand appear more credible.',
      icon: Mail
    },
    {
      step: '02',
      title: 'Choose an email hosting plan',
      desc: 'Are you running a new business? Follow the Individual, Business, or Professional hosting plans.',
      icon: UserCheck
    },
    {
      step: '03',
      title: 'Go to payment',
      desc: 'Select the number of mailboxes and the subscription period. After the payment process is complete, you will be directed to your hosting account control panel.',
      icon: CreditCard
    },
    {
      step: '04',
      title: 'Configure your email hosting',
      desc: "Finally, create an email account, set up DNS settings, and sync your email with other devices. All that's left is to send your emails.",
      icon: Settings
    }
  ];

  const plans = [
    {
      id: 'individual-mail',
      name: 'Individual',
      subtitle: 'Single Use',
      price: 99.99,
      image: '/assets/iiii.png',
      isSale: false,
      features: [
        '1 mailbox included',
        '5GB for emails',
        'Cloud infrastructure',
        'Antivirus check'
      ]
    },
    {
      id: 'business-mail',
      name: 'Business',
      subtitle: 'Multiple Users',
      price: 499.99,
      image: '/assets/bbbb-300x300.png',
      isSale: false,
      features: [
        '3 mailboxes included',
        '30GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support'
      ]
    },
    {
      id: 'professional-mail',
      name: 'Professional',
      subtitle: 'Multiple Users',
      price: 999.99,
      image: '/assets/pppp-300x300.png',
      isSale: true,
      features: [
        '5 mailboxes included',
        '75GB for emails',
        'Cloud infrastructure',
        'Antivirus check',
        'Full mobile sync support',
        'Free domain'
      ]
    }
  ];

  const aiServices = [
    {
      icon: Search,
      title: 'SEO Optimization',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: Share2,
      title: 'Social Engagement',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  const timelineEvents = [
    {
      date: 'March 2013',
      location: 'LA, California',
      title: 'Founded in USA',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima incidunt voluptates nemo.'
    },
    {
      date: 'May 2015',
      location: 'JP, Tokyo',
      title: 'Opening New Office',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima incidunt voluptates nemo.'
    },
    {
      date: 'Sept 2018',
      location: 'Workshops',
      title: 'Client Satisfaction',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima incidunt voluptates nemo.'
    },
    {
      date: 'Jun 2022',
      location: 'New Order',
      title: 'Improved Ourselves',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima incidunt voluptates nemo.'
    }
  ];

  return (
    <div className="mail-pro-page">
      {/* 1. Header Banner */}
      <section className="page-header text-center">
        <div className="container">
          <div className="badge"><Mail size={14} /> FEATURES</div>
          <h1>Create a professional email for your business</h1>
          <p className="page-header-sub">
            An email address that matches your custom domain to make your brand appear more credible.
          </p>
        </div>
      </section>

      {/* 2. 4 Steps Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">HOW IT WORKS</div>
          <h2 className="section-title">4 Steps to Setup Your Professional Email</h2>
          <p className="section-subtitle">Get your custom domain email live in minutes.</p>

          <div className="grid-4-col steps-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="card step-card">
                <div className="step-num">{s.step}</div>
                <s.icon size={28} className="step-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Plans */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Sparkles size={14} /> PRICING PLANS</div>
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">Choose the right professional email package for your business.</p>

          <div className="grid-3-col pricing-grid">
            {plans.map((p) => (
              <div key={p.id} className={`card pricing-card text-center ${p.isSale ? 'recommended' : ''}`}>
                {p.isSale && <div className="popular-badge">SALE</div>}
                <div className="plan-img-box mb-3">
                  <img src={p.image} alt={p.name} className="plan-thumb" />
                </div>
                <h3 className="plan-title">{p.name}</h3>
                <span className="plan-subtitle">{p.subtitle}</span>
                <div className="plan-price">
                  <span className="currency">EGP</span>
                  <span className="amount">{p.price}</span>
                  <span className="period">/Month</span>
                </div>
                <ul className="plan-features">
                  {p.features.map((f, i) => (
                    <li key={i}><CheckCircle2 size={16} className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="plan-actions">
                  <button 
                    onClick={() => addToCart({
                      id: p.id,
                      title: `${p.name} Mail Plan`,
                      price: p.price,
                      image: p.image
                    })}
                    className={`btn ${p.isSale ? 'btn-primary' : 'btn-secondary'} full-width`}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/product/${p.id}`} className="view-product-link text-center mt-2">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 4. WHAT WE DO / Custom Plan Banner */}
          <div className="custom-plan-banner card mt-5">
            <div className="banner-text">
              <div className="badge mb-2"><Sparkles size={12} /> WHAT WE DO</div>
              <h3>Need more? Get a custom plan</h3>
              <p>If you need more than 50 email accounts or want Private Email for more than 20 domains, reach out, and one of our team will create a custom plan for your business.</p>
            </div>
            <Link to="/terms-and-conditions" className="btn btn-primary">
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Cpu size={14} /> SERVICES</div>
          <h2 className="section-title">AI Development: Cutting-Edge Solutions for Your Industry</h2>
          <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div className="grid-3-col mt-4">
            {aiServices.map((s, idx) => (
              <div key={idx} className="card service-feature-card">
                <div className="pillar-icon-box mb-3">
                  <s.icon size={26} className="pillar-icon" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="feature-check"><CheckCircle2 size={16} /> Included Solution</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Company Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Calendar size={14} /> HISTORY</div>
          <h2 className="section-title">Company Timeline</h2>
          <p className="section-subtitle">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo luctus nec ullamcorper.</p>

          <div className="grid-4-col timeline-grid mt-4">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="card timeline-card">
                <div className="timeline-header">
                  <span className="timeline-date">{event.date}</span>
                  <span className="timeline-location"><MapPin size={12} /> {event.location}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
