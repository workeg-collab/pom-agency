import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import WebDesignPage from './pages/WebDesignPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import AccountingPage from './pages/AccountingPage';
import NetworkServersPage from './pages/NetworkServersPage';
import SmartControlPage from './pages/SmartControlPage';
import ITPage from './pages/ITPage';
import MailProfessionalPage from './pages/MailProfessionalPage';
import CartPage from './pages/CartPage';
import TermsPage from './pages/TermsPage';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="app-layout">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<WebDesignPage />} />
                <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/accounting" element={<AccountingPage />} />
                <Route path="/network-servers" element={<NetworkServersPage />} />
                <Route path="/smart-control" element={<SmartControlPage />} />
                <Route path="/it" element={<ITPage />} />
                <Route path="/mail-professional" element={<MailProfessionalPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/terms-and-conditions" element={<TermsPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}
