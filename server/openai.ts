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
당신은 MBTI 전문가입니다. ${type1}과 ${type2}의 연애 궁합을 분석해주세요.

다음 형식으로 JSON 응답을 작성해주세요:
{
  "score": 1-100 점수,
  "compatibilityType": "궁합 유형 (예: 완벽한 조화, 보완적 관계, 성장하는 관계 등)",
  "title": "관계 제목 (예: 따뜻한 보호자와 지혜로운 조언자)",
  "description": "간단한 한 줄 설명",
  "characteristics": "연애할 때 특징 (300-350자, 자연스러운 문단 구성)",
  "tips": "연애 꿀팁 (500-550자, 구체적이고 실용적인 조언)"
}

요구사항:
1. 모든 내용은 한국어로 작성
2. 자연스럽고 따뜻한 톤으로 작성
3. 구체적이고 실용적인 조언 제공
4. MBTI 이론에 기반한 정확한 분석
5. 연애 상황에 특화된 내용
6. 각 타입의 강점과 약점을 균형있게 반영
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "당신은 MBTI 전문가이며 연애 상담 전문가입니다. 두 MBTI 타입의 궁합을 분석하여 JSON 형식으로 응답해주세요."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    // 응답 검증 및 기본값 설정
    return {
      score: Math.max(1, Math.min(100, result.score || 75)),
      compatibilityType: result.compatibilityType || "특별한 관계",
      title: result.title || `${type1}과 ${type2}의 궁합`,
      description: result.description || "서로를 이해하는 의미 있는 관계입니다!",
      characteristics: result.characteristics || "두 타입이 만나 특별한 관계를 형성합니다.",
      tips: result.tips || "서로를 이해하고 존중하는 것이 중요합니다."
    };
  } catch (error) {
    console.error("OpenAI API 오류:", error);
    throw new Error("MBTI 궁합 분석 중 오류가 발생했습니다.");
  }
}