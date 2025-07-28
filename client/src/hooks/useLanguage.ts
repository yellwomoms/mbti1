import { useState, useEffect } from 'react';
import { detectLanguageByIP, loadLanguage, saveLanguage, getTranslation } from '@/lib/language';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('ko');
  const [isLoading, setIsLoading] = useState(true);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    initializeLanguage();
  }, []);

  const initializeLanguage = async () => {
    try {
      // 1. 저장된 언어 확인
      const savedLanguage = loadLanguage();
      if (savedLanguage !== 'ko') {
        await loadTranslationsForLanguage(savedLanguage);
        setCurrentLanguage(savedLanguage);
        setIsLoading(false);
        return;
      }

      // 2. IP 기반 언어 감지 (브라우저 언어 포함)
      const detectedLanguage = await detectLanguageByIP();
      await loadTranslationsForLanguage(detectedLanguage);
      setCurrentLanguage(detectedLanguage);
      saveLanguage(detectedLanguage);
    } catch (error) {
      console.error('언어 감지 실패:', error);
      await loadTranslationsForLanguage('ko');
      setCurrentLanguage('ko');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTranslationsForLanguage = async (langCode: string) => {
    try {
      const response = await fetch(`/${langCode}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${langCode}`);
      }
      const newTranslations = await response.json();
      setTranslations(newTranslations);
    } catch (error) {
      console.warn(`Failed to load ${langCode} translations, falling back to Korean`, error);
      if (langCode !== 'ko') {
        const fallbackResponse = await fetch('/ko.json');
        const fallbackTranslations = await fallbackResponse.json();
        setTranslations(fallbackTranslations);
      }
    }
  };

  const changeLanguage = async (langCode: string) => {
    setCurrentLanguage(langCode);
    saveLanguage(langCode);
    await loadTranslationsForLanguage(langCode);
  };

  const t = (key: string) => {
    return translations[key] || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isLoading
  };
}