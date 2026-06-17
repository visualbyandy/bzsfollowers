import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Grid, Bookmark, Tv, Award, ExternalLink, Settings, Heart, MessageCircle, 
  PlusSquare, Compass, Home, Send, Heart as IconHeart, Sliders, Menu, ChevronDown, Check
} from 'lucide-react';
import { Profile, Post, Highlight, ProfilePersona, StoryElement } from './types';
import { PERSONAS } from './data';
import StoryViewer from './components/StoryViewer';
import PostModal, { VerifiedBadge } from './components/PostModal';

export default function App() {
  const LOCKED_USERNAME = 'bzs.followers';
  const LOCKED_BIO = 'Since 2021 ✨\nPayment: Paypal / Wise / Crypto 💵\nGuaranteed\nFor More Info / Order Click Link Whatsapp In Below 👇🏻';

  // Config state
  const [currentPersona, setCurrentPersona] = useState<ProfilePersona>(PERSONAS[0]);
  const [profile, setProfile] = useState<Profile>({
    ...PERSONAS[0].profile,
    username: LOCKED_USERNAME,
    bio: LOCKED_BIO
  });
  const [posts, setPosts] = useState<Post[]>(currentPersona.posts);
  const [highlights, setHighlights] = useState<Highlight[]>(currentPersona.highlights);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Interface view triggers
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeStoryGroup, setActiveStoryGroup] = useState<StoryElement[] | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'saved' | 'tagged'>('posts');
  const [isFollowing, setIsFollowing] = useState(true);

  // Saved bookmarks state
  const [savedPostIds, setSavedPostIds] = useState<string[]>([]);


  // Setup initial HTML theme class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#000000';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafafa';
    }
  }, [theme]);

  // Handler: Toggle Likes
  const handleToggleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.isLikedByUser;
          return {
            ...post,
            isLikedByUser: isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );

    // Sync selected post modal view
    setSelectedPost((prev) => {
      if (prev && prev.id === postId) {
        const isLiked = !prev.isLikedByUser;
        return {
          ...prev,
          isLikedByUser: isLiked,
          likes: isLiked ? prev.likes + 1 : prev.likes - 1,
        };
      }
      return prev;
    });
  };

  // Handler: Toggle Bookmarks
  const handleToggleBookmark = (postId: string) => {
    let updatedSaved: string[];
    if (savedPostIds.includes(postId)) {
      updatedSaved = savedPostIds.filter((id) => id !== postId);
    } else {
      updatedSaved = [...savedPostIds, postId];
    }
    setSavedPostIds(updatedSaved);

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isBookmarkedByUser: !post.isBookmarkedByUser,
          };
        }
        return post;
      })
    );

    setSelectedPost((prev) => {
      if (prev && prev.id === postId) {
        return {
          ...prev,
          isBookmarkedByUser: !prev.isBookmarkedByUser,
        };
      }
      return prev;
    });
  };

  // Handler: Comment Append
  const handleAddComment = (postId: string, commentText: string) => {
    const newComment = {
      id: `comment_${Date.now()}`,
      username: 'anda.pengunjung',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
      text: commentText,
      timestamp: 'Baru saja',
      likes: 0,
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );

    setSelectedPost((prev) => {
      if (prev && prev.id === postId) {
        return {
          ...prev,
          comments: [...prev.comments, newComment],
        };
      }
      return prev;
    });
  };


  // Calculate follow adjustment
  const followersDisplayCount = isFollowing 
    ? profile.followersCount 
    : profile.followersCount - 1;

  // Format large values (e.g. 116000 -> 116K)
  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (count >= 10000) {
      return (count / 1000).toFixed(0) + 'K';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return count.toLocaleString();
  };

  // Toggle Main Follow State
  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  // Filter lists based on selected tabs
  const filteredPosts = () => {
    switch (activeTab) {
      case 'reels':
        return posts.filter((p) => p.type === 'video');
      case 'saved':
        return posts.filter((p) => savedPostIds.includes(p.id));
      case 'tagged':
        // Mock empty tagged posts or return 1 tagged
        return posts.length > 0 ? [posts[posts.length - 1]] : [];
      case 'posts':
      default:
        return posts;
    }
  };

  // Standard theme definitions
  const pageBg = 'bg-[#ffffff] text-[#111111]';
  const navBg = 'bg-white/95 border-gray-100';
  const cardBg = 'bg-white border-gray-100';
  const borderStyle = 'border-gray-100';
  const textMuted = 'text-zinc-500';

  // Trigger personal intro story if clicking profile picture
  const handleProfilePicClick = () => {
    // Generate simple custom story introducing themselves
    const personalStories: StoryElement[] = [
      { id: 'p_s1', mediaUrl: profile.avatarUrl, type: 'image' },
      { id: 'p_s2', mediaUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=1400&fit=crop&q=80', type: 'image' }
    ];
    setActiveStoryGroup(personalStories);
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden font-sans ${pageBg} transition-colors duration-300 pb-16`}>
      
      {/* 1. TOP AUTENTIC INSTAGRAM NAVBAR */}
      <nav className={`sticky top-0 z-30 w-full h-16 border-b ${navBg} backdrop-blur-md select-none`}>
        <div className="max-w-4xl h-full mx-auto px-4 flex items-center justify-between">
          {/* Logo / Title Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setActiveTab('posts')}>
            <span className="font-sf font-semibold text-lg tracking-tight select-none">
              {profile.username}
            </span>
            {profile.isVerified && <VerifiedBadge className="w-4 h-4 shrink-0" />}
          </div>

          {/* Center Search Input (Responsive mock) */}
          <div className="hidden sm:block relative w-64">
            <input 
              type="text" 
              placeholder="Search"
              className={`w-full px-4 py-2 text-sm rounded-lg outline-none border focus:ring-1 focus:ring-zinc-400 transition-all ${
                theme === 'dark' 
                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500' 
                  : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>

          {/* Navigation Action Icons */}
          <div className="flex items-center gap-6 text-zinc-900 dark:text-zinc-100">
            <button id="nav-btn-home" className="hover:opacity-72 transition" onClick={() => setActiveTab('posts')}>
              <Home className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <button id="nav-btn-dm" className="hover:opacity-72 transition relative">
              <Send className="w-5 h-5 stroke-[1.5px]" />
              <span className="absolute -top-1 -right-1 bg-zinc-900 dark:bg-white text-[8px] text-white dark:text-black font-semibold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button 
              id="nav-btn-create" 
              className="hover:opacity-72 transition"
            >
              <PlusSquare className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <button id="nav-btn-compass" className="hover:opacity-72 transition hidden sm:block">
              <Compass className="w-5 h-5 stroke-[1.5px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. PROFILE LANDING PAGE BODY */}
      <main className="max-w-[935px] mx-auto px-4 pt-6 md:pt-10">
        
        {/* DESKTOP LAYOUT HEADER */}
        <header className="hidden sm:flex flex-row gap-5 md:gap-10 items-start border-b pb-8 md:pb-11 border-zinc-200 dark:border-zinc-800">
          
          {/* Avatar Area with story ring disabled */}
          <div className="flex-shrink-0 relative select-none">
            <div 
              id="profile-avatar-touch"
              className="p-[3px] rounded-full bg-transparent border border-zinc-200 dark:border-zinc-850 transition duration-300 relative select-none"
            >
              <div className="p-0.5 rounded-full bg-white dark:bg-black">
                <img
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  className="w-[150px] h-[150px] rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Profile Description Texts Column */}
          <div className="flex-1 space-y-2.5 w-full text-left select-text">
            
            {/* Top row: Username, verification check, action buttons */}
            <div className="flex flex-row sm:items-center gap-3 md:gap-5 justify-start">
              <div className="flex items-center justify-start gap-3">
                <h1 className="font-sf font-semibold text-2xl tracking-normal select-all">{profile.username}</h1>
                {profile.isVerified && <VerifiedBadge className="w-5 h-5 shrink-0" />}
              </div>

              {/* Action indicators */}
              <div className="flex flex-wrap items-center justify-start gap-2 mt-0">
                <button
                  id="profile-action-follow"
                  onClick={handleFollowClick}
                  className={`px-5 py-2 text-xs font-sf font-semibold rounded-lg transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                    isFollowing 
                      ? theme === 'dark' ? 'bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800' : 'bg-gray-100 text-zinc-800 hover:bg-gray-200/80'
                      : 'bg-[#0095f6] hover:bg-sky-600 text-white rounded font-bold shadow-sm'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button 
                  id="profile-action-message"
                  className={`px-4 py-2 text-xs font-sf font-medium rounded-lg border transition-all duration-200 ${
                    theme === 'dark' 
                      ? 'bg-transparent border-zinc-800 hover:bg-zinc-900' 
                      : 'bg-transparent border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  Message
                </button>
              </div>
            </div>

            {/* Middle row: Stats counts (Post, Followers, Following) - Desktop visible */}
            <div className="flex gap-10 text-[15px] select-none text-zinc-700 dark:text-zinc-800">
              <div>
                <strong className="font-sf font-semibold text-black dark:text-black">{posts?.length ?? 0}</strong> posts
              </div>
              <div 
                id="stat-followers-desktop"
                className="cursor-pointer hover:underline" 
                onClick={() => {
                  setProfile((prev) => ({ ...prev, followersCount: (prev.followersCount ?? 0) + 100 }));
                }}
              >
                <strong className="font-sf font-semibold text-black dark:text-black">{formatFollowers(followersDisplayCount ?? 0)}</strong> followers
              </div>
              <div>
                <strong className="font-sf font-semibold text-black dark:text-black">{(profile?.followingCount ?? 0).toLocaleString()}</strong> following
              </div>
            </div>

            {/* Bottom row: Full biography section */}
            <div className="space-y-0.5 block max-w-lg mx-0 text-[14px]">
              <h2 className="font-semibold text-black dark:text-black text-base tracking-tight">{profile.fullName}</h2>
              {profile.category && (
                <p className={`${textMuted} text-xs font-medium tracking-wide uppercase`}>{profile.category}</p>
              )}
              {/* Supporting multi lines description */}
              <p className="font-sf font-normal text-zinc-650 dark:text-zinc-350 leading-relaxed whitespace-pre-wrap">{profile.bio}</p>
              
              {/* Profile Link website */}
              {profile.website && (
                <div className="pt-1.5">
                  <a 
                    id="profile-website-link"
                    href={profile.website} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-semibold text-zinc-805 dark:text-zinc-350 hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{profile.website.replace(/(^\w+:|^)\/\//, '')}</span>
                  </a>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* MOBILE LAYOUT HEADER */}
        <header className="flex sm:hidden flex-col gap-2.5 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          
          {/* Top segment: Avatar circular story and stats horizontal counts */}
          <div className="flex items-center gap-4 w-full px-1">
            {/* Avatar on Left (Story ring disabled) */}
            <div className="flex-shrink-0 select-none">
              <div 
                id="profile-avatar-touch-mobile"
                className="p-[3px] rounded-full bg-transparent border border-zinc-200 dark:border-zinc-850 transition duration-300 relative select-none"
              >
                <div className="p-0.5 rounded-full bg-white dark:bg-black">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    className="w-[77px] h-[77px] rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Stats count table on Right */}
            <div className="flex-1 flex justify-around text-center select-none text-zinc-700 dark:text-zinc-800">
              <div className="flex flex-col">
                <span className="font-sf font-semibold text-black dark:text-black text-base leading-tight">{posts?.length ?? 0}</span>
                <span className="text-[12px] text-zinc-500 dark:text-zinc-500">posts</span>
              </div>
              <div 
                id="stat-followers-mobile-count"
                className="flex flex-col cursor-pointer active:scale-95 transition-transform" 
                onClick={() => {
                  setProfile((prev) => ({ ...prev, followersCount: (prev.followersCount ?? 0) + 100 }));
                }}
              >
                <span className="font-sf font-semibold text-black dark:text-black text-base leading-tight">
                  {formatFollowers(followersDisplayCount ?? 0)}
                </span>
                <span className="text-[12px] text-zinc-500 dark:text-zinc-500">followers</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sf font-semibold text-black dark:text-black text-base leading-tight">
                  {(profile?.followingCount ?? 0).toLocaleString()}
                </span>
                <span className="text-[12px] text-zinc-500 dark:text-zinc-500">following</span>
              </div>
            </div>
          </div>

          {/* Biography details segment */}
          <div className="px-1 space-y-0.5 block text-[14px]">
            <h2 className="font-semibold text-black dark:text-black text-base tracking-tight">{profile.fullName}</h2>
            {profile.category && (
              <p className={`${textMuted} text-xs font-semibold tracking-wide uppercase`}>{profile.category}</p>
            )}
            <p className="font-sf font-normal text-zinc-650 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">{profile.bio}</p>
            
            {profile.website && (
              <div className="pt-1">
                <a 
                  id="profile-website-link-mobile"
                  href={profile.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-semibold text-zinc-805 dark:text-zinc-350 hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{profile.website.replace(/(^\w+:|^)\/\//, '')}</span>
                </a>
              </div>
            )}
          </div>

          {/* Button actions for mobile (aligned horizontally, spanning full-width elegantly) */}
          <div className="px-1 flex items-center gap-2 w-full mt-1">
            <button
              id="profile-action-follow-mobile"
              onClick={handleFollowClick}
              className={`flex-1 py-1.5 text-xs font-sf font-semibold rounded-lg transition-all duration-200 active:scale-[0.98] cursor-pointer text-center ${
                isFollowing 
                  ? theme === 'dark' ? 'bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800' : 'bg-gray-100 text-zinc-800 hover:bg-gray-200/80'
                  : 'bg-[#0095f6] hover:bg-sky-600 text-white shadow-sm'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button 
              id="profile-action-message-mobile"
              className={`flex-1 py-1.5 text-xs font-sf font-semibold rounded-lg border transition-all duration-200 text-center ${
                theme === 'dark' 
                  ? 'bg-transparent border-zinc-800 hover:bg-zinc-900' 
                  : 'bg-transparent border-gray-100 hover:bg-gray-50'
              }`}
            >
              Message
            </button>
          </div>

        </header>

        {/* 3. STORIES HIGHLIGHTS ROW */}
        {highlights.length > 0 && (
          <div id="highlights-container" className="py-7 flex gap-4 md:gap-7 overflow-x-auto select-none no-scrollbar">
            {highlights.map((highlight) => (
              <button
                key={highlight.id}
                id={`highlight-btn-${highlight.id}`}
                onClick={() => setActiveStoryGroup(highlight.stories)}
                className="flex flex-col items-center shrink-0 gap-1.5 focus:outline-none hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <div className="rounded-full overflow-hidden">
                   <img
                     src={highlight.coverUrl}
                     alt={highlight.title}
                     className="w-14 h-14 md:w-18 md:h-18 rounded-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <span className="text-xs font-semibold tracking-tight text-center truncate max-w-[70px] md:max-w-[85px]">
                  {highlight.title}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* 4. POST NAVIGATION TABS */}
        <div className={`flex items-center border-t select-none gap-0 sm:gap-12 md:gap-16 ${borderStyle} w-full mx-auto`}>
          <button
            id="tab-posts-trigger"
            onClick={() => setActiveTab('posts')}
            className={`py-3.5 sm:py-4 flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase border-t -mt-[1px] transition-all duration-200 ${
              activeTab === 'posts' 
                ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' 
                : 'border-transparent text-gray-400 dark:text-zinc-600 hover:text-zinc-650'
            }`}
          >
            <Grid className="w-3.5 h-3.5 shrink-0" />
            <span>POSTS</span>
          </button>

          <button
            id="tab-reels-trigger"
            onClick={() => setActiveTab('reels')}
            className={`py-3.5 sm:py-4 flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase border-t -mt-[1px] transition-all duration-200 ${
              activeTab === 'reels' 
                ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' 
                : 'border-transparent text-gray-400 dark:text-zinc-600 hover:text-zinc-650'
            }`}
          >
            <Tv className="w-3.5 h-3.5 shrink-0" />
            <span>REELS</span>
          </button>

          <button
            id="tab-saved-trigger"
            onClick={() => setActiveTab('saved')}
            className={`py-3.5 sm:py-4 flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase border-t -mt-[1px] transition-all duration-200 ${
              activeTab === 'saved' 
                ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' 
                : 'border-transparent text-gray-400 dark:text-zinc-600 hover:text-zinc-650'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 shrink-0" />
            <span>SAVED<span className="hidden sm:inline"> ({savedPostIds.length})</span></span>
          </button>

          <button
            id="tab-tagged-trigger"
            onClick={() => setActiveTab('tagged')}
            className={`py-3.5 sm:py-4 flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase border-t -mt-[1px] transition-all duration-200 ${
              activeTab === 'tagged' 
                ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white' 
                : 'border-transparent text-gray-400 dark:text-zinc-600 hover:text-zinc-650'
            }`}
          >
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>TAGGED</span>
          </button>
        </div>

        {/* 5. DYNAMIC GRID OF POSTINGANS */}
        <div id="posts-grid-container" className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-7 mt-4 justify-items-center">
          {filteredPosts().length === 0 ? (
            <div className="col-span-3 h-64 flex flex-col items-center justify-center text-center p-6 gap-2 text-zinc-400">
              <PlusSquare className="w-12 h-12 stroke-[1px] text-zinc-300 dark:text-zinc-800" />
              <p className="font-bold text-zinc-700 dark:text-zinc-300 text-sm capitalize">No Posts Yet</p>
              <p className="text-xs font-normal max-w-[270px]">This tab category is empty. You can add new posts through the customization panel!</p>
            </div>
          ) : (
            filteredPosts().map((post) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={post.id}
                id={`grid-post-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="relative group overflow-hidden bg-zinc-900 rounded-sm shadow-inner cursor-pointer select-none border border-white"
                style={{ width: '3.3cm', height: '4.35cm' }}
              >
                <img
                  src={post.imageUrls[0]}
                  alt="Grid item image view"
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Video Indicator Badge */}
                {post.type === 'video' && (
                  <div className="absolute top-2.5 right-2.5 z-10 text-white drop-shadow-md">
                    <Tv className="w-4 h-4" />
                  </div>
                )}

                {/* Carousel Indicator Badge */}
                {post.type === 'carousel' && (
                  <div className="absolute top-2.5 right-2.5 z-10 text-white drop-shadow-md">
                    <PlusSquare className="w-4 h-4" />
                  </div>
                )}

                {/* Overlay on hover: likes & comment metrics */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-150 flex items-center justify-center gap-6 text-white font-bold text-sm sm:text-base">
                  <div className="flex items-center gap-1.5 hover:scale-110 transition">
                    <IconHeart className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                    <span>{post.likes.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:scale-110 transition">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

      </main>

      {/* 6. MODUL POPUPS */}
      
      {/* Story Viewer immersive modal */}
      <StoryViewer
        isOpen={activeStoryGroup !== null}
        stories={activeStoryGroup || []}
        onClose={() => setActiveStoryGroup(null)}
        profileName={profile.username}
        profileAvatar={profile.avatarUrl}
      />

      {/* Post Detail interactive modal */}
      <PostModal
        isOpen={selectedPost !== null}
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onToggleLike={handleToggleLike}
        onToggleBookmark={handleToggleBookmark}
        onAddComment={handleAddComment}
        profile={profile}
        theme={theme}
      />

      {/* Tiny static footer */}
      <footer className={`mt-20 py-8 text-center text-[10px] font-normal tracking-wider ${textMuted} border-t ${borderStyle}`}>
        <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5 mb-3 select-none uppercase max-w-full px-4 text-[9.5px] sm:text-[10px]">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">Press</span>
          <span className="hover:underline cursor-pointer">API</span>
          <span className="hover:underline cursor-pointer">Jobs</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Locations</span>
        </div>
        <p className="tracking-wide select-none">© 2026 Instagram from Creative Studio</p>
      </footer>
    </div>
  );
}
