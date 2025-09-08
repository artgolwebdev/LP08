import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'ti', name: 'ትግርኛ', flag: '🇪🇹' }
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: 'en' | 'he' | 'ti') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 bg-gradient-to-br from-emerald-900/50 to-amber-900/50 backdrop-blur-lg border border-emerald-400/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[120px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-amber-600/10 rounded-lg"></div>
        <div className="absolute inset-[1px] bg-gradient-to-br from-emerald-950/80 to-amber-950/80 rounded-[7px]"></div>
        
        <div className="relative flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <div className="text-sm text-emerald-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 uppercase tracking-wide" style={{fontFamily: 'Inter, sans-serif', fontWeight: '700'}}>
              {currentLanguage.name}
            </div>
          </div>
          <ChevronDown className={`w-3 h-3 text-emerald-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-amber-400/0 group-hover:from-emerald-400/10 group-hover:via-transparent group-hover:to-amber-400/10 transition-all duration-500"></div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full bg-gradient-to-br from-emerald-900/90 to-amber-900/90 backdrop-blur-xl border border-emerald-400/20 rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-amber-600/5"></div>
            <div className="relative">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'en' | 'he' | 'ti')}
                  className={`w-full px-3 py-2 flex items-center gap-3 text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-amber-600/20 ${
                    language === lang.code ? 'bg-gradient-to-r from-emerald-600/30 to-amber-600/30' : ''
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-base text-emerald-200 hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-amber-300 hover:bg-clip-text transition-all duration-300" style={{fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>
                    {lang.name}
                  </span>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
