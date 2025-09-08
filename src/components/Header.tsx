import { motion } from 'motion/react';
import React from 'react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-emerald-950/80 via-slate-900/70 to-amber-950/80 border-b border-emerald-400/20"
    >
      {/* Gucci luxury pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='nav-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(15,15)'%3E%3Crect x='0' y='0' width='30' height='2' fill='url(%23nav-grad)'/%3E%3Crect x='0' y='8' width='30' height='1' fill='%23DAA520' opacity='0.3'/%3E%3Crect x='0' y='14' width='30' height='2' fill='url(%23nav-grad)'/%3E%3Crect x='0' y='22' width='30' height='1' fill='%23B8860B' opacity='0.25'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <div className="relative p-3 bg-gradient-to-br from-emerald-600/30 to-amber-600/30 backdrop-blur-sm border border-emerald-400/30 rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-amber-600/10 rounded-xl"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-emerald-950/80 to-amber-950/80 rounded-[10px]"></div>
                <div className="relative text-2xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text" style={{fontFamily: 'Cinzel, serif', fontWeight: '900'}}>
                  JD
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text tracking-wide uppercase" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '800'}}>
                  Beauty & Nails
                </div>
                <div className="text-xs text-emerald-300/70 tracking-[0.2em] uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
                  Luxury Salon
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-2"
          >
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Services', id: 'services' },
              { label: 'Book Now', id: 'booking' },
              { label: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative group px-6 py-3 bg-gradient-to-br from-emerald-900/40 to-amber-900/40 backdrop-blur-lg border border-emerald-400/20 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* 3D Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-amber-600/5 group-hover:from-emerald-600/10 group-hover:to-amber-600/10 transition-all duration-300"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-emerald-950/60 to-amber-950/60 rounded-[7px]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent group-hover:via-emerald-400/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent group-hover:via-amber-400/50 transition-all duration-300"></div>
                
                {/* Gucci-inspired pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='btn-pattern' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='15' cy='7' r='3' fill='url(%23btn-pattern)'/%3E%3Ccircle cx='15' cy='23' r='3' fill='url(%23btn-pattern)'/%3E%3Cpath d='M7 15L23 15' stroke='%23DAA520' stroke-width='0.5' opacity='0.5'/%3E%3C/svg%3E")`,
                  backgroundSize: '30px 30px',
                  backgroundRepeat: 'repeat'
                }}></div>
                
                <span className="relative z-10 text-emerald-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 tracking-wide uppercase text-sm" style={{fontFamily: 'Cinzel, serif', fontWeight: '600'}}>
                  {item.label}
                </span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-amber-400/0 group-hover:from-emerald-400/10 group-hover:via-transparent group-hover:to-amber-400/10 transition-all duration-500"></div>
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden relative p-3 bg-gradient-to-br from-emerald-900/50 to-amber-900/50 backdrop-blur-lg border border-emerald-400/30 rounded-lg shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-amber-600/10 rounded-lg"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-emerald-950/80 to-amber-950/80 rounded-[7px]"></div>
            <div className="relative w-6 h-6 flex flex-col justify-center gap-1">
              <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
              <div className="w-full h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
              <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Glass refraction effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 via-amber-400/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 via-emerald-400/20 to-transparent"></div>
    </motion.header>
  );
};
