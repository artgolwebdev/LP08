import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 bg-gradient-to-r from-emerald-950 to-slate-950 border-t border-emerald-400/20 relative overflow-hidden">
      {/* Premium Footer Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Sophisticated footer pattern with refined elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='footer-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%23B8860B;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23DAA520;stop-opacity:0.4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(10,5)'%3E%3Ccircle cx='10' cy='10' r='8' fill='url(%23footer-grad)' opacity='0.3'/%3E%3Ctext x='5' y='15' font-family='Cormorant Garamond,serif' font-size='16' font-weight='700' fill='%23B8860B' opacity='1'%3EJD%3C/text%3E%3Cpath d='M2 10L18 10M10 2L10 18' stroke='%23DAA520' stroke-width='0.8' opacity='0.4'/%3E%3C/g%3E%3Cg transform='translate(45,35)'%3E%3Ccircle cx='10' cy='10' r='8' fill='url(%23footer-grad)' opacity='0.25'/%3E%3Ctext x='5' y='15' font-family='Cormorant Garamond,serif' font-size='16' font-weight='700' fill='%23DAA520' opacity='0.9'%3EJD%3C/text%3E%3Cpath d='M2 10L18 10M10 2L10 18' stroke='%23B8860B' stroke-width='0.8' opacity='0.35'/%3E%3C/g%3E%3Cpath d='M0 40L40 0M40 80L80 40' stroke='%23DAA520' stroke-width='1.5' opacity='0.15'/%3E%3Cpath d='M20 0L60 40L20 80' stroke='%23B8860B' stroke-width='1' opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Luxury border pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpath id='border-element' d='M60 20 L70 30 L60 40 L50 30 Z M60 80 L70 90 L60 100 L50 90 Z' fill='%23DAA520' opacity='0.18'/%3E%3C/defs%3E%3Cuse href='%23border-element'/%3E%3Cuse href='%23border-element' transform='rotate(90 60 60)'/%3E%3Cuse href='%23border-element' transform='rotate(180 60 60)'/%3E%3Cuse href='%23border-element' transform='rotate(270 60 60)'/%3E%3Ccircle cx='60' cy='60' r='25' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="text-3xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text mb-4 tracking-wide uppercase" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '800'}}>
          {t('footer.title')}
        </div>
        <div className="text-emerald-300 mb-6 tracking-wide" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
          {t('footer.luxury')}
        </div>
        <div className="text-xs tracking-[0.3em] text-emerald-400/60 mb-6 uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
          {t('footer.tagline')}
        </div>
        <div className="flex justify-center gap-8 text-emerald-300" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
          <span>{t('contact.phone1')}</span>
          <span>•</span>
          <span>{t('contact.phone2')}</span>
          <span>•</span>
          <span>{t('contact.address').replace('<br />', ', ')}</span>
        </div>
      </div>
    </footer>
  );
};
