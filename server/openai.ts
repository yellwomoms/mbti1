import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface MBTIAnalysisResult {
  score: number;
  compatibilityType: string;
  title: string;
  description: string;
  characteristics: string;
  tips: string;
}

export async function analyzeMBTICompatibility(type1: string, type2: string, language: string = 'ko'): Promise<MBTIAnalysisResult> {
  // Language-specific prompts
  const languagePrompts = {
    ko: `너는 연애 궁합 콘텐츠를 만드는 작가야. 너무 분석적이고 딱딱한 말투 말고, 친구한테 소개해주는 듯한 부드럽고 재밌는 말투로 써 줘. 위트도 살짝, 감성도 살짝, 현실 공감도 꼭 들어가면 좋아.`,
    en: `You are a dating compatibility content writer. Write in a friendly, casual tone as if introducing friends to each other. Include wit, emotion, and relatable real-life scenarios.`,
    ja: `あなたは恋愛相性コンテンツのライターです。友達に紹介するような親しみやすく楽しい口調で書いてください。機知に富み、感情的で、現実的な共感を含めてください。`,
    zh: `你是一个恋爱配对内容作家。用友好、轻松的语调写作，就像向朋友介绍一样。包含机智、情感和现实生活中的共鸣场景。`,
    es: `Eres un escritor de contenido de compatibilidad amorosa. Escribe en un tono amigable y casual como si presentaras amigos. Incluye ingenio, emoción y escenarios realistas identificables.`,
    fr: `Tu es un rédacteur de contenu de compatibilité amoureuse. Écris d'un ton amical et décontracté comme si tu présentais des amis. Inclus de l'esprit, de l'émotion et des scénarios réalistes auxquels on peut s'identifier.`,
    de: `Du bist ein Autor für Dating-Kompatibilitätsinhalte. Schreibe in einem freundlichen, lockeren Ton, als würdest du Freunde vorstellen. Füge Witz, Emotion und nachvollziehbare realistische Szenarien hinzu.`,
    it: `Sei uno scrittore di contenuti sulla compatibilità amorosa. Scrivi in un tono amichevole e casual come se stessi presentando degli amici. Includi spirito, emozione e scenari realistici riconoscibili.`,
    pt: `Você é um escritor de conteúdo de compatibilidade amorosa. Escreva em um tom amigável e casual como se estivesse apresentando amigos. Inclua inteligência, emoção e cenários realistas identificáveis.`,
    ru: `Вы автор контента о совместимости в отношениях. Пишите дружелюбным, непринужденным тоном, как будто представляете друзей. Включите остроумие, эмоции и узнаваемые реалистичные сценарии.`
  };

  const prompt = `
${languagePrompts[language as keyof typeof languagePrompts] || languagePrompts.ko}

---

🎯 Create compatibility analysis for this MBTI combination:

MBTI1: ${type1}  
MBTI2: ${type2}

📌 출력 형식 (이대로 써줘):

tagline: 두 사람을 대표하는 감성 문구 한 줄 (15~40자, 예: "눈치만렙 애인과 노빠꾸 애인")

summary:  
"연애할 때 우리는..."으로 시작하는 감성 중심 요약 문단 (300~350자)  
→ 두 사람의 연애 분위기, 케미, 감정 흐름 등을 재밌고 자연스럽게 묘사해 줘.  
→ 격식 없이, 공감되게, 친구한테 얘기해주듯 써줘.
→ 번호 매기기 없이 자연스러운 문단으로 작성  

loveTips:  
두 사람을 위한 연애 꿀팁 5가지  
각 항목은 제목 + 설명 형식으로 써줘.  
→ 제목은 위트 있게, 설명은 현실 연애처럼 구체적으로  
→ 각 설명은 200~300자로 간결하게, 말투는 친근하게!
→ 번호는 "1. ", "2. ", "3. " 형식으로 앞에 반드시 줄바꿈을 넣어서 써줘
→ 예시 형식: "텍스트 내용\n\n1. 첫 번째 항목\n\n2. 두 번째 항목\n\n3. 세 번째 항목" 
→ 절대 중요: 번호가 문장 중간이나 끝에 나오면 안 됨! 반드시 새로운 줄에서 시작!
→ 각 번호 항목 앞에는 반드시 빈 줄이 2개 있어야 함 (\n\n)
→ 잘못된 예: "...시간이 필요해요 5. 감성의..." (X)
→ 올바른 예: "...시간이 필요해요\n\n5. 감성의..." (O)

highlight:  
이 MBTI 조합만의 매력을 감성적으로 요약한 문단 (150~200자)  
→ 함께 있을 때 생기는 특별한 분위기나 케미를 감탄스럽게 표현해 줘.
→ 번호 매기기 없이 자연스러운 문단으로 작성

---

✅ 중요 스타일 조건
- 딱딱한 성격 설명 X ❌
- 감정선이 보이고 상황이 그려져야 함 ✅
- "책임감이 강하다" 대신 "애인의 일엔 눈치 빠르게 반응하는 스타일이에요"처럼 말해줘 ✅
- "이해가 중요하다" 대신 "서로 입장 바꿔 생각해보는 연습, 의외로 효과 있어요" 같이 말해줘 ✅
- 다정하지만 과하게 달콤하지는 않게, 살짝 현실감 있는 사랑 얘기 부탁해 ✅

---

꼭 이 형식과 스타일로, ${type1}과 ${type2} 조합에 맞는 궁합 결과를 작성해줘.

JSON 형식으로 응답해주세요:
{
  "score": 점수(1-100),
  "compatibilityType": "tagline 내용",
  "title": "${type1}과 ${type2}의 궁합",
  "description": "한 줄 설명",
  "characteristics": "summary 내용",
  "tips": "loveTips 내용"
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system",
          content: "당신은 한국의 MBTI 연애 궁합 전문가입니다. 친근하고 위트있는 문체로 연애 분석을 해주세요. 번호 매기기 (1., 2., 3. 등) 앞에는 반드시 줄바꿈을 넣어주세요."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1200,
      timeout: 4000
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      score: result.score || 75,
      compatibilityType: result.compatibilityType || "특별한 관계",
      title: result.title || `${type1}과 ${type2}의 궁합`,
      description: result.description || "두 타입의 독특한 매력",
      characteristics: result.characteristics || "연애할 때 우리는 서로 다른 매력을 가진 두 사람입니다.",
      tips: result.tips || "서로의 차이를 존중하고 이해하려고 노력하세요."
    };
  } catch (error) {
    console.error('OpenAI API 오류:', error);
    throw new Error('AI 분석 실패');
  }
}