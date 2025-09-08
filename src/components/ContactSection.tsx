import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';
import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-emerald-950 relative overflow-hidden">
      {/* Google Maps Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0755736!2d34.7818!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzA3LjEiTiAzNMKwNDYnNTQuNSJF!5e0!3m2!1sen!2sil!4v1234567890123!5m2!1sen!2sil"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover opacity-20"
          title="JD Beauty & Nails Salon Location Background"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-950/85 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
      </div>
      {/* Gucci Web Stripe Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Classic Gucci Web stripes with luxury twist */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='web-stripe' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23B8860B;stop-opacity:0.6'/%3E%3Cstop offset='25%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%23B8860B;stop-opacity:0.4'/%3E%3Cstop offset='75%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='20' width='160' height='12' fill='url(%23web-stripe)'/%3E%3Crect x='0' y='40' width='160' height='8' fill='%23DAA520' opacity='0.3'/%3E%3Crect x='0' y='55' width='160' height='12' fill='url(%23web-stripe)'/%3E%3Crect x='0' y='75' width='160' height='6' fill='%23B8860B' opacity='0.4'/%3E%3Crect x='0' y='90' width='160' height='12' fill='url(%23web-stripe)'/%3E%3Crect x='0' y='110' width='160' height='8' fill='%23DAA520' opacity='0.35'/%3E%3Crect x='0' y='125' width='160' height='12' fill='url(%23web-stripe)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Diagonal web pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='diagonal-web' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.5'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='rotate(45 60 60)'%3E%3Crect x='30' y='0' width='8' height='120' fill='url(%23diagonal-web)' opacity='0.4'/%3E%3Crect x='50' y='0' width='6' height='120' fill='%23B8860B' opacity='0.3'/%3E%3Crect x='65' y='0' width='8' height='120' fill='url(%23diagonal-web)' opacity='0.35'/%3E%3Crect x='85' y='0' width='5' height='120' fill='%23DAA520' opacity='0.25'/%3E%3C/g%3E%3Cg transform='translate(30,30)'%3E%3Crect x='0' y='0' width='25' height='25' rx='3' fill='none' stroke='%23DAA520' stroke-width='1' opacity='0.4'/%3E%3Ctext x='7' y='18' font-family='EB Garamond,serif' font-size='16' font-weight='600' fill='%23B8860B' opacity='0.7'%3EJD%3C/text%3E%3C/g%3E%3Cg transform='translate(75,75)'%3E%3Crect x='0' y='0' width='20' height='20' rx='2' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.35'/%3E%3Ctext x='5' y='14' font-family='EB Garamond,serif' font-size='14' font-weight='600' fill='%23DAA520' opacity='0.6'%3EJD%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="mb-12 flex items-center justify-center">
            <div className="relative">
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-2">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400"></div>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-400"></div>
                </div>
                <div className="relative px-12 py-6 border-2 border-amber-400/30 bg-gradient-to-r from-amber-900/20 to-emerald-900/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-emerald-600/10"></div>
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400/70"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-emerald-400/70"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-emerald-400/70"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400/70"></div>
                  <div className="relative text-amber-200 tracking-[0.4em] uppercase text-xl" style={{fontFamily: 'Cinzel, serif', fontWeight: '600'}}>
                    Contact Us
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-400"></div>
                  <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text leading-tight tracking-wider uppercase mb-4" style={{fontFamily: 'Cinzel, serif', fontWeight: '900'}}>
              Visit Our Clinic
            </div>
            <div className="text-base tracking-[0.3em] text-emerald-300/70 uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
              Where Luxury Meets Excellence
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/40 to-slate-800/40 border-emerald-400/20 backdrop-blur-md text-center h-full hover:border-emerald-400/40 transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl w-fit mx-auto mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl text-emerald-100 mb-3 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Location</div>
                <p className="text-emerald-300/90 text-base leading-relaxed" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>
                  Chanoch St 41<br />
                  Tel Aviv, Israel
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/40 to-slate-800/40 border-emerald-400/20 backdrop-blur-md text-center h-full hover:border-emerald-400/40 transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl w-fit mx-auto mb-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl text-emerald-100 mb-3 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Phone Numbers</div>
                <div className="space-y-2 text-emerald-300/90 text-base" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>
                  <p>054-798-1852</p>
                  <p>054-985-0418</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/40 to-slate-800/40 border-emerald-400/20 backdrop-blur-md text-center h-full hover:border-emerald-400/40 transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl w-fit mx-auto mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl text-emerald-100 mb-3 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Business Hours</div>
                <div className="space-y-2 text-emerald-300/90 text-sm" style={{fontFamily: 'Inter, sans-serif', fontWeight: '300'}}>
                  <p>Sunday - Thursday</p>
                  <p className="text-base text-emerald-200">9:00 AM - 8:00 PM</p>
                  <p>Friday</p>
                  <p className="text-base text-emerald-200">9:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="relative bg-gradient-to-br from-emerald-900 via-amber-900 via-50% to-emerald-900 hover:from-emerald-800 hover:via-amber-800 hover:to-emerald-800 text-emerald-100 border border-emerald-600/40 px-8 py-6 text-base font-weight-medium shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-700/20 via-amber-700/20 to-transparent"></div>
              <span className="relative z-10 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Get Directions</span>
            </Button>
            
            <Button variant="outline" size="lg" className="relative bg-gradient-to-br from-amber-900/30 to-emerald-900/30 hover:from-amber-800/40 hover:to-emerald-800/40 border-2 border-amber-400/30 text-amber-100 hover:text-amber-100 px-8 py-6 text-base font-weight-medium shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
              <Phone className="relative z-10 w-5 h-5 mr-2" />
              <span className="relative z-10 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Call Now</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
