import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume] = useState(0.5);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  // Attempt initial autoplay or listen to user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch(() => {
            // Autoplay blocked until direct button click
          });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch((err) => console.error("Audio playback error:", err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/background.mp3"
        preload="auto"
        loop
      />

      {/* Floating Audio Controller */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#111111]/90 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-[#F2F2F2] transition-all duration-300 hover:border-[#DCFF00]/40 group">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc nền"}
          className="w-8 h-8 rounded-full bg-[#DCFF00] text-[#0A0A0A] flex items-center justify-center font-bold hover:bg-[#c9ea00] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DCFF00]"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Audio Wave / Track Indicator */}
        <div className="flex items-center gap-1.5 px-1 cursor-pointer" onClick={togglePlay}>
          <div className="flex items-end gap-[3px] h-4">
            <span
              className={`w-[2.5px] rounded-full bg-[#DCFF00] transition-all ${
                isPlaying ? 'animate-pulse h-3.5' : 'h-1.5 opacity-40'
              }`}
            />
            <span
              className={`w-[2.5px] rounded-full bg-[#DCFF00] transition-all ${
                isPlaying ? 'animate-bounce h-4' : 'h-2 opacity-40'
              }`}
              style={{ animationDelay: '150ms' }}
            />
            <span
              className={`w-[2.5px] rounded-full bg-[#DCFF00] transition-all ${
                isPlaying ? 'animate-pulse h-2.5' : 'h-1 opacity-40'
              }`}
              style={{ animationDelay: '300ms' }}
            />
          </div>
          <span className="text-xs font-medium tracking-wide text-[#E8E8E8] hidden sm:inline select-none pl-1">
            {isPlaying ? 'Nhạc nền đang phát' : 'Phát âm thanh'}
          </span>
        </div>

        {/* Mute Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Bật âm thanh" : "Tắt tiếng"}
          className="text-[#83837D] hover:text-white p-1 rounded-full transition-colors ml-1"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </>
  );
};
