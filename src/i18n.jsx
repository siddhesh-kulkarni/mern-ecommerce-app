'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const availableLanguages = ['en', 'hi', 'mr'];

// Function to detect and return only supported language
function getSupportedLanguage() {
  if (typeof window === 'undefined') return 'en';

  // Check localStorage first
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang && availableLanguages.includes(storedLang)) {
    return storedLang;
  }

  // Get browser language and convert to base language
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const baseLang = browserLang.split('-')[0];

  // Return supported language or default to 'en'
  return availableLanguages.includes(baseLang) ? baseLang : 'en';
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    // Explicitly set the language - no automatic detection
    lng: getSupportedLanguage(),
    fallbackLng: 'en',
    supportedLngs: availableLanguages,
    debug: false,

    // Disable language detection completely
    detection: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Only load base languages
    load: 'languageOnly',

    // Prevent loading of non-existing resources
    saveMissing: false,
    missingKeyHandler: false,

    // Only preload supported languages
    preload: availableLanguages,
  });

// Function to change language manually
export const changeLanguage = (lng) => {
  if (availableLanguages.includes(lng)) {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lng);
    }
  }
};

export default i18n;