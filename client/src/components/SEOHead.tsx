import { useEffect } from 'react';
import { getCurrentLanguage, t } from '@/lib/i18n-simple';

interface SEOHeadProps {
  title?: string;
  description?: string;
  type1?: string;
  type2?: string;
  score?: number;
  image?: string;
}

export function SEOHead({ title, description, type1, type2, score, image }: SEOHeadProps) {
  useEffect(() => {
    const currentLanguage = getCurrentLanguage();
    
    // Get localized content
    const pageTitle = title || t('seoTitle');
    const pageDescription = description || t('seoDescription');
    const pageImage = image || 'https://mbti-master.replit.app/images/og-thumbnail.jpg';
    const keywords = t('seoKeywords');
    
    // Update title
    document.title = pageTitle;
    
    // Update basic meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'MBTI Match Team');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    // Update language meta tag
    updateMetaTag('language', getLocaleFromLanguage(currentLanguage));
    document.documentElement.lang = currentLanguage;
    
    // Update Open Graph tags
    updateMetaTag('og:title', t('ogTitle'));
    updateMetaTag('og:description', t('ogDescription'));
    updateMetaTag('og:image', pageImage);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:locale', getLocaleFromLanguage(currentLanguage));
    
    // Update Twitter tags
    updateMetaTag('twitter:title', t('twitterTitle'));
    updateMetaTag('twitter:description', t('twitterDescription'));
    updateMetaTag('twitter:image', pageImage);
    updateMetaTag('twitter:card', 'summary_large_image');
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', window.location.href);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
    
    // Update structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": pageTitle,
      "description": pageDescription,
      "url": window.location.href,
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Web",
      "inLanguage": getLocaleFromLanguage(currentLanguage),
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
    
    if (type1 && type2) {
      structuredData["about"] = {
        "@type": "Thing",
        "name": `${type1} × ${type2} MBTI Compatibility`,
        "description": `Compatibility analysis between ${type1} and ${type2} personality types`
      };
      
      if (score) {
        structuredData["aggregateRating"] = {
          "@type": "AggregateRating",
          "ratingValue": score,
          "bestRating": 100,
          "worstRating": 0
        };
      }
    }
    
    updateJsonLd(structuredData);
  }, [title, description, type1, type2, score, image]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  // Determine the correct attribute type
  let attributeType = 'name';
  if (name.startsWith('og:')) {
    attributeType = 'property';
  } else if (name.startsWith('twitter:')) {
    attributeType = 'name';
  }
  
  // Find existing meta tag
  let meta = document.querySelector(`meta[${attributeType}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attributeType, name);
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