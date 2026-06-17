import { ProfilePersona } from './types';
import bzsAvatar from './BZS.jpg';

// Import Testimony Images
import testiImg1 from './File Testimoni/1775787820662.png';
import testiImg2 from './File Testimoni/1775787933350.png';
import testiImg3 from './File Testimoni/417968688_762002712465981_6819875057007863211_n.webp.jpg';
import testiImg4 from './File Testimoni/418880320_337688332466123_2152825251086347923_n.jpg';
import testiImg5 from './File Testimoni/419817325_702248095420806_7816612778747553157_n.jpg';
import testiImg6 from './File Testimoni/ICb6B.jpg';
import testiImg7 from './File Testimoni/JZ9HA.jpg';
import testiImg8 from './File Testimoni/LJn5n.jpg';
import testiImg9 from './File Testimoni/NDosG.jpg';
import testiImg10 from './File Testimoni/SaveClip.App_576485173_17855932185558387_3700965207571266405_n.jpg';
import testiImg11 from './File Testimoni/SaveClip.App_580740462_17856354504558387_5226496408314328276_n.webp';
import testiImg12 from './File Testimoni/SaveClip.App_581720672_17856822138558387_5585677035717371713_n.jpg';
import testiImg13 from './File Testimoni/SaveClip.App_581747174_17856354522558387_2862525256354583249_n.webp';
import testiImg14 from './File Testimoni/SaveClip.App_582209915_17856822090558387_1869914361170119158_n.jpg';
import testiImg15 from './File Testimoni/SaveClip.App_583088623_17856822099558387_9035302603530898824_n.jpg';
import testiImg16 from './File Testimoni/SaveClip.App_583120148_17856822072558387_3170567395176466501_n.jpg';
import testiImg17 from './File Testimoni/rMnO4.jpg';
import testiImg18 from './File Testimoni/testi 1.jpg';
import testiImg19 from './File Testimoni/zIWl9.jpg';

// Import Pricelist Images
import priceImgFB from './File Testimoni/FACEBOOKPRICELIST.png';
import priceImgIG from './File Testimoni/IG PRICELIST.png';
import priceImgIGBule from './File Testimoni/IGBULEUSA.png';
import priceImgTikTok from './File Testimoni/TIKTOK PRIECLIST.png';
import priceImgYT from './File Testimoni/YOUTUBESUBSCRIBERS.jpg';
import priceImgGeneral2 from './File Testimoni/20240205_104815_0001.png';
import testiNewWisk from './File Testimoni/wisk_20240417_060345_0000.png';
import testiKmg from './File Testimoni/kmgGD.jpg';
import ratecardImg from './File Testimoni/ratecard.png';
import chatUsInBio from './File Testimoni/chat us in bio.png';
import chatUsInBio2 from './File Testimoni/chat us in bio(2).png';
const priceImgGeneral1 = priceImgGeneral2;

export const PERSONAS: ProfilePersona[] = [
  {
    id: 'developer',
    name: 'Tech Enthusiast & Coder',
    description: 'Minimalist profile featuring workstation setups, code snippets, and coding tips.',
    icon: '💻',
    profile: {
      username: 'bzs.followers',
      fullName: 'FOLLOWERS - LIKES - VIEWS (INSTAGRAM - TIKTOK FACEBOOK - YOUTUBE SUBSCRIBERS)',
      avatarUrl: bzsAvatar,
      isVerified: true,
      category: 'Product/Service',
      bio: 'Since 2021 ✨\nPayment: Paypal / Wise / Crypto 💵\nGuaranteed\nFor More Info / Order Click Link Whatsapp In Below 👇🏻',
      website: 'https://wa.me//6285880036748',
      followersCount: 116000,
      followingCount: 554,
    },
    highlights: [
      {
        id: 'h1',
        title: 'Testimoni',
        coverUrl: testiImg18,
        stories: [
          { id: 's1_testi18', mediaUrl: testiImg18, type: 'image' },
          { id: 's1_testi1', mediaUrl: testiImg1, type: 'image' },
          { id: 's1_testi2', mediaUrl: testiImg2, type: 'image' },
          { id: 's1_testi3', mediaUrl: testiImg3, type: 'image' },
          { id: 's1_testi4', mediaUrl: testiImg4, type: 'image' },
          { id: 's1_testi5', mediaUrl: testiImg5, type: 'image' },
          { id: 's1_testi6', mediaUrl: testiImg6, type: 'image' },
          { id: 's1_testi7', mediaUrl: testiImg7, type: 'image' },
          { id: 's1_testi8', mediaUrl: testiImg8, type: 'image' },
          { id: 's1_testi9', mediaUrl: testiImg9, type: 'image' },
          { id: 's1_testi10', mediaUrl: testiImg10, type: 'image' },
          { id: 's1_testi11', mediaUrl: testiImg11, type: 'image' },
          { id: 's1_testi12', mediaUrl: testiImg12, type: 'image' },
          { id: 's1_testi13', mediaUrl: testiImg13, type: 'image' },
          { id: 's1_testi14', mediaUrl: testiImg14, type: 'image' },
          { id: 's1_testi15', mediaUrl: testiImg15, type: 'image' },
          { id: 's1_testi16', mediaUrl: testiImg16, type: 'image' },
          { id: 's1_testi17', mediaUrl: testiImg17, type: 'image' },
          { id: 's1_testi19', mediaUrl: testiImg19, type: 'image' },
        ],
      },
      {
        id: 'h2',
        title: 'How To Order?',
        coverUrl: chatUsInBio,
        stories: [
          { id: 's2_1', mediaUrl: chatUsInBio, type: 'image' },
        ],
      },
      {
        id: 'h3',
        title: 'Tips 💡',
        coverUrl: chatUsInBio2,
        stories: [
          { id: 's3_1', mediaUrl: chatUsInBio2, type: 'image' },
        ],
      },
    ],
    posts: [
      {
        id: 'post_kmg',
        imageUrls: [testiKmg],
        caption: 'Premium credentials booster. Reliable growth specifications with fully secure processing.',
        likes: 541,
        location: 'Verified Service Hub',
        type: 'post',
        timestamp: 'Just now',
        comments: [],
      },
      {
        id: 'post_ratecard',
        imageUrls: [ratecardImg],
        caption: 'Complete service ratecard and premium pricing details. Gain robust presence naturally today.',
        likes: 489,
        location: 'Global Support Desk',
        type: 'post',
        timestamp: 'Just now',
        comments: [],
      },
      {
        id: 'post_wisk',
        imageUrls: [testiNewWisk],
        caption: 'Elevating digital credentials with premium, fully verified growth solutions. Safe, sustainable, and reliable services for all major networks.',
        likes: 672,
        location: 'Verified Service Center',
        type: 'post',
        timestamp: 'Just now',
        comments: [],
      },
      {
        id: 'post1',
        imageUrls: [priceImgIG],
        caption: 'ELEVATE YOUR INSTAGRAM PRESENCE\n\nTake your brand to the next level with our premium Instagram Growth services. Whether you want to boost your credibility, expand your organic reach, or build instant consumer trust, BZS Followers delivers pristine quality with unparalleled precision.\n\nHighly Secure: Username only, no password required\nGuaranteed permanent results and instant delivery\nHandcrafted packages tailored for brands, influencers, and businesses\n\nMaximize your growth potential today. Secure your exclusive package by clicking the WhatsApp link in our bio for instant processing!\n\n#instagramgrowth #socialmediaagency #brandingexpert #digitalinfluence #socialproof',
        likes: 1243,
        location: 'Instagram Business Hub',
        type: 'post',
        timestamp: '2 hours ago',
        comments: [
          { id: 'c1', username: 'emma_webb', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80', text: 'How long does it usually take to see the results after placing an order? Im interested  .', timestamp: '1 hour ago', likes: 24, isVerified: true },
          { id: 'c1_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@emma_webb Our delivery is instant. You will begin to see results within minutes of placing your order.', timestamp: '45 mins ago', likes: 18, isVerified: true },
          { id: 'c2', username: 'sarah_jenkins', avatarUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=100&h=100&fit=crop&q=80', text: 'I already contact .', timestamp: '45 minutes ago', likes: 12 },
          { id: 'c2_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@sarah_jenkins Thank you, Sarah. Our coordinators are processing your request. We will assist you shortly!', timestamp: '30 mins ago', likes: 10, isVerified: true },
        ],
      },
      {
        id: 'post2',
        imageUrls: [priceImgTikTok],
        caption: 'EXPAND YOUR AUDIENCE\n\nReady to conquer the For You Page or unlock TikTok Shop and Live streaming features? Establish a robust presence instantly with our customized, high-velocity growth specifications.\n\nUnlocks live stream criteria instantly\nSmooth, authentic-looking growth cadence\nZero passkeys needed – completely secure\n\nPropel your content journey today. Contact our support representatives via the WhatsApp link on our profile.\n\n#tiktokmarketing #virality #creatoreconomy #socialgrowth #brandsupremacy',
        likes: 987,
        location: 'TikTok Creator Studio',
        type: 'post',
        timestamp: '1 day ago',
        comments: [
          { id: 'c3', username: 'jack_wilson', avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&q=80', text: 'Does this package help reach the followers requirement to unlock Live streaming on TikTok?', timestamp: '18 hours ago', likes: 41 },
          { id: 'c3_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@jack_wilson Yes, absolutely. We can provide the specific number of followers required to unlock Live stream features safely.', timestamp: '16 hours ago', likes: 29, isVerified: true },
          { id: 'c3_2', username: 'rachel_miller', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80', text: 'Can we split the package across multiple videos or is it strictly for one post?', timestamp: '10 hours ago', likes: 14 },
          { id: 'c3_2_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@rachel_miller Yes, for select packages we can split the views or likes across multiple posts or videos. Please consult our support team.', timestamp: '9 hours ago', likes: 9, isVerified: true },
        ],
      },
      {
        id: 'post3',
        imageUrls: [priceImgFB],
        caption: 'AMPLIFY YOUR FACEBOOK NETWORK\n\nBuild ultimate credibility and foster a highly engaged community. Having a strong following on Facebook is the standard to establish long-term corporate credit and customer confidence.\n\nSafe and secure implementation matching Meta guidelines\nPerfect for Business Pages, creators, and public figures\nLightning fast, organic-paced delivery\n\nUnlock your page\'s maximum potential. Send us a message or tap the WhatsApp link in our bio to consult with our coordinators.\n\n#facebookbusiness #digitalbrand #credibilityboost #marketingstrategy #growthhacking',
        likes: 1542,
        location: 'Facebook Business Suite',
        type: 'post',
        timestamp: '3 days ago',
        comments: [
          { id: 'c4', username: 'alexander_cooper', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80', text: 'Are these likes fully compliant with the Facebook Business Policies? Just want to ensure our ad account remains safe.', timestamp: '2 days ago', likes: 21 },
          { id: 'c4_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@alexander_cooper Yes, all of our services are fully compliant and highly secure. Your page and ad accounts are 100% safe.', timestamp: '1 day ago', likes: 15, isVerified: true },
          { id: 'c4_2', username: 'clara_schneider', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80', text: 'Are there any targeting options available specifically for European audiences?', timestamp: '1 day ago', likes: 5 },
          { id: 'c4_2_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@clara_schneider Yes, we offer premium targeted packages for specific regions including Europe and the USA. Please contact us via WhatsApp for details.', timestamp: '18 hours ago', likes: 3, isVerified: true },
        ],
      },
      {
        id: 'post4',
        imageUrls: [priceImgIGBule],
        caption: 'EXPAND INTERNATIONALLY: GLOBAL & USA AUDIENCES\n\nPosition your brand on the international stage. Attract a premium global audience to elevate your brand prestige, drive worldwide authority, and cater to clients in the USA, Europe, and beyond.\n\nHigh-quality Global and USA targeting\nComplete warranty and permanent retention\nPerfect for luxury brands, creators, and exporters\n\nGain global prestige today. Simply link up with us via WhatsApp to explore custom global configurations.\n\n#globalbrand #premiuminfluence #usatargeted #brandexpansion #internationalscaling',
        likes: 812,
        location: 'Global Target Service',
        type: 'post',
        timestamp: '4 days ago',
        comments: [
          { id: 'c5', username: 'sophie_lefebvre', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80', text: 'What is the ratio of USA to general global profiles in this internationally targeted package?', timestamp: '4 days ago', likes: 23, isVerified: true },
          { id: 'c5_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@sophie_lefebvre We offer both 100% pure USA profiles and custom blended USA/Global options. Simply let us know your preference when ordering.', timestamp: '3 days ago', likes: 14, isVerified: true },
          { id: 'c5_2', username: 'vincent_decker', avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80', text: 'To confirm, you only need the username and profile link, correct? No account login or passwords?', timestamp: '3 days ago', likes: 9 },
          { id: 'c5_2_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@vincent_decker Correct. Your security is our priority. We only require your username or post link; never your password.', timestamp: '2 days ago', likes: 7, isVerified: true },
        ],
      },
      {
        id: 'post5',
        imageUrls: [priceImgYT],
        caption: 'YOUTUBE MONETIZATION ACCELERATOR\n\nAccelerate your path to monetization and build a credible, authority-driven channel. We provide compliant viewer-boosting and subscriber-building frameworks tailored for creators starting from scratch.\n\nSafe monetization compliance metrics\nHigh-retention real subscribers\nCompletely aligned with standard algorithm metrics\n\nEmpower your channel today. Reach out to our professional team via our WhatsApp link.\n\n#youtubesuccess #channelsuccess #videooptimization #monetizationready #contentcreator',
        likes: 2110,
        location: 'YouTube Creators Hub',
        type: 'post',
        timestamp: '1 week ago',
        comments: [
          { id: 'c6', username: 'andrew_cooks', avatarUrl: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=100&h=100&fit=crop&q=80', text: 'Does this also help with meeting the watch hour requirements for official YouTube monetization?', timestamp: '1 week ago', likes: 62, isVerified: true },
          { id: 'c6_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@andrew_cooks Yes, we have special watch hours packages perfectly tailored to help you meet the YouTube Partner Program eligibility requirements.', timestamp: '6 days ago', likes: 45, isVerified: true },
          { id: 'c7', username: 'tobias_miller', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80', text: 'Are the subscribers and watch hours delivered with natural/gradual pacing or all at once?', timestamp: '6 days ago', likes: 18 },
          { id: 'c7_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@tobias_miller We deliver subscriber and watch packages using custom, natural pacing to ensure a smooth, safe growth trajectory for your channel.', timestamp: '5 days ago', likes: 11, isVerified: true },
        ],
      },
      {
        id: 'post6',
        imageUrls: [priceImgGeneral2],
        caption: 'FIVE-STAR STOREFRONT: MARKETPLACE OPTIMIZATION\n\nSecure ultimate consumer confidence across the digital marketplace landscape. Enhance your shop followers, favorites, ratings, and live-stream views to boost conversion rates of organic visitors.\n\nOptimized for Amazon, Shopify, Etsy, and major online stores\nGreatly reduces buyer hesitation by building stellar shop authority\nFriendly 24/7 coordinator guidance for customized needs\n\nEmpower your sales conversion metrics. Click the WhatsApp link in our bio for a free storefront growth plan!\n\n#ecommerceoptimization #shopgrowth #onlineretail #sellersonline #storeauthority',
        likes: 742,
        location: 'Seller Center Optimizer',
        type: 'post',
        timestamp: '2 weeks ago',
        comments: [
          { id: 'c8', username: 'grace_woodward', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80', text: 'Do you offer product specific favorites and targeted feedback for newly opened Shopify stores?', timestamp: '10 days ago', likes: 15 },
          { id: 'c8_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@grace_woodward Yes, we provide custom packages for product saves/favorites and authentic engagement to build social proof on new storefronts.', timestamp: '9 days ago', likes: 10, isVerified: true },
          { id: 'c8_2', username: 'lucas_sanders', avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80', text: 'Can we build custom bundles combining both store followers and product favorites/saves?', timestamp: '8 days ago', likes: 7 },
          { id: 'c8_2_reply', username: 'bzs.followers', avatarUrl: bzsAvatar, text: '@lucas_sanders Yes, certainly! Our WhatsApp support can help you configure a custom bundle tailored exactly to your store\'s needs.', timestamp: '7 days ago', likes: 5, isVerified: true },
        ],
      }
    ],
  },
  {
    id: 'traveler',
    name: 'Travel & Nature Blogger',
    description: 'Aesthetic travel profile showcasing mountains, clear ocean beaches, and camping adventures.',
    icon: '🏔️',
    profile: {
      username: 'bayu_explore',
      fullName: 'Bayu Saputra',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80',
      isVerified: true,
      category: 'Adventurer / Photographer',
      bio: '🏕️ Exploring the hidden beauty of the archipelago\n📸 Chronicling majestic peaks, wild forests & sunsets\n📍 Next destination: Labuan Bajo 🌊\nCollabs or business inquiries? DM me!',
      website: 'https://bayusaputra.co',
      followersCount: 310842,
      followingCount: 924,
    },
    highlights: [
      {
        id: 'h2_1',
        title: 'Mountains 🌋',
        coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's2_1_1', mediaUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1400&fit=crop&q=80', type: 'image' },
          { id: 's2_1_2', mediaUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
      {
        id: 'h2_2',
        title: 'Islands 🏝️',
        coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's2_2_1', mediaUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
      {
        id: 'h2_3',
        title: 'Gear 🎒',
        coverUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's2_3_1', mediaUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
    ],
    posts: [
      {
        id: 'post_t1',
        imageUrls: ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop&q=80'],
        caption: 'Misty morning breeze welcoming is at the campsite. Cold crisp air combined with a warm cup of coffee is the ultimate definition of escape. 🗻❄️ #alpine #campinglife #globetrotter #mountainair',
        likes: 3410,
        location: 'Dolomites, Italy',
        type: 'post',
        timestamp: '3 hours ago',
        comments: [
          { id: 'ct1', username: 'anindya_g', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80', text: 'Miss those peaks so much! We should plan a hike together soon!', timestamp: '2 hours ago', likes: 114 },
          { id: 'ct2', username: 'danu.adrian', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80', text: 'What an incredibly sharp capture bro, which lens did you shoot this with?', timestamp: '1 hour ago', likes: 25 },
        ],
      },
      {
        id: 'post_t2',
        imageUrls: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=800&fit=crop&q=80', 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&h=800&fit=crop&q=80'],
        caption: 'Getting happily lost in the labyrinth of pine woods. Breathing in the fresh smell of damp forest trees after a rain shower always re-centers my mind. 🌲💧 #naturelovers #woods #escaperoad',
        likes: 2198,
        location: 'Lempira National Park',
        type: 'carousel',
        timestamp: '2 days ago',
        comments: [],
      },
      {
        id: 'post_t3',
        imageUrls: ['https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=800&fit=crop&q=80'],
        caption: 'Sunset casting a fiery orange hue over the island. The reflection on pristine, azure waters feels completely surreal. Labuan Bajo, you always capture my heart! ⛵️🌅 #underwatertrip #labuanbajo #perfectsunset',
        likes: 4502,
        location: 'Kelor Island, Flores',
        type: 'video',
        timestamp: '5 days ago',
        comments: [
          { id: 'ct3', username: 'bzs.followers', avatarUrl: bzsAvatar, text: 'Your camera work is absolutely top tier Bayu! Unbelievable depth.', timestamp: '4 days ago', likes: 45, isVerified: true },
        ],
      }
    ],
  },
  {
    id: 'food',
    name: 'Artisanal Dessert & Chef',
    description: 'Warm cafe-themed aesthetic grid outlining pastries, bakes, and gourmet dishes.',
    icon: '🍰',
    profile: {
      username: 'siti.bakes',
      fullName: 'Siti Culinary & Baking',
      avatarUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop&q=80',
      isVerified: false,
      category: 'Chef / Food Stylist',
      bio: '🍰 Artisanal Baker & Pastry Designer\n🍩 Sharing secret baking recipes on YouTube & Masterclasses\n🍵 Yogyakarta base\n☕ "Life is sweet, eat dessert first!"',
      website: 'https://sitibakes.co.id',
      followersCount: 18451,
      followingCount: 320,
    },
    highlights: [
      {
        id: 'h3_1',
        title: 'Baking 🥖',
        coverUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's3_1_1', mediaUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
      {
        id: 'h3_2',
        title: 'Cafes ☕',
        coverUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's3_2_1', mediaUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
    ],
    posts: [
      {
        id: 'post_f1',
        imageUrls: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop&q=80'],
        caption: 'Baking a double chocolate cloud cake this morning. Intentionally left extra gooey in the center to melt in your mouth on the very first bite! Drop a comment if you want the details! 😉🍫 #bakinglove #chocolatecake #easyrecipes #foodie',
        likes: 1845,
        location: 'Culinary Kitchen Studio',
        type: 'post',
        timestamp: '4 hours ago',
        comments: [
          { id: 'cf1', username: 'dian.foodies', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80', text: 'Count me in! Need the recipe ASAP for my sister\'s birthday!', timestamp: '3 hours ago', likes: 21 },
          { id: 'cf2', username: 'yanto_cul', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80', text: 'This looks incredibly silky, how do you manage to melt the chocolate so evenly?', timestamp: '2 hours ago', likes: 6 },
        ],
      },
      {
        id: 'post_f2',
        imageUrls: ['https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=800&fit=crop&q=80'],
        caption: 'Nothing is more satisfying than placing fresh glaze strawberries neatly over a stack of silky panna cotta. Sweet, sour, and perfectly crumbly! 🍓🥛 #frenchpastry #panna_cotta #artisanal',
        likes: 1254,
        location: 'Historic Cafe Street',
        type: 'post',
        timestamp: '3 days ago',
        comments: [],
      }
    ],
  },
  {
    id: 'architecture',
    name: 'Minimalist Architect',
    description: 'Clean geometry of modern landmarks, brutalist structures, shadows, and silent interiors.',
    icon: '🏗️',
    profile: {
      username: 'bagas.studio',
      fullName: 'Bagas Wibowo Architect',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
      isVerified: true,
      category: 'Architect / Interior Designer',
      bio: '📐 Principal Architect at B-Studio\n🏗️ Building functional spaces using concrete, warm wood & local brick\n🖤 Devoted to architectural geometry & raw textures',
      website: 'https://bagaswibowo.com',
      followersCount: 75103,
      followingCount: 512,
    },
    highlights: [
      {
        id: 'h4_1',
        title: 'Project A 🏛️',
        coverUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's4_1_1', mediaUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
      {
        id: 'h4_2',
        title: 'Materials 🪵',
        coverUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=300&fit=crop&q=80',
        stories: [
          { id: 's4_2_1', mediaUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1400&fit=crop&q=80', type: 'image' },
        ],
      },
    ],
    posts: [
      {
        id: 'post_a1',
        imageUrls: ['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=800&fit=crop&q=80'],
        caption: 'A hillside modernist brutalist villa we recently crafted. The stark raw concrete aggregates are juxtaposed by deep natural merbau wood slats, adding domestic warmth. 📐🏗 #archdaily #concretehouse #homedesign #interior',
        likes: 2715,
        location: 'Ubud, Bali',
        type: 'post',
        timestamp: '5 hours ago',
        comments: [
          { id: 'ca1', username: 'clara.design', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80', text: 'The natural shadow casting is fantastic here. True to your signature form!', timestamp: '4 hours ago', likes: 18, isVerified: true },
        ],
      },
      {
        id: 'post_a2',
        imageUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=800&fit=crop&q=80'],
        caption: 'A silent Reading Corner drowned in midday peace. Sometimes, pure luxury is characterized by minimal furniture, welcoming sunlight to roll freely across raw textures. ✨🍃 #zenhouse #luxuryminimal',
        likes: 1891,
        location: 'B-Studio Jakarta',
        type: 'post',
        timestamp: '4 days ago',
        comments: [],
      }
    ],
  },
];
