import { useState, useEffect } from 'react';
import { detectLanguageByIP, loadLanguage, saveLanguage, getTranslation } from '@/lib/language';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('ko');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeLanguage();
  }, []);

  const initializeLanguage = async () => {
    try {
      // 1. 저장된 언어 확인
      const savedLanguage = loadLanguage();
      if (savedLanguage !== 'ko') {
        setCurrentLanguage(savedLanguage);
        setIsLoading(false);
        return;
      }

      // 2. IP 기반 언어 감지 (브라우저 언어 포함)
      const detectedLanguage = await detectLanguageByIP();
      setCurrentLanguage(detectedLanguage);
      saveLanguage(detectedLanguage);
    } catch (error) {
      console.error('언어 감지 실패:', error);
      setCurrentLanguage('ko');
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    saveLanguage(langCode);
  };

  const t = (key: string) => {
    return getTranslation(key, currentLanguage);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isLoading
  };
}