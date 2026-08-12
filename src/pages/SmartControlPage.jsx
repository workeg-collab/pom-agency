import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Video, Bell, Volume2, Radio, KeyRound, PhoneCall, Car, CheckCircle2, ArrowRight, Award, Newspaper } from 'lucide-react';
import './SmartControlPage.css';

export default function SmartControlPage() {
  const systems = [
    { icon: Bell, title: 'Fire Alarm Systems', desc: 'Conventional & addressable fire alarm control panels, smoke detectors, and break glass stations.' },
    { icon: Volume2, title: 'Sound Systems', desc: 'Background music amplifiers, ceiling speakers, and public address sound systems.' },
    { icon: Video, title: 'CCTV Systems', desc: 'High definition IP cameras, network video recorders (NVR), and remote smartphone viewing.' },
    { icon: PhoneCall, title: 'Telephone Systems', desc: 'Internal PABX, IP phones, and office telephone network extensions.' },
    { icon: Radio, title: 'Satellite (SMATV)', desc: 'Central satellite television distribution networks for apartments and hotels.' },
    { icon: KeyRound, title: 'Access Control & Intercom', desc: 'Biometric card readers, magnetic door strikes, audio/video intercom units.' },
    { icon: Car, title: 'Parking Systems', desc: 'Automated barrier gates, RFID vehicle access tags, and parking controllers.' }
  ];

  const counters = [
    { num: '15M+', label: 'Downloaded' },
    { num: '99%', label: 'Positive Feedback' },
    { num: '2M+', label: 'Active Users' },
    { num: '500+', label: 'Contributors' }
  ];

  return (
    <div className="smart-page">
      <section className="page-header">
        <div className="container grid-2-col align-center">
          <div>
            <div className="badge"><ShieldAlert size={14} /> DIGITAL PLATFORM</div>
            <h1>Smart Control, Fire Alarm Systems, Sound Systems, CCTV Systems, Telephone Systems, Satellite(SMATV), Access Control, Intercom Systems, Computer Networks, Parking system |</h1>
            <p className="page-header-sub text-left">
              Low-current or light-current systems have recently witnessed rapid development in the field of technology and information technology. Low current or ultra-low voltage systems are electronic systems that operate using a low voltage source (DC Current).
            </p>
            <Link to="/mail-professional" className="btn btn-primary mt-4">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src="/assets/Illustration-2.jpg" alt="Smart Control Platform" className="hero-official-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="badge-center">SYSTEM CATEGORIES</div>
          <h2 className="section-title">Delivering AI-Powered Solutions for Your Business</h2>
          <p className="section-subtitle">Do play they miss give so up. Words to up style of since world. We leaf to snug on no need.</p>

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
