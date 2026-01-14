/**
 * ABSOLVE - Audio Configuration
 * ================================
 * Configure all audio settings for the website here.
 */

export const AUDIO_CONFIG = {
  // ============================================
  // AUDIO FILES
  // ============================================
  
  // Main background music that plays on page load
  backgroundMusic: "/MainMenu_RageEternal.wav",

  // ============================================
  // DEFAULT SETTINGS
  // ============================================
  
  // Start unmuted (true = sound on by default)
  defaultUnmuted: true,

  // Default volume level (0.0 to 1.0)
  defaultVolume: 0.3,

  // Minimum volume (0.0 to 1.0)
  minVolume: 0,

  // Maximum volume (0.0 to 1.0)
  maxVolume: 1,

  // Volume step for slider
  volumeStep: 0.05,

  // Loop the background music
  loop: true,

  // ============================================
  // UI SETTINGS
  // ============================================
  
  // Show volume slider on hover
  showVolumeSlider: true,

} as const;

export type AudioConfig = typeof AUDIO_CONFIG;
