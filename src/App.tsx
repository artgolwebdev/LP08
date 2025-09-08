import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import React from 'react';

const AppContent: React.FC = () => {
  const { isRTL } = useLanguage();

  // Apply RTL direction to document
  React.useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = isRTL ? 'he' : 'en';
  }, [isRTL]);

  // Smooth scroll functionality
  const scrollToSection = (sectionId: string) => {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the header height to offset the scroll
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        
        // Calculate the position with header offset
        const elementPosition = element.offsetTop - headerHeight - 20; // Extra 20px buffer
        
        // Smooth scroll to the calculated position
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure DOM is ready
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default function App() {
  // Add Google Fonts - Enhanced for Multi-Language Support
  React.useEffect(() => {
    // English fonts - Bold and modern
    const englishFonts = document.createElement('link');
    englishFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cinzel:wght@400;500;600;700;800;900&display=swap';
    englishFonts.rel = 'stylesheet';
    document.head.appendChild(englishFonts);

    // Hebrew fonts - Bold and readable
    const hebrewFonts = document.createElement('link');
    hebrewFonts.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800;900&family=Secular+One&display=swap';
    hebrewFonts.rel = 'stylesheet';
    document.head.appendChild(hebrewFonts);

    // Tigrinya fonts - Better support for Ge'ez script
    const tigrinyaFonts = document.createElement('link');
    tigrinyaFonts.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;600;700;800;900&family=Abyssinica+SIL:wght@400&display=swap';
    tigrinyaFonts.rel = 'stylesheet';
    document.head.appendChild(tigrinyaFonts);

    return () => {
      document.head.removeChild(englishFonts);
      document.head.removeChild(hebrewFonts);
      document.head.removeChild(tigrinyaFonts);
    };
  }, []);

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}