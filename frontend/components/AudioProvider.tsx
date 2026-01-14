"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { AUDIO_CONFIG } from "@/config/audio";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  isPlaying: boolean;
  volume: number;
  setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

interface AudioProviderProps {
  children: ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [isMuted, setIsMuted] = useState(!AUDIO_CONFIG.defaultUnmuted);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState<number>(AUDIO_CONFIG.defaultVolume);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAttemptRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio on mount and attempt autoplay
  useEffect(() => {
    audioRef.current = new Audio(AUDIO_CONFIG.backgroundMusic);
    audioRef.current.loop = AUDIO_CONFIG.loop;
    audioRef.current.volume = AUDIO_CONFIG.defaultVolume;

    // Attempt autoplay immediately and keep trying
    const attemptPlay = () => {
      if (!isMuted && audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            if (playAttemptRef.current) {
              clearInterval(playAttemptRef.current);
            }
          })
          .catch(() => {
            // Autoplay blocked, will retry
          });
      }
    };

    // Try immediately
    attemptPlay();
    
    // Keep trying every 500ms until it works
    playAttemptRef.current = setInterval(attemptPlay, 500);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (playAttemptRef.current) {
        clearInterval(playAttemptRef.current);
      }
    };
  }, []);

  // Handle user interaction to enable audio
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
      // Always try to play on any interaction if not muted and not playing
      if (!isMuted && audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            if (playAttemptRef.current) {
              clearInterval(playAttemptRef.current);
            }
          })
          .catch(() => {});
      }
    };

    // Listen for various interaction events
    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);
    document.addEventListener("mousemove", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
      document.removeEventListener("mousemove", handleFirstInteraction);
    };
  }, [hasInteracted, isMuted]);

  // Handle mute/unmute
  useEffect(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (hasInteracted) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isMuted, hasInteracted]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(
      AUDIO_CONFIG.minVolume,
      Math.min(AUDIO_CONFIG.maxVolume, newVolume)
    );
    setVolumeState(clampedVolume);
    // If volume > 0 and currently muted, unmute
    if (clampedVolume > 0 && isMuted) {
      setIsMuted(false);
    }
    // If volume = 0, mute
    if (clampedVolume === 0) {
      setIsMuted(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, isPlaying, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
}
