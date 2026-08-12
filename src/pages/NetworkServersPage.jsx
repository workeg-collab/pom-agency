import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cpu, HardDrive, Printer, Fingerprint, PhoneCall, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import './NetworkServersPage.css';

export default function NetworkServersPage() {
  const hardwareList = [
    { icon: Server, title: 'Server Racks & Cabinets', desc: 'Professional server rack locking, termination, cable management, labeling, and airflow optimization.' },
    { icon: Cpu, title: 'Enterprise Computers & Workstations', desc: 'Procurement, deployment, and maintenance of high-performance desktop PCs and laptops.' },
    { icon: HardDrive, title: 'UPS Power Systems', desc: 'Uninterruptible power supplies to protect company servers and networking hardware against power cuts.' },
    { icon: Printer, title: 'Office Printers & Scanners', desc: 'Networked multi-function printers, thermal barcode scanners, and printer fleet management.' },
    { icon: PhoneCall, title: 'Central IP PBX Systems', desc: 'Modern VoIP telephony systems, internal extensions, call routing, and IVR setup.' },
    { icon: Fingerprint, title: 'Fingerprint & Access Control', desc: 'Biometric attendance machines, card access control systems, and door lock integration.' }
  ];

  return (
    <div className="network-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Server size={14} /> HARDWARE & INFRASTRUCTURE</div>
          <h1>Complete Network & Server Infrastructure Solutions</h1>
          <p className="page-header-sub">
            Networks, computers, printers, UPS, IP switchboard installations, rack locking, cable pulling, labeling, and test flow delivery — best quality & finish.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">HARDWARE & WIRING</div>
          <h2 className="section-title">End-to-End Infrastructure Installation</h2>
          <p className="section-subtitle">All hardware equipment and consultations for your enterprise in one place.</p>

          <div className="grid-3-col">
            {hardwareList.map((item, idx) => (
              <div key={idx} className="card hw-card">
                <item.icon size={32} className="hw-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="hw-tag"><CheckCircle2 size={14} /> Full Installation & Support</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Need a Full Network & Server Cabling Plan?</h2>
          <p className="section-subtitle">Our network engineers are ready to design and execute your office cabling project.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Request Site Survey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
