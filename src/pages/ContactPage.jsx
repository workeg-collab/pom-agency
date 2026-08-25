import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Engineering & Design',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message or redirecting to WhatsApp / email
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="contact-badge">
            <Sparkles size={15} /> 24/7 Global Client Support
          </div>
          <h1>Let’s Build Something Exceptional Together</h1>
          <p>
            Have a project in mind, need a tailored enterprise proposal, or looking for dedicated cloud & IT infrastructure support? Reach out to our engineering team today.
          </p>
        </div>

        {/* Top 3 Contact Cards */}
        <div className="contact-cards-grid">
          {/* Card 1: Phone */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper">
              <Phone size={24} />
            </div>
            <h3>Direct Hotline</h3>
            <p>Speak directly with our technical account managers during business hours.</p>
            <span className="contact-card-val">+20 109 370 6027</span>
            <a href="tel:+201093706027" className="contact-card-btn btn-phone">
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25d366' }}>
              <MessageSquare size={24} />
            </div>
            <h3>Instant WhatsApp</h3>
            <p>Rapid inquiry response for project scopes, quotes, and emergency support.</p>
            <span className="contact-card-val">+20 109 370 6027</span>
            <a 
              href="https://wa.me/201093706027?text=Hello%20POM%20Agency%2C%20I%20would%20like%20to%20inquire%20about%20your%20services" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card-btn btn-whatsapp"
            >
              <MessageSquare size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Email Desk */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper" style={{ background: 'rgba(15, 23, 42, 0.08)', color: '#0f172a' }}>
              <Mail size={24} />
            </div>
            <h3>Official Email Desk</h3>
            <p>Send detailed RFPs, technical specifications, or partnership inquiries.</p>
            <span className="contact-card-val">info@pom-agency.online</span>
            <a href="mailto:info@pom-agency.online" className="contact-card-btn btn-email">
              <Mail size={16} /> Send Email
            </a>
          </div>
        </div>

        {/* Main Grid: Form + Google Map */}
        <div className="contact-main-grid">
          {/* Left: Contact Form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and an engineer will get back to you within 2 business hours.</p>
            </div>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
              </div>
            ) : null}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+20 ..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Web Engineering & Design">Web Engineering & Design</option>
                    <option value="Digital Marketing & SEO">Digital Marketing & Growth</option>
                    <option value="Accounting & Odoo ERP">Accounting & Odoo ERP Systems</option>
                    <option value="Cloud Servers & Network">Cloud Servers & Infrastructure</option>
                    <option value="Smart Control & IoT">Smart Control Systems</option>
                    <option value="IT Support & Mail Pro">Professional Email & IT Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details or Inquiry *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Describe your project requirements, timeline, or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-submit-contact">
                <Send size={18} /> Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right: Map & Office Info */}
          <div className="contact-map-card">
            <div className="contact-map-header">
              <h3><MapPin size={20} color="#1388fd" /> Cairo Operations Hub</h3>
              <p>Serving clients globally across the Middle East, Europe, and North America.</p>
            </div>

            <div className="contact-map-wrapper">
              <iframe
                title="POM Agency Cairo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185040523!2d31.188423455986968!3d30.05961134339474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-office-footer">
              <div className="office-hours-badge">
                <Clock size={16} /> Sun - Thu: 9:00 AM - 6:00 PM (GMT+2)
              </div>
              <div>
                <strong>NOC & Cloud Support:</strong> 24/7 Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
