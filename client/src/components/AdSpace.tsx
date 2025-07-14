// 구글 애드센스 광고 공간 컴포넌트
import { useEffect } from 'react';

interface AdSpaceProps {
  size: 'banner' | 'square' | 'leaderboard' | 'sidebar';
  position: 'top' | 'bottom' | 'side' | 'inline';
  className?: string;
}

export function AdSpace({ size, position, className = '' }: AdSpaceProps) {
  // 애드센스 광고 로딩 로직 (향후 구현)
  useEffect(() => {
    // 구글 애드센스 광고 로딩
    // if (typeof window !== 'undefined' && window.adsbygoogle) {
    //   (window.adsbygoogle = window.adsbygoogle || []).push({});
    // }
  }, []);

  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'w-full h-24 max-w-4xl'; // 728x90
      case 'square':
        return 'w-80 h-80'; // 300x300
      case 'leaderboard':
        return 'w-full h-32 max-w-6xl'; // 728x90 또는 970x250
      case 'sidebar':
        return 'w-40 h-96'; // 160x600
      default:
        return 'w-full h-24';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'mb-8';
      case 'bottom':
        return 'mt-8';
      case 'side':
        return 'mx-4';
      case 'inline':
        return 'my-4';
      default:
        return '';
    }
  };

  return (
    <>
      {/* 구글 애드센스 광고 코드 (주석 처리) */}
      {/*
      <div className={`${getSizeClasses()} ${getPositionClasses()} ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      */}
    </>
  );
}

export default AdSpace;