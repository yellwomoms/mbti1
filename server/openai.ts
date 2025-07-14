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

  const prompt = `${type1}와 ${type2} MBTI 궁합을 간단하고 친근하게 분석해주세요.

JSON으로 응답:
{
  "score": 점수(1-100),
  "compatibilityType": "한 줄 표현",
  "title": "${type1}과 ${type2}의 궁합", 
  "description": "한 줄 요약",
  "characteristics": "연애할 때 우리는... 으로 시작하는 문단 (250자)",
  "tips": "꿀팁 3가지. 번호 앞에 줄바꿈 넣기. 각 150자."
}`;

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
      temperature: 0.3,
      max_tokens: 800
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