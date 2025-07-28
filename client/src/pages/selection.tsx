import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MBTI_TYPES } from "@/lib/mbti-data";
import { Heart, User, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import AdSpace from "@/components/AdSpace";

export default function SelectionPage() {
  const [, setLocation] = useLocation();
  const { t, isLoading } = useLanguage();
  const [selectedTypes, setSelectedTypes] = useState<{
    person1: string | null;
    person2: string | null;
  }>({
    person1: null,
    person2: null,
  });

  const handleMBTISelection = (type: string, person: '1' | '2') => {
    setSelectedTypes(prev => ({
      ...prev,
      [`person${person}`]: type
    }));
  };

  const handleAnalyze = () => {
    if (selectedTypes.person1 && selectedTypes.person2) {
      setLocation(`/results/${selectedTypes.person1}/${selectedTypes.person2}`);
    }
  };

  const isReady = selectedTypes.person1 && selectedTypes.person2;

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 상단 광고 공간 (주석 처리) */}
        {/* <AdSpace size="leaderboard" position="top" /> */}

        {/* Header Section */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-[var(--gradient-from)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* MBTI Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Person 1 Selection */}
          <Card className="glass-card p-8 shadow-xl hover-lift animate-scale-in">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t('person1')}</h3>
              <p className="text-gray-600">{t('person1Desc')}</p>
            </div>
            
            <div className="grid grid-cols-4 gap-3 mb-6">
              {MBTI_TYPES.map((type) => (
                <button
                  key={`person1-${type}`}
                  className={`mbti-badge rounded-xl py-3 px-2 text-sm font-semibold hover-lift ${
                    selectedTypes.person1 === type ? 'selected' : ''
                  }`}
                  onClick={() => handleMBTISelection(type, '1')}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* 사이드 광고 공간 (주석 처리) */}
            {/* <AdSpace size="square" position="inline" /> */}
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                {t('selected')}: <span className="font-bold text-lg text-purple-600">
                  {selectedTypes.person1 || t('none')}
                </span>
              </p>
            </div>
          </Card>

          {/* Person 2 Selection */}
          <Card className="glass-card p-8 shadow-xl hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{t('person2')}</h3>
              <p className="text-gray-600">{t('person2Desc')}</p>
            </div>
            
            <div className="grid grid-cols-4 gap-3 mb-6">
              {MBTI_TYPES.map((type) => (
                <button
                  key={`person2-${type}`}
                  className={`mbti-badge person2 rounded-xl py-3 px-2 text-sm font-semibold hover-lift ${
                    selectedTypes.person2 === type ? 'selected' : ''
                  }`}
                  onClick={() => handleMBTISelection(type, '2')}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                {t('selected')}: <span className="font-bold text-lg text-pink-600">
                  {selectedTypes.person2 || t('none')}
                </span>
              </p>
            </div>
          </Card>
        </div>

        {/* Analyze Button */}
        <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
          <Button
            onClick={handleAnalyze}
            disabled={!isReady}
            className="bg-white text-[var(--deep-indigo)] px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Sparkles className="w-5 h-5 mr-3" />
            {t('analyzeButton')}
          </Button>
          <p className="text-white/70 text-sm mt-4">
            {isReady ? t('analyzing') : '두 MBTI 유형을 모두 선택해주세요'}
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
