// All website copy and links live here, so text changes never touch the layout.

export const LINKS = {
  // TODO: replace with the real Google Play listing once the app is published.
  playStore: 'https://play.google.com/store/apps/details?id=com.glidexa.vpn',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions',
  support: 'mailto:support@glidexavpn.com',
  instagram: 'https://www.instagram.com/glidexavpn',
  tiktok: 'https://www.tiktok.com/@glidexavpn',
};

export const NAV = [
  { label: 'HOME', href: '/#home' },
  { label: 'APP', href: '/#app' },
  { label: 'WHY US', href: '/#why-us' },
  { label: 'PRICING', href: '/#pricing' },
  { label: 'BLOG', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
];

export const TOP_BAR = '🚀 GRAND LAUNCH: Coba Gratis 7 Hari + Paket Tahunan Hemat 40% (Cuma Rp 1.150/Hari) Khusus 500 User Pertama!';

export const HERO = {
  title: 'PLAY SECURE. STAY STABLE. GAME WITHOUT WORRY.',
  subtitle:
    'GlideXAVPN routes your game traffic through low-ping servers, so every match stays smooth from the first round to the last. Try it free for 7 days.',
  note: '7-day free trial · Cancel anytime',
};

// Waitlist is closed, this strip now sends people to Google Play.
export const DOWNLOAD_STRIP = 'DOWNLOAD ON GOOGLE PLAY';

// Store badges. iOS stays disabled until the App Store listing is live.
export const STORES = {
  android: { kicker: 'GET IT ON', name: 'Google Play' },
  ios: { kicker: 'COMING SOON ON', name: 'App Store', badge: 'SOON' },
};

// Placeholder strip (customer asked for something neutral instead of partner logos).
export const PARTNERS = [
  { icon: '/images/partner-1.svg', w: 32, h: 38.428, label: 'MOBA' },
  { icon: '/images/partner-2.svg', w: 32, h: 35.298, label: 'FPS' },
  { icon: '/images/partner-3.svg', w: 32, h: 32, label: 'BATTLE ROYALE' },
  { icon: '/images/partner-4.svg', w: 32, h: 31, label: 'RPG' },
  { icon: '/images/partner-5.svg', w: 32, h: 32, label: 'RACING' },
];

export const APP_SECTION = {
  badge: 'APP',
  title: 'DROP THE LAG. KEEP THE WIN.',
  subtitle:
    'Built for real-time game traffic, so your shots land the moment you fire, not half a second later.',
  cards: [
    {
      title: 'Ping that stays low',
      text: 'Your game traffic rides the shortest, most stable path to the server. No spikes. No rubber-banding. Just instant response.',
    },
    {
      title: 'One tap. Full speed.',
      text: 'Open the app, tap once, done. GlideXAVPN finds the fastest server for you, so you spend time in the match, not in settings.',
    },
    {
      title: 'Play hidden. Stay safe.',
      text: 'No data selling, no tracking. Your identity and gameplay stay locked down on any network, even public WiFi.',
    },
  ],
};

export const WHY_US = {
  badge: 'WHY US',
  title: 'WHY GAMERS CHOOSE GLIDEXAVPN',
  subtitle: 'Everything you need for smooth online gaming, packed into one simple app.',
  items: [
    {
      title: 'Low Ping',
      text: 'Smart routing sends your game traffic through the fastest available path, so you stay in control from early game to the final push.',
    },
    {
      title: 'Security First',
      text: 'An encrypted connection and a strict no-logs policy keep your account, identity and gameplay private on any network.',
    },
    {
      title: 'Fair Price',
      text: 'Every plan unlocks all servers and features. Start from Rp 49k/month and save more with longer plans.',
    },
    {
      title: 'Try It Free',
      text: 'Use every feature free for 7 days. If it is not for you, cancel before the trial ends and pay nothing.',
    },
  ],
};

export const PRICING = {
  badge: 'PRICING',
  title: 'PICK YOUR PLAN',
  subtitle: 'Start with a 7-day free trial. Cancel anytime.',
  cta: 'START FREE TRIAL',
  features: [
    '7-Day Free Trial',
    'All Servers Unlocked',
    'Low-Ping Game Routes',
    'Smart Server Selection',
    'No Ads',
    'No-Logs Privacy',
    '24/7 Support',
  ],
  plans: [
    {
      name: 'Monthly',
      price: 'Rp 59k',
      unit: '/month',
      note: 'Billed monthly, cancel anytime',
      tag: 'POPULAR',
      devices: '3 Devices',
      featured: false,
    },
    {
      name: '6 Months',
      price: 'Rp 45k',
      unit: '/month',
      note: 'Rp 270k billed every 6 months',
      tag: 'SAVE 24%',
      devices: '3 Devices',
      featured: false,
    },
    {
      name: 'Yearly',
      price: 'Rp 35k',
      unit: '/month',
      note: 'Rp 420k billed once a year',
      tag: 'SAVE 40%',
      devices: '4 Devices (+1 Bonus)',
      featured: true,
      ribbon: 'BEST VALUE',
    },
  ],
};

export const FAQ = {
  badge: 'FAQ',
  title: 'FREQUENTLY ASKED QUESTIONS',
  subtitle:
    'Everything you need to know before you jump in. Still have questions? Our support team is ready 24/7.',
  items: [
    {
      q: 'What is GlideXAVPN?',
      a: 'GlideXAVPN is a gaming VPN that keeps your connection fast, stable, and private. It routes your game traffic through optimized servers to cut lag and ping spikes, and it works for streaming and everyday browsing too.',
    },
    {
      q: 'How does the 7-day free trial work?',
      a: 'Download GlideXAVPN from Google Play and pick any plan. You get full access for 7 days, and if you cancel before the trial ends you will not be charged.',
    },
    {
      q: 'Can I choose my server location?',
      a: 'Yes. Smart Server Selection connects you to the fastest server automatically, and you can switch to any location from the server list at any time.',
    },
    {
      q: 'Which plan gives me the best value?',
      a: 'The Yearly plan. It works out to Rp 42k/month (Rp 499k billed once) and includes one bonus device.',
    },
    {
      q: 'Can I use GlideXAVPN on more than one device?',
      a: 'Yes. The Monthly and 6 Months plans cover up to 3 devices, and the Yearly plan covers 4.',
    },
  ],
};

export const CTA = {
  title: 'START YOUR 7-DAY FREE TRIAL',
  subtitle:
    'Download GlideXAVPN on Google Play and feel the difference in your next match. Plans start at Rp 49k/month.',
};

export const COMPANY = {
  name: 'PT. GLIDEXA INOVASI DIGITAL',
  pse: 'PSE Komdigi: 029356.01/DJAI.PSE/08/2026.',
  // Original (hidden for now): 'Copyright © 2026 PT Glidexa Inovasi Digital. All rights reserved.'
  copyright: 'Copyright © 2026 GlideXAVPN. All rights reserved.',
};

export const FOOTER_COLUMNS = [
  NAV.map((n) => ({ label: n.label, href: n.href })),
  [
    { label: 'INSTAGRAM', href: LINKS.instagram, icon: 'instagram' },
    { label: 'TIKTOK', href: LINKS.tiktok, icon: 'tiktok' },
  ],
  [
    { label: 'PRIVACY POLICY', href: LINKS.privacy },
    { label: 'TERMS & CONDITIONS', href: LINKS.terms },
    { label: 'CONTACT SUPPORT', href: LINKS.support },
  ],
];
