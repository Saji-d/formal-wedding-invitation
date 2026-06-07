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
        animate={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.8 }}
        onClick={toggleMute}
        className="p-2.5 rounded-full glass bg-white/5 backdrop-blur-sm border border-white/10 text-[var(--color-gold-400)]/60 shadow-sm transition-all duration-300"
        aria-label={isMuted ? "Unmute Music" : "Mute Music"}
      >
        {isMuted ? (
          <HiVolumeOff className="w-4 h-4" />
        ) : (
          <HiVolumeUp className="w-4 h-4" />
        )}
      </motion.button>
    </div>
  );
}
