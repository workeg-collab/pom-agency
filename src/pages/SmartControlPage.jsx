import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Video, Bell, Volume2, Radio, KeyRound, PhoneCall, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import './SmartControlPage.css';

export default function SmartControlPage() {
  const systems = [
    { icon: Bell, title: 'Fire Alarm Systems', desc: 'Conventional and addressable fire detection panels and smoke sensors.' },
    { icon: Volume2, title: 'Sound Systems', desc: 'Multi-zone background music and commercial public address speaker systems.' },
    { icon: Video, title: 'CCTV Systems', desc: 'High-definition surveillance cameras with night vision and remote mobile streaming.' },
    { icon: PhoneCall, title: 'Telephone Systems', desc: 'Central PBX and IP telephone network installations.' },
    { icon: Radio, title: 'Satellite (SMATV)', desc: 'Central satellite television distribution for residential and commercial complexes.' },
    { icon: KeyRound, title: 'Access Control & Intercom', desc: 'Biometric card readers, magnetic door locks, and video intercom controllers.' },
    { icon: Car, title: 'Parking Systems', desc: 'Automated barrier gates and parking access controllers.' }
  ];

  return (
    <div className="smart-page">
      <section className="page-header">
        <div className="container">
          <div className="badge"><ShieldAlert size={14} /> DIGITAL PLATFORM</div>
          <h1>Smart Control, Fire Alarm, Sound, CCTV, Telephone, SMATV, Access Control, Intercom, Networks, Parking</h1>
          <p className="page-header-sub">
            Low-current or light-current systems have recently witnessed rapid development in the field of technology. Ultra-low voltage electronic systems operate reliably using direct current (DC Current).
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">SYSTEM CATEGORIES</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">Turnkey installation and setup for all light-current systems.</p>

          <div className="grid-3-col">
            {systems.map((sys, idx) => (
              <div key={idx} className="card sys-card">
                <sys.icon size={32} className="sys-icon" />
                <h3>{sys.title}</h3>
                <p>{sys.desc}</p>
                <div className="sys-tag"><CheckCircle2 size={14} /> Certified Setup</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Official System Partners</h2>
          <div className="brand-logos-row flex-center gap-4 mt-4">
            <img src="/assets/EZVIZ_logo.png" alt="EZVIZ Partner" style={{ height: '45px', objectFit: 'contain' }} />
            <img src="/assets/Hochiki-Global-Banner-Logo-2019-with-Strapline-black-_-red-web-1.png" alt="Hochiki Partner" style={{ height: '45px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
