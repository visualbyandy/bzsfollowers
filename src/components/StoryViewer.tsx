import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { StoryElement } from '../types';

interface StoryViewerProps {
  isOpen: boolean;
  stories: StoryElement[];
  onClose: () => void;
  profileName: string;
  profileAvatar: string;
}

export default function StoryViewer({
  isOpen,
  stories,
  onClose,
  profileName,
  profileAvatar,
}: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressInterval = useRef<number | null>(null);
  const startTime = useRef<number>(Date.now());
  const elapsedBeforePause = useRef<number>(0);
  const STORY_DURATION = 5000; // 5 seconds per story

  // Reset index when stories change or reopening
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setProgress(0);
      setIsPaused(false);
      startTime.current = Date.now();
      elapsedBeforePause.current = 0;
    }
  }, [isOpen, stories]);

  // Handle progress timer
  useEffect(() => {
    if (!isOpen || stories.length === 0 || isPaused) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      return;
    }

    startTime.current = Date.now() - elapsedBeforePause.current;

    progressInterval.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const currentProgress = Math.min((elapsed / STORY_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        // Time is up, move next
        handleNext();
      }
    }, 30);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isOpen, currentIndex, isPaused, stories]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
      elapsedBeforePause.current = 0;
      startTime.current = Date.now();
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
      elapsedBeforePause.current = 0;
      startTime.current = Date.now();
    } else {
      // Restart current story if it is the first one
      setProgress(0);
      elapsedBeforePause.current = 0;
      startTime.current = Date.now();
    }
  };

  const handleMouseDown = () => {
    setIsPaused(true);
    elapsedBeforePause.current = Date.now() - startTime.current;
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  if (!isOpen || stories.length === 0) return null;

  const currentStory = stories[currentIndex];

  return (
    <AnimatePresence>
      <div 
        id="story-viewer-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 text-white select-none backdrop-blur-md"
      >
        {/* Background Blur Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-125"
          style={{ backgroundImage: `url(${currentStory.mediaUrl})` }}
        />

        {/* Outer close target */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-md h-[100dvh] md:h-[85vh] md:max-h-[850px] bg-black md:rounded-xl overflow-hidden flex flex-col justify-between shadow-2xl border border-zinc-800">
          
          {/* Header overlay for stories controls */}
          <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-3 z-20 flex flex-col gap-2">
            
            {/* Story Progress Indicators */}
            <div className="flex gap-1 w-full">
              {stories.map((story, idx) => {
                let width = '0%';
                if (idx < currentIndex) width = '100%';
                else if (idx === currentIndex) width = `${progress}%`;

                return (
                  <div key={story.id} className="h-0.5 bg-white/30 rounded-full flex-1 overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-30.5 ease-linear"
                      style={{ width }}
                    />
                  </div>
                );
              })}
            </div>

            {/* User Info and Controls */}
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center gap-2">
                <div className="p-[1.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <img
                    src={profileAvatar}
                    alt={profileName}
                    className="w-8 h-8 rounded-full border border-black object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-semibold text-sm">{profileName}</span>
                <span className="text-xs text-white/60">5h ago</span>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  id="story-pause-btn"
                  onClick={() => setIsPaused((prev) => !prev)} 
                  className="hover:scale-110 active:scale-95 transition-transform text-white"
                >
                  {isPaused ? <Play className="w-5 h-5 fill-white" /> : <Pause className="w-5 h-5 fill-white" />}
                </button>
                <button 
                  id="story-close-btn"
                  onClick={onClose} 
                  className="hover:scale-105 active:scale-95 transition-transform text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigasi Kiri / Kanan Screen Segment */}
          <div className="absolute inset-0 flex z-10">
            {/* Left Portion for backward navigation */}
            <div 
              id="story-nav-prev-tap"
              className="w-1/3 h-full cursor-pointer" 
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            />
            {/* Middle and Right Portion for forward navigation */}
            <div 
              id="story-nav-next-tap"
              className="w-2/3 h-full cursor-pointer" 
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            />
          </div>

          {/* Desktop Left/Right Click Chevrons */}
          <button
            id="story-chevron-prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 hover:scale-105 active:scale-95 transition text-white hidden md:flex items-center justify-center pointer-events-auto z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="story-chevron-next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 hover:scale-105 active:scale-95 transition text-white hidden md:flex items-center justify-center pointer-events-auto z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Center Story Content (Media Image) */}
          <div className="flex-1 w-full h-full flex items-center justify-center bg-neutral-950">
            <motion.img
              key={currentStory.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={currentStory.mediaUrl}
              alt="Story Content"
              className="w-full h-full object-contain pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Footer input (Like authentic Instagram Story reply input) */}
          <div className="relative z-20 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center gap-3">
            <input 
              type="text" 
              placeholder={`Reply to ${profileName}...`}
              className="flex-1 bg-transparent border border-white/40 hover:border-white/70 focus:border-white text-sm rounded-full py-2 px-4 outline-none transition text-white placeholder-white/60"
              onClick={(e) => e.stopPropagation()}
              onFocus={handleMouseDown}
              onBlur={handleMouseUp}
              onChange={(e) => e.stopPropagation()}
            />
            <button 
              id="story-heart-btn"
              className="hover:scale-110 active:scale-90 transition-transform p-1 text-white" 
              onClick={(e) => {
                e.stopPropagation();
                // Play tiny heart burst
              }}
            >
              ❤️
            </button>
            <button 
              id="story-send-btn"
              className="hover:scale-110 active:scale-90 transition-transform p-1 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              ✈️
            </button>
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
}
