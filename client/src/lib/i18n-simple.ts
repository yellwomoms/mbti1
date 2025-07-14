// Simple language system without React context
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
};

export type Language = keyof typeof languages;

export const translations = {
  ko: {
    title: 'MBTI 궁합 테스트',
    subtitle: 'AI가 실시간으로 두 사람의 연애 궁합을 분석해드립니다. 최신 MBTI 이론을 바탕으로 맞춤형 분석과 실용적인 연애 조언을 제공합니다.',
    person1: '나의 MBTI',
    person1Desc: '첫 번째 사람의 성격 유형을 선택해주세요',
    person2: '상대방의 MBTI',
    person2Desc: '두 번째 사람의 성격 유형을 선택해주세요',
    selectedType: '선택된 유형',
    none: '없음',
    analyzeButton: '궁합 분석하기',
    readyMessage: '두 MBTI의 궁합을 분석해드릴게요!',
    selectMessage: '두 MBTI 유형을 모두 선택해주세요',
    compatibilityScore: '궁합 점수',
    compatibilityType: '궁합 유형',
    analysis: '상세 분석',
    tips: '연애 꿀팁',
    shareResult: '결과 공유하기',
    tryOther: '다른 조합 보기',
    backToSelection: '선택 화면으로',
    loading: '분석 중...',
    linkCopied: '링크가 복사되었습니다!'
  },
  en: {
    title: 'MBTI Compatibility Test',
    subtitle: 'AI analyzes the romantic compatibility between two people in real-time. Get personalized analysis and practical dating advice based on the latest MBTI theory.',
    person1: 'My MBTI',
    person1Desc: 'Select the first person\'s personality type',
    person2: 'Partner\'s MBTI',
    person2Desc: 'Select the second person\'s personality type',
    selectedType: 'Selected Type',
    none: 'None',
    analyzeButton: 'Analyze Compatibility',
    readyMessage: 'Ready to analyze your MBTI compatibility!',
    selectMessage: 'Please select both MBTI types',
    compatibilityScore: 'Compatibility Score',
    compatibilityType: 'Compatibility Type',
    analysis: 'Detailed Analysis',
    tips: 'Dating Tips',
    shareResult: 'Share Result',
    tryOther: 'Try Other Combinations',
    backToSelection: 'Back to Selection',
    loading: 'Analyzing...',
    linkCopied: 'Link copied!'
  },
  ja: {
    title: 'MBTI相性テスト',
    subtitle: 'AIが二人の恋愛相性をリアルタイムで分析します。最新のMBTI理論に基づいたカスタマイズされた分析と実用的な恋愛アドバイスを提供します。',
    person1: '私のMBTI',
    person1Desc: '最初の人の性格タイプを選択してください',
    person2: '相手のMBTI',
    person2Desc: '二番目の人の性格タイプを選択してください',
    selectedType: '選択されたタイプ',
    none: 'なし',
    analyzeButton: '相性分析',
    readyMessage: 'MBTI相性を分析する準備ができました！',
    selectMessage: '両方のMBTIタイプを選択してください',
    compatibilityScore: '相性スコア',
    compatibilityType: '相性タイプ',
    analysis: '詳細分析',
    tips: '恋愛のコツ',
    shareResult: '結果を共有',
    tryOther: '他の組み合わせを試す',
    backToSelection: '選択画面に戻る',
    loading: '分析中...',
    linkCopied: 'リンクをコピーしました！'
  },
  zh: {
    title: 'MBTI配對測試',
    subtitle: 'AI實時分析兩個人的戀愛配對度。基於最新MBTI理論提供個性化分析和實用的戀愛建議。',
    person1: '我的MBTI',
    person1Desc: '選擇第一個人的性格類型',
    person2: '對方的MBTI',
    person2Desc: '選擇第二個人的性格類型',
    selectedType: '已選擇類型',
    none: '無',
    analyzeButton: '分析配對',
    readyMessage: '準備分析您的MBTI配對！',
    selectMessage: '請選擇兩個MBTI類型',
    compatibilityScore: '配對分數',
    compatibilityType: '配對類型',
    analysis: '詳細分析',
    tips: '戀愛秘訣',
    shareResult: '分享結果',
    tryOther: '嘗試其他組合',
    backToSelection: '返回選擇',
    loading: '分析中...',
    linkCopied: '鏈接已複製！'
  },
  es: {
    title: 'Test de Compatibilidad MBTI',
    subtitle: 'La IA analiza la compatibilidad romántica entre dos personas en tiempo real. Obtén análisis personalizados y consejos prácticos para citas basados en la teoría MBTI más reciente.',
    person1: 'Mi MBTI',
    person1Desc: 'Selecciona el tipo de personalidad de la primera persona',
    person2: 'MBTI de la pareja',
    person2Desc: 'Selecciona el tipo de personalidad de la segunda persona',
    selectedType: 'Tipo Seleccionado',
    none: 'Ninguno',
    analyzeButton: 'Analizar Compatibilidad',
    readyMessage: '¡Listo para analizar tu compatibilidad MBTI!',
    selectMessage: 'Por favor selecciona ambos tipos MBTI',
    compatibilityScore: 'Puntuación de Compatibilidad',
    compatibilityType: 'Tipo de Compatibilidad',
    analysis: 'Análisis Detallado',
    tips: 'Consejos de Citas',
    shareResult: 'Compartir Resultado',
    tryOther: 'Probar Otras Combinaciones',
    backToSelection: 'Volver a Selección',
    loading: 'Analizando...',
    linkCopied: '¡Enlace copiado!'
  },
  fr: {
    title: 'Test de Compatibilité MBTI',
    subtitle: 'L\'IA analyse la compatibilité amoureuse entre deux personnes en temps réel. Obtenez une analyse personnalisée et des conseils pratiques pour les rendez-vous basés sur la théorie MBTI la plus récente.',
    person1: 'Mon MBTI',
    person1Desc: 'Sélectionnez le type de personnalité de la première personne',
    person2: 'MBTI du partenaire',
    person2Desc: 'Sélectionnez le type de personnalité de la seconde personne',
    selectedType: 'Type Sélectionné',
    none: 'Aucun',
    analyzeButton: 'Analyser la Compatibilité',
    readyMessage: 'Prêt à analyser votre compatibilité MBTI !',
    selectMessage: 'Veuillez sélectionner les deux types MBTI',
    compatibilityScore: 'Score de Compatibilité',
    compatibilityType: 'Type de Compatibilité',
    analysis: 'Analyse Détaillée',
    tips: 'Conseils de Rendez-vous',
    shareResult: 'Partager le Résultat',
    tryOther: 'Essayer d\'Autres Combinaisons',
    backToSelection: 'Retour à la Sélection',
    loading: 'Analyse en cours...',
    linkCopied: 'Lien copié !'
  },
  de: {
    title: 'MBTI-Kompatibilitätstest',
    subtitle: 'KI analysiert die romantische Kompatibilität zwischen zwei Personen in Echtzeit. Erhalten Sie personalisierte Analysen und praktische Dating-Ratschläge basierend auf der neuesten MBTI-Theorie.',
    person1: 'Mein MBTI',
    person1Desc: 'Wählen Sie den Persönlichkeitstyp der ersten Person',
    person2: 'Partner MBTI',
    person2Desc: 'Wählen Sie den Persönlichkeitstyp der zweiten Person',
    selectedType: 'Ausgewählter Typ',
    none: 'Keine',
    analyzeButton: 'Kompatibilität Analysieren',
    readyMessage: 'Bereit, Ihre MBTI-Kompatibilität zu analysieren!',
    selectMessage: 'Bitte wählen Sie beide MBTI-Typen',
    compatibilityScore: 'Kompatibilitätsbewertung',
    compatibilityType: 'Kompatibilitätstyp',
    analysis: 'Detaillierte Analyse',
    tips: 'Dating-Tipps',
    shareResult: 'Ergebnis Teilen',
    tryOther: 'Andere Kombinationen Ausprobieren',
    backToSelection: 'Zurück zur Auswahl',
    loading: 'Analysiere...',
    linkCopied: 'Link kopiert!'
  },
  it: {
    title: 'Test di Compatibilità MBTI',
    subtitle: 'L\'IA analizza la compatibilità romantica tra due persone in tempo reale. Ottieni analisi personalizzate e consigli pratici per gli appuntamenti basati sulla teoria MBTI più recente.',
    person1: 'Il mio MBTI',
    person1Desc: 'Seleziona il tipo di personalità della prima persona',
    person2: 'MBTI del partner',
    person2Desc: 'Seleziona il tipo di personalità della seconda persona',
    selectedType: 'Tipo Selezionato',
    none: 'Nessuno',
    analyzeButton: 'Analizza Compatibilità',
    readyMessage: 'Pronto ad analizzare la tua compatibilità MBTI!',
    selectMessage: 'Seleziona entrambi i tipi MBTI',
    compatibilityScore: 'Punteggio di Compatibilità',
    compatibilityType: 'Tipo di Compatibilità',
    analysis: 'Analisi Dettagliata',
    tips: 'Consigli per Appuntamenti',
    shareResult: 'Condividi Risultato',
    tryOther: 'Prova Altre Combinazioni',
    backToSelection: 'Torna alla Selezione',
    loading: 'Analizzando...',
    linkCopied: 'Link copiato!'
  },
  pt: {
    title: 'Teste de Compatibilidade MBTI',
    subtitle: 'A IA analisa a compatibilidade romântica entre duas pessoas em tempo real. Obtenha análises personalizadas e conselhos práticos para encontros baseados na teoria MBTI mais recente.',
    person1: 'Meu MBTI',
    person1Desc: 'Selecione o tipo de personalidade da primeira pessoa',
    person2: 'MBTI do parceiro',
    person2Desc: 'Selecione o tipo de personalidade da segunda pessoa',
    selectedType: 'Tipo Selecionado',
    none: 'Nenhum',
    analyzeButton: 'Analisar Compatibilidade',
    readyMessage: 'Pronto para analisar sua compatibilidade MBTI!',
    selectMessage: 'Por favor, selecione ambos os tipos MBTI',
    compatibilityScore: 'Pontuação de Compatibilidade',
    compatibilityType: 'Tipo de Compatibilidade',
    analysis: 'Análise Detalhada',
    tips: 'Dicas de Encontros',
    shareResult: 'Compartilhar Resultado',
    tryOther: 'Tentar Outras Combinações',
    backToSelection: 'Voltar à Seleção',
    loading: 'Analisando...',
    linkCopied: 'Link copiado!'
  },
  ru: {
    title: 'Тест совместимости MBTI',
    subtitle: 'ИИ анализирует романтическую совместимость между двумя людьми в реальном времени. Получите персонализированный анализ и практические советы по свиданиям на основе новейшей теории MBTI.',
    person1: 'Мой MBTI',
    person1Desc: 'Выберите тип личности первого человека',
    person2: 'MBTI партнера',
    person2Desc: 'Выберите тип личности второго человека',
    selectedType: 'Выбранный тип',
    none: 'Нет',
    analyzeButton: 'Анализировать совместимость',
    readyMessage: 'Готов проанализировать вашу совместимость MBTI!',
    selectMessage: 'Пожалуйста, выберите оба типа MBTI',
    compatibilityScore: 'Оценка совместимости',
    compatibilityType: 'Тип совместимости',
    analysis: 'Подробный анализ',
    tips: 'Советы по свиданиям',
    shareResult: 'Поделиться результатом',
    tryOther: 'Попробовать другие комбинации',
    backToSelection: 'Вернуться к выбору',
    loading: 'Анализируем...',
    linkCopied: 'Ссылка скопирована!'
  }
};

// IP-based language detection mapping
const ipToLanguageMap: Record<string, Language> = {
  'KR': 'ko',
  'US': 'en',
  'GB': 'en',
  'CA': 'en',
  'AU': 'en',
  'JP': 'ja',
  'CN': 'zh',
  'TW': 'zh',
  'HK': 'zh',
  'ES': 'es',
  'MX': 'es',
  'AR': 'es',
  'FR': 'fr',
  'DE': 'de',
  'IT': 'it',
  'BR': 'pt',
  'PT': 'pt',
  'RU': 'ru'
};

// Global language state (simple without React context)
let currentLanguage: Language = 'ko';

// Language detection function
export async function detectUserLanguage(): Promise<Language> {
  try {
    // Try to get location from IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    if (countryCode && ipToLanguageMap[countryCode]) {
      return ipToLanguageMap[countryCode];
    }
  } catch (error) {
    console.log('IP detection failed, using browser language');
  }

  // Fallback to browser language
  const browserLang = navigator.language.split('-')[0] as Language;
  if (languages[browserLang]) {
    return browserLang;
  }

  return 'ko'; // Default to Korean
}

// Initialize language detection
export async function initializeLanguage(): Promise<void> {
  const savedLang = localStorage.getItem('mbti-language') as Language;
  if (savedLang && languages[savedLang]) {
    currentLanguage = savedLang;
  } else {
    const detectedLang = await detectUserLanguage();
    currentLanguage = detectedLang;
    localStorage.setItem('mbti-language', detectedLang);
  }
}

// Get current language
export function getCurrentLanguage(): Language {
  return currentLanguage;
}

// Set language
export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  localStorage.setItem('mbti-language', lang);
}

// Translation function
export function t(key: keyof typeof translations.ko): string {
  return translations[currentLanguage][key] || translations.ko[key] || key;
}

// Initialize language on module load
initializeLanguage();