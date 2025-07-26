# Guido Huisman Personal Portfolio Website

## Overview

This is a personal portfolio website for Guido Huisman, a neuropharmacology researcher and business professional. The application is built as a full-stack web application using a modern React frontend with an Express.js backend, designed to showcase Guido's professional experience, publications, and educational background.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement and development middleware via Vite integration

### Data Storage Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but not currently connected)
- **Schema**: User table with basic authentication fields (id, username, password)
- **Migrations**: Drizzle Kit for schema migrations
- **Current Implementation**: Memory-based storage for development, easily swappable with database storage

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with smooth scrolling and active section tracking
2. **Hero Section**: Landing area with call-to-action buttons and social links
3. **About**: Professional background and multidisciplinary journey overview
4. **Publications**: Research publications with featured content and external links
5. **Experience**: Timeline-based professional experience display
6. **Education**: Academic qualifications and certifications
7. **Contact**: Contact form with toast notifications for user feedback
8. **Footer**: Site footer with social links and copyright information

### Backend Components
1. **Express Server**: Main application server with middleware for logging and error handling
2. **Route Registration**: Centralized route management system
3. **Storage Interface**: Abstracted storage layer supporting CRUD operations
4. **Development Tools**: Vite integration for hot reloading and development experience

### UI System
- **Design System**: Consistent component library using Shadcn/ui
- **Theme**: Royal purple color scheme with light/dark mode support
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Built on Radix UI primitives for accessibility compliance

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express server handles requests through registered routes
3. **Storage Operations**: Storage interface handles data persistence
4. **Response Handling**: Structured error handling and logging throughout the stack
5. **UI Updates**: React Query manages cache invalidation and UI state updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing library
- **class-variance-authority**: Type-safe component variants

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **cmdk**: Command menu component

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static files
2. **Backend Build**: esbuild bundles Express server for production
3. **Asset Optimization**: Vite handles asset optimization and code splitting

### Production Configuration
- **Static Serving**: Express serves built frontend assets
- **API Routes**: Backend handles API requests with proper error handling
- **Environment Variables**: Database configuration via environment variables
- **Process Management**: Single Node.js process serving both frontend and API

### Development Workflow
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **API Development**: Express server with automatic restart on backend changes
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Database Migrations**: Drizzle Kit handles schema changes and migrations

The architecture is designed to be scalable and maintainable, with clear separation of concerns between the frontend presentation layer, backend API layer, and data persistence layer. The storage interface allows for easy migration from in-memory storage to PostgreSQL when needed.