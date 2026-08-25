import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { cartCount } = useCart();
  const { lang, changeLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('webDesign') },
    { path: '/digital-marketing', label: t('digitalMarketing') },
    { path: '/accounting', label: t('accounting') },
    { path: '/network-servers', label: t('networkServers') },
    { path: '/smart-control', label: t('smartControl') },
    { path: '/it', label: t('it') },
    { path: '/mail-professional', label: t('mailPro') }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇪🇬' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  return (
    <header className="site-navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <img 
            src="/assets/pom-logo-dark.png" 
            alt="POM Digital Engineering Logo" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Tiny Language Switcher Icon & Cart */}
        <div className="nav-actions">
          {/* Very Small Globe Language Button */}
          <div className="lang-switcher-container">
            <button 
              className="tiny-lang-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              title="Select Language / اختيار اللغة"
              aria-label="Language selector"
            >
              <Globe size={18} className="tiny-globe-icon" />
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown-menu">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    className={`lang-option ${lang === l.code ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                  >
                    <span className="option-flag">{l.flag}</span>
                    <span className="option-name">{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart Icon Button */}
          <Link to="/cart" className="cart-icon-btn" title="View Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
