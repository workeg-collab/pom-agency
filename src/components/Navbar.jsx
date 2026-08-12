import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, User, Menu, X, Mail, Monitor, Calculator, Cpu, Server, ShieldAlert, TrendingUp } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Web Design', path: '/about' },
    { label: 'Mail Professional', path: '/mail-professional' },
    { label: 'Accounting Systems', path: '/accounting' },
    { label: 'IT', path: '/it' },
    { label: 'Network & Servers', path: '/network-servers' },
    { label: 'Smart Control', path: '/smart-control' },
    { label: 'Digital Marketing', path: '/digital-marketing' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo-wrapper">
          <img 
            src="/assets/Untitled-1.png" 
            alt="POM Agency" 
            className="official-brand-logo" 
            onError={(e) => {
              e.target.src = '/assets/Logo-1.png';
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Cart + Account) */}
        <div className="header-actions">
          <Link to="/cart" className="action-btn cart-btn" title="Shopping Cart">
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
          
          <Link to="/my_account" className="action-btn account-btn" title="My Account">
            <User size={20} />
          </Link>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/assets/Untitled-1.png" alt="POM Agency" className="mobile-brand-logo" />
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <nav className="mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
