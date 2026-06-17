export interface Comment {
  id: string;
  username: string;
  avatarUrl: string;
  text: string;
  timestamp: string;
  likes: number;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  imageUrls: string[];
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  location?: string;
  type: 'post' | 'video' | 'carousel';
  isLikedByUser?: boolean;
  isBookmarkedByUser?: boolean;
}

export interface StoryElement {
  id: string;
  mediaUrl: string;
  type: 'image' | 'video';
  duration?: number; // milliseconds, default 5000
}

export interface Highlight {
  id: string;
  title: string;
  coverUrl: string;
  stories: StoryElement[];
}

export interface Profile {
  username: string;
  fullName: string;
  avatarUrl: string;
  isVerified: boolean;
  category?: string;
  bio: string;
  website: string;
  followersCount: number;
  followingCount: number;
}

export interface ProfilePersona {
  id: string;
  name: string;
  description: string;
  icon: string;
  profile: Profile;
  posts: Post[];
  highlights: Highlight[];
}
