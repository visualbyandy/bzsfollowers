import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Heart, MessageCircle, Send, Bookmark, Smile, MoreHorizontal, 
  ChevronLeft, ChevronRight, Volume2 
} from 'lucide-react';
import { Post, Profile, Comment } from '../types';

interface PostModalProps {
  isOpen: boolean;
  post: Post | null;
  onClose: () => void;
  onToggleLike: (postId: string) => void;
  onToggleBookmark: (postId: string) => void;
  onAddComment: (postId: string, commentText: string) => void;
  profile: Profile;
  theme: 'light' | 'dark';
}

export function VerifiedBadge({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`text-[#0095f6] select-none ${className}`}
      aria-label="Verified"
    >
      <path d="M22.23 11.07c.1-.47.16-.95.17-1.43a2.76 2.76 0 0 0-2.31-2.82 5.07 5.07 0 0 1-3.23-1.85 2.76 2.76 0 0 0-3.35-.86 5.07 5.07 0 0 1-3.7-.01 2.76 2.76 0 0 0-3.37.84 5.07 5.07 0 0 1-3.24 1.83 2.76 2.76 0 0 0-2.3 2.84 5.06 5.06 0 0 1 .15 3.73v.1a2.76 2.76 0 0 0 2.29 2.84 5.07 5.07 0 0 1 3.24 1.83 2.76 2.76 0 0 0 3.37.84c1.23-.46 2.5-.47 3.7-.01a2.76 2.76 0 0 0 3.35-.86 5.07 5.07 0 0 1 3.23-1.85 2.76 2.76 0 0 0 2.31-2.82c.04-1.25.1-2.5.17-3.75zm-11.66 4l-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4-6 6z" />
    </svg>
  );
}

export default function PostModal({
  isOpen,
  post,
  onClose,
  onToggleLike,
  onToggleBookmark,
  onAddComment,
  profile,
  theme,
}: PostModalProps) {
  const [commentInput, setCommentInput] = useState('');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [showHeartPop, setShowHeartPop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const commentsEndRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIdx(0);
      setCommentInput('');
      setCopiedLink(false);
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, post]);

  // Auto scroll to bottom when new comment is added
  const scrollToBottom = () => {
    setTimeout(() => {
      commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (!isOpen || !post) return null;

  const bgStyle = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-zinc-900';
  const borderStyle = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';
  const secondaryBg = theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50';
  const textMuted = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500';

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    
    onAddComment(post.id, commentInput.trim());
    setCommentInput('');
    scrollToBottom();
  };

  const handleDoubleTap = () => {
    if (!post.isLikedByUser) {
      onToggleLike(post.id);
    }
    setShowHeartPop(true);
    setTimeout(() => setShowHeartPop(false), 800);
  };

  const handleImageClick = () => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      handleDoubleTap();
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
      }, 250); // double tap window
    }
  };

  const nextImage = () => {
    if (activeImageIdx < post.imageUrls.length - 1) {
      setActiveImageIdx(prev => prev + 1);
    }
  };

  const prevImage = () => {
    if (activeImageIdx > 0) {
      setActiveImageIdx(prev => prev - 1);
    }
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <AnimatePresence>
      <div 
        id="post-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-0 sm:p-4 animate-fade-in backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button Top Right (Desktop Only) */}
        <button 
          id="post-modal-close-desktop"
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-zinc-300 transition z-50 hidden sm:block"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Modal Container */}
        <div 
          id="post-modal-content"
          className={`relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] md:max-h-[850px] aspect-auto sm:aspect-[1.3/1] md:aspect-[1.5/1] ${bgStyle} sm:rounded-md overflow-hidden flex flex-col sm:flex-row shadow-2xl transition-all duration-300`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* MOBILE ONLY: HEADER */}
          <div className={`sm:hidden flex items-center justify-between p-3 border-b ${borderStyle}`}>
            <div className="flex items-center gap-2.5">
              <img
                src={profile.avatarUrl}
                alt={profile.fullName}
                className="w-8 h-8 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm tracking-tight">{profile.username}</span>
                  {profile.isVerified && <VerifiedBadge />}
                </div>
                {post.location && <span className="text-[11px] text-zinc-500">{post.location}</span>}
              </div>
            </div>
            <button id="post-modal-close-mobile" onClick={onClose} className="p-1 hover:bg-neutral-100 dark:hover:bg-zinc-900 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* LEFT MULTI-MEDIA / IMAGE SECTION */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-0 select-none">
            {/* Double Tap Heart Overlay */}
            <AnimatePresence>
              {showHeartPop && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 0.9, 1] }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute pointer-events-none z-30"
                >
                  <Heart className="w-24 h-24 text-red-500 fill-red-500 filter drop-shadow-lg" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Carousel Images Container */}
            <div 
              id="post-image-touch-zone"
              className="w-full h-full cursor-pointer flex items-center justify-center"
              onClick={handleImageClick}
            >
              <img
                src={post.imageUrls[activeImageIdx]}
                alt="Instagram Content Post"
                className="w-full h-full object-contain max-h-[450px] sm:max-h-full"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Video indicator badge (if type is video) */}
            {post.type === 'video' && (
              <div className="absolute bottom-4 right-4 p-1.5 rounded-full bg-black/60 text-white z-20">
                <Volume2 className="w-4 h-4" />
              </div>
            )}

            {/* Navigation Chevrons inside image */}
            {post.imageUrls.length > 1 && (
              <>
                {activeImageIdx > 0 && (
                  <button
                    id="post-carousel-prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white shadow hover:scale-105 active:scale-95 transition z-20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                {activeImageIdx < post.imageUrls.length - 1 && (
                  <button
                    id="post-carousel-next"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white shadow hover:scale-105 active:scale-95 transition z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                  {post.imageUrls.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeImageIdx ? 'bg-[#0095f6] scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RIGHT DETAILS / COMMENTS / ACTIONS COLUMN */}
          <div className={`w-full sm:w-[360px] md:w-[410px] flex flex-col justify-between ${borderStyle} sm:border-l`}>
            
            {/* DESKTOP ONLY: HEADER */}
            <div className={`hidden sm:flex items-center justify-between p-3.5 border-b ${borderStyle}`}>
              <div className="flex items-center gap-2.5">
                <div className="p-[1.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    className="w-8 h-8 rounded-full object-cover border border-white dark:border-black"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm tracking-tight hover:underline cursor-pointer">{profile.username}</span>
                    {profile.isVerified && <VerifiedBadge />}
                    <span className="text-zinc-400 text-xs">•</span>
                    <button className="text-sm font-bold text-[#0095f6] hover:text-blue-700 transition">Following</button>
                  </div>
                  {post.location && <span className="text-[11px] text-zinc-500 dark:text-zinc-400">{post.location}</span>}
                </div>
              </div>
              <button id="post-options-dropdown" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* SCROLLABLE COMMENTS AREA */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 max-h-[300px] sm:max-h-full">
              {/* Post Caption as first comment */}
              <div className="flex items-start gap-3">
                <img
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-sm">
                  <div className="flex items-center gap-1.5 inline-flex flex-wrap mr-1.5">
                    <span className="font-bold text-sm tracking-tight cursor-pointer hover:underline inline-block">{profile.username}</span>
                    {profile.isVerified && <VerifiedBadge />}
                  </div>
                  <span className="leading-relaxed break-words whitespace-pre-wrap">{post.caption}</span>
                  <div className={`text-[11px] ${textMuted} mt-1.5 flex items-center gap-3`}>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>

              {/* Comments list */}
              {post.comments.length === 0 ? (
                <div className="h-32 flex flex-col items-center justify-center text-center text-zinc-400 gap-1.5">
                  <MessageCircle className="w-8 h-8 stroke-[1px] text-zinc-300 dark:text-zinc-700" />
                  <p className="text-xs font-medium">No comments yet.</p>
                  <p className="text-[11px] text-zinc-500">Be the first to comment on this post!</p>
                </div>
              ) : (
                post.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-3 text-sm animate-fade-in">
                    <img
                      src={comment.avatarUrl}
                      alt={comment.username}
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 inline-flex flex-wrap mr-1.5">
                        <span className="font-bold tracking-tight hover:underline cursor-pointer">{comment.username}</span>
                        {comment.isVerified && <VerifiedBadge />}
                      </div>
                      <span className="leading-relaxed break-words">{comment.text}</span>
                      <div className={`text-[11px] ${textMuted} mt-1.5 flex items-center gap-3`}>
                        <span>{comment.timestamp}</span>
                        {comment.likes > 0 && <span>Likes: {comment.likes}</span>}
                        <button className="hover:text-zinc-900 dark:hover:text-zinc-200">Reply</button>
                      </div>
                    </div>
                    <button className="p-1 hover:text-red-500 transition text-zinc-400">
                      <Heart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
              <div ref={commentsEndRef} />
            </div>

            {/* ACTIONS BAR & METRICS */}
            <div className={`border-t ${borderStyle} p-3.5 space-y-2.5`}>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button 
                    id="post-modal-like-btn"
                    onClick={() => onToggleLike(post.id)}
                    className="hover:scale-110 active:scale-95 transition-transform"
                  >
                    <Heart 
                      className={`w-6.5 h-6.5 ${
                        post.isLikedByUser 
                          ? 'text-red-500 fill-red-500 stroke-red-500' 
                          : 'hover:text-zinc-500'
                      }`} 
                    />
                  </button>
                  <button 
                    id="post-modal-comment-trigger"
                    className="hover:scale-110 active:scale-95 transition-transform hover:text-zinc-500"
                  >
                    <MessageCircle className="w-6.5 h-6.5" />
                  </button>
                  <button 
                    id="post-modal-share-btn"
                    onClick={copyUrlToClipboard}
                    className="hover:scale-110 active:scale-95 transition-transform hover:text-zinc-500 relative"
                  >
                    <Send className="w-6.5 h-6.5" />
                    {copiedLink && (
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-30">
                        Link disalin!
                      </span>
                    )}
                  </button>
                </div>
                <button 
                  id="post-modal-bookmark-btn"
                  onClick={() => onToggleBookmark(post.id)}
                  className="hover:scale-110 active:scale-95 transition-transform"
                >
                  <Bookmark 
                    className={`w-6.5 h-6.5 ${
                      post.isBookmarkedByUser 
                        ? 'text-zinc-900 dark:text-white fill-zinc-900 dark:fill-white' 
                        : 'hover:text-zinc-500'
                    }`} 
                  />
                </button>
              </div>

              {/* Likes phrasing */}
              <div className="text-sm font-bold tracking-tight select-none">
                {post.likes.toLocaleString('en-US')} likes
              </div>

              {/* Date stamp */}
              <div className={`text-[10px] ${textMuted} uppercase tracking-wider`}>
                {post.timestamp}
              </div>
            </div>

            {/* ADD COMMENT INPUT FORM */}
            <form 
              onSubmit={handlePostComment}
              className={`hidden sm:flex items-center gap-3 border-t ${borderStyle} p-3.5`}
            >
              <button 
                type="button" 
                id="comment-emoji-btn"
                className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                <Smile className="w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-sm placeholder-zinc-400"
              />
              <button
                type="submit"
                id="comment-submit-btn"
                disabled={!commentInput.trim()}
                className={`text-sm font-bold transition duration-200 ${
                  commentInput.trim() 
                    ? 'text-[#0095f6] hover:text-sky-700 cursor-pointer' 
                    : 'text-sky-300 dark:text-sky-900/60 cursor-default'
                }`}
              >
                Post
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
