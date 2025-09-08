import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-amber-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.1),transparent_50%)]"></div>
      
      {/* Gucci Classic Stripes Hero Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Classic Gucci green-red stripes */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gucci-stripe' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3Cstop offset='50%25' style='stop-color:%23B8860B;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='10' width='120' height='8' fill='url(%23gucci-stripe)'/%3E%3Crect x='0' y='30' width='120' height='4' fill='%23B8860B' opacity='0.4'/%3E%3Crect x='0' y='40' width='120' height='8' fill='url(%23gucci-stripe)'/%3E%3Crect x='0' y='60' width='120' height='4' fill='%23DAA520' opacity='0.5'/%3E%3Crect x='0' y='70' width='120' height='8' fill='url(%23gucci-stripe)'/%3E%3Crect x='0' y='90' width='120' height='4' fill='%23B8860B' opacity='0.4'/%3E%3Crect x='0' y='100' width='120' height='8' fill='url(%23gucci-stripe)'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Interlocking JD Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='jd-interlocking' cx='50%25' cy='50%25' r='40%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.9'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.5'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='45' cy='45' r='25' fill='none' stroke='url(%23jd-interlocking)' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='135' cy='45' r='25' fill='none' stroke='url(%23jd-interlocking)' stroke-width='2' opacity='0.6'/%3E%3Ccircle cx='90' cy='90' r='25' fill='none' stroke='url(%23jd-interlocking)' stroke-width='2' opacity='0.8'/%3E%3Ccircle cx='45' cy='135' r='25' fill='none' stroke='url(%23jd-interlocking)' stroke-width='2' opacity='0.5'/%3E%3Ccircle cx='135' cy='135' r='25' fill='none' stroke='url(%23jd-interlocking)' stroke-width='2' opacity='0.7'/%3E%3Ctext x='35' y='52' font-family='Bodoni Moda,serif' font-size='18' font-weight='600' fill='%23DAA520' opacity='0.8'%3EJD%3C/text%3E%3Ctext x='125' y='52' font-family='Bodoni Moda,serif' font-size='18' font-weight='600' fill='%23B8860B' opacity='0.7'%3EJD%3C/text%3E%3Ctext x='80' y='97' font-family='Bodoni Moda,serif' font-size='18' font-weight='600' fill='%23DAA520' opacity='0.9'%3EJD%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-8 sm:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center lg:justify-start px-4 sm:px-0">
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-emerald-400"></div>
                  <div className="relative px-3 sm:px-6 py-2 sm:py-3 border border-emerald-400/40 bg-gradient-to-r from-emerald-900/20 to-amber-900/20 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
                    <div className="relative text-emerald-300 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm whitespace-nowrap" style={{fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>
                      Premium Beauty Clinic
                    </div>
                  </div>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-emerald-400"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-amber-400"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-emerald-400"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-amber-400"></div>
              </div>
            </div>
            
            <div className="mb-6 px-4 sm:px-0">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 bg-clip-text leading-tight tracking-wide" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '900'}}>
                JD BEAUTY &<br />NAILS SALON
              </div>
              <div className="text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] text-emerald-300/80 mt-2 uppercase px-2 sm:px-0" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
                LUXURY · ELEGANCE · EXCELLENCE
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed px-4 sm:px-0" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
              Experience luxury treatments with advanced technology.<br />
              Your beauty transformation starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button size="lg" className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 hover:from-amber-800 hover:via-amber-700 hover:to-amber-800 text-amber-100 border border-amber-600/40 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-weight-medium shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-25" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='btn-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.9'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='5' y='5' width='15' height='15' rx='2' fill='url(%23btn-grad)' opacity='0.3'/%3E%3Ctext x='8' y='16' font-family='Cormorant Garamond,serif' font-size='10' font-weight='600' fill='%23DAA520' opacity='0.8'%3EJD%3C/text%3E%3Crect x='30' y='25' width='15' height='15' rx='2' fill='url(%23btn-grad)' opacity='0.25'/%3E%3Ctext x='33' y='36' font-family='Cormorant Garamond,serif' font-size='10' font-weight='600' fill='%23B8860B' opacity='0.8'%3EJD%3C/text%3E%3Cpath d='M0 25L25 0M25 50L50 25' stroke='%23DAA520' stroke-width='0.8' opacity='0.2'/%3E%3C/svg%3E")`,
                  backgroundSize: '50px 50px',
                  backgroundRepeat: 'repeat'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(218,165,32,0.1),transparent_70%)]"></div>
                <span className="relative z-10 tracking-wide uppercase" style={{fontFamily: 'Cinzel, serif', fontWeight: '700'}}>Book Appointment</span>
              </Button>
              <Button variant="outline" size="lg" className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:via-emerald-700 hover:to-emerald-800 border-emerald-600/40 text-emerald-100 hover:text-emerald-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-weight-medium shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='btn-emerald-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23B8860B;stop-opacity:0.9'/%3E%3Cstop offset='100%25' style='stop-color:%23DAA520;stop-opacity:0.7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='12' cy='12' r='8' fill='url(%23btn-emerald-grad)' opacity='0.25'/%3E%3Ctext x='7' y='17' font-family='Cormorant Garamond,serif' font-size='10' font-weight='600' fill='%23B8860B' opacity='0.9'%3EJD%3C/text%3E%3Ccircle cx='37' cy='37' r='8' fill='url(%23btn-emerald-grad)' opacity='0.2'/%3E%3Ctext x='32' y='42' font-family='Cormorant Garamond,serif' font-size='10' font-weight='600' fill='%23DAA520' opacity='0.9'%3EJD%3C/text%3E%3Cpath d='M4 12L20 12M12 4L12 20M29 37L45 37M37 29L37 45' stroke='%23DAA520' stroke-width='0.6' opacity='0.3'/%3E%3C/svg%3E")`,
                  backgroundSize: '50px 50px',
                  backgroundRepeat: 'repeat'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-700/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                <span className="relative z-10 tracking-wide uppercase" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '700'}}>View Services</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            {/* Floating Images - Brutalist Positioning */}
            
            {/* Large Image 1 - Top Left */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: -2 }}
              animate={{ 
                opacity: 1, 
                y: [0, -15, 0], 
                rotate: [-2, 1, -2],
                x: [0, 5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.3 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
              }}
              className="absolute top-8 left-4 z-30"
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-emerald-400/30 shadow-2xl transform rotate-2">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1706629503603-e47c37722776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTY3OTgzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury beauty treatment"
                  className="w-48 h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Medium Image 2 - Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ 
                opacity: 1, 
                y: [0, 20, 0], 
                rotate: [3, -1, 3],
                x: [0, -8, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.8 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
                x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
              }}
              className="absolute top-16 right-8 z-40"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-400/40 shadow-xl transform -rotate-3">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBsdXh1cnl8ZW58MXx8fHwxNzU2Nzk4Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury nail art"
                  className="w-36 h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* Large Image 3 - Center Right */}
            <motion.div 
              initial={{ opacity: 0, y: -30, rotate: -1 }}
              animate={{ 
                opacity: 1, 
                y: [0, -25, 0], 
                rotate: [-1, 2, -1],
                x: [0, 10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.2 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
              }}
              className="absolute top-48 right-0 z-20"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/25 shadow-2xl transform rotate-1">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1700760934166-4c766d708139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGhhaXIlMjByZW1vdmFsJTIwZGV2aWNlfGVufDF8fHx8MTc1Njc5ODM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laser treatment device"
                  className="w-52 h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-emerald-900/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Small Image 4 - Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              animate={{ 
                opacity: 1, 
                y: [0, 15, 0], 
                rotate: [4, -2, 4],
                x: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.6 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }
              }}
              className="absolute top-96 left-12 z-35"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-amber-400/50 shadow-xl transform -rotate-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1739981248829-ac9d4a6fecfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTY3OTgzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Facial skincare treatment"
                  className="w-32 h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Medium Image 5 - Bottom Center */}
            <motion.div 
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ 
                opacity: 1, 
                y: [0, -18, 0], 
                rotate: [-2, 3, -2],
                x: [0, 7, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 2 },
                y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.6 },
                rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.6 },
                x: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.6 }
              }}
              className="absolute top-80 right-24 z-25"
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-emerald-400/35 shadow-xl transform rotate-2">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1616247380773-c760ba067d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBsdXh1cnklMjBnb2xkfGVufDF8fHx8MTc1Njc5ODM5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury cosmetics"
                  className="w-40 h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-emerald-900/20"></div>
              </div>
            </motion.div>

            {/* Floating Particles/Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                y: [0, -10, 0], 
                rotate: [0, 360]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 3 },
                y: { duration: 10, repeat: Infinity, ease: "linear", delay: 3 },
                rotate: { duration: 10, repeat: Infinity, ease: "linear", delay: 3 }
              }}
              className="absolute top-32 right-4 w-4 h-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur-sm z-10"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                y: [0, 15, 0], 
                rotate: [0, -360]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 4 },
                y: { duration: 12, repeat: Infinity, ease: "linear", delay: 4 },
                rotate: { duration: 12, repeat: Infinity, ease: "linear", delay: 4 }
              }}
              className="absolute top-72 left-2 w-3 h-3 bg-gradient-to-l from-amber-400 to-emerald-400 rounded-full blur-sm z-10"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                y: [0, -8, 0], 
                x: [0, 5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 5 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 5 },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 5 }
              }}
              className="absolute top-96 right-12 w-2 h-2 bg-emerald-400 rounded-full blur-[1px] z-10"
            ></motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
