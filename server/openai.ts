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

export async function analyzeMBTICompatibility(type1: string, type2: string): Promise<MBTIAnalysisResult> {
  const prompt = `
${type1} + ${type2} 조합의 연애 궁합 분석을 재치 있고 감성적인 톤으로 작성해주세요.

JSON 형식:
{
  "score": 1-100점,
  "compatibilityType": "궁합 유형",
  "title": "관계 제목",
  "description": "15~30자 감성 문구 (예: 귀여운 댕댕이 커플)",
  "characteristics": "'연애할 때 우리는' 시작으로 300자 감성 요약",
  "tips": "친구처럼 따뜻한 연애 꿀팁 450자"
}

요구사항: 딱딱한 분석보다 공감되고 재치 있는 말투로 작성`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "당신은 연애 궁합 콘텐츠 전문 작가입니다. 감성적이고 재치 있는 분석을 정확한 JSON 형식으로 응답해주세요."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
      max_tokens: 800
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    // 응답 검증 및 기본값 설정
    return {
      score: Math.max(1, Math.min(100, result.score || 75)),
      compatibilityType: String(result.compatibilityType || "특별한 관계"),
      title: String(result.title || `${type1}과 ${type2}의 궁합`),
      description: String(result.description || "서로를 이해하는 의미 있는 관계입니다!"),
      characteristics: String(result.characteristics || "두 타입이 만나 특별한 관계를 형성합니다."),
      tips: String(result.tips || "서로를 이해하고 존중하는 것이 중요합니다.")
    };
  } catch (error) {
    console.error("OpenAI API 오류:", error);
    throw new Error("MBTI 궁합 분석 중 오류가 발생했습니다.");
  }
}