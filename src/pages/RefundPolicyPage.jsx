import React from 'react';
import { RotateCcw, Calendar, CheckCircle2, AlertTriangle, CreditCard, Clock, FileCheck, HelpCircle } from 'lucide-react';
import './PrivacyPolicyPage.css';

export default function RefundPolicyPage() {
  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="legal-card">
          <div className="legal-header">
            <div className="legal-badge">
              <RotateCcw size={15} /> Billing & Customer Protection
            </div>
            <h1 className="legal-title">Refund & Cancellation Policy</h1>
            <div className="legal-meta">
              <div className="legal-meta-item">
                <Calendar size={15} />
                <span>Effective Date: January 1, 2026</span>
              </div>
              <div className="legal-meta-item">
                <FileCheck size={15} />
                <span>International B2B & Consumer Standard</span>
              </div>
            </div>
          </div>

          <div className="legal-body">
            {/* Intro */}
            <div className="legal-section">
              <p>
                At <strong>POM Agency (POM Digital Engineering)</strong>, we are committed to delivering world-class 
                engineering, cloud architecture, enterprise software (Odoo ERP), web design, and digital marketing services. 
                This Refund & Cancellation Policy clearly outlines the terms governing refunds, service cancellations, 
                and dispute resolutions across all our digital solutions and subscription tiers.
              </p>
              <div className="legal-callout">
                <CheckCircle2 className="legal-callout-icon" size={20} />
                <div className="legal-callout-content">
                  <h4>14-Day Satisfaction Guarantee on Hosting & Email</h4>
                  <p>
                    We offer a 14-day money-back guarantee for first-time subscribers of our Professional Email Hosting 
                    and Shared Web Hosting plans, allowing clients to test our infrastructure with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Subscription-Based Services */}
            <div className="legal-section">
              <h2><Clock size={20} /> 1. Subscriptions & Cloud Hosting Services</h2>
              <p>For recurring services including Professional Mail, Cloud Servers, and Ongoing IT Support Retainers:</p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>14-Day Initial Window:</strong> New subscriptions for professional email and cloud hosting packages are eligible for a 100% refund within 14 calendar days of the initial purchase date upon written request.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Renewal Cancellations:</strong> Clients may cancel recurring monthly or annual renewals at any time via the client dashboard or by notifying support at least <strong>5 business days</strong> prior to the renewal billing date. Renewal charges already processed are non-refundable once the billing cycle begins.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Non-Refundable Add-ons:</strong> Top-level domain (TLD) registrations, custom SSL certificate issuance, and dedicated server provisioning setup fees cannot be refunded once activated through global registry authorities (ICANN/Certificate Authorities).
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Custom Web Design & Software Engineering */}
            <div className="legal-section">
              <h2><FileCheck size={20} /> 2. Custom Web Design, Software & ERP Implementations</h2>
              <p>
                Custom engineering projects (Web Development, Mobile Apps, Odoo ERP Setup, Smart Control integrations) 
                operate on a milestone-based Scope of Work (SOW) agreement:
              </p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Project Discovery / Pre-commencement:</strong> If a client cancels a custom project prior to the initiation of design prototyping or technical architecture setup, the initial deposit is refundable minus a 10% administrative and payment processing fee.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>In-Progress Milestones:</strong> Once project milestones (e.g., UI/UX wireframes, frontend builds, database schemas) have been delivered and approved by the client, funds allocated to completed milestones are deemed earned and non-refundable.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Final Delivery & Code Handover:</strong> Upon deployment to production, handover of root administrative credentials, or repository code transfer, the project is considered fully executed and finalized.
                  </div>
                </li>
              </ul>
            </div>

            {/* 3. Digital Marketing & Advertising Campaigns */}
            <div className="legal-section">
              <h2><CreditCard size={20} /> 3. Digital Marketing & Media Management</h2>
              <p>
                Agency management fees for Search Engine Optimization (SEO), Social Media Marketing, and Paid Ad Management:
              </p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Notice Period:</strong> Marketing retainer retainers require 30 calendar days written notice for termination.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Direct Advertising Spend:</strong> Budgets paid directly to third-party ad networks (Google Ads, Meta, TikTok, LinkedIn) are managed under the respective platform's non-refundable billing terms and are non-refundable by POM Agency.</div>
                </li>
              </ul>
            </div>

            {/* 4. Hardware, Smart Control & On-Premises Equipment */}
            <div className="legal-section">
              <h2><RotateCcw size={20} /> 4. Physical Equipment & Smart Hardware</h2>
              <p>For IoT sensors, server appliances, network switches, and smart control hardware:</p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>14-Day Return Condition:</strong> Unopened, undamaged hardware in its original manufacturer packaging can be returned within 14 days of receipt for a full refund (client covers return freight).</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Warranty Replacements:</strong> Defective devices under warranty will be serviced or replaced immediately under our on-site technical support SLA.</div>
                </li>
              </ul>
            </div>

            {/* 5. Refund Submission Process */}
            <div className="legal-section">
              <h2><HelpCircle size={20} /> 5. How to Request a Refund</h2>
              <p>To submit a formal cancellation or refund request:</p>
              <ol className="legal-list" style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
                <li style={{ display: 'list-item' }}>
                  Send an official email to <strong>billing@pom-agency.online</strong> with your invoice number, account email, and reason for the request.
                </li>
                <li style={{ display: 'list-item' }}>
                  Our Billing & Compliance Department will review your account and contract status within <strong>3 business days</strong>.
                </li>
                <li style={{ display: 'list-item' }}>
                  Approved refunds are credited back directly to the original payment method (Credit Card, Bank Wire, or Electronic Gateway) within <strong>5 to 10 business days</strong>, depending on your financial institution.
                </li>
              </ol>
            </div>

            {/* Contact Box */}
            <div className="legal-contact-box">
              <h3>Billing & Dispute Department</h3>
              <p>
                Have questions regarding an active invoice, subscription renewal, or refund status? Reach out to our dedicated billing desk:
              </p>
              <div className="legal-contact-grid">
                <div className="legal-contact-item">
                  <strong>Billing Support</strong>
                  <span>billing@pom-agency.online</span>
                </div>
                <div className="legal-contact-item">
                  <strong>Direct Line</strong>
                  <span>+20 100 000 0000</span>
                </div>
                <div className="legal-contact-item">
                  <strong>Resolution SLA</strong>
                  <span>3 - 5 Business Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
