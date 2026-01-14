export const LINKS = {
  // Navigation links
  navigation: {
    home: "#home",
    features: "#features",
    lore: "#lore",
    gallery: "#gallery",
  },
  
  // CTA links
  cta: {
    preOrder: "https://store.steampowered.com/app/4232480/ABSLVE/",
    beginJourney: "#",
    watchTrailer: "#",
  },
  
  // Social media links (add your actual URLs here)
  social: {
    twitter: "#",
    discord: "#",
    youtube: "#",
    steam: "#",
  },
  
  // External links
  external: {
    support: "#",
    pressKit: "#",
    careers: "#",
    privacyPolicy: "#",
    termsOfService: "#",
  },
  
  // Social media links
  socialMedia: {
    twitter: "#",
    youtube: "#",
    instagram: "#",
    twitch: "#",
  },
} as const;

export const NAV_LINKS = [
  { name: "Home", href: LINKS.navigation.home },
  { name: "Features", href: LINKS.navigation.features },
  { name: "Lore", href: LINKS.navigation.lore },
  { name: "Gallery", href: LINKS.navigation.gallery },
] as const;

export const FOOTER_LINKS = [
  { name: "Privacy Policy", href: LINKS.external.privacyPolicy },
  { name: "Terms of Service", href: LINKS.external.termsOfService },
  { name: "Press Kit", href: LINKS.external.pressKit },
  { name: "Support", href: LINKS.external.support },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: LINKS.socialMedia.twitter },
  { name: "YouTube", href: LINKS.socialMedia.youtube },
  { name: "Instagram", href: LINKS.socialMedia.instagram },
  { name: "Twitch", href: LINKS.socialMedia.twitch },
] as const;
