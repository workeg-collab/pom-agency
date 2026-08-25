import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Headphones } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Column 1: Brand & Bio */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-brand">
            <img 
              src="/assets/pom-logo-white.png" 
              alt="POM Agency Logo" 
              className="footer-brand-img"
            />
          </Link>
          <p className="footer-desc">
            {t('footerDesc')}
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/powerofmediaagency" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/pomagency1/" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Snapchat">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 2c-3.565 0-5.83 2.502-5.83 5.344 0 .809.198 1.637.545 2.378-.475.143-.99.309-1.289.444-.452.204-.576.438-.501.758.125.534.805.845 1.547.962.062.298.158.825.228 1.139.027.121-.01.21-.082.261-.403.284-1.264.717-2.188 1.053-.518.188-.831.47-.831.815 0 .614.931 1.059 2.213 1.059.394 0 .783-.045 1.144-.127.242-.055.399.043.433.242.102.585.393 1.066 1.066 1.066.399 0 .749-.126 1.127-.26.311-.11.666-.192 1.042-.192.42 0 .811.1 1.157.227.352.128.694.225 1.051.225.688 0 .977-.489 1.077-1.077.032-.192.187-.291.423-.238.368.083.766.128 1.17.128 1.282 0 2.213-.445 2.213-1.059 0-.345-.313-.627-.831-.815-.924-.336-1.785-.769-2.188-1.053-.072-.051-.109-.14-.082-.261.07-.314.166-.841.228-1.139.742-.117 1.422-.428 1.547-.962.075-.32-.049-.554-.501-.758-.299-.135-.814-.301-1.289-.444.347-.741.545-1.569.545-2.378 0-2.842-2.265-5.344-5.83-5.344z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/about">{t('webDesign')}</Link></li>
            <li><Link to="/digital-marketing">{t('digitalMarketing')}</Link></li>
            <li><Link to="/accounting">{t('accounting')}</Link></li>
            <li><Link to="/mail-professional">{t('mailPro')}</Link></li>
          </ul>
        </div>

        {/* Column 3: Tech Solutions */}
        <div className="footer-col">
          <h4 className="footer-heading">Tech Solutions</h4>
          <ul className="footer-links">
            <li><Link to="/network-servers">{t('networkServers')}</Link></li>
            <li><Link to="/smart-control">{t('smartControl')}</Link></li>
            <li><Link to="/it">{t('it')}</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">{t('contactInfo')}</h4>
          <ul className="contact-info-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Cairo, Egypt</span>
            </li>
            <li>
              <a href="tel:+201093706027" className="footer-contact-link">
                <Phone size={18} className="contact-icon" />
                <span>+20 109 370 6027</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@pom-agency.online" className="footer-contact-link">
                <Mail size={18} className="contact-icon" />
                <span>info@pom-agency.online</span>
              </a>
            </li>
            <li className="footer-contact-us-item">
              <Link to="/contact" className="footer-contact-link">
                <Headphones size={18} className="contact-icon" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} POM Agency. {t('allRightsReserved')}</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/refund-policy">Refund Policy</Link> | <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
