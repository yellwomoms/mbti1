import { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  type1: string;
  type2: string;
}

export function LoadingScreen({ type1, type2 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const steps = [
    { text: '두 성격 유형을 분석하고 있어요', emoji: '🔍' },
    { text: '연애 궁합을 계산하고 있어요', emoji: '💕' },
    { text: '특별한 케미를 찾고 있어요', emoji: '✨' },
    { text: '연애 꿀팁을 준비하고 있어요', emoji: '💡' },
    { text: '마지막 터치를 하고 있어요', emoji: '🎨' }
  ];

  useEffect(() => {
    // Generate random floating hearts
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setHearts(newHearts);

    // Progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Step animation
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: '3s'
          }}
        >
          <Heart className="w-6 h-6 text-white/20 animate-bounce" />
        </div>
      ))}

      {/* Sparkles */}
      <div className="absolute top-20 left-20 animate-spin">
        <Sparkles className="w-8 h-8 text-yellow-300" />
      </div>
      <div className="absolute bottom-20 right-20 animate-ping">
        <Star className="w-6 h-6 text-pink-300" />
      </div>
      <div className="absolute top-40 right-40 animate-bounce">
        <Sparkles className="w-5 h-5 text-purple-300" />
      </div>

      {/* Main Loading Card */}
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md w-full border border-white/20">
        {/* MBTI Types Display */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold mr-2">
            {type1}
          </div>
          <Heart className="w-6 h-6 text-pink-500 animate-pulse mx-2" />
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-lg font-bold ml-2">
            {type2}
          </div>
        </div>

        {/* Cute Loading Animation */}
        <div className="text-center mb-6">
          <div className="text-6xl animate-bounce mb-4">
            {steps[currentStep]?.emoji}
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            궁합 분석 중...
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {steps[currentStep]?.text}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">분석 진행률</span>
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{progress}%</span>
          </div>
          <Progress 
            value={progress} 
            className="h-3 bg-gray-200 dark:bg-gray-700"
          />
        </div>

        {/* Cute Messages */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-4 border border-pink-200 dark:border-pink-800">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              💕 두 분의 특별한 케미를 찾고 있어요! 조금만 기다려주세요 ✨
            </p>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center mt-4 space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}