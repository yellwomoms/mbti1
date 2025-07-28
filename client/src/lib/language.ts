// 다국어 지원 시스템
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];



// 브라우저 언어 감지
export function detectBrowserLanguage(): string {
  const browserLang = navigator.language || navigator.languages?.[0] || 'ko';
  const langCode = browserLang.split('-')[0];
  
  // 지원하는 언어인지 확인
  const supportedCodes = SUPPORTED_LANGUAGES.map(lang => lang.code);
  return supportedCodes.includes(langCode) ? langCode : 'ko';
}

// IP 기반 언어 감지 (향후 구현)
export async function detectLanguageByIP(): Promise<string> {
  try {
    // 실제 구현시 IP 기반 지역 감지 API 사용
    // const response = await fetch('https://ipapi.co/json/');
    // const data = await response.json();
    // return mapCountryToLanguage(data.country_code);
    
    // 현재는 브라우저 언어 사용
    return detectBrowserLanguage();
  } catch (error) {
    return detectBrowserLanguage();
  }
}

// 언어 설정 저장/불러오기
export function saveLanguage(langCode: string): void {
  localStorage.setItem('mbti-app-language', langCode);
}

export function loadLanguage(): string {
  return localStorage.getItem('mbti-app-language') || detectBrowserLanguage();
}

// 번역 불러오기 (public 폴더에서)
export async function loadTranslations(langCode: string): Promise<Record<string, string>> {
  try {
    const response = await fetch(`/${langCode}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translations for ${langCode}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`Failed to load ${langCode} translations, falling back to Korean`, error);
    // 기본 언어로 fallback
    if (langCode !== 'ko') {
      const fallbackResponse = await fetch('/ko.json');
      return await fallbackResponse.json();
    }
    throw error;
  }
}

// 번역 캐시
const translationCache: Record<string, Record<string, string>> = {};

// 번역 가져오기
export async function getTranslation(key: string, langCode: string = 'ko'): Promise<string> {
  try {
    // 캐시 확인
    if (!translationCache[langCode]) {
      translationCache[langCode] = await loadTranslations(langCode);
    }
    
    const translation = translationCache[langCode][key];
    if (translation) {
      return translation;
    }
    
    // 한국어로 fallback
    if (langCode !== 'ko') {
      if (!translationCache['ko']) {
        translationCache['ko'] = await loadTranslations('ko');
      }
      return translationCache['ko'][key] || key;
    }
    
    return key;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
}