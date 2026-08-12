import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cpu, HardDrive, Printer, Fingerprint, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import './NetworkServersPage.css';

export default function NetworkServersPage() {
  const hardwareList = [
    { icon: Server, title: 'Network-Rack & Servers', desc: 'Rack locking, termination, cable extension and pulling, labeling, and test flow delivery.' },
    { icon: Cpu, title: 'Computers & Workstations', desc: 'Hardware setup, OS installation, system maintenance, and workstation upgrades.' },
    { icon: HardDrive, title: 'UPS Power Backups', desc: 'Uninterruptible power supply units to protect servers and active network gear.' },
    { icon: Printer, title: 'Printers & Multi-function', desc: 'Network printer sharing, driver configuration, and office fleet management.' },
    { icon: PhoneCall, title: 'Central IP PBX', desc: 'Internal telephony switchboard installations, extension extensions, and VoIP.' },
    { icon: Fingerprint, title: 'Finger Print Access', desc: 'Biometric time attendance and door access control system installations.' }
  ];

  return (
    <div className="network-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><Server size={14} /> DIGITAL PLATFORM</div>
          <h1>Network & Servers: Computers, Printers, Servers, UPS, IP PBX, Finger Print</h1>
          <p className="page-header-sub">
            All solutions and consultations for your company in one location: Networks, computers, printers, UPS, IP switchboard installations, rack locking, termination, cable extension and pulling, labeling, and test flow delivery... the best quality and best finish.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">HARDWARE & WIRING</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">All hardware equipment and consultations for your enterprise in one place.</p>

          <div className="grid-3-col">
            {hardwareList.map((item, idx) => (
              <div key={idx} className="card hw-card">
                <item.icon size={32} className="hw-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="hw-tag"><CheckCircle2 size={14} /> Professional Finish</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Enterprise Hardware Partners</h2>
          <div className="brand-logos-row flex-center gap-4 mt-4">
            <img src="/assets/IBM_logo_in.jpg" alt="IBM Partner" style={{ height: '50px', objectFit: 'contain' }} />
            <img src="/assets/HP-Logo-1979-2048x1152.png" alt="HP Partner" style={{ height: '50px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
