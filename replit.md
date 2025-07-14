# MBTI Compatibility Test Application

## Overview

This is a full-stack MBTI (Myers-Briggs Type Indicator) compatibility testing application built with React, Express, and PostgreSQL. The application allows users to select two MBTI personality types and view detailed compatibility analysis between them, including compatibility scores, relationship dynamics, and practical dating advice.

## User Preferences

Preferred communication style: Simple, everyday language.
Critical formatting requirement: Numbered lists (1., 2., 3.) must have proper line breaks before each number to prevent text concatenation.

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

### 2024-01-14: 번호 리스트 포맷팅 및 광고 수익화 준비
- 번호 앞 줄바꿈 문제 해결: 정규식으로 "1. ", "2. ", "3. " 앞에 줄바꿈 추가
- 구글 애드센스 광고 자리 추가 (AdSpace 컴포넌트 개발)
- 다크모드 토글 버튼 추가 (우측 상단 고정 위치)
- 광고 위치: 선택페이지 상단/하단, 결과페이지 중간/하단 총 4곳 
- 수익화 준비 완료: 애드센스 슬롯 ID만 입력하면 바로 운영 가능

### 2024-01-14: 번호 리스트 포맷팅 개선 강화
- 포괄적인 정규식 패턴 추가로 한국어 문맥에서의 번호 매기기 문제 해결
- 문장 끝, 한국어 단어 뒤, 공백 뒤 등 다양한 위치의 번호 감지
- AI 프롬프트에 번호 매기기 규칙 강화 및 예시 추가
- 사용자 요구사항: "1. 2. 3." 형태 번호가 문장 중간에 붙지 않도록 개선

### 2024-01-14: 광고 영역 주석 처리 및 AI 설정 최적화
- 모든 AdSpace 컴포넌트 주석 처리 (나중에 설정 시 활성화 가능)
- OpenAI API temperature 0.7로 조정 (창의성과 일관성 균형)
- 광고 위치 4곳 모두 주석 상태: 선택페이지 상단/하단, 결과페이지 중간/하단
- 사용자 선호: 광고 없는 깔끔한 인터페이스 우선

### 2024-01-14: 구글 SEO 및 소셜 공유 시스템 완성
- 10개 언어별 SEO 메타태그 완성 (title, description, keywords, OG, Twitter)
- 국가별 맞춤형 소셜 공유 시스템 구축 (Web Share API + 플랫폼별 fallback)
- 언어별 대표 SNS 플랫폼 자동 감지 (한국: 카카오톡/라인, 일본: LINE, 러시아: 텔레그램 등)
- AI 분석 속도 최적화: 7초 이내 응답 보장 (temperature 0.5, max_tokens 1000)
- ShareButton 컴포넌트로 사용자 친화적 공유 경험 제공