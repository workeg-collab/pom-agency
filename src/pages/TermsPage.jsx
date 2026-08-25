import React from 'react';
import { ShieldCheck, Calendar, FileText, CheckCircle2, Server, Award, AlertCircle } from 'lucide-react';
import './PrivacyPolicyPage.css';

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="legal-card">
          <div className="legal-header">
            <div className="legal-badge">
              <ShieldCheck size={15} /> Master Services Agreement
            </div>
            <h1 className="legal-title">Terms & Conditions</h1>
            <div className="legal-meta">
              <div className="legal-meta-item">
                <Calendar size={15} />
                <span>Effective Date: January 1, 2026</span>
              </div>
              <div className="legal-meta-item">
                <FileText size={15} />
                <span>Governing Law: International Commercial Standard</span>
              </div>
            </div>
          </div>

          <div className="legal-body">
            {/* Intro */}
            <div className="legal-section">
              <p>
                Welcome to <strong>POM Agency (POM Digital Engineering)</strong>. By browsing our website (<strong>https://pom-agency.online</strong>) 
                or contracting any of our services (Web Engineering, Custom Software, Professional Email, Network & Server Architecture, 
                Smart Control, ERP Systems, and Digital Marketing), you agree to be bound by these Master Terms & Conditions.
              </p>
            </div>

            {/* 1. Acceptance & Eligibility */}
            <div className="legal-section">
              <h2><CheckCircle2 size={20} /> 1. Acceptance of Terms & Service Scope</h2>
              <p>
                These Terms constitute a legally binding agreement between you ("Client", "User") and POM Agency. 
                If you are entering into this agreement on behalf of a company, organization, or legal entity, 
                you represent that you possess the legal authority to bind such entity.
              </p>
            </div>

            {/* 2. Professional Services & SLA */}
            <div className="legal-section">
              <h2><Server size={20} /> 2. IT Infrastructure, Cloud Hosting & Email SLAs</h2>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Uptime Guarantee:</strong> We maintain a 99.9% network uptime Service Level Agreement (SLA) across active cloud hosting and managed corporate email nodes, excluding pre-announced scheduled maintenance windows.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Acceptable Usage Policy (AUP):</strong> Corporate email and cloud infrastructure must not be used for unsolicited bulk emailing (SPAM), malicious network scans, phishing, or distribution of illicit materials. Violations trigger immediate suspension.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Security & Credential Management:</strong> Clients are responsible for maintaining the confidentiality of administrative passwords and two-factor authentication credentials.</div>
                </li>
              </ul>
            </div>

            {/* 3. Intellectual Property Rights */}
            <div className="legal-section">
              <h2><Award size={20} /> 3. Intellectual Property & Code Ownership</h2>
              <p>
                Upon receipt of full payment for custom software, web design, or branding projects, POM Agency assigns 
                full commercial ownership and intellectual property rights for the custom deliverables to the Client. 
                POM Agency retains ownership over pre-existing proprietary frameworks, reusable libraries, and core architectural components.
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="legal-section">
              <h2><AlertCircle size={20} /> 4. Limitation of Liability & Warranties</h2>
              <p>
                To the maximum extent permitted by applicable law, POM Agency shall not be liable for indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues resulting from server downtime, 
                cyber incidents outside reasonable control, or third-party platform API changes (e.g., Google, Meta, Microsoft).
              </p>
            </div>

            {/* Contact Box */}
            <div className="legal-contact-box">
              <h3>Legal & Compliance Counsel</h3>
              <p>For legal inquiries, contract amendments, or partnership agreements, please reach out to our legal desk:</p>
              <div className="legal-contact-grid">
                <div className="legal-contact-item">
                  <strong>Legal Email</strong>
                  <span>legal@pom-agency.online</span>
                </div>
                <div className="legal-contact-item">
                  <strong>Corporate HQ</strong>
                  <span>Cairo, Egypt</span>
                </div>
                <div className="legal-contact-item">
                  <strong>Support Desk</strong>
                  <span>info@pom-agency.online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
