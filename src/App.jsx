import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import MailProfessionalPage from './pages/MailProfessionalPage';
import WebDesignPage from './pages/WebDesignPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import AccountingPage from './pages/AccountingPage';
import ITPage from './pages/ITPage';
import NetworkServersPage from './pages/NetworkServersPage';
import SmartControlPage from './pages/SmartControlPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyAccountPage from './pages/MyAccountPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mail-professional" element={<MailProfessionalPage />} />
            <Route path="/about" element={<WebDesignPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/accounting" element={<AccountingPage />} />
            <Route path="/it" element={<ITPage />} />
            <Route path="/network-servers" element={<NetworkServersPage />} />
            <Route path="/smart-control" element={<SmartControlPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my_account" element={<MyAccountPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}
