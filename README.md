# ABSOLVE

A dark fantasy game landing page built with Next.js, featuring atmospheric animations, immersive storytelling, and a gothic aesthetic.

## 🎮 About

ABSOLVE is a landing page for a dark fantasy game set in a world abandoned by the gods. The site features:

- Immersive hero section with floating ember particles
- Dynamic features showcase with scroll animations
- Rich lore storytelling with parallax effects
- Interactive gallery with atmospheric transitions
- Audio ambience system for enhanced immersion
- Fully responsive design with mobile optimization

## 🚀 Tech Stack

- **Framework:** [Next.js 16.1.1](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript
- **Linting:** ESLint

## 📁 Project Structure

```
absolve/
├── frontend/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom CSS
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page
│   ├── components/
│   │   ├── AtmosphericDivider.tsx  # Animated section dividers
│   │   ├── AudioProvider.tsx       # Audio context and controls
│   │   ├── CTASection.tsx          # Call-to-action section
│   │   ├── FeaturesSection.tsx     # Game features showcase
│   │   ├── Footer.tsx              # Footer with links
│   │   ├── GallerySection.tsx      # Image gallery with animations
│   │   ├── HeroSection.tsx         # Hero section with particles
│   │   ├── LoreSection.tsx         # Lore/story content
│   │   └── Navigation.tsx          # Header navigation
│   ├── config/
│   │   ├── audio.ts             # Audio file configurations
│   │   ├── images.ts            # Image path configurations
│   │   └── links.ts             # Navigation and external links
│   ├── public/                  # Static assets (images, audio)
│   ├── next.config.ts           # Next.js configuration
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── tsconfig.json            # TypeScript configuration
│   └── package.json             # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/albadit/absolve.git
cd absolve
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Images

Update image paths in `frontend/config/images.ts` to customize visuals:

```typescript
export const IMAGES = {
  hero: {
    background: "/images/hero-bg.jpg",
    logo: "/images/logo.png",
  },
  // ... more configurations
};
```

### Links

Update navigation and social links in `frontend/config/links.ts`:

```typescript
export const LINKS = {
  cta: {
    preOrder: "https://store.steampowered.com/app/4232480/ABSOLVE/",
    // ... more links
  },
  // ... more configurations
};
```

### Audio

Configure ambient audio in `frontend/config/audio.ts`:

```typescript
export const AUDIO = {
  ambience: "/audio/dark-ambience.mp3",
  // ... more configurations
};
```

### Theme Colors

The project uses a custom dark fantasy color palette defined in Tailwind CSS:

- **ash-black** - Primary background
- **charcoal** - Secondary background
- **bone** - Primary text
- **gold** - Accent highlights
- **blood** - Danger/emphasis accents
