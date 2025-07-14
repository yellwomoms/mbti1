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
너는 연애 궁합 콘텐츠를 만드는 작가야.  

너무 분석적이고 딱딱한 말투 말고,  
친구한테 소개해주는 듯한 부드럽고 재밌는 말투로 써 줘.  
위트도 살짝, 감성도 살짝, 현실 공감도 꼭 들어가면 좋아.  

---

🎯 다음 두 사람의 MBTI 조합에 맞춰 아래 형식으로 궁합 결과를 작성해줘:

MBTI1: ${type1}  
MBTI2: ${type2}

📌 출력 형식 (이대로 써줘):

tagline: 두 사람을 대표하는 감성 문구 한 줄 (15~30자, 예: "눈치만렙 애인과 노빠꾸 애인")

summary:  
"연애할 때 우리는..."으로 시작하는 감성 중심 요약 문단 (300~350자)  
→ 두 사람의 연애 분위기, 케미, 감정 흐름 등을 재밌고 자연스럽게 묘사해 줘.  
→ 격식 없이, 공감되게, 친구한테 얘기해주듯 써줘.  

loveTips:  
두 사람을 위한 연애 꿀팁 5가지  
각 항목은 제목 + 설명 형식으로 써줘.  
→ 제목은 위트 있게, 설명은 현실 연애처럼 구체적으로  
→ 설명은 450~550자, 말투는 친근하게!

highlight:  
이 MBTI 조합만의 매력을 감성적으로 요약한 문단 (150~300자)  
→ 함께 있을 때 생기는 특별한 분위기나 케미를 감탄스럽게 표현해 줘.

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