import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import './TermsPage.css';

export default function TermsPage() {
  return (
    <div className="terms-page section">
      <div className="container max-w-800 card p-5">
        <div className="badge mb-3"><ShieldCheck size={14} /> LEGAL & PRIVACY</div>
        <h1>Terms and Conditions & POM Privacy Policy</h1>
        <p className="text-muted mb-4">Last Updated: 2025</p>

        <div className="terms-content">
          <h3>1. POM Privacy Policy</h3>
          <p>
            This Privacy Policy (hereinafter referred to as “Policy”) shall govern the manner in which POM Agency collects, uses, maintains, and discloses information obtained when you access POM’s Website and digital services.
          </p>
          <p>
            This Policy may be subjected to change from time to time and such change shall be effective upon being posted on POM’s Website. Continuous access and use of POM’s services constitutes acceptance of all terms.
          </p>

          <h3>2. Professional Email & IT Service Terms</h3>
          <p>
            POM Agency provides professional email hosting, server infrastructure, website design, and accounting software (Odoo) implementations. All service subscriptions renew according to the chosen billing cycle.
          </p>
          <ul>
            <li>Users must adhere to acceptable email usage policies and anti-spam standards.</li>
            <li>Mailbox storage allocations are determined by the subscribed tier (Individual: 5GB, Business: 30GB, Professional: 75GB).</li>
            <li>24/7 technical support is available for active hosting and server clients.</li>
          </ul>

          <h3>3. Intellectual Property</h3>
          <p>
            Copyright © 2021 – 2025 pomagency Operating Company, All Rights Reserved. The pomagency word mark is a registered trademark.
          </p>
        </div>
      </div>
    </div>
  );
}
