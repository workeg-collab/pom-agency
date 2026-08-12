import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Shield, Server, Settings, LogOut, Package, CreditCard } from 'lucide-react';
import './MyAccountPage.css';

export default function MyAccountPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('pom_user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('pom_user');
    setUser(null);
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="account-page section">
        <div className="container max-w-500 card p-5 text-center">
          <User size={48} className="text-primary mb-3" />
          <h2>My Account</h2>
          <p className="text-muted mb-4">Please log in to access your active mailboxes, invoices, and service subscriptions.</p>
          <div className="flex-center gap-3">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page section">
      <div className="container">
        <div className="account-header card flex-between mb-4">
          <div className="user-info-box">
            <h2>Welcome back, <span className="text-primary">{user.name}</span>!</h2>
            <p className="text-muted">{user.email}</p>
          </div>
          <button onClick={handleLogout} className="btn btn-secondary">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="grid-3-col account-dashboard-grid">
          <div className="card dash-tile">
            <Mail size={32} className="tile-icon" />
            <h3>Active Mailboxes</h3>
            <span className="dash-stat">1 / 5 Mailboxes Active</span>
            <p className="text-muted font-size-sm">Custom domain email config ready.</p>
          </div>

          <div className="card dash-tile">
            <Package size={32} className="tile-icon" />
            <h3>Service Plans</h3>
            <span className="dash-stat">Individual Mail Package</span>
            <p className="text-muted font-size-sm">Status: Active (Auto-renew)</p>
          </div>

          <div className="card dash-tile">
            <CreditCard size={32} className="tile-icon" />
            <h3>Billing & Invoices</h3>
            <span className="dash-stat">0 Pending Payments</span>
            <p className="text-muted font-size-sm">All invoices up to date.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
