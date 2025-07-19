# Luxury Ski Chalet Website

## Overview

This is a Next.js 14 application optimized for Vercel deployment, showcasing a luxury ski chalet rental business in Gudauri, Georgia. The application serves as a marketing website and booking inquiry system, featuring modern 2025 UI/UX best practices including parallax scrolling, glassmorphism effects, sticky navigation with scrollspy, trust signals, and location mapping. Successfully enhanced with premium design on January 19, 2025.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Images**: Next.js optimized images with remote patterns
- **SEO**: Built-in metadata API with Open Graph and Twitter cards

The frontend follows Next.js App Router architecture with server and client components. All components are organized in src/ directory with proper 'use client' directives for interactive components.

### Backend Architecture
- **Framework**: Next.js API Routes with TypeScript
- **Data Storage**: In-memory storage for development inquiries
- **API Integration**: OpenWeatherMap API for real-time weather data
- **Deployment**: Optimized for Vercel serverless functions

The backend uses Next.js API routes (/api/weather, /api/inquiries) providing serverless endpoints optimized for Vercel deployment.

## Recent Changes (January 19, 2025)

### Modern UI/UX Implementation
- **2025 Design Trends**: Implemented glassmorphism effects, large minimal fonts, subtle microinteractions
- **Sticky Navigation**: Added scrollspy navigation with smooth scrolling to sections
- **Enhanced Hero**: Updated to "Stay Where the Powder Falls" with interactive CTAs
- **Trust Signals**: Added customer testimonials, ratings, and trust badges
- **Location Mapping**: Created visual location section with key points and distances
- **Mobile Optimization**: Floating "Book Now" button and responsive design improvements
- **Dark Mode**: Warm tones aesthetic with luxury color palette
- **SEO Enhancement**: Updated metadata with compelling titles and Open Graph tags

## Key Components

### Frontend Components
1. **Parallax Hero**: Fullscreen hero with "Stay Where the Powder Falls" tagline and scroll effects
2. **Sticky Navigation**: Smooth scrolling navigation with scrollspy highlighting active sections
3. **Luxury Accommodation**: Glassmorphism cards with heart/favorite microinteractions
4. **Weather Widget**: Real-time weather display with elegant glass styling
5. **Image Gallery**: Interactive gallery with lightbox, navigation, and favorite functionality
6. **Location Map**: Visual map section with key location points and distance indicators
7. **Trust Signals**: Customer testimonials, 5-star ratings, and trust badges
8. **Contact Form**: Modern booking form with urgency indicators and glass styling

### Backend Components
1. **Weather API**: Proxy endpoint to OpenWeatherMap API
2. **Inquiry Management**: CRUD operations for customer inquiries
3. **User Management**: Basic user schema (prepared for future authentication)

## Data Flow

### Weather Data Flow
1. Frontend requests weather data from `/api/weather`
2. Backend fetches data from OpenWeatherMap API using coordinates for Gudauri
3. Data is transformed and cached on the frontend with 10-minute refresh intervals

### Inquiry Submission Flow
1. User fills out contact form with name, email, dates, and message
2. Form data is validated using Zod schemas
3. Data is submitted to `/api/inquiries` endpoint
4. Backend stores inquiry in memory storage (can be persisted to database)
5. Success/error feedback is shown to user via toast notifications

## External Dependencies

### Third-Party Services
- **OpenWeatherMap API**: Provides real-time weather data for Gudauri, Georgia
- **Unsplash**: Image hosting for gallery photos (via CDN URLs)

### Key Libraries
- **@neondatabase/serverless**: Database connection (configured for PostgreSQL)
- **@radix-ui/***: Accessible UI primitives for components
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

## Deployment Strategy

### Development Setup
- Uses Vite development server with HMR
- Express server runs in development mode with TypeScript compilation
- In-memory storage for rapid development iteration

### Production Build
- Frontend builds to static assets in `dist/public`
- Backend compiles to ESM bundle in `dist/index.js`
- Designed for deployment on platforms supporting Node.js
- Database migrations handled via Drizzle Kit

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string
- `OPENWEATHER_API_KEY` or `WEATHER_API_KEY`: Weather API credentials
- Development/production mode detection via `NODE_ENV`

### Replit Integration
- Configured with Replit-specific plugins for development
- Runtime error overlay for debugging
- Cartographer plugin for enhanced development experience

The application is structured as a monorepo with shared TypeScript types and schemas between frontend and backend, ensuring type safety across the full stack.