import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2, Globe, MessageCircle, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <img src="/assets/Untitled-1.png" alt="POM Agency" className="footer-brand-img" />
          </Link>
          <p className="footer-desc">
            Turning Ideas Into Software Solutions, Hardware Systems, Smart Control, Professional Email, Accounting Systems, Websites, Social Media.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/mail-professional">Mail Professional</Link></li>
            <li><Link to="/about">Web Design</Link></li>
            <li><Link to="/accounting">Accounting Systems</Link></li>
            <li><Link to="/it">IT Solutions</Link></li>
            <li><Link to="/network-servers">Network & Servers</Link></li>
            <li><Link to="/smart-control">Smart Control</Link></li>
          </ul>
        </div>

        {/* Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/digital-marketing">Digital Marketing</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/my_account">My Account</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info-list">
            <li>
              <Mail size={16} className="contact-icon" />
              <span>support@pom-agency.online</span>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <span>+20 100 000 0000</span>
            </li>
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>Cairo, Egypt</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} POM Agency. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms-and-conditions">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
