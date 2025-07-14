import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MBTI_TYPES } from "@/lib/mbti-data";
import { Heart, User, Sparkles } from "lucide-react";

export default function SelectionPage() {
  const [, setLocation] = useLocation();
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

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-[var(--gradient-from)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MBTI 궁합 테스트
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            AI가 실시간으로 두 사람의 연애 궁합을 분석해드립니다. 
            최신 MBTI 이론을 바탕으로 맞춤형 분석과 실용적인 연애 조언을 제공합니다.
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">나의 MBTI</h3>
              <p className="text-gray-600">첫 번째 사람의 성격 유형을 선택해주세요</p>
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
            
            <div className="text-center">
              <p className="text-sm text-gray-500">
                선택된 유형: <span className="font-bold text-lg text-purple-600">
                  {selectedTypes.person1 || '없음'}
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">상대방 MBTI</h3>
              <p className="text-gray-600">두 번째 사람의 성격 유형을 선택해주세요</p>
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
                선택된 유형: <span className="font-bold text-lg text-pink-600">
                  {selectedTypes.person2 || '없음'}
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
            궁합 분석하기
          </Button>
          <p className="text-white/70 text-sm mt-4">
            {isReady ? '두 MBTI의 궁합을 분석해드릴게요!' : '두 MBTI 유형을 모두 선택해주세요'}
          </p>
        </div>
      </div>
    </div>
  );
}
