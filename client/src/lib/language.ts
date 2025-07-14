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
    subtitle: 'AI가 실시간으로 두 사람의 연애 궁합을 분석해드립니다. 최신 MBTI 이론을 바탕으로 맞춤형 분석과 실용적인 연애 조언을 제공합니다.',
    selectType: 'MBTI 타입 선택',
    analyzing: 'AI가 궁합을 분석하고 있어요!',
    characteristics: '연애할 때 이런 특징이 있어요',
    tips: '연애 꿀팁',
    compatibility: '특별한 조합',
    share: '공유하기',
    retry: '다시 시도',
    progress: '분석 진행률',
    person1: '나의 MBTI',
    person2: '상대방 MBTI',
    person1Desc: '첫 번째 사람의 성격 유형을 선택해주세요',
    person2Desc: '두 번째 사람의 성격 유형을 선택해주세요',
    selected: '선택된 유형',
    none: '없음',
    analyzeButton: '궁합 분석하기',
    backButton: '다시 선택하기',
    metaTitle: 'MBTI 궁합 테스트 – 우리 사이 진짜 잘 맞을까? [무료 심리 연애 테스트]',
    metaDescription: 'MBTI 유형으로 알아보는 연애 궁합 테스트! 감성 넘치는 유형별 분석과 꿀팁까지, 지금 무료로 확인해보세요.'
  },
  en: {
    title: 'MBTI Compatibility Test',
    subtitle: 'AI analyzes the romantic compatibility between two people in real-time. Get personalized analysis and practical dating advice based on the latest MBTI theory.',
    selectType: 'Select MBTI Type',
    analyzing: 'AI is analyzing compatibility!',
    characteristics: 'Relationship characteristics',
    tips: 'Dating tips',
    compatibility: 'Special combination',
    share: 'Share',
    retry: 'Retry',
    progress: 'Analysis progress',
    person1: 'Your MBTI',
    person2: 'Partner\'s MBTI',
    person1Desc: 'Please select the first person\'s personality type',
    person2Desc: 'Please select the second person\'s personality type',
    selected: 'Selected type',
    none: 'None',
    analyzeButton: 'Analyze Compatibility',
    backButton: 'Select Again',
    metaTitle: 'MBTI Compatibility Test – Are We Really Compatible? [Free Psychological Dating Test]',
    metaDescription: 'Discover your romantic compatibility through MBTI personality types! Get emotional analysis and practical tips for free.'
  },
  ja: {
    title: 'MBTI相性テスト',
    subtitle: 'AIがリアルタイムで二人の恋愛相性を分析します。最新のMBTI理論に基づいたカスタマイズ分析と実用的な恋愛アドバイスを提供します。',
    selectType: 'MBTIタイプを選択',
    analyzing: 'AIが相性を分析中です！',
    characteristics: '恋愛での特徴',
    tips: '恋愛のコツ',
    compatibility: '特別な組み合わせ',
    share: 'シェア',
    retry: '再試行',
    progress: '分析進行率',
    person1: 'あなたのMBTI',
    person2: '相手のMBTI',
    person1Desc: '一人目の性格タイプを選択してください',
    person2Desc: '二人目の性格タイプを選択してください',
    selected: '選択されたタイプ',
    none: 'なし',
    analyzeButton: '相性を分析する',
    backButton: '再選択',
    metaTitle: 'MBTI相性テスト – 私たちって本当に相性いいの？[無料心理恋愛テスト]',
    metaDescription: 'MBTIタイプで分かる恋愛相性テスト！感情豊かなタイプ別分析とコツまで、今すぐ無料で確認。'
  },
  zh: {
    title: 'MBTI配对测试',
    subtitle: 'AI实时分析两人的恋爱配对度。基于最新MBTI理论提供个性化分析和实用的恋爱建议。',
    selectType: '选择MBTI类型',
    analyzing: 'AI正在分析配对度！',
    characteristics: '恋爱时的特征',
    tips: '恋爱秘诀',
    compatibility: '特殊组合',
    share: '分享',
    retry: '重试',
    progress: '分析进度',
    person1: '你的MBTI',
    person2: '对方MBTI',
    person1Desc: '请选择第一个人的性格类型',
    person2Desc: '请选择第二个人的性格类型',
    selected: '已选择类型',
    none: '无',
    analyzeButton: '分析配对度',
    backButton: '重新选择',
    metaTitle: 'MBTI配对测试 – 我们真的合适吗？[免费心理恋爱测试]',
    metaDescription: '通过MBTI类型了解恋爱配对度！感性的类型分析和恋爱秘诀，现在免费测试。'
  },
  es: {
    title: 'Test de Compatibilidad MBTI',
    subtitle: 'La IA analiza en tiempo real la compatibilidad romántica entre dos personas. Obtén análisis personalizado y consejos prácticos de citas basados en la última teoría MBTI.',
    selectType: 'Seleccionar Tipo MBTI',
    analyzing: '¡La IA está analizando la compatibilidad!',
    characteristics: 'Características de la relación',
    tips: 'Consejos de citas',
    compatibility: 'Combinación especial',
    share: 'Compartir',
    retry: 'Reintentar',
    progress: 'Progreso del análisis',
    person1: 'Tu MBTI',
    person2: 'MBTI de tu pareja',
    person1Desc: 'Por favor selecciona el tipo de personalidad de la primera persona',
    person2Desc: 'Por favor selecciona el tipo de personalidad de la segunda persona',
    selected: 'Tipo seleccionado',
    none: 'Ninguno',
    analyzeButton: 'Analizar Compatibilidad',
    backButton: 'Seleccionar de Nuevo',
    metaTitle: 'Test de Compatibilidad MBTI – ¿Somos Realmente Compatibles? [Test Psicológico de Citas Gratis]',
    metaDescription: '¡Descubre tu compatibilidad romántica a través de los tipos de personalidad MBTI! Obtén análisis emocional y consejos prácticos gratis.'
  },
  fr: {
    title: 'Test de Compatibilité MBTI',
    subtitle: 'L\'IA analyse en temps réel la compatibilité romantique entre deux personnes. Obtenez une analyse personnalisée et des conseils pratiques de rencontres basés sur la dernière théorie MBTI.',
    selectType: 'Sélectionner le Type MBTI',
    analyzing: 'L\'IA analyse la compatibilité !',
    characteristics: 'Caractéristiques de la relation',
    tips: 'Conseils de rencontres',
    compatibility: 'Combinaison spéciale',
    share: 'Partager',
    retry: 'Réessayer',
    progress: 'Progression de l\'analyse',
    person1: 'Votre MBTI',
    person2: 'MBTI du partenaire',
    person1Desc: 'Veuillez sélectionner le type de personnalité de la première personne',
    person2Desc: 'Veuillez sélectionner le type de personnalité de la deuxième personne',
    selected: 'Type sélectionné',
    none: 'Aucun',
    analyzeButton: 'Analyser la Compatibilité',
    backButton: 'Sélectionner à Nouveau',
    metaTitle: 'Test de Compatibilité MBTI – Sommes-nous Vraiment Compatibles ? [Test Psychologique de Rencontres Gratuit]',
    metaDescription: 'Découvrez votre compatibilité romantique grâce aux types de personnalité MBTI ! Obtenez une analyse émotionnelle et des conseils pratiques gratuitement.'
  },
  de: {
    title: 'MBTI Kompatibilitätstest',
    subtitle: 'KI analysiert in Echtzeit die romantische Kompatibilität zwischen zwei Menschen. Erhalten Sie personalisierte Analyse und praktische Dating-Tipps basierend auf der neuesten MBTI-Theorie.',
    selectType: 'MBTI-Typ auswählen',
    analyzing: 'KI analysiert die Kompatibilität!',
    characteristics: 'Beziehungsmerkmale',
    tips: 'Dating-Tipps',
    compatibility: 'Besondere Kombination',
    share: 'Teilen',
    retry: 'Erneut versuchen',
    progress: 'Analyse-Fortschritt',
    person1: 'Ihr MBTI',
    person2: 'Partner MBTI',
    person1Desc: 'Bitte wählen Sie den Persönlichkeitstyp der ersten Person',
    person2Desc: 'Bitte wählen Sie den Persönlichkeitstyp der zweiten Person',
    selected: 'Ausgewählter Typ',
    none: 'Keiner',
    analyzeButton: 'Kompatibilität Analysieren',
    backButton: 'Erneut Auswählen',
    metaTitle: 'MBTI Kompatibilitätstest – Sind wir wirklich kompatibel? [Kostenloser Psychologischer Dating-Test]',
    metaDescription: 'Entdecken Sie Ihre romantische Kompatibilität durch MBTI-Persönlichkeitstypen! Erhalten Sie emotionale Analyse und praktische Tipps kostenlos.'
  },
  it: {
    title: 'Test di Compatibilità MBTI',
    subtitle: 'L\'IA analizza in tempo reale la compatibilità romantica tra due persone. Ottieni analisi personalizzata e consigli pratici per appuntamenti basati sulla teoria MBTI più recente.',
    selectType: 'Seleziona Tipo MBTI',
    analyzing: 'L\'IA sta analizzando la compatibilità!',
    characteristics: 'Caratteristiche della relazione',
    tips: 'Consigli per gli appuntamenti',
    compatibility: 'Combinazione speciale',
    share: 'Condividi',
    retry: 'Riprova',
    progress: 'Progresso dell\'analisi',
    person1: 'Il tuo MBTI',
    person2: 'MBTI del partner',
    person1Desc: 'Per favore seleziona il tipo di personalità della prima persona',
    person2Desc: 'Per favore seleziona il tipo di personalità della seconda persona',
    selected: 'Tipo selezionato',
    none: 'Nessuno',
    analyzeButton: 'Analizza Compatibilità',
    backButton: 'Seleziona di Nuovo',
    metaTitle: 'Test di Compatibilità MBTI – Siamo Davvero Compatibili? [Test Psicologico di Dating Gratuito]',
    metaDescription: 'Scopri la tua compatibilità romantica attraverso i tipi di personalità MBTI! Ottieni analisi emotiva e consigli pratici gratuitamente.'
  },
  pt: {
    title: 'Teste de Compatibilidade MBTI',
    subtitle: 'A IA analisa em tempo real a compatibilidade romântica entre duas pessoas. Obtenha análise personalizada e conselhos práticos de namoro baseados na teoria MBTI mais recente.',
    selectType: 'Selecionar Tipo MBTI',
    analyzing: 'A IA está analisando a compatibilidade!',
    characteristics: 'Características do relacionamento',
    tips: 'Dicas de namoro',
    compatibility: 'Combinação especial',
    share: 'Compartilhar',
    retry: 'Tentar novamente',
    progress: 'Progresso da análise',
    person1: 'Seu MBTI',
    person2: 'MBTI do parceiro',
    person1Desc: 'Por favor selecione o tipo de personalidade da primeira pessoa',
    person2Desc: 'Por favor selecione o tipo de personalidade da segunda pessoa',
    selected: 'Tipo selecionado',
    none: 'Nenhum',
    analyzeButton: 'Analisar Compatibilidade',
    backButton: 'Selecionar Novamente',
    metaTitle: 'Teste de Compatibilidade MBTI – Somos Realmente Compatíveis? [Teste Psicológico de Namoro Gratuito]',
    metaDescription: 'Descubra sua compatibilidade romântica através dos tipos de personalidade MBTI! Obtenha análise emocional e dicas práticas gratuitamente.'
  },
  ru: {
    title: 'Тест совместимости MBTI',
    subtitle: 'ИИ анализирует в реальном времени романтическую совместимость между двумя людьми. Получите персонализированный анализ и практические советы для свиданий на основе новейшей теории MBTI.',
    selectType: 'Выбрать тип MBTI',
    analyzing: 'ИИ анализирует совместимость!',
    characteristics: 'Характеристики отношений',
    tips: 'Советы для свиданий',
    compatibility: 'Особая комбинация',
    share: 'Поделиться',
    retry: 'Попробовать снова',
    progress: 'Прогресс анализа',
    person1: 'Ваш MBTI',
    person2: 'MBTI партнера',
    person1Desc: 'Пожалуйста, выберите тип личности первого человека',
    person2Desc: 'Пожалуйста, выберите тип личности второго человека',
    selected: 'Выбранный тип',
    none: 'Нет',
    analyzeButton: 'Анализировать Совместимость',
    backButton: 'Выбрать Снова',
    metaTitle: 'Тест совместимости MBTI – Действительно ли мы совместимы? [Бесплатный психологический тест знакомств]',
    metaDescription: 'Откройте для себя романтическую совместимость через типы личности MBTI! Получите эмоциональный анализ и практические советы бесплатно.'
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