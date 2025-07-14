// Internationalization support for 10 languages
export const languages = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  ko: {
    appTitle: 'MBTI 궁합 테스트',
    selectTypes: 'MBTI 타입을 선택하세요',
    type1: '첫 번째 타입',
    type2: '두 번째 타입',
    analyzeCompatibility: '궁합 분석하기',
    compatibility: '궁합 분석',
    score: '점수',
    characteristics: '특징',
    tips: '연애 꿀팁',
    specialCombination: '특별한 조합',
    loading: '분석 중...',
    error: '오류가 발생했습니다',
    backToSelection: '다시 선택하기',
    copyLink: '링크 복사',
    share: '공유하기',
    linkCopied: '링크가 복사되었습니다!'
  },
  en: {
    appTitle: 'MBTI Compatibility Test',
    selectTypes: 'Select MBTI Types',
    type1: 'First Type',
    type2: 'Second Type',
    analyzeCompatibility: 'Analyze Compatibility',
    compatibility: 'Compatibility Analysis',
    score: 'Score',
    characteristics: 'Characteristics',
    tips: 'Dating Tips',
    specialCombination: 'Special Combination',
    loading: 'Analyzing...',
    error: 'An error occurred',
    backToSelection: 'Back to Selection',
    copyLink: 'Copy Link',
    share: 'Share',
    linkCopied: 'Link copied!'
  },
  ja: {
    appTitle: 'MBTI相性テスト',
    selectTypes: 'MBTIタイプを選択',
    type1: '1つ目のタイプ',
    type2: '2つ目のタイプ',
    analyzeCompatibility: '相性分析',
    compatibility: '相性分析',
    score: 'スコア',
    characteristics: '特徴',
    tips: '恋愛のコツ',
    specialCombination: '特別な組み合わせ',
    loading: '分析中...',
    error: 'エラーが発生しました',
    backToSelection: '選択に戻る',
    copyLink: 'リンクをコピー',
    share: 'シェア',
    linkCopied: 'リンクがコピーされました！'
  },
  zh: {
    appTitle: 'MBTI配對測試',
    selectTypes: '選擇MBTI類型',
    type1: '第一種類型',
    type2: '第二種類型',
    analyzeCompatibility: '分析配對',
    compatibility: '配對分析',
    score: '分數',
    characteristics: '特徵',
    tips: '戀愛秘訣',
    specialCombination: '特殊組合',
    loading: '分析中...',
    error: '發生錯誤',
    backToSelection: '返回選擇',
    copyLink: '複製連結',
    share: '分享',
    linkCopied: '連結已複製！'
  },
  es: {
    appTitle: 'Test de Compatibilidad MBTI',
    selectTypes: 'Seleccionar Tipos MBTI',
    type1: 'Primer Tipo',
    type2: 'Segundo Tipo',
    analyzeCompatibility: 'Analizar Compatibilidad',
    compatibility: 'Análisis de Compatibilidad',
    score: 'Puntuación',
    characteristics: 'Características',
    tips: 'Consejos de Amor',
    specialCombination: 'Combinación Especial',
    loading: 'Analizando...',
    error: 'Ocurrió un error',
    backToSelection: 'Volver a Selección',
    copyLink: 'Copiar Enlace',
    share: 'Compartir',
    linkCopied: '¡Enlace copiado!'
  },
  fr: {
    appTitle: 'Test de Compatibilité MBTI',
    selectTypes: 'Sélectionner les Types MBTI',
    type1: 'Premier Type',
    type2: 'Deuxième Type',
    analyzeCompatibility: 'Analyser la Compatibilité',
    compatibility: 'Analyse de Compatibilité',
    score: 'Score',
    characteristics: 'Caractéristiques',
    tips: 'Conseils d\'Amour',
    specialCombination: 'Combinaison Spéciale',
    loading: 'Analyse en cours...',
    error: 'Une erreur s\'est produite',
    backToSelection: 'Retour à la Sélection',
    copyLink: 'Copier le Lien',
    share: 'Partager',
    linkCopied: 'Lien copié!'
  },
  de: {
    appTitle: 'MBTI Kompatibilitätstest',
    selectTypes: 'MBTI-Typen auswählen',
    type1: 'Erster Typ',
    type2: 'Zweiter Typ',
    analyzeCompatibility: 'Kompatibilität analysieren',
    compatibility: 'Kompatibilitätsanalyse',
    score: 'Bewertung',
    characteristics: 'Eigenschaften',
    tips: 'Liebestipps',
    specialCombination: 'Besondere Kombination',
    loading: 'Analysiere...',
    error: 'Ein Fehler ist aufgetreten',
    backToSelection: 'Zurück zur Auswahl',
    copyLink: 'Link kopieren',
    share: 'Teilen',
    linkCopied: 'Link kopiert!'
  },
  it: {
    appTitle: 'Test di Compatibilità MBTI',
    selectTypes: 'Seleziona Tipi MBTI',
    type1: 'Primo Tipo',
    type2: 'Secondo Tipo',
    analyzeCompatibility: 'Analizza Compatibilità',
    compatibility: 'Analisi di Compatibilità',
    score: 'Punteggio',
    characteristics: 'Caratteristiche',
    tips: 'Consigli d\'Amore',
    specialCombination: 'Combinazione Speciale',
    loading: 'Analizzando...',
    error: 'Si è verificato un errore',
    backToSelection: 'Torna alla Selezione',
    copyLink: 'Copia Link',
    share: 'Condividi',
    linkCopied: 'Link copiato!'
  },
  pt: {
    appTitle: 'Teste de Compatibilidade MBTI',
    selectTypes: 'Selecionar Tipos MBTI',
    type1: 'Primeiro Tipo',
    type2: 'Segundo Tipo',
    analyzeCompatibility: 'Analisar Compatibilidade',
    compatibility: 'Análise de Compatibilidade',
    score: 'Pontuação',
    characteristics: 'Características',
    tips: 'Dicas de Amor',
    specialCombination: 'Combinação Especial',
    loading: 'Analisando...',
    error: 'Ocorreu um erro',
    backToSelection: 'Voltar à Seleção',
    copyLink: 'Copiar Link',
    share: 'Compartilhar',
    linkCopied: 'Link copiado!'
  },
  ru: {
    appTitle: 'Тест совместимости MBTI',
    selectTypes: 'Выберите типы MBTI',
    type1: 'Первый тип',
    type2: 'Второй тип',
    analyzeCompatibility: 'Анализ совместимости',
    compatibility: 'Анализ совместимости',
    score: 'Оценка',
    characteristics: 'Характеристики',
    tips: 'Советы по любви',
    specialCombination: 'Особая комбинация',
    loading: 'Анализируется...',
    error: 'Произошла ошибка',
    backToSelection: 'Вернуться к выбору',
    copyLink: 'Скопировать ссылку',
    share: 'Поделиться',
    linkCopied: 'Ссылка скопирована!'
  }
};

// Language context
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.ko) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  setLanguage: () => {},
  t: () => ''
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLang = localStorage.getItem('mbti-language') as Language;
    if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (languages[browserLang]) {
        setLanguage(browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('mbti-language', lang);
  };

  const t = (key: keyof typeof translations.ko) => {
    return translations[language][key] || translations.ko[key] || key;
  };

  const contextValue = { language, setLanguage: changeLanguage, t };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}