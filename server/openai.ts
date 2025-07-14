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
${type1}+${type2} 연애궁합 분석:

tagline: 감성문구 (15-30자)
summary: "연애할 때 우리는..." 시작 (550-600자)
loveTips: 꿀팁 5개 (제목+설명 각 550-600자)
highlight: 특별매력 (200-300자)

JSON 형식 응답:
{
  "score": 75,
  "compatibilityType": "tagline 내용",
  "title": "${type1}과 ${type2}의 궁합",
  "description": "한줄설명",
  "characteristics": "summary 내용",
  "tips": "loveTips 내용"
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 600
    });

    const content = response.choices[0].message.content || '{}';
    let result;
    try {
      // JSON 블록 추출 (```json 태그 제거)
      let jsonStr = content;
      const jsonMatch = content.match(/```json\s*(\{[\s\S]*?\})\s*```/);
      if (jsonMatch) {
        jsonStr = jsonMatch[1];
      } else {
        // 첫 번째 { 부터 마지막 } 까지 추출
        const startIdx = content.indexOf('{');
        const endIdx = content.lastIndexOf('}');
        if (startIdx !== -1 && endIdx !== -1) {
          jsonStr = content.substring(startIdx, endIdx + 1);
        }
      }
      
      result = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error("JSON 파싱 오류:", parseError);
      console.error("원본 내용:", content);
      // 기본값 사용
      result = {
        score: 75,
        compatibilityType: "특별한 관계",
        title: `${type1}과 ${type2}의 궁합`,
        description: "서로를 이해하는 의미 있는 관계입니다!",
        characteristics: "연애할 때 우리는 서로의 다른 점을 이해하며 성장합니다.",
        tips: "서로를 이해하고 존중하는 것이 중요합니다."
      };
    }
    
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