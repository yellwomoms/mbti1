import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { ArrowLeft, Users, Star, Heart, Brain, MessageCircle, Scale, Share2, RotateCcw, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { MBTICompatibility } from "@shared/schema";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import AdSpace from "@/components/AdSpace";

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
  const [progress, setProgress] = useState(10);
  const { t } = useLanguage();

  const { data: compatibility, isLoading, error } = useQuery<MBTICompatibility>({
    queryKey: ['/api/mbti-compatibility', type1, type2],
    enabled: !!(type1 && type2),
  });

  // 진행률 애니메이션
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return 90;
          return prev + Math.random() * 15;
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6">
          {/* MBTI 타입 표시 - 더 귀엽게 */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-2xl px-6 py-3 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-2xl font-bold">{type1}</span>
              </div>
              <div className="relative">
                <Heart className="w-8 h-8 text-pink-400 animate-bounce" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-2xl px-6 py-3 shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-2xl font-bold">{type2}</span>
              </div>
            </div>
          </div>
          
          {/* 사랑스러운 하트 애니메이션 */}
          <div className="relative mb-8">
            <div className="flex justify-center space-x-2">
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" style={{animationDelay: '0s'}} />
              <Heart className="w-5 h-5 text-pink-500 animate-pulse" style={{animationDelay: '0.1s'}} />
              <Heart className="w-6 h-6 text-pink-600 animate-pulse" style={{animationDelay: '0.2s'}} />
              <Heart className="w-7 h-7 text-pink-500 animate-pulse" style={{animationDelay: '0.3s'}} />
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" style={{animationDelay: '0.4s'}} />
              <Heart className="w-5 h-5 text-pink-500 animate-pulse" style={{animationDelay: '0.5s'}} />
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" style={{animationDelay: '0.6s'}} />
            </div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 animate-ping opacity-30"></div>
            </div>
          </div>
          
          {/* 메인 메시지 - 밝고 사랑스럽게 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-pink-200 shadow-xl">
            <div className="text-2xl font-bold text-gray-800 mb-2">
              💕 AI가 궁합을 분석하고 있어요!
            </div>
            <p className="text-gray-600 mb-6">두 사람만의 특별한 연애 스토리를 준비하고 있답니다</p>
            
            {/* 진행률 표시 - 더 사랑스럽게 */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="font-medium">💝 분석 진행률</span>
                <span className="font-bold text-pink-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-pink-100 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 h-4 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{width: `${progress}%`}}
                ></div>
              </div>
            </div>
            
            {/* 재미있는 로딩 텍스트 - 더 귀엽게 */}
            <div className="text-sm text-gray-600 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">🔮</span>
                <span>두 사람의 궁합을 깊이 파헤치는 중이에요...</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">💕</span>
                <span>최고의 연애 꿀팁을 준비하고 있어요!</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">✨</span>
                <span>특별한 매력 포인트를 발견했어요!</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-lg">🌟</span>
                <span>두 사람만의 로맨틱한 스토리를 만들어요!</span>
              </p>
            </div>
          </div>
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
            {t('retry')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 상단 광고 공간 (주석 처리) */}
        {/* <AdSpace size="leaderboard" position="top" /> */}
        
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <Button
            onClick={() => setLocation('/')}
            variant="ghost"
            className="flex items-center text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">{t('backButton')}</span>
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
              <h3 className="text-2xl font-bold text-gray-800">{t('characteristics')}</h3>
            </div>
            
            <div className="space-y-4">
              {(typeof compatibility.characteristics === 'string' ? compatibility.characteristics : String(compatibility.characteristics || '')).split(/(?<=\.)\s+(?=[A-Z가-힣])/g).reduce((acc, sentence, index) => {
                const trimmed = sentence.trim();
                if (!trimmed) return acc;
                
                // 2-3개 문장씩 묶어서 처리
                const groupIndex = Math.floor(index / 3);
                if (!acc[groupIndex]) {
                  acc[groupIndex] = [];
                }
                acc[groupIndex].push(trimmed);
                return acc;
              }, [] as string[][]).map((group, groupIndex) => {
                const combinedText = group.join(' ');
                // 중요한 키워드들을 볼드 처리 (MBTI 타입 제외)
                const highlightedText = combinedText
                  .replace(/(서로|함께|이해|존중|소통|감정|관계|사랑|배려|지지|격려|신뢰|중요|필요|노력|표현|공감|경청|조화|균형|깊이|의미|특별|완벽|최고|놀라운|매력|시너지|행복|즐거운|따뜻한|달콤한|설레는|뜨거운|차분한|편안한|안정적인|역동적인)/g, '<strong>$1</strong>');
                
                return (
                  <p key={groupIndex} className="text-gray-700 text-base leading-relaxed">
                    <span dangerouslySetInnerHTML={{
                      __html: highlightedText
                    }} />
                  </p>
                );
              })}
            </div>
          </Card>

          {/* Dating Tips Card */}
          <Card className="glass-card p-8 shadow-xl hover-lift animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{t('tips')}</h3>
            </div>
            
            <div className="space-y-4">
              {(typeof compatibility.tips === 'string' ? compatibility.tips : String(compatibility.tips || '')).split(/(?<=\.)\s+(?=[A-Z가-힣])/g).reduce((acc, sentence, index) => {
                const trimmed = sentence.trim();
                if (!trimmed) return acc;
                
                // 2-3개 문장씩 묶어서 처리
                const groupIndex = Math.floor(index / 3);
                if (!acc[groupIndex]) {
                  acc[groupIndex] = [];
                }
                acc[groupIndex].push(trimmed);
                return acc;
              }, [] as string[][]).map((group, groupIndex) => {
                const combinedText = group.join(' ');
                // 중요한 키워드들을 볼드 처리 (MBTI 타입 제외)
                const highlightedText = combinedText
                  .replace(/(서로|함께|이해|존중|소통|감정|관계|사랑|배려|지지|격려|신뢰|중요|필요|노력|표현|공감|경청|조화|균형|깊이|의미|특별|완벽|최고|놀라운|매력|시너지)/g, '<strong>$1</strong>');
                
                return (
                  <p key={groupIndex} className="text-gray-700 text-base leading-relaxed">
                    <span dangerouslySetInnerHTML={{
                      __html: highlightedText
                    }} />
                  </p>
                );
              })}
            </div>
          </Card>

          {/* Special Combination Insight */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover-lift animate-slide-up border-2 border-purple-200" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{type1} × {type2} 특별한 조합</h3>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 flex items-center">
                🌟 이 조합의 매력 포인트
              </h4>
              <p className="leading-relaxed text-gray-700 text-base">
                {type1}의 <strong>특별한 매력</strong>과 {type2}의 <strong>독특한 장점</strong>이 만나면 <strong>놀라운 시너지</strong>를 만들어냅니다. 
                서로 다른 강점이 <strong>완벽하게 보완</strong>되어, <strong>함께라면 어떤 목표든 달성할 수 있는 최고의 팀워크</strong>를 자랑합니다. 
                이 조합은 <strong>깊이 있는 관계</strong>를 만들어갈 수 있는 <strong>특별한 잠재력</strong>을 가지고 있습니다.
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
              {t('share')}
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
            AI가 실시간으로 생성한 <span className="font-semibold">맞춤형</span> MBTI 궁합 분석
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-6">더 많은 콘텐츠 보기</h3>
            
            {/* Blog Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <a 
                href="/blog/infp-love-style.html" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2">💜</div>
                <div className="font-medium">INFP 연애 스타일</div>
                <div className="text-sm text-white/70">깊이 있는 사랑법</div>
              </a>
              
              <a 
                href="/blog/enfp-intj-match.html" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-medium">ENFP-INTJ 궁합</div>
                <div className="text-sm text-white/70">운명적 조합</div>
              </a>
              
              <a 
                href="/blog/mbti-breakup.html" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2">💔</div>
                <div className="font-medium">이별 극복법</div>
                <div className="text-sm text-white/70">유형별 회복법</div>
              </a>
              
              <a 
                href="/blog/mbti-conflict-tips.html" 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-medium">갈등 해결법</div>
                <div className="text-sm text-white/70">소통 전략</div>
              </a>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <a href="/about.html" className="hover:text-white transition-colors">
                서비스 소개
              </a>
              <a href="/contact.html" className="hover:text-white transition-colors">
                문의하기
              </a>
              <a href="/privacy.html" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="/terms.html" className="hover:text-white transition-colors">
                이용약관
              </a>
            </div>
            
            <div className="mt-6 text-white/60 text-xs">
              © 2025 MBTI 궁합 테스트. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
