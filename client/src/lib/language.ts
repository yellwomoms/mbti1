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
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export const translations = {
  ko: {
    title: 'MBTI 궁합 테스트',
    subtitle: '두 사람의 MBTI 궁합을 AI가 분석해드립니다',
    selectType: 'MBTI 타입 선택',
    analyzing: 'AI가 궁합을 분석하고 있어요!',
    characteristics: '연애할 때 이런 특징이 있어요',
    tips: '연애 꿀팁',
    compatibility: '특별한 조합',
    share: '공유하기',
    retry: '다시 시도',
    progress: '분석 진행률'
  },
  en: {
    title: 'MBTI Compatibility Test',
    subtitle: 'AI analyzes the compatibility between two MBTI types',
    selectType: 'Select MBTI Type',
    analyzing: 'AI is analyzing compatibility!',
    characteristics: 'Relationship characteristics',
    tips: 'Dating tips',
    compatibility: 'Special combination',
    share: 'Share',
    retry: 'Retry',
    progress: 'Analysis progress'
  },
  ja: {
    title: 'MBTI相性テスト',
    subtitle: 'AIが二人のMBTI相性を分析します',
    selectType: 'MBTIタイプを選択',
    analyzing: 'AIが相性を分析中です！',
    characteristics: '恋愛での特徴',
    tips: '恋愛のコツ',
    compatibility: '特別な組み合わせ',
    share: 'シェア',
    retry: '再試行',
    progress: '分析進行率'
  },
  zh: {
    title: 'MBTI配对测试',
    subtitle: 'AI分析两人的MBTI配对度',
    selectType: '选择MBTI类型',
    analyzing: 'AI正在分析配对度！',
    characteristics: '恋爱时的特征',
    tips: '恋爱秘诀',
    compatibility: '特殊组合',
    share: '分享',
    retry: '重试',
    progress: '分析进度'
  },
  es: {
    title: 'Test de Compatibilidad MBTI',
    subtitle: 'La IA analiza la compatibilidad entre dos tipos MBTI',
    selectType: 'Seleccionar Tipo MBTI',
    analyzing: '¡La IA está analizando la compatibilidad!',
    characteristics: 'Características de la relación',
    tips: 'Consejos de citas',
    compatibility: 'Combinación especial',
    share: 'Compartir',
    retry: 'Reintentar',
    progress: 'Progreso del análisis'
  },
  fr: {
    title: 'Test de Compatibilité MBTI',
    subtitle: 'L\'IA analyse la compatibilité entre deux types MBTI',
    selectType: 'Sélectionner le Type MBTI',
    analyzing: 'L\'IA analyse la compatibilité !',
    characteristics: 'Caractéristiques de la relation',
    tips: 'Conseils de rencontres',
    compatibility: 'Combinaison spéciale',
    share: 'Partager',
    retry: 'Réessayer',
    progress: 'Progression de l\'analyse'
  },
  de: {
    title: 'MBTI Kompatibilitätstest',
    subtitle: 'KI analysiert die Kompatibilität zwischen zwei MBTI-Typen',
    selectType: 'MBTI-Typ auswählen',
    analyzing: 'KI analysiert die Kompatibilität!',
    characteristics: 'Beziehungsmerkmale',
    tips: 'Dating-Tipps',
    compatibility: 'Besondere Kombination',
    share: 'Teilen',
    retry: 'Erneut versuchen',
    progress: 'Analyse-Fortschritt'
  },
  it: {
    title: 'Test di Compatibilità MBTI',
    subtitle: 'L\'IA analizza la compatibilità tra due tipi MBTI',
    selectType: 'Seleziona Tipo MBTI',
    analyzing: 'L\'IA sta analizzando la compatibilità!',
    characteristics: 'Caratteristiche della relazione',
    tips: 'Consigli per gli appuntamenti',
    compatibility: 'Combinazione speciale',
    share: 'Condividi',
    retry: 'Riprova',
    progress: 'Progresso dell\'analisi'
  },
  pt: {
    title: 'Teste de Compatibilidade MBTI',
    subtitle: 'A IA analisa a compatibilidade entre dois tipos MBTI',
    selectType: 'Selecionar Tipo MBTI',
    analyzing: 'A IA está analisando a compatibilidade!',
    characteristics: 'Características do relacionamento',
    tips: 'Dicas de namoro',
    compatibility: 'Combinação especial',
    share: 'Compartilhar',
    retry: 'Tentar novamente',
    progress: 'Progresso da análise'
  },
  ru: {
    title: 'Тест совместимости MBTI',
    subtitle: 'ИИ анализирует совместимость между двумя типами MBTI',
    selectType: 'Выбрать тип MBTI',
    analyzing: 'ИИ анализирует совместимость!',
    characteristics: 'Характеристики отношений',
    tips: 'Советы для свиданий',
    compatibility: 'Особая комбинация',
    share: 'Поделиться',
    retry: 'Попробовать снова',
    progress: 'Прогресс анализа'
  }
};

// 브라우저 언어 감지
export function detectBrowserLanguage(): string {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = browserLang.split('-')[0];
  
  // 지원하는 언어인지 확인
  const supportedCodes = SUPPORTED_LANGUAGES.map(lang => lang.code);
  return supportedCodes.includes(langCode) ? langCode : 'en';
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

// 번역 가져오기
export function getTranslation(key: string, langCode: string = 'ko'): string {
  const translation = translations[langCode as keyof typeof translations];
  return translation?.[key as keyof typeof translation] || translations.ko[key as keyof typeof translations.ko] || key;
}