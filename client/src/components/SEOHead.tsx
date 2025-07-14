import { useLanguage } from '@/lib/i18n';
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  type1?: string;
  type2?: string;
  score?: number;
  image?: string;
}

export function SEOHead({ title, description, type1, type2, score, image }: SEOHeadProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Update page title
    const pageTitle = title || t('appTitle');
    document.title = pageTitle;

    // Update meta description
    const metaDescription = description || (type1 && type2 
      ? `${type1}와 ${type2}의 MBTI 궁합 분석 결과${score ? ` (${score}점)` : ''}. 상세한 연애 꿀팁과 특징을 확인하세요.`
      : 'MBTI 궁합 테스트로 두 성격 유형의 연애 궁합을 분석해보세요. 16가지 성격 유형의 모든 조합을 지원합니다.');

    // Update or create meta tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('og:title', pageTitle);
    updateMetaTag('og:description', metaDescription);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:image', image || '/mbti-compatibility-og.jpg');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', pageTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', image || '/mbti-compatibility-og.jpg');
    
    // Language meta tags
    updateMetaTag('og:locale', getLocaleFromLanguage(language));
    document.documentElement.lang = language;

    // Keywords for SEO
    const keywords = type1 && type2 
      ? `MBTI, 궁합, ${type1}, ${type2}, 성격유형, 연애, 궁합테스트, 심리테스트`
      : 'MBTI, 궁합, 성격유형, 연애, 궁합테스트, 심리테스트, 16가지 성격유형';
    updateMetaTag('keywords', keywords);

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": pageTitle,
      "description": metaDescription,
      "url": window.location.href,
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };

    updateJsonLd(jsonLd);
  }, [title, description, type1, type2, score, image, language, t]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  const property = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
  let meta = document.querySelector(`meta[${property}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(property, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

function updateJsonLd(data: any) {
  let script = document.querySelector('script[type="application/ld+json"]');
  
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
}

function getLocaleFromLanguage(lang: string): string {
  const localeMap: Record<string, string> = {
    ko: 'ko_KR',
    en: 'en_US',
    ja: 'ja_JP',
    zh: 'zh_CN',
    es: 'es_ES',
    fr: 'fr_FR',
    de: 'de_DE',
    it: 'it_IT',
    pt: 'pt_BR',
    ru: 'ru_RU'
  };
  
  return localeMap[lang] || 'en_US';
}