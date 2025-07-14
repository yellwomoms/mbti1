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
MBTI 전문가로서 ${type1}과 ${type2}의 실제 성격 특성을 분석해서 연애 궁합을 만들어줘.

실제 MBTI 이론 분석:
- ${type1}: 인지 기능, 성향, 연애 스타일, 소통 방식 등 구체적으로 분석
- ${type2}: 인지 기능, 성향, 연애 스타일, 소통 방식 등 구체적으로 분석
- 두 타입의 상호작용, 갈등 포인트, 시너지 효과 등 심층 분석

출력:
1. tagline: 이 조합만의 독특한 감성 문구 (15~30자)
2. summary: "연애할 때 우리는..." 시작, 실제 특성 기반 분석 (300자)
3. loveTips: 이 조합 맞춤 꿀팁 5개 (제목+설명 각 450~550자)
4. highlight: 실제 궁합 이론 기반 매력 (200~300자)

친구 말투로, 실제 MBTI 분석 바탕으로 작성.

JSON:
{
  "score": 1-100,
  "compatibilityType": "tagline",
  "title": "${type1}과 ${type2}의 궁합",
  "description": "한줄설명",
  "characteristics": "summary",
  "tips": "loveTips"
}
`;

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
      temperature: 0.5,
      max_tokens: 1000
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