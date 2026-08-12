import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container footer-top">
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand">
            <img src="/assets/Untitled-1.png" alt="POM Agency Logo" className="footer-official-logo" />
            <span className="brand-title">POM <span className="highlight">AGENCY</span></span>
          </Link>
          <p className="brand-desc">
            POM (Power of Media) is a digital services agency. We help businesses grow through smart web design, marketing, custom software, accounting systems, and IT infrastructure solutions.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/powerofmediaagency/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="https://www.instagram.com/pomagency1/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://pom-agency.online" target="_blank" rel="noreferrer" className="social-icon" aria-label="Youtube">
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Products</h4>
          <ul className="footer-links">
            <li><Link to="/mail-professional">Mail Professional</Link></li>
            <li><Link to="/about">WEB DESIGN</Link></li>
            <li><Link to="/digital-marketing">DIGITAL MARKETING</Link></li>
            <li><Link to="/accounting">Accounting</Link></li>
            <li><Link to="/product/individual-mail">Individual Mail Plan</Link></li>
            <li><Link to="/product/business-mail">Business Mail Plan</Link></li>
            <li><Link to="/product/professional-mail">Professional Mail Plan</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services & IT</h4>
          <ul className="footer-links">
            <li><Link to="/it">IT Services</Link></li>
            <li><Link to="/network-servers">Network & Servers</Link></li>
            <li><Link to="/smart-control">Smart Control</Link></li>
            <li><Link to="/accounting">Odoo ERP Accounting</Link></li>
            <li><Link to="/digital-marketing">Social Media Management</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company & Account</h4>
          <ul className="footer-links">
            <li><Link to="/register">Register Account</Link></li>
            <li><Link to="/login">Account Login</Link></li>
            <li><Link to="/my_account">My Account</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright">
            Copyright © 2021 – 2025 pomagency Operating Company, All Rights Reserved. The pomagency word mark is a registered trademark
          </p>
          <div className="footer-legal-links">
            <Link to="/terms-and-conditions">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
