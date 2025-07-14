import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { ArrowLeft, Users, Star, Heart, Brain, MessageCircle, Scale, Share2, RotateCcw, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { MBTICompatibility } from "@shared/schema";

interface ResultsPageProps {
  params: {
    type1: string;
    type2: string;
  };
}

export default function ResultsPage({ params }: ResultsPageProps) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { type1, type2 } = params;

  const { data: compatibility, isLoading, error } = useQuery<MBTICompatibility>({
    queryKey: ['/api/mbti-compatibility', type1, type2],
    enabled: !!(type1 && type2),
  });

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'MBTI 궁합 테스트 결과',
          text: `${type1} + ${type2} 궁합 결과를 확인해보세요!`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "링크가 복사되었습니다!",
          description: "친구들과 공유해보세요.",
        });
      }
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">궁합을 분석하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (error || !compatibility) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-lg">분석 중 오류가 발생했습니다.</p>
          <Button 
            onClick={() => setLocation('/')}
            className="mt-4 bg-white text-[var(--deep-indigo)]"
          >
            다시 시도
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <Button
            onClick={() => setLocation('/')}
            variant="ghost"
            className="flex items-center text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">다시 선택하기</span>
          </Button>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold">{type1} + {type2}</span>
            </div>
          </div>
        </div>

        {/* Compatibility Score Card */}
        <Card className="glass-card p-8 mb-8 shadow-xl animate-scale-in">
          <div className="text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full flex items-center justify-center mb-4">
                <Users className="w-16 h-16 text-[var(--deep-indigo)]" />
              </div>
              <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-semibold text-lg mb-2">
                {compatibility.compatibilityType}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{compatibility.title}</h2>
            </div>

            {/* Compatibility Score */}
            <div className="mb-8">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-2">
                {compatibility.score}<span className="text-3xl">점</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="compatibility-bar h-3 rounded-full transition-all duration-1000 ease-out" 
                  style={{width: `${compatibility.score}%`}}
                ></div>
              </div>
              <p className="text-gray-600 font-medium">{compatibility.description}</p>
            </div>

            {/* Compatibility Traits */}
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <Heart className="w-4 h-4 text-pink-500 mr-2" />
                  감정 표현
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">풍부</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <Brain className="w-4 h-4 text-blue-500 mr-2" />
                  논리적 사고
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">탁월</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
                  소통 방식
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">원활</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <Scale className="w-4 h-4 text-orange-500 mr-2" />
                  가치관 일치
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">조화</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Analysis Cards */}
        <div className="space-y-6">
          {/* Dating Characteristics Card */}
          <Card className="glass-card p-8 shadow-xl hover-lift animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">연애할 때 이런 특징이 있어요</h3>
            </div>
            
            <div className="space-y-4">
              {compatibility.characteristics.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Dating Tips Card */}
          <Card className="glass-card p-8 shadow-xl hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">연애 꿀팁</h3>
            </div>
            
            <div className="space-y-6">
              {compatibility.tips.split('\n\n').map((section, index) => (
                <div key={index}>
                  {section.split('\n').map((line, lineIndex) => {
                    if (line.includes('•')) {
                      return (
                        <div key={lineIndex} className="flex items-start mb-2">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{line.replace('•', '').trim()}</span>
                        </div>
                      );
                    } else if (line.trim()) {
                      return (
                        <h4 key={lineIndex} className="text-lg font-semibold text-purple-600 mb-3 flex items-center">
                          <Heart className="w-4 h-4 text-pink-500 mr-2" />
                          {line}
                        </h4>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          </Card>

          {/* Special Combination Insight */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{type1} × {type2} 특별한 조합</h3>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4">🌟 이 조합의 매력 포인트</h4>
              <p className="leading-relaxed text-white/95">
                {type1}의 특별한 매력과 {type2}의 독특한 장점이 만나면 놀라운 시너지를 만들어냅니다. 
                서로 다른 강점이 완벽하게 보완되어, 함께라면 어떤 목표든 달성할 수 있는 최고의 팀워크를 자랑합니다. 
                이 조합은 깊이 있는 관계를 만들어갈 수 있는 특별한 잠재력을 가지고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Share and Action Buttons */}
        <div className="text-center mt-12 space-y-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleShare}
              className="bg-white text-[var(--deep-indigo)] px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Share2 className="w-4 h-4 mr-3" />
              결과 공유하기
            </Button>
            <Button
              onClick={() => setLocation('/')}
              variant="ghost"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 mr-3" />
              다른 조합 보기
            </Button>
          </div>
          <p className="text-white/70 text-sm">
            총 <span className="font-semibold">256가지</span> MBTI 조합별 맞춤 분석 제공
          </p>
        </div>
      </div>
    </div>
  );
}
