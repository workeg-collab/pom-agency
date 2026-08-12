import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Settings, CreditCard, UserCheck, Star } from 'lucide-react';
import './MailProfessionalPage.css';

export default function MailProfessionalPage() {
  const { addToCart } = useCart();

  const steps = [
    {
      step: '01',
      title: 'Create a professional email for your business',
      desc: 'An email address that matches your custom domain (you@yourbrand.com) to make your brand appear more credible and trustworthy to clients.',
      icon: Mail
    },
    {
      step: '02',
      title: 'Choose an email hosting plan',
      desc: 'Select from Individual, Business, or Professional hosting plans depending on your team size and mailbox storage requirements.',
      icon: UserCheck
    },
    {
      step: '03',
      title: 'Go to payment',
      desc: 'Select the number of mailboxes and your subscription period. After completion, you will be instantly directed to your hosting account control panel.',
      icon: CreditCard
    },
    {
      step: '04',
      title: 'Configure your email hosting',
      desc: 'Create email accounts, set up DNS settings (MX/SPF/DKIM), and sync your email with smartphones, Outlook, and webmail.',
      icon: Settings
    }
  ];

  const plans = [
    {
      id: 'individual-mail',
      name: 'Individual',
      subtitle: 'Single Use',
      price: 99.99,
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
          <div className="badge"><Mail size={14} /> Mail Professional</div>
          <h1>Create a Professional Email for Your Business</h1>
          <p className="page-header-sub">
            Enhance brand credibility, secure corporate communications, and stay connected on all devices with POM Professional Email hosting.
          </p>
        </div>
      </section>

      {/* How it works steps */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">HOW IT WORKS</div>
          <h2 className="section-title">4 Simple Steps to Get Started</h2>
          <p className="section-subtitle">Follow our fast onboarding process to get your custom domain emails live in minutes.</p>

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
          <div className="badge-center">EMAIL PACKAGES</div>
          <h2 className="section-title">Choose an Email Hosting Plan</h2>
          <p className="section-subtitle">Select the package that fits your business requirements best.</p>

          <div className="grid-3-col pricing-grid">
            {plans.map((p) => (
              <div key={p.id} className="card pricing-card">
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
                    image: 'https://pom-agency.online/wp-content/uploads/2025/08/iiii.png'
                  })}
                  className="btn btn-primary full-width"
                >
                  Add to Cart
                </button>
                <Link to={`/product/${p.id}`} className="view-product-link text-center mt-2">
                  View Full Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="custom-plan-banner card mt-5">
            <div className="banner-text">
              <h3>Need more mailboxes or enterprise custom quotas?</h3>
              <p>Contact our technical team for custom storage allocations, dedicated IP addresses, and enterprise SLAs.</p>
            </div>
            <Link to="/terms-and-conditions" className="btn btn-secondary">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Star size={14} /> TESTIMONIALS</div>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-subtitle">Trusted by hundreds of companies for zero-downtime professional email delivery.</p>

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
