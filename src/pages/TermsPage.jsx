import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './TermsPage.css';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="terms-page section">
      <div className="container max-w-800 card p-5">
        <div className="badge mb-3"><ShieldCheck size={14} /> {t('legalBadge')}</div>
        <h1>{t('termsTitle')}</h1>
        <p className="text-muted mb-4">{t('lastUpdated')}</p>

        <div className="terms-content">
          <h3>{t('termsSec1Title')}</h3>
          <p>{t('termsSec1P1')}</p>
          <p>{t('termsSec1P2')}</p>

          <h3>{t('termsSec2Title')}</h3>
          <p>{t('termsSec2P1')}</p>
          <ul>
            <li>{t('termsSec2Bullet1')}</li>
            <li>{t('termsSec2Bullet2')}</li>
            <li>{t('termsSec2Bullet3')}</li>
          </ul>

          <h3>{t('termsSec3Title')}</h3>
          <p>{t('termsSec3P1')}</p>
        </div>
      </div>
    </div>
  );
}
