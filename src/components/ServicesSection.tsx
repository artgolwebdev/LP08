import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';

const getServices = (t: (key: string) => string) => [
  {
    icon: <Zap className="w-8 h-8" />,
    title: t('services.laser.title'),
    description: t('services.laser.description'),
    features: [
      t('services.laser.feature1'),
      t('services.laser.feature2'),
      t('services.laser.feature3')
    ],
    image: "https://images.unsplash.com/photo-1720424643392-4b63bd63d271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGxhc2VyJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1Njc3NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: t('services.rf.title'),
    description: t('services.rf.description'),
    features: [
      t('services.rf.feature1'),
      t('services.rf.feature2'),
      t('services.rf.feature3')
    ],
    image: "https://images.unsplash.com/photo-1709316054551-355656bd4815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3BhJTIwc2tpbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTY3NzcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: t('services.tattoo.title'),
    description: t('services.tattoo.description'),
    features: [
      t('services.tattoo.feature1'),
      t('services.tattoo.feature2'),
      t('services.tattoo.feature3')
    ],
    image: "https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY3NzcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: t('services.nails.title'),
    description: t('services.nails.description'),
    features: [
      t('services.nails.feature1'),
      t('services.nails.feature2'),
      t('services.nails.feature3'),
      t('services.nails.feature4')
    ],
    image: "https://images.unsplash.com/photo-1690749138086-7422f71dc159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuYWlsJTIwc2Fsb24lMjBtYW5pY3VyZXxlbnwxfHx8fDE3NTY3NzcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const services = getServices(t);
  
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-emerald-950 relative overflow-hidden">
      {/* Gucci Flora Botanical Pattern */}
      <div className="absolute inset-0 opacity-9">
        {/* Gucci Flora inspired botanical motifs */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='flora-grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.2'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(50,50)'%3E%3Cellipse cx='0' cy='0' rx='15' ry='8' fill='url(%23flora-grad)' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='0' rx='12' ry='6' fill='%23DAA520' opacity='0.3' transform='rotate(-30)'/%3E%3Cpath d='M-8,-8 Q0,-15 8,-8 Q15,0 8,8 Q0,15 -8,8 Q-15,0 -8,-8' fill='none' stroke='%23B8860B' stroke-width='0.8' opacity='0.4'/%3E%3C/g%3E%3Cg transform='translate(150,50)'%3E%3Cellipse cx='0' cy='0' rx='12' ry='7' fill='url(%23flora-grad)' transform='rotate(-45)'/%3E%3Cellipse cx='0' cy='0' rx='10' ry='5' fill='%23B8860B' opacity='0.3' transform='rotate(60)'/%3E%3C/g%3E%3Cg transform='translate(50,150)'%3E%3Cellipse cx='0' cy='0' rx='14' ry='9' fill='url(%23flora-grad)' transform='rotate(15)'/%3E%3Cellipse cx='0' cy='0' rx='11' ry='6' fill='%23DAA520' opacity='0.35' transform='rotate(-60)'/%3E%3C/g%3E%3Cg transform='translate(150,150)'%3E%3Cellipse cx='0' cy='0' rx='13' ry='8' fill='url(%23flora-grad)' transform='rotate(-15)'/%3E%3Cellipse cx='0' cy='0' rx='9' ry='5' fill='%23B8860B' opacity='0.4' transform='rotate(75)'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Delicate JD botanical integration */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='botanical-jd' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.7'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(40,40)'%3E%3Ccircle cx='0' cy='0' r='20' fill='none' stroke='url(%23botanical-jd)' stroke-width='1.5' opacity='0.6'/%3E%3Cpath d='M-15,-5 Q-10,-15 -5,-5 Q0,-15 5,-5 Q10,-15 15,-5' fill='none' stroke='%23DAA520' stroke-width='1' opacity='0.4'/%3E%3Ctext x='-8' y='5' font-family='EB Garamond,serif' font-size='16' font-weight='500' fill='%23B8860B' opacity='0.8'%3EJD%3C/text%3E%3C/g%3E%3Cg transform='translate(120,120)'%3E%3Ccircle cx='0' cy='0' r='18' fill='none' stroke='url(%23botanical-jd)' stroke-width='1.5' opacity='0.5'/%3E%3Cpath d='M-12,-4 Q-8,-12 -4,-4 Q0,-12 4,-4 Q8,-12 12,-4' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.35'/%3E%3Ctext x='-7' y='4' font-family='EB Garamond,serif' font-size='14' font-weight='500' fill='%23DAA520' opacity='0.7'%3EJD%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="mb-12 flex items-center justify-center">
            <div className="relative">
              <div className="flex items-center gap-8">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-emerald-400"></div>
                <div className="relative px-12 py-6 border-2 border-transparent bg-gradient-to-r from-amber-600/20 to-emerald-600/20 backdrop-blur-sm" 
                     style={{backgroundClip: 'padding-box'}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-emerald-600 p-[2px] -z-10">
                    <div className="h-full w-full bg-gradient-to-br from-slate-900 to-emerald-950"></div>
                  </div>
                  <div className="relative text-amber-200 tracking-[0.4em] uppercase text-2xl" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>
                    {t('services.title')}
                  </div>
                </div>
                <div className="h-px w-32 bg-gradient-to-l from-transparent via-emerald-400 to-amber-400"></div>
              </div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rotate-45"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text leading-tight tracking-wider uppercase mb-4" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '900'}}>
              {t('services.subtitle')}
            </div>
            <div className="text-lg tracking-[0.3em] text-emerald-300/70 uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>
              {t('services.tagline')}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-emerald-900/20 to-slate-800/20 border-emerald-400/10 backdrop-blur-sm h-full hover:border-emerald-400/30 transition-all duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="text-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl w-fit mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div className="text-2xl text-emerald-100 tracking-wide uppercase leading-tight mb-2" style={{fontFamily: 'Cinzel, serif', fontWeight: '800'}}>{service.title}</div>
                    <div className="text-emerald-300/80 text-base tracking-wide" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>{service.description}</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <ImageWithFallback 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-emerald-100/90">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base leading-relaxed" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
