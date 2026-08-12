import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Cpu, HardDrive, Printer, Fingerprint, PhoneCall, CheckCircle2, ArrowRight, Award, Newspaper } from 'lucide-react';
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

  const counters = [
    { num: '15M+', label: 'Downloaded' },
    { num: '99%', label: 'Positive Feedback' },
    { num: '2M+', label: 'Active Users' },
    { num: '500+', label: 'Contributors' }
  ];

  return (
    <div className="network-page">
      <section className="page-header">
        <div className="container grid-2-col align-center">
          <div>
            <div className="badge"><Server size={14} /> DIGITAL PLATFORM</div>
            <h1>Network & Servers: Computers, Printers, Servers, Network-Rack, UPS, Central IP PBX, Finger Print |</h1>
            <p className="page-header-sub text-left">
              <strong>All solutions and consultations for your company in one location:</strong> Networks, computers, printers, UPS, IP switchboard installations, rack locking, termination, cable extension and pulling, labeling, and test flow delivery... the best quality and best finish.
            </p>
            <Link to="/mail-professional" className="btn btn-primary mt-4">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/assets/Illustration-2.jpg" alt="Network & Servers" className="hero-official-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">HARDWARE & WIRING</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">Do play they miss give so up. Words to up style of since world. We leaf to snug on no need.</p>

          <div className="grid-3-col">
            {hardwareList.map((item, idx) => (
              <div key={idx} className="card hw-card">
                <item.icon size={32} className="hw-icon" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="hw-tag"><CheckCircle2 size={14} /> Best Quality & Finish</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Hardware Partners</h2>
          <div className="brand-logos-row flex-center gap-4 mt-4">
            <img src="/assets/IBM_logo_in.jpg" alt="IBM Partner" style={{ height: '50px', objectFit: 'contain' }} />
            <img src="/assets/HP-Logo-1979-2048x1152.png" alt="HP Partner" style={{ height: '50px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* Counters section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center"><Award size={14} /> WORLDWIDE EXPERIENCE</div>
          <h2 className="section-title">We Always Try To Understand Users Expectation</h2>

          <div className="grid-4-col mt-4">
            {counters.map((c, i) => (
              <div key={i} className="card text-center p-4">
                <span className="stat-num text-primary" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{c.num}</span>
                <h4 className="mt-2" style={{ color: '#0f172a' }}>{c.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
