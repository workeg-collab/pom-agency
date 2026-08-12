import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Video, Bell, Volume2, Radio, KeyRound, PhoneCall, Car, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import './SmartControlPage.css';

export default function SmartControlPage() {
  const systems = [
    { icon: Video, title: 'CCTV Surveillance Systems', desc: 'HD IP cameras, NVR recording, remote mobile viewing (EZVIZ, Dahua, Hikvision integration).' },
    { icon: Bell, title: 'Fire Alarm Systems', desc: 'Addressable & conventional fire detection panels, smoke detectors, and alarm bells (Hochiki certified).' },
    { icon: Volume2, title: 'Background Sound Systems', desc: 'Multi-zone ceiling speakers, public address amplifiers, and commercial audio controls.' },
    { icon: KeyRound, title: 'Access Control & Intercoms', desc: 'Door strike magnetic locks, RFID card readers, video door phones, and smart gate access.' },
    { icon: Radio, title: 'Satellite SMATV Systems', desc: 'Central dish antenna systems delivering multi-channel TV signal across building apartments.' },
    { icon: Car, title: 'Smart Parking Barrier Systems', desc: 'Automated boom barriers, RFID vehicle tags, and parking management controllers.' }
  ];

  return (
    <div className="smart-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><ShieldAlert size={14} /> SMART CONTROL & LIGHT CURRENT</div>
          <h1>Light Current & Smart Building Automation Systems</h1>
          <p className="page-header-sub">
            Low-current technology systems designed for maximum safety, automation, and central control across commercial and residential premises.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">SYSTEM CATEGORIES</div>
          <h2 className="section-title">Integrated Smart Control Solutions</h2>
          <p className="section-subtitle">Operating on low-voltage DC current for ultra-reliable, uninterrupted operation.</p>

          <div className="grid-3-col">
            {systems.map((sys, idx) => (
              <div key={idx} className="card sys-card">
                <sys.icon size={32} className="sys-icon" />
                <h3>{sys.title}</h3>
                <p>{sys.desc}</p>
                <div className="sys-tag"><CheckCircle2 size={14} /> Turnkey Supply & Setup</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2>Need a Security & Smart Building Consultation?</h2>
          <p className="section-subtitle">Contact our low-current system engineers for custom site blueprints and proposals.</p>
          <Link to="/mail-professional" className="btn btn-primary">
            Request Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
