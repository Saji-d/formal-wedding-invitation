"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio and load preferences
  useEffect(() => {
    const savedMuteStatus = localStorage.getItem("music_muted");

    const audio = new Audio(weddingConfig.music.url);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    if (savedMuteStatus === "true") {
      audio.muted = true;
      setIsMuted(true);
    }

    // Handle global play trigger from OpeningScreen
    (window as any).startWeddingMusic = () => {
      handlePlay();
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      delete (window as any).startWeddingMusic;
    };
  }, []);

  const handlePlay = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Playback failed or blocked:", error);
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    const newMuteStatus = !isMuted;
    audioRef.current.muted = newMuteStatus;
    setIsMuted(newMuteStatus);
    localStorage.setItem("music_muted", String(newMuteStatus));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isMuted ? 0.4 : 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMute}
        className={`
          w-10 h-10 flex items-center justify-center rounded-full 
          bg-black/20 backdrop-blur-md border border-white/10 
          shadow-lg transition-all duration-300
          ${isMuted ? 'text-white/40' : 'text-[var(--color-gold-400)]'}
        `}
        aria-label={isMuted ? "Unmute Music" : "Mute Music"}
      >
        {isMuted ? (
          <HiVolumeOff className="w-5 h-5" />
        ) : (
          <HiVolumeUp className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}
