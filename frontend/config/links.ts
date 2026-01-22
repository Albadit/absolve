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
    beginJourney: "https://store.steampowered.com/app/4232480/ABSLVE/",
    watchTrailer: "#",
  },
  
  // Social media links (add your actual URLs here)
  social: {
    twitter: "#",
    discord: "#",
    twitch: "#",
    youtube: "https://www.youtube.com/@PeanutsStudios",
    steam: "https://store.steampowered.com/app/4232480/ABSLVE/",
    instagram: "https://www.instagram.com/official_peanuts_studio/",
    tiktok: "https://www.tiktok.com/@officialpeanutsstudio",
    itchio: "#",
  },
  
  // External links
  external: {
    support: "#",
    pressKit: "#",
    careers: "#",
    privacyPolicy: "#",
    termsOfService: "#",
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
  { name: "Twitter", href: LINKS.social.twitter },
  { name: "YouTube", href: LINKS.social.youtube },
  { name: "Instagram", href: LINKS.social.instagram },
  { name: "Twitch", href: LINKS.social.twitch },
  { name: "TikTok", href: LINKS.social.tiktok },
  { name: "Itch.io", href: LINKS.social.itchio },
] as const;
