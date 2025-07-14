import { useState } from 'react';
import { Share2, Twitter, Facebook, Link, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCurrentLanguage, t } from '@/lib/i18n-simple';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  type1?: string;
  type2?: string;
  score?: number;
  className?: string;
}

export function ShareButton({ type1, type2, score, className }: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const getShareData = () => {
    const currentLang = getCurrentLanguage();
    const shareTitle = type1 && type2 
      ? `${type1} × ${type2} ${t('shareTitle')}${score ? ` (${score}점)` : ''}`
      : t('shareTitle');
    
    const shareText = type1 && type2
      ? `${type1}와 ${type2}의 MBTI 궁합 분석 결과를 확인해보세요!${score ? ` 궁합 점수: ${score}점` : ''}`
      : t('shareText');

    return {
      title: shareTitle,
      text: shareText,
      url: window.location.href
    };
  };

  const handleWebShare = async () => {
    setIsSharing(true);
    
    try {
      const shareData = getShareData();
      
      if (navigator.share) {
        await navigator.share(shareData);
        toast({ title: t('linkCopied') });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        toast({ title: t('linkCopied') });
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        // User cancelled sharing, don't show error
        console.error('Share failed:', error);
      }
    } finally {
      setIsSharing(false);
    }
  };

  const handleSocialShare = (platform: string) => {
    const shareData = getShareData();
    const encodedText = encodeURIComponent(shareData.text);
    const encodedUrl = encodeURIComponent(shareData.url);
    const encodedTitle = encodeURIComponent(shareData.title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case 'line':
        shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'kakao':
        // KakaoTalk sharing would require Kakao SDK, fallback to copy
        navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        toast({ title: t('linkCopied') });
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const getSocialPlatformsForCountry = () => {
    const currentLang = getCurrentLanguage();
    
    // Return appropriate social platforms based on language/region
    switch (currentLang) {
      case 'ko':
        return [
          { platform: 'kakao', icon: MessageCircle, label: '카카오톡' },
          { platform: 'line', icon: MessageCircle, label: '라인' },
          { platform: 'twitter', icon: Twitter, label: '트위터' },
          { platform: 'facebook', icon: Facebook, label: '페이스북' }
        ];
      case 'ja':
        return [
          { platform: 'line', icon: MessageCircle, label: 'LINE' },
          { platform: 'twitter', icon: Twitter, label: 'Twitter' },
          { platform: 'facebook', icon: Facebook, label: 'Facebook' }
        ];
      case 'zh':
        return [
          { platform: 'twitter', icon: Twitter, label: 'Twitter' },
          { platform: 'facebook', icon: Facebook, label: 'Facebook' },
          { platform: 'whatsapp', icon: MessageCircle, label: 'WhatsApp' }
        ];
      case 'ru':
        return [
          { platform: 'telegram', icon: MessageCircle, label: 'Telegram' },
          { platform: 'twitter', icon: Twitter, label: 'Twitter' },
          { platform: 'facebook', icon: Facebook, label: 'Facebook' }
        ];
      default:
        return [
          { platform: 'twitter', icon: Twitter, label: 'Twitter' },
          { platform: 'facebook', icon: Facebook, label: 'Facebook' },
          { platform: 'whatsapp', icon: MessageCircle, label: 'WhatsApp' }
        ];
    }
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Primary Share Button */}
      <Button
        onClick={handleWebShare}
        disabled={isSharing}
        size="lg"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <Share2 className="h-5 w-5 mr-2" />
        {isSharing ? t('loading') : t('shareResult')}
      </Button>

      {/* Social Platform Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {getSocialPlatformsForCountry().map(({ platform, icon: Icon, label }) => (
          <Button
            key={platform}
            onClick={() => handleSocialShare(platform)}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </Button>
        ))}
        
        {/* Copy Link Button */}
        <Button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({ title: t('linkCopied') });
          }}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <Link className="h-4 w-4" />
          <span className="hidden sm:inline">링크 복사</span>
        </Button>
      </div>
    </div>
  );
}