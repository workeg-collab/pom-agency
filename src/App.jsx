import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

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
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="app-layout">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<WebDesignPage />} />
                <Route path="/web-design" element={<WebDesignPage />} />
                <Route path="/websites" element={<WebDesignPage />} />
                <Route path="/web" element={<WebDesignPage />} />
                <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/marketing" element={<DigitalMarketingPage />} />
                <Route path="/growth" element={<DigitalMarketingPage />} />
                <Route path="/ads" element={<DigitalMarketingPage />} />
                <Route path="/seo" element={<DigitalMarketingPage />} />
                <Route path="/accounting" element={<AccountingPage />} />
                <Route path="/network-servers" element={<NetworkServersPage />} />
                <Route path="/network" element={<NetworkServersPage />} />
                <Route path="/servers" element={<NetworkServersPage />} />
                <Route path="/smart-control" element={<SmartControlPage />} />
                <Route path="/smart" element={<SmartControlPage />} />
                <Route path="/smart-home" element={<SmartControlPage />} />
                <Route path="/cctv" element={<SmartControlPage />} />
                <Route path="/bms" element={<SmartControlPage />} />
                <Route path="/it" element={<ITPage />} />
                <Route path="/it-services" element={<ITPage />} />
                <Route path="/helpdesk" element={<ITPage />} />
                <Route path="/managed-it" element={<ITPage />} />
                <Route path="/mail-professional" element={<MailProfessionalPage />} />
                <Route path="/mail" element={<MailProfessionalPage />} />
                <Route path="/email" element={<MailProfessionalPage />} />
                <Route path="/webmail" element={<MailProfessionalPage />} />
                <Route path="/business-mail" element={<MailProfessionalPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/terms-and-conditions" element={<TermsPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />
                <Route path="/refund" element={<RefundPolicyPage />} />
              </Routes>
            </main>
            <WhatsAppButton />
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}
