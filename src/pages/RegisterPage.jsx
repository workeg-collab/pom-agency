import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    plan: 'Individual - Free / 1 Month Processing'
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('pom_user', JSON.stringify({ 
        name: `${formData.firstName} ${formData.lastName}` || formData.username,
        email: formData.email 
      }));
      setLoading(false);
      navigate('/my_account');
    }, 1000);
  };

  return (
    <div className="auth-page section">
      <div className="container max-w-600 card p-5">
        <div className="text-center mb-4">
          <div className="badge-center"><Sparkles size={14} /> NEW ACCOUNT</div>
          <h2>Register Account</h2>
          <p className="text-muted">Create your POM Agency portal account.</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="grid-2-col">
            <div className="form-group">
              <label>Username *</label>
              <input 
                type="text" 
                name="username" 
                required 
                value={formData.username} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label>E-mail *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="form-group">
              <label>Password *</label>
              <input 
                type="password" 
                name="password" 
                required 
                value={formData.password} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label>Repeat Password *</label>
              <input 
                type="password" 
                name="repeatPassword" 
                required 
                value={formData.repeatPassword} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Plan Option</label>
            <select 
              name="plan" 
              value={formData.plan} 
              onChange={handleChange} 
              className="form-input"
            >
              <option value="Individual - Free / 1 Month Processing">Individual - Free / 1 Month Processing</option>
              <option value="Business Mail Plan">Business Mail Plan</option>
              <option value="Professional Mail Plan">Professional Mail Plan</option>
            </select>
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary full-width mt-3">
            {loading ? 'Processing. Please wait...' : 'Create Account'} <ArrowRight size={16} />
          </button>
        </form>

        <div className="auth-footer text-center mt-4 pt-3 border-top">
          <p className="text-muted font-size-sm">
            Already have an account? <Link to="/login" className="text-primary font-weight-bold">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
