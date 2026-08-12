import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem('pom_user', JSON.stringify({ name: username || 'User', email: 'user@domain.com' }));
    navigate('/my_account');
  };

  return (
    <div className="auth-page section">
      <div className="container max-w-500 card p-5">
        <div className="text-center mb-4">
          <div className="badge-center"><Sparkles size={14} /> ACCOUNT LOGIN</div>
          <h2>Login to POM Portal</h2>
          <p className="text-muted">Access your email hosting and IT service dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Username or Email Address *</label>
            <div className="input-with-icon">
              <User size={18} className="input-icon" />
              <input 
                type="text" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="form-input" 
                placeholder="Username or email"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password *</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="form-input" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex-between my-3">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={remember} 
                onChange={(e) => setRemember(e.target.checked)} 
              /> Remember Me
            </label>
            <a href="#lost" className="forgot-link text-muted font-size-sm">Lost your password?</a>
          </div>

          <button type="submit" className="btn btn-primary full-width mt-3">
            Login Now <ArrowRight size={16} />
          </button>
        </form>

        <div className="auth-footer text-center mt-4 pt-3 border-top">
          <p className="text-muted font-size-sm">
            Don't have an account? <Link to="/register" className="text-primary font-weight-bold">Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
