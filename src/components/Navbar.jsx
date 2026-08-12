import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Mail, 
  Monitor, 
  TrendingUp, 
  Calculator, 
  Cpu, 
  Server, 
  ShieldAlert, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItemsCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Mail Professional', path: '/mail-professional', icon: Mail },
    { label: 'WEB DESIGN', path: '/about', icon: Monitor },
    { label: 'DIGITAL MARKETING', path: '/digital-marketing', icon: TrendingUp },
    { label: 'Accounting', path: '/accounting', icon: Calculator },
    { label: 'IT', path: '/it', icon: Cpu },
    { label: 'Network & Servers', path: '/network-servers', icon: Server },
    { label: 'Smart Control', path: '/smart-control', icon: ShieldAlert },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span>⚡ Power of Media — Complete Software, IT & Media Agency</span>
          </div>
          <div className="top-actions">
            <Link to="/login" className="top-link"><User size={14} /> Login</Link>
            <span className="divider">|</span>
            <Link to="/register" className="top-link">Register</Link>
            <span className="divider">|</span>
            <Link to="/my_account" className="top-link">My Account</Link>
          </div>
        </div>
      </div>

      <div className="container navbar-main">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-icon">
            <Sparkles size={22} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">POM <span className="highlight">AGENCY</span></span>
            <span className="brand-sub">Power Of Media</span>
          </div>
        </Link>

        <nav className="nav-desktop">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-btn" aria-label="Shopping Cart">
            <ShoppingBag size={20} />
            {totalItemsCount > 0 && (
              <span className="cart-badge">{totalItemsCount}</span>
            )}
          </Link>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav">
            <div className="mobile-nav-header">
              <span className="brand-title">POM <span className="highlight">AGENCY</span></span>
              <button onClick={() => setMobileOpen(false)}><X size={24} /></button>
            </div>
            <ul className="mobile-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.icon && <link.icon size={18} />}
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-divider"></li>
              <li><Link to="/login" className="mobile-link"><User size={18} /> Login</Link></li>
              <li><Link to="/register" className="mobile-link">Register</Link></li>
              <li><Link to="/my_account" className="mobile-link">My Account</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
