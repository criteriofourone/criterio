# Criterio Four One Solutions

## Overview

This is an affiliate marketing platform for business education courses targeting Spanish-speaking entrepreneurs, primarily in the Dominican Republic. The application showcases curated courses from Hotmart with detailed analysis including learning points, ideal profiles, pros/cons, and certification information. The site features a professional, elegant design with smooth animations and SEO optimization for the business education niche.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (New York style variant) built on Radix UI primitives
- **Animations**: Framer Motion for scroll animations and entry effects
- **Fonts**: Playfair Display (serif headings) and Inter (sans-serif body text)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type-safe validation
- **Build Tool**: esbuild for server bundling, Vite for client bundling

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL schema definitions
- **Schema Validation**: drizzle-zod for generating Zod schemas from database tables
- **Current Storage**: In-memory storage (`MemStorage` class) with PostgreSQL schema ready for database migration
- **Tables**: `courses` (affiliate course listings) and `faqs` (frequently asked questions)

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/      # UI components (Header, Footer, CourseCard)
│   ├── components/ui/   # shadcn/ui primitives
│   ├── hooks/           # Custom React hooks (use-content, use-toast)
│   ├── pages/           # Page components (Home, not-found)
│   └── lib/             # Utilities (queryClient, cn helper)
├── server/              # Express backend
│   ├── routes.ts        # API route handlers
│   ├── storage.ts       # Data access layer
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared code between client/server
│   ├── schema.ts        # Drizzle database schemas
│   └── routes.ts        # API route definitions with Zod schemas
└── script/              # Build scripts
```

### Key Design Patterns
- **Shared Types**: Database schemas and API route definitions are shared between frontend and backend via the `shared/` directory
- **Type-Safe API**: Zod schemas validate both API responses and provide TypeScript types
- **Component Composition**: UI built from composable shadcn/ui primitives with Radix UI accessibility
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

## External Dependencies

### Third-Party Services
- **Hotmart**: Affiliate platform for course links (courses link to `go.hotmart.com`)
- **Google Fonts**: Playfair Display and Inter font families

### Database
- **PostgreSQL**: Schema defined via Drizzle ORM (requires `DATABASE_URL` environment variable when database is connected)
- **Drizzle Kit**: Database push with `npm run db:push`

### Key NPM Packages
- `express`: HTTP server framework
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `@tanstack/react-query`: Async state management
- `framer-motion`: Animation library
- `wouter`: Client-side routing
- `zod`: Runtime type validation
- Radix UI primitives: Accessible component foundations

### Development Tools
- `vite`: Frontend dev server and bundler
- `tsx`: TypeScript execution for development
- `esbuild`: Production server bundling
- `@replit/vite-plugin-*`: Replit-specific development enhancements