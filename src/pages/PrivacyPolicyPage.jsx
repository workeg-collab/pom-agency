import React from 'react';
import { ShieldCheck, Calendar, Lock, Eye, Database, Globe, UserCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="legal-card">
          <div className="legal-header">
            <div className="legal-badge">
              <ShieldCheck size={15} /> Privacy & Data Governance
            </div>
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-meta">
              <div className="legal-meta-item">
                <Calendar size={15} />
                <span>Effective Date: January 1, 2026</span>
              </div>
              <div className="legal-meta-item">
                <Lock size={15} />
                <span>GDPR & CCPA Compliant</span>
              </div>
            </div>
          </div>

          <div className="legal-body">
            {/* Intro */}
            <div className="legal-section">
              <p>
                At <strong>POM Agency (POM Digital Engineering)</strong>, reachable at <strong>https://pom-agency.online</strong>, 
                we respect your privacy and are committed to protecting personal and proprietary business data. 
                This Privacy Policy outlines how we collect, process, store, and safeguard information obtained through 
                our website, software products, professional email hosting, network server management, accounting ERP implementations, 
                and digital marketing services.
              </p>
              <div className="legal-callout">
                <Lock className="legal-callout-icon" size={20} />
                <div className="legal-callout-content">
                  <h4>Our Data Commitment</h4>
                  <p>
                    We strictly adhere to the General Data Protection Regulation (GDPR - EU 2016/679), 
                    the California Consumer Privacy Act (CCPA), and standard international cybersecurity data protection benchmarks. 
                    We do not sell or lease client data to third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Information We Collect */}
            <div className="legal-section">
              <h2><Eye size={20} /> 1. Information We Collect</h2>
              <p>Depending on your interaction with our platforms and services, we collect the following categories of information:</p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Personal & Contact Identifiers:</strong> Full name, professional email address, telephone number, billing address, company name, and job title provided during service inquiry, account creation, or order checkout.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Technical & Network Telemetry:</strong> IP addresses, browser fingerprint, operating system details, device type, referral URLs, session timestamps, and diagnostic error logs collected automatically for performance and security.
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Financial & Billing Metadata:</strong> Transaction records, invoice references, and payment method tokens processed through certified, PCI-DSS Level 1 compliant payment gateways. <em>POM Agency does not retain raw credit card numbers or banking passwords on internal servers.</em>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div>
                    <strong>Client Project & Infrastructure Credentials:</strong> Server configurations, domain DNS records, database parameters, and design assets supplied voluntarily by clients to execute custom development, email provisioning, or ERP deployment contracts.
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Legal Basis for Processing */}
            <div className="legal-section">
              <h2><Database size={20} /> 2. Legal Basis for Processing (GDPR Article 6)</h2>
              <p>We process personal and technical data under lawful bases recognized by international data protection laws:</p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Contractual Performance:</strong> To fulfill web engineering contracts, configure cloud servers, activate corporate mailboxes, and provide technical support.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Legitimate Business Interests:</strong> To prevent cyber fraud, monitor server health, enforce terms of service, and improve UI/UX performance.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Legal & Regulatory Compliance:</strong> To maintain accounting books, comply with tax obligations, and respond to lawful government requests.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Explicit Consent:</strong> Where you have opted in to receive technical newsletters or authorized marketing communications.</div>
                </li>
              </ul>
            </div>

            {/* 3. Cookies & Tracking Technologies */}
            <div className="legal-section">
              <h2><Globe size={20} /> 3. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar session tokens to ensure site functionality, remember language preferences, 
                and maintain cart states. Cookies utilized include:
              </p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Strictly Necessary Cookies:</strong> Required for secure login, cart operations, and session continuity.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Analytical & Performance Cookies:</strong> Aggregated, anonymized statistics used to optimize page loading speeds and infrastructure scalability.</div>
                </li>
              </ul>
              <p>You can modify your browser settings to decline non-essential cookies at any time.</p>
            </div>

            {/* 4. Data Security & Encryption */}
            <div className="legal-section">
              <h2><Lock size={20} /> 4. Data Security & Encryption Standards</h2>
              <p>
                POM Agency implements multi-tiered administrative, physical, and technical safeguards to prevent unauthorized data access, destruction, or disclosure:
              </p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>In-Transit Encryption:</strong> All communications with our servers are encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS).</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>At-Rest Encryption:</strong> Database repositories, server backups, and sensitive project artifacts are encrypted utilizing AES-256 standards.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Access Control & Non-Disclosure:</strong> Server access is restricted to authorized engineering personnel under strict non-disclosure agreements (NDAs) with mandatory multi-factor authentication (MFA).</div>
                </li>
              </ul>
            </div>

            {/* 5. International Data Transfers & Third Parties */}
            <div className="legal-section">
              <h2><Globe size={20} /> 5. Third-Party Service Providers & Global Transfers</h2>
              <p>
                We partner with tier-1 cloud infrastructure providers (e.g., AWS, Cloudflare, Vercel) to host digital assets. 
                Any cross-border data transfer complies with standard contractual clauses (SCCs) ensuring an adequate level of data protection equivalent to GDPR requirements.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div className="legal-section">
              <h2><UserCheck size={20} /> 6. Your International Privacy Rights</h2>
              <p>Under GDPR, CCPA, and global privacy frameworks, you retain the following statutory rights:</p>
              <ul className="legal-list">
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Right of Access & Portability:</strong> Request an export of the personal data we hold about you in a machine-readable format.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete corporate/personal information.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Right to Erasure ("Right to Be Forgotten"):</strong> Request full deletion of your profile, email accounts, or project archives subject to mandatory tax retention laws.</div>
                </li>
                <li>
                  <CheckCircle2 className="legal-bullet-icon" size={18} />
                  <div><strong>Right to Restriction & Objection:</strong> Object to processing of data for analytics or direct communications.</div>
                </li>
              </ul>
            </div>

            {/* 7. Contact Info */}
            <div className="legal-contact-box">
              <h3>Data Protection Officer & Privacy Inquiries</h3>
              <p>
                To exercise any of your privacy rights or submit a formal data inquiry, please contact our Data Governance Team:
              </p>
              <div className="legal-contact-grid">
                <div className="legal-contact-item">
                  <strong>Email Inquiries</strong>
                  <span>privacy@pom-agency.online</span>
                </div>
                <div className="legal-contact-item">
                  <strong>General Support</strong>
                  <span>info@pom-agency.online</span>
                </div>
                <div className="legal-contact-item">
                  <strong>Response SLA</strong>
                  <span>Within 48 Business Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
