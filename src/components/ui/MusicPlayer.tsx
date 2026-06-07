"use client";

import { useState, useEffect, useRef } from "react";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { weddingConfig } from "@/config/wedding";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(weddingConfig.music.url);
    audioRef.current.loop = true;

    // We can't autoplay without user interaction in most modern browsers,
    // so we just prepare it. The OpeningScreen will handle the initial play.
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Expose play function to window for the OpeningScreen to call
  useEffect(() => {
    (window as any).playWeddingMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log("Audio play failed:", e));
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.log("Audio play failed:", e));
      }
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass bg-opacity-80 text-[var(--color-gold-400)] shadow-lg hover:bg-opacity-100 transition-all duration-300"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <HiVolumeUp className="w-6 h-6 animate-pulse" />
      ) : (
        <HiVolumeOff className="w-6 h-6" />
      )}
    </button>
  );
}
