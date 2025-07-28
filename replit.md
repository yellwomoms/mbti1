# MBTI Compatibility Test Application

## Overview

This is a full-stack MBTI (Myers-Briggs Type Indicator) compatibility testing application built with React, Express, and PostgreSQL. The application allows users to select two MBTI personality types and view detailed compatibility analysis between them, including compatibility scores, relationship dynamics, and practical dating advice.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Shadcn/UI components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reload with tsx and Vite middleware integration

### Database Design
- **Primary Database**: PostgreSQL via Neon Database serverless
- **Schema Management**: Drizzle Kit for migrations and schema definitions
- **Tables**:
  - `users`: User authentication and profiles
  - `mbti_compatibility`: Cached compatibility analysis data
- **Backup Storage**: In-memory storage fallback for development

## Key Components

### Data Management
- **MBTI Data**: Comprehensive compatibility matrix covering all 256 type combinations
- **Compatibility Scoring**: Numerical scoring system (1-100) with categorized relationship types
- **Content Structure**: Detailed analysis including characteristics, tips, and relationship dynamics

### UI Components
- **Selection Interface**: Interactive MBTI type selector with visual feedback
- **Results Display**: Detailed compatibility analysis with scores and recommendations
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Toast Notifications**: User feedback for actions like sharing and copying links

### Performance Features
- **Query Caching**: React Query for efficient data fetching and caching
- **Lazy Loading**: Component-level code splitting
- **Image Optimization**: Asset management through Vite
- **Development Tools**: Hot module replacement and error overlays

## Data Flow

1. **User Selection**: Users select two MBTI types on the selection page
2. **Route Navigation**: Application navigates to results page with type parameters
3. **Data Fetching**: React Query fetches compatibility data from API endpoint
4. **Cache Strategy**: Data is first checked in database, then falls back to static data
5. **Storage**: Retrieved data is cached in both database and React Query cache
6. **Display**: Comprehensive compatibility analysis is rendered with interactive elements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **Development**: Vite, TypeScript, ESBuild for production builds
- **Database**: Neon Database serverless PostgreSQL, Drizzle ORM

### Utility Libraries
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Data Fetching**: TanStack React Query
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod for schema validation
- **Carousel**: Embla Carousel for interactive components

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend proxy
- **Hot Reload**: Full-stack hot module replacement
- **Error Handling**: Runtime error overlays and detailed logging
- **Database**: Development-friendly in-memory fallback with PostgreSQL primary

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: ESBuild bundling for Node.js deployment
- **Static Assets**: Served through Express with optimized caching
- **Database**: PostgreSQL with connection pooling and error handling

### Environment Configuration
- **Database URL**: Environment variable for database connection
- **Session Management**: Secure session configuration for production
- **CORS**: Configured for appropriate origins in production
- **Logging**: Request/response logging with performance metrics

The application is designed to be easily deployable on platforms like Replit, Vercel, or similar hosting services with automatic environment detection and appropriate middleware configuration.

## Recent Changes: Latest modifications with dates

### 2024-01-14: AI 분석 시스템 완전 적용
- GPT API를 통한 실시간 모든 256개 MBTI 조합 분석 지원
- 기본 데이터 의존성 제거, AI 우선 분석으로 전환  
- 감성적이고 재치 있는 프롬프트로 업데이트
- 볼드 처리를 MBTI 타입에서 중요 감정 키워드로 변경
- 응답 시간 최적화 및 토큰 사용량 개선

### 2024-01-14: 친근한 말투 프롬프트 적용
- "친구한테 소개해주는 듯한 부드럽고 재밌는 말투"로 개선
- 현실적인 연애 조언과 구체적인 상황 묘사 추가
- 5가지 연애 꿀팁 형식으로 더욱 실용적인 조언 제공
- 감성적 tagline과 highlight 섹션으로 매력적인 콘텐츠 완성
- 타입 안전성 개선으로 [object Object] 오류 해결
- 7초 이내 응답 시간으로 최적화 완료

### 2024-01-14: 다국어 지원 및 SEO 최적화 
- 10개 언어 자동 감지 시스템 구축 (브라우저 언어, IP 기반)
- 구글 애드센스 공간 완전 제거 (레이아웃 깨짐 방지)
- SEO meta 태그 완전 적용 (Open Graph, Twitter Card 포함)
- 언어별 완전 번역 완료 (한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어, 이탈리아어, 포르투갈어, 러시아어)
- 자동 언어 감지로 사용자 편의성 극대화
- 언어 선택 메뉴 제거 (자동 감지만 유지)

### 2024-01-14: 구글 서치 콘솔 설정 시도
- HTML 파일 방법: 6중 보호 시스템으로 `/google8334862f75f6dc65.html` 구현
- HTML 메타 태그 방법: `<meta name="google-site-verification">` 추가
- Replit 배포 환경에서 인증 파일 접근 제한 이슈 발생
- 권장 해결책: DNS TXT 레코드 방법 사용 필요

### 2024-01-14: 네이버 웹마스터 도구 및 SEO 최적화 완료
- 네이버 웹마스터 도구 인증 파일 `/naverbc0065282e385ab4f34467cd07285d44.html` 추가
- 네이버 메타 태그 `<meta name="naver-site-verification">` 추가
- robots.txt와 sitemap.xml을 서버 라우트로 우선 처리하도록 개선
- 구글과 네이버 양쪽 검색엔진 인증 시스템 완성
- 모든 SEO 파일들이 정적 파일과 서버 라우트 이중 지원으로 안정성 확보

### 2025-01-28: 다국어 시스템 구조 개선 완료
- 기존 인라인 translations 객체를 독립 JSON 파일로 분리
- 11개 언어 지원: ko, en, ja, id(인도네시아어 신규 추가), zh, es, fr, de, it, pt, ru
- `/public/` 폴더에 언어별 JSON 파일 구조로 관리 (ko.json, en.json 등)
- 브라우저 언어 자동 감지 시스템 유지 (기본값: ko)
- 비동기 번역 로딩 시스템으로 성능 최적화
- 번역 캐시 시스템으로 중복 요청 방지
- 메인 앱과 정적 페이지 하단 footer에 콘텐츠 탐색 링크 추가
- 모든 copyright 연도를 2025년으로 업데이트