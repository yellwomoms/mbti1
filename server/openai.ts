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
당신은 연애 궁합 콘텐츠 전문 작가입니다.

다음 두 MBTI 조합에 대해 사람들이 즐겁게 읽을 수 있는, 재치 있고 감성적인 궁합 결과를 만들어주세요.  

**꼭 리포트 같은 딱딱한 분석 말고**, 유쾌하거나 공감되거나 약간은 설레는 느낌까지 전달되는 말투로 작성해 주세요.

---

MBTI1: ${type1}  
MBTI2: ${type2}

🎯 출력 형식 (딱 이대로):

{
  "score": 1-100 사이의 점수,
  "compatibilityType": "궁합 유형 (예: 이상적인 관계, 성장하는 관계, 도전적인 관계 등)",
  "title": "두 타입의 관계를 표현하는 짧은 제목",
  "description": "조합의 핵심 이미지를 15~30자 감성 문구로 표현 (예: 귀여운 댕댕이 커플, 감정폭발 콤비, 반대매력 폭발 등)",
  "characteristics": "'연애할 때 우리는' 이라는 문장으로 시작해 300~350자 분량의 감성적 요약문단을 작성. 각자의 성격 차이, 끌리는 포인트, 갈등 요소, 관계의 전체 분위기를 공감되는 말투로 담아주세요.",
  "tips": "두 사람의 연애 궁합을 높이기 위한 꿀팁들을 마치 친구에게 조언하듯 따뜻하고 현실적인 말투로 작성 (500-550자). 구체적이고 실용적인 조언을 담아주세요."
}

---

✅ 반드시 조합에 어울리는 말투와 분위기로 작성해 주세요.  
- 귀엽고 통통 튈 수도 있고  
- 싸우다 정드는 케미일 수도 있고  
- 현실 연애의 갈등 중심일 수도 있고  
- 겉으론 달라도 속으론 닮은 느낌도 좋습니다.

✅ 같은 템플릿을 반복적으로 쓰지 말고, 조합마다 분위기/표현/내용/형식이 다르게 구성해주세요.

✅ 진짜로 사람들이 읽고 감탄하거나 웃게 만들 수 있게, 감정이입과 몰입이 되도록 써주세요.
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
      temperature: 0.8
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