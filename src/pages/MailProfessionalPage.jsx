import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Settings, CreditCard, UserCheck, Star, Cpu, Layers } from 'lucide-react';
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
      desc: 'Are you running a new business? Select from Individual, Business, or Professional hosting plans.',
      icon: UserCheck
    },
    {
      step: '03',
      title: 'Go to payment',
      desc: 'Select the number of mailboxes and subscription period. After payment, you will be directed to your control panel.',
      icon: CreditCard
    },
    {
      step: '04',
      title: 'Configure your email hosting',
      desc: 'Finally, create an email account, set up DNS settings, and sync your email with other devices.',
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

  return (
    <div className="mail-pro-page">
      {/* Header Banner */}
      <section className="page-header">
        <div className="container">
          <div className="badge"><Mail size={14} /> FEATURES</div>
          <h1>Create a professional email for your business</h1>
          <p className="page-header-sub">
            An email address that matches your custom domain to make your brand appear more credible.
          </p>
        </div>
      </section>

      {/* How it works steps */}
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

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <div className="badge-center">PRICING PLANS</div>
          <h2 className="section-title">Choose an Email Hosting Plan</h2>
          <p className="section-subtitle">Choose the right professional email package for your business.</p>

          <div className="grid-3-col pricing-grid">
            {plans.map((p) => (
              <div key={p.id} className="card pricing-card text-center">
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
                <button 
                  onClick={() => addToCart({
                    id: p.id,
                    title: `${p.name} Mail Plan`,
                    price: p.price,
                    image: p.image
                  })}
                  className="btn btn-primary full-width"
                >
                  Add to Cart
                </button>
                <Link to={`/product/${p.id}`} className="view-product-link text-center mt-2">
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="custom-plan-banner card mt-5">
            <div className="banner-text">
              <h3>Need more? Get a custom plan</h3>
              <p>If you need more than 50 email accounts or want Private Email for more than 20 domains, get in touch for custom pricing.</p>
            </div>
            <Link to="/terms-and-conditions" className="btn btn-secondary">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services & Timeline */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Cpu size={14} /> SERVICES</div>
          <h2 className="section-title">AI Development: Cutting-Edge Solutions for Your Industry</h2>
          <p className="section-subtitle">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div className="grid-3-col mt-4">
            <div className="card service-feature-card">
              <h3>SEO Optimization</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="card service-feature-card">
              <h3>Social Engagement</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className="card service-feature-card">
              <h3>Content Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="badge-center"><Star size={14} /> TESTIMONIALS</div>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-subtitle">Trusted by companies worldwide for zero-downtime email delivery.</p>

          <div className="grid-3-col">
            <div className="card testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Switching our company emails to POM Agency gave our sales team immediate credibility. Zero spam issues and 100% uptime."</p>
              <div className="author">
                <strong>Ahmed Hassan</strong>
                <span>Operations Director</span>
              </div>
            </div>
            <div className="card testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The setup process took less than 15 minutes. Support guided us through DNS records step by step."</p>
              <div className="author">
                <strong>Mariam El-Sayed</strong>
                <span>Marketing Lead</span>
              </div>
            </div>
            <div className="card testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Highly recommend the Professional Mail package. Multi-mailbox management and mobile synchronization work flawlessly."</p>
              <div className="author">
                <strong>Khaled Mahmoud</strong>
                <span>Tech Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
