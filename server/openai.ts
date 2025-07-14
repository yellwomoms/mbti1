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
  const prompt = `${type1}+${type2} 연애궁합 분석

JSON 응답:
{
  "score": 75,
  "compatibilityType": "감성문구 15-30자",
  "title": "${type1}과 ${type2}의 궁합",
  "description": "한줄설명",
  "characteristics": "연애할 때 이런 특징이 있어요 로 시작, 500-600자",
  "tips": "연애꿀팁 제목+설명 700-800자"
}

친근한 말투로 작성.`;

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
      temperature: 0.2,
      max_tokens: 900
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
        characteristics: "연애할 때 이런 특징이 있어요. 두 사람은 서로의 다른 점을 이해하며 성장하는 관계입니다. 각자의 강점을 살려 서로를 보완하고, 깊은 유대감을 형성해 나갑니다. 때로는 의견이 다를 수 있지만, 이런 차이점들이 오히려 관계를 더욱 풍요롭게 만들어 줍니다. 서로에 대한 이해와 존중을 바탕으로 하는 건강한 관계를 만들어 나갈 수 있습니다. 일상에서 서로의 작은 배려와 관심이 쌓여가면서 더욱 특별한 관계로 발전할 수 있어요. 서로의 가치관을 존중하면서도 함께 성장할 수 있는 멋진 커플이 될 거예요.",
        tips: "💡 서로를 이해하고 존중하기\n\n연애에서 가장 중요한 것은 서로를 이해하고 존중하는 마음입니다. 두 사람은 서로 다른 성격과 가치관을 가지고 있기 때문에, 상대방의 입장에서 생각해보는 것이 중요합니다. 갈등이 생겼을 때는 감정적으로 대응하기보다는 차분하게 대화를 통해 해결하려고 노력해보세요. 서로의 의견을 듣고 받아들이는 자세가 관계를 더욱 단단하게 만들어 줄 것입니다. 작은 관심과 배려도 잊지 마세요! 일상에서 서로의 취향을 존중하고, 함께 할 수 있는 새로운 활동을 찾아보는 것도 좋은 방법입니다. 서로의 꿈을 응원하고 지지해주면서, 함께 성장해 나가는 관계를 만들어 보세요. 때로는 혼자만의 시간도 필요하니까 적당한 거리감을 유지하면서도 서로에 대한 애정을 꾸준히 표현하는 게 중요해요."
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