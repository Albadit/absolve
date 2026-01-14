/**
 * ABSOLVE - Image Configuration
 * ================================
 * All images used throughout the website are defined here.
 * Simply change the URLs below to update images across the entire site.
 * 
 * Recommended image sizes:
 * - Hero backgrounds: 2560x1440 or larger
 * - Gallery images: 1920x1080
 * - Lore images: 1920x1080
 * - Section backgrounds: 2560x1440
 */

export const IMAGES = {
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    background: "/bg_main.png",
  },

  // ============================================
  // LORE SECTION
  // ============================================
  lore: {
    // Parallax background behind lore cards
    background:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop",
    // Individual lore story images
    theFall:
      "/lore_absolve1.png",
    theCurse:
      "/lore_absolve2.png",
    theAbsolution:
      "/lore_absolve3.png",
  },

  // ============================================
  // GALLERY SECTION
  // ============================================
  gallery: {
    forsakenCathedral:
      "/gallery_absolve1.png",
    ancientBattlegrounds:
      "/gallery_absolve2.png",
    corruptedForest:
      "/gallery_absolve3.png",
    realmOfShadows:
      "/gallery_absolve4.png",
  },

  // ============================================
  // CTA SECTION
  // ============================================
  cta: {
    background:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
} as const;

// Type for type-safe access
export type ImageConfig = typeof IMAGES;
