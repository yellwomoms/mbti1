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
    linkCopied: '링크가 복사되었습니다!',
    // Share Messages
    shareTitle: 'MBTI 궁합 테스트',
    shareText: '우리 궁합, 진짜 잘 맞을까? 지금 바로 확인해보세요!',
    // SEO Meta Tags
    seoTitle: 'MBTI 궁합 테스트 – 우리 사이 진짜 잘 맞을까? [무료 심리 연애 테스트]',
    seoDescription: 'MBTI 유형으로 알아보는 연애 궁합 테스트! 감성 넘치는 유형별 분석과 꿀팁까지, 지금 무료로 확인해보세요.',
    seoKeywords: 'MBTI 궁합, MBTI 연애, MBTI 테스트, 성격 유형 궁합, 연애 심리 테스트, 무료 심리테스트, ENFP 궁합, INFP 연애, MBTI 유형별 궁합',
    ogTitle: 'MBTI 궁합 테스트 – 우리 사이 진짜 잘 맞을까?',
    ogDescription: '16가지 성격 유형으로 알아보는 연애 궁합! 지금 무료로 테스트하고 우리 궁합 확인해보세요.',
    twitterTitle: 'MBTI 궁합 테스트 – 우리 사이 진짜 잘 맞을까?',
    twitterDescription: '16가지 성격 유형으로 알아보는 연애 궁합! 감성 넘치는 분석과 현실 꿀팁을 지금 만나보세요.'
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
    linkCopied: 'Link copied!',
    // SEO Meta Tags
    seoTitle: 'MBTI Compatibility Test – Are We Really Right for Each Other? [Free Psychology Dating Test]',
    seoDescription: 'Discover your romantic compatibility with MBTI personality types! Get emotional analysis and practical dating tips for free.',
    seoKeywords: 'MBTI compatibility, MBTI dating, MBTI test, personality type compatibility, dating psychology test, free psychology test, ENFP compatibility, INFP dating, MBTI type compatibility',
    ogTitle: 'MBTI Compatibility Test – Are We Really Right for Each Other?',
    ogDescription: 'Discover romantic compatibility with 16 personality types! Take the free test and check your compatibility now.',
    twitterTitle: 'MBTI Compatibility Test – Are We Really Right for Each Other?',
    twitterDescription: 'Discover romantic compatibility with 16 personality types! Get emotional analysis and practical tips now.',
    // Share Messages
    shareTitle: 'MBTI Compatibility Test',
    shareText: 'Are we really compatible? Find out now with our free MBTI compatibility test!'
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
    linkCopied: 'リンクをコピーしました！',
    // SEO Meta Tags
    seoTitle: 'MBTI相性テスト – 私たちって本当に合ってる？[無料心理恋愛テスト]',
    seoDescription: 'MBTI性格タイプで恋愛相性をテスト！感情豊かな分析と実用的な恋愛アドバイスを無料で確認しましょう。',
    seoKeywords: 'MBTI相性, MBTI恋愛, MBTIテスト, 性格タイプ相性, 恋愛心理テスト, 無料心理テスト, ENFP相性, INFP恋愛, MBTIタイプ別相性',
    ogTitle: 'MBTI相性テスト – 私たちって本当に合ってる？',
    ogDescription: '16の性格タイプで恋愛相性を発見！無料でテストして相性を確認しましょう。',
    twitterTitle: 'MBTI相性テスト – 私たちって本当に合ってる？',
    twitterDescription: '16の性格タイプで恋愛相性を発見！感情豊かな分析と実用的なアドバイスを今すぐ。',
    // Share Messages
    shareTitle: 'MBTI相性テスト',
    shareText: '私たちの相性、本当に良いのかな？今すぐ無料でチェックしてみよう！'
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
    linkCopied: '鏈接已複製！',
    // SEO Meta Tags
    seoTitle: 'MBTI配對測試 – 我們真的合適嗎？[免費心理戀愛測試]',
    seoDescription: '用MBTI性格類型測試戀愛相容性！立即免費獲取情感分析和實用戀愛建議。',
    seoKeywords: 'MBTI配對, MBTI戀愛, MBTI測試, 性格類型相容性, 戀愛心理測試, 免費心理測試, ENFP配對, INFP戀愛, MBTI類型相容性',
    ogTitle: 'MBTI配對測試 – 我們真的合適嗎？',
    ogDescription: '用16種性格類型發現戀愛相容性！立即免費測試並檢查您的配對。',
    twitterTitle: 'MBTI配對測試 – 我們真的合適嗎？',
    twitterDescription: '用16種性格類型發現戀愛相容性！立即獲取情感分析和實用建議。',
    // Share Messages
    shareTitle: 'MBTI配對測試',
    shareText: '我們的配對度如何？立即免費測試看看吧！'
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
    linkCopied: '¡Enlace copiado!',
    // SEO Meta Tags
    seoTitle: 'Test de Compatibilidad MBTI – ¿Realmente Somos Compatibles? [Test Psicológico Gratuito]',
    seoDescription: '¡Descubre tu compatibilidad romántica con tipos de personalidad MBTI! Obtén análisis emocional y consejos prácticos para citas gratis.',
    seoKeywords: 'compatibilidad MBTI, citas MBTI, test MBTI, compatibilidad tipo personalidad, test psicología citas, test psicológico gratis, compatibilidad ENFP, citas INFP, compatibilidad tipos MBTI',
    ogTitle: 'Test de Compatibilidad MBTI – ¿Realmente Somos Compatibles?',
    ogDescription: '¡Descubre la compatibilidad romántica con 16 tipos de personalidad! Haz el test gratuito y verifica tu compatibilidad ahora.',
    twitterTitle: 'Test de Compatibilidad MBTI – ¿Realmente Somos Compatibles?',
    twitterDescription: '¡Descubre la compatibilidad romántica con 16 tipos de personalidad! Obtén análisis emocional y consejos prácticos ahora.',
    // Share Messages
    shareTitle: 'Test de Compatibilidad MBTI',
    shareText: '¿Nuestra compatibilidad es real? ¡Descúbrelo gratis ahora!'
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
    linkCopied: 'Lien copié !',
    // SEO Meta Tags
    seoTitle: 'Test de Compatibilité MBTI – Sommes-nous vraiment faits l\'un pour l\'autre ? [Test Psychologique Gratuit]',
    seoDescription: 'Découvrez votre compatibilité amoureuse avec les types de personnalité MBTI ! Obtenez une analyse émotionnelle et des conseils pratiques gratuitement.',
    seoKeywords: 'compatibilité MBTI, rencontres MBTI, test MBTI, compatibilité type personnalité, test psychologie rencontres, test psychologique gratuit, compatibilité ENFP, rencontres INFP, compatibilité types MBTI',
    ogTitle: 'Test de Compatibilité MBTI – Sommes-nous vraiment faits l\'un pour l\'autre ?',
    ogDescription: 'Découvrez la compatibilité amoureuse avec 16 types de personnalité ! Passez le test gratuit et vérifiez votre compatibilité maintenant.',
    twitterTitle: 'Test de Compatibilité MBTI – Sommes-nous vraiment faits l\'un pour l\'autre ?',
    twitterDescription: 'Découvrez la compatibilité amoureuse avec 16 types de personnalité ! Obtenez une analyse émotionnelle et des conseils pratiques maintenant.',
    // Share Messages
    shareTitle: 'Test de Compatibilité MBTI',
    shareText: 'Notre compatibilité est-elle réelle ? Découvrez-le gratuitement maintenant !'
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
    linkCopied: 'Link kopiert!',
    // SEO Meta Tags
    seoTitle: 'MBTI-Kompatibilitätstest – Passen wir wirklich zusammen? [Kostenloser Psychologischer Test]',
    seoDescription: 'Entdecken Sie Ihre romantische Kompatibilität mit MBTI-Persönlichkeitstypen! Erhalten Sie kostenlos emotionale Analysen und praktische Dating-Tipps.',
    seoKeywords: 'MBTI-Kompatibilität, MBTI-Dating, MBTI-Test, Persönlichkeitstyp-Kompatibilität, Dating-Psychologie-Test, kostenloser Psychologie-Test, ENFP-Kompatibilität, INFP-Dating, MBTI-Typ-Kompatibilität',
    ogTitle: 'MBTI-Kompatibilitätstest – Passen wir wirklich zusammen?',
    ogDescription: 'Entdecken Sie romantische Kompatibilität mit 16 Persönlichkeitstypen! Machen Sie den kostenlosen Test und überprüfen Sie Ihre Kompatibilität jetzt.',
    twitterTitle: 'MBTI-Kompatibilitätstest – Passen wir wirklich zusammen?',
    twitterDescription: 'Entdecken Sie romantische Kompatibilität mit 16 Persönlichkeitstypen! Erhalten Sie emotionale Analysen und praktische Tipps jetzt.',
    // Share Messages
    shareTitle: 'MBTI-Kompatibilitätstest',
    shareText: 'Passen wir wirklich zusammen? Jetzt kostenlos herausfinden!'
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
    linkCopied: 'Link copiato!',
    // SEO Meta Tags
    seoTitle: 'Test di Compatibilità MBTI – Siamo Davvero Compatibili? [Test Psicologico Gratuito]',
    seoDescription: 'Scopri la tua compatibilità romantica con i tipi di personalità MBTI! Ottieni analisi emotiva e consigli pratici per appuntamenti gratuitamente.',
    seoKeywords: 'compatibilità MBTI, appuntamenti MBTI, test MBTI, compatibilità tipo personalità, test psicologia appuntamenti, test psicologico gratuito, compatibilità ENFP, appuntamenti INFP, compatibilità tipi MBTI',
    ogTitle: 'Test di Compatibilità MBTI – Siamo Davvero Compatibili?',
    ogDescription: 'Scopri la compatibilità romantica con 16 tipi di personalità! Fai il test gratuito e verifica la tua compatibilità ora.',
    twitterTitle: 'Test di Compatibilità MBTI – Siamo Davvero Compatibili?',
    twitterDescription: 'Scopri la compatibilità romantica con 16 tipi di personalità! Ottieni analisi emotiva e consigli pratici ora.',
    // Share Messages
    shareTitle: 'Test di Compatibilità MBTI',
    shareText: 'La nostra compatibilità è reale? Scoprilo gratuitamente ora!'
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
    linkCopied: 'Link copiado!',
    // SEO Meta Tags
    seoTitle: 'Teste de Compatibilidade MBTI – Somos Realmente Compatíveis? [Teste Psicológico Gratuito]',
    seoDescription: 'Descubra sua compatibilidade romântica com tipos de personalidade MBTI! Obtenha análise emocional e conselhos práticos para encontros gratuitamente.',
    seoKeywords: 'compatibilidade MBTI, encontros MBTI, teste MBTI, compatibilidade tipo personalidade, teste psicologia encontros, teste psicológico gratuito, compatibilidade ENFP, encontros INFP, compatibilidade tipos MBTI',
    ogTitle: 'Teste de Compatibilidade MBTI – Somos Realmente Compatíveis?',
    ogDescription: 'Descubra compatibilidade romântica com 16 tipos de personalidade! Faça o teste gratuito e verifique sua compatibilidade agora.',
    twitterTitle: 'Teste de Compatibilidade MBTI – Somos Realmente Compatíveis?',
    twitterDescription: 'Descubra compatibilidade romântica com 16 tipos de personalidade! Obtenha análise emocional e conselhos práticos agora.',
    // Share Messages
    shareTitle: 'Teste de Compatibilidade MBTI',
    shareText: 'Nossa compatibilidade é real? Descubra gratuitamente agora!'
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
    linkCopied: 'Ссылка скопирована!',
    // SEO Meta Tags
    seoTitle: 'Тест совместимости MBTI – Действительно ли мы подходим друг другу? [Бесплатный психологический тест]',
    seoDescription: 'Откройте для себя романтическую совместимость с типами личности MBTI! Получите эмоциональный анализ и практические советы по свиданиям бесплатно.',
    seoKeywords: 'совместимость MBTI, свидания MBTI, тест MBTI, совместимость типов личности, тест психология свиданий, бесплатный психологический тест, совместимость ENFP, свидания INFP, совместимость типов MBTI',
    ogTitle: 'Тест совместимости MBTI – Действительно ли мы подходим друг другу?',
    ogDescription: 'Откройте для себя романтическую совместимость с 16 типами личности! Пройдите бесплатный тест и проверьте свою совместимость прямо сейчас.',
    twitterTitle: 'Тест совместимости MBTI – Действительно ли мы подходим друг другу?',
    twitterDescription: 'Откройте для себя романтическую совместимость с 16 типами личности! Получите эмоциональный анализ и практические советы сейчас.',
    // Share Messages
    shareTitle: 'Тест совместимости MBTI',
    shareText: 'Наша совместимость настоящая? Узнайте бесплатно прямо сейчас!'
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