import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ti' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
  getFontFamily: (type: 'heading' | 'body' | 'display') => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.book': 'Book Now',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.premium': 'Premium Beauty Clinic',
    'hero.title': 'JD BEAUTY &<br />NAILS SALON',
    'hero.subtitle': 'LUXURY · ELEGANCE · EXCELLENCE',
    'hero.description': 'Experience luxury treatments with advanced technology.<br />Your beauty transformation starts here.',
    'hero.bookButton': 'Book Appointment',
    'hero.servicesButton': 'View Services',
    
    // Services Section
    'services.title': 'Our Treatments',
    'services.subtitle': 'Premium Beauty Services',
    'services.tagline': 'Advanced Technology · Exceptional Care',
    'services.laser.title': 'Laser Hair Removal',
    'services.laser.description': 'Pain-free "Ice Head" technology',
    'services.laser.feature1': 'Safe for all skin tones (light & dark)',
    'services.laser.feature2': 'Permanent hair reduction',
    'services.laser.feature3': 'Popular areas: face, arms, legs, underarms, bikini',
    'services.rf.title': 'RF Skin Tightening',
    'services.rf.description': 'Non-invasive lifting & firming',
    'services.rf.feature1': 'Reduces wrinkles and fine lines',
    'services.rf.feature2': 'Stimulates collagen production',
    'services.rf.feature3': 'Face & body treatments',
    'services.tattoo.title': 'Tattoo Removal',
    'services.tattoo.description': 'Advanced laser technology',
    'services.tattoo.feature1': 'Removes unwanted tattoos safely',
    'services.tattoo.feature2': 'Works on different colors and sizes',
    'services.tattoo.feature3': 'Minimal discomfort',
    'services.nails.title': 'Nail Care & Beauty',
    'services.nails.description': 'Professional nail treatments',
    'services.nails.feature1': 'Manicure & Pedicure',
    'services.nails.feature2': 'Nail extensions & designs',
    'services.nails.feature3': 'Gel polish & strengthening',
    'services.nails.feature4': 'Nail health treatments',
    
    // Booking Section
    'booking.badge': 'Book Now',
    'booking.title': 'Schedule Your Appointment',
    'booking.subtitle': 'Your Journey Begins Here',
    'booking.description': 'Ready to experience our premium beauty treatments? Book your appointment today and let our experts take care of you.',
    'booking.formTitle': 'Book Your Treatment',
    'booking.formDescription': 'Fill out the form below and we\'ll contact you to confirm your appointment',
    'booking.firstName': 'First Name',
    'booking.firstNamePlaceholder': 'Your first name',
    'booking.lastName': 'Last Name',
    'booking.lastNamePlaceholder': 'Your last name',
    'booking.phone': 'Phone Number',
    'booking.phonePlaceholder': 'Your phone number',
    'booking.email': 'Email Address',
    'booking.emailPlaceholder': 'Your email address',
    'booking.service': 'Select Service',
    'booking.servicePlaceholder': 'Select a treatment',
    'booking.pigmentation': 'Pigmentation Treatment',
    'booking.skinRejuvenation': 'Skin Rejuvenation',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.message': 'Additional Notes',
    'booking.messagePlaceholder': 'Tell us about your preferences...',
    'booking.submit': 'Book Appointment',
    'booking.flexibleScheduling': 'Flexible scheduling available',
    'booking.safeProfessional': 'Safe & professional treatments',
    'booking.premiumQuality': 'Premium quality service',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Visit Our Clinic',
    'contact.tagline': 'Where Luxury Meets Excellence',
    'contact.location': 'Location',
    'contact.address': 'Chanoch St 41<br />Tel Aviv, Israel',
    'contact.phone': 'Phone Numbers',
    'contact.phone1': '054-798-1852',
    'contact.phone2': '054-985-0418',
    'contact.hours': 'Business Hours',
    'contact.weekdays': 'Sunday - Thursday',
    'contact.weekdayHours': '9:00 AM - 8:00 PM',
    'contact.friday': 'Friday',
    'contact.fridayHours': '9:00 AM - 4:00 PM',
    'contact.getDirections': 'Get Directions',
    'contact.callNow': 'Call Now',
    
    // Footer
    'footer.title': 'JD Beauty & Nails Salon',
    'footer.luxury': 'Your premier destination for luxury beauty treatments in Tel Aviv',
    'footer.tagline': 'Luxury · Excellence · Innovation',
    'footer.rights': '© 2024 JD Beauty & Nails Salon. All rights reserved.'
  },
  ti: {
    // Header
    'nav.home': 'መነሻ',
    'nav.services': 'አገልግሎቶች',
    'nav.book': 'ቦታ ማስያዝ',
    'nav.contact': 'አግኙን',
    
    // Hero Section
    'hero.premium': 'የላቀ የውበት ክሊኒክ',
    'hero.title': 'JD ውበት &<br />ጥፍር ሳሎን',
    'hero.subtitle': 'የላቀ · የሰላም · ልዩነት',
    'hero.description': 'በላቀ ቴክኖሎጂ የላቀ ሕክምናዎችን ያስተናግዱ።<br />የውበት ለውጥዎ እዚህ ይጀምራል።',
    'hero.bookButton': 'ቦታ ማስያዝ',
    'hero.servicesButton': 'አገልግሎቶች ይመልከቱ',
    
    // Services Section
    'services.title': 'የእኛ ሕክምናዎች',
    'services.subtitle': 'የላቀ የውበት አገልግሎቶች',
    'services.tagline': 'የላቀ ቴክኖሎጂ · ልዩ እንክብካቤ',
    'services.laser.title': 'ሌዘር ጠጉር ማስወገድ',
    'services.laser.description': 'ያለህብረት "የበረዶ ራስ" ቴክኖሎጂ',
    'services.laser.feature1': 'ለሁሉም የቆዳ ቀለሞች ደህንነቱ የተጠበቀ (ግልጽ እና ጥቁር)',
    'services.laser.feature2': 'ቋሚ ጠጉር መቀነስ',
    'services.laser.feature3': 'ታዋቂ አካባቢዎች: ፊት፣ ክንዶች፣ እግሮች፣ በጥፍር ሥር፣ ቢኪኒ',
    'services.rf.title': 'RF ቆዳ መጠንነት',
    'services.rf.description': 'ያለህብረት ማንሳት እና መጠንነት',
    'services.rf.feature1': 'መጠርጠሪያዎችን እና ቀጭን መስመሮችን ይቀንሳል',
    'services.rf.feature2': 'ኮላጅን ምርትን ያበረታታል',
    'services.rf.feature3': 'ፊት እና አካል ሕክምናዎች',
    'services.tattoo.title': 'ታቱ ማስወገድ',
    'services.tattoo.description': 'የላቀ ሌዘር ቴክኖሎጂ',
    'services.tattoo.feature1': 'የማይፈለጉ ታቱዎችን በደህንነት ያስወግዳል',
    'services.tattoo.feature2': 'በተለያዩ ቀለሞች እና መጠኖች ላይ ይሰራል',
    'services.tattoo.feature3': 'በጣም አነስተኛ አለመመች',
    'services.nails.title': 'ጥፍር እንክብካቤ እና ውበት',
    'services.nails.description': 'የሙያ ጥፍር ሕክምናዎች',
    'services.nails.feature1': 'ማኒኪየር እና ፔዲኪየር',
    'services.nails.feature2': 'ጥፍር ማራዘሚያዎች እና ዲዛይኖች',
    'services.nails.feature3': 'ጄል ፖሊሽ እና ማጠንነት',
    'services.nails.feature4': 'ጥፍር ጤንነት ሕክምናዎች',
    
    // Booking Section
    'booking.badge': 'ቦታ ማስያዝ',
    'booking.title': 'ቦታዎን ያስያዙ',
    'booking.subtitle': 'ጉዞዎ እዚህ ይጀምራል',
    'booking.description': 'የላቀ የውበት ሕክምናዎቻችንን ለመሞከር ዝግጁ ነዎት? ዛሬ ቦታዎን ያስያዙ እና ባለሙያዎቻችን እንዲያስተናግዱዎት ያድርጉ።',
    'booking.formTitle': 'ሕክምናዎን ያስያዙ',
    'booking.formDescription': 'ከዚህ በታች ያለውን ቅጥ ይሙሉ እና ቦታዎን ለማረጋገጥ እንጠራዎታለን',
    'booking.firstName': 'የመጀመሪያ ስም',
    'booking.firstNamePlaceholder': 'የመጀመሪያ ስምዎ',
    'booking.lastName': 'የኋለኛ ስም',
    'booking.lastNamePlaceholder': 'የኋለኛ ስምዎ',
    'booking.phone': 'ስልክ ቁጥር',
    'booking.phonePlaceholder': 'የስልክ ቁጥርዎ',
    'booking.email': 'ኢሜይል አድራሻ',
    'booking.emailPlaceholder': 'የኢሜይል አድራሻዎ',
    'booking.service': 'አገልግሎት ይምረጡ',
    'booking.servicePlaceholder': 'ሕክምና ይምረጡ',
    'booking.pigmentation': 'የቆዳ ቀለም ሕክምና',
    'booking.skinRejuvenation': 'ቆዳ እንደገና ማስጀመር',
    'booking.date': 'የሚመርጠው ቀን',
    'booking.time': 'የሚመርጠው ሰዓት',
    'booking.message': 'ተጨማሪ ማስታወሻዎች',
    'booking.messagePlaceholder': 'ስለ ምርጫዎችዎ ይንገሩን...',
    'booking.submit': 'ቦታ ማስያዝ',
    'booking.flexibleScheduling': 'ተለዋዋጭ የሰዓት ማስቀመጥ ይገኛል',
    'booking.safeProfessional': 'ደህንነቱ የተጠበቀ እና የሙያ ሕክምናዎች',
    'booking.premiumQuality': 'የላቀ ጥራት አገልግሎት',
    
    // Contact Section
    'contact.title': 'አግኙን',
    'contact.subtitle': 'ክሊኒካችንን ይጎብኙ',
    'contact.tagline': 'የላቀ እና ልዩነት የሚገናኙበት',
    'contact.location': 'አካባቢ',
    'contact.address': 'ቻኖክ ጎዳና 41<br />ቴል አቪቭ፣ እስራኤል',
    'contact.phone': 'ስልክ ቁጥሮች',
    'contact.phone1': '054-798-1852',
    'contact.phone2': '054-985-0418',
    'contact.hours': 'የስራ ሰዓቶች',
    'contact.weekdays': 'እሁድ - አርብ',
    'contact.weekdayHours': '9:00 ጠዋት - 8:00 ምሽት',
    'contact.friday': 'ቅዳሜ',
    'contact.fridayHours': '9:00 ጠዋት - 4:00 ምሽት',
    'contact.getDirections': 'አቅጣጫ ያግኙ',
    'contact.callNow': 'አሁን ይደውሉ',
    
    // Footer
    'footer.title': 'JD ውበት & ጥፍር ሳሎን',
    'footer.luxury': 'በቴል አቪቭ የላቀ የውበት ሕክምናዎች ዋና መድረሻዎ',
    'footer.tagline': 'የላቀ · ልዩነት · አዲስ ሀሳብ',
    'footer.rights': '© 2024 JD ውበት & ጥፍር ሳሎን። ሁሉም መብቶች የተጠበቁ ናቸው።'
  },
  he: {
    // Header
    'nav.home': 'בית',
    'nav.services': 'שירותים',
    'nav.book': 'הזמן עכשיו',
    'nav.contact': 'צור קשר',
    
    // Hero Section
    'hero.premium': 'מרפאת יופי פרמיום',
    'hero.title': 'JD יופי &<br />מניקור סלון',
    'hero.subtitle': 'יוקרה · אלגנטיות · מצוינות',
    'hero.description': 'חווה טיפולי יופי מפוארים עם טכנולוגיה מתקדמת.<br />השינוי שלך מתחיל כאן.',
    'hero.bookButton': 'הזמן תור',
    'hero.servicesButton': 'צפה בשירותים',
    
    // Services Section
    'services.title': 'הטיפולים שלנו',
    'services.subtitle': 'שירותי יופי פרמיום',
    'services.tagline': 'טכנולוגיה מתקדמת · טיפול יוצא דופן',
    'services.laser.title': 'הסרת שיער בלייזר',
    'services.laser.description': 'טכנולוגיית "ראש קרח" ללא כאב',
    'services.laser.feature1': 'בטוח לכל גווני העור (בהיר וכהה)',
    'services.laser.feature2': 'הפחתת שיער קבועה',
    'services.laser.feature3': 'אזורים פופולריים: פנים, זרועות, רגליים, בתי שחי, ביקיני',
    'services.rf.title': 'הדקת עור RF',
    'services.rf.description': 'הרמה והדקה לא פולשנית',
    'services.rf.feature1': 'מפחית קמטים וקווים דקים',
    'services.rf.feature2': 'מעורר ייצור קולגן',
    'services.rf.feature3': 'טיפולי פנים וגוף',
    'services.tattoo.title': 'הסרת קעקועים',
    'services.tattoo.description': 'טכנולוגיית לייזר מתקדמת',
    'services.tattoo.feature1': 'מסיר קעקועים לא רצויים בבטחה',
    'services.tattoo.feature2': 'עובד על צבעים וגדלים שונים',
    'services.tattoo.feature3': 'אי נוחות מינימלית',
    'services.nails.title': 'טיפוח ציפורניים ויופי',
    'services.nails.description': 'טיפולי ציפורניים מקצועיים',
    'services.nails.feature1': 'מניקור ופדיקור',
    'services.nails.feature2': 'הארכות ציפורניים ועיצובים',
    'services.nails.feature3': 'לכה ג\'ל וחיזוק',
    'services.nails.feature4': 'טיפולי בריאות ציפורניים',
    
    // Booking Section
    'booking.badge': 'הזמן עכשיו',
    'booking.title': 'קבע את התור שלך',
    'booking.subtitle': 'המסע שלך מתחיל כאן',
    'booking.description': 'מוכן לחוות את טיפולי היופי הפרמיום שלנו? קבע תור היום ותן למומחים שלנו לטפל בך.',
    'booking.formTitle': 'הזמן את הטיפול שלך',
    'booking.formDescription': 'מלא את הטופס למטה ונחזור אליך לאישור התור',
    'booking.firstName': 'שם פרטי',
    'booking.firstNamePlaceholder': 'השם הפרטי שלך',
    'booking.lastName': 'שם משפחה',
    'booking.lastNamePlaceholder': 'שם המשפחה שלך',
    'booking.phone': 'מספר טלפון',
    'booking.phonePlaceholder': 'מספר הטלפון שלך',
    'booking.email': 'כתובת אימייל',
    'booking.emailPlaceholder': 'כתובת האימייל שלך',
    'booking.service': 'בחר שירות',
    'booking.servicePlaceholder': 'בחר טיפול',
    'booking.pigmentation': 'טיפול בפיגמנטציה',
    'booking.skinRejuvenation': 'הצערת עור',
    'booking.date': 'תאריך מועדף',
    'booking.time': 'שעה מועדפת',
    'booking.message': 'הערות נוספות',
    'booking.messagePlaceholder': 'ספר לנו על ההעדפות שלך...',
    'booking.submit': 'הזמן תור',
    'booking.flexibleScheduling': 'זמין תזמון גמיש',
    'booking.safeProfessional': 'טיפולים בטוחים ומקצועיים',
    'booking.premiumQuality': 'שירות איכות פרמיום',
    
    // Contact Section
    'contact.title': 'צור קשר',
    'contact.subtitle': 'בקר במרפאה שלנו',
    'contact.tagline': 'איפה יוקרה פוגשת מצוינות',
    'contact.location': 'מיקום',
    'contact.address': 'רחוב חנוך 41<br />תל אביב, ישראל',
    'contact.phone': 'מספרי טלפון',
    'contact.phone1': '054-798-1852',
    'contact.phone2': '054-985-0418',
    'contact.hours': 'שעות פעילות',
    'contact.weekdays': 'ראשון - חמישי',
    'contact.weekdayHours': '9:00 בבוקר - 8:00 בערב',
    'contact.friday': 'שישי',
    'contact.fridayHours': '9:00 בבוקר - 4:00 אחר הצהריים',
    'contact.getDirections': 'קבל הנחיות',
    'contact.callNow': 'התקשר עכשיו',
    
    // Footer
    'footer.title': 'JD יופי ומניקור סלון',
    'footer.luxury': 'היעד המוביל שלך לטיפולי יופי מפוארים בתל אביב',
    'footer.tagline': 'יוקרה · מצוינות · חדשנות',
    'footer.rights': '© 2024 JD יופי ומניקור סלון. כל הזכויות שמורות.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Browser language detection function
  const detectBrowserLanguage = (): Language => {
    // Check if user has a saved preference in localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'he', 'ti'].includes(savedLanguage)) {
      return savedLanguage;
    }

    // Get browser language
    const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
    
    // Language mapping - map browser language codes to our supported languages
    const languageMap: { [key: string]: Language } = {
      // Hebrew
      'he': 'he',
      'he-il': 'he',
      'he-IL': 'he',
      'iw': 'he',
      'iw-il': 'he',
      'iw-IL': 'he',
      
      // Tigrinya (Ethiopian languages)
      'ti': 'ti',
      'ti-et': 'ti',
      'ti-ET': 'ti',
      'ti-er': 'ti',
      'ti-ER': 'ti',
      'am': 'ti', // Amharic - fallback to Tigrinya for Ethiopian languages
      'am-et': 'ti',
      'am-ET': 'ti',
      'om': 'ti', // Oromo - fallback to Tigrinya for Ethiopian languages
      'om-et': 'ti',
      'om-ET': 'ti',
      'so': 'ti', // Somali - fallback to Tigrinya for Ethiopian languages
      'so-et': 'ti',
      'so-ET': 'ti',
      
      // English (default)
      'en': 'en',
      'en-us': 'en',
      'en-US': 'en',
      'en-gb': 'en',
      'en-GB': 'en',
      'en-ca': 'en',
      'en-CA': 'en',
      'en-au': 'en',
      'en-AU': 'en'
    };

    // Check for exact match first
    if (languageMap[browserLang]) {
      return languageMap[browserLang];
    }

    // Check for language code only (without country code)
    const langCode = browserLang.split('-')[0].toLowerCase();
    if (languageMap[langCode]) {
      return languageMap[langCode];
    }

    // Default fallback to English
    return 'en';
  };

  const [language, setLanguage] = useState<Language>(detectBrowserLanguage());

  // Enhanced setLanguage function that saves to localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
  };

  // Effect to handle initial language detection
  useEffect(() => {
    const detectedLanguage = detectBrowserLanguage();
    
    // Only set if different from current (to avoid unnecessary re-renders)
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, []); // Empty dependency array - only run once on mount

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return (currentTranslations as any)[key] || key;
  };

  const isRTL = language === 'he';

  const getFontFamily = (type: 'heading' | 'body' | 'display'): string => {
    switch (language) {
      case 'he':
        switch (type) {
          case 'display': return 'Secular One, Heebo, sans-serif';
          case 'heading': return 'Heebo, Rubik, sans-serif';
          case 'body': return 'Heebo, sans-serif';
          default: return 'Heebo, sans-serif';
        }
      case 'ti':
        switch (type) {
          case 'display': return 'Noto Sans Ethiopic, Abyssinica SIL, sans-serif';
          case 'heading': return 'Noto Sans Ethiopic, sans-serif';
          case 'body': return 'Noto Sans Ethiopic, sans-serif';
          default: return 'Noto Sans Ethiopic, sans-serif';
        }
      default: // English
        switch (type) {
          case 'display': return 'Cinzel, Poppins, sans-serif';
          case 'heading': return 'Poppins, sans-serif';
          case 'body': return 'Inter, sans-serif';
          default: return 'Inter, sans-serif';
        }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL, getFontFamily }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
