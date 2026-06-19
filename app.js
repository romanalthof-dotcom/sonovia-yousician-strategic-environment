const categories = [
  {
    id: "learning",
    name: "Learning apps & curricula",
    shortName: "Learning apps",
    color: "#00d292",
    icon: "graduation-cap",
    iconFallback: "L",
    orbit: 1,
    layer: "Core market",
    description: "Direct music-learning products, curricula, feedback loops, and subscription benchmarks."
  },
  {
    id: "practice",
    name: "Song & practice ecosystems",
    shortName: "Practice habits",
    color: "#11a5a5",
    icon: "metronome",
    iconFallback: "P",
    orbit: 1,
    layer: "Core habit layer",
    description: "Song discovery, tabs, play-along utilities, creators, and repeat-practice habits."
  },
  {
    id: "hardware",
    name: "Hardware & retail channels",
    shortName: "Gear channels",
    color: "#ffb84d",
    icon: "shopping-cart",
    iconFallback: "G",
    orbit: 2,
    layer: "Acquisition layer",
    description: "Instrument brands and retailers that shape gear access, beginner bundles, and partner routes."
  },
  {
    id: "creation",
    name: "Creation & production tools",
    shortName: "Creation tools",
    color: "#00b77e",
    icon: "music-2",
    iconFallback: "C",
    orbit: 2,
    layer: "Hobby expansion",
    description: "Tools that move people from learning and practice into making, arranging, producing, and sharing."
  },
  {
    id: "ai",
    name: "AI music & audio technology",
    shortName: "AI music tech",
    color: "#6e5cff",
    icon: "sparkles",
    iconFallback: "AI",
    orbit: 1,
    layer: "Disruption layer",
    description: "AI-native generation, audio utilities, practice augmentation, and licensing/rights shifts."
  },
  {
    id: "education",
    name: "Education & pedagogy benchmarks",
    shortName: "Education benchmarks",
    color: "#80a83d",
    icon: "school",
    iconFallback: "E",
    orbit: 3,
    layer: "Learning model layer",
    description: "Non-music learning products, formal music education, teacher networks, and pedagogy references."
  },
  {
    id: "signals",
    name: "Capital, media & opportunity signals",
    shortName: "Market signals",
    color: "#3da5d9",
    icon: "radar",
    iconFallback: "S",
    orbit: 3,
    layer: "Strategic signal layer",
    description: "Investors, news, awards, funding programmes, and external indicators to monitor."
  },
  {
    id: "platforms",
    name: "Broader Entertainment & Education Platforms",
    shortName: "Broader platforms",
    color: "#d94c72",
    icon: "globe-2",
    iconFallback: "B",
    orbit: 3,
    layer: "Attention and identity layer",
    description: "Large entertainment, games, streaming, education, and IP platforms that may shape music motivation, learning demand, or strategic options."
  }
];

const journeyCategories = [
  {
    id: "discover",
    name: "1. Discover",
    shortName: "Discover",
    color: "#7b43b6",
    icon: "search",
    iconFallback: "D",
    step: "1",
    orbit: 3,
    layer: "Inspiration",
    description: "I see it, I hear it, I get inspired."
  },
  {
    id: "start",
    name: "2. Start",
    shortName: "Start",
    color: "#2f73d8",
    icon: "shopping-cart",
    iconFallback: "S",
    step: "2",
    orbit: 2,
    layer: "First action",
    description: "I decide to try and get what I need."
  },
  {
    id: "learn",
    name: "3. Learn",
    shortName: "Learn",
    color: "#16a5a5",
    icon: "graduation-cap",
    iconFallback: "L",
    step: "3",
    orbit: 1,
    layer: "Skill building",
    description: "I learn the basics and build skills."
  },
  {
    id: "practice",
    name: "4. Practice",
    shortName: "Practice",
    color: "#6eb05f",
    icon: "metronome",
    iconFallback: "P",
    step: "4",
    orbit: 1,
    layer: "Habit",
    description: "I practice, improve and stay motivated."
  },
  {
    id: "create",
    name: "5. Create",
    shortName: "Create",
    color: "#f59a23",
    icon: "music-2",
    iconFallback: "C",
    step: "5",
    orbit: 2,
    layer: "Making",
    description: "I make my own music and arrangements."
  },
  {
    id: "share",
    name: "6. Share",
    shortName: "Share",
    color: "#ef5a4f",
    icon: "share-2",
    iconFallback: "S",
    step: "6",
    orbit: 3,
    layer: "Feedback",
    description: "I share with others and get feedback."
  },
  {
    id: "identity",
    name: "7. Identity",
    shortName: "Identity",
    color: "#df4d77",
    icon: "user-round",
    iconFallback: "I",
    step: "7",
    orbit: 3,
    layer: "Belonging",
    description: "Music becomes part of who I am."
  },
  {
    id: "broader",
    name: "Broader platforms",
    shortName: "Broader",
    color: "#283b8f",
    icon: "globe-2",
    iconFallback: "B",
    orbit: 3,
    layer: "Entertainment and education platforms",
    description: "Large platforms that may affect music, education, identity, attention, or M&A logic."
  }
];

const productLenses = [
  {
    id: "all",
    label: "All products",
    shortLabel: "All",
    icon: "layout-grid",
    description: "Full ecosystem"
  },
  {
    id: "yousician",
    label: "Yousician",
    shortLabel: "Yousician",
    icon: "target",
    description: "Learning app, curriculum, feedback, teachers, schools and beginner progression"
  },
  {
    id: "guitartuna",
    label: "GuitarTuna",
    shortLabel: "GuitarTuna",
    icon: "music-2",
    description: "Tuning, chords, tabs, guitar practice, song utilities, gear and guitar creators"
  },
  {
    id: "shared",
    label: "Shared",
    shortLabel: "Shared",
    icon: "shuffle",
    description: "Records that matter to both product surfaces"
  }
];

const ecosystemLayers = [
  {
    id: "core",
    label: "Core habits",
    shortLabel: "Core",
    color: "#174f8a",
    icon: "circle-dot",
    note: "Direct learning and practice choices closest to Yousician."
  },
  {
    id: "tools",
    label: "Tools and platforms",
    shortLabel: "Tools",
    color: "#16a5a5",
    icon: "boxes",
    note: "Products and services used by music hobbyists."
  },
  {
    id: "people",
    label: "People and communities",
    shortLabel: "People",
    color: "#6eb05f",
    icon: "users",
    note: "Creators, teachers, communities and support networks."
  },
  {
    id: "culture",
    label: "Culture and media",
    shortLabel: "Culture",
    color: "#f59a23",
    icon: "radio",
    note: "Channels that create inspiration, taste and attention."
  },
  {
    id: "infrastructure",
    label: "Capital and infrastructure",
    shortLabel: "Infrastructure",
    color: "#7b43b6",
    icon: "landmark",
    note: "Capital, rights, funding, distribution and industry systems."
  }
];

const players = [
  {
    id: "simply",
    name: "Simply",
    type: "Direct learning app",
    category: "learning",
    subcategory: "App-based guitar and music learning",
    geography: "Global",
    reach: "Large consumer app",
    model: "Subscription learning app",
    ownership: "Simply Ltd",
    ai: "Potential personalization and practice feedback research target",
    description: "Mobile-first music learning platform and direct reference point for casual learners.",
    why: "Useful benchmark for onboarding, motivation, pricing, and growth in app based music education.",
    relevance: 5,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Official product, developer and app store sources linked; Appfigures remains credentialed for performance metrics",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track rankings, revenue estimates, product launches, and funding or ownership signals.",
    tags: ["direct competitor", "consumer app", "subscription"]
  },
  {
    id: "ultimate-guitar",
    name: "Ultimate Guitar",
    type: "Song-practice ecosystem",
    category: "practice",
    subcategory: "Tabs, chords, song discovery, and practice habits",
    geography: "Global",
    reach: "Large global music community",
    model: "Freemium, subscription, ads",
    ownership: "Muse Group",
    ai: "Research AI-assisted discovery, practice, and content workflow signals",
    description: "Tab, chord, song, and musician community ecosystem for guitar players.",
    why: "Strong influence on how hobbyists discover songs and move from inspiration to practice.",
    relevance: 5,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Official Muse Group and app store sources linked; traffic and monetisation remain follow up metrics",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor product bundles, community growth, and AI-assisted music tooling.",
    tags: ["community", "tabs", "guitar"]
  },
  {
    id: "fender-play",
    name: "Fender Play",
    type: "Brand-backed learning app",
    category: "learning",
    subcategory: "Guitar, bass, and ukulele learning",
    geography: "Global",
    reach: "Brand-backed learning app",
    model: "Subscription and brand ecosystem",
    ownership: "Fender",
    ai: "Confirmed app feedback surface; broader AI/connected-instrument roadmap remains a monitoring hypothesis",
    description: "Learning product connected to one of the strongest guitar brands.",
    why: "Shows how instrument makers can extend into software, subscriptions, and beginner journeys.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official Fender/app sources linked; needs Appfigures + bundle performance; AI roadmap not confirmed",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track product packaging with Fender hardware and beginner campaigns.",
    tags: ["brand", "guitar", "learning"]
  },
  {
    id: "flowkey",
    name: "Flowkey",
    type: "Instrument learning app",
    category: "learning",
    subcategory: "Piano learning benchmark",
    geography: "Global",
    reach: "Established piano app",
    model: "Subscription",
    ownership: "flowkey GmbH; Yamaha is a hardware-promotion partner, not shown here as owner",
    ai: "Confirmed feedback/product-learning surface; AI content generation remains a monitoring hypothesis",
    description: "Piano learning app focused on songs, guided lessons, and practice support.",
    why: "Important benchmark for piano learning, catalog positioning, and conversion mechanics.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product/app/partner sources linked; needs Appfigures",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track app performance, catalog updates, and partnership moves.",
    tags: ["piano", "learning", "subscription"]
  },
  {
    id: "skoove",
    name: "Skoove",
    type: "Instrument learning app",
    category: "learning",
    subcategory: "Piano learning benchmark",
    geography: "Global",
    reach: "Established piano app",
    model: "Subscription",
    ownership: "Skoove",
    ai: "Research feedback and adaptive practice signals",
    description: "Digital piano learning platform for beginner and intermediate players.",
    why: "Relevant for piano pedagogy, app store positioning, and paid acquisition benchmarks.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product/app sources linked; needs Appfigures",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app ranking and subscription signals.",
    tags: ["piano", "learning"]
  },
  {
    id: "justinguitar",
    name: "JustinGuitar",
    type: "Creator-led practice ecosystem",
    category: "practice",
    subcategory: "Trusted guitar teacher, free lessons, app, and course funnel",
    geography: "Global",
    reach: "Large creator-led audience",
    model: "Free content, courses, app, community",
    ownership: "Independent",
    ai: "Research how creator-led learning uses AI-assisted practice or content",
    description: "Influential guitar educator with a broad online learning footprint.",
    why: "Shows the power of trusted teachers and free content in shaping learner behavior.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public app/site sources linked; needs audience data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor audience growth, course/app strategy, and partnerships.",
    tags: ["creator", "guitar", "teacher"]
  },
  {
    id: "artie-piano",
    name: "Artie Piano",
    type: "AI-native learning app",
    category: "learning",
    subcategory: "AI piano teacher and adaptive practice",
    geography: "Global app-store presence",
    reach: "Emerging",
    model: "AI piano learning app",
    ownership: "ArtMaster",
    ai: "Likely research target for AI-native learning patterns",
    description: "Example emerging piano learning player from the brief.",
    why: "Useful as an early signal for new product patterns in music learning.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public ArtMaster/app sources linked; needs traction validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Validate product, traction, and positioning.",
    tags: ["emerging", "piano", "watchlist"]
  },
  {
    id: "fender",
    name: "Fender",
    type: "Hardware ecosystem",
    category: "hardware",
    subcategory: "Guitar brand, beginner gear, and learning extension",
    geography: "Global",
    reach: "Major global brand",
    model: "Hardware, software, subscriptions, content",
    ownership: "Private",
    ai: "Research connected instrument and practice feedback initiatives",
    description: "Iconic guitar brand with reach across aspiration, hardware, education, and artist culture.",
    why: "Instrument brands can shape the beginner funnel before users choose a learning app.",
    relevance: 5,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official Fender/Fender Play and app store sources linked; bundle and performance metrics remain follow up data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track software bundling, beginner bundles, retail partnerships, and learning pushes.",
    tags: ["instrument", "brand", "partner"]
  },
  {
    id: "yamaha",
    name: "Yamaha",
    type: "Hardware and education ecosystem",
    category: "hardware",
    subcategory: "Instruments, audio, schools, and education infrastructure",
    geography: "Global",
    reach: "Major global brand",
    model: "Hardware, education, services",
    ownership: "Public company",
    ai: "Research smart instruments, learning integrations, and audio AI",
    description: "Large music instrument and audio company with broad education relevance.",
    why: "Influences hardware access, music education channels, and partner possibilities.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public company/product source linked; needs performance validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track connected instrument and education initiatives.",
    tags: ["instrument", "education", "partner"]
  },
  {
    id: "thomann",
    name: "Thomann",
    type: "Retail channel",
    category: "hardware",
    subcategory: "European gear purchase and beginner bundle surface",
    geography: "Europe",
    reach: "Large European music retailer",
    model: "Ecommerce, private label, content",
    ownership: "Private",
    ai: "Research recommendation and content initiatives",
    description: "Major instrument retailer with reach at the moment learners buy gear.",
    why: "Retailers can influence purchase intent, bundles, learning referrals, and beginner journeys.",
    relevance: 4,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Public commerce/company sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Monitor beginner bundles, learning content, and marketplace moves.",
    tags: ["retail", "channel", "Europe"]
  },
  {
    id: "sweetwater",
    name: "Sweetwater",
    type: "Retail channel",
    category: "hardware",
    subcategory: "US gear purchase, sales support, and content surface",
    geography: "US",
    reach: "Large US music retailer",
    model: "Ecommerce, sales support, content",
    ownership: "Private",
    ai: "Research recommendation and support initiatives",
    description: "Large music gear retailer with strong content and sales support surface.",
    why: "Can shape the US beginner journey and partner ecosystem around instrument purchases.",
    relevance: 3,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Public commerce/company sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track education bundles and learning partnerships.",
    tags: ["retail", "channel", "US"]
  },
  {
    id: "bandlab",
    name: "BandLab",
    type: "Creation and social platform",
    category: "creation",
    subcategory: "Cloud creation, collaboration, community, and AI-assisted tools",
    geography: "Global",
    reach: "Large creator community",
    model: "Creator tools, social, services",
    ownership: "BandLab Technologies",
    ai: "AI-assisted creation and creator workflow research target",
    description: "Cloud music creation and collaboration ecosystem with strong creator and community signals.",
    why: "Represents the shift from learning an instrument to making and sharing music quickly.",
    relevance: 5,
    momentum: 5,
    aiScore: 5,
    sourceStatus: "Needs company + funding + app data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor AI creation, social loops, and creator monetization moves.",
    tags: ["creation", "community", "AI"]
  },
  {
    id: "musescore",
    name: "MuseScore",
    type: "Notation and repertoire ecosystem",
    category: "creation",
    subcategory: "Notation, sheet music, arranging, and repertoire discovery",
    geography: "Global",
    reach: "Large musician utility",
    model: "Freemium, subscription, open source ecosystem",
    ownership: "Muse Group",
    ai: "Research notation, arrangement, and content tooling AI",
    description: "Notation, sheet music, and practice utility ecosystem.",
    why: "Important for learners who move into reading, arranging, composing, and repertoire discovery.",
    relevance: 4,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Public product sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track Muse Group bundling and AI-assisted notation signals.",
    tags: ["notation", "sheet music", "utility"]
  },
  {
    id: "songsterr",
    name: "Songsterr",
    type: "Song-practice utility",
    category: "practice",
    subcategory: "Tabs, playback, and song-led practice",
    geography: "Global",
    reach: "Large tab utility",
    model: "Freemium, subscription",
    ownership: "To verify",
    ai: "Research discovery, tab generation, and practice support",
    description: "Tab player and practice utility for guitar, bass, and drums.",
    why: "Captures song-driven practice intent and recurring hobby use.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public app/product sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app growth and feature releases.",
    tags: ["tabs", "practice", "utility"]
  },
  {
    id: "splice",
    name: "Splice",
    type: "Creator marketplace",
    category: "creation",
    subcategory: "Samples, sounds, AI search, and creator workflow",
    geography: "Global",
    reach: "Large creator tool",
    model: "Subscription and marketplace",
    ownership: "Private",
    ai: "AI search, generation, and workflow research target",
    description: "Sample, sound, and creator workflow platform.",
    why: "Shows how hobbyists and creators pay for tools that accelerate making music.",
    relevance: 4,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Needs company + funding source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor AI search, creation workflow, and creator subscription moves.",
    tags: ["creation", "samples", "subscription"]
  },
  {
    id: "ableton",
    name: "Ableton",
    type: "Production platform",
    category: "creation",
    subcategory: "DAW, hardware, learning resources, and creator workflow",
    geography: "Global",
    reach: "Major music creation platform",
    model: "Software and hardware",
    ownership: "Private",
    ai: "Research assisted production and learning workflows",
    description: "Professional and hobbyist music production platform.",
    why: "Influences the path from learning to creating, especially for modern electronic music hobbyists.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public company/product source linked; needs performance validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track education initiatives and creator workflow launches.",
    tags: ["DAW", "creation", "education"]
  },
  {
    id: "suno",
    name: "Suno",
    type: "AI creation disruptor",
    category: "ai",
    subcategory: "Prompt-to-song generation and rights/licensing risk",
    geography: "Global",
    reach: "High visibility AI platform",
    model: "AI generation subscription",
    ownership: "Private",
    ai: "Core AI music generation",
    description: "AI music generation platform that changes how non-musicians create complete songs.",
    why: "May shift the meaning of music participation, motivation, and creation for casual users.",
    relevance: 5,
    momentum: 5,
    aiScore: 5,
    sourceStatus: "Needs funding + legal + usage source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor product adoption, copyright litigation, licensing, and consumer behavior.",
    tags: ["AI", "generation", "disruptor"]
  },
  {
    id: "udio",
    name: "Udio",
    type: "AI creation disruptor",
    category: "ai",
    subcategory: "Prompt-based music generation and licensing transition",
    geography: "Global",
    reach: "High visibility AI platform",
    model: "AI generation subscription",
    ownership: "Private",
    ai: "Core AI music generation",
    description: "AI music generation platform for prompt-based song creation.",
    why: "Important to understand whether AI creation competes with, complements, or expands music learning.",
    relevance: 4,
    momentum: 5,
    aiScore: 5,
    sourceStatus: "Needs funding + legal + usage source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor adoption, rights issues, and user segments.",
    tags: ["AI", "generation", "watchlist"]
  },
  {
    id: "moises",
    name: "Moises",
    type: "AI practice utility",
    category: "ai",
    subcategory: "Stem separation, smart practice, and musician audio tools",
    geography: "Global",
    reach: "Large musician utility",
    model: "Freemium, subscription",
    ownership: "Private",
    ai: "Audio separation, practice tools, smart music utilities",
    description: "AI-powered music practice and audio utility used by musicians and learners.",
    why: "Strong example of AI improving practice workflows without replacing instrument learning.",
    relevance: 5,
    momentum: 4,
    aiScore: 5,
    sourceStatus: "Needs app + company source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track practice features, app growth, and partnerships.",
    tags: ["AI", "practice", "utility"]
  },
  {
    id: "duolingo",
    name: "Duolingo",
    type: "Consumer learning benchmark",
    category: "education",
    subcategory: "Habit, gamification, AI tutoring, and subscription education",
    geography: "Global",
    reach: "Very large public consumer education app",
    model: "Freemium, subscription, ads",
    ownership: "Public company",
    ai: "AI personalization, tutoring, and content systems research target",
    description: "Consumer learning benchmark for habit formation, gamification, and subscription education.",
    why: "Not music specific, but highly relevant for learning loops, retention, brand, and AI in education.",
    relevance: 4,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Public filings, official Music launch and Loog partner sources linked; Music performance remains follow up data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Monitor AI product launches, pricing, and retention mechanics.",
    tags: ["education", "gamification", "benchmark"]
  },
  {
    id: "kahoot",
    name: "Kahoot",
    type: "Classroom engagement benchmark",
    category: "education",
    subcategory: "Game-based learning, schools, content generation, and teacher channels",
    geography: "Global",
    reach: "Large education platform",
    model: "SaaS, consumer, education",
    ownership: "Private; investor consortium led by Goldman Sachs Asset Management",
    ai: "Research content generation and classroom AI",
    description: "Game-based learning platform with broad teacher and classroom reach.",
    why: "Useful benchmark for game based learning engagement, classroom channels, education buyers, and AI assisted content creation.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Official product and AI sources linked; ownership and market relevance should be cited before board use",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track AI content generation, classroom distribution, enterprise learning, and education buyer signals.",
    tags: ["education", "classroom", "benchmark"]
  },
  {
    id: "brilliant",
    name: "Brilliant",
    type: "Interactive learning benchmark",
    category: "education",
    subcategory: "Active problem-solving, serious learning, and AI tutoring",
    geography: "Global",
    reach: "Large niche education app",
    model: "Subscription",
    ownership: "Private",
    ai: "Research adaptive learning and AI tutoring signals",
    description: "Interactive learning platform known for active problem-solving formats.",
    why: "Relevant benchmark for serious-but-accessible learning, habit, and subscription depth.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public company/product source linked; needs performance validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track AI tutoring and course expansion.",
    tags: ["education", "interactive", "benchmark"]
  },
  {
    id: "marty-music",
    name: "Marty Music",
    type: "Creator-led practice influence",
    category: "practice",
    subcategory: "YouTube guitar lessons, trust, songs, and beginner funnel",
    geography: "Global",
    reach: "Large YouTube audience",
    model: "Free content, courses, sponsorships",
    ownership: "Independent",
    ai: "Research creator tooling and content workflows",
    description: "Creator-led guitar learning presence with broad beginner reach.",
    why: "Creators shape trust, song choice, and the early learner funnel.",
    relevance: 4,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Public web/creator sources linked; needs audience data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track audience, partnerships, and course packaging.",
    tags: ["creator", "YouTube", "guitar"]
  },
  {
    id: "berklee-online",
    name: "Berklee Online",
    type: "Formal music education benchmark",
    category: "education",
    subcategory: "Online courses, certificates, degrees, and institutional credibility",
    geography: "Global",
    reach: "Large institutional music education brand",
    model: "Courses, certificates, degrees",
    ownership: "Berklee College of Music",
    ai: "Research AI in curriculum, practice support, and online education delivery",
    description: "Institutional online music education platform connected to a globally known music school.",
    why: "Represents the formal education end of the ecosystem and shapes credibility, curriculum, and learner aspirations.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public institution/program sources linked; needs adoption data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track online program growth, AI curriculum, and partnerships.",
    tags: ["education", "institution", "teacher of teachers"]
  },
  {
    id: "mtna",
    name: "MTNA",
    type: "Teacher network",
    category: "education",
    subcategory: "Private teacher trust, professional development, and certification",
    geography: "US",
    reach: "Large teacher network",
    model: "Membership, events, certification",
    ownership: "Nonprofit association",
    ai: "Research teacher tooling, certification, and AI adoption signals",
    description: "Music Teachers National Association represents private and studio music teachers.",
    why: "Teacher networks influence how learners are guided, what tools are trusted, and how digital learning is perceived.",
    relevance: 3,
    momentum: 2,
    aiScore: 1,
    sourceStatus: "Public association source linked; needs adoption data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track conferences, awards, certification, and technology adoption.",
    tags: ["teachers", "association", "credibility"]
  },
  {
    id: "rsi",
    name: "Rousseau",
    type: "Cultural practice influence",
    category: "practice",
    subcategory: "Aspirational piano performance content and digital-native motivation",
    geography: "Global",
    reach: "Large YouTube audience",
    model: "Content, sponsorship, platform influence",
    ownership: "Independent",
    ai: "Research AI visual performance and content tooling relevance",
    description: "Highly visible piano performance content brand.",
    why: "Cultural driver for piano aspiration, especially among digital-native hobbyists.",
    relevance: 3,
    momentum: 2,
    aiScore: 1,
    sourceStatus: "Creator/audience source linked; needs audience validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track audience and collaboration signals.",
    tags: ["creator", "piano", "culture"]
  },
  {
    id: "apple-garageband",
    name: "GarageBand",
    type: "Accessible creation app",
    category: "creation",
    subcategory: "Beginner-friendly creation inside the Apple ecosystem",
    geography: "Global",
    reach: "Preinstalled / broad Apple reach",
    model: "Ecosystem software",
    ownership: "Apple",
    ai: "Research Apple music AI and creator tooling direction",
    description: "Accessible music creation product in the Apple ecosystem.",
    why: "Makes music creation available before many users think of formal learning.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public Apple product source linked; needs usage validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Monitor Apple creative tools and AI announcements.",
    tags: ["creation", "Apple", "beginner"]
  },
  {
    id: "accel",
    name: "Accel",
    type: "Capital signal",
    category: "signals",
    subcategory: "VC and growth-investor signal for consumer, AI, and marketplaces",
    geography: "Global",
    reach: "Major venture firm",
    model: "Venture capital",
    ownership: "Private partnership",
    ai: "Investor signal in consumer, SaaS, AI, and marketplaces",
    description: "Large venture firm relevant as a capital and market-signal node.",
    why: "Investor behavior helps reveal where capital expects learning, consumer subscriptions, and AI to move.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public portfolio/source linked; needs monitoring setup",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track music, education, AI, and consumer subscription investments.",
    tags: ["investor", "capital", "market signal"]
  },
  {
    id: "techcrunch",
    name: "TechCrunch",
    type: "News signal source",
    category: "signals",
    subcategory: "Startup, funding, product launch, AI, and M&A monitoring",
    geography: "Global",
    reach: "Large tech media outlet",
    model: "Media",
    ownership: "To verify",
    ai: "News signal for AI, funding, product launches",
    description: "Technology media source for funding and startup momentum signals.",
    why: "Useful for tracking last 24 month moves in AI, apps, funding, and acquisitions.",
    relevance: 2,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public monitoring source linked; needs feed setup",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Use as part of news monitoring feed.",
    tags: ["media", "news", "signals"]
  },
  {
    id: "bett-awards",
    name: "BETT Awards",
    type: "Recognition signal",
    category: "signals",
    subcategory: "Education technology awards and credibility opportunities",
    geography: "International",
    reach: "Education industry signal",
    model: "Awards and recognition",
    ownership: "To verify",
    ai: "Award categories may signal education AI positioning",
    description: "Education awards example for credibility and category mapping.",
    why: "Awards can reveal positioning opportunities and credibility markers for learning products.",
    relevance: 2,
    momentum: 2,
    aiScore: 2,
    sourceStatus: "Public award source linked; needs criteria review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Validate award relevance and submission timing.",
    tags: ["awards", "education", "credibility"]
  },
  {
    id: "creative-europe",
    name: "Creative Europe",
    type: "Public funding signal",
    category: "signals",
    subcategory: "Cultural, creative-sector, digital, and education funding opportunities",
    geography: "Europe",
    reach: "European cultural and creative sectors",
    model: "Grants and public funding",
    ownership: "European Union programme",
    ai: "Research calls that connect culture, education, digital tools, and innovation",
    description: "Public funding example for culture, education, and creative-sector initiatives.",
    why: "Funding programmes can shape non-dilutive opportunities, partnerships, credibility, and strategic projects around music education.",
    relevance: 2,
    momentum: 2,
    aiScore: 1,
    sourceStatus: "Public funding source linked; needs eligibility review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track relevant calls, eligibility windows, consortium requirements, and education/music technology fit.",
    tags: ["funding", "public", "Europe"]
  },
  {
    id: "guitar-tricks",
    name: "Guitar Tricks",
    type: "Structured guitar learning platform",
    category: "learning",
    subcategory: "Large guitar lesson library, song tutorials, and guided beginner path",
    geography: "Global / US",
    reach: "Large online guitar education platform",
    model: "Subscription lessons and tools",
    ownership: "Guitar Tricks Inc.",
    ai: "Research personalization, practice planning, and lesson recommendation signals",
    description: "Long-running online guitar lesson platform with structured courses, songs, and learning tools.",
    why: "Important guitar-specific subscription benchmark for curriculum depth, song-led learning, and adult beginner messaging.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public app/product sources linked; needs Appfigures + traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track pricing, catalog claims, app rankings, and acquisition funnel.",
    tags: ["guitar", "lessons", "subscription"]
  },
  {
    id: "truefire",
    name: "TrueFire",
    type: "Advanced guitar learning library",
    category: "learning",
    subcategory: "Large interactive lesson library and artist-led courses",
    geography: "Global / US",
    reach: "Large guitar education library",
    model: "Subscription and course marketplace",
    ownership: "TrueFire Studios",
    ai: "Research discovery, curriculum navigation, and adaptive practice opportunities",
    description: "Deep online guitar lesson library with interactive tools and specialist instructors.",
    why: "Relevant for depth, intermediate/advanced learners, teacher-led content, and long-tail guitar education.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product/app sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track catalog growth, subscriptions, and teacher marketplace mechanics.",
    tags: ["guitar", "courses", "advanced"]
  },
  {
    id: "pickup-music",
    name: "Pickup Music",
    type: "Structured guitar learning platform",
    category: "learning",
    subcategory: "Modern guitar pathways, challenges, artist series, and instructor feedback",
    geography: "Global / US",
    reach: "Growing modern guitar platform",
    model: "Subscription and community",
    ownership: "Pickup Music, Inc.",
    ai: "Research personalized feedback, pathway design, and practice accountability",
    description: "Modern guitar-learning platform built around structured pathways and contemporary player identity.",
    why: "Useful benchmark for higher-intent guitarists, modern aesthetics, community, and guided weekly practice.",
    relevance: 4,
    momentum: 4,
    aiScore: 2,
    sourceStatus: "Public product/app/company sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track pathway design, instructor feedback model, artist partnerships, and pricing.",
    tags: ["guitar", "structured learning", "community"]
  },
  {
    id: "rocksmith-plus",
    name: "Rocksmith+",
    type: "Interactive song-learning service",
    category: "learning",
    subcategory: "Real-instrument feedback for guitar, bass, and piano",
    geography: "Global",
    reach: "Major game-backed learning brand",
    model: "Subscription learning service",
    ownership: "Ubisoft",
    ai: "Research note detection, adaptive difficulty, and song-based feedback mechanics",
    description: "Interactive music-learning service built around real instruments, song catalog, and feedback.",
    why: "Important benchmark for real-time feedback, licensed songs, game-like practice, and multi-instrument expansion.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Needs app data + catalog + subscription performance",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track instrument expansion, catalog depth, pricing, and retention signals.",
    tags: ["feedback", "songs", "Ubisoft"]
  },
  {
    id: "gibson-app",
    name: "Gibson App",
    type: "Brand-backed guitar learning app",
    category: "learning",
    subcategory: "Guitar learning path, real-time feedback, tuner, chords, and tabs",
    geography: "Global / US",
    reach: "Brand-backed learning app",
    model: "App subscription and hardware bundle",
    ownership: "Gibson",
    ai: "Research real-time feedback and brand-led personalization",
    description: "Guitar-learning app connected to Gibson's hardware and brand ecosystem.",
    why: "Shows how a major guitar brand can bundle learning with instrument purchase and beginner motivation.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Needs Appfigures + bundle performance",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track app rankings, guitar-purchase bundles, and learning-path updates.",
    tags: ["guitar", "brand", "feedback"]
  },
  {
    id: "piano-marvel",
    name: "Piano Marvel",
    type: "Piano learning software",
    category: "learning",
    subcategory: "Piano reading, songs, lessons, and teacher/classroom use",
    geography: "Global / US",
    reach: "Niche but established piano education software",
    model: "Subscription and school/studio use",
    ownership: "To verify",
    ai: "Research assessment, practice data, and classroom feedback opportunities",
    description: "Piano learning software used for individual learners and teacher-supported environments.",
    why: "Useful for piano-specific pedagogy, assessment, reading practice, and school/studio crossover.",
    relevance: 3,
    momentum: 2,
    aiScore: 2,
    sourceStatus: "Needs app + school channel validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app data, school/studio usage, and assessment features.",
    tags: ["piano", "assessment", "teachers"]
  },
  {
    id: "melodics",
    name: "Melodics",
    type: "Interactive instrument practice app",
    category: "learning",
    subcategory: "Drums, keys, and pad-controller lessons with real-time feedback",
    geography: "Global",
    reach: "Niche but visible practice app",
    model: "Subscription lessons",
    ownership: "To verify",
    ai: "Research timing feedback, adaptive practice, and gamified skills",
    description: "Interactive learning app for drums, keys, and finger drumming with real-time feedback.",
    why: "Broadens the map beyond guitar/piano and shows how feedback-led practice works for rhythm and production-adjacent skills.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Needs Appfigures + company source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track product scope, app rankings, and creator/instrument partnerships.",
    tags: ["drums", "keys", "feedback"]
  },
  {
    id: "chordify",
    name: "Chordify",
    type: "Song-chord practice utility",
    category: "practice",
    subcategory: "Automatic chords, tuner, and play-along for guitar, piano, and ukulele",
    geography: "Global",
    reach: "Large chord utility",
    model: "Freemium and subscription",
    ownership: "Chordify B.V.",
    ai: "Chord recognition, song parsing, and practice support",
    description: "Chord-recognition and play-along platform that turns songs into playable chord progressions.",
    why: "Owns a high-intent moment between song discovery and self-guided practice.",
    relevance: 4,
    momentum: 3,
    aiScore: 4,
    sourceStatus: "Official product/support plus Google Play and App Store sources linked; traffic and conversion remain follow up data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track app rankings, chord-recognition features, and catalog/rights signals.",
    tags: ["chords", "songs", "practice"]
  },
  {
    id: "soundslice",
    name: "Soundslice",
    type: "Interactive notation and lesson platform",
    category: "practice",
    subcategory: "Synced notation, video, transcription, teaching, and practice loops",
    geography: "Global / US",
    reach: "Specialist musician and teacher utility",
    model: "Freemium, teacher tools, and store",
    ownership: "To verify",
    ai: "Research transcription, notation, and adaptive practice opportunities",
    description: "Interactive sheet music platform combining notation, video/audio sync, looping, and teaching workflows.",
    why: "Important for serious practice, teachers, transcription, and the gap between video lessons and playable notation.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Needs traffic + teacher-channel validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track creator storefront, teacher use, and transcription tooling.",
    tags: ["notation", "teachers", "practice"]
  },
  {
    id: "guitar-pro",
    name: "Guitar Pro",
    type: "Tab editor and practice software",
    category: "practice",
    subcategory: "Tab reading, writing, playback, and mobile practice companion",
    geography: "Global",
    reach: "Established guitarist utility",
    model: "Paid software and mobile app",
    ownership: "Arobas Music",
    ai: "Research AI tab creation, arrangement, and learning companion opportunities",
    description: "Tablature reader/editor used by guitarists, teachers, transcribers, and musicians.",
    why: "Sits at the intersection of tabs, practice, composition, and learning material creation.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs app + usage source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track mobile app, Guitar Pro 8 ecosystem, and AI-assisted tab workflows.",
    tags: ["tabs", "notation", "guitar"]
  },
  {
    id: "youtube-artists",
    name: "YouTube",
    type: "Music discovery and creator platform",
    category: "practice",
    subcategory: "Video lessons, music discovery, creator channels, Shorts, and artist tools",
    geography: "Global",
    reach: "Massive global platform",
    model: "Ads, subscription, creator monetization",
    ownership: "Google / Alphabet",
    ai: "Recommendation, Shorts discovery, creator tools, and AI content policy",
    description: "Default open platform for free music learning, creator-led lessons, discovery, and artist careers.",
    why: "A major substitute and funnel for self-guided learning; it shapes inspiration, discovery, and expectations of free content.",
    relevance: 5,
    momentum: 5,
    aiScore: 4,
    sourceStatus: "Needs internal funnel + YouTube trend monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track lesson search behavior, Shorts music discovery, creator partnerships, and AI policy.",
    tags: ["video", "creator", "free learning"]
  },
  {
    id: "gibson",
    name: "Gibson",
    type: "Hardware and brand ecosystem",
    category: "hardware",
    subcategory: "Guitars, brand aspiration, Gibson App bundles, and guitar culture",
    geography: "Global / US",
    reach: "Major guitar brand",
    model: "Hardware, content, and learning app bundle",
    ownership: "Private",
    ai: "Research connected learning, app feedback, and brand-led beginner journeys",
    description: "Iconic guitar brand with a direct learning app and hardware-led beginner entry points.",
    why: "Hardware brands can capture learner intent before software choice and can bundle education into purchase moments.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs company + bundle performance source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track Gibson App bundles, beginner campaigns, artist content, and retail partnerships.",
    tags: ["guitar", "hardware", "brand"]
  },
  {
    id: "positive-grid",
    name: "Positive Grid",
    type: "Smart amp and practice ecosystem",
    category: "hardware",
    subcategory: "Spark amps, app, tones, auto chords, backing tracks, and AI tone features",
    geography: "Global",
    reach: "Visible smart-amp ecosystem",
    model: "Hardware, app, software, and accessories",
    ownership: "Private",
    ai: "AI tone generation, chord detection, smart practice, and connected hardware",
    description: "Smart guitar amp and app ecosystem connecting gear, tones, songs, and practice.",
    why: "Shows how hardware can become an app-led practice surface and compete for daily guitar time.",
    relevance: 4,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Needs sales + app data + AI feature tracking",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track Spark app, AI amp features, tone marketplace, and beginner practice loops.",
    tags: ["smart amp", "practice", "AI"]
  },
  {
    id: "reverb",
    name: "Reverb",
    type: "Music gear marketplace",
    category: "hardware",
    subcategory: "New, used, and vintage instrument marketplace",
    geography: "Global / US",
    reach: "Large music gear marketplace",
    model: "Marketplace fees and seller tools",
    ownership: "Creator Partners / Servco after Etsy sale closed in June 2025",
    ai: "Research recommendations, pricing intelligence, and used-gear discovery",
    description: "Marketplace for buying and selling instruments, pedals, synths, and music gear.",
    why: "Influences gear affordability, second-hand entry points, and the broader instrument-purchase journey.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official app and ownership-close sources linked; needs traffic + category data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track post-Etsy ownership direction, beginner gear demand, marketplace categories, and brand partnerships.",
    tags: ["marketplace", "gear", "used instruments"]
  },
  {
    id: "guitar-center",
    name: "Guitar Center",
    type: "Retail and lessons channel",
    category: "hardware",
    subcategory: "US retail, private lessons, and beginner gear journey",
    geography: "US",
    reach: "Large US music retail chain",
    model: "Retail, services, lessons, and financing",
    ownership: "Private",
    ai: "Research local lesson funnel, recommendations, and beginner bundles",
    description: "US music retailer offering instruments, services, and in-person music lessons.",
    why: "Combines gear purchase, local instruction, financing, and beginner commitment moments.",
    relevance: 3,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Needs retail + lesson volume source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track lesson programs, beginner bundles, and retail-to-learning referral opportunities.",
    tags: ["retail", "lessons", "US"]
  },
  {
    id: "boss",
    name: "BOSS / Roland",
    type: "Guitar technology and effects ecosystem",
    category: "hardware",
    subcategory: "Pedals, amps, multi-effects, loop stations, and connected practice gear",
    geography: "Global / Japan",
    reach: "Major instrument technology brand",
    model: "Hardware, software, and accessories",
    ownership: "Roland",
    ai: "Research connected effects, smart amps, loopers, and app-led practice workflows",
    description: "Major guitar/bass effects and amp ecosystem under Roland.",
    why: "Important for how guitarists practice, shape sound, record, loop, and move toward creation.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs product roadmap + connected app source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track connected amp/effects launches, loop station use, and beginner-friendly gear.",
    tags: ["effects", "amps", "Roland"]
  },
  {
    id: "soundtrap",
    name: "Soundtrap",
    type: "Browser-based collaborative studio",
    category: "creation",
    subcategory: "Online recording, loops, instruments, collaboration, and education use",
    geography: "Global",
    reach: "Spotify-backed online studio",
    model: "Freemium / subscription",
    ownership: "Spotify",
    ai: "Research browser creation, collaboration, and education workflows",
    description: "Online music studio for making and collaborating on music in the browser.",
    why: "Represents low-friction creation after or alongside learning, especially for schools and casual creators.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public product/education sources linked; needs usage data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track Soundtrap education, web creation features, and Spotify ecosystem moves.",
    tags: ["browser DAW", "collaboration", "Spotify"]
  },
  {
    id: "fl-studio",
    name: "FL Studio",
    type: "Accessible production platform",
    category: "creation",
    subcategory: "DAW, mobile app, FL Cloud, web beta, and beginner-friendly production workflow",
    geography: "Global / Belgium",
    reach: "Major producer platform",
    model: "Paid software, cloud, and mobile",
    ownership: "Image-Line",
    ai: "Research browser DAW, AI-assisted production, and beginner creator onboarding",
    description: "Popular music production software known for fast beat-making and accessible creator workflows.",
    why: "Shapes the path from musical interest to beat-making, production, and creator identity.",
    relevance: 4,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Needs product + web beta monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track FL Studio Web, FL Cloud, mobile workflows, and beginner onboarding.",
    tags: ["DAW", "production", "creator"]
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    type: "Artist and audio community platform",
    category: "creation",
    subcategory: "Music hosting, discovery, creator community, and artist tools",
    geography: "Global",
    reach: "Large artist/audio community",
    model: "Subscription, ads, artist services",
    ownership: "Private",
    ai: "Research AI content policy, creator tools, recommendation, and artist identity",
    description: "Large online audio platform for artists, DJs, and audio creators to publish and discover music.",
    why: "Important for the creator identity side of the hobby and for how learners become publishers.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public company/app/artist sources linked; needs AI policy monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track artist tools, AI policy, distribution services, and discovery shifts.",
    tags: ["publishing", "community", "artists"]
  },
  {
    id: "distrokid",
    name: "DistroKid",
    type: "Music distribution service",
    category: "creation",
    subcategory: "Distribution to streaming platforms, artist tools, and creator monetization",
    geography: "Global / US",
    reach: "Large independent-artist distribution service",
    model: "Annual subscription and add-on services",
    ownership: "Private",
    ai: "Research AI music distribution policies, metadata, and artist authenticity",
    description: "Music distribution service for independent artists to release songs to streaming platforms.",
    why: "Marks the next step after creation: distribution, artist identity, analytics, and monetization.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Public distribution/app sources linked; needs artist-count + policy monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track AI content rules, artist tools, and platform integrations.",
    tags: ["distribution", "artists", "monetization"]
  },
  {
    id: "landr",
    name: "LANDR",
    type: "AI mastering and creator services",
    category: "creation",
    subcategory: "AI mastering, distribution, plugins, samples, courses, and collaboration",
    geography: "Global / Canada",
    reach: "Broad creator services platform",
    model: "Subscription and services",
    ownership: "Private",
    ai: "AI mastering, stem separation, and AI-content distribution policy",
    description: "Creator services platform spanning AI mastering, distribution, samples, plugins, and music courses.",
    why: "Shows the bundled creator-services direction around AI, release workflows, and education.",
    relevance: 4,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Needs usage + distribution policy tracking",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track AI mastering, distribution restrictions, stem tools, and course/service bundling.",
    tags: ["AI mastering", "distribution", "creator services"]
  },
  {
    id: "native-instruments",
    name: "Native Instruments",
    type: "Production software and hardware ecosystem",
    category: "creation",
    subcategory: "Kontakt, Komplete, Maschine, Traktor, instruments, effects, and DJ tools",
    geography: "Global / Germany",
    reach: "Major producer technology brand",
    model: "Software, hardware, subscriptions, and bundles",
    ownership: "Definitive agreement for inMusic to acquire Native Instruments announced May 2026; closing/status should be monitored",
    ai: "Research production assistance, sound discovery, and the inMusic/Native Instruments integration roadmap",
    description: "Music production software/hardware ecosystem for producers, sound designers, DJs, and musicians.",
    why: "Influences the creator tooling stack once learners move into production, sound design, and performance.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Official company plus acquisition-announcement sources linked; closing/status and roadmap need monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track inMusic deal close, Komplete/Traktor accessibility, integration with Akai/Moog ecosystem, and AI tooling.",
    tags: ["production", "software", "hardware"]
  },
  {
    id: "bandcamp",
    name: "Bandcamp",
    type: "Direct-to-fan music marketplace",
    category: "creation",
    subcategory: "Artist store, fan community, discovery, merch, and human-artist positioning",
    geography: "Global",
    reach: "Large independent music community",
    model: "Marketplace and artist services",
    ownership: "Songtradr",
    ai: "AI-content policy and human-authenticity positioning",
    description: "Direct-to-fan marketplace and music community for artists and labels.",
    why: "Represents a human-artist and fan-support model that contrasts with streaming and AI-generated content.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Needs ownership + AI policy monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track direct-to-fan tools, AI policy, and artist/community positioning.",
    tags: ["direct-to-fan", "artists", "marketplace"]
  },
  {
    id: "lalal-ai",
    name: "LALAL.AI",
    type: "AI stem separation utility",
    category: "ai",
    subcategory: "Vocal remover, instrumental isolation, and multi-stem extraction",
    geography: "Global",
    reach: "Visible AI audio utility",
    model: "Credit/subscription AI audio service",
    ownership: "To verify",
    ai: "Core AI stem separation and audio extraction",
    description: "AI audio separation tool for removing vocals and extracting stems.",
    why: "Directly affects practice, karaoke, remixing, transcription, and learner-created backing tracks.",
    relevance: 4,
    momentum: 4,
    aiScore: 5,
    sourceStatus: "Needs usage + app + DAW plugin monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track DAW plugin, stem quality, pricing, and mobile app presence.",
    tags: ["AI", "stem separation", "practice"]
  },
  {
    id: "aiva",
    name: "AIVA",
    type: "AI composition platform",
    category: "ai",
    subcategory: "AI music generation, style models, editing, and licensing",
    geography: "Global / Europe",
    reach: "Established AI music generator",
    model: "Freemium and subscription",
    ownership: "To verify",
    ai: "Core AI music generation",
    description: "AI music generation assistant for creating songs across styles.",
    why: "Useful older reference for AI composition, licensing positioning, and professional/creator workflows.",
    relevance: 3,
    momentum: 3,
    aiScore: 5,
    sourceStatus: "Public product/download sources linked; needs usage + licensing validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track model capabilities, licensing claims, and creator adoption.",
    tags: ["AI", "composition", "licensing"]
  },
  {
    id: "elevenlabs-music",
    name: "ElevenLabs Music",
    type: "AI music and audio platform",
    category: "ai",
    subcategory: "Text-to-music, vocals, lyrics, instrumentals, and broader AI audio platform",
    geography: "Global / UK-US",
    reach: "High-profile AI audio company",
    model: "AI platform and enterprise/API services",
    ownership: "Private",
    ai: "Core AI music and audio generation",
    description: "AI audio platform expanding into full music generation from natural language prompts.",
    why: "Important because major AI audio platforms may enter music creation, rights, and creator tooling at scale.",
    relevance: 4,
    momentum: 5,
    aiScore: 5,
    sourceStatus: "Needs licensing + adoption + policy monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track Eleven Music, licensing posture, artist tools, and industry partnerships.",
    tags: ["AI", "music generation", "audio platform"]
  },
  {
    id: "tonebase",
    name: "tonebase",
    type: "High-skill music education platform",
    category: "education",
    subcategory: "Classical guitar, piano, voice, strings, winds, brass, and expert courses",
    geography: "Global / US",
    reach: "Specialist premium music education platform",
    model: "Subscription courses and live learning",
    ownership: "To verify",
    ai: "Research expert feedback, practice planning, and premium pedagogy",
    description: "Online classical music lesson platform featuring award-winning musicians and teachers.",
    why: "Represents premium, high-skill instruction and aspirational music education beyond casual beginner apps.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product/instrument sources linked; needs growth + retention data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track instrument expansion, live workshops, and subscriber positioning.",
    tags: ["classical", "premium education", "teachers"]
  },
  {
    id: "artistworks",
    name: "ArtistWorks",
    type: "Teacher-led online music school",
    category: "education",
    subcategory: "Online music schools, video exchange, and pro artist instruction",
    geography: "Global / US",
    reach: "Established online music education platform",
    model: "Subscription lessons and personalized instruction",
    ownership: "To verify",
    ai: "Research personalized feedback, teacher workflows, and async instruction",
    description: "Online music lesson platform with professional artists and personalized instruction.",
    why: "Useful benchmark for teacher feedback, asynchronous mentorship, and instrument-specific course schools.",
    relevance: 3,
    momentum: 2,
    aiScore: 2,
    sourceStatus: "Public product sources linked; needs traffic data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track video exchange, schools, library partnerships, and pricing.",
    tags: ["teachers", "courses", "feedback"]
  },
  {
    id: "spotify-artists",
    name: "Spotify for Artists",
    type: "Artist analytics and promotion platform",
    category: "signals",
    subcategory: "Artist profile, audience analytics, promotion, merch, and streaming context",
    geography: "Global",
    reach: "Major global music platform",
    model: "Streaming ecosystem and artist tools",
    ownership: "Spotify",
    ai: "Artist authenticity, AI music policy, recommendations, and creator tools",
    description: "Artist-facing platform for managing Spotify presence, audience insights, promotion, and artist business tools.",
    why: "Important for how hobbyists understand music success, release goals, artist identity, and AI-authenticity debates.",
    relevance: 4,
    momentum: 5,
    aiScore: 4,
    sourceStatus: "Needs music policy + creator tools monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track verified artist signals, AI music policy, Campaign Kit, and artist analytics.",
    tags: ["streaming", "artists", "analytics"]
  },
  {
    id: "tiktok-artists",
    name: "TikTok for Artists",
    type: "Music discovery and artist insights platform",
    category: "signals",
    subcategory: "Music insights, fan engagement, promotion, and short-form discovery",
    geography: "Global",
    reach: "Massive short-form discovery platform",
    model: "Platform ecosystem and artist tools",
    ownership: "ByteDance",
    ai: "Recommendation, trend detection, creator tools, and AI content policy",
    description: "Artist insight platform tied to TikTok's music discovery and fan engagement surface.",
    why: "TikTok can shape song discovery, cultural momentum, and what learners want to play.",
    relevance: 4,
    momentum: 5,
    aiScore: 4,
    sourceStatus: "Needs trend monitoring + music partnership source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track TikTok for Artists, song trends, creator learning spillover, and music promotion tools.",
    tags: ["short-form", "discovery", "artists"]
  },
  {
    id: "patreon",
    name: "Patreon",
    type: "Creator membership platform",
    category: "signals",
    subcategory: "Musician memberships, direct fan monetization, digital shops, and community",
    geography: "Global / US",
    reach: "Large creator platform",
    model: "Membership and digital commerce",
    ownership: "Private",
    ai: "Research creator monetization, fan community, and direct-to-fan learning/content businesses",
    description: "Creator platform where musicians and educators can monetize memberships, exclusive work, and community.",
    why: "Relevant for creator-teachers, course communities, fan monetization, and alternatives to ad-driven platforms.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs musician category + creator economics source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track musician use cases, shops, memberships, and creator education models.",
    tags: ["creator economy", "membership", "musicians"]
  },
  {
    id: "musora",
    name: "Musora",
    type: "Multi-instrument lesson ecosystem",
    category: "learning",
    subcategory: "Drumeo, Pianote, Guitareo, Singeo, community, and app based lessons",
    geography: "Global / Canada",
    reach: "Large online music lesson ecosystem",
    model: "Subscription lessons, memberships, and community",
    ownership: "Private",
    ai: "Research practice feedback, lesson recommendation, and cross-instrument learning paths",
    description: "Umbrella music education platform spanning drums, piano, guitar, singing, lessons, and community.",
    why: "Adds an important multi-instrument subscription benchmark beyond single-instrument apps.",
    relevance: 4,
    momentum: 4,
    aiScore: 2,
    sourceStatus: "Needs app data + subscriber / traffic validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track app performance, instrument expansion, community mechanics, and lesson-library positioning.",
    tags: ["multi-instrument", "lessons", "subscription"]
  },
  {
    id: "fretello",
    name: "Fretello",
    type: "Guitar learning app",
    category: "learning",
    subcategory: "Structured guitar lessons, personalized practice plans, and app based feedback",
    geography: "Global / Europe",
    reach: "Specialist guitar app",
    model: "Subscription learning app",
    ownership: "Fretello GmbH",
    ai: "Research personalization, adaptive plans, and feedback patterns",
    description: "Mobile guitar learning app focused on structured plans and guided practice.",
    why: "Directly relevant for guitar onboarding, lesson pacing, personalization, and app-store positioning.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public product/app sources linked; needs Appfigures",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track rankings, pricing, Yamaha or hardware partnerships, and personalization claims.",
    tags: ["guitar", "app", "personalized practice"]
  },
  {
    id: "playground-sessions",
    name: "Playground Sessions",
    type: "Piano learning app",
    category: "learning",
    subcategory: "Interactive piano lessons, songs, gamified progress, and app-led practice",
    geography: "Global / US",
    reach: "Established piano learning platform",
    model: "Subscription and lifetime plans",
    ownership: "To verify",
    ai: "Research song-led feedback, lesson recommendation, and practice analytics",
    description: "Piano learning platform built around interactive lessons, songs, and progress feedback.",
    why: "Adds a piano-specific competitor benchmark for catalog, feedback, pricing, and motivation mechanics.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs Appfigures + traffic source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app rankings, catalog positioning, celebrity/teacher marketing, and conversion offers.",
    tags: ["piano", "songs", "interactive lessons"]
  },
  {
    id: "tomplay",
    name: "Tomplay",
    type: "Interactive sheet music app",
    category: "practice",
    subcategory: "Interactive sheet music, backing tracks, tempo control, and multi-instrument practice",
    geography: "Global / Europe",
    reach: "Large specialist sheet-music app",
    model: "Subscription and sheet music access",
    ownership: "To verify",
    ai: "Research accompaniment, practice analytics, and score-to-practice workflows",
    description: "Interactive sheet music platform with synchronized backing tracks and practice controls.",
    why: "Captures a serious-practice segment between traditional sheet music, backing tracks, and guided learning.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs app data + catalog / rights validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track instrument coverage, app rankings, catalog depth, and school/teacher use.",
    tags: ["sheet music", "practice", "backing tracks"]
  },
  {
    id: "chord-ai",
    name: "Chord ai",
    type: "AI chord recognition app",
    category: "practice",
    subcategory: "AI chord detection, beat tracking, song analysis, and play-any-song workflow",
    geography: "Global",
    reach: "Visible AI practice utility",
    model: "Freemium and subscription app",
    ownership: "Nomad AI",
    ai: "Core AI chord recognition and song parsing",
    description: "Mobile app that detects chords and song structure from audio to support self-guided playing.",
    why: "Important because it moves AI directly into the song-to-practice moment that GuitarTuna/Yousician users care about.",
    relevance: 4,
    momentum: 4,
    aiScore: 5,
    sourceStatus: "Public product/company/app sources linked; needs Appfigures + accuracy validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: true,
    recent: "Track app rankings, chord-detection quality, offline use, and monetization.",
    tags: ["AI", "chords", "practice utility"]
  },
  {
    id: "musicca",
    name: "Musicca",
    type: "Free music theory and practice site",
    category: "education",
    subcategory: "Music theory, exercises, tools, piano keyboard, and beginner references",
    geography: "Global",
    reach: "Large free web learning surface",
    model: "Free learning tools",
    ownership: "To verify",
    ai: "Research lightweight tutoring, exercises, and web-based learning tools",
    description: "Free music theory, exercise, and music-tool website used for self-guided learning.",
    why: "Useful benchmark for free utility, SEO discovery, theory learning, and low-friction education.",
    relevance: 3,
    momentum: 2,
    aiScore: 1,
    sourceStatus: "Public product/exercise sources linked; needs traffic + audience validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track traffic, SEO reach, tool breadth, and learner pathways from theory to playing.",
    tags: ["theory", "free learning", "web tools"]
  },
  {
    id: "abrsm",
    name: "ABRSM",
    type: "Music exam and assessment authority",
    category: "education",
    subcategory: "Music exams, graded assessments, practice tools, and curriculum credibility",
    geography: "Global / UK",
    reach: "Global music examination board",
    model: "Exams, books, apps, and learning resources",
    ownership: "Charity / exam board",
    ai: "Research assessment, practice support, and digital exam preparation",
    description: "Major international music exam board shaping formal learning goals and progression standards.",
    why: "Important for credibility, curriculum mapping, parent/teacher trust, and serious learner progression.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs regional uptake and digital tool validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track digital practice tools, exam pathways, teacher adoption, and curriculum changes.",
    tags: ["exams", "assessment", "curriculum"]
  },
  {
    id: "rcm",
    name: "Royal Conservatory of Music",
    type: "Music curriculum and digital learning ecosystem",
    category: "education",
    subcategory: "Curriculum, certificates, exams, digital learning, and teacher-supported progression",
    geography: "Canada / North America",
    reach: "Large formal music education brand",
    model: "Exams, curriculum, publishing, and digital learning",
    ownership: "Nonprofit institution",
    ai: "Research digital curriculum, assessment, and teacher-supported practice",
    description: "Formal music education institution with curriculum, assessments, and digital-learning resources.",
    why: "Adds North American formal-learning context and a trust benchmark for parents, teachers, and serious learners.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public learning/digital sources linked; needs teacher-channel validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track digital-learning products, certification pathways, and teacher ecosystem changes.",
    tags: ["curriculum", "exams", "teachers"]
  },
  {
    id: "school-of-rock",
    name: "School of Rock",
    type: "Offline music lesson franchise",
    category: "education",
    subcategory: "In-person lessons, performance-based learning, camps, and local music schools",
    geography: "Global / US",
    reach: "Large franchise learning network",
    model: "Local schools, lessons, camps, and performance programs",
    ownership: "Private",
    ai: "Research hybrid lesson tooling, local teacher workflows, and digital practice support",
    description: "Performance-based music school franchise combining lessons, local community, and stage goals.",
    why: "Represents the offline competitor/partner world that still owns trust, accountability, and parent decisions.",
    relevance: 4,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Public app sources linked; needs location count + manual site check",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track franchise expansion, hybrid learning tools, camps, and local partnership potential.",
    tags: ["offline lessons", "schools", "performance"]
  },
  {
    id: "flat-io",
    name: "Flat for Education",
    type: "Collaborative notation platform",
    category: "education",
    subcategory: "Classroom notation, assignments, composition, and collaborative music education",
    geography: "Global",
    reach: "Teacher and school-facing platform",
    model: "Education SaaS and freemium notation",
    ownership: "To verify",
    ai: "Research classroom workflows, composition assistance, and teacher tooling",
    description: "Cloud notation and classroom platform for music teachers and students.",
    why: "Shows where music education moves into collaborative SaaS, assignments, and teacher-managed practice.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product/education sources linked; needs school penetration data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track education product changes, integrations, and AI/composition features.",
    tags: ["notation", "classroom", "teachers"]
  },
  {
    id: "noteflight",
    name: "Noteflight",
    type: "Online notation and education platform",
    category: "education",
    subcategory: "Online notation, composition, classroom tools, and teaching resources",
    geography: "Global / US",
    reach: "Established notation education platform",
    model: "Freemium, premium, and education plans",
    ownership: "To verify",
    ai: "Research composition assistance and teacher workflow opportunities",
    description: "Online notation platform used by students, teachers, composers, and classrooms.",
    why: "Adds another education-facing notation benchmark between individual practice and formal classroom learning.",
    relevance: 3,
    momentum: 2,
    aiScore: 2,
    sourceStatus: "Needs traffic and ownership source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track education feature set, school plans, and integration ecosystem.",
    tags: ["notation", "education", "composition"]
  },
  {
    id: "donner",
    name: "Donner",
    type: "Accessible instrument and connected gear brand",
    category: "hardware",
    subcategory: "Affordable guitars, keyboards, drums, apps, beginner bundles, and creator gear",
    geography: "Global / China-US",
    reach: "Visible affordable gear brand",
    model: "DTC/ecommerce hardware and app ecosystem",
    ownership: "Private",
    ai: "Research connected hardware, app-led learning, and beginner bundle flows",
    description: "Affordable instrument and music-gear brand with a broad ecommerce and app surface.",
    why: "Important for beginner affordability, gear bundles, and app-connected entry points into playing.",
    relevance: 3,
    momentum: 4,
    aiScore: 2,
    sourceStatus: "Public retail/app sources linked; needs sales + geography data",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track beginner bundles, app usage, Amazon/ecommerce motion, and learning partnerships.",
    tags: ["affordable gear", "beginner", "hardware"]
  },
  {
    id: "gear4music",
    name: "Gear4music",
    type: "European music retail channel",
    category: "hardware",
    subcategory: "Instrument ecommerce, education supplies, own-brand gear, and beginner purchases",
    geography: "Europe / UK",
    reach: "Large European music retailer",
    model: "Ecommerce, own-brand gear, and education supply",
    ownership: "Public company",
    ai: "Research recommendations, beginner bundles, and education-channel data",
    description: "European music gear retailer with education supplies and broad instrument ecommerce.",
    why: "Adds another European channel beyond Thomann for gear access, education supply, and bundle opportunities.",
    relevance: 3,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Needs traffic + education-channel validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track education supplies, beginner bundles, owned brands, and marketplace/category data.",
    tags: ["retail", "Europe", "education supplies"]
  },
  {
    id: "audacity",
    name: "Audacity",
    type: "Free audio editor and recording tool",
    category: "creation",
    subcategory: "Recording, editing, plugins, open-source audio workflow, and Muse Group ecosystem",
    geography: "Global",
    reach: "Large open-source audio tool",
    model: "Free/open source with ecosystem support",
    ownership: "Muse Group",
    ai: "Research AI-assisted editing, transcription, and creator workflow extensions",
    description: "Widely used free audio editor for recording, editing, and basic production workflows.",
    why: "A low-friction bridge from learning or practice into recording and basic music creation.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs usage scale + roadmap source",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track Muse Group roadmap, plugin ecosystem, and AI/audio editing features.",
    tags: ["audio editor", "free", "recording"]
  },
  {
    id: "soundation",
    name: "Soundation",
    type: "Browser-based music studio",
    category: "creation",
    subcategory: "Online DAW, loops, collaboration, and beginner-friendly production workflow",
    geography: "Global / Sweden",
    reach: "Specialist web creation platform",
    model: "Freemium and subscription",
    ownership: "To verify",
    ai: "Research browser creation, templates, and AI-assisted production",
    description: "Web-based music studio for creating, collaborating, and producing music in the browser.",
    why: "Adds another low-friction creation path after learning, especially for casual browser-first users.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public product source linked; needs app/traffic + education validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track collaboration features, templates, education use, and AI-assisted production tools.",
    tags: ["browser DAW", "creation", "collaboration"]
  },
  {
    id: "beatstars",
    name: "BeatStars",
    type: "Beat marketplace and creator business platform",
    category: "creation",
    subcategory: "Beat selling, producer storefronts, licensing, promotion, and creator monetization",
    geography: "Global / US",
    reach: "Large producer marketplace",
    model: "Marketplace, subscriptions, and creator tools",
    ownership: "Private",
    ai: "Research AI beat/content policy and creator monetization shifts",
    description: "Marketplace and tooling platform for producers to sell beats and manage their creator business.",
    why: "Shows where hobbyist creation can turn into commerce, identity, and monetization.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Needs traffic + marketplace scale validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track producer tools, licensing policies, and AI-generated-content positioning.",
    tags: ["beat marketplace", "creators", "monetization"]
  },
  {
    id: "flow-music",
    name: "Flow Music",
    type: "AI music generation app",
    category: "ai",
    subcategory: "Riffusion-origin text-to-music generation, song creation, and mobile-first AI music",
    geography: "Global / US",
    reach: "Emerging AI music app",
    model: "AI generation app",
    ownership: "To verify",
    ai: "Core AI music generation",
    description: "AI music-generation product currently receiving Riffusion traffic and positioning.",
    why: "Important as a newer consumer-facing AI music signal alongside Suno, Udio, and ElevenLabs Music.",
    relevance: 4,
    momentum: 4,
    aiScore: 5,
    sourceStatus: "Needs funding, usage, rights, and rebrand validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track Riffusion/Flow positioning, app adoption, licensing posture, and model quality.",
    tags: ["AI", "music generation", "emerging"]
  },
  {
    id: "ripx-daw",
    name: "RipX DAW",
    type: "AI audio editing and stem tool",
    category: "ai",
    subcategory: "Stem separation, audio editing, remixing, note-level manipulation, and practice material creation",
    geography: "Global / UK",
    reach: "Specialist AI audio tool",
    model: "Paid desktop software",
    ownership: "Hit'n'Mix",
    ai: "Core AI separation and note-level audio manipulation",
    description: "AI audio platform for separating, editing, remixing, and manipulating audio at stem/note level.",
    why: "Relevant to practice, transcription, remixing, and generating learning materials from existing songs.",
    relevance: 3,
    momentum: 3,
    aiScore: 5,
    sourceStatus: "Needs user scale and musician workflow validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track separation quality, education use cases, and musician workflow adoption.",
    tags: ["AI", "stem separation", "audio editing"]
  },
  {
    id: "klangio",
    name: "Klangio",
    type: "AI music transcription platform",
    category: "ai",
    subcategory: "Audio-to-score transcription, piano/guitar/drums tools, and practice material conversion",
    geography: "Global / Germany",
    reach: "Specialist AI transcription platform",
    model: "Freemium and paid transcription tools",
    ownership: "To verify",
    ai: "Core AI transcription",
    description: "AI transcription platform turning recordings into sheet music, tabs, MIDI, and practice material.",
    why: "Directly relevant to song-to-practice workflows, teacher prep, and the gap between listening and learning.",
    relevance: 4,
    momentum: 4,
    aiScore: 5,
    sourceStatus: "Public product source linked; needs app usage + accuracy validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track instrument coverage, accuracy claims, integrations, and teacher workflows.",
    tags: ["AI", "transcription", "sheet music"]
  },
  {
    id: "music-ally",
    name: "Music Ally",
    type: "Music industry intelligence source",
    category: "signals",
    subcategory: "Music business news, reports, startups, DSPs, rights, marketing, and AI policy",
    geography: "Global / UK",
    reach: "Specialist music business publication",
    model: "News, analysis, training, and research",
    ownership: "Private",
    ai: "Monitor AI music rights, platform policy, artist tools, and market shifts",
    description: "Music industry intelligence and analysis source for business, rights, platform, and AI developments.",
    why: "A stronger music specific monitoring source than general tech media for Yousician's environment.",
    relevance: 3,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Needs monitoring feed setup",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Use for weekly scans on AI music, creator tools, rights, DSPs, and market moves.",
    tags: ["music business", "news", "AI policy"]
  },
  {
    id: "midia-research",
    name: "MIDiA Research",
    type: "Music and creator economy research source",
    category: "signals",
    subcategory: "Music industry reports, creator economy, fandom, streaming, and market forecasts",
    geography: "Global / UK",
    reach: "Specialist analyst firm",
    model: "Research subscriptions and reports",
    ownership: "Private",
    ai: "Monitor AI, creator economy, music fandom, and consumer behavior research",
    description: "Analyst firm covering music, media, entertainment, creator economy, and audience behavior.",
    why: "Useful for board-level market framing and quantified trend context beyond company webpages.",
    relevance: 4,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Needs report access / subscription validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track reports on music participation, creator tools, AI, subscriptions, and youth behavior.",
    tags: ["market research", "music industry", "creator economy"]
  },
  {
    id: "namm",
    name: "NAMM",
    type: "Music products industry signal",
    category: "signals",
    subcategory: "Music product trade show, industry members, product launches, retail, and education signals",
    geography: "Global / US",
    reach: "Major music products trade association",
    model: "Trade association, events, research, and industry programs",
    ownership: "Nonprofit association",
    ai: "Monitor product launches, connected gear, retail education, and music-making advocacy",
    description: "Music products industry association and event ecosystem spanning instruments, retail, brands, and education.",
    why: "A central signal source for hardware, retail, education, and connected music product trends.",
    relevance: 3,
    momentum: 4,
    aiScore: 2,
    sourceStatus: "Needs event/news monitoring setup",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track NAMM Show launches, retail education signals, partner lists, and connected gear trends.",
    tags: ["industry event", "hardware", "retail"]
  },
  {
    id: "luminate",
    name: "Luminate",
    type: "Music market data source",
    category: "signals",
    subcategory: "Music consumption, charts, audience behavior, entertainment data, and market reporting",
    geography: "Global / US",
    reach: "Major entertainment data provider",
    model: "Data products and market intelligence",
    ownership: "Private",
    ai: "Monitor music consumption shifts and audience trend data",
    description: "Entertainment and music data provider used for consumption, chart, and audience intelligence.",
    why: "Adds quantitative market-signal potential for what music people consume and may want to learn.",
    relevance: 3,
    momentum: 4,
    aiScore: 2,
    sourceStatus: "Needs data access / report permission",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track annual music reports, genre growth, catalog/new music balance, and audience trend changes.",
    tags: ["market data", "music consumption", "charts"]
  },
  {
    id: "chartmetric",
    name: "Chartmetric",
    type: "Music analytics and trend intelligence",
    category: "signals",
    subcategory: "Artist analytics, playlists, social growth, streaming data, and music trend monitoring",
    geography: "Global / US",
    reach: "Specialist music analytics platform",
    model: "SaaS analytics and data products",
    ownership: "Private",
    ai: "Monitor trend detection, social music discovery, and artist growth signals",
    description: "Music analytics platform for artist, playlist, streaming, social, and market-trend monitoring.",
    why: "Useful for understanding what songs, artists, and communities may influence learner demand.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Needs account/API access",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track song/artist trend data, genre shifts, TikTok spillover, and playlist movement.",
    tags: ["analytics", "trends", "artist data"]
  },
  {
    id: "a16z-consumer",
    name: "a16z Consumer",
    type: "Consumer and AI investor signal",
    category: "signals",
    subcategory: "Consumer apps, AI-native products, creator tools, and education-market thesis",
    geography: "Global / US",
    reach: "Major venture firm",
    model: "Venture capital and thesis publishing",
    ownership: "Andreessen Horowitz",
    ai: "Monitor consumer AI, AI education, and generative music investment theses",
    description: "Consumer investing team whose AI and consumer theses can indicate where capital expects user behavior to move.",
    why: "Useful for understanding investor appetite around AI-native consumer products, education behavior, and creator tools.",
    relevance: 3,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Public investor thesis source linked; needs deal monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track consumer AI theses, music/creator references, and relevant portfolio moves.",
    tags: ["investor", "consumer AI", "capital"]
  },
  {
    id: "general-catalyst",
    name: "General Catalyst",
    type: "Growth investor signal",
    category: "signals",
    subcategory: "Applied AI, consumer technology, education, and transformation investing",
    geography: "Global / US",
    reach: "Major global investment firm",
    model: "Venture and growth investment",
    ownership: "Private partnership",
    ai: "Monitor applied AI, education, consumer, and transformation theses",
    description: "Global investment firm relevant as a capital signal for AI-enabled services, consumer apps, and education infrastructure.",
    why: "Helps frame where larger growth capital may move around consumer learning, subscriptions, AI tooling, and platform shifts.",
    relevance: 3,
    momentum: 4,
    aiScore: 4,
    sourceStatus: "Public company source linked; needs portfolio watchlist",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track AI, consumer, learning, and creator-tool investments or thesis content.",
    tags: ["investor", "growth capital", "AI"]
  },
  {
    id: "eic-accelerator",
    name: "EIC Accelerator",
    type: "Public funding signal",
    category: "signals",
    subcategory: "EU startup and SME funding for high-risk, game-changing innovation",
    geography: "Europe",
    reach: "EU-wide startup funding programme",
    model: "Grant and equity funding",
    ownership: "European Innovation Council",
    ai: "Relevant for disruptive AI, deep-tech, creative-tech, and learning-product funding routes",
    description: "Horizon Europe funding programme supporting startups and SMEs with game-changing products, services, or business models.",
    why: "Adds a concrete public-funding route beyond cultural grants for ambitious AI, learning, or creative-technology initiatives.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Public funding source linked; needs eligibility review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track cut-off dates, blended finance rules, and fit for AI/music learning initiatives.",
    tags: ["funding", "EU", "startup"]
  },
  {
    id: "horizon-europe-cluster-2",
    name: "Horizon Europe Cluster 2",
    type: "Public funding signal",
    category: "signals",
    subcategory: "Culture, creativity, inclusive society, and research funding",
    geography: "Europe",
    reach: "EU research and innovation programme",
    model: "Research and innovation grants",
    ownership: "European Commission",
    ai: "Relevant where music learning intersects culture, creativity, education, and social impact research",
    description: "Horizon Europe cluster covering culture, creativity, inclusive society, and related research programmes.",
    why: "Useful for partnership-funded strategic projects around music participation, creative learning, and cultural impact.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public funding source linked; needs work-programme scan",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track 2026-27 work programmes, consortium calls, and culture/creativity funding fit.",
    tags: ["funding", "research", "culture"]
  },
  {
    id: "eit-culture-creativity",
    name: "EIT Culture & Creativity",
    type: "Creative-sector innovation signal",
    category: "signals",
    subcategory: "Creative industries, startup acceleration, skills, and cultural innovation",
    geography: "Europe",
    reach: "European cultural and creative-sector network",
    model: "EU-supported innovation partnership",
    ownership: "European Institute of Innovation and Technology",
    ai: "Relevant for creative-technology, skills, and cultural innovation acceleration",
    description: "European partnership supporting cultural and creative-sector innovation, learning opportunities, and venture support.",
    why: "Adds an EU creative-industries route for partnerships, skills programmes, and startup acceleration around music and culture.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public programme source linked; needs opportunity monitoring",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track accelerator calls, skills programmes, and creative-tech opportunities.",
    tags: ["funding", "creative industries", "Europe"]
  },
  {
    id: "apple-design-awards",
    name: "Apple Design Awards",
    type: "App recognition signal",
    category: "signals",
    subcategory: "App design, innovation, accessibility, interaction, and platform recognition",
    geography: "Global",
    reach: "Major platform recognition programme",
    model: "Annual Apple developer awards",
    ownership: "Apple",
    ai: "Monitor AI, interaction, accessibility, and creative-app benchmarks",
    description: "Apple award programme recognizing outstanding app and game design across global finalists and winners.",
    why: "Useful as a high-signal recognition route and benchmark for app craft, accessibility, interaction, and brand credibility.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public award source linked; needs category-fit review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track annual finalist/winner categories and whether music-learning products fit future submissions.",
    tags: ["awards", "app store", "recognition"]
  },
  {
    id: "google-play-best-of",
    name: "Google Play Best Of",
    type: "App recognition signal",
    category: "signals",
    subcategory: "Android app excellence, editorial awards, growth and category visibility",
    geography: "Global",
    reach: "Major Android platform recognition programme",
    model: "Annual Google Play editorial awards",
    ownership: "Google",
    ai: "Monitor AI, learning, personal growth, family, and creative-app recognition patterns",
    description: "Google Play annual awards highlighting apps, games, and books selected by editors as standout products.",
    why: "Adds an Android-side recognition route and benchmark for app quality, discovery, and platform credibility.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Public award source linked; needs category-fit review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track annual winners and categories relevant to learning, personal growth, creativity, and family.",
    tags: ["awards", "google play", "recognition"]
  },
  {
    id: "music-tectonics",
    name: "Music Tectonics",
    type: "Music-tech ecosystem signal",
    category: "signals",
    subcategory: "Music technology conference, startup pitch, investor and partnership network",
    geography: "Global / US",
    reach: "Specialist music-tech industry network",
    model: "Conference, podcast, events, startup competition",
    ownership: "Rock Paper Scissors, Inc.",
    ai: "Monitor music-tech startup themes, AI, rights, creator tools, and investor interest",
    description: "Music-tech conference and ecosystem platform connecting startups, investors, partners, and industry operators.",
    why: "Useful for discovering emerging music-tech companies and reading where partnerships, investor attention, and startup energy are moving.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Public conference source linked; needs annual scan",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track pitch competition startups, conference themes, and AI/rights/creator-tool panels.",
    tags: ["music tech", "startup", "conference"]
  },
  {
    id: "learning-technologies-awards",
    name: "Learning Technologies Awards",
    type: "Learning-tech recognition signal",
    category: "signals",
    subcategory: "Learning technology awards, AI learning categories, and enterprise L&D credibility",
    geography: "Global / UK",
    reach: "Large learning-technology awards programme",
    model: "Annual awards and event",
    ownership: "CloserStill Media / Learning Technologies",
    ai: "Monitor AI learning categories, adaptive learning, and L&D market expectations",
    description: "Learning-technology awards programme with categories relevant to AI, digital learning, and learning impact.",
    why: "Useful benchmark for how broader learning technology evaluates AI, learner outcomes, and trust signals.",
    relevance: 2,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public award source linked; needs relevance review",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track 2026 AI learning categories and whether music learning can credibly enter broader L&D recognition routes.",
    tags: ["awards", "learning tech", "AI"]
  },
  {
    id: "sxsw-edu-launch",
    name: "SXSW EDU Launch",
    type: "EdTech startup signal",
    category: "signals",
    subcategory: "Education startup competition, investor exposure, and learning innovation",
    geography: "Global / US",
    reach: "Visible education innovation event",
    model: "Startup competition and conference exposure",
    ownership: "SXSW EDU",
    ai: "Monitor emerging education startups, AI learning products, and investor-facing education innovation",
    description: "Startup competition showcasing emerging innovations in teaching and learning.",
    why: "Adds an early-stage education-market signal where music learning can benchmark product, traction, and investor narratives.",
    relevance: 2,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public competition source linked; needs annual scan",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track finalists, categories, judging criteria, and startups adjacent to music learning.",
    tags: ["edtech", "startup", "awards"]
  },
  {
    id: "disney",
    name: "Disney",
    type: "Entertainment and IP platform",
    category: "platforms",
    subcategory: "Family entertainment, music IP, education content, franchises and character driven learning",
    geography: "Global",
    reach: "Major global entertainment company",
    model: "Streaming, parks, licensing, games, consumer products and media",
    ownership: "Public company",
    ai: "Monitor family entertainment, education content, music IP and creator strategy.",
    description: "Global entertainment and IP company with strong family, music, franchise and education adjacency.",
    why: "Relevant as a benchmark for how music, character IP, family learning and entertainment habits combine.",
    relevance: 3,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "SEC filing and official Disney/Epic partnership sources linked; education and music learning relevance remains triage",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related strategy, education content, acquisition history and possible family learning fit.",
    tags: ["entertainment", "family", "IP", "education"]
  },
  {
    id: "epic-games",
    name: "Epic Games",
    type: "Games and creator platform",
    category: "platforms",
    subcategory: "Fortnite, Unreal Engine, creator economy, concerts and youth entertainment",
    geography: "Global",
    reach: "Major global games platform",
    model: "Games, marketplace, engine, creator tools and live events",
    ownership: "Private",
    ai: "Monitor creator tools, music experiences, youth engagement and interactive learning signals.",
    description: "Large games and creator platform where music, performance, identity and youth attention can converge.",
    why: "Relevant for understanding how interactive entertainment competes for attention and can make music participation feel social.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Official Epic/Fortnite/Harmonix sources linked; some official pages require manual browser access",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related strategy, creator tools, acquisition history and potential strategic fit.",
    tags: ["games", "creator economy", "music events", "youth"]
  },
  {
    id: "roblox",
    name: "Roblox",
    type: "User generated entertainment platform",
    category: "platforms",
    subcategory: "Games, creator economy, virtual identity, education and music experiences",
    geography: "Global",
    reach: "Large youth entertainment platform",
    model: "User generated games, virtual goods, advertising and creator economy",
    ownership: "Public company",
    ai: "Monitor creator tools, education use cases, music events and youth identity signals.",
    description: "Large user generated entertainment platform with relevance to youth identity, creation and social play.",
    why: "Useful for testing whether music learning can connect to identity, social feedback and creator participation.",
    relevance: 3,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "SEC filing and official Roblox Education sources linked; music-specific activation remains triage",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related strategy, education use, acquisition history and youth engagement relevance.",
    tags: ["games", "youth", "identity", "education"]
  },
  {
    id: "netflix",
    name: "Netflix",
    type: "Streaming entertainment platform",
    category: "platforms",
    subcategory: "Streaming, games, family entertainment, music documentaries and interactive IP",
    geography: "Global",
    reach: "Major global streaming platform",
    model: "Subscription streaming, advertising and games",
    ownership: "Public company",
    ai: "Monitor games, family entertainment, music related content and recommendation strategy.",
    description: "Global streaming platform with attention, family entertainment, games and music related content relevance.",
    why: "Useful as an attention and entertainment benchmark rather than a direct music learning competitor.",
    relevance: 2,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "SEC filing and official Netflix Games support source linked; music relevance remains triage",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related content, games strategy, acquisition history and family entertainment relevance.",
    tags: ["streaming", "games", "family", "attention"]
  },
  {
    id: "nintendo",
    name: "Nintendo",
    type: "Games and family entertainment company",
    category: "platforms",
    subcategory: "Games, family IP, hardware, music experiences and playful learning",
    geography: "Global",
    reach: "Major global games and hardware company",
    model: "Hardware, games, subscriptions, licensing and IP",
    ownership: "Public company",
    ai: "Monitor family entertainment, playful learning and music game signals.",
    description: "Global games and family entertainment company with strong playful learning and music game adjacency.",
    why: "Relevant as a benchmark for motivation, family trust, habit, and music as play.",
    relevance: 2,
    momentum: 3,
    aiScore: 1,
    sourceStatus: "Official Nintendo IR and Nintendo Music sources linked; learning adjacency remains triage",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related products, playful learning, acquisition history and family entertainment fit.",
    tags: ["games", "family", "hardware", "music games"]
  },
  {
    id: "spotify-platform",
    name: "Spotify",
    type: "Music and audio platform",
    category: "platforms",
    subcategory: "Streaming, recommendations, discovery, artist tools, creator tools and audio culture",
    geography: "Global",
    reach: "Major global audio platform",
    model: "Subscription, advertising, marketplace and creator services",
    ownership: "Public company",
    ai: "Monitor recommendations, AI music policy, artist tools, podcasts, audiobooks and creator strategy.",
    description: "Major audio platform shaping music discovery, artist identity, recommendations and listening habits.",
    why: "Relevant for how people discover music, form taste, follow artists and move from listening into participation.",
    relevance: 4,
    momentum: 5,
    aiScore: 4,
    sourceStatus: "SEC filing, Spotify for Artists, Campaign Kit and AI policy sources linked; education adjacency remains triage",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Check music related strategy, education adjacency, acquisition history and potential strategic relevance.",
    tags: ["streaming", "discovery", "artists", "AI"]
  },
  {
    id: "muse-group",
    name: "Muse Group",
    type: "Strategic music platform group",
    category: "platforms",
    subcategory: "Ultimate Guitar, MuseScore, Audacity, Hal Leonard, repertoire, notation and creator workflow",
    geography: "Global",
    reach: "Large musician product portfolio",
    model: "Music software, community, publishing, subscriptions and creator tools",
    ownership: "Private company",
    ai: "Research portfolio integration, notation intelligence, repertoire rights and audio creation tooling",
    description: "Music technology group behind major musician utilities including Ultimate Guitar, MuseScore and Audacity, with Hal Leonard now part of the wider group footprint.",
    why: "Strategically close because it combines song discovery, notation, practice material, creator tools and publishing infrastructure around the musician workflow.",
    relevance: 5,
    momentum: 5,
    aiScore: 3,
    sourceStatus: "Official Muse Group portfolio and Hal Leonard integration sources linked; financials and product level performance remain private.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track portfolio integration, publishing rights, MuseScore and Ultimate Guitar bundles, and acquisition appetite.",
    tags: ["portfolio", "acquirer", "rights", "practice infrastructure"]
  },
  {
    id: "hal-leonard",
    name: "Hal Leonard",
    type: "Music publishing and education catalog",
    category: "practice",
    subcategory: "Sheet music, songbooks, methods, education catalog and licensing infrastructure",
    geography: "Global / US",
    reach: "Large global music publisher",
    model: "Publishing, digital sheet music, education products and distribution",
    ownership: "Muse Group footprint after Hal Leonard US and Europe were unified under Muse Group",
    ai: "Research catalog digitization, licensing, AI content rules and learning material workflows",
    description: "Major music publishing and education catalog that shapes what repertoire teachers, learners and music retailers can legally use.",
    why: "Relevant to Yousician because song access, repertoire depth, rights, teacher material and trusted methods can become a strategic constraint or partnership surface.",
    relevance: 5,
    momentum: 4,
    aiScore: 3,
    sourceStatus: "Official Hal Leonard and Muse Group integration sources linked; catalog performance and licensing economics need internal validation.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track digital catalog moves, Muse Group integration, education method packaging and licensing signals.",
    tags: ["publishing", "rights", "sheet music", "education catalog"]
  },
  {
    id: "musicnotes",
    name: "Musicnotes",
    type: "Digital sheet music marketplace",
    category: "practice",
    subcategory: "Licensed digital sheet music, transposable scores, app based library and repertoire purchase",
    geography: "Global / US",
    reach: "Large digital sheet music marketplace",
    model: "Per score purchases, subscriptions, app and publisher partnerships",
    ownership: "Musicnotes, Inc.",
    ai: "Research search, arrangement recommendations, score digitization and practice companion features",
    description: "Digital sheet music platform where players buy and manage licensed arrangements for piano, guitar, voice and other instruments.",
    why: "Important because it owns a high intent repertoire moment after a user decides what they want to play.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official product and app sources linked; revenue, traffic and conversion require credentialed market data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app experience, catalog depth, subscriptions, publisher deals and practice companion features.",
    tags: ["sheet music", "repertoire", "marketplace", "rights"]
  },
  {
    id: "makemusic-cloud",
    name: "MakeMusic Cloud",
    type: "School music practice and assessment platform",
    category: "education",
    subcategory: "Teacher assignments, assessment, repertoire library and student practice workflow",
    geography: "US / Global",
    reach: "School and ensemble music education channel",
    model: "Education subscription and institutional licensing",
    ownership: "MakeMusic",
    ai: "Research assessment data, practice feedback, teacher dashboards and school workflow automation",
    description: "Cloud platform for music teachers and students, focused on assignments, practice, repertoire and assessment.",
    why: "Useful for the teacher supported side of music learning, where accountability, assessment and classroom adoption matter more than consumer app polish.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Official MakeMusic product sources linked; district penetration and usage data remain gated.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track assessment features, school adoption, integrations and repertoire licensing.",
    tags: ["teachers", "assessment", "school music", "practice"]
  },
  {
    id: "tonalenergy",
    name: "TonalEnergy",
    type: "Practice utility app",
    category: "practice",
    subcategory: "Tuner, metronome, tone generator, analysis and daily practice support",
    geography: "Global / US",
    reach: "Specialist practice app",
    model: "Paid app and practice utility",
    ownership: "TonalEnergy, Inc.",
    ai: "Research pitch, tone, timing and practice analytics opportunities",
    description: "Tuner, metronome and practice analysis utility used by instrumentalists, teachers and students.",
    why: "Relevant because it competes for the daily habit layer around tuning, timing, tone and deliberate practice.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official website, mobile app, education, App Store and Google Play sources linked; current usage and review velocity need credentialed data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track teacher recommendations, feature depth, app rankings and pitch or timing analysis improvements.",
    tags: ["tuner", "metronome", "practice utility", "teachers"]
  },
  {
    id: "soundbrenner",
    name: "Soundbrenner",
    type: "Connected practice utility",
    category: "practice",
    subcategory: "Metronome app, wearable practice hardware, setlists, tuner and musician workflow",
    geography: "Global",
    reach: "Visible musician utility brand",
    model: "Freemium app, hardware and subscriptions",
    ownership: "Private",
    ai: "Research practice analytics, hardware signals, rhythm coaching and habit loops",
    description: "Metronome and practice workflow product spanning app and wearable hardware.",
    why: "Relevant because it owns repeat practice, rhythm discipline and a hardware assisted musician habit surface.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official product and app sources linked; hardware sales and active user data remain gated.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app utility expansion, wearable roadmap, practice tracking and partnerships with educators.",
    tags: ["metronome", "wearable", "practice utility", "hardware"]
  },
  {
    id: "cifra-club",
    name: "Cifra Club",
    type: "Chords, tabs and lessons ecosystem",
    category: "practice",
    subcategory: "Chord charts, tabs, video lessons, tuner and Portuguese speaking music community",
    geography: "Brazil / LatAm",
    reach: "Large regional music learning and song practice surface",
    model: "Ads, app, content, lessons and community",
    ownership: "Studio Sol",
    ai: "Research regional song discovery, chord parsing and app based practice utility",
    description: "Portuguese language song, chord, tab and lesson ecosystem with strong Brazilian music community relevance.",
    why: "Important because it fills a regional practice and discovery gap that global English first products may miss.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official product and app sources linked; traffic scale and monetization need market data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track LatAm song demand, app rankings, lesson products and tuner or chord utility features.",
    tags: ["tabs", "chords", "LatAm", "lessons"]
  },
  {
    id: "loog",
    name: "Loog",
    type: "Beginner instrument and learning brand",
    category: "hardware",
    subcategory: "Kids guitars, beginner instruments, app supported learning and Duolingo piano collaboration",
    geography: "Global / US",
    reach: "Specialist beginner and family music brand",
    model: "DTC instruments, retail, app and education bundles",
    ownership: "Private",
    ai: "Research family onboarding, toy to instrument conversion and guided beginner practice",
    description: "Beginner friendly instrument brand focused on kids and first time players.",
    why: "Relevant because it sits before the learning app decision and can shape the family entry point into music.",
    relevance: 4,
    momentum: 4,
    aiScore: 1,
    sourceStatus: "Official Loog and Duolingo Piano collaboration sources linked; sales scale and retention need external data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track Duolingo Piano collaboration, kids instrument bundles, app support and school or family channels.",
    tags: ["beginner guitar", "kids", "hardware", "family"]
  },
  {
    id: "coach-guitar",
    name: "Coach Guitar",
    type: "Direct guitar learning app",
    category: "learning",
    subcategory: "Visual guitar lessons, songs, beginner paths and mobile practice",
    geography: "Global / Europe",
    reach: "Specialist guitar learning app",
    model: "Freemium and subscription app",
    ownership: "Manomaya",
    ai: "Research visual learning, lesson recommendation and practice feedback opportunities",
    description: "Mobile guitar learning app built around visual guidance, songs and beginner friendly lessons.",
    why: "Useful as a direct competitor benchmark for casual guitar learners who want quick song progress.",
    relevance: 4,
    momentum: 3,
    aiScore: 2,
    sourceStatus: "Official product and app sources linked; downloads, rank and revenue require credentialed app data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app rankings, lesson catalog, pricing and visual onboarding claims.",
    tags: ["guitar", "learning app", "songs", "beginner"]
  },
  {
    id: "piano-academy",
    name: "Piano Academy",
    type: "Direct piano learning app",
    category: "learning",
    subcategory: "Piano lessons, note reading, songs, listening feedback and mobile guided practice",
    geography: "Global",
    reach: "Visible piano app",
    model: "Freemium and subscription app",
    ownership: "Yokee Music",
    ai: "Research listening feedback, adaptive practice and beginner song path design",
    description: "Piano learning app from Yokee Music focused on guided lessons, songs and interactive feedback.",
    why: "Relevant for piano onboarding, kid or adult beginner positioning, app store competition and feedback led learning.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Official Yokee Music, App Store and Google Play sources linked; downloads, revenue, rank and country mix still require credentialed Appfigures data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track app ranking, pricing, feedback claims, catalog updates and family learning positioning.",
    tags: ["piano", "learning app", "feedback", "subscription"]
  },
  {
    id: "smule",
    name: "Smule",
    type: "Social singing and karaoke platform",
    category: "creation",
    subcategory: "Singing, karaoke, duet, community, performance sharing and vocal identity",
    geography: "Global",
    reach: "Large social music community",
    model: "Freemium, subscription and community",
    ownership: "Private",
    ai: "Research vocal feedback, performance sharing, creator tools and AI vocal policy",
    description: "Social singing platform where users sing, record, duet and share performances with a global community.",
    why: "Important for the share and identity side of music participation, especially where learning turns into performance and community.",
    relevance: 4,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Official app store sources linked; current active community, revenue and retention need credentialed data.",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track vocal learning adjacency, community loops, subscription performance and AI vocal or rights policy.",
    tags: ["singing", "karaoke", "community", "share"]
  }
];

const initialKeyPlayerIds = new Set(["simply", "ultimate-guitar", "duolingo", "fender", "kahoot"]);
players.forEach((player) => {
  player.key = initialKeyPlayerIds.has(player.id);
});

const headquartersByPlayerId = {
  "simply": { value: "Tel Aviv, Israel", basis: "Public company profile seed" },
  "ultimate-guitar": { value: "Limassol, Cyprus", basis: "Muse Group company HQ seed" },
  "fender-play": { value: "Los Angeles, California, USA", basis: "Fender parent company HQ seed" },
  flowkey: { value: "Berlin, Germany", basis: "flowkey GmbH HQ seed" },
  skoove: { value: "Berlin, Germany", basis: "Skoove HQ seed" },
  fender: { value: "Los Angeles, California, USA", basis: "Fender company HQ seed" },
  yamaha: { value: "Hamamatsu, Shizuoka, Japan", basis: "Yamaha company HQ seed" },
  thomann: { value: "Treppendorf, Bavaria, Germany", basis: "Thomann company HQ seed" },
  sweetwater: { value: "Fort Wayne, Indiana, USA", basis: "Sweetwater company HQ seed" },
  bandlab: { value: "Singapore", basis: "BandLab Technologies HQ seed" },
  musescore: { value: "Limassol, Cyprus", basis: "Muse Group company HQ seed" },
  splice: { value: "New York, New York, USA", basis: "Splice company HQ seed" },
  ableton: { value: "Berlin, Germany", basis: "Ableton company HQ seed" },
  suno: { value: "Cambridge, Massachusetts, USA", basis: "Suno company HQ seed" },
  udio: { value: "New York, New York, USA", basis: "Udio company HQ seed" },
  duolingo: { value: "Pittsburgh, Pennsylvania, USA", basis: "Duolingo company HQ seed" },
  kahoot: { value: "Oslo, Norway", basis: "Kahoot company HQ seed" },
  brilliant: { value: "San Francisco, California, USA", basis: "Brilliant company HQ seed" },
  "berklee-online": { value: "Boston, Massachusetts, USA", basis: "Berklee College of Music HQ seed" },
  mtna: { value: "Cincinnati, Ohio, USA", basis: "MTNA association HQ seed" },
  "apple-garageband": { value: "Cupertino, California, USA", basis: "Apple parent company HQ seed" },
  accel: { value: "Palo Alto, California, USA", basis: "Accel firm HQ seed" },
  "creative-europe": { value: "Brussels, Belgium", basis: "European Commission programme HQ seed" },
  "guitar-tricks": { value: "San Francisco, California, USA", basis: "Guitar Tricks company HQ seed" },
  truefire: { value: "St. Petersburg, Florida, USA", basis: "TrueFire company HQ seed" },
  "rocksmith-plus": { value: "Saint-Mande, France", basis: "Ubisoft parent company HQ seed" },
  "gibson-app": { value: "Nashville, Tennessee, USA", basis: "Gibson parent company HQ seed" },
  melodics: { value: "Auckland, New Zealand", basis: "Melodics company HQ seed" },
  chordify: { value: "Groningen, Netherlands", basis: "Chordify B.V. HQ seed" },
  soundslice: { value: "Chicago, Illinois, USA", basis: "Soundslice company HQ seed" },
  "guitar-pro": { value: "Lille, France", basis: "Arobas Music HQ seed" },
  "youtube-artists": { value: "San Bruno, California, USA", basis: "YouTube HQ seed" },
  gibson: { value: "Nashville, Tennessee, USA", basis: "Gibson company HQ seed" },
  reverb: { value: "Chicago, Illinois, USA", basis: "Reverb company HQ seed" },
  "guitar-center": { value: "Westlake Village, California, USA", basis: "Guitar Center company HQ seed" },
  soundtrap: { value: "Stockholm, Sweden", basis: "Soundtrap product/company HQ seed" },
  "fl-studio": { value: "Ghent, Belgium", basis: "Image-Line HQ seed" },
  soundcloud: { value: "Berlin, Germany", basis: "SoundCloud company HQ seed" },
  distrokid: { value: "New York, New York, USA", basis: "DistroKid company HQ seed" },
  landr: { value: "Montreal, Quebec, Canada", basis: "LANDR company HQ seed" },
  "native-instruments": { value: "Berlin, Germany", basis: "Native Instruments company HQ seed" },
  bandcamp: { value: "Oakland, California, USA", basis: "Bandcamp company HQ seed" },
  aiva: { value: "Luxembourg", basis: "AIVA company HQ seed" },
  patreon: { value: "San Francisco, California, USA", basis: "Patreon company HQ seed" },
  musora: { value: "Abbotsford, British Columbia, Canada", basis: "Musora company HQ seed" },
  fretello: { value: "Linz, Austria", basis: "Fretello GmbH HQ seed" },
  abrsm: { value: "London, United Kingdom", basis: "ABRSM HQ seed" },
  rcm: { value: "Toronto, Ontario, Canada", basis: "Royal Conservatory of Music HQ seed" },
  "school-of-rock": { value: "Canton, Massachusetts, USA", basis: "School of Rock company HQ seed" },
  gear4music: { value: "York, United Kingdom", basis: "Gear4music company HQ seed" },
  audacity: { value: "Limassol, Cyprus", basis: "Muse Group parent company HQ seed" },
  soundation: { value: "Stockholm, Sweden", basis: "Soundation company HQ seed" },
  "ripx-daw": { value: "Cambridge, United Kingdom", basis: "Hit'n'Mix HQ seed" },
  klangio: { value: "Karlsruhe, Germany", basis: "Klangio company HQ seed" },
  "music-ally": { value: "London, United Kingdom", basis: "Music Ally company HQ seed" },
  "midia-research": { value: "London, United Kingdom", basis: "MIDiA Research HQ seed" },
  namm: { value: "Carlsbad, California, USA", basis: "NAMM association HQ seed" },
  chartmetric: { value: "San Francisco, California, USA", basis: "Chartmetric company HQ seed" },
  "a16z-consumer": { value: "Menlo Park, California, USA", basis: "Andreessen Horowitz HQ seed" },
  "eic-accelerator": { value: "Brussels, Belgium", basis: "European Innovation Council HQ seed" },
  "horizon-europe-cluster-2": { value: "Brussels, Belgium", basis: "European Commission programme HQ seed" },
  "apple-design-awards": { value: "Cupertino, California, USA", basis: "Apple programme owner HQ seed" },
  "google-play-best-of": { value: "Mountain View, California, USA", basis: "Google programme owner HQ seed" },
  "learning-technologies-awards": { value: "London, United Kingdom", basis: "Learning Technologies Awards HQ seed" },
  "sxsw-edu-launch": { value: "Austin, Texas, USA", basis: "SXSW EDU HQ seed" },
  disney: { value: "Burbank, California, USA", basis: "Disney company HQ seed" },
  "epic-games": { value: "Cary, North Carolina, USA", basis: "Epic Games company HQ seed" },
  roblox: { value: "San Mateo, California, USA", basis: "Roblox company HQ seed" },
  netflix: { value: "Los Gatos, California, USA", basis: "Netflix company HQ seed" },
  nintendo: { value: "Kyoto, Japan", basis: "Nintendo company HQ seed" },
  "spotify-platform": { value: "Stockholm, Sweden", basis: "Spotify operating HQ seed" },
  "spotify-artists": { value: "Stockholm, Sweden", basis: "Spotify parent company HQ seed" },
  "muse-group": { value: "Limassol, Cyprus", basis: "Muse Group company HQ seed" },
  "hal-leonard": { value: "Milwaukee, Wisconsin, USA", basis: "Hal Leonard company HQ seed" },
  musicnotes: { value: "Madison, Wisconsin, USA", basis: "Musicnotes company HQ seed" },
  "cifra-club": { value: "Belo Horizonte, Brazil", basis: "Studio Sol HQ seed" },
  smule: { value: "San Francisco, California, USA", basis: "Smule company HQ seed" }
};

const relations = [
  { from: "Yousician", to: "simply", type: "competes", strength: 5, note: "Direct app based learning benchmark." },
  { from: "Yousician", to: "fender-play", type: "competes", strength: 4, note: "Brand-backed guitar learning overlap." },
  { from: "Yousician", to: "ultimate-guitar", type: "influences", strength: 5, note: "Owns song discovery and tab-driven practice habits." },
  { from: "Yousician", to: "moises", type: "partners", strength: 4, note: "AI practice utility with possible complementarity." },
  { from: "Yousician", to: "bandlab", type: "influences", strength: 5, note: "Creator ecosystem changes hobby expectations." },
  { from: "Yousician", to: "fender", type: "partners", strength: 4, note: "Hardware and learning journey connection." },
  { from: "Yousician", to: "suno", type: "influences", strength: 5, note: "Changes music participation and creation assumptions." },
  { from: "Yousician", to: "duolingo", type: "influences", strength: 3, note: "Benchmark for consumer learning mechanics." },
  { from: "Yousician", to: "splice", type: "influences", strength: 3, note: "Shows paid creator tooling behavior." },
  { from: "Yousician", to: "guitar-tricks", type: "competes", strength: 4, note: "Structured guitar subscription and song/tutorial benchmark." },
  { from: "Yousician", to: "pickup-music", type: "competes", strength: 4, note: "Modern structured guitar pathway and community benchmark." },
  { from: "Yousician", to: "rocksmith-plus", type: "competes", strength: 4, note: "Song-led real-instrument feedback with game-like practice." },
  { from: "Yousician", to: "gibson-app", type: "competes", strength: 4, note: "Brand-backed guitar app with hardware bundle potential." },
  { from: "Yousician", to: "chordify", type: "influences", strength: 4, note: "Owns chord-recognition and play-along practice intent." },
  { from: "Yousician", to: "youtube-artists", type: "influences", strength: 5, note: "Default free learning, creator discovery, and song inspiration layer." },
  { from: "Yousician", to: "positive-grid", type: "partners", strength: 4, note: "Connected amp/app ecosystem can become a practice surface." },
  { from: "Yousician", to: "fl-studio", type: "influences", strength: 3, note: "Accessible production pathway after learning or practice." },
  { from: "Yousician", to: "elevenlabs-music", type: "influences", strength: 4, note: "Large AI audio platform entering music generation." },
  { from: "Yousician", to: "spotify-artists", type: "influences", strength: 3, note: "Defines artist success signals and AI-authenticity context." },
  { from: "Yousician", to: "tiktok-artists", type: "influences", strength: 4, note: "Shapes music discovery and what learners want to play." },
  { from: "Yousician", to: "musora", type: "competes", strength: 4, note: "Multi-instrument lesson ecosystem and subscription benchmark." },
  { from: "Yousician", to: "fretello", type: "competes", strength: 4, note: "Guitar-specific mobile learning and personalized practice benchmark." },
  { from: "Yousician", to: "playground-sessions", type: "competes", strength: 3, note: "Piano learning benchmark with interactive song-led lessons." },
  { from: "Yousician", to: "chord-ai", type: "influences", strength: 4, note: "AI chord detection owns a direct song-to-practice utility moment." },
  { from: "Yousician", to: "tomplay", type: "influences", strength: 3, note: "Interactive sheet music and backing tracks shape serious practice habits." },
  { from: "Yousician", to: "abrsm", type: "influences", strength: 3, note: "Exam and curriculum standards influence serious learners, parents, and teachers." },
  { from: "Yousician", to: "school-of-rock", type: "influences", strength: 3, note: "Offline lessons and performance goals compete for trust and accountability." },
  { from: "Yousician", to: "donner", type: "partners", strength: 3, note: "Affordable gear and app-connected beginner journeys create bundle opportunities." },
  { from: "Yousician", to: "flow-music", type: "influences", strength: 4, note: "Emerging AI music app expands the creation-disruption watchlist." },
  { from: "Yousician", to: "midia-research", type: "influences", strength: 3, note: "Market research can frame music participation, creator economy, and AI shifts." },
  { from: "Yousician", to: "chartmetric", type: "influences", strength: 3, note: "Music trend analytics can inform what learners want to play next." },
  { from: "Yousician", to: "muse-group", type: "influences", strength: 5, note: "Portfolio controls tabs, notation, audio editing and publishing surfaces close to practice." },
  { from: "Yousician", to: "hal-leonard", type: "partners", strength: 4, note: "Publishing and education catalog can affect repertoire, rights and trusted learning material." },
  { from: "Yousician", to: "musicnotes", type: "influences", strength: 4, note: "Digital sheet music owns a high-intent repertoire and practice purchase moment." },
  { from: "Yousician", to: "makemusic-cloud", type: "influences", strength: 4, note: "Teacher assignments and assessment shape the school practice workflow." },
  { from: "Yousician", to: "tonalenergy", type: "influences", strength: 3, note: "Tuner, metronome and analysis utilities compete for daily practice attention." },
  { from: "Yousician", to: "soundbrenner", type: "partners", strength: 3, note: "Connected metronome hardware and app habits create practice bundle potential." },
  { from: "Yousician", to: "cifra-club", type: "influences", strength: 4, note: "LatAm chords, tabs and lessons help explain regional song-led practice behavior." },
  { from: "Yousician", to: "loog", type: "partners", strength: 4, note: "Beginner instruments and family bundles can shape the first music learning decision." },
  { from: "Yousician", to: "coach-guitar", type: "competes", strength: 4, note: "Direct mobile guitar learning app benchmark for casual song progress." },
  { from: "Yousician", to: "piano-academy", type: "competes", strength: 4, note: "Direct piano learning app benchmark for feedback, beginner lessons and app store positioning." },
  { from: "Yousician", to: "smule", type: "influences", strength: 3, note: "Social singing shows the share and identity loop after learning turns into performance." }
];

const strategicMoves = [
  {
    date: "2024-06",
    title: "Suno / Udio - Record companies filed copyright cases against Suno and Ud",
    playerId: "suno-udio",
    category: "AI rights",
    sourceId: "riaa_suno_udio",
    summary: "Record companies filed copyright cases against Suno and Udio.",
    impact: "AI music shifted from product novelty to rights, licensing and board-level risk."
  },
  {
    date: "2024-09",
    title: "Duolingo / Loog - Duolingo Music became connected to a beginner-friendly por",
    playerId: "duolingo-loog",
    category: "Learning + hardware",
    sourceId: "duolingo_loog_piano_2024",
    summary: "Duolingo Music became connected to a beginner-friendly portable piano.",
    impact: "Validates that consumer learning platforms can extend into physical beginner bundles."
  },
  {
    date: "2025-01",
    title: "Music.AI / Moises - Music.AI raised a $40M Series A and said Moises had reache",
    playerId: "musicai-moises",
    category: "Funding / AI utility",
    sourceId: "musicai_series_a_2025",
    summary: "Music.AI raised a $40M Series A and said Moises had reached 50M users.",
    impact: "AI practice utilities have large consumer reach and investor backing."
  },
  {
    date: "2025-01",
    title: "Spotify for Artists - Spotify framed Campaign Kit as a toolset for deeper fandom",
    playerId: "spotify-for-artists",
    category: "Artist tools",
    sourceId: "spotify_campaign_kit",
    summary: "Spotify framed Campaign Kit as a toolset for deeper fandom and audience goals.",
    impact: "Artist-success tooling influences the advanced learner / creator journey."
  },
  {
    date: "2025-01",
    title: "Muse Group / Hal Leonard - Muse Group unified Hal Leonard US and Europe into a global",
    playerId: "muse-group-hal-leonard",
    category: "Publishing / rights",
    sourceId: "muse_group_hal_leonard_2025",
    summary: "Muse Group unified Hal Leonard US and Europe into a global publishing powerhouse.",
    impact: "Song rights, notation, tabs and learning content are increasingly ecosystem-controlled."
  },
  {
    date: "2025-06",
    title: "TikTok for Artists - TikTok launched an artist insights and promotional platfor",
    playerId: "tiktok-for-artists",
    category: "Artist insights",
    sourceId: "tiktok_for_artists_launch",
    summary: "TikTok launched an artist insights and promotional platform.",
    impact: "Short-form discovery is becoming measurable artist infrastructure."
  },
  {
    date: "2025-08",
    title: "ElevenLabs - ElevenLabs launched Eleven Music for prompt-based music ge",
    playerId: "elevenlabs",
    category: "AI music generation",
    sourceId: "eleven_music_blog",
    summary: "ElevenLabs launched Eleven Music for prompt-based music generation.",
    impact: "A major AI audio player moved directly into music creation."
  },
  {
    date: "2025-08",
    title: "Moises - Moises launched AI Studio for adaptive AI music creation s",
    playerId: "moises",
    category: "AI practice / creation",
    sourceId: "moises_ai_studio_2025",
    summary: "Moises launched AI Studio for adaptive AI music creation support.",
    impact: "Practice utilities are moving toward creation co-pilots."
  },
  {
    date: "2025-09",
    title: "Spotify - Spotify announced stronger AI protections for artists and ",
    playerId: "spotify",
    category: "AI governance",
    sourceId: "spotify_ai_protections_2025",
    summary: "Spotify announced stronger AI protections for artists and songwriters.",
    impact: "Platform AI rules affect future music discovery, identity and rights expectations."
  },
  {
    date: "2025-11",
    title: "Google Play - Google Play Best of 2025 continued as a platform-recogniti",
    playerId: "google-play",
    category: "Awards / Android",
    sourceId: "google_play_best_2025",
    summary: "Google Play Best of 2025 continued as a platform-recognition benchmark.",
    impact: "Useful for Android app-quality and editorial recognition planning."
  },
  {
    date: "2026-01",
    title: "EIC Accelerator - EIC Accelerator remained an EU route for high-risk, game-c",
    playerId: "eic-accelerator",
    category: "Funding / EU",
    sourceId: "eic_accelerator",
    summary: "EIC Accelerator remained an EU route for high-risk, game-changing innovation.",
    impact: "Potential public-funding route for AI/learning/creative-tech initiatives."
  },
  {
    date: "2026-06",
    title: "Apple Design Awards - Apple announced 2026 Design Award winners and finalists.",
    playerId: "apple-design-awards",
    category: "Awards / iOS",
    sourceId: "apple_design_awards_2026",
    summary: "Apple announced 2026 Design Award winners and finalists.",
    impact: "Clear benchmark for app craft, interaction, accessibility and award submission readiness."
  },
  {
    date: "2026-06",
    title: "AFM / major labels - Musicians union sued UMG and WMG over AI licensing related",
    playerId: "afm-major-labels",
    category: "AI rights",
    sourceId: "afm_ai_licensing_lawsuit_2026",
    summary: "Musicians union sued UMG and WMG over AI licensing related to Suno and Udio.",
    impact: "AI licensing disputes now extend from labels vs AI firms to musician compensation claims."
  }
];

const sourceCards = [
  {
    name: "Yousician User Research Database",
    use: "Confluence database for user, market, onboarding, retention, churn, conversion, brand, and competitor research.",
    cadence: "Search before substantive claims",
    status: "Live import blocked by Atlassian login; local skill context available",
    url: "https://yousician.atlassian.net/wiki/spaces/Research/database/5904400385"
  },
  {
    name: "Airtable",
    use: "Editable source of truth for records, categories, sources, scores, and relationship notes.",
    cadence: "Manual and automated updates",
    status: "Recommended backend"
  },
  {
    name: "Local live overrides",
    use: "Direct JSON layer for credentialed Appfigures metrics, traffic exports, and Yousician relationship confirmations.",
    cadence: "Whenever credentialed exports or internal notes are refreshed",
    status: "Implemented as data/live-overrides.json"
  },
  {
    name: "Appfigures",
    use: "Credentialed downloads, revenue, rankings, review velocity, country mix, and historical app performance.",
    cadence: "Weekly or monthly refresh",
    status: "Requires export or API access"
  },
  {
    name: "Crunchbase",
    use: "Funding rounds, investors, acquisitions, ownership, and company metadata.",
    cadence: "Weekly refresh",
    status: "Requires approved API access"
  },
  {
    name: "Similarweb",
    use: "Website traffic, engagement, geography, referrals, and competitive web signals.",
    cadence: "Monthly refresh",
    status: "Requires API access"
  },
  {
    name: "News monitoring",
    use: "Recent moves, funding news, launches, M&A, litigation, awards, and cultural signals.",
    cadence: "Daily or weekly digest",
    status: "API or alert pipeline"
  },
  {
    name: "Internal CRM",
    use: "Existing Yousician relationships, intros, partner conversations, and owner notes.",
    cadence: "Team maintained",
    status: "Needs permissions model"
  },
  {
    name: "Internal data gap audit",
    use: "Decision readiness checklist for monetization, retention, rights, catalog, relationship and user research gaps.",
    cadence: "Before board or LST review",
    status: "Implemented as request pack and player validation gate"
  },
  {
    name: "Manual research",
    use: "Strategic assessment, why it matters, confidence, and board ready interpretation.",
    cadence: "Before review cycles",
    status: "Always required"
  },
  {
    name: "Research protocol",
    use: "Every executive facing claim should carry source, date, and confidence before it is treated as researched content.",
    cadence: "Required before board export",
    status: "Addresses AI generated draft risk"
  },
  {
    name: "Export layer",
    use: "Snapshot PDFs, board slides, player briefs, and research appendices.",
    cadence: "On demand",
    status: "Can be automated later"
  }
];

const selfUpdatingPolicy = [
  {
    id: "safe-public",
    lane: "Safe automatic updates",
    tone: "safe",
    cadence: "Daily or weekly",
    owner: "Research Ops",
    fields: [
      "Official website availability, page title and source link health",
      "Public App Store rating, rating count, seller, genre and current version date",
      "Public reference fields such as website, HQ, founded date and parent entity when source matched",
      "Evidence source access status, duplicate source detection and source class coverage"
    ],
    rule: "Can write to public enrichment because the value is directly visible in a public source. Still never becomes revenue, downloads or relationship proof."
  },
  {
    id: "review-queue",
    lane: "Automatic detection, human review",
    tone: "review",
    cadence: "Weekly, plus before board review",
    owner: "Strategy and Research",
    fields: [
      "Product launches, feature copy, pricing page changes and app positioning changes",
      "Funding news, investor announcements, M and A, awards, deadline changes and policy updates",
      "AI rights, licensing, litigation and platform rule changes",
      "Contradictions between profile wording and newly observed public source values"
    ],
    rule: "Automatically detect and queue the change. Do not rewrite executive conclusions until a human accepts the interpretation."
  },
  {
    id: "credentialed",
    lane: "Credentialed import only",
    tone: "gated",
    cadence: "Weekly or monthly if access exists",
    owner: "Data, Finance or approved source owner",
    fields: [
      "Appfigures revenue, downloads, category rank, rank trend, country mix and review velocity",
      "Similarweb traffic, referrals, geography, engagement and web growth",
      "Crunchbase, PitchBook or Dealroom funding rounds, investors, valuation and acquisition history",
      "Internal product KPIs, conversion, retention, churn, ARPPU and cohort movement"
    ],
    rule: "Only update from a credentialed export or API. Public sources can flag the need, but cannot replace these values."
  },
  {
    id: "manual-lock",
    lane: "Manual decision fields",
    tone: "locked",
    cadence: "Review cycle only",
    owner: "Board, LST, Product, Growth and Strategy",
    fields: [
      "Strategic priority score, key player status and shortlist membership",
      "Yousician relevance, relationship status, owner, contact history and sensitivity",
      "Competitor, partner, acquirer, target or watchlist label",
      "Final executive recommendation, decision question, risk language and next action"
    ],
    rule: "Never self overwrite. These are judgment fields and should change only after explicit review."
  }
];

const selfUpdatingFieldContracts = [
  {
    id: "official-website",
    group: "Public auto",
    tone: "safe",
    field: "Website, public source URL and link health",
    cadence: "Daily or weekly",
    owner: "Research Ops",
    rule: "Update automatically when the value is directly visible on an official or public source. Broken links become warnings, not deleted facts."
  },
  {
    id: "public-app-store",
    group: "Public auto",
    tone: "safe",
    field: "App Store rating, rating count, seller, genre and version date",
    cadence: "Weekly",
    owner: "Research Ops",
    rule: "Update as public app signal only. Never translate ratings into downloads, revenue, retention or growth."
  },
  {
    id: "public-metadata",
    group: "Public auto",
    tone: "safe",
    field: "HQ, founded date, parent entity and official website reference",
    cadence: "Monthly",
    owner: "Research Ops",
    rule: "Use public entity references as current metadata. Flag conflicts and keep footprint or interpretation separate."
  },
  {
    id: "source-confidence",
    group: "Public auto",
    tone: "safe",
    field: "Source confidence, class coverage, duplicate detection and contradictions",
    cadence: "Every refresh",
    owner: "Research Ops",
    rule: "Recompute automatically from linked sources and public enrichment. This measures evidence quality, not business performance."
  },
  {
    id: "public-change-signals",
    group: "Detect and review",
    tone: "review",
    field: "Product launches, pricing copy, positioning, feature claims and website changes",
    cadence: "Weekly, plus before board review",
    owner: "Strategy and Research",
    rule: "Detect changes automatically and queue them. Human review decides whether the executive read changes."
  },
  {
    id: "funding-news",
    group: "Detect and review",
    tone: "review",
    field: "Funding rounds, M and A, investor announcements, litigation, awards and rights news",
    cadence: "Weekly",
    owner: "Strategy and Research",
    rule: "Public news can trigger a review. Do not rewrite valuation, strategic fit or recommendation language automatically."
  },
  {
    id: "appfigures-performance",
    group: "Credentialed only",
    tone: "gated",
    field: "Downloads, revenue, category rank, rank trend, country mix and review velocity",
    cadence: "Weekly or monthly if access exists",
    owner: "Growth, Analytics or Finance",
    rule: "Only update from Appfigures export or API. Public app store values are not substitutes."
  },
  {
    id: "traffic-funding-finance",
    group: "Credentialed only",
    tone: "gated",
    field: "Similarweb traffic, Crunchbase or PitchBook funding, valuation and acquisition history",
    cadence: "Monthly or deal review",
    owner: "Strategy, Finance or approved data owner",
    rule: "Only update from licensed exports, filings or approved direct sources. Public snippets remain review prompts."
  },
  {
    id: "internal-kpis",
    group: "Credentialed only",
    tone: "gated",
    field: "Internal conversion, retention, churn, LTV, ARPPU, cohort movement and pricing data",
    cadence: "Internal reporting cycle",
    owner: "Product Analytics, Growth and Finance",
    rule: "Only update from internal dashboards or approved exports. Never infer from competitor research."
  },
  {
    id: "relationship-status",
    group: "Manual decision",
    tone: "locked",
    field: "Existing relationship, owner, contact history, sensitivity and active path",
    cadence: "Review cycle",
    owner: "Yousician owner, BizDev or LST",
    rule: "Keep manual because the market cannot know internal relationship truth."
  },
  {
    id: "strategic-priority",
    group: "Manual decision",
    tone: "locked",
    field: "Strategic priority, key player status, shortlist, recommendation and next action",
    cadence: "Board or LST review",
    owner: "Board, LST and Strategy",
    rule: "Inputs can refresh automatically, but the decision label stays human owned."
  }
];

const liveDataFeeds = [
  {
    id: "local-overrides",
    name: "Local override file",
    status: "Ready",
    ready: true,
    owner: "Strategy / Research Ops",
    unlocks: "Immediate ingestion of Appfigures/manual metrics and internal relationship confirmations",
    nextStep: "Replace data/live-overrides.json or download the template and fill the blank fields."
  },
  {
    id: "appfigures",
    name: "Appfigures",
    status: "Credential needed",
    ready: false,
    owner: "Growth / Analytics",
    unlocks: "Downloads, revenue, category rank, review velocity, market trend history",
    nextStep: "Confirm paid plan/API access, then map app identifiers for learning, practice, and creation products."
  },
  {
    id: "internal-crm",
    name: "Internal relationship source",
    status: "Input needed",
    ready: false,
    owner: "Partnerships / BizDev",
    unlocks: "Existing contacts, intro paths, partnership history, commercial sensitivity, next owner",
    nextStep: "The partnership owner validates each relationship lane before external sharing."
  },
  {
    id: "finance-kpis",
    name: "Finance and KPI baseline",
    status: "Input needed",
    ready: false,
    owner: "Finance / Growth / Data Analytics",
    unlocks: "Conversion, retention, ARPPU, LTV, churn, pricing, plan mix and Yousician baseline comparisons",
    nextStep: "Load approved aggregates only; keep raw customer or payment data outside this static artifact."
  },
  {
    id: "rights-catalog",
    name: "Rights and catalog inventory",
    status: "Input needed",
    ready: false,
    owner: "Legal / Content",
    unlocks: "Catalog constraints, renewal risk, publisher dependencies, AI content rules and strategic repertoire gaps",
    nextStep: "Provide a summarized rights exposure export with restriction type, renewal window and strategic risk."
  },
  {
    id: "research-db",
    name: "Yousician research database",
    status: "Login gated",
    ready: true,
    owner: "Research",
    unlocks: "User motivations, FTUX, retention, conversion, pricing perception, competitor findings",
    nextStep: "Use the local research skill for grounded context; connect live Confluence only with approved access."
  },
  {
    id: "airtable",
    name: "Airtable source of truth",
    status: "Ready",
    ready: true,
    owner: "Strategy / Research Ops",
    unlocks: "Editable records, owner workflow, source status, export-ready tables, review comments",
    nextStep: "Mirror the current schema, then treat this website as the presentation layer."
  }
];

const internalGapAreas = [
  {
    id: "monetization-retention",
    label: "Monetization and retention truth",
    priority: "Critical",
    owner: "Growth / Finance / Data Analytics",
    why: "Turns the market map into an actual prioritization model.",
    missing: [
      "Conversion, ARPPU, LTV and churn by country, platform and product",
      "Plan mix, pricing, promotion, cohort retention and web or off store funnel economics",
      "Yousician baseline used for competitor and partner comparisons"
    ],
    unsafe: "Do not rank revenue, downloads, growth, country mix or payback against competitors without this input.",
    nextStep: "Import approved KPI Atlas, finance aggregates or Appfigures fields into the live override layer."
  },
  {
    id: "rights-catalog",
    label: "Rights, catalog and content constraints",
    priority: "Critical",
    owner: "Legal / Content",
    why: "Music strategy is gated by what Yousician can legally use, renew and expand.",
    missing: [
      "Licensed versus original catalog split, renewal exposure and publisher dependencies",
      "Song engagement, content gaps and rights costs by learning or practice use case",
      "Constraints for AI assisted content, chord recognition, tabs and artist/IP use"
    ],
    unsafe: "Do not imply catalog freedom, licensing fit, bundle readiness or AI rights safety until Legal and Content confirm.",
    nextStep: "Add a rights exposure extract with renewal date, restriction type, cost band and strategic risk."
  },
  {
    id: "relationship-reality",
    label: "Relationship reality",
    priority: "Critical",
    owner: "BizDev / Partnerships",
    why: "External fit is not enough if there is no contact, owner, intro path or acceptable sensitivity.",
    missing: [
      "Known contacts, warm intros, meeting history, NDA status, owner and next action",
      "Commercial sensitivity, blockers and whether an entity is partner, acquirer, target or competitor only",
      "Amazon/Alexa+ terms and 2022 bundle history where relevant"
    ],
    unsafe: "Do not state active partnership, acquisition path, owner status or relationship warmth from public evidence.",
    nextStep: "Complete the relationship template and classify each priority entity before external circulation."
  },
  {
    id: "competition-user-truth",
    label: "Competition and user truth",
    priority: "High",
    owner: "Product / Research",
    why: "Win/loss, switching and FTUX evidence decide whether a player is an actual threat or only a visible market actor.",
    missing: [
      "Switching reasons, won and lost comparison notes, overlap with Simply, Ultimate Guitar, Fender and other benchmarks",
      "Current FTUX findings, activation pain points, retention drivers and song choice behavior",
      "Parent, teacher and learner sentiment plus how sentiment changes over time"
    ],
    unsafe: "Do not call a player a stronger or weaker competitor without observed user, product or won and lost comparison evidence.",
    nextStep: "Attach current Research and Product findings to the selected priority profiles."
  },
  {
    id: "ai-compliance",
    label: "AI compliance and provenance",
    priority: "High",
    owner: "AI Strategy / Legal",
    why: "AI product signals can be strategically useful but legally misleading if training data and provenance are unknown.",
    missing: [
      "Training data provenance, content generation rules and user data boundaries",
      "Rights review for audio, chords, tabs, stems, feedback and synthetic music use cases",
      "Competitive substitution risk versus complementarity with instrument learning"
    ],
    unsafe: "Do not frame AI tools as safe integrations, threats or substitutes without provenance and legal review.",
    nextStep: "Create an AI rights and product safety checklist for AI relevant records."
  },
  {
    id: "strategic-weighting",
    label: "Strategic weighting",
    priority: "High",
    owner: "Leadership / Board / LST",
    why: "The dashboard can surface candidates, but priority order must reflect company strategy and risk appetite.",
    missing: [
      "Fit to Yousician moat, revenue at stake, capability overlap and relationship readiness",
      "Board and LST weighting for competitor, partner, acquirer, target and watchlist roles",
      "Decision thresholds for when to deepen research versus keep a player as market context"
    ],
    unsafe: "Do not treat the score as final prioritization until leadership confirms the weighting.",
    nextStep: "Use the shortlist in a triage session and record the agreed priority weights."
  }
];

const internalDataRequestPack = [
  {
    owner: "Product",
    asks: [
      "Current FTUX activation findings and drop-off points",
      "Feature adoption and lesson completion by learner segment",
      "Product overlap notes for Simply, Ultimate Guitar, Chordify, Fender and Kahoot"
    ]
  },
  {
    owner: "Research",
    asks: [
      "Motivations, churn drivers, song choice behavior and practice habit findings",
      "Competitor switching, won and lost comparisons, and brand perception evidence",
      "Parent, teacher and learner sentiment with time direction where available"
    ]
  },
  {
    owner: "Growth",
    asks: [
      "Conversion, ARPPU, LTV, churn, plan mix and pricing by country, platform and product",
      "Web and off store acquisition economics",
      "Appfigures identifiers and approved competitive app performance fields"
    ]
  },
  {
    owner: "Finance",
    asks: [
      "Revenue and margin baselines safe for internal prioritization",
      "Rights and catalog cost bands where finance owns the numbers",
      "Sensitivity rules for any financial figures shown outside the core team"
    ]
  },
  {
    owner: "BizDev / Partnerships",
    asks: [
      "Known contacts, warm intros, NDA status, meeting history and owner by entity",
      "Prior partner or bundle history including Amazon/Alexa+ terms where relevant",
      "Next action, blocker, commercial sensitivity and sharing restrictions"
    ]
  },
  {
    owner: "Legal / Content",
    asks: [
      "Catalog inventory, licensed versus original split, renewal exposure and restrictions",
      "Publisher relationships, rights constraints and content gaps by strategic use case",
      "AI provenance, generated content, chord/tab and artist/IP usage rules"
    ]
  },
  {
    owner: "Data Analytics",
    asks: [
      "Metric definitions for retention, LTV, churn, conversion and revenue fields",
      "Source of truth tables or exports for live overrides",
      "Coverage checks that flag which records are decision ready versus internal only"
    ]
  },
  {
    owner: "Leadership / Board / LST",
    asks: [
      "Agreed weighting for strategic fit, moat relevance, relationship readiness and revenue at stake",
      "Which categories deserve deeper research now versus later",
      "Decision thresholds for partner, target, acquirer, competitor and watchlist labels"
    ]
  }
];

const internalClaimRiskRules = [
  {
    label: "Performance claims",
    rule: "No revenue, downloads, growth, rank trend, country mix, conversion or retention claim without internal or credentialed data.",
    owner: "Growth / Finance"
  },
  {
    label: "Rights and catalog claims",
    rule: "No catalog, licensing, publisher, AI content or repertoire claim without Legal and Content validation.",
    owner: "Legal / Content"
  },
  {
    label: "Relationship claims",
    rule: "No partnership, acquisition, warm intro, owner or strategic intent claim without BizDev confirmation.",
    owner: "BizDev / Partnerships"
  },
  {
    label: "Competitive claims",
    rule: "No stronger or weaker competitor conclusion without won and lost comparison, switching, user overlap or product evidence.",
    owner: "Product / Research"
  }
];

const playerInternalGapNotes = {
  simply: {
    headline: "Validate direct learning comparison",
    owner: "Product / Growth / Research",
    questions: [
      "Where does Simply win or lose against Yousician in onboarding, motivation, pricing and beginner conversion?",
      "What are Yousician's conversion, retention, ARPPU and churn baselines for the matching learner segments?",
      "Which user research or support data explains switching between Simply and Yousician?"
    ],
    unsafe: ["Do not call Simply stronger or weaker on performance until Appfigures and internal funnel data are loaded."],
    nextStep: "Attach FTUX, pricing, retention and won and lost comparison evidence before board use."
  },
  "ultimate-guitar": {
    headline: "Validate song-practice overlap",
    owner: "Product / Research / Content",
    questions: [
      "How much Yousician demand starts with song choice, tabs or chords versus structured lessons?",
      "Where do Ultimate Guitar users overlap with GuitarTuna or Yousician users?",
      "Which catalog, rights or repertoire constraints change the strategic read?"
    ],
    unsafe: ["Do not infer habit substitution without usage, song choice or switching evidence."],
    nextStep: "Compare song choice, repertoire, retention and catalog constraints."
  },
  fender: {
    headline: "Validate brand and bundle relevance",
    owner: "BizDev / Partnerships / Product",
    questions: [
      "Has Yousician had Fender, Fender Play, retail or hardware bundle conversations?",
      "What beginner bundle, activation or hardware purchase data would prove distribution value?",
      "Which brand, retailer or channel sensitivities matter before outreach?"
    ],
    unsafe: ["Do not imply partnership readiness or bundle economics from brand fit alone."],
    nextStep: "Complete relationship owner, contact history and bundle economics fields."
  },
  bandlab: {
    headline: "Validate creation path relevance",
    owner: "Product / AI Strategy / Research",
    questions: [
      "Do Yousician learners graduate into creation workflows, or is this a separate audience?",
      "What AI provenance, creator loop and community data changes the risk/opportunity read?",
      "Which creation features increase retention or identity for Yousician users?"
    ],
    unsafe: ["Do not frame creation platforms as direct substitutes without user journey evidence."],
    nextStep: "Link research on learner to creator transitions and AI safety review."
  },
  duolingo: {
    headline: "Validate learning mechanics transferability",
    owner: "Product / Research / Data Analytics",
    questions: [
      "Which Duolingo mechanics are actually transferable to instrument learning and which are not?",
      "How do Yousician retention, streak, practice and lesson completion curves compare?",
      "Is Duolingo Music a real user threat or a benchmark for habit design only?"
    ],
    unsafe: ["Do not import education app lessons blindly without music-practice validation."],
    nextStep: "Compare retention loops, streak behavior, pricing and lesson completion metrics."
  },
  kahoot: {
    headline: "Validate classroom engagement relevance",
    owner: "Product / Research / Education",
    questions: [
      "Is classroom or teacher-led engagement strategically relevant to Yousician now?",
      "Which teacher, school or group-learning signals exist in internal research?",
      "Could game based learning mechanics improve practice motivation without diluting the product?"
    ],
    unsafe: ["Do not treat classroom reach as a priority unless Yousician confirms an education channel strategy."],
    nextStep: "Add teacher/channel research and decide whether Kahoot is benchmark, partner or watchlist."
  },
  chordify: {
    headline: "Validate chord utility substitution",
    owner: "Product / Research / Content",
    questions: [
      "Do users choose Chordify instead of structured practice, or as a lightweight song utility?",
      "Which chord recognition, repertoire and conversion signals overlap with Yousician's mission?",
      "What rights constraints apply to chord parsing and play-along use cases?"
    ],
    unsafe: ["Do not claim substitution risk without song utility and user overlap evidence."],
    nextStep: "Link song-choice research, app performance and content rights review."
  },
  "spotify-platform": {
    headline: "Validate discovery-to-practice bridge",
    owner: "Strategy / BizDev / Content",
    questions: [
      "Can music discovery realistically convert into practice sessions for Yousician?",
      "Which Spotify relationships, artist tools or campaign surfaces are internally known?",
      "Which rights and attribution constraints govern any discovery-to-learning idea?"
    ],
    unsafe: ["Do not imply partnership or conversion potential from audience scale alone."],
    nextStep: "Validate relationship owner, use case and rights fit before strategic outreach."
  },
  disney: {
    headline: "Validate family IP and education fit",
    owner: "Strategy / BizDev / Legal",
    questions: [
      "Is family IP, character-led learning or music education strategically relevant to Yousician?",
      "Does Yousician have any contact, licensing history or sensitivity with Disney or related IP owners?",
      "Which audience, rights and brand safety constraints would block a real use case?"
    ],
    unsafe: ["Do not frame Disney as partner, acquirer or IP route without internal strategy confirmation."],
    nextStep: "Classify as watchlist, partner thesis or no-action after leadership review."
  },
  "epic-games": {
    headline: "Validate interactive entertainment relevance",
    owner: "Strategy / Product / BizDev",
    questions: [
      "Could music learning benefit from social play, concerts, creator economies or game-like identity?",
      "Is there any internal relationship or product hypothesis around Epic, Fortnite or Harmonix?",
      "What acquisition or partnership precedent actually matters to Yousician?"
    ],
    unsafe: ["Do not treat youth attention as strategic fit until a concrete use case exists."],
    nextStep: "Separate attention competitor, product inspiration and partner thesis."
  },
  roblox: {
    headline: "Validate youth identity and creation relevance",
    owner: "Strategy / Research / Product",
    questions: [
      "Does youth identity, social feedback or creator participation map to Yousician's target learners?",
      "Which research shows group play, sharing or identity as a retention driver?",
      "Could Roblox be inspiration only, a partner surface, or outside scope?"
    ],
    unsafe: ["Do not overstate education or music-learning fit from platform scale alone."],
    nextStep: "Add user research on social motivation and classify strategic relevance."
  },
  netflix: {
    headline: "Validate attention benchmark only",
    owner: "Strategy / Research",
    questions: [
      "Is Netflix useful beyond attention and family entertainment benchmarking?",
      "Which music, games or family learning signals would make it strategically relevant?",
      "Does Yousician leadership want this type of broad platform in the active shortlist?"
    ],
    unsafe: ["Do not imply direct partnership, competitor or acquirer relevance without leadership validation."],
    nextStep: "Keep as watchlist unless a concrete music or learning use case is agreed."
  },
  nintendo: {
    headline: "Validate playful learning relevance",
    owner: "Strategy / Product / Research",
    questions: [
      "Which playful learning, family trust or music-game mechanics can inform Yousician?",
      "Does internal user research support play, identity or family co-use as a strategic driver?",
      "Is Nintendo a benchmark only, or a real strategic adjacency?"
    ],
    unsafe: ["Do not use nostalgia or brand fit as strategic proof."],
    nextStep: "Use as product inspiration unless leadership flags deeper strategic relevance."
  },
  suno: {
    headline: "Validate AI substitution and rights risk",
    owner: "AI Strategy / Legal / Product",
    questions: [
      "Does AI music generation substitute learning, inspire learning, or create a separate use case?",
      "Which rights, provenance and artist compensation issues matter for Yousician's roadmap?",
      "Could AI creation change learner motivation or song choice?"
    ],
    unsafe: ["Do not frame AI music generation as safe or threatening without legal and user evidence."],
    nextStep: "Attach AI rights review and research on learner motivation."
  },
  udio: {
    headline: "Validate AI creation signal",
    owner: "AI Strategy / Legal / Product",
    questions: [
      "Which AI generation patterns matter to instrument learning versus creator entertainment?",
      "What provenance, licensing and user-data rules would apply to related features?",
      "Is Udio a substitute risk, inspiration source or external legal signal?"
    ],
    unsafe: ["Do not convert AI buzz into a product conclusion without internal review."],
    nextStep: "Classify as legal signal, product inspiration or monitored risk."
  }
};

const researchContextFallback = {
  status: {
    mode: "fallback",
    label: "Research layer pending",
    liveAccess: "not_loaded",
    lastChecked: "2026-06-10",
    databaseUrl: "https://yousician.atlassian.net/wiki/spaces/Research/database/5904400385",
    note: "Local research context has not loaded yet."
  },
  studies: [],
  marketPrinciples: [],
  playerAnchors: {},
  categoryAnchors: {}
};

let researchContext = researchContextFallback;

const evidenceContextFallback = {
  status: {
    label: "Evidence library pending",
    lastChecked: "2026-06-10",
    method: "Local evidence file has not loaded yet.",
    caveat: "Treat player notes as draft intelligence until source links are loaded."
  },
  sourceLibrary: [],
  evidenceByPlayer: {}
};

let evidenceContext = evidenceContextFallback;
let evidenceContextStatus = "loading";

const liveOverrideFallback = {
  status: {
    label: "Live override layer pending",
    lastUpdated: "2026-06-10",
    source: "data/live-overrides.json",
    caveat: "No credentialed live metrics or internal relationship overrides are loaded yet."
  },
  schema: {
    metricsByPlayer: "playerId -> Appfigures, Similarweb, traffic, revenue, rank, or manual metric fields",
    relationshipOverrides: "playerId -> owner, status, knownRelationship, nextStep, sensitivity, lastContactDate"
  },
  metricsByPlayer: {},
  relationshipOverrides: {}
};

let liveOverrideContext = liveOverrideFallback;
let liveOverrideStatus = "loading";

const publicEnrichmentFallback = {
  status: {
    label: "Public enrichment pending",
    lastUpdated: "",
    source: "data/public-enrichment.json",
    caveat: "Public enrichment has not loaded yet."
  },
  playerEnrichment: {}
};

let publicEnrichmentContext = publicEnrichmentFallback;
let publicEnrichmentStatus = "loading";

const backendStateFallback = {
  available: false,
  loading: true,
  busyAction: "",
  error: "",
  status: null,
  reviewRows: [],
  relationships: [],
  appfiguresRows: [],
  dataQuality: null
};

let backendState = { ...backendStateFallback };

const defaultMapFocusMode = "priority";
const defaultMapZoomMode = "auto";
const defaultMapRecordLimit = 25;
const defaultMapRankMode = "priority";
const defaultBubbleSizeMode = "mission";
const yousicianLookerBoardUrl = "https://yousician.eu.looker.com/boards/14";

const state = {
  mode: "executive",
  selectedCategory: "all",
  ecosystemLayer: "all",
  selectedProductLens: "all",
  minRelevance: 1,
  query: "",
  selectedPlayerId: "simply",
  view: "overview",
  dbSegment: "all",
  dbSort: "priority",
  ratingMode: "strategic",
  exportLength: "standard",
  monitorSegment: "all",
  monitorSort: "priority",
  monitorQuery: "",
  mapFocusMode: defaultMapFocusMode,
  mapZoomMode: defaultMapZoomMode,
  mapRecordLimit: defaultMapRecordLimit,
  mapRankMode: defaultMapRankMode,
  bubbleSizeMode: defaultBubbleSizeMode,
  volosTeaserVisible: false,
  quickFocus: null
};

let previousMapNodePositions = new Map();
let previousMapRenderSignature = "";
let volosTeaserTimer = null;
let volosTeaserScrollY = 0;

function clearVolosTeaserTimer() {
  window.clearTimeout(volosTeaserTimer);
  volosTeaserTimer = null;
}

function dismissVolosTeaser(options = {}) {
  clearVolosTeaserTimer();
  if (!state.volosTeaserVisible) return;
  state.volosTeaserVisible = false;
  if (options.render !== false && state.view === "overview") renderMapSummaryStrip();
}

function showVolosTeaser() {
  if (state.view !== "overview") return;
  clearVolosTeaserTimer();
  state.volosTeaserVisible = true;
  volosTeaserScrollY = window.scrollY || 0;
  renderMapSummaryStrip();
  volosTeaserTimer = window.setTimeout(() => dismissVolosTeaser(), 1450);
}

function openVolosSideQuest() {
  dismissVolosTeaser({ render: false });
  switchView("sonovia-volos", { scroll: true, pushUrl: true });
}

function openYousicianLookerBoard() {
  dismissVolosTeaser({ render: false });
  window.location.assign(yousicianLookerBoardUrl);
}

function isExecutiveMode() {
  return state.mode === "executive";
}

function relationshipCompletionText() {
  return "Internal relationship status not yet captured in this dataset. To be completed by Yousician.";
}

const exportLengthOptions = [
  {
    id: "short",
    label: "Executive brief",
    printLabel: "Short executive report",
    pages: "Shortest",
    note: "Direct answers, primary files, and essential caveats only."
  },
  {
    id: "standard",
    label: "Standard brief",
    printLabel: "Standard brief-aligned report",
    pages: "Recommended",
    note: "Brief coverage, ecosystem map, key players, and required completion notes."
  },
  {
    id: "full",
    label: "Full appendix",
    printLabel: "Full report with appendix",
    pages: "Longest",
    note: "Adds database, relationship, and source-context appendix pages."
  }
];

const els = {
  modeButtons: document.querySelectorAll(".mode-button"),
  quietModeMenu: document.getElementById("quietModeMenu"),
  totalPlayers: document.getElementById("totalPlayers"),
  keyPlayers: document.getElementById("keyPlayers"),
  aiPlayers: document.getElementById("aiPlayers"),
  needsSource: document.getElementById("needsSource"),
  productLensFilters: document.getElementById("productLensFilters"),
  productLensResearchNote: document.getElementById("productLensResearchNote"),
  categoryFilters: document.getElementById("categoryFilters"),
  priorityRange: document.getElementById("priorityRange"),
  priorityValue: document.getElementById("priorityValue"),
  searchInput: document.getElementById("searchInput"),
  activeFilterStrip: document.getElementById("activeFilterStrip"),
  clearFilters: document.getElementById("clearFilters"),
  mapLegend: document.getElementById("mapLegend"),
  journeyBlueprint: document.getElementById("journeyBlueprint"),
  ecosystemGuide: document.getElementById("ecosystemGuide"),
  mapSummaryStrip: document.getElementById("mapSummaryStrip"),
  mapCompanyPicker: document.getElementById("mapCompanyPicker"),
  ecosystemMap: document.getElementById("ecosystemMap"),
  overviewMonitorSnapshot: document.getElementById("overviewMonitorSnapshot"),
  categoryLandscape: document.getElementById("categoryLandscape"),
  profilePanel: document.getElementById("profilePanel"),
  briefReadiness: document.getElementById("briefReadiness"),
  aiRadar: document.getElementById("aiRadar"),
  recentMoves: document.getElementById("recentMoves"),
  strategicImplications: document.getElementById("strategicImplications"),
  portfolioVisual: document.getElementById("portfolioVisual"),
  marketMonitorOverview: document.getElementById("marketMonitorOverview"),
  monitorControlBar: document.getElementById("monitorControlBar"),
  companyDirectory: document.getElementById("companyDirectory"),
  activityQueue: document.getElementById("activityQueue"),
  keyPlayerVisuals: document.getElementById("keyPlayerVisuals"),
  keyPlayerGrid: document.getElementById("keyPlayerGrid"),
  onePager: document.getElementById("onePager"),
  printOnePager: document.getElementById("printOnePager"),
  databaseStats: document.getElementById("databaseStats"),
  keyPlayerTemplate: document.getElementById("keyPlayerTemplate"),
  databaseVisuals: document.getElementById("databaseVisuals"),
  databaseSegments: document.getElementById("databaseSegments"),
  databaseSort: document.getElementById("databaseSort"),
  databaseRating: document.getElementById("databaseRating"),
  databaseCards: document.getElementById("databaseCards"),
  databaseRows: document.getElementById("databaseRows"),
  relationshipGraph: document.getElementById("relationshipGraph"),
  relationshipList: document.getElementById("relationshipList"),
  relationshipValidationPanel: document.getElementById("relationshipValidationPanel"),
  backendOpsPanel: document.getElementById("backendOpsPanel"),
  sourceStatusPanel: document.getElementById("sourceStatusPanel"),
  sourceVisuals: document.getElementById("sourceVisuals"),
  validationReadiness: document.getElementById("validationReadiness"),
  internalGapAudit: document.getElementById("internalGapAudit"),
  evidenceLibrary: document.getElementById("evidenceLibrary"),
  sourceGrid: document.getElementById("sourceGrid"),
  toast: document.getElementById("toast"),
  downloadCsv: document.getElementById("downloadCsv"),
  clearSearch: document.getElementById("clearSearch"),
  exportButton: document.getElementById("exportButton"),
  exportSnapshot: document.getElementById("exportSnapshot")
};

const databaseSegments = [
  { id: "all", label: "All records", icon: "layout-grid", matches: () => true },
  { id: "key", label: "Priority profiles", icon: "badge-check", matches: (player) => player.key },
  { id: "actors", label: "Companies and orgs", icon: "building-2", matches: (player) => !isSignalOnlyRecord(player) },
  { id: "claims", label: "Needs caution", icon: "alert-triangle", matches: (player) => claimIntegrityFor(player).hasHypothesis },
  { id: "conflicts", label: "Value conflicts", icon: "git-compare-arrows", matches: (player) => claimConflictAudit(player).conflicts.length > 0 },
  { id: "source", label: "Missing data", icon: "file-search", matches: (player) => hasCriticalEvidenceGap(player) },
  { id: "sourceclasses", label: "Missing source class", icon: "list-checks", matches: (player) => sourceCoverageTargetAudit(player).missingRequired.length > 0 },
  {
    id: "ready",
    label: "Ready records",
    icon: "shield-check",
    matches: (player) => isReadyRecord(player)
  },
  { id: "appdata", label: "App data needed", icon: "bar-chart-3", matches: (player) => requiresCredentialedData(player) },
  { id: "signals", label: "Market signals", icon: "radar", matches: (player) => isSignalOnlyRecord(player) },
  { id: "internal", label: "Yousician input needed", icon: "network", matches: (player) => Boolean(relationForPlayer(player)) },
  { id: "ai", label: "AI and disruption", icon: "sparkles", matches: (player) => player.aiScore >= 4 || player.category === "ai" },
  {
    id: "partner",
    label: "Partner candidates",
    icon: "handshake",
    matches: (player) =>
      relationForPlayer(player)?.type === "partners" ||
      ["hardware", "education"].includes(player.category) ||
      /partner|channel|retail|hardware|school|teacher|education|bundle|store|brand|funding|recognition/i.test(
        activitySearchText(player)
      )
  }
];

const monitorSegments = [
  { id: "all", label: "All records", matches: () => true },
  { id: "key", label: "Key players", matches: (player) => player.key },
  { id: "core", label: "Core market", matches: (player) => ["learning", "practice"].includes(player.category) },
  { id: "appdata", label: "App data needed", matches: (player) => requiresCredentialedData(player) },
  { id: "ai", label: "AI and creation", matches: (player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category) },
  { id: "proof", label: "Proof gaps", matches: (player) => hasCriticalEvidenceGap(player) || qualityProfile(player).score < 68 },
  {
    id: "partners",
    label: "Partners",
    matches: (player) => relationForPlayer(player)?.type === "partners" || ["hardware", "education"].includes(player.category)
  },
  { id: "signals", label: "Market signals", matches: (player) => isSignalOnlyRecord(player) }
];

const monitorSortModes = [
  { id: "priority", label: "Priority", note: "Composite strategic rank" },
  { id: "relevance", label: "Yousician fit", note: "Direct fit to the mission and product surface" },
  { id: "momentum", label: "Momentum", note: "Recent market activity and signal velocity" },
  { id: "ai", label: "AI pressure", note: "AI relevance and substitution pressure" },
  { id: "company", label: "Verified scale", note: "Direct imported size data only" },
  { id: "revenue", label: "Verified revenue", note: "Credentialed revenue data only" },
  { id: "reach", label: "Verified reach", note: "Direct audience, traffic or app data only" },
  { id: "capital", label: "Capital signal", note: "Funding, ownership, acquisition and investor signals" },
  { id: "proximity", label: "Competitive proximity", note: "Closeness to Yousician's learning and practice loop" },
  { id: "evidence", label: "Source confidence", note: "Records with stronger source coverage first" },
  { id: "proof", label: "Proof gaps", note: "Records that need evidence before decision use" },
  { id: "appdata", label: "App data need", note: "Records that need Appfigures, traffic, or revenue imports" }
];

const mapFocusModes = [
  { id: "all", label: "All records", matches: () => true },
  {
    id: "priority",
    label: "Priority",
    matches: (player) =>
      player.key ||
      player.relevance >= 5 ||
      (player.relevance >= 4 && (player.momentum >= 4 || player.aiScore >= 5))
  },
  { id: "key", label: "Key players", matches: (player) => player.key },
  { id: "ai", label: "AI records", matches: (player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category) },
  { id: "appdata", label: "App data needed", matches: (player) => requiresCredentialedData(player) }
];

const bubbleSizeModes = [
  {
    id: "mission",
    label: "Yousician relevance",
    shortLabel: "Fit",
    note: "Default size combines company scale with strategic relevance to Yousician."
  },
  {
    id: "strategic",
    label: "Strategic influence",
    shortLabel: "Impact",
    note: "Default size shows strategic influence, not company size."
  },
  {
    id: "business",
    label: "Verified company scale",
    shortLabel: "Scale",
    note: "Uses imported direct metrics only. Missing values stay pending."
  },
  {
    id: "revenue",
    label: "Verified revenue",
    shortLabel: "Rev.",
    note: "Uses credentialed revenue data only. Missing values stay pending."
  },
  {
    id: "reach",
    label: "Verified reach",
    shortLabel: "Reach",
    note: "Uses imported audience, traffic, app or direct source data only."
  },
  {
    id: "appfigures",
    label: "App data status",
    shortLabel: "Apps",
    note: "App data status shows whether app metrics are queued or missing. It is not a performance ranking."
  },
  {
    id: "ai",
    label: "AI relevance",
    shortLabel: "AI",
    note: "AI relevance uses the current AI score field."
  },
  {
    id: "momentum",
    label: "Recent momentum",
    shortLabel: "Trend",
    note: "Recent momentum uses the current momentum field."
  },
  {
    id: "evidence",
    label: "Source confidence",
    shortLabel: "Sources",
    note: "Source confidence uses linked source coverage and claim quality."
  }
];

const mapRankModes = [
  {
    id: "priority",
    label: "Strategic priority",
    shortLabel: "Priority",
    note: "Uses key player status, Yousician relevance, momentum and AI pressure."
  },
  ...bubbleSizeModes
];

const ratingModes = [
  {
    id: "strategic",
    label: "Strategic priority",
    shortLabel: "Priority",
    note: "Composite view of relevance, momentum, AI relevance, and key player status."
  },
  {
    id: "relevance",
    label: "Yousician relevance",
    shortLabel: "Relevance",
    note: "Direct strategic relevance to Yousician."
  },
  {
    id: "company",
    label: "Verified scale",
    shortLabel: "Direct scale",
    note: "Direct imported size, traffic or performance data only."
  },
  {
    id: "revenue",
    label: "Verified revenue",
    shortLabel: "Direct revenue",
    note: "Credentialed revenue data only."
  },
  {
    id: "reach",
    label: "Verified reach",
    shortLabel: "Direct reach",
    note: "Direct audience, app, traffic or source of truth data only."
  },
  {
    id: "evidence",
    label: "Source confidence",
    shortLabel: "Sources",
    note: "Linked evidence strength and claim confidence."
  },
  {
    id: "proximity",
    label: "Competitive proximity",
    shortLabel: "Proximity",
    note: "How close the actor is to Yousician's learning and practice surface."
  },
  {
    id: "appdata",
    label: "App data status",
    shortLabel: "App data",
    note: "Prepared app or traffic data queue, not performance ranking."
  },
  {
    id: "ai",
    label: "AI relevance",
    shortLabel: "AI",
    note: "Current AI relevance score."
  },
  {
    id: "momentum",
    label: "Momentum",
    shortLabel: "Momentum",
    note: "Recent signal and market move momentum."
  }
];

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function journeyCategoryById(id) {
  return journeyCategories.find((category) => category.id === id) || journeyCategories[0];
}

const journeyCategoryOverrides = {
  simply: "learn",
  "fender-play": "learn",
  flowkey: "learn",
  skoove: "learn",
  justinguitar: "learn",
  "marty-music": "learn",
  "artie-piano": "learn",
  "pickup-music": "learn",
  musora: "learn",
  fretello: "learn",
  "guitar-tricks": "learn",
  truefire: "learn",
  "piano-marvel": "learn",
  melodics: "learn",
  tonebase: "learn",
  artistworks: "learn",
  "playground-sessions": "learn",
  musicca: "learn",
  "school-of-rock": "learn",
  "coach-guitar": "learn",
  "piano-academy": "learn",
  duolingo: "broader",
  kahoot: "broader",
  brilliant: "broader",
  "muse-group": "broader",
  "ultimate-guitar": "practice",
  songsterr: "practice",
  chordify: "practice",
  "chord-ai": "practice",
  moises: "practice",
  "rocksmith-plus": "practice",
  soundslice: "practice",
  "guitar-pro": "practice",
  "hal-leonard": "practice",
  musicnotes: "practice",
  "makemusic-cloud": "practice",
  tonalenergy: "practice",
  soundbrenner: "practice",
  "cifra-club": "practice",
  rsi: "practice",
  tomplay: "practice",
  "youtube-artists": "discover",
  techcrunch: "discover",
  accel: "discover",
  "creative-europe": "discover",
  "music-tectonics": "discover",
  "midia-research": "discover",
  namm: "discover",
  luminate: "discover",
  chartmetric: "discover",
  "a16z-consumer": "discover",
  "general-catalyst": "discover",
  "eic-accelerator": "discover",
  "horizon-europe-cluster-2": "discover",
  "eit-culture-creativity": "discover",
  "sxsw-edu-launch": "discover",
  "spotify-platform": "discover",
  bandlab: "create",
  musescore: "create",
  "apple-garageband": "create",
  suno: "create",
  udio: "create",
  splice: "create",
  aiva: "create",
  "fl-studio": "create",
  ableton: "create",
  soundtrap: "create",
  landr: "create",
  "native-instruments": "create",
  "lalal-ai": "create",
  "elevenlabs-music": "create",
  audacity: "create",
  soundation: "create",
  beatstars: "create",
  "flow-music": "create",
  "ripx-daw": "create",
  klangio: "create",
  soundcloud: "share",
  bandcamp: "share",
  distrokid: "share",
  amuse: "share",
  linkfire: "share",
  "feature-fm": "share",
  patreon: "share",
  smule: "share",
  "spotify-artists": "share",
  "tiktok-artists": "share",
  "music-ally": "share",
  "berklee-online": "identity",
  mtna: "identity",
  abrsm: "identity",
  rcm: "identity",
  "flat-io": "identity",
  noteflight: "identity",
  "trinity-college-london": "identity",
  nafme: "identity",
  "apple-design-awards": "identity",
  "google-play-awards": "identity",
  "bett-awards": "identity",
  "learning-technologies-awards": "identity"
};

function journeyCategoryFor(player) {
  const explicitCategory = journeyCategoryOverrides[player.id];
  if (explicitCategory) return journeyCategoryById(explicitCategory);
  const text = `${player.name} ${player.type} ${player.subcategory} ${player.model} ${player.ownership} ${player.description} ${player.why} ${player.tags.join(" ")}`.toLowerCase();
  if (player.category === "platforms") return journeyCategoryById("broader");
  if (player.category === "signals") {
    if (/award|recognition|credential|certification|best of|design/.test(text)) return journeyCategoryById("identity");
    return journeyCategoryById("discover");
  }
  if (player.category === "hardware") return journeyCategoryById("start");
  if (player.category === "practice" || /tab|chord|practice|songsterr|ultimate guitar|moises|tuna|repertoire|feedback|habit|sheet music|play-along|loop/.test(text)) {
    return journeyCategoryById("practice");
  }
  if (player.category === "creation" || player.category === "ai" || /create|creator|studio|daw|sample|production|generation|suno|udio|bandlab|splice|soundtrap|fl studio|ableton|recording|mastering|distribution|notation|composition|arranging|stem/.test(text)) {
    return journeyCategoryById("create");
  }
  if (/retail|hardware|instrument|guitar brand|beginner bundle|store|thomann|sweetwater|fender|yamaha|gibson|positive grid|pickup music/.test(text)) {
    return journeyCategoryById("start");
  }
  if (player.category === "learning" || /curriculum|lesson|teacher|school|course|learn|education|duolingo|simply|flowkey|skoove|fender play/.test(text)) {
    return journeyCategoryById("learn");
  }
  if (/share|community|social|fans|fanbase|direct-to-fan|promotion|campaign|publisher|label|rights|artist tools|artist services|distribution|bandcamp|soundcloud|distrokid|amuse|linkfire|feature\.fm|hypebot|music ally/.test(text)) {
    return journeyCategoryById("share");
  }
  if (/identity|family|games|award|recognition|association|credential|certification|abrsm|trinity|royal schools|nafme|apple design|google play|bett/.test(text)) {
    return journeyCategoryById("identity");
  }
  if (/spotify|youtube|tiktok|artist|playlist|streaming|media|newsletter|discovery|culture|inspiration|concert|festival|sxsw|music tectonics/.test(text)) {
    return journeyCategoryById("discover");
  }
  return journeyCategoryById("discover");
}

function journeyColorFor(player) {
  return journeyCategoryFor(player).color;
}

function colorFor(player) {
  return categoryById(player.category)?.color || "#17191a";
}

function iconHtml(icon, className = "data-icon") {
  if (!nonEmptyString(icon)) return "";
  return `<i class="${escapeHtml(className)}" data-lucide="${escapeHtml(icon)}" aria-hidden="true"></i>`;
}

function categoryIconHtml(category, className = "data-icon category-icon") {
  if (!category) return "";
  return iconHtml(category.icon || "circle-dot", className);
}

function journeyIconHtml(journey, className = "data-icon journey-icon") {
  if (!journey) return "";
  return iconHtml(journey.icon || "route", className);
}

function productLensIconForLabel(label) {
  const normalized = `${label || ""}`.toLowerCase();
  if (/yousician/.test(normalized) && /guitartuna/.test(normalized)) return "shuffle";
  if (/yousician/.test(normalized)) return "target";
  if (/guitartuna/.test(normalized)) return "music-2";
  return "globe-2";
}

function productLensChipHtml(player, className = "product-lens-table-chip") {
  const label = productFocusLabel(player);
  return `<span class="${escapeHtml(className)}">${iconHtml(productLensIconForLabel(label), "chip-icon")}${escapeHtml(label)}</span>`;
}

function databaseActionIcon(action) {
  const icons = {
    "tracked-records": "layout-grid",
    "key-players": "badge-check",
    "journey-steps": "route",
    "evidence-links": "link",
    appfigures: "bar-chart-3",
    relationships: "network",
    "ai-relevant": "sparkles",
    "market-signals": "radar",
    "source-confidence": "shield-check",
    "value-conflicts": "git-compare-arrows",
    "claim-caveats": "alert-triangle",
    "proof-debt": "file-search",
    "source-targets": "list-checks",
    "ready-records": "shield-check"
  };
  return icons[action] || "circle-dot";
}

function sourceNeedIcon(need) {
  const text = `${need || ""}`.toLowerCase();
  if (/appfigures|metric|revenue|rank|download|traffic|scale|performance/.test(text)) return "bar-chart-3";
  if (/relationship|owner|internal|yousician|partner/.test(text)) return "network";
  if (/source|evidence|proof|link|official|website/.test(text)) return "file-search";
  if (/ownership|investor|funding|acquisition/.test(text)) return "building-2";
  if (/ai/.test(text)) return "sparkles";
  return "circle-dot";
}

function sourceNeedChipHtml(need) {
  return `<span class="source-need">${iconHtml(sourceNeedIcon(need), "chip-icon")}${escapeHtml(need)}</span>`;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function compactName(name, max = 15) {
  return name.length > max ? `${name.slice(0, max - 1)}.` : name;
}

function mapCategoryLabel(category) {
  return category.shortName || category.name;
}

function strategicWeight(player) {
  return player.relevance * 4 + player.momentum * 3 + player.aiScore * 2 + (player.key ? 6 : 0);
}

function bubbleSizeModeById(id) {
  return bubbleSizeModes.find((mode) => mode.id === id) || bubbleSizeModes[0];
}

function mapRankModeById(id) {
  return mapRankModes.find((mode) => mode.id === id) || mapRankModes[0];
}

function ratingModeById(id) {
  return ratingModes.find((mode) => mode.id === id) || ratingModes[0];
}

function businessSizeScore(player) {
  const reach = `${player.reach || ""} ${player.type || ""} ${player.model || ""} ${player.ownership || ""}`.toLowerCase();
  if (
    /massive|very large|major global|major platform|preinstalled|broad apple|alphabet|google|apple|microsoft|spotify|bytedance|tiktok|warner|universal|yamaha|duolingo|ubisoft/.test(
      reach
    )
  ) {
    return 5;
  }
  if (/major|large|global|spotify backed|public company|muse group|fender|gibson|hal leonard/.test(reach)) return 4;
  if (/established|visible|growing|brand backed|subscription|marketplace|platform/.test(reach)) return 3;
  if (/specialist|niche|emerging|independent|research source|association|award/.test(reach)) return 2;
  return 1;
}

function audienceReachScore(player) {
  const text = `${player.reach || ""} ${player.geography || ""} ${player.type || ""} ${player.description || ""}`.toLowerCase();
  if (/massive|very large|preinstalled|global platform|major platform|broad apple|worldwide|hundreds of millions/.test(text)) return 5;
  if (/large global|major global|global|large|major|broad|scaled/.test(text)) return 4;
  if (/established|visible|growing|brand backed|multi instrument|consumer/.test(text)) return 3;
  if (/specialist|niche|emerging|local|regional|independent/.test(text)) return 2;
  return 1;
}

function missionScaleScore(player) {
  const directScale = directCompanyScaleScore(player);
  const scaleBase = directScale || player.relevance;
  const scale = scaleBase * 0.55 + player.relevance * 0.35 + competitiveProximityScore(player) * 0.1;
  return Math.max(1, Math.min(5, Math.round(scale)));
}

function competitiveProximityScore(player) {
  const taxonomy = taxonomyProfile(player);
  const text = `${player.category} ${player.type} ${player.relationship} ${taxonomy.proximity} ${taxonomy.role}`.toLowerCase();
  if (/direct learning competitor|direct learning|core habit adjacent|learning app|practice ecosystem|song practice/.test(text)) return 5;
  if (["learning", "practice"].includes(player.category) || /creator led practice|brand backed learning/.test(text)) return 4;
  if (["hardware", "education", "creation"].includes(player.category) || /habit|education|instrument/.test(text)) return 3;
  if (["ai", "signals"].includes(player.category) || /market signal|funding|award|research/.test(text)) return 2;
  return 1;
}

function appfiguresReadinessScore(player) {
  if (!requiresCredentialedData(player)) return player.category === "signals" ? 1 : 2;
  const appSurface = /app|ranking|rank|revenue|download|review|subscription|pricing|traffic/i.test(
    `${player.type} ${player.model} ${player.sourceStatus} ${player.recent}`
  );
  const queueWeight = Math.max(player.relevance, player.momentum);
  return appSurface ? Math.max(3, queueWeight) : Math.max(2, Math.round(queueWeight * 0.8));
}

function bubbleSizeScore(player) {
  const mode = bubbleSizeModeById(state.bubbleSizeMode).id;
  if (mode === "mission") return missionScaleScore(player);
  if (mode === "business") return directCompanyScaleScore(player) || 1;
  if (mode === "revenue") return directRevenueScore(player) || 1;
  if (mode === "reach") return directReachScore(player) || 1;
  if (mode === "appfigures") return appfiguresReadinessScore(player);
  if (mode === "ai") return player.aiScore;
  if (mode === "momentum") return player.momentum;
  if (mode === "evidence") return Math.max(1, Math.round(qualityProfile(player).score / 20));
  return Math.min(5, Math.max(1, Math.round((strategicWeight(player) - (player.key ? 4 : 0)) / 8)));
}

function bubbleSizeSortWeight(player) {
  if (bubbleSizeModeById(state.bubbleSizeMode).id === "mission") return missionScaleScore(player) * 10 + strategicWeight(player) / 8;
  if (bubbleSizeModeById(state.bubbleSizeMode).id === "strategic") return strategicWeight(player);
  return bubbleSizeScore(player) * 10 + strategicWeight(player) / 10;
}

function mapRankScore(player, rankId = state.mapRankMode) {
  const mode = mapRankModeById(rankId).id;
  if (mode === "priority") return totalPriority(player) * 4 + Number(player.key) * 16;
  if (mode === "mission") return missionScaleScore(player) * 100 + totalPriority(player);
  if (mode === "strategic") return strategicWeight(player) * 4 + Number(player.key) * 12;
  if (mode === "business") {
    const directScale = directCompanyScaleScore(player);
    return directScale ? directScale * 220 + totalPriority(player) : mapDirectDataPriorityScore(player, "company");
  }
  if (mode === "revenue") {
    const directRevenue = directRevenueScore(player);
    return directRevenue ? directRevenue * 220 + totalPriority(player) : mapDirectDataPriorityScore(player, "revenue");
  }
  if (mode === "reach") {
    const directReach = directReachScore(player);
    return directReach ? directReach * 220 + totalPriority(player) : mapDirectDataPriorityScore(player, "reach");
  }
  if (mode === "appfigures") return appfiguresReadinessScore(player) * 100 + sourceUrgency(player);
  if (mode === "ai") return player.aiScore * 100 + totalPriority(player) / 2;
  if (mode === "momentum") return player.momentum * 100 + totalPriority(player) / 2;
  if (mode === "evidence") return qualityProfile(player).score * 4 + totalPriority(player) / 2;
  return totalPriority(player);
}

function mapDirectDataPriorityScore(player, kind) {
  const text = `${player.type} ${player.model} ${player.reach} ${player.sourceStatus} ${player.recent} ${player.tags?.join(" ") || ""}`.toLowerCase();
  const appDataNeed = requiresCredentialedData(player) ? 70 : 0;
  const revenueNeed = /revenue|pricing|paid|subscription|moneti|appfigures|download|rank|subscriber|commerce/.test(text) ? 58 : 0;
  const reachNeed = /traffic|audience|download|rank|community|global|subscriber|users|visits|appfigures|similarweb/.test(text) ? 50 : 0;
  const scaleNeed = /company|scale|public|global|major|large|funding|investor|ownership|revenue|traffic|download/.test(text) ? 44 : 0;
  const directNeed =
    kind === "revenue" ? revenueNeed + appDataNeed : kind === "reach" ? reachNeed + appDataNeed : scaleNeed + revenueNeed / 2 + reachNeed / 2;
  return directNeed + player.relevance * 11 + player.momentum * 7 + player.aiScore * 4 + Number(player.key) * 16 + sourceUrgency(player) / 3;
}

function mapRankSort(a, b) {
  const rankId = mapRankModeById(state.mapRankMode).id;
  return (
    mapRankScore(b, rankId) - mapRankScore(a, rankId) ||
    Number(b.key) - Number(a.key) ||
    totalPriority(b) - totalPriority(a) ||
    a.name.localeCompare(b.name)
  );
}

const visuallyConfusingPlayerPairs = [["fender-play", "fender"]];

function separateConfusingPlayerPairs(rows, minimumGap = 4) {
  const result = [...rows];
  visuallyConfusingPlayerPairs.forEach(([movingId, fixedId]) => {
    let movingIndex = result.findIndex((player) => player.id === movingId);
    let fixedIndex = result.findIndex((player) => player.id === fixedId);
    if (movingIndex < 0 || fixedIndex < 0) return;
    if (Math.abs(movingIndex - fixedIndex) >= minimumGap) return;
    const [moving] = result.splice(movingIndex, 1);
    fixedIndex = result.findIndex((player) => player.id === fixedId);
    let targetIndex = fixedIndex + minimumGap;
    if (targetIndex > result.length) targetIndex = Math.max(0, fixedIndex - minimumGap + 1);
    result.splice(Math.max(0, Math.min(result.length, targetIndex)), 0, moving);
  });
  return result;
}

function mapRankTieNote(rankId = state.mapRankMode) {
  const mode = mapRankModeById(rankId).id;
  if (["business", "revenue", "reach"].includes(mode)) return "Direct values first; pending values become a proof queue";
  if (mode === "evidence") return "Stronger source confidence first";
  if (mode === "appfigures") return "Data queue records first";
  return "Higher ranked records first";
}

function bubbleSizeRadius(player) {
  const score = Math.max(1, Math.min(5, bubbleSizeScore(player)));
  const radius = 7 + score * 3;
  return player.key ? Math.max(radius, 11) : radius;
}

function bubbleSizeBasis(player) {
  const mode = bubbleSizeModeById(state.bubbleSizeMode).id;
  if (mode === "mission") return `Yousician relevance ${missionScaleScore(player)} of 5. Missing direct scale falls back to strategic relevance`;
  if (mode === "business") return directCompanyScaleScore(player) ? `Verified scale ${directMetricDisplay(player, "company")}` : "Verified scale pending";
  if (mode === "revenue") return directRevenueScore(player) ? `Verified revenue ${directMetricDisplay(player, "revenue")}` : "Verified revenue pending";
  if (mode === "reach") return directReachScore(player) ? `Verified reach ${directMetricDisplay(player, "reach")}` : "Verified reach pending";
  if (mode === "appfigures") return requiresCredentialedData(player) ? "Prepared app data queue" : "No app data queue flag";
  if (mode === "ai") return `AI relevance ${player.aiScore} of 5`;
  if (mode === "momentum") return `Recent momentum ${player.momentum} of 5`;
  if (mode === "evidence") return `Source confidence ${qualityProfile(player).score}%`;
  return `Strategic influence ${bubbleSizeScore(player)} of 5`;
}

function strategicScoreFive(player) {
  return Math.max(1, Math.min(5, Math.round(strategicWeight(player) / 9)));
}

function ratingForPlayer(player, modeId = state.ratingMode) {
  const mode = ratingModeById(modeId);
  const quality = mode.id === "evidence" ? qualityProfile(player) : null;
  const valueByMode = {
    strategic: strategicScoreFive(player),
    relevance: player.relevance,
    company: directCompanyScaleScore(player),
    revenue: directRevenueScore(player),
    reach: directReachScore(player),
    evidence: quality ? Math.max(1, Math.round(quality.score / 20)) : 1,
    proximity: competitiveProximityScore(player),
    appdata: appfiguresReadinessScore(player),
    ai: player.aiScore,
    momentum: player.momentum
  };
  const directPending = ["company", "revenue", "reach"].includes(mode.id) && !valueByMode[mode.id];
  const value = directPending ? 0 : Math.max(1, Math.min(5, valueByMode[mode.id] || valueByMode.strategic));
  return {
    ...mode,
    value,
    display: mode.id === "evidence" ? `${quality.score}%` : directPending ? "Pending" : `${value}/5`,
    sortValue: mode.id === "evidence" ? quality.score : value * 20,
    detail:
      mode.id === "revenue"
        ? directPending
          ? "Direct revenue data pending"
          : `Direct revenue ${directMetricDisplay(player, "revenue")}`
        : mode.id === "company"
          ? directPending
            ? "Direct scale data pending"
            : `Direct scale ${directMetricDisplay(player, "company")}`
          : mode.id === "reach"
            ? directPending
              ? "Direct reach data pending"
              : `Direct reach ${directMetricDisplay(player, "reach")}`
          : mode.id === "appdata"
            ? "Data status"
            : mode.note
  };
}

function databaseSortScore(player, sortId = state.dbSort) {
  if (sortId === "priority") return totalPriority(player);
  if (sortId === "relevance") return player.relevance * 20;
  if (sortId === "ai") return player.aiScore * 20;
  if (sortId === "momentum") return player.momentum * 20;
  if (sortId === "company") return directCompanyScaleScore(player) * 20 + strategicWeight(player) / 10;
  if (sortId === "revenue") return directRevenueScore(player) * 20 + strategicWeight(player) / 10;
  if (sortId === "reach") return directReachScore(player) * 20 + player.relevance;
  if (sortId === "evidence") return qualityProfile(player).score;
  if (sortId === "proximity") return competitiveProximityScore(player) * 20 + player.relevance * 2;
  if (sortId === "appdata") return appfiguresReadinessScore(player) * 20 + sourceUrgency(player);
  if (sortId === "source") return sourceUrgency(player) * 20;
  return totalPriority(player);
}

function monitorSortModeById(id) {
  return monitorSortModes.find((mode) => mode.id === id) || monitorSortModes[0];
}

function monitorProofGapScore(player) {
  const quality = qualityProfile(player);
  const gapPenalty = hasCriticalEvidenceGap(player) ? 60 : 0;
  const urgency = sourceUrgency(player) * 12;
  return gapPenalty + urgency + (100 - quality.score);
}

function monitorSortScore(player, sortId = state.monitorSort) {
  const mode = monitorSortModeById(sortId).id;
  if (mode === "proof") return monitorProofGapScore(player);
  if (mode === "capital") return monitorFundingSignalScore(player) * 24 + totalPriority(player) / 2;
  return databaseSortScore(player, mode);
}

function monitorSortedPlayers(players, sortId = state.monitorSort) {
  const mode = monitorSortModeById(sortId).id;
  return [...players].sort((a, b) => monitorSortScore(b, mode) - monitorSortScore(a, mode) || a.name.localeCompare(b.name));
}

function priorityTier(player) {
  if (player.key && player.relevance >= 5) return "primary";
  if (player.key || player.relevance >= 4 || player.aiScore >= 4) return "focus";
  return "signal";
}

function relationshipTitle(type) {
  const labels = {
    competes: "Competitive pressure",
    partners: "Partnership surface",
    influences: "Market influence"
  };
  return labels[type] || "Relationship";
}

function relationshipColor(type) {
  const colors = {
    competes: "#f15b5b",
    partners: "#00b77e",
    influences: "#ffb84d"
  };
  return colors[type] || "#17191a";
}

function confidenceLabel(player) {
  return player.confidence || "Draft - needs verification";
}

function recipientConfidenceLabel(player) {
  return confidenceLabel(player).replace(/^Draft - needs verification$/i, "Needs source validation");
}

function verifiedLabel(player) {
  return player.lastVerified || "Not verified";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function humanizeStatus(value) {
  return String(value).replace(/_/g, " ");
}

function taxonomyProfile(player) {
  const category = categoryById(player.category);
  const text = `${player.name} ${player.relationship} ${player.type} ${player.subcategory} ${player.tags.join(" ")}`.toLowerCase();
  const base = {
    layer: category?.layer || "Strategic ecosystem",
    group: category?.name || "Unclassified",
    reason: category?.description || "Needs classification review."
  };

  if (player.category === "learning") {
    return {
      ...base,
      role: /brand-backed/.test(text) ? "Brand-backed learning competitor" : /ai-native/.test(text) ? "AI-native learning challenger" : "Direct learning competitor",
      journey: "Learn an instrument",
      proximity: "Core overlap",
      decisionUse: "Compare onboarding, curriculum, pricing, feedback, catalog depth, and subscription mechanics."
    };
  }

  if (player.category === "practice") {
    const creator = /creator|youtube|teacher|cultural/.test(text);
    return {
      ...base,
      role: creator ? "Creator-led practice influence" : "Song and practice habit owner",
      journey: "Choose songs and keep practicing",
      proximity: "Core habit adjacency",
      decisionUse: creator
        ? "Track trust, inspiration, free-content funnels, song choice, and partnership routes."
        : "Track tab/song discovery, repeat practice utility, repertoire ownership, and habit competition."
    };
  }

  if (player.category === "hardware") {
    const retailer = /retail|channel/.test(text);
    return {
      ...base,
      role: retailer ? "Gear purchase channel" : "Hardware ecosystem owner",
      journey: "Buy gear and start playing",
      proximity: "Acquisition adjacency",
      decisionUse: retailer
        ? "Evaluate beginner bundles, referral surfaces, retail content, and channel partnerships."
        : "Evaluate brand trust, instrument bundles, connected hardware, and learning-app distribution."
    };
  }

  if (player.category === "creation") {
    return {
      ...base,
      role: /marketplace|samples/.test(text) ? "Creator workflow marketplace" : /notation|repertoire/.test(text) ? "Repertoire and notation ecosystem" : "Creation pathway owner",
      journey: "Make, arrange, produce, and share music",
      proximity: "Hobby expansion",
      decisionUse: "Watch how learners graduate into creation, where they pay, and which workflows shape musical identity."
    };
  }

  if (player.category === "ai") {
    const practiceUtility = /practice|audio|stem/.test(text);
    return {
      ...base,
      role: practiceUtility ? "AI practice enhancer" : "AI creation disruptor",
      journey: practiceUtility ? "Improve practice with AI audio" : "Bypass or reshape traditional music-making",
      proximity: "High disruption",
      decisionUse: practiceUtility
        ? "Assess complementarity with practice, feedback, accompaniment, and musician utility."
        : "Monitor adoption, licensing, rights risk, and whether AI expands or substitutes music learning."
    };
  }

  if (player.category === "education") {
    const formal = /berklee|teacher|mtna|formal|institution|network/.test(text);
    return {
      ...base,
      role: formal ? "Pedagogy and trust benchmark" : "Learning mechanics benchmark",
      journey: formal ? "Validate learning credibility" : "Build durable learning habits",
      proximity: "Benchmark layer",
      decisionUse: formal
        ? "Use for curriculum credibility, teacher sentiment, certifications, and institutional channels."
        : "Use for retention mechanics, habit loops, AI tutoring, and pricing/engagement references."
    };
  }

  if (player.category === "platforms") {
    return {
      ...base,
      role: /spotify|streaming|audio/.test(text)
        ? "Music discovery and attention platform"
        : /roblox|epic|nintendo|games/.test(text)
          ? "Interactive entertainment and identity platform"
          : /disney|netflix|family|streaming/.test(text)
            ? "Family entertainment and IP platform"
            : "Broader entertainment and education platform",
      journey: "Shape discovery, motivation, identity or strategic options around learning",
      proximity: "Strategic adjacency",
      decisionUse: "Triage music strategy, education strategy, acquisition history, audience fit and whether this platform could matter as a partner, acquirer, or attention competitor."
    };
  }

  if (player.category === "signals") {
    const role = /capital|investor|vc/.test(text)
      ? "Capital signal"
      : /news|media/.test(text)
        ? "News monitoring source"
        : /award|recognition/.test(text)
          ? "Recognition opportunity"
          : "Funding and partnership opportunity";
    return {
      ...base,
      role,
      journey: "Monitor strategic environment",
      proximity: "External signal",
      decisionUse: "Use as an input to monitoring, opportunity scans, and strategic timing rather than as a direct competitor."
    };
  }

  return {
    ...base,
    role: "Ecosystem signal",
    journey: "Monitor",
    proximity: "To classify",
    decisionUse: "Needs taxonomy review."
  };
}

function strategicRole(player) {
  return taxonomyProfile(player).role;
}

function researchOwner(player) {
  if (player.category === "ai") return "AI strategy";
  if (player.category === "learning") return "Competitive intel";
  if (player.category === "practice") return "Practice & content";
  if (player.category === "hardware") return "Partnerships";
  if (player.category === "education") return "Learning strategy";
  if (player.category === "platforms") return "Strategy / corporate development";
  if (player.category === "signals") return "Strategy / monitoring";
  if (player.category === "creation") return "Creator ecosystem";
  return "Strategy research";
}

function entityKindFor(player) {
  const text = `${player.type} ${player.subcategory} ${player.tags.join(" ")}`;
  if (player.category === "signals") {
    if (/research|data|analytics|monitoring|news|media|award|funding|report/i.test(text)) return "Monitoring signal";
    return "Strategic signal";
  }
  if (/platform|app|software|tool|service|ecosystem|daw|studio|ai music|audio platform/i.test(text)) return "Company / product";
  if (/creator-led|teacher-led|individual|influencer|youtuber|artist educator|cultural practice/i.test(text)) return "Individual / creator";
  if (/association|nonprofit|institution|exam|school|teacher network|programme|program/i.test(text)) return "Institution";
  if (/retail|marketplace|hardware|instrument maker|guitar manufacturer|music store/i.test(text)) return "Channel / hardware";
  if (/publisher|media|press|newsletter|report/i.test(text)) return "Media / data";
  return "Company / product";
}

function isSignalOnlyRecord(player) {
  return player.category === "signals" && !player.key && !/partners|competes/i.test(player.relationship);
}

function requiresCredentialedData(player) {
  return /appfigures|similarweb|crunchbase|account\/api|data access|report access|credential|traffic|app performance|rank|revenue|download|artist-count|subscriber|usage data|sales data/i.test(
    `${player.sourceStatus} ${player.recent}`
  );
}

function credentialedAppfiguresCount() {
  const rows = Array.isArray(backendState?.appfiguresRows) ? backendState.appfiguresRows : [];
  return rows.filter((row) => {
    const sourceText = [
      row.source_type,
      row.source,
      row.data_source,
      row.evidence_type,
      row.confidence,
      row.status,
      row.notes
    ]
      .filter(Boolean)
      .join(" ");
    const saysCredentialed = /credentialed appfigures|appfigures credentialed|credentialed export|appfigures export/i.test(sourceText);
    const saysProxyOrPending = /public proxy|proxy|pending|request|queue|not appfigures|needs appfigures/i.test(sourceText);
    return saysCredentialed && !saysProxyOrPending;
  }).length;
}

function nextAction(player) {
  const needs = sourceNeeds(player);
  if (needs.includes("Appfigures metrics")) return "Import app metrics if ranking is needed";
  if (needs.includes("Crunchbase")) return "Verify ownership / funding";
  if (needs.includes("Similarweb")) return "Check web traffic";
  if (needs.includes("Audience source")) return "Validate audience reach";
  if (needs.includes("Legal/news")) return "Monitor legal and news signal";
  if (needs.includes("Award source")) return "Check award relevance";
  if (needs.includes("Programme source")) return "Review eligibility window";
  if (needs.includes("Company source")) return "Verify company claims";
  return "Quarterly source refresh";
}

function sourceNeeds(player) {
  const coverage = evidenceCoverage(player);
  const text = `${player.sourceStatus} ${player.recent} ${player.type} ${player.ownership}`.toLowerCase();
  const needs = [];
  const publicProfileCovered = coverage.count >= 3 && coverage.publicCount >= 2 && coverage.highCount >= 1;
  const publicSourceCovered = coverage.count >= 2 && coverage.publicCount >= 1;
  if (/appfigures|download|rank|revenue|review velocity|country mix|app performance/.test(text)) {
    needs.push("Appfigures metrics");
  }
  if (/traffic|web visits|similarweb/.test(text)) needs.push("Similarweb");
  if (/to verify/i.test(player.ownership || "")) needs.push("Crunchbase");
  if (/funding|investor|capital|ownership/.test(text) && !publicProfileCovered) needs.push("Crunchbase");
  if (/youtube|creator|media/.test(text) && coverage.count < 2) needs.push("Audience source");
  if (/legal|litigation|rights|copyright/.test(text)) needs.push("Legal/news");
  if (/award|bett/.test(text)) needs.push("Award source");
  if (/eligibility|programme|funding source|grant/.test(text)) needs.push("Programme source");
  if (!publicSourceCovered && /company|product|source|verify|official|site/.test(text)) needs.push("Company source");
  return [...new Set(needs)].slice(0, 4);
}

function relationForPlayer(player) {
  return relations.find((relation) => relation.to === player.id);
}

function internalValidationOwner(relation, player) {
  if (relation?.type === "partners" || /partner|channel|hardware|retail/i.test(player.relationship + " " + player.type)) {
    return "Partnerships / BizDev";
  }
  if (relation?.type === "competes" || /competitor|overlap|benchmark/i.test(player.relationship)) {
    return "Competitive intel / Product";
  }
  if (player.category === "signals") return "Strategy / monitoring";
  if (player.category === "ai") return "AI strategy";
  return researchOwner(player);
}

function nonEmptyString(value) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function liveMetricFor(player) {
  return liveOverrideContext.metricsByPlayer?.[player.id] || null;
}

function metricText(value) {
  if (value == null) return "";
  if (typeof value === "object") return Object.values(value).map(metricText).join(" ");
  return String(value);
}

function isProxyMetricText(value) {
  return /public\s+proxy|proxy\s+only|not\s+appfigures|pending\s+appfigures|credentialed\s+export\s+not\s+available|estimate|estimated/i.test(
    metricText(value)
  );
}

function isDirectMetricSource(row) {
  if (!row || isProxyMetricText(row)) return false;
  const text = metricText([
    row.source,
    row.data_source,
    row.source_type,
    row.evidence_type,
    row.confidence,
    row.status,
    row.appfigures_status
  ]);
  return /credentialed\s+appfigures|appfigures\s+export|appfigures\s+api|authorized\s+export|official\s+filing|internal\s+export|internal\s+metric|similarweb\s+export|crunchbase\s+export|pitchbook\s+export|verified\s+direct|official\s+app\s+store\s+public\s+lookup|public\s+app\s+store\s+lookup|app\s+store\s+public\s+lookup|google\s+play\s+public\s+lookup/i.test(
    text
  );
}

function parseMetricNumber(value) {
  if (value == null || value === "" || isProxyMetricText(value)) return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const raw = String(value).trim();
  if (!raw) return null;
  const match = raw.replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  if (!match) return null;
  let numeric = Number(match[0]);
  if (!Number.isFinite(numeric)) return null;
  if (/bn|billion|\bb\b/i.test(raw)) numeric *= 1_000_000_000;
  else if (/mio|million|\bm\b/i.test(raw)) numeric *= 1_000_000;
  else if (/k\b|thousand/i.test(raw)) numeric *= 1_000;
  return numeric;
}

function comparableMetricName(value) {
  return normalizeSourceKey(value).replace(/^(the_|app_|com_)/g, "");
}

function backendMetricRowsForPlayer(player) {
  const playerName = comparableMetricName(player.name);
  const playerId = comparableMetricName(player.id);
  return (backendState.appfiguresRows || []).filter((row) => {
    const rowPlayer = comparableMetricName(row.player || row.player_name || row.company || "");
    const rowApp = comparableMetricName(row.app_name || row.name || row.product || "");
    return (
      rowPlayer === playerName ||
      rowPlayer === playerId ||
      rowApp === playerName ||
      rowApp === playerId ||
      (playerName && rowApp.includes(playerName)) ||
      (rowPlayer && playerName.includes(rowPlayer))
    );
  });
}

function firstMetricValue(row, fields) {
  for (const field of fields) {
    if (row[field] != null && row[field] !== "") return row[field];
  }
  return "";
}

function bestMetricNumber(rows, fields, options = {}) {
  const values = rows
    .map((row) => parseMetricNumber(firstMetricValue(row, fields)))
    .filter((value) => value != null && Number.isFinite(value));
  if (!values.length) return null;
  return options.lowerIsBetter ? Math.min(...values.filter((value) => value > 0)) : Math.max(...values);
}

function scoreFromThresholds(value, thresholds) {
  if (value == null || !Number.isFinite(value)) return 0;
  for (const [score, threshold] of thresholds) {
    if (value >= threshold) return score;
  }
  return value > 0 ? 1 : 0;
}

function compactMetricNumber(value, options = {}) {
  if (value == null || !Number.isFinite(value)) return "Pending";
  const prefix = options.currency ? "$" : "";
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) return `${prefix}${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (abs >= 1_000_000) return `${prefix}${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (abs >= 1_000) return `${prefix}${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return `${prefix}${Math.round(value)}`;
}

function directMetricFor(player) {
  const directRows = [];
  const publicMetric = publicEnrichmentMetricFor(player);
  if (isDirectMetricSource(publicMetric)) directRows.push(publicMetric);
  const override = liveMetricFor(player);
  if (isDirectMetricSource(override)) directRows.push(override);
  backendMetricRowsForPlayer(player).filter(isDirectMetricSource).forEach((row) => directRows.push(row));
  if (!directRows.length) return null;

  const revenue = bestMetricNumber(directRows, ["revenue", "revenue_365d", "revenue_90d", "revenue_30d"]);
  const downloads = bestMetricNumber(directRows, ["downloads", "downloads_365d", "downloads_90d", "downloads_30d"]);
  const websiteVisits = bestMetricNumber(directRows, ["websiteVisits", "website_visits", "websiteVisits_30d", "visits", "traffic"]);
  const reviewCount = bestMetricNumber(directRows, ["reviewCount", "review_count", "ratings", "reviews"]);
  const reviewVelocity = bestMetricNumber(directRows, ["reviewVelocity", "review_velocity_90d", "reviews_90d"]);
  const categoryRank = bestMetricNumber(directRows, ["categoryRank", "rank_current", "rank_30d_avg"], { lowerIsBetter: true });
  const rating = bestMetricNumber(directRows, ["rating", "average_rating"]);
  if ([revenue, downloads, websiteVisits, reviewCount, reviewVelocity, categoryRank, rating].every((value) => value == null)) {
    return null;
  }
  return {
    rows: directRows,
    revenue,
    downloads,
    websiteVisits,
    reviewCount,
    reviewVelocity,
    categoryRank,
    rating,
    source: firstMetricValue(directRows[0], ["source", "data_source", "appfigures_status"]) || "Direct imported metric",
    lastUpdated: firstMetricValue(directRows[0], ["lastUpdated", "last_updated", "source_date", "date"])
  };
}

function directRevenueScore(player) {
  const metric = directMetricFor(player);
  return scoreFromThresholds(metric?.revenue, [
    [5, 50_000_000],
    [4, 10_000_000],
    [3, 1_000_000],
    [2, 100_000]
  ]);
}

function directReachScore(player) {
  const metric = directMetricFor(player);
  const reachValue = Math.max(metric?.downloads || 0, metric?.websiteVisits || 0, metric?.reviewCount || 0);
  return scoreFromThresholds(reachValue || null, [
    [5, 50_000_000],
    [4, 10_000_000],
    [3, 1_000_000],
    [2, 100_000]
  ]);
}

function directCompanyScaleScore(player) {
  return Math.max(directRevenueScore(player), directReachScore(player));
}

function directMetricDisplay(player, mode) {
  const metric = directMetricFor(player);
  if (!metric) return "Pending";
  if (mode === "revenue") return compactMetricNumber(metric.revenue, { currency: true });
  if (mode === "reach") {
    const value = Math.max(metric.downloads || 0, metric.websiteVisits || 0, metric.reviewCount || 0);
    if (!value) return "Pending";
    const label = metric.reviewCount === value ? "ratings" : metric.websiteVisits === value ? "visits" : "downloads";
    return `${compactMetricNumber(value)} ${label}`;
  }
  if (mode === "company") {
    const value = Math.max(metric.revenue || 0, metric.downloads || 0, metric.websiteVisits || 0, metric.reviewCount || 0);
    if (!value) return "Pending";
    if (metric.revenue && metric.revenue >= value) return compactMetricNumber(value, { currency: true });
    if (metric.reviewCount === value) return `${compactMetricNumber(value)} ratings`;
    if (metric.websiteVisits === value) return `${compactMetricNumber(value)} visits`;
    return `${compactMetricNumber(value)} downloads`;
  }
  return "Pending";
}

function relationshipOverrideFor(player) {
  return liveOverrideContext.relationshipOverrides?.[player.id] || null;
}

function liveMetricClaimFor(player) {
  const metric = directMetricFor(player);
  if (!metric) return null;
  if (metricIsPublicAppStoreOnly(metric)) {
    return {
      label: "Public App Store signal",
      text: publicAppStoreMetricLabel(player),
      basis: `${metric.source || "Official App Store public lookup"}${metric.lastUpdated ? ` / ${metric.lastUpdated}` : ""}`
    };
  }
  const parts = [
    metric.downloads != null ? `Downloads: ${metric.downloads}` : "",
    metric.revenue != null ? `Revenue: ${metric.revenue}` : "",
    metric.categoryRank != null ? `Rank: ${metric.categoryRank}` : "",
    metric.reviewVelocity != null ? `Review velocity: ${metric.reviewVelocity}` : "",
    metric.websiteVisits != null ? `Web visits: ${metric.websiteVisits}` : "",
    metric.reviewCount != null ? `Ratings: ${metric.reviewCount}` : "",
    metric.rating != null ? `Average rating: ${Number(metric.rating).toFixed(1)}/5` : ""
  ].filter(Boolean);
  if (!parts.length) return null;
  const source = nonEmptyString(metric.source) || "Direct imported metric";
  const updated = nonEmptyString(metric.lastUpdated) || "";
  return {
    label: "Direct metric",
    text: parts.join("; "),
    basis: `${source}${updated ? ` / ${updated}` : ""}`
  };
}

function internalValidationFor(player) {
  const relation = relationForPlayer(player);
  const isStrategicRelation = Boolean(relation);
  const partnerLike = relation?.type === "partners" || /partner|channel|hardware|retail/i.test(`${player.relationship} ${player.type}`);
  const competitorLike = relation?.type === "competes" || /competitor|overlap/i.test(player.relationship);
  const owner = internalValidationOwner(relation, player);
  const status = isStrategicRelation
    ? "Needs Yousician owner confirmation"
    : "Internal relationship review not prioritized in this visible set";
  const knownRelationship = isStrategicRelation
    ? "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
    : "Not prioritized for internal relationship review in the current visible set.";
  const nextStep = partnerLike
    ? "Confirm owner, contact history, intro path, sensitivity, and whether this belongs in a partner pipeline."
    : competitorLike
      ? "Confirm whether Product, Brand, or Growth already tracks this player and add owner notes."
      : isStrategicRelation
        ? "Confirm internal owner, prior touchpoints, monitoring cadence, and next decision use."
        : "Keep as external market intelligence unless Yousician flags an internal owner.";
  const baseValidation = {
    owner,
    status,
    knownRelationship,
    nextStep,
    sensitivity: "Not classified in this artifact",
    lastContactDate: "",
    source: "Generated validation queue",
    type: relation?.type || "monitor",
    strength: relation?.strength || 0,
    overrideApplied: false
  };
  const override = relationshipOverrideFor(player);
  if (!override) return baseValidation;
  return {
    ...baseValidation,
    owner: nonEmptyString(override.owner) || baseValidation.owner,
    status: nonEmptyString(override.status) || baseValidation.status,
    knownRelationship: nonEmptyString(override.knownRelationship) || baseValidation.knownRelationship,
    nextStep: nonEmptyString(override.nextStep) || baseValidation.nextStep,
    sensitivity: nonEmptyString(override.sensitivity) || baseValidation.sensitivity,
    lastContactDate: nonEmptyString(override.lastContactDate) || baseValidation.lastContactDate,
    source: nonEmptyString(override.source) || "data/live-overrides.json",
    overrideApplied: true
  };
}

function liveDataFeedsForPlayer(player) {
  const needs = sourceNeeds(player);
  const feeds = [];
  if (needs.includes("Appfigures metrics")) feeds.push("Appfigures");
  if (needs.includes("Similarweb")) feeds.push("Similarweb");
  if (needs.includes("Crunchbase")) feeds.push("Crunchbase");
  if (needs.includes("Audience source")) feeds.push("YouTube / audience analytics");
  if (needs.includes("Legal/news")) feeds.push("News / legal monitoring");
  if (needs.includes("Company source")) feeds.push("Company website / press");
  if (!feeds.length) feeds.push("Quarterly source refresh");
  return feeds.slice(0, 3);
}

function internalGapAreaById(id) {
  return internalGapAreas.find((area) => area.id === id);
}

function internalGapAreasForPlayer(player) {
  const areaIds = new Set(["strategic-weighting"]);
  if (requiresCredentialedData(player) || ["learning", "practice", "education"].includes(player.category)) {
    areaIds.add("monetization-retention");
  }
  if (["practice", "creation", "ai", "platforms"].includes(player.category) || /rights|catalog|song|chord|tab|artist|ip/i.test(`${player.subcategory} ${player.tags.join(" ")}`)) {
    areaIds.add("rights-catalog");
  }
  if (relationForPlayer(player) || player.key || ["hardware", "platforms"].includes(player.category)) {
    areaIds.add("relationship-reality");
  }
  if (["learning", "practice", "education"].includes(player.category) || /competitor|benchmark|overlap/i.test(`${player.relationship} ${player.tags.join(" ")}`)) {
    areaIds.add("competition-user-truth");
  }
  if (player.category === "ai" || player.aiScore >= 4 || /ai|personalization|generation|audio|stem/i.test(`${player.ai} ${player.type}`)) {
    areaIds.add("ai-compliance");
  }
  return [...areaIds].map(internalGapAreaById).filter(Boolean);
}

function fallbackInternalGapProfile(player) {
  const taxonomy = taxonomyProfile(player);
  const categoryProfiles = {
    learning: {
      headline: "Validate learning funnel fit",
      owner: "Product / Growth / Research",
      questions: [
        "What Yousician conversion, retention, ARPPU and churn baseline should this be compared against?",
        "Which FTUX, practice and switching findings explain whether this is a real competitor?",
        "Which pricing and song catalog inputs change the priority?"
      ],
      unsafe: ["Do not rank learning competitors by performance without internal funnel and Appfigures data."],
      nextStep: "Attach current product, growth and research evidence."
    },
    practice: {
      headline: "Validate practice habit fit",
      owner: "Product / Research / Content",
      questions: [
        "Does this own song choice, repeat practice, repertoire or only a lightweight utility moment?",
        "Which Yousician song-choice and practice habit findings should be compared?",
        "Which catalog, rights or content constraints change the strategic read?"
      ],
      unsafe: ["Do not infer substitution without song-choice, usage or retention evidence."],
      nextStep: "Attach practice research and content rights notes."
    },
    hardware: {
      headline: "Validate channel and bundle readiness",
      owner: "BizDev / Partnerships / Product",
      questions: [
        "Is there a known contact, warm intro, bundle history or channel owner?",
        "Which beginner purchase or activation data would prove relevance?",
        "What sensitivity or commercial restriction applies before outreach?"
      ],
      unsafe: ["Do not imply partner readiness from brand fit alone."],
      nextStep: "Complete relationship and bundle economics fields."
    },
    creation: {
      headline: "Validate creator pathway relevance",
      owner: "Product / Research / AI Strategy",
      questions: [
        "Do Yousician users move into this creator workflow after learning?",
        "Which community, identity or AI provenance issues affect the opportunity?",
        "Could this expand retention or sit outside the core mission?"
      ],
      unsafe: ["Do not call creator tools a direct threat without journey evidence."],
      nextStep: "Add learner to creator research and AI safety review."
    },
    ai: {
      headline: "Validate AI risk and provenance",
      owner: "AI Strategy / Legal / Product",
      questions: [
        "What training data, rights and provenance questions must be answered?",
        "Does this complement practice, substitute learning or only signal market noise?",
        "Which Yousician data and product boundaries apply?"
      ],
      unsafe: ["Do not frame AI tools as safe integrations or threats without provenance review."],
      nextStep: "Run AI rights and product safety checklist."
    },
    education: {
      headline: "Validate learning mechanics relevance",
      owner: "Product / Research / Data Analytics",
      questions: [
        "Which habit, classroom, teacher or learner mechanics are transferable to instrument learning?",
        "Which Yousician retention, activation and completion metrics are the right benchmark?",
        "Is this a partner channel, product inspiration or watchlist record?"
      ],
      unsafe: ["Do not translate general education scale into music-learning priority without user proof."],
      nextStep: "Attach retention, teacher and learning mechanics evidence."
    },
    platforms: {
      headline: "Validate strategic adjacency",
      owner: "Strategy / BizDev / Leadership",
      questions: [
        "What concrete music or education use case makes this platform relevant to Yousician?",
        "Is there a relationship owner, acquisition precedent, partnership path or rights constraint?",
        "Should this remain watchlist context or enter the active priority set?"
      ],
      unsafe: ["Do not infer partner, acquirer or audience value from platform scale alone."],
      nextStep: "Classify the role in a leadership triage session."
    },
    signals: {
      headline: "Validate monitoring use only",
      owner: "Strategy / Research Ops",
      questions: [
        "What decision would this signal change?",
        "Which owner monitors it and at what cadence?",
        "Does it belong in the database or only in the evidence appendix?"
      ],
      unsafe: ["Do not promote monitoring signals to strategic actors without a decision use."],
      nextStep: "Keep as monitoring context unless a decision owner flags it."
    }
  };
  return (
    categoryProfiles[player.category] || {
      headline: "Validate strategic relevance",
      owner: researchOwner(player),
      questions: [
        `What decision does this ${taxonomy.role.toLowerCase()} help Yousician make?`,
        "Which internal data source would confirm importance?",
        "Who owns the next validation step?"
      ],
      unsafe: ["Do not use as a priority claim without internal owner confirmation."],
      nextStep: "Assign an owner or keep as context."
    }
  );
}

function internalGapProfileFor(player) {
  const fallback = fallbackInternalGapProfile(player);
  const specific = playerInternalGapNotes[player.id] || {};
  const areas = internalGapAreasForPlayer(player);
  const specificQuestions = specific.questions || [];
  const questionPool = specificQuestions.length >= 3 ? specificQuestions : [...specificQuestions, ...fallback.questions];
  const questions = [...new Set(questionPool)].slice(0, 5);
  const unsafe = [...new Set([...(specific.unsafe || []), ...fallback.unsafe])].slice(0, 3);
  const criticalAreas = areas.filter((area) => area.priority === "Critical").length;
  return {
    headline: specific.headline || fallback.headline,
    owner: specific.owner || fallback.owner,
    questions,
    unsafe,
    nextStep: specific.nextStep || fallback.nextStep,
    areas,
    priority: criticalAreas || player.key ? "High" : areas.some((area) => area.priority === "High") ? "Medium" : "Low"
  };
}

function internalGateSummaryFor(player) {
  const profile = internalGapProfileFor(player);
  const criticalAreas = profile.areas.filter((area) => area.priority === "Critical").length;
  const label = criticalAreas ? "Internal gate open" : profile.priority === "High" ? "Internal check needed" : "Light validation";
  return {
    label,
    value: `${profile.areas.length} data gate${profile.areas.length === 1 ? "" : "s"}`,
    detail: `${profile.owner}${criticalAreas ? ` / ${criticalAreas} critical` : ""}`,
    profile
  };
}

function internalGapPriorityWeight(priority) {
  if (priority === "Critical") return 3;
  if (priority === "High") return 2;
  return 1;
}

function internalRequestRows() {
  return internalDataRequestPack.flatMap((group) =>
    group.asks.map((ask) => [
      group.owner,
      ask,
      internalGapAreas.find((area) => ask.toLowerCase().includes(area.owner.split(" / ")[0].toLowerCase()))?.priority || "High",
      "Internal Yousician input"
    ])
  );
}

function validationQueue() {
  return relations
    .map((relation) => {
      const player = players.find((item) => item.id === relation.to);
      return player ? { relation, player, validation: internalValidationFor(player) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.relation.strength + b.player.relevance - (a.relation.strength + a.player.relevance));
}

function defaultResearchStudy() {
  return (
    researchContext.studies.find((study) => /market/i.test(study.scope)) ||
    researchContext.studies[0] || {
      title: "User Research Database",
      scope: "Confluence",
      url: researchContext.status.databaseUrl
    }
  );
}

function researchAnchorFor(player) {
  const anchor = researchContext.playerAnchors[player.id] || researchContext.categoryAnchors[player.category];
  if (anchor) return anchor;
  const study = defaultResearchStudy();
  const principle = researchContext.marketPrinciples[0] || "Treat this as a strategic hypothesis until the Confluence research database is checked.";
  return {
    headline: "Market context to verify",
    summary: principle,
    studyTitle: study.title,
    url: study.url,
    confidence: "Generic context, needs player-specific verification"
  };
}

function researchAnchorSection(player, context = "profile") {
  const anchor = researchAnchorFor(player);
  const title = context === "one-pager" ? "User research anchor" : "Research anchor";
  return `
    <section class="${context === "one-pager" ? "one-pager-card research-anchor-card" : "profile-section research-anchor"}">
      <span>${title}</span>
      <h3>${escapeHtml(anchor.headline)}</h3>
      <p>${escapeHtml(anchor.summary)}</p>
      <a href="${escapeHtml(anchor.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(anchor.studyTitle)}</a>
      <small>${escapeHtml(anchor.confidence)}</small>
    </section>
  `;
}

function slugClass(value) {
  return String(value || "unknown")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "unknown";
}

function sourceLibrary() {
  return Array.isArray(evidenceContext.sourceLibrary) ? evidenceContext.sourceLibrary : [];
}

const sourceTokenStopwords = new Set([
  "www",
  "com",
  "org",
  "net",
  "io",
  "app",
  "apps",
  "apple",
  "google",
  "play",
  "store",
  "official",
  "site",
  "home",
  "about",
  "support",
  "news",
  "launch",
  "dev",
  "details",
  "the",
  "for",
  "en",
  "us",
  "id",
  "api",
  "source",
  "sources"
]);

function normalizeSourceKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function sourceTokens(value) {
  return normalizeSourceKey(value)
    .split("_")
    .filter((token) => token.length > 2 && !sourceTokenStopwords.has(token) && !/^\d+$/.test(token));
}

function sourceCanonicalId(source) {
  return source?.id || source?.source_id || "";
}

function sourceMatchScore(source, referenceId) {
  const referenceKey = normalizeSourceKey(referenceId);
  const directKeys = [source.id, source.source_id].map(normalizeSourceKey).filter(Boolean);
  if (directKeys.includes(referenceKey)) return 10;

  const referenceTokens = sourceTokens(referenceId);
  if (!referenceTokens.length) return 0;

  const sourceText = [source.id, source.source_id, source.title, source.url].filter(Boolean).join(" ");
  const sourceTokenSet = new Set(sourceTokens(sourceText));
  const overlap = referenceTokens.filter((token) => sourceTokenSet.has(token));
  if (!overlap.length) return 0;

  let score = overlap.length / referenceTokens.length;
  if (directKeys.some((key) => referenceKey.length >= 6 && key.includes(referenceKey))) score += 1;
  if (referenceTokens.length === 1 && overlap.length === 1) score += 0.25;
  return score;
}

function sourceById(id) {
  const sources = sourceLibrary();
  const exact = sources.find((source) => source.id === id || source.source_id === id);
  if (exact) return exact;
  const referenceTokens = sourceTokens(id);
  if (!referenceTokens.length) return null;

  let best = null;
  let bestScore = 0;
  sources.forEach((source) => {
    const score = sourceMatchScore(source, id);
    if (score > bestScore) {
      best = source;
      bestScore = score;
    }
  });
  const threshold = referenceTokens.length === 1 ? 1.2 : 0.7;
  return bestScore >= threshold ? best : null;
}

function evidenceRecordFor(player) {
  return (
    evidenceContext.evidenceByPlayer?.[player.id] || {
      summary: "No structured evidence record loaded yet. Keep this player in the research backlog.",
      sourceIds: [],
      openQuestions: ["Add official company or product source"]
    }
  );
}

function publicEnrichmentFor(player) {
  return publicEnrichmentContext.playerEnrichment?.[player.id] || null;
}

function publicEnrichmentSourcesFor(player) {
  const entry = publicEnrichmentFor(player);
  if (!entry?.sources?.length) return [];
  return entry.sources.map((source, index) => ({
    ...source,
    id: source.id || source.source_id || `public_enrichment_${player.id}_${index}`,
    source_id: source.source_id || source.id || `public_enrichment_${player.id}_${index}`,
    accessStatus: sourceAccessStatus(source),
    lastUrlCheck: source.lastUrlCheck || source.last_url_check || entry.lastUpdated,
    qualityNote: source.qualityNote || source.quality_note || "Public enrichment source."
  }));
}

function publicEnrichmentMetricFor(player) {
  const metric = publicEnrichmentFor(player)?.publicMetric;
  if (!metric) return null;
  return {
    ...metric,
    source: metric.source || "Official App Store public lookup, verified direct",
    data_source: metric.source || "Official App Store public lookup, verified direct",
    lastUpdated: metric.lastUpdated || publicEnrichmentFor(player)?.lastUpdated,
    notes:
      metric.notes ||
      "Public App Store rating count and rating only. Not downloads, revenue, active users, rank trend, conversion, or retention."
  };
}

function publicAppStoreMetricFor(player) {
  const metric = publicEnrichmentFor(player)?.publicMetric;
  if (!metric) return null;
  const sourceText = metricText([metric.source, metric.data_source, metric.notes]);
  if (!/app\s*store|apple/i.test(sourceText)) return null;
  return metric;
}

function metricIsPublicAppStoreOnly(metric) {
  if (!metric) return false;
  const sourceText = metricText([metric.source, metric.data_source, metric.notes]);
  return /app\s*store|apple/i.test(sourceText) && metric.revenue == null && metric.downloads == null && metric.websiteVisits == null;
}

function publicAppStoreMetricLabel(player) {
  const metric = publicAppStoreMetricFor(player);
  if (!metric) return "No public App Store rating loaded";
  const parts = [];
  if (metric.rating != null) parts.push(`${Number(metric.rating).toFixed(1)}/5`);
  if (metric.reviewCount != null) parts.push(`${compactMetricNumber(Number(metric.reviewCount))} ratings`);
  return parts.length ? parts.join(" on ") : "Public App Store listing loaded";
}

function isCredentialedQuestion(question) {
  return /appfigures|download|revenue|rank|ranking|conversion|retention|active usage|paid|traffic|similarweb|app performance|review velocity|country mix|web\/app split|usage data|sales data|creator retention/i.test(
    question || ""
  );
}

function isInternalQuestion(question) {
  return /yousician|internal|relationship|owner|contact|prior|pipeline|sensitivity|partner history|bizdev/i.test(
    question || ""
  );
}

function isCapitalValidationQuestion(question) {
  return /ownership|investor|funding|crunchbase|pitchbook|dealroom|company ownership/i.test(question || "");
}

function publicOpenQuestionsFor(record) {
  return (record.openQuestions || []).filter(
    (question) =>
      !isCredentialedQuestion(question) &&
      !isInternalQuestion(question) &&
      !isCapitalValidationQuestion(question)
  );
}

function gatedOpenQuestionsFor(record) {
  return (record.openQuestions || []).filter(
    (question) => isCredentialedQuestion(question) || isInternalQuestion(question) || isCapitalValidationQuestion(question)
  );
}

function evidenceSourcesFor(player) {
  const record = evidenceRecordFor(player);
  const seen = new Set();
  const linkedSources = (record.sourceIds || []).map(sourceById);
  return [...linkedSources, ...publicEnrichmentSourcesFor(player)]
    .filter((source) => {
      if (!source) return false;
      const key = sourceCanonicalId(source);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

const logoDomainExclusions = new Set([
  "apps.apple.com",
  "play.google.com",
  "yousician.atlassian.net",
  "www.sec.gov",
  "sec.gov",
  "www.riaa.com",
  "riaa.com",
  "www.crunchbase.com",
  "crunchbase.com",
  "www.appfigures.com",
  "appfigures.com"
]);

const logoDomainOverrides = {
  yousician: "yousician.com",
  simply: "hellosimply.com",
  "ultimate-guitar": "ultimate-guitar.com",
  fender: "fender.com",
  "fender-play": "fender.com",
  bandlab: "bandlab.com",
  duolingo: "duolingo.com",
  kahoot: "kahoot.com",
  chordify: "chordify.net",
  "spotify-platform": "spotify.com",
  "spotify-artists": "artists.spotify.com",
  "spotify-for-artists": "artists.spotify.com",
  youtube: "youtube.com",
  "youtube-artists": "youtube.com",
  "tiktok-artists": "artists.tiktok.com",
  "tiktok-for-artists": "artists.tiktok.com",
  suno: "suno.com",
  udio: "udio.com",
  moises: "moises.ai",
  "elevenlabs-music": "elevenlabs.io",
  "chord-ai": "chordai.net",
  "pickup-music": "pickupmusic.com",
  "justin-guitar": "justinguitar.com",
  "fretello": "fretello.com",
  "gibson-app": "gibson.app",
  yamaha: "yamaha.com",
  "positive-grid": "positivegrid.com",
  "fl-studio": "image-line.com",
  "ableton": "ableton.com",
  "garageband": "apple.com",
  "logic-pro": "apple.com",
  "guitar-pro": "guitar-pro.com",
  "musescore": "musescore.org",
  splice: "splice.com",
  landr: "landr.com",
  "flow-music": "flowmusic.app",
  klangio: "klang.io",
  "lalal-ai": "lalal.ai",
  "midia-research": "midiaresearch.com",
  musora: "musora.com",
  flowkey: "flowkey.com",
  skoove: "skoove.com",
  "muse-group": "mu.se",
  "hal-leonard": "halleonard.com",
  musicnotes: "musicnotes.com",
  "makemusic-cloud": "makemusic.com",
  tonalenergy: "tonalenergy.com",
  soundbrenner: "soundbrenner.com",
  "cifra-club": "cifraclub.com.br",
  loog: "loogguitars.com",
  "coach-guitar": "coachguitar.com",
  "piano-academy": "yokeemusic.com",
  smule: "smule.com",
  "rocksmith-plus": "ubisoft.com",
  "disney": "disney.com",
  "epic-games": "epicgames.com",
  roblox: "roblox.com",
  netflix: "netflix.com",
  nintendo: "nintendo.com",
  "google-play-best-of": "play.google.com"
};

const logoImageOverrides = {
  "apple-garageband":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/b3/a4/07b3a4b9-5372-25d8-78be-b89ea37c9cc9/AppIcon-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220-0.png/512x512bb.png",
  garageband:
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/b3/a4/07b3a4b9-5372-25d8-78be-b89ea37c9cc9/AppIcon-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220-0.png/512x512bb.png",
  "logic-pro":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/59/f3/29/59f329bc-635a-a4dd-30dd-a2502022bbc3/AppIcon-0-85-220-0-6-0-0-2x-0-0.png/512x512bb.png",
  "fender-play":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5f/d2/9b/5fd29b8d-5f4f-29c1-50ee-601a291e2f06/AppIcon-0-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.png",
  "piano-academy":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/64/f1/1c/64f11cbb-bdd9-d408-0a8a-a26542d2511a/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.png",
  "rocksmith-plus":
    "https://play-lh.googleusercontent.com/L1KZi8RAR2o6CkljCeF-BGIQey1ZLAjS5ZnkQB9MArU5awkzv05aPfrzwwMvOzWSYaTUovth7ulxGb2UVOKTZw"
};

const logoSourceLabelOverrides = {
  "apple-garageband": "GarageBand App Store icon",
  garageband: "GarageBand App Store icon",
  "logic-pro": "Logic Pro App Store icon",
  "fender-play": "Fender Play App Store icon",
  "piano-academy": "Piano Academy App Store icon",
  "rocksmith-plus": "Rocksmith+ Google Play icon"
};

function domainFromUrl(value) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function isExternalUrl(value) {
  try {
    return /^https?:$/.test(new URL(value).protocol);
  } catch {
    return false;
  }
}

function sourceUrl(source) {
  const url = source?.url || "";
  return isExternalUrl(url) ? url : "";
}

function sourceDomainLabel(source) {
  const domain = domainFromUrl(sourceUrl(source));
  return domain || "link";
}

function sourceLinkKind(source) {
  const url = sourceUrl(source);
  const text = `${source?.title || ""} ${source?.type || ""} ${source?.scope || ""} ${url}`.toLowerCase();
  if (/play\.google\.com|google play/.test(text)) return "Google Play";
  if (/apps\.apple\.com|app store/.test(text)) return "App Store";
  if (/yousician\.atlassian\.net|internal research|confluence/.test(text)) return "Internal";
  if (/appfigures|similarweb|credentialed/.test(text)) return "Credentialed data";
  if (/legal|lawsuit|rights|copyright|riaa/.test(text)) return "Legal / industry";
  if (/linkedin/.test(text)) return "LinkedIn";
  if (/sec\.gov|annual report|filing|investor/.test(text)) return "Filing";
  if (/crunchbase|pitchbook|dealroom|funding|investor/.test(text)) return "Capital";
  if (/news|press|blog|article|launch/.test(text)) return "News";
  if (/support|help/.test(text)) return "Support";
  if (/official|product|company|home|website/.test(text)) return "Website";
  return source?.type || "Source";
}

function playerPrimaryWebsiteSource(player) {
  const directDomain = logoDomainOverrides[player.id];
  const sources = evidenceSourcesFor(player).filter((source) => sourceUrl(source));
  if (directDomain) {
    const directMatch = sources.find((source) => domainFromUrl(source.url).endsWith(directDomain));
    if (directMatch) return directMatch;
    return {
      title: `${player.name} website`,
      type: "Official website",
      tier: "High",
      url: `https://${directDomain}`,
      access_status: "not-checked",
      scope: "Primary website inferred from the curated company domain map."
    };
  }
  return sources
    .map((source) => ({ source, score: logoCandidateScore(source, player) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0]?.source || sources[0] || null;
}

function playerExternalLinks(player, limit = 6) {
  const primary = playerPrimaryWebsiteSource(player);
  const sources = evidenceSourcesFor(player).filter((source) => sourceUrl(source));
  const rankedSources = sources
    .map((source) => {
      let score = source === primary ? 100 : logoCandidateScore(source, player);
      const kind = sourceLinkKind(source);
      if (kind === "App Store" || kind === "Google Play") score += 12;
      if (kind === "Filing" || kind === "Capital") score += 8;
      if (kind === "News") score += 4;
      if (sourceAccessStatus(source) === "needs-replacement") score -= 30;
      return { source, kind, score };
    })
    .sort((a, b) => b.score - a.score || a.source.title.localeCompare(b.source.title));
  const seen = new Set();
  return rankedSources
    .filter(({ source }) => {
      const url = sourceUrl(source);
      if (!url || seen.has(url)) return false;
      seen.add(url);
      return true;
    })
    .slice(0, limit);
}

function externalLinkPillHtml({ source, kind }, options = {}) {
  const url = sourceUrl(source);
  if (!url) return "";
  const label = options.label || kind || sourceLinkKind(source);
  const title = options.title || source.title || sourceDomainLabel(source);
  const className = options.className || "external-link-pill";
  return `
    <a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(title)}">
      <span>${escapeHtml(label)}</span>
      <small>${escapeHtml(sourceDomainLabel(source))}</small>
    </a>
  `;
}

function playerExternalLinkRailHtml(player, limit = 5, className = "player-link-rail") {
  const links = playerExternalLinks(player, limit);
  if (!links.length) {
    return `<p class="evidence-empty">No working public website link is attached yet.</p>`;
  }
  return `
    <div class="${className}" aria-label="External company links">
      ${links.map((link) => externalLinkPillHtml(link)).join("")}
    </div>
  `;
}

function logoCandidateScore(source, player) {
  const domain = domainFromUrl(source?.url);
  if (!domain || logoDomainExclusions.has(domain)) return 0;
  const sourceText = `${source.title || ""} ${source.type || ""} ${source.scope || ""}`.toLowerCase();
  const nameTokens = sourceTokens(player.name);
  const titleTokens = new Set(sourceTokens(source.title || source.url || ""));
  let score = 1;
  if (/official|product|company|about|home|investor|developer|platform|education|retail/.test(sourceText)) score += 4;
  if (/google|apple|app store|play store|news|lawsuit|award|report|support/.test(sourceText)) score -= 2;
  if (nameTokens.some((token) => titleTokens.has(token) || domain.includes(token))) score += 2;
  if (sourceAccessStatus(source) === "verified") score += 1;
  return score;
}

function logoDomainForPlayer(player) {
  if (logoDomainOverrides[player.id]) return logoDomainOverrides[player.id];
  const rankedSources = evidenceSourcesFor(player)
    .map((source) => ({ source, score: logoCandidateScore(source, player) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  return domainFromUrl(rankedSources[0]?.source?.url || "");
}

function logoUrlForPlayer(player, size = 128) {
  if (logoImageOverrides[player.id]) return logoImageOverrides[player.id];
  const domain = logoDomainForPlayer(player);
  if (!domain) return "";
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;
}

function yousicianLogoUrl(size = 128) {
  return `https://www.google.com/s2/favicons?domain=yousician.com&sz=${size}`;
}

function svgSafeId(value) {
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "-");
}

function shouldShowMapLogo(player, visibleCount, focusScale, isSelected) {
  return true;
}

function logoDomainLabel(player) {
  if (logoSourceLabelOverrides[player.id]) return logoSourceLabelOverrides[player.id];
  return logoDomainForPlayer(player) || "initials fallback";
}

function logoSubtypeBadge(player) {
  if (player.id === "fender-play") return "PLAY";
  if (player.id === "fender") return "GEAR";
  return "";
}

function onePagerLogoSourceText(player) {
  if (logoSourceLabelOverrides[player.id]) return logoSourceLabelOverrides[player.id];
  const domain = logoDomainForPlayer(player);
  return domain ? domain.replace(/^www\./, "") : "Logo source pending";
}

function logoMarkHtml(player, className = "company-logo-mark", options = {}) {
  const logoUrl = logoUrlForPlayer(player, options.size || 128);
  const style = [
    `--avatar-color:${colorFor(player)}`,
    `--company-color:${colorFor(player)}`,
    options.style || ""
  ]
    .filter(Boolean)
    .join(";");
  return `
    <span
      class="${className} company-logo-mark ${logoUrl ? "has-logo" : "is-initial-only"}"
      style="${style}"
      title="${escapeHtml(player.name)}"
      data-logo-domain="${escapeHtml(logoDomainLabel(player))}"
      data-player-id="${escapeHtml(player.id)}"
      aria-hidden="true"
    >
      <span class="company-logo-initials">${escapeHtml(initials(player.name))}</span>
      ${
        logoUrl
          ? `<img src="${escapeHtml(logoUrl)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.remove();this.parentElement.classList.add('is-logo-missing')" />`
          : ""
      }
      ${logoSubtypeBadge(player) ? `<span class="company-logo-subtype">${escapeHtml(logoSubtypeBadge(player))}</span>` : ""}
    </span>
  `;
}

function companyInlineHtml(player, options = {}) {
  const label = options.compact ? compactName(player.name, options.compact) : player.name;
  const className = options.className || "company-inline";
  return `
    <span class="${className} company-inline" title="${escapeHtml(player.name)}">
      ${logoMarkHtml(player, options.logoClassName || "company-inline-logo", { size: options.size || 64 })}
      <span>${escapeHtml(label)}</span>
    </span>
  `;
}

function sourceAccessStatus(source) {
  const rawStatus = `${source.accessStatus || source.access_status || ""}`.toLowerCase();
  if (source.accessStatus) return source.accessStatus;
  if (/needs?\s*replacement|repair|broken|dead/.test(rawStatus)) return "needs-replacement";
  if (/auth|login|credential|subscription|paywall/.test(rawStatus)) return "auth-required";
  if (/restricted|manual/.test(rawStatus)) return "access-restricted";
  if (/timeout/.test(rawStatus)) return "timeout";
  if (/verified|checked|url collected|source-backed/.test(rawStatus) || source.lastUrlCheck || source.last_url_check) return "verified";
  return "not-checked";
}

function sourceAccessLabel(source) {
  const status = sourceAccessStatus(source);
  if (status === "verified") return "Link checked";
  if (status === "auth-required") return "Auth required";
  if (status === "access-restricted") return "Manual check";
  if (status === "timeout") return "Timeout";
  if (status === "needs-replacement") return "Replace link";
  return "Not checked";
}

function sourceAccessShort(source) {
  const status = sourceAccessStatus(source);
  if (status === "verified") return "link ok";
  if (status === "auth-required") return "auth";
  if (status === "access-restricted") return "manual";
  if (status === "timeout") return "timeout";
  if (status === "needs-replacement") return "repair";
  return "unchecked";
}

function sourceAccessClass(source) {
  return `access-${slugClass(sourceAccessStatus(source))}`;
}

function evidenceCoverage(player) {
  const record = evidenceRecordFor(player);
  const sources = evidenceSourcesFor(player);
  const highCount = sources.filter((source) => source.tier === "High").length;
  const publicCount = sources.filter((source) => source.type !== "Internal research").length;
  const internalCount = sources.length - publicCount;
  const officialCount = sources.filter((source) => /Official|Financial|Institution|Legal/i.test(source.type)).length;
  const verifiedCount = sources.filter((source) => sourceAccessStatus(source) === "verified").length;
  const authRequiredCount = sources.filter((source) => sourceAccessStatus(source) === "auth-required").length;
  const restrictedCount = sources.filter((source) => ["access-restricted", "timeout"].includes(sourceAccessStatus(source))).length;
  const replacementCount = sources.filter((source) => sourceAccessStatus(source) === "needs-replacement").length;
  const openQuestions = record.openQuestions || [];
  const publicOpenQuestions = publicOpenQuestionsFor(record);
  const gatedQuestions = gatedOpenQuestionsFor(record);
  const types = [...new Set(sources.map((source) => source.type))];
  const rawScore =
    sources.length * 11 +
    highCount * 7 +
    publicCount * 4 +
    officialCount * 5 +
    verifiedCount * 5 +
    authRequiredCount * 3 +
    (internalCount ? 6 : 0) -
    restrictedCount * 5 -
    replacementCount * 18 -
    Math.max(0, publicOpenQuestions.length - 1) * 5;
  const score = sources.length ? Math.max(24, Math.min(96, rawScore)) : 12;
  const label =
    replacementCount
      ? "Needs source repair"
      : score >= 76 && sources.length >= 3 && restrictedCount <= 1
      ? "Evidence supported"
      : score >= 56 && sources.length >= 2
        ? "Sourced profile"
        : sources.length
          ? "Lightly sourced"
          : "Unsourced queue";
  const status = score >= 76 ? "strong" : score >= 56 ? "fair" : sources.length ? "weak" : "none";
  return {
    record,
    sources,
    count: sources.length,
    highCount,
    publicCount,
    internalCount,
    officialCount,
    verifiedCount,
    authRequiredCount,
    restrictedCount,
    replacementCount,
    openQuestions,
    publicOpenQuestions,
    gatedQuestions,
    types,
    score,
    label,
    status
  };
}

const sourceClassLabels = {
  official: "Official source",
  app_store: "App store",
  direct_metric: "Direct metric",
  ownership_capital: "Ownership / capital",
  internal_research: "Internal research",
  internal_relationship: "Yousician input",
  audience_traffic: "Audience / traffic",
  legal_news: "Legal / news",
  award_program: "Award / programme",
  market_data: "Market data",
  industry_context: "Industry context"
};

function sourceClassesFor(source) {
  const type = `${source?.type || ""}`.toLowerCase();
  const text = `${source?.title || ""} ${source?.scope || ""} ${source?.url || ""}`.toLowerCase();
  const classes = [];
  if (/official|institution|support|partner product|partnership|company|product|app store/.test(type)) classes.push("official");
  if (/app store|google play|developer/.test(type) || /apps\.apple\.com|play\.google\.com/.test(text)) classes.push("app_store");
  if (/credentialed|appfigures|similarweb|market data|financial|filing|sec/.test(type + " " + text)) classes.push("direct_metric");
  if (/funding|investor|capital|ownership|crunchbase|pitchbook|dealroom|financial|filing|sec/.test(type + " " + text)) {
    classes.push("ownership_capital");
  }
  if (/internal research/.test(type)) classes.push("internal_research");
  if (/audience|creator|youtube|traffic|community|analytics|chartmetric|luminate|midia/.test(type + " " + text)) {
    classes.push("audience_traffic");
  }
  if (/legal|rights|copyright|lawsuit|policy|news/.test(type + " " + text)) classes.push("legal_news");
  if (/award|recognition|funding|programme|program|accelerator|horizon|eit|creative europe|sxsw|bett/.test(type + " " + text)) {
    classes.push("award_program");
  }
  if (/market data|industry research|industry association|report|analytics/.test(type)) classes.push("market_data");
  if (/industry|association|research|news|media/.test(type)) classes.push("industry_context");
  return [...new Set(classes.length ? classes : ["industry_context"])];
}

function sourceTargetLabel(id) {
  return sourceClassLabels[id] || id;
}

function sourceCoverageTargetsFor(player) {
  const text = `${player.type} ${player.category} ${player.subcategory} ${player.reach} ${player.model} ${player.ownership} ${player.sourceStatus} ${player.recent} ${player.tags.join(" ")}`.toLowerCase();
  const sourceClaimsLinked = /official|linked|verified|source-backed/.test(text);
  const targets = [
    {
      id: "official",
      required: !isSignalOnlyRecord(player),
      reason: "Every record needs an official product, company or institution source."
    }
  ];
  if (/app|mobile|software|platform|tool|daw|studio|learning|practice|creation|ai/.test(text) && !isSignalOnlyRecord(player)) {
    targets.push({
      id: "app_store",
      required: /google play|app store/.test(text),
      reason: "App adjacent records should show store or product distribution evidence where available."
    });
  }
  if (requiresCredentialedData(player)) {
    targets.push({
      id: "direct_metric",
      required: false,
      reason: "Revenue, downloads, traffic, rank and usage claims need credentialed or direct metric data before they become performance facts."
    });
  }
  if (/ownership|investor|funding|capital|acquired|public|private|sec|filing/.test(text) && !/to verify|unknown|pending/.test(text)) {
    targets.push({
      id: "ownership_capital",
      required: /funding|investor|acquired|public|sec|filing/.test(text) || sourceClaimsLinked,
      reason: "Ownership and capital claims should be backed separately from product positioning."
    });
  }
  if (player.key || relationForPlayer(player) || /relationship|partner|bundle|bizdev|internal/.test(text)) {
    targets.push({
      id: "internal_relationship",
      required: false,
      reason: "Strategic relationship status must come from Yousician, not public inference."
    });
  }
  if (/traffic|audience|youtube|creator|community|large|global|subscriber|artist|user|retail|marketplace/.test(text)) {
    targets.push({
      id: "audience_traffic",
      required: /traffic|audience|subscriber/.test(text),
      reason: "Reach wording needs audience, traffic, community or market signal support."
    });
  }
  if (/legal|rights|copyright|licens|policy|lawsuit|news/.test(text)) {
    targets.push({
      id: "legal_news",
      required: true,
      reason: "Rights, policy and litigation claims need dedicated legal or news evidence."
    });
  }
  if (/award|programme|program|accelerator|grant|funding|eic|horizon|eit|sxsw|bett|apple design|google play best/.test(text)) {
    targets.push({
      id: "award_program",
      required: true,
      reason: "Award, grant and programme records need their official criteria or programme source."
    });
  }
  if (isSignalOnlyRecord(player) || /research|market|data|industry|monitor|signal/.test(text)) {
    targets.push({
      id: "market_data",
      required: isSignalOnlyRecord(player) && !sourceClaimsLinked,
      reason: "Signal records need a market data, industry or monitoring source rather than product proof."
    });
  }
  const byId = new Map();
  targets.forEach((target) => {
    const existing = byId.get(target.id);
    byId.set(target.id, existing ? { ...existing, required: existing.required || target.required } : target);
  });
  return [...byId.values()];
}

function sourceCoverageTargetAudit(player) {
  const sources = evidenceSourcesFor(player);
  const classes = new Set(sources.flatMap(sourceClassesFor));
  const targets = sourceCoverageTargetsFor(player).map((target) => ({
    ...target,
    covered: target.id === "internal_relationship" ? Boolean(internalValidationFor(player).overrideApplied) : classes.has(target.id)
  }));
  const requiredTargets = targets.filter((target) => target.required);
  const coveredRequired = requiredTargets.filter((target) => target.covered);
  const missingRequired = requiredTargets.filter((target) => !target.covered);
  const coveredOptional = targets.filter((target) => !target.required && target.covered).length;
  const denominator = Math.max(1, requiredTargets.length);
  const score = Math.min(100, Math.round((coveredRequired.length / denominator) * 82 + Math.min(18, coveredOptional * 6)));
  const label =
    missingRequired.length === 0 && score >= 88
      ? "Coverage complete"
      : missingRequired.length <= 1 && score >= 64
        ? "Coverage mostly complete"
        : "Coverage gaps visible";
  return {
    classes,
    targets,
    missingRequired,
    coveredRequired,
    score,
    label
  };
}

function sourceCoverageTargetChips(player, limit = 8) {
  const audit = sourceCoverageTargetAudit(player);
  return audit.targets
    .slice(0, limit)
    .map(
      (target) => `
        <span class="source-target-chip ${target.covered ? "is-covered" : target.required ? "is-missing" : "is-optional"}" title="${escapeHtml(target.reason)}">
          ${escapeHtml(sourceTargetLabel(target.id))}
        </span>
      `
    )
    .join("");
}

function isReadyRecord(player) {
  return (
    qualityProfile(player).score >= 68 &&
    !hasCriticalEvidenceGap(player) &&
    claimConflictAudit(player).status === "consistent" &&
    sourceCoverageTargetAudit(player).missingRequired.length === 0
  );
}

function claimConsistencyStatusFor(player) {
  const audit = claimConflictAudit(player);
  if (audit.conflicts.length) {
    return {
      label: "Conflict review",
      tone: "hypothesis",
      note: audit.conflicts[0]
    };
  }
  if (audit.warnings.length) {
    return {
      label: "Consistency caveat",
      tone: "mixed",
      note: audit.warnings[0]
    };
  }
  return {
    label: "No contradiction flagged",
    tone: "verified",
    note: audit.supported[0] || "Loaded sources and direct data do not contradict the current profile fields."
  };
}

function claimConflictAudit(player) {
  const coverage = evidenceCoverage(player);
  const targetAudit = sourceCoverageTargetAudit(player);
  const metric = directMetricFor(player);
  const enrichmentConflicts = publicEnrichmentFor(player)?.conflicts || [];
  const reachText = `${player.reach || ""}`.toLowerCase();
  const ownershipText = `${player.ownership || ""}`.toLowerCase();
  const sourceStatusText = `${player.sourceStatus || ""}`.toLowerCase();
  const conflicts = [];
  const warnings = [];
  const supported = [];

  if (coverage.replacementCount > 0) conflicts.push("At least one linked source is marked for repair or replacement.");
  enrichmentConflicts.forEach((conflict) => {
    const note = nonEmptyString(conflict.note) || nonEmptyString(conflict.field) || "Public enrichment flagged a value conflict.";
    if (/conflict|mismatch/i.test(conflict.severity || "")) conflicts.push(note);
    else warnings.push(note);
  });
  if (/official|linked|verified|source-backed/.test(sourceStatusText) && coverage.count < 2) {
    warnings.push("Profile wording claims linked sources, but fewer than two usable sources are attached.");
  }
  if (metric) {
    const reachScore = directReachScore(player);
    const hasDirectScaleMetric = [metric.downloads, metric.revenue, metric.websiteVisits].some((value) => value != null && value !== "");
    if (hasDirectScaleMetric && /large|global|major|massive|high-profile|very large/.test(reachText) && reachScore > 0 && reachScore <= 2) {
      conflicts.push("Direct reach metric is materially lower than the current large reach wording.");
    }
    if (hasDirectScaleMetric && /niche|local|emerging|small|specialist/.test(reachText) && reachScore >= 4) {
      conflicts.push("Direct reach metric is materially higher than the current niche or emerging reach wording.");
    }
    supported.push(
      hasDirectScaleMetric
        ? "Direct metric source is loaded for at least one quantitative field."
        : "Public app rating signal is loaded; it is not treated as downloads or revenue."
    );
  } else if (requiresCredentialedData(player)) {
    warnings.push("Quantitative claims still need a credentialed Appfigures, Similarweb, filing or internal export.");
  }

  if (/to verify|unknown|pending/.test(ownershipText)) {
    warnings.push("Ownership is still marked as a validation item.");
  } else if (targetAudit.missingRequired.some((target) => target.id === "ownership_capital")) {
    warnings.push("Ownership or capital wording exists without a dedicated ownership/capital source class.");
  }

  if (targetAudit.missingRequired.length) {
    warnings.push(
      `Missing required source class: ${targetAudit.missingRequired
        .slice(0, 2)
        .map((target) => sourceTargetLabel(target.id))
        .join(", ")}.`
    );
  }
  if (coverage.restrictedCount > 1 && coverage.verifiedCount < 2) {
    warnings.push("Several sources need manual access, with limited checked public links.");
  }
  if (coverage.count >= 3 && targetAudit.missingRequired.length === 0 && !warnings.length && !conflicts.length) {
    supported.push("Required source classes are covered and no contradictory value is detected.");
  }
  const score = Math.max(0, Math.min(100, 92 - conflicts.length * 30 - warnings.length * 9 + supported.length * 4));
  const status = conflicts.length ? "conflict" : warnings.length ? "review" : "consistent";
  return {
    status,
    score,
    conflicts: [...new Set(conflicts)],
    warnings: [...new Set(warnings)].slice(0, 5),
    supported: [...new Set(supported)].slice(0, 4),
    targetAudit
  };
}

function aiClaimStatusFor(player) {
  const text = `${player.ai} ${player.type} ${player.subcategory} ${player.tags.join(" ")}`.toLowerCase();
  const confirmedIds = new Set([
    "suno",
    "udio",
    "moises",
    "landr",
    "lalal-ai",
    "aiva",
    "elevenlabs-music",
    "chord-ai",
    "positive-grid",
    "ripx-daw",
    "klangio",
    "flow-music"
  ]);
  if (confirmedIds.has(player.id) || /core ai|ai mastering|ai stem|ai chord|ai music generation|ai audio/i.test(player.ai)) {
    return {
      label: "Confirmed AI feature",
      tone: "verified",
      note: "AI is part of the product surface or positioning; scale and defensibility still need metrics."
    };
  }
  if (/confirmed app feedback|confirmed feedback|chord recognition|recommendation|personalization|smart|assist/i.test(text)) {
    return {
      label: "AI-adjacent signal",
      tone: "mixed",
      note: "Relevant product capability is visible, but this artifact should not overstate AI strategy."
    };
  }
  if (/research|monitor|hypothesis|potential|likely|may|roadmap/i.test(text) || player.aiScore >= 3) {
    return {
      label: "AI hypothesis",
      tone: "hypothesis",
      note: "Useful watch item; needs a primary product/source check before executive language."
    };
  }
  return {
    label: "No AI claim",
    tone: "neutral",
    note: "AI is not a major stated factor for this record."
  };
}

function sizeClaimStatusFor(player) {
  const metric = directMetricFor(player);
  const hasMetric =
    metric &&
    [metric.downloads, metric.revenue, metric.categoryRank, metric.reviewVelocity, metric.websiteVisits, metric.reviewCount, metric.rating].some(
      (value) => value != null && value !== ""
    );
  if (hasMetric) {
    return {
      label: metricIsPublicAppStoreOnly(metric) ? "Public rating loaded" : "Direct metric loaded",
      tone: "verified",
      note: metricIsPublicAppStoreOnly(metric)
        ? "Official App Store rating count is loaded; revenue, downloads and rank trend still need credentialed data."
        : "A credentialed or direct metric is loaded for this record."
    };
  }
  if (/large|major|massive|very large|high-profile|high visibility|broad|established/i.test(player.reach)) {
    return {
      label: "Size claim needs data",
      tone: "mixed",
      note: "Reach wording can guide triage, but direct Appfigures, Similarweb, filings, or reports are still needed."
    };
  }
  if (/to verify|emerging|visible|specialist|niche/i.test(player.reach)) {
    return {
      label: "Size needs proof",
      tone: "hypothesis",
      note: "Treat size as a research queue item until a metric source is added."
    };
  }
  return {
    label: "Basic size note",
    tone: "neutral",
    note: "No quantified reach metric is loaded."
  };
}

function relationshipClaimStatusFor(player) {
  const validation = internalValidationFor(player);
  if (validation.overrideApplied) {
    return {
      label: "Internal relationship confirmed",
      tone: "verified",
      note: validation.source
    };
  }
  if (relationForPlayer(player)) {
    return {
      label: "Internal data needed",
      tone: "hypothesis",
      note: "Strategic proximity is mapped; Yousician owner, history and sensitivity fields still need completion."
    };
  }
  return {
    label: "External record",
    tone: "neutral",
    note: "Internal relationship review is not prioritized for this record in the current visible set."
  };
}

function claimIntegrityFor(player) {
  const coverage = evidenceCoverage(player);
  const ai = aiClaimStatusFor(player);
  const size = sizeClaimStatusFor(player);
  const relationship = relationshipClaimStatusFor(player);
  const consistency = claimConsistencyStatusFor(player);
  const interpretation = {
    label: "Strategic interpretation",
    tone: "interpretation",
    note: "\"Why it matters\" is a reasoned assessment, not a primary-source fact."
  };
  const evidenceLabel =
    coverage.score >= 76 && coverage.officialCount
      ? "Primary source supported"
      : coverage.score >= 56
        ? "Sourced profile"
        : coverage.count
          ? "Light proof"
          : "Needs validation";
  const evidenceTone =
    coverage.score >= 76 && coverage.officialCount ? "verified" : coverage.score >= 56 ? "mixed" : "hypothesis";
  const evidence = {
    label: evidenceLabel,
    tone: evidenceTone,
    note: `${coverage.count} linked sources; ${coverage.officialCount} official/institutional/legal; ${coverage.verifiedCount} link checked.`
  };
  const hasHypothesis = [ai, size, relationship, evidence, consistency].some((item) => item.tone === "hypothesis");
  const boardLanguage =
    coverage.score >= 76 && !hasHypothesis
      ? "Board usable with normal caveat"
      : coverage.score >= 56
        ? "Use with caveats"
        : "Internal validation needed";
  return {
    evidence,
    size,
    ai,
    relationship,
    consistency,
    interpretation,
    hasHypothesis,
    boardLanguage,
    boardTone: boardLanguage === "Board usable with normal caveat" ? "verified" : boardLanguage === "Use with caveats" ? "mixed" : "hypothesis"
  };
}

function claimPillHtml(item) {
  return `<span class="claim-pill claim-${escapeHtml(item.tone)}">${escapeHtml(item.label)}</span>`;
}

function claimIntegritySection(player, context = "profile") {
  const claim = claimIntegrityFor(player);
  const cardClass = context === "one-pager" ? "one-pager-card claim-integrity-card" : "profile-section claim-integrity-card";
  return `
    <section class="${cardClass}" data-claim="${escapeHtml(claim.boardTone)}">
      <span class="section-kicker">Claim integrity</span>
      <h3>${escapeHtml(claim.boardLanguage)}</h3>
      <div class="claim-grid">
        ${[claim.evidence, claim.size, claim.ai, claim.relationship, claim.consistency]
          .map(
            (item) => `
              <div class="claim-check claim-${escapeHtml(item.tone)}">
                ${claimPillHtml(item)}
                <small>${escapeHtml(item.note)}</small>
              </div>
            `
          )
          .join("")}
      </div>
      <p>Interpretation is deliberately separated from facts: ${escapeHtml(claim.interpretation.note)}</p>
    </section>
  `;
}

function hasCriticalEvidenceGap(player) {
  const coverage = evidenceCoverage(player);
  const signalOnly = isSignalOnlyRecord(player);
  const keyDecisionRecord = player.key && entityKindFor(player) !== "Monitoring signal";
  return (
    coverage.verifiedCount < 1 ||
    coverage.replacementCount > 0 ||
    (coverage.restrictedCount > 0 && coverage.verifiedCount < 2) ||
    (!signalOnly && coverage.count < 2) ||
    (keyDecisionRecord && /to verify/i.test(player.ownership))
  );
}

function sourceTypeChip(source) {
  return `<span class="source-type-chip type-${slugClass(source.type)}">${escapeHtml(source.type)}</span>`;
}

function sourceLinksHtml(sources, limit = 4) {
  const seenUrls = new Set();
  const linkedSources = sources.filter((source) => {
    const url = sourceUrl(source);
    if (!url || seenUrls.has(url)) return false;
    seenUrls.add(url);
    return true;
  });
  if (!linkedSources.length) {
    return `<p class="evidence-empty">No linked evidence yet.</p>`;
  }
  const visible = linkedSources.slice(0, limit);
  const hidden = Math.max(0, linkedSources.length - visible.length);
  return `
    <div class="evidence-link-list">
      ${visible
        .map(
          (source) => `
            <a class="evidence-link" href="${escapeHtml(sourceUrl(source))}" target="_blank" rel="noopener noreferrer">
              <span>${escapeHtml(source.title)}</span>
              <small>${escapeHtml(sourceLinkKind(source))} / ${escapeHtml(source.type)} / ${escapeHtml(sourceAccessLabel(source))}</small>
            </a>
          `
        )
        .join("")}
      ${hidden ? `<span class="evidence-more">+${hidden} more linked source${hidden > 1 ? "s" : ""}</span>` : ""}
    </div>
  `;
}

function openQuestionsHtml(openQuestions, limit = 3) {
  const visible = (openQuestions || []).slice(0, limit);
  if (!visible.length) return `<p class="evidence-empty">No open research question flagged.</p>`;
  return `
    <ul class="open-question-list">
      ${visible.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
    </ul>
  `;
}

function evidenceSummarySection(player, context = "profile") {
  const coverage = evidenceCoverage(player);
  const title = context === "one-pager" ? "Evidence summary" : "Evidence base";
  return `
    <section class="${context === "one-pager" ? "one-pager-card evidence-summary-card" : "profile-section evidence-summary-card"}" data-evidence="${coverage.status}">
      <span class="section-kicker">${title}</span>
      <div class="evidence-scoreline">
        <strong>Link coverage: ${escapeHtml(coverage.label)}</strong>
        <span>${coverage.count} sources / ${coverage.highCount} high tier / ${coverage.verifiedCount} link checked</span>
      </div>
      <p>${escapeHtml(coverage.record.summary)}</p>
      <div class="source-type-row">
        ${
          coverage.sources.length
            ? coverage.sources.slice(0, 5).map(sourceTypeChip).join("")
            : `<span class="source-type-chip type-unknown">No sources linked</span>`
        }
      </div>
      ${sourceLinksHtml(coverage.sources, context === "one-pager" ? 4 : 3)}
      <details class="evidence-questions">
        <summary>Open questions and caveats</summary>
        ${openQuestionsHtml(coverage.openQuestions)}
      </details>
    </section>
  `;
}

function factClaimsFor(player) {
  const coverage = evidenceCoverage(player);
  const liveMetricClaim = liveMetricClaimFor(player);
  const hq = headquartersRecordFor(player);
  const founded = foundedRecordFor(player);
  const sourceBasis = coverage.sources.length
    ? coverage.sources
        .slice(0, 3)
        .map((source) => source.title)
        .join(" / ")
    : "Profile seed; source still needed";
  return [
    {
      label: "What it is",
      text: player.description,
      basis: "Profile classification",
      kind: "Verified fact",
      caveat: "Classification can be refined, but the entity/product description is source checkable."
    },
    {
      label: "HQ",
      text: hq.value,
      basis: hq.basis,
      kind: hq.kind,
      caveat: hq.caveat
    },
    {
      label: "Founded",
      text: founded.value,
      basis: founded.detail,
      kind: founded.value === "Founded to verify" ? "Pending founded field" : "Founded reference",
      caveat: "Use latest company source if this date will be cited externally."
    },
    {
      label: "Global footprint",
      text: globalFootprintFor(player),
      basis: "Footprint field",
      kind: "Market presence field",
      caveat: "Shown separately from headquarters. This is reach context, not incorporation or office location."
    },
    {
      label: "Reach signal",
      text: reachSignalFor(player),
      basis: "Business snapshot",
      kind: sizeClaimStatusFor(player).label,
      caveat: sizeClaimStatusFor(player).note
    },
    {
      label: "Business model",
      text: player.model,
      basis: "Business snapshot",
      kind: "Business-field claim",
      caveat: "Needs product/filing/source confirmation for executive use."
    },
    {
      label: "Ownership / investors",
      text: displayOwnership(player),
      basis: "Ownership field",
      kind: /to verify|monitor/i.test(player.ownership) ? "Gated ownership field" : "Ownership claim",
      caveat: "Use latest official/company or transaction source where available."
    },
    {
      label: "Product or AI signal",
      text: player.ai,
      basis: sourceBasis,
      kind: aiClaimStatusFor(player).label,
      caveat: aiClaimStatusFor(player).note
    },
    {
      label: "Evidence supported note",
      text: coverage.record.summary,
      basis: sourceBasis,
      kind: claimIntegrityFor(player).evidence.label,
      caveat: "Linked sources support the research note; they do not automatically verify every strategic inference."
    },
    liveMetricClaim
      ? {
          ...liveMetricClaim,
          kind: "Live metric override",
          caveat: "Imported/manual metric field; check source/date before sharing externally."
        }
      : null
  ].filter((claim) => claim?.text && !/^\s*(n\/a|unknown)\s*$/i.test(claim.text));
}

function factPackHtml(player, limit = 5) {
  return `
    <ul class="fact-list">
      ${factClaimsFor(player)
        .slice(0, limit)
        .map(
          (claim) => `
            <li>
              <strong>${escapeHtml(claim.label)}</strong>
              <em>${escapeHtml(claim.kind || "Claim")}</em>
              <span>${escapeHtml(claim.text)}</span>
              <small>Basis: ${escapeHtml(claim.basis)}${claim.caveat ? ` / ${escapeHtml(claim.caveat)}` : ""}</small>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function factPackSection(player, context = "profile") {
  return `
    <section class="${context === "one-pager" ? "one-pager-card fact-pack-card" : "profile-section fact-pack-card"}">
      <span class="section-kicker">Fact pack</span>
      <h3>Facts we can state</h3>
      ${factPackHtml(player, context === "one-pager" ? 5 : 4)}
      <small class="fact-caveat">Strategic interpretation is separated from these factual fields and linked source notes.</small>
    </section>
  `;
}

function executiveAppfiguresNote(player) {
  return requiresCredentialedData(player)
    ? "Credentialed-only gate: use Appfigures for revenue, downloads, rank trend, review velocity, country mix, and 12 month performance. Public sources cover profile context, not app performance ranking."
    : "This profile is read primarily for ecosystem role, influence, and strategic relevance. Quantified performance should still be checked in the database before external use.";
}

function executiveSignalText(text) {
  const normalized = String(text || "").trim();
  if (!normalized) return "Current market signal should be validated from current company, product, or news sources.";
  return normalized
    .replace(/No board[- ]grade recent[- ]news item is used for this profile; source monitoring remains active\./gi, "No recent market move is prioritized in this profile; keep official product and news sources monitored.")
    .replace(/Track rankings, revenue estimates, product launches, and funding or ownership signals\./gi, "Credentialed app performance gate plus public product and ownership monitoring.")
    .replace(/Potential personalization and practice feedback signal to monitor/gi, "Personalization and practice feedback capabilities are relevant to watch.")
    .replace(/\bresearch target\b/gi, "signal to monitor")
    .replace(/\bresearch\b/gi, "monitor");
}

function absoluteFigureSummary(player) {
  const metric = directMetricFor(player);
  const coverage = evidenceCoverage(player);
  const figures = [];
  if (metric?.downloads != null) figures.push(`${metric.downloads} downloads`);
  if (metric?.revenue != null) figures.push(`${metric.revenue} revenue`);
  if (metric?.websiteVisits != null) figures.push(`${metric.websiteVisits} visits`);
  if (metric?.reviewCount != null) figures.push(`${compactMetricNumber(metric.reviewCount)} public App Store ratings`);
  if (metric?.categoryRank != null) figures.push(`rank ${metric.categoryRank}`);
  if (figures.length) return figures.slice(0, 2).join(" / ");
  if (/public company/i.test(player.ownership)) return "Public filings available";
  if (coverage.count >= 3) return "Public profile sourced";
  return "Quant metrics gated";
}

function sentimentSummary(player) {
  const metric = directMetricFor(player);
  if (metric?.rating != null && metric?.reviewCount != null) {
    return `${Number(metric.rating).toFixed(1)}/5 on ${compactMetricNumber(metric.reviewCount)} public ratings`;
  }
  if (metric?.reviewVelocity != null) return `${metric.reviewVelocity} review velocity`;
  if (requiresCredentialedData(player)) return "App sentiment gated";
  return "Qualitative signal only";
}

function displayOwnership(player) {
  if (!/to verify/i.test(player.ownership || "")) return player.ownership;
  const enrichmentOwnership = publicEnrichmentFor(player)?.ownership;
  if (nonEmptyString(enrichmentOwnership?.value)) return `${enrichmentOwnership.value} public source`;
  return player.key ? "Ownership validation gated" : "Ownership not used in this brief";
}

function profileSpecificLens(player, taxonomy, validation) {
  const safeTaxonomy = taxonomy || taxonomyProfile(player);
  const safeValidation = validation || internalValidationFor(player);
  const relation = relationForPlayer(player);
  const proximity = competitiveProximityScore(player);
  if (relation?.type === "competes" || proximity >= 5) {
    return {
      label: "Competitor lens",
      headline: "Compare positioning and core learning mechanics",
      body: "Focus on pricing, onboarding, catalog, feedback, retention loop and why a learner would choose one product over another."
    };
  }
  if (player.category === "platforms") {
    return {
      label: "Platform lens",
      headline: "Screen music strategy, education strategy and M&A relevance",
      body: "Use this as a triage record for acquisition history, strategic fit, attention risk and possible distribution or partnership logic."
    };
  }
  if (relation?.type === "partners" || /partner|channel|hardware|education|brand|distribution/i.test(`${safeTaxonomy.role} ${safeValidation.nextStep}`)) {
    return {
      label: "Partner lens",
      headline: "Screen synergies and route to audience",
      body: "Look for credible access to learners, trust, gear, schools, creators, catalog, distribution or habit formation."
    };
  }
  if (/public company|major global|large|massive/i.test(`${player.ownership} ${player.reach}`)) {
    return {
      label: "Acquirer lens",
      headline: "Check financial scale and strategic fit",
      body: "Use filings, acquisition history and product adjacency before treating this as a corporate development route."
    };
  }
  return {
    label: "Context lens",
    headline: "Explain why this matters to Yousician",
    body: safeTaxonomy.decisionUse
  };
}

function executiveProfileSnapshot(player, taxonomy) {
  const quality = qualityProfile(player);
  const validation = internalValidationFor(player);
  const lens = profileSpecificLens(player, taxonomy, validation);
  return `
    <section class="profile-section executive-snapshot-card">
      <span class="section-kicker">Decision profile</span>
      <h3>${escapeHtml(lens.headline)}</h3>
      <div class="executive-snapshot-grid">
        <div><span>Role</span><strong>${escapeHtml(taxonomy.role)}</strong></div>
        <div><span>Journey step</span><strong>${escapeHtml(journeyCategoryFor(player).name)}</strong></div>
        <div><span>Yousician use</span><strong>${escapeHtml(lens.label)}</strong></div>
        <div><span>Absolute figure</span><strong>${escapeHtml(absoluteFigureSummary(player))}</strong></div>
        <div><span>Confidence</span><strong>${escapeHtml(`${quality.score}% source confidence`)}</strong></div>
        <div><span>Sentiment</span><strong>${escapeHtml(sentimentSummary(player))}</strong></div>
      </div>
      <p>${escapeHtml(lens.body)}</p>
    </section>
  `;
}

function executivePostureFor(player, taxonomy, validation) {
  const relation = relationForPlayer(player);
  const proximity = competitiveProximityScore(player);
  if (relation?.type === "competes" || proximity >= 5) {
    return {
      label: "Defend core",
      headline: "Core learning or practice pressure",
      body: "Use this player as a benchmark for onboarding, motivation, pricing, catalog, feedback and habit retention.",
      owner: "Product and Growth"
    };
  }
  if (relation?.type === "partners" || /partner|channel|bundle|hardware|retail/i.test(`${player.relationship} ${taxonomy.role}`)) {
    return {
      label: "Partner screen",
      headline: "Potential route to reach or trust",
      body: "Screen whether this actor creates distribution, content, credibility, hardware, education or creator access for Yousician.",
      owner: validation.owner
    };
  }
  if (player.aiScore >= 4 || player.category === "ai") {
    return {
      label: "Watch disruption",
      headline: "AI or workflow shift",
      body: "Track whether this expands practice utility, changes music participation, raises licensing risk, or shifts what learners expect.",
      owner: "AI strategy"
    };
  }
  if (player.category === "signals") {
    return {
      label: "Monitor signal",
      headline: "External market signal",
      body: "Use this as context for funding, recognition, policy, capital, media or market timing rather than as a direct competitor.",
      owner: validation.owner
    };
  }
  return {
    label: "Track context",
    headline: "Strategic context for the ecosystem",
    body: "Use this record to keep the broader Yousician environment visible without overstating performance or relationship status.",
    owner: validation.owner
  };
}

function executiveDecisionQuestion(player, taxonomy) {
  if (player.category === "learning") {
    return "Does this change how Yousician should benchmark onboarding, curriculum, pricing, feedback or paid conversion?";
  }
  if (player.category === "practice") {
    return "Which song choice, trust or repeat practice habit does this actor own before a learner chooses Yousician?";
  }
  if (player.category === "hardware") {
    return "Is there a bundle, channel, brand trust or beginner acquisition path worth screening?";
  }
  if (player.category === "creation") {
    return "Does this show where learners graduate into making music and what they may pay for next?";
  }
  if (player.category === "ai") {
    return "Does this expand practice utility, substitute learning motivation, or create rights and trust risk?";
  }
  if (player.category === "education") {
    return "Does this create a credibility, curriculum, teacher, parent or institutional proof opportunity?";
  }
  if (player.category === "platforms") {
    return "Could this platform matter as a partner, acquirer, attention competitor, music discovery surface or education distribution route?";
  }
  if (player.category === "signals") {
    return "Does this trigger funding, recognition, policy, monitoring or leadership timing action?";
  }
  return taxonomy.decisionUse;
}

function executiveReadinessFor(player, quality) {
  if (quality.score >= 76 && requiresCredentialedData(player)) {
    return {
      label: "Board framing ready",
      headline: "Usable for internal decision framing",
      body: "Role, relevance and strategic question are sourced; app performance claims still need credentialed Appfigures data."
    };
  }
  if (quality.score >= 76 && !hasCriticalEvidenceGap(player)) {
    return {
      label: "Leadership ready",
      headline: "Usable for internal executive discussion",
      body: "Role, relevance and current signal are sufficiently sourced for internal decision framing."
    };
  }
  if (quality.score >= 56) {
    return {
      label: "Sourced profile",
      headline: "Useful with visible caveats",
      body: "Use for prioritisation, but keep performance, size and relationship claims attached to source notes."
    };
  }
  return {
    label: "Check before use",
    headline: "Needs stronger evidence before hard claims",
    body: "Keep as a watch item until source depth, validation fields or credentialed data improve."
  };
}

function executiveGuardrailsFor(player, quality, validation) {
  const guardrails = ["Do not use estimated performance values as direct revenue, size or reach evidence."];
  if (requiresCredentialedData(player)) {
    guardrails.push("Do not rank app revenue, downloads, rank trend, country mix or growth until credentialed app data is imported.");
  }
  if (/Needs|not yet|not prioritized/i.test(`${validation.status} ${validation.knownRelationship}`)) {
    guardrails.push("Do not imply an active relationship, partnership or owner status until Yousician confirms it.");
  }
  if (quality.score < 56 || hasCriticalEvidenceGap(player)) {
    guardrails.push("Keep language as monitored signal until stronger source coverage is linked.");
  }
  return [...new Set(guardrails)].slice(0, 4);
}

function executiveMetricList(player, quality) {
  const metrics = [
    ratingForPlayer(player, "strategic"),
    ratingForPlayer(player, "company"),
    ratingForPlayer(player, "revenue"),
    ratingForPlayer(player, "reach"),
    ratingForPlayer(player, "proximity"),
    ratingForPlayer(player, "appdata")
  ];
  return `
    <div class="one-pager-executive-metrics" aria-label="Executive rating metrics">
      ${metrics
        .map(
          (metric) => `
            <span>
              <strong>${escapeHtml(metric.display)}</strong>
              <small>${escapeHtml(metric.shortLabel)}</small>
            </span>
          `
        )
        .join("")}
      <span>
        <strong>${quality.score}%</strong>
        <small>Evidence</small>
      </span>
    </div>
  `;
}

function executiveOnePagerDecisionCards(player, taxonomy, validation, quality) {
  const posture = executivePostureFor(player, taxonomy, validation);
  const readiness = executiveReadinessFor(player, quality);
  const guardrails = executiveGuardrailsFor(player, quality, validation);
  const sourceNeedsText = sourceNeeds(player).join(", ");
  const directMetric = directMetricFor(player);
  const publicOnlyMetric = metricIsPublicAppStoreOnly(directMetric);
  return `
    <article class="one-pager-card executive-priority-card one-pager-card-large">
      <span>Executive priority</span>
      <h3>${escapeHtml(posture.headline)}</h3>
      <p>${escapeHtml(posture.body)}</p>
      ${executiveMetricList(player, quality)}
    </article>

    <article class="one-pager-card executive-decision-card">
      <span>Decision question</span>
      <h3>${escapeHtml(posture.label)}</h3>
      <p>${escapeHtml(executiveDecisionQuestion(player, taxonomy))}</p>
      <small>${escapeHtml(taxonomy.decisionUse)}</small>
    </article>

    <article class="one-pager-card executive-money-card">
      <span>Metric evidence</span>
      <h3>${directMetric ? (publicOnlyMetric ? "Public app rating loaded" : "Direct metric source loaded") : "Direct data pending"}</h3>
      <p>${
        directMetric
          ? escapeHtml(
              publicOnlyMetric
                ? `${publicAppStoreMetricLabel(player)}. Revenue, downloads, rank trend and country mix still need credentialed data.`
                : `Revenue ${directMetricDisplay(player, "revenue")}. Reach ${directMetricDisplay(player, "reach")}. Source ${directMetric.source}.`
            )
          : "Revenue, downloads, rank, review velocity and country mix stay blank until a credentialed source is imported."
      }</p>
    </article>

    <article class="one-pager-card executive-readiness-card">
      <span>Safe to use</span>
      <h3>${escapeHtml(readiness.label)} / ${quality.score}%</h3>
      <p>${escapeHtml(readiness.body)}</p>
      <small>${escapeHtml(quality.label)}. ${quality.coverage.count} linked source${quality.coverage.count === 1 ? "" : "s"}.</small>
    </article>

    <article class="one-pager-card executive-validation-card">
      <span>Who should validate</span>
      <h3>${escapeHtml(validation.owner)}</h3>
      <p>${escapeHtml(validation.nextStep)}</p>
      <small>Check next: ${escapeHtml(sourceNeedsText)}</small>
    </article>

    <article class="one-pager-card executive-guardrail-card">
      <span>Caveats</span>
      <h3>Safe use rules</h3>
      <ul class="one-pager-guardrail-list">
        ${guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function ownershipNoteFor(player) {
  const coverage = evidenceCoverage(player);
  if (/to verify/i.test(player.ownership)) {
    return "Ownership is a gated field only for deal or investor work.";
  }
  if (coverage.officialCount >= 2 && coverage.verifiedCount >= 2) {
    return "Shown from cited official or public source fields; validate investor detail only for deal work.";
  }
  if (coverage.verifiedCount >= 2) {
    return "Public source fields are linked; confirm investor detail before broader circulation.";
  }
  return "Ownership should be checked against cited source fields before broader circulation.";
}

function executiveOnePagerCards(player, taxonomy, validation) {
  const hq = headquartersRecordFor(player);
  return `
    <article class="one-pager-card">
      <span>What they are</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <p>${escapeHtml(player.description)}</p>
    </article>

    <article class="one-pager-card">
      <span>Scale and reach</span>
      <h3>${escapeHtml(absoluteFigureSummary(player))}</h3>
      <p>Reach signal: ${escapeHtml(reachSignalFor(player))}. Global footprint: ${escapeHtml(globalFootprintFor(player))}. Model: ${escapeHtml(player.model)}</p>
    </article>

    <article class="one-pager-card">
      <span>HQ and footprint</span>
      <h3>${escapeHtml(hq.value)}</h3>
      <p>${escapeHtml(hq.basis)}. Footprint: ${escapeHtml(globalFootprintFor(player))}.</p>
    </article>

    <article class="one-pager-card">
      <span>Ownership / investors</span>
      <h3>${escapeHtml(displayOwnership(player))}</h3>
      <p>${escapeHtml(ownershipNoteFor(player))}</p>
    </article>

    <article class="one-pager-card">
      <span>Recent and AI signal</span>
      <h3>${escapeHtml(executiveSignalText(player.recent))}</h3>
      <p>${escapeHtml(executiveSignalText(player.ai))}</p>
    </article>

    <article class="one-pager-card taxonomy-card">
      <span>Classification</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <div class="taxonomy-grid">
        <div><span>Role</span><strong>${escapeHtml(taxonomy.role)}</strong></div>
        <div><span>Journey step</span><strong>${escapeHtml(taxonomy.journey)}</strong></div>
        <div><span>Proximity</span><strong>${escapeHtml(taxonomy.proximity)}</strong></div>
      </div>
      <p>${escapeHtml(taxonomy.decisionUse)}</p>
    </article>

    <article class="one-pager-card">
      <span>Yousician relevance</span>
      <h3>${escapeHtml(player.relationship)}</h3>
      <p>${escapeHtml(nextAction(player))}</p>
    </article>
  `;
}

function factMiniHtml(player, limit = 2) {
  return `
    <div class="fact-mini-list">
      ${factClaimsFor(player)
        .slice(0, limit)
        .map(
          (claim) =>
            `<span><strong>${escapeHtml(claim.label)}:</strong> ${escapeHtml(claim.text)} <em>${escapeHtml(
              claim.kind || "Claim"
            )}</em></span>`
        )
        .join("")}
    </div>
  `;
}

function qualityProfile(player) {
  const coverage = evidenceCoverage(player);
  const targetAudit = sourceCoverageTargetAudit(player);
  const conflictAudit = claimConflictAudit(player);
  const signalOnly = isSignalOnlyRecord(player);
  const gaps = [];
  if ((!signalOnly && coverage.count < 2) || coverage.score < 44 || (/not verified/i.test(verifiedLabel(player)) && coverage.count < 2)) gaps.push("source");
  if (!signalOnly && coverage.score < 56 && coverage.count < 3) gaps.push("evidence depth");
  if (coverage.replacementCount > 0) gaps.push("broken source");
  if (coverage.restrictedCount > 0 && coverage.verifiedCount < 2) gaps.push("manual link check");
  if (/to verify/i.test(player.ownership)) gaps.push(player.key ? "ownership" : "ownership check");
  if (/to verify|emerging/i.test(`${player.geography} ${player.reach} ${player.model}`)) gaps.push("metadata");
  if (requiresCredentialedData(player) && coverage.count < 2) gaps.push("credentialed data");
  if ((/funding|investor|ownership|to verify/i.test(player.sourceStatus) || /to verify/i.test(player.ownership)) && coverage.count < 3) gaps.push("capital");
  if (coverage.publicOpenQuestions.length >= 2) gaps.push("open source questions");
  if (targetAudit.missingRequired.length >= 2) gaps.push("source class gap");
  if (conflictAudit.conflicts.length) gaps.push("value conflict");
  const sourcePenalty = gaps.filter((gap) => ["source", "broken source", "manual link check", "ownership"].includes(gap)).length * 6;
  const credentialPenalty = gaps.filter((gap) => ["credentialed data", "capital", "open source questions", "metadata", "ownership check", "evidence depth"].includes(gap)).length * 3;
  const auditPenalty = targetAudit.missingRequired.length * 2 + conflictAudit.conflicts.length * 10 + (conflictAudit.status === "review" ? 2 : 0);
  const score = Math.max(
    18,
    Math.min(94, coverage.score - sourcePenalty - credentialPenalty - coverage.restrictedCount * 2 - (player.key && coverage.count < 3 ? 4 : 0) - auditPenalty)
  );
  const label = score >= 76 ? "Evidence supported" : score >= 56 ? "Sourced profile" : "Source light triage";
  return {
    gaps: [...new Set(gaps)],
    score,
    label,
    coverage,
    targetAudit,
    conflictAudit,
    confidence: confidenceLabel(player),
    verified: verifiedLabel(player)
  };
}

function sourceUrgency(player) {
  const quality = qualityProfile(player);
  return player.relevance * 3 + player.momentum * 2 + player.aiScore * 2 + quality.gaps.length * 4 + (player.key ? 6 : 0);
}

const refreshedSourcePostureIds = [
  "muse-group",
  "hal-leonard",
  "musicnotes",
  "makemusic-cloud",
  "tonalenergy",
  "soundbrenner",
  "cifra-club",
  "loog",
  "coach-guitar",
  "piano-academy",
  "smule"
];

function totalPriority(player) {
  return player.relevance * 4 + player.momentum * 3 + player.aiScore * 3 + (player.key ? 7 : 0);
}

function allPlayersByPriority() {
  return [...players].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name));
}

function productFocusFor(player) {
  const text = [
    player.name,
    player.type,
    player.category,
    player.subcategory,
    player.description,
    player.ai,
    player.recent,
    player.tags.join(" ")
  ]
    .join(" ")
    .toLowerCase();

  let yousicianScore = 0;
  let guitarTunaScore = 0;

  if (["learning", "education"].includes(player.category)) yousicianScore += 2;
  if (player.category === "practice" && /lesson|learning|teacher|piano|music theory|practice plan|feedback|curriculum/.test(text)) {
    yousicianScore += 2;
  }
  if (player.category === "ai" && /feedback|practice|learning|lesson|audio|transcription|stem|chord/.test(text)) {
    yousicianScore += 2;
  }
  if (player.category === "signals" && /learning technology|education startup|edtech|app recognition|music learning|learning innovation/.test(text)) {
    yousicianScore += 1;
  }
  if (/direct competitor|learning app|music learning|onboarding|curriculum|assessment|certification|subscription learning|piano learning|multi-instrument/.test(text)) {
    yousicianScore += 1;
  }

  if (["practice", "hardware"].includes(player.category)) guitarTunaScore += 2;
  if (/\bguitartuna\b|guitar tuna|guitar|tuner|tuning|chord|tabs?|songsterr|ultimate guitar|song|repertoire|play-any-song|gear|hardware|retail|fender|gibson|yamaha|ukulele|bass/.test(text)) {
    guitarTunaScore += 2;
  }
  if (/creator|youtube|riff|strum|practice utility|transcription|stem|backing track|metronome|capo/.test(text)) {
    guitarTunaScore += 1;
  }

  if (player.category === "ai" && /feedback|practice|song|chord|audio|transcription|stem/.test(text)) {
    yousicianScore += 1;
    guitarTunaScore += 1;
  }

  const focuses = [];
  if (yousicianScore >= 2) focuses.push("yousician");
  if (guitarTunaScore >= 2) focuses.push("guitartuna");
  return focuses;
}

function productFocusLabel(player) {
  const focuses = productFocusFor(player);
  if (focuses.includes("yousician") && focuses.includes("guitartuna")) return "Yousician + GuitarTuna";
  if (focuses.includes("yousician")) return "Yousician";
  if (focuses.includes("guitartuna")) return "GuitarTuna";
  return "Broader ecosystem";
}

function matchesProductLensId(player, lensId) {
  if (lensId === "all") return true;
  const focuses = productFocusFor(player);
  if (lensId === "shared") {
    return focuses.includes("yousician") && focuses.includes("guitartuna");
  }
  return focuses.includes(lensId);
}

function productLensMatches(player) {
  return matchesProductLensId(player, state.selectedProductLens);
}

function studyByScope(pattern) {
  return (researchContext.studies || []).find((study) => pattern.test(`${study.scope} ${study.title}`)) || defaultResearchStudy();
}

function productLensResearchSummary() {
  const status = researchContext.status || researchContextFallback.status;
  const accessLabel =
    status.liveAccess === "blocked_by_atlassian_login"
      ? "Local context only; live Confluence import needs Atlassian login."
      : humanizeStatus(status.liveAccess || "local context");
  const marketStudy = studyByScope(/market|cross-product/i);
  const yousicianStudy = studyByScope(/yousician product|yousician users/i);
  const guitarTunaStudy = studyByScope(/guitartuna/i);

  if (state.selectedProductLens === "yousician") {
    const anchor = researchContext.categoryAnchors.learning || {};
    return {
      label: "Internal research: Yousician",
      headline: anchor.headline || "Guided learning and feedback matter",
      body:
        anchor.summary ||
        "Yousician users should be interpreted through guided progression, feedback, confidence, motivation and song-led practice.",
      study: yousicianStudy,
      accessLabel
    };
  }

  if (state.selectedProductLens === "guitartuna") {
    const anchor = researchContext.categoryAnchors.practice || {};
    return {
      label: "Internal research: GuitarTuna",
      headline: anchor.headline || "Songs, chords and self-guided practice drive habit",
      body:
        anchor.summary ||
        "GuitarTuna relevance should be interpreted through tuning, chords, song practice, repetition and independent guitar habits.",
      study: guitarTunaStudy,
      accessLabel
    };
  }

  if (state.selectedProductLens === "shared") {
    return {
      label: "Internal research: shared lens",
      headline: "Song-led beginner guitar behavior connects both products",
      body:
        (researchContext.marketPrinciples || []).slice(0, 2).join(" ") ||
        "Shared relevance is strongest where learning, song choice, confidence and practice utility overlap.",
      study: marketStudy,
      accessLabel
    };
  }

  return {
    label: "Internal research context",
    headline: "Loaded local Yousician, GuitarTuna and market research anchors",
    body:
      (researchContext.marketPrinciples || [])[0] ||
      "Use the product lenses as research-informed cuts; treat them as local context until live Confluence access is authenticated.",
    study: marketStudy,
    accessLabel
  };
}

function getDatabasePlayers() {
  const segment = databaseSegments.find((item) => item.id === state.dbSegment) || databaseSegments[0];
  const rows = getFilteredPlayers().filter((player) => segment.matches(player));
  return rows.sort((a, b) => {
    if (state.dbSort === "name") return a.name.localeCompare(b.name);
    return (
      databaseSortScore(b) - databaseSortScore(a) ||
      totalPriority(b) - totalPriority(a) ||
      a.name.localeCompare(b.name)
    );
  });
}

function matchesQuery(player) {
  if (!state.query.trim()) return true;
  const evidence = evidenceRecordFor(player);
  const evidenceSources = evidenceSourcesFor(player);
  const haystack = [
    player.name,
    player.type,
    player.subcategory,
    player.description,
    player.why,
    player.relationship,
    player.sourceStatus,
    strategicRole(player),
    taxonomyProfile(player).journey,
    taxonomyProfile(player).proximity,
    taxonomyProfile(player).decisionUse,
    researchOwner(player),
    sourceNeeds(player).join(" "),
    evidence.summary,
    (evidence.openQuestions || []).join(" "),
    evidenceSources.map((source) => `${source.title} ${source.type} ${source.scope}`).join(" "),
    player.tags.join(" ")
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(state.query.trim().toLowerCase());
}

function ecosystemLayerById(id) {
  return ecosystemLayers.find((layer) => layer.id === id) || null;
}

function ecosystemLayerForPlayer(player) {
  const text = `${player.name} ${player.type} ${player.subcategory} ${player.description} ${player.relationship} ${player.ownership} ${player.tags.join(" ")}`.toLowerCase();
  if (["learning", "practice"].includes(player.category) && (player.key || player.relevance >= 4)) return "core";
  if (/creator|educator|teacher|community|artist|band|lesson|school|discord|reddit|influencer|local/i.test(text)) return "people";
  if (player.category === "platforms" || /media|culture|youtube|tiktok|spotify|streaming|movie|documentary|festival|magazine|news|award/i.test(text)) return "culture";
  if (player.category === "signals" || /investor|vc|capital|funding|government|rights|publisher|label|payment|commerce|app store|infrastructure/i.test(text)) return "infrastructure";
  return "tools";
}

function ecosystemLayerMatches(player, layerId = state.ecosystemLayer) {
  return layerId === "all" || ecosystemLayerForPlayer(player) === layerId;
}

function getFilteredPlayers() {
  return journeyFilterBasePlayers().filter(
    (player) =>
      (state.selectedCategory === "all" || journeyCategoryFor(player).id === state.selectedCategory) &&
      ecosystemLayerMatches(player)
  );
}

function journeyFilterBasePlayers() {
  return players.filter((player) => productLensMatches(player) && player.relevance >= state.minRelevance && matchesQuery(player));
}

function getSelectedPlayer() {
  const filtered = getFilteredPlayers();
  const selected = players.find((player) => player.id === state.selectedPlayerId);
  if (selected && filtered.some((player) => player.id === selected.id)) return selected;
  if (filtered[0]) {
    state.selectedPlayerId = filtered[0].id;
    return filtered[0];
  }
  return players[0];
}

function createSvg(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function average(items, getter) {
  if (!items.length) return 0;
  return items.reduce((sum, item) => sum + getter(item), 0) / items.length;
}

function scoreToPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value * 20)));
}

function categoryMetrics() {
  const filtered = getFilteredPlayers();
  return journeyCategories.map((category) => {
    const items = filtered.filter((player) => journeyCategoryFor(player).id === category.id);
    const count = items.length;
    const relevance = scoreToPercent(average(items, (player) => player.relevance));
    const momentum = scoreToPercent(average(items, (player) => player.momentum));
    const ai = scoreToPercent(average(items, (player) => player.aiScore));
    const evidence = Math.round(average(items, (player) => qualityProfile(player).score));
    const keyCount = items.filter((player) => player.key).length;
    const pressure = Math.round(relevance * 0.34 + momentum * 0.24 + ai * 0.18 + evidence * 0.18 + Math.min(12, keyCount * 3));
    const topPlayers = [...items].sort((a, b) => totalPriority(b) - totalPriority(a)).slice(0, 8);
    return {
      ...category,
      count,
      relevance,
      momentum,
      ai,
      evidence,
      keyCount,
      pressure: Math.max(0, Math.min(100, pressure)),
      topPlayers
    };
  });
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(centerX, centerY, radius, startAngle, endAngle) {
  const start = polarToCartesian(centerX, centerY, radius, endAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    start.x.toFixed(2),
    start.y.toFixed(2),
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x.toFixed(2),
    end.y.toFixed(2)
  ].join(" ");
}

function renderKpis() {
  els.totalPlayers.textContent = players.length;
  els.keyPlayers.textContent = players.filter((player) => player.key).length;
  els.aiPlayers.textContent = players.filter((player) => player.aiScore >= 3).length;
  els.needsSource.textContent = sourceLibrary().length;
}

function renderFilters() {
  const productCounts = productLenses.reduce((acc, lens) => {
    acc[lens.id] = players.filter((player) => matchesProductLensId(player, lens.id)).length;
    return acc;
  }, {});

  if (els.productLensFilters) {
    els.productLensFilters.innerHTML = productLenses
      .map(
        (lens) => `
          <button
            class="product-lens-button ${state.selectedProductLens === lens.id ? "active" : ""}"
            type="button"
            data-product-lens="${lens.id}"
            title="${escapeHtml(lens.description)}"
          >
            <span>${escapeHtml(lens.shortLabel)}</span>
            <small>${productCounts[lens.id] || 0}</small>
          </button>
        `
      )
      .join("");

    els.productLensFilters.querySelectorAll("[data-product-lens]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedProductLens = button.dataset.productLens;
        markMapFilterChanged();
        if (state.view === "overview") {
          renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
        } else {
          renderAll();
          revealMapForFilteredView();
        }
      });
    });
  }

  if (els.productLensResearchNote) {
    const researchNote = productLensResearchSummary();
    els.productLensResearchNote.innerHTML = `
      <article>
        <span>${escapeHtml(researchNote.label)}</span>
        <strong>${escapeHtml(researchNote.headline)}</strong>
        <p>${escapeHtml(researchNote.body)}</p>
        <a href="${escapeHtml(researchNote.study.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(researchNote.study.title)}</a>
        <small>${escapeHtml(researchNote.accessLabel)}</small>
      </article>
    `;
  }

  const counts = players.reduce(
    (acc, player) => {
      if (!productLensMatches(player)) return acc;
      const journeyId = journeyCategoryFor(player).id;
      acc[journeyId] = (acc[journeyId] || 0) + 1;
      acc.all += 1;
      return acc;
    },
    { all: 0 }
  );

  const filterRows = [{ id: "all", name: "All journey steps", color: "#17191a" }, ...journeyCategories];
  els.categoryFilters.innerHTML = "";

  filterRows.forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter-pill ${state.selectedCategory === category.id ? "active" : ""}`;
    button.type = "button";
    button.style.setProperty("--pill-color", category.color);
    button.innerHTML = `<span>${category.name}</span><small>${counts[category.id] || 0}</small>`;
    button.addEventListener("click", () => {
      state.selectedCategory = category.id;
      markMapFilterChanged();
      if (state.view === "overview") {
        renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
      } else {
        renderAll();
        revealMapForFilteredView();
      }
    });
    els.categoryFilters.appendChild(button);
  });

  els.priorityRange.value = state.minRelevance;
  els.priorityValue.textContent = `${state.minRelevance}+`;
}

function resetWorkspaceFilters() {
  state.selectedCategory = "all";
  state.ecosystemLayer = "all";
  state.selectedProductLens = "all";
  state.minRelevance = 1;
  state.query = "";
  state.monitorSegment = "all";
  state.monitorSort = "priority";
  state.monitorQuery = "";
  state.dbSegment = "all";
  state.mapFocusMode = defaultMapFocusMode;
  state.mapZoomMode = defaultMapZoomMode;
  state.mapRecordLimit = defaultMapRecordLimit;
  state.mapRankMode = defaultMapRankMode;
  state.bubbleSizeMode = defaultBubbleSizeMode;
  state.quickFocus = null;
  if (els.searchInput) els.searchInput.value = "";
}

function markMapFilterChanged() {
  state.mapZoomMode = "auto";
}

function revealMapForFilteredView() {
  if (state.view !== "overview" || !window.matchMedia("(max-width: 760px)").matches) return;
  window.clearTimeout(revealMapForFilteredView.timer);
  revealMapForFilteredView.timer = window.setTimeout(() => {
    const wrap = document.querySelector(".map-wrap");
    if (!wrap) return;
    if (wrap.scrollWidth > wrap.clientWidth) {
      wrap.scrollLeft = Math.max(0, (wrap.scrollWidth - wrap.clientWidth) / 2);
    }
    wrap.scrollIntoView({ block: "center", behavior: preferredScrollBehavior() });
  }, 180);
}

function clearFilterById(filterId) {
  if (filterId === "query") state.query = "";
  if (filterId === "category") state.selectedCategory = "all";
  if (filterId === "ecosystemLayer") state.ecosystemLayer = "all";
  if (filterId === "product") state.selectedProductLens = "all";
  if (filterId === "relevance") state.minRelevance = 1;
  if (filterId === "monitorSegment") state.monitorSegment = "all";
  if (filterId === "monitorSort") state.monitorSort = "priority";
  if (filterId === "monitorQuery") state.monitorQuery = "";
  if (filterId === "database") state.dbSegment = "all";
  if (filterId === "mapFocus") state.mapFocusMode = defaultMapFocusMode;
  if (filterId === "mapZoom") state.mapZoomMode = defaultMapZoomMode;
  if (filterId === "mapLimit") state.mapRecordLimit = defaultMapRecordLimit;
  if (filterId === "mapRank") state.mapRankMode = defaultMapRankMode;
  if (filterId === "bubbleSize") state.bubbleSizeMode = defaultBubbleSizeMode;
  if (filterId === "quickFocus") state.quickFocus = null;
  if (filterId === "query" && els.searchInput) els.searchInput.value = "";
  markMapFilterChanged();
  if (state.view === "overview" && ["mapFocus", "mapZoom", "mapLimit", "mapRank", "bubbleSize"].includes(filterId)) {
    renderOverviewMapWorkspace({ revealMap: true, flashSummary: true });
    return;
  }
  renderAll();
}

function activeViewVisibleCount(basePlayers) {
  if (state.view === "overview") return mapVisiblePlayers(basePlayers).length;
  if (state.view === "database") return getDatabasePlayers().length;
  if (state.view === "key-players") {
    return monitorVisiblePlayers(basePlayers).length;
  }
  if (state.view === "relationships") return validationQueue().length;
  if (state.view === "sources") return sourceLibrary().length;
  return basePlayers.length;
}

function activeViewVisibleLabel() {
  if (state.view === "overview") return "on map";
  if (state.view === "key-players") return "in monitor";
  if (state.view === "sources") return "sources";
  if (state.view === "relationships") return "checks";
  return "records";
}

function renderActiveFilterStrip() {
  if (!els.activeFilterStrip) return;
  const chips = [];
  if (state.query.trim()) chips.push({ id: "query", label: "Search", value: state.query.trim() });
  if (state.selectedCategory !== "all") {
    chips.push({ id: "category", label: "Journey", value: journeyCategoryById(state.selectedCategory)?.shortName || state.selectedCategory });
  }
  if (state.ecosystemLayer !== "all") {
    chips.push({ id: "ecosystemLayer", label: "Layer filter", value: ecosystemLayerById(state.ecosystemLayer)?.shortLabel || state.ecosystemLayer });
  }
  if (state.selectedProductLens !== "all") {
    chips.push({
      id: "product",
      label: "Product lens",
      value: productLenses.find((lens) => lens.id === state.selectedProductLens)?.shortLabel || state.selectedProductLens
    });
  }
  if (state.minRelevance > 1) chips.push({ id: "relevance", label: "Yousician relevance", value: `${state.minRelevance}+` });
  const basePlayers = getFilteredPlayers();
  if (state.view === "overview") {
    if (state.mapFocusMode !== defaultMapFocusMode) chips.push({ id: "mapFocus", label: "Map", value: mapFocusModeById(state.mapFocusMode).label });
    if (!["auto", defaultMapZoomMode].includes(state.mapZoomMode)) chips.push({ id: "mapZoom", label: "View", value: mapZoomLabel() });
    const mapLimit = mapRecordLimitFor(basePlayers);
    const defaultLimit = Math.min(defaultMapRecordLimit, Math.max(1, basePlayers.length));
    if (mapLimit !== defaultLimit) {
      chips.push({ id: "mapLimit", label: "Map records", value: mapLimit >= basePlayers.length ? `All ${basePlayers.length}` : `${mapLimit}` });
    }
    if (state.mapRankMode !== defaultMapRankMode) {
      chips.push({ id: "mapRank", label: "Record ranking", value: mapRankModeById(state.mapRankMode).shortLabel });
    }
  }
  if (state.bubbleSizeMode !== defaultBubbleSizeMode) {
    chips.push({ id: "bubbleSize", label: "Bubble size metric", value: bubbleSizeModeById(state.bubbleSizeMode).shortLabel });
  }
  if (state.quickFocus) {
    chips.push({ id: "quickFocus", label: "Focus", value: state.quickFocus });
  }
  if (state.monitorSegment !== "all") {
    chips.push({ id: "monitorSegment", label: "Monitor segment", value: monitorSegmentById(state.monitorSegment).label });
  }
  if (state.view === "key-players" && state.monitorSort !== "priority") {
    chips.push({ id: "monitorSort", label: "Monitor sort", value: monitorSortModeById(state.monitorSort).label });
  }
  if (state.monitorQuery.trim()) chips.push({ id: "monitorQuery", label: "Monitor search", value: state.monitorQuery.trim() });
  if (state.dbSegment !== "all") chips.push({ id: "database", label: "Market database", value: databaseSegmentById(state.dbSegment).label });

  const visibleCount = activeViewVisibleCount(basePlayers);
  const activeCount = chips.length;
  els.activeFilterStrip.innerHTML = `
    <div class="filter-status-pill" aria-label="Current visible records">
      <strong>${visibleCount}</strong>
      <span>${activeViewVisibleLabel()}</span>
    </div>
    <div class="active-filter-chips">
      ${
        chips.length
          ? chips
              .map(
                (chip) => `
                  <button type="button" data-filter-clear="${escapeHtml(chip.id)}" title="Clear ${escapeHtml(chip.label)} filter">
                    <span>${escapeHtml(chip.label)}</span>
                    <strong>${escapeHtml(chip.value)}</strong>
                  </button>
                `
              )
              .join("")
          : `<span class="filter-chip-empty">${
              state.view === "overview"
                ? "Top 25 priority records"
                : state.view === "key-players"
                  ? "All monitor records; key profiles highlighted"
                  : "No active filters"
            }</span>`
      }
    </div>
    <button class="filter-clear-all" data-filter-clear-all type="button" ${activeCount ? "" : "disabled"}>Clear all</button>
  `;
  els.activeFilterStrip.querySelectorAll("[data-filter-clear]").forEach((button) => {
    button.addEventListener("click", () => clearFilterById(button.dataset.filterClear));
  });
  els.activeFilterStrip.querySelector("[data-filter-clear-all]")?.addEventListener("click", () => {
    resetWorkspaceFilters();
    if (state.view === "overview") {
      renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
      return;
    }
    renderAll();
  });
}

function renderLegend() {
  els.mapLegend.innerHTML = journeyCategories
    .map((category) => {
      const description = category.description.replace(/\.$/, "");
      return `<span class="legend-chip"><span class="legend-swatch" style="--chip:${category.color}"></span><span class="legend-copy"><strong>${escapeHtml(category.name)}</strong><small>${escapeHtml(description)}</small></span></span>`;
    })
    .join("");
}

function renderJourneyBlueprint() {
  if (!els.journeyBlueprint) return;
  const basePlayers = journeyFilterBasePlayers();
  const journeySteps = journeyCategories.filter((category) => category.step);
  els.journeyBlueprint.innerHTML = `
    ${journeySteps
      .map((category) => {
        const count = basePlayers.filter((player) => journeyCategoryFor(player).id === category.id).length;
        const active = state.selectedCategory === category.id;
        return `
          <button
            type="button"
            class="journey-blueprint-step ${active ? "is-active" : ""}"
            data-journey-step="${escapeHtml(category.id)}"
            style="--journey-color:${category.color}"
            aria-pressed="${active ? "true" : "false"}"
            aria-label="${escapeHtml(category.name)}. ${escapeHtml(category.description)}"
          >
            <span class="journey-blueprint-icon" aria-hidden="true">
              <span class="journey-icon-fallback">${escapeHtml(category.iconFallback)}</span>
              <i data-lucide="${escapeHtml(category.icon)}"></i>
            </span>
            <span class="journey-blueprint-card">
              <strong><span>${escapeHtml(category.step)}.</span> ${escapeHtml(category.shortName)}</strong>
              <small>${escapeHtml(category.description)}</small>
              <em>${count} records</em>
            </span>
          </button>
        `;
      })
      .join("")}
  `;

  els.journeyBlueprint.querySelectorAll("[data-journey-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = state.selectedCategory === button.dataset.journeyStep ? "all" : button.dataset.journeyStep;
      markMapFilterChanged();
      ensureSelectedPlayerVisibleInMap();
      if (state.view === "overview") {
        renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
      } else {
        renderAll();
        revealMapForFilteredView();
      }
    });
  });
}

function ecosystemGuideBasePlayers() {
  return journeyFilterBasePlayers().filter((player) => state.selectedCategory === "all" || journeyCategoryFor(player).id === state.selectedCategory);
}

function renderEcosystemGuide() {
  if (!els.ecosystemGuide) return;
  const basePlayers = ecosystemGuideBasePlayers();
  const layerRows = ecosystemLayers.map((layer) => {
    const items = basePlayers.filter((player) => ecosystemLayerForPlayer(player) === layer.id);
    return {
      ...layer,
      count: items.length,
      keyCount: items.filter((player) => player.key).length,
      topPlayers: [...items].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name)).slice(0, 3)
    };
  });

  els.ecosystemGuide.innerHTML = `
    <div class="ecosystem-guide-head">
      <div>
        <span class="section-kicker">Optional layer filter</span>
        <h3>Filter by distance from Yousician</h3>
        <p>Use this only when you want to isolate core habits, tools, people, culture, or infrastructure. The journey row and map remain the primary read.</p>
      </div>
      <button class="ecosystem-reset ${state.ecosystemLayer === "all" ? "is-active" : ""}" type="button" data-ecosystem-layer="all">
        All layers
      </button>
    </div>
    <div class="ecosystem-layer-list" aria-label="Ecosystem layer filters">
      ${layerRows
        .map(
          (layer) => `
            <button
              type="button"
              class="ecosystem-layer-row ${state.ecosystemLayer === layer.id ? "is-active" : ""}"
              data-ecosystem-layer="${escapeHtml(layer.id)}"
              style="--layer-color:${layer.color}"
            >
              <span><i data-lucide="${escapeHtml(layer.icon)}"></i></span>
              <strong>${escapeHtml(layer.label)}</strong>
              <small>${layer.count} records, ${layer.keyCount} key</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;

  els.ecosystemGuide.querySelectorAll("[data-ecosystem-layer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ecosystemLayer = state.ecosystemLayer === button.dataset.ecosystemLayer ? "all" : button.dataset.ecosystemLayer;
      if (button.dataset.ecosystemLayer === "all") state.ecosystemLayer = "all";
      markMapFilterChanged();
      ensureSelectedPlayerVisibleInMap();
      renderOverviewMapWorkspace({ includeFilters: true, refreshJourney: true, refreshSecondary: true, revealMap: true, flashSummary: true });
    });
  });
  els.ecosystemGuide.querySelectorAll("[data-guide-journey]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = state.selectedCategory === button.dataset.guideJourney ? "all" : button.dataset.guideJourney;
      markMapFilterChanged();
      ensureSelectedPlayerVisibleInMap();
      renderOverviewMapWorkspace({ includeFilters: true, refreshJourney: true, refreshSecondary: true, revealMap: true, flashSummary: true });
    });
  });
  els.ecosystemGuide.querySelectorAll("[data-guide-query]").forEach((button) => {
    button.addEventListener("click", () => {
      state.query = button.dataset.guideQuery;
      if (els.searchInput) els.searchInput.value = state.query;
      markMapFilterChanged();
      renderOverviewMapWorkspace({ includeFilters: true, refreshJourney: true, refreshSecondary: true, revealMap: true, flashSummary: true });
    });
  });
  els.ecosystemGuide.querySelectorAll("[data-guide-player]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPlayer(button.dataset.guidePlayer, { revealProfile: true });
      flashElement(els.ecosystemGuide);
    });
  });
}

function refreshLucideIcons() {
  const run = () => window.lucide?.createIcons?.();
  if (window.lucide?.createIcons) {
    run();
    return;
  }
  if (!refreshLucideIcons.queued) {
    refreshLucideIcons.queued = true;
    window.addEventListener("load", run, { once: true });
  }
}

function mapFocusModeById(id) {
  return mapFocusModes.find((mode) => mode.id === id) || mapFocusModes[0];
}

function mapPrioritySort(a, b) {
  return (
    Number(b.key) - Number(a.key) ||
    totalPriority(b) - totalPriority(a) ||
    b.relevance - a.relevance ||
    b.momentum - a.momentum ||
    a.name.localeCompare(b.name)
  );
}

function mapRecordLimitFor(basePlayers = players) {
  const max = Math.max(1, basePlayers.length);
  const value = Number.isFinite(Number(state.mapRecordLimit)) ? Number(state.mapRecordLimit) : defaultMapRecordLimit;
  return Math.max(1, Math.min(max, Math.round(value)));
}

function applyMapRecordLimit(value, basePlayers = getFilteredPlayers()) {
  const max = Math.max(1, basePlayers.length);
  const limit = Math.max(1, Math.min(max, Math.round(Number(value) || defaultMapRecordLimit)));
  state.mapRecordLimit = limit;
  if (limit >= max) {
    state.mapFocusMode = "all";
    state.mapZoomMode = "full";
    return;
  }
  state.mapFocusMode = defaultMapFocusMode;
  if (state.mapZoomMode === "full") state.mapZoomMode = defaultMapZoomMode;
}

function mapVisiblePlayers(basePlayers) {
  const mode = mapFocusModeById(state.mapFocusMode);
  const rankedPlayers = [...basePlayers].sort(mapRankSort);
  const limit = mapRecordLimitFor(rankedPlayers);
  const pool = ["all", defaultMapFocusMode].includes(state.mapFocusMode) ? rankedPlayers : rankedPlayers.filter(mode.matches);
  return separateConfusingPlayerPairs(pool.slice(0, Math.min(limit, pool.length)), 4);
}

function mapZoomLabel() {
  return {
    auto: "Auto fit",
    fit: "Fit map",
    selected: "Focus selected",
    full: "Show all records"
  }[state.mapZoomMode] || "Auto fit";
}

function mapHasActiveFilter(basePlayers, visiblePlayers) {
  return (
    visiblePlayers.length < players.length ||
    basePlayers.length < players.length ||
    state.selectedCategory !== "all" ||
    state.selectedProductLens !== "all" ||
    state.minRelevance > 1 ||
    Boolean(state.query.trim()) ||
    state.mapFocusMode !== "all"
  );
}

function mapFocusScale(basePlayers, visiblePlayers) {
  const isFocused =
    state.mapZoomMode === "fit" ||
    state.mapZoomMode === "selected" ||
    mapHasActiveFilter(basePlayers, visiblePlayers);
  if (!isFocused) return 1;
  if (state.mapZoomMode === "selected") return 1.55;
  if (visiblePlayers.length <= 6) return 1.55;
  if (visiblePlayers.length <= 12) return 1.44;
  if (visiblePlayers.length <= 30) return 1.34;
  if (visiblePlayers.length <= 48) return 1.22;
  return 1.12;
}

function normalizeMapViewBox(bounds, options = {}) {
  const stage = { x: 0, y: 0, width: 1000, height: 700 };
  const aspect = 1000 / 700;
  const padding = options.padding ?? 120;
  const minWidth = options.minWidth ?? 360;
  const minHeight = options.minHeight ?? 250;
  let x1 = bounds.x1 - padding;
  let y1 = bounds.y1 - padding;
  let x2 = bounds.x2 + padding;
  let y2 = bounds.y2 + padding;
  let width = Math.max(minWidth, x2 - x1);
  let height = Math.max(minHeight, y2 - y1);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  if (width / height > aspect) {
    height = width / aspect;
  } else {
    width = height * aspect;
  }
  if (options.maxWidth && width > options.maxWidth) {
    width = options.maxWidth;
    height = width / aspect;
  }
  if (options.maxHeight && height > options.maxHeight) {
    height = options.maxHeight;
    width = height * aspect;
  }
  let x = cx - width / 2;
  let y = cy - height / 2;
  const minX = stage.x - 60;
  const minY = stage.y - 50;
  const maxX = stage.x + stage.width + 60 - width;
  const maxY = stage.y + stage.height + 50 - height;
  x = Math.max(minX, Math.min(maxX, x));
  y = Math.max(minY, Math.min(maxY, y));
  return {
    x: Math.round(x),
    y: Math.round(y),
    width: Math.round(width),
    height: Math.round(height)
  };
}

function mapViewBoxFromNodes(nodeItems, basePlayers, visiblePlayers, compactMap) {
  const defaultBox = compactMap
    ? { x: 96, y: 24, width: 816, height: 584 }
    : { x: -42, y: -28, width: 1084, height: 759 };
  if (!nodeItems.length || state.mapZoomMode === "full") return defaultBox;
  const selectedNode = nodeItems.find((item) => item.player?.id === state.selectedPlayerId);
  const shouldFit =
    state.mapZoomMode === "fit" ||
    state.mapZoomMode === "selected" ||
    (state.mapZoomMode === "auto" && mapHasActiveFilter(basePlayers, visiblePlayers));
  if (!shouldFit) return defaultBox;
  const focusNodes = state.mapZoomMode === "selected" && selectedNode ? [selectedNode] : nodeItems;
  const focused = mapHasActiveFilter(basePlayers, visiblePlayers) || state.mapZoomMode === "fit" || state.mapZoomMode === "selected";
  const bounds = focusNodes.reduce(
    (acc, item) => ({
      x1: Math.min(acc.x1, item.x - item.radius),
      y1: Math.min(acc.y1, item.y - item.radius),
      x2: Math.max(acc.x2, item.x + item.radius),
      y2: Math.max(acc.y2, item.y + item.radius)
    }),
    { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity }
  );
  return normalizeMapViewBox(bounds, {
    padding: focused ? (focusNodes.length <= 2 ? 118 : focusNodes.length <= 8 ? 104 : focusNodes.length <= 18 ? 94 : 84) : 118,
    minWidth: state.mapZoomMode === "selected" ? 300 : focusNodes.length <= 3 ? 340 : focusNodes.length <= 8 ? 390 : focused ? 460 : 520,
    minHeight: state.mapZoomMode === "selected" ? 210 : focusNodes.length <= 3 ? 238 : focusNodes.length <= 8 ? 274 : focused ? 322 : 364,
    maxWidth: focused ? defaultBox.width : null,
    maxHeight: focused ? defaultBox.height : null
  });
}

function mapCategoryBoundsItems(categoryGroups, center) {
  return categoryGroups.flatMap(({ contextPlayers, layout }) => {
    if (!contextPlayers.length) return [];
    const visualSize = clusterVisualSize(layout, contextPlayers.length);
    const textPositions = clusterTextPositions({ ...layout, ...visualSize }, center);
    return [
      {
        x: layout.x,
        y: layout.y,
        radius: Math.max(visualSize.rx, visualSize.ry)
      },
      {
        x: layout.x,
        y: textPositions.labelY + 3,
        radius: 92
      }
    ];
  });
}

function setMapViewBox(svg, box, defaultBox = { x: 0, y: 0, width: 1000, height: 700 }, animated = true) {
  const value = `${box.x} ${box.y} ${box.width} ${box.height}`;
  svg.setAttribute("viewBox", value);
  svg.dataset.viewBox = value;
  document.body.dataset.mapZoomMode = state.mapZoomMode;
  document.body.dataset.mapZoomed =
    box.x === defaultBox.x && box.y === defaultBox.y && box.width === defaultBox.width && box.height === defaultBox.height
      ? "false"
      : "true";
  if (animated) {
    svg.classList.add("is-zooming");
    window.clearTimeout(setMapViewBox.timer);
    setMapViewBox.timer = window.setTimeout(() => svg.classList.remove("is-zooming"), 360);
  }
}

function ensureSelectedPlayerVisibleInMap() {
  const visiblePlayers = mapVisiblePlayers(getFilteredPlayers());
  if (visiblePlayers.length && !visiblePlayers.some((player) => player.id === state.selectedPlayerId)) {
    state.selectedPlayerId = visiblePlayers[0].id;
  }
}

function renderMapSummaryStrip() {
  if (!els.mapSummaryStrip) return;
  ensureSelectedPlayerVisibleInMap();
  const basePlayers = getFilteredPlayers();
  const filtered = mapVisiblePlayers(basePlayers);
  const selectedPlayer = getSelectedPlayer();
  const activeSizeMode = bubbleSizeModeById(state.bubbleSizeMode);
  const activeRankMode = mapRankModeById(state.mapRankMode);
  const executive = isExecutiveMode();
  const maxMapRecords = Math.max(1, basePlayers.length);
  const mapLimit = mapRecordLimitFor(basePlayers);
  const minMapRecords = Math.min(maxMapRecords, 4);
  const zoomButtons = [
    { id: "fit", label: "Fit map" },
    { id: "selected", label: "Focus selected" },
    { id: "full", label: `Show all ${basePlayers.length}` }
  ]
    .map((button) => {
      const active =
        (button.id === "fit" && state.mapZoomMode === "auto" && mapHasActiveFilter(basePlayers, filtered)) ||
        state.mapZoomMode === button.id;
      return `
        <button
          type="button"
          class="${active ? "is-active" : ""}"
          data-map-zoom="${escapeHtml(button.id)}"
          aria-pressed="${active ? "true" : "false"}"
        >${escapeHtml(button.label)}</button>
      `;
    })
    .join("");
  const sizeButtons = bubbleSizeModes
    .map((mode) => {
      const active = state.bubbleSizeMode === mode.id;
      return `
        <button
          type="button"
          class="${active ? "is-active" : ""}"
          data-bubble-size="${escapeHtml(mode.id)}"
          aria-pressed="${active ? "true" : "false"}"
          title="${escapeHtml(mode.note)}"
        >${escapeHtml(mode.shortLabel)}</button>
      `;
    })
    .join("");
  const rankButtons = mapRankModes
    .map((mode) => {
      const active = state.mapRankMode === mode.id;
      return `
        <button
          type="button"
          class="${active ? "is-active" : ""}"
          data-map-rank="${escapeHtml(mode.id)}"
          aria-pressed="${active ? "true" : "false"}"
          title="${escapeHtml(mode.note)}"
        >${escapeHtml(mode.shortLabel)}</button>
      `;
    })
    .join("");
  const volosTeaserButton = state.volosTeaserVisible
    ? `
      <button class="volos-map-teaser" type="button" data-volos-teaser aria-label="Open hidden Volos page">
        <img src="./assets/sonovia-volos-v-black.png" alt="" loading="lazy" />
        <span>Volos</span>
      </button>
    `
    : "";
  const sizeOrContext = executive
    ? `
      <div class="map-context-row" aria-label="Map sizing logic">
        <span>Bubble size means</span>
        <strong>${escapeHtml(activeSizeMode.label)}</strong>
        <small>${escapeHtml(activeSizeMode.note)}</small>
      </div>
    `
    : `
      <div class="map-size-row" aria-label="Bubble size mode">
        <span>Size bubbles by</span>
        <div>
          ${sizeButtons}
          ${volosTeaserButton}
        </div>
        <small>${escapeHtml(activeSizeMode.note)}</small>
      </div>
    `;
  const limitControl = `
    <div class="map-limit-row" aria-label="Visible records by ${escapeHtml(activeRankMode.label)}">
      <div>
        <span>Records shown</span>
        <strong>${mapLimit >= maxMapRecords ? `All ${maxMapRecords}` : `Top ${mapLimit}`}</strong>
      </div>
      <input
        type="range"
        min="${minMapRecords}"
        max="${maxMapRecords}"
        step="1"
        value="${mapLimit}"
        data-map-record-limit
        aria-label="Number of map records"
      />
      <div class="map-rank-row">
        <span>Records ranked by</span>
        <div>${rankButtons}</div>
      </div>
      <small>${escapeHtml(activeRankMode.label)}. ${escapeHtml(mapRankTieNote(activeRankMode.id))}</small>
    </div>
  `;
  els.mapSummaryStrip.innerHTML = `
    <div class="map-selected-card" aria-label="Selected record">
      <span>Selected record</span>
      ${logoMarkHtml(selectedPlayer, "map-selected-logo")}
      <strong>${escapeHtml(selectedPlayer.name)}</strong>
      <small>${escapeHtml(strategicRole(selectedPlayer))}</small>
      <div>
        <button type="button" data-map-selected-action="profile">Profile</button>
        <button type="button" data-map-selected-action="one-pager">Player brief</button>
      </div>
    </div>
    ${limitControl}
    ${sizeOrContext}
    <div class="map-zoom-row" aria-label="Map view controls">
      ${zoomButtons}
      <button type="button" class="map-reset-button" data-map-reset>Reset view</button>
    </div>
  `;

  const limitInput = els.mapSummaryStrip.querySelector("input[data-map-record-limit]");
  limitInput?.addEventListener("input", () => {
    const previousSelectedId = state.selectedPlayerId;
    applyMapRecordLimit(limitInput.value, basePlayers);
    const currentLimit = mapRecordLimitFor(basePlayers);
    const valueLabel = limitInput.closest(".map-limit-row")?.querySelector("strong");
    if (valueLabel) valueLabel.textContent = currentLimit >= maxMapRecords ? `All ${maxMapRecords}` : `Top ${currentLimit}`;
    ensureSelectedPlayerVisibleInMap();
    renderActiveFilterStrip();
    renderMap();
    scheduleMapCompanyPickerRender();
    if (state.selectedPlayerId !== previousSelectedId) renderProfile();
    syncInteractionState();
  });
  limitInput?.addEventListener("change", () => {
    renderOverviewMapWorkspace({ revealMap: false, flashSummary: false, deferPicker: true, updateProfile: false });
  });
  els.mapSummaryStrip.querySelectorAll("[data-bubble-size]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bubbleSizeMode = button.dataset.bubbleSize;
      state.mapRankMode = button.dataset.bubbleSize;
      renderOverviewMapWorkspace({ revealMap: true, flashSummary: true, deferPicker: true, updateProfile: false });
    });
  });
  els.mapSummaryStrip.querySelectorAll("[data-map-rank]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapRankMode = button.dataset.mapRank;
      renderOverviewMapWorkspace({ revealMap: true, flashSummary: true, deferPicker: true, updateProfile: false });
    });
  });
  els.mapSummaryStrip.querySelectorAll("[data-map-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextZoomMode = button.dataset.mapZoom;
      if (nextZoomMode === "full") {
        state.mapFocusMode = "all";
        state.mapRecordLimit = maxMapRecords;
      }
      state.mapZoomMode = nextZoomMode;
      renderOverviewMapWorkspace({ revealMap: true, flashSummary: true, deferPicker: true, updateProfile: false });
    });
  });
  els.mapSummaryStrip.querySelector("[data-map-reset]")?.addEventListener("click", () => {
    resetWorkspaceFilters();
    renderOverviewMapWorkspace({
      includeFilters: true,
      refreshJourney: true,
      refreshSecondary: true,
      revealMap: true,
      flashSummary: true,
      deferPicker: true,
      updateProfile: false
    });
  });
  els.mapSummaryStrip.querySelector("[data-volos-teaser]")?.addEventListener("click", (event) => {
    event.preventDefault();
    openVolosSideQuest();
  });
  els.mapSummaryStrip.querySelectorAll("[data-map-selected-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.mapSelectedAction === "one-pager") {
        switchView("one-pager");
        return;
      }
      els.profilePanel?.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
      flashElement(els.profilePanel);
    });
  });
}

function mapPickerSort(a, b) {
  return Number(b.id === state.selectedPlayerId) - Number(a.id === state.selectedPlayerId) ||
    mapRankScore(b) - mapRankScore(a) ||
    a.name.localeCompare(b.name);
}

function renderMapCompanyPicker() {
  if (!els.mapCompanyPicker) return;
  ensureSelectedPlayerVisibleInMap();
  const basePlayers = getFilteredPlayers();
  const visiblePlayers = mapVisiblePlayers(basePlayers).sort(mapPickerSort);
  const selectedPlayer = getSelectedPlayer();
  const fullMapActive = state.mapZoomMode === "full" && state.mapFocusMode === "all" && mapRecordLimitFor(basePlayers) >= basePlayers.length;
  els.mapCompanyPicker.innerHTML = `
    <div class="map-picker-head">
      <div>
        <span>Records in view</span>
        <strong>${visiblePlayers.length} in view</strong>
      </div>
      <button type="button" data-map-full-view ${fullMapActive ? "disabled" : ""}>Show all</button>
    </div>
    <div class="map-picker-list" aria-label="Companies visible in current map view">
      ${
        visiblePlayers
          .map(
            (player) => `
              <button
                class="map-picker-row ${player.id === selectedPlayer.id ? "is-selected" : ""} ${player.key ? "is-key" : ""}"
                type="button"
                data-map-picker-player="${escapeHtml(player.id)}"
                style="--company-color:${colorFor(player)}"
                title="${escapeHtml(player.name)}"
              >
                ${logoMarkHtml(player, "map-picker-logo")}
                <strong>${escapeHtml(player.name)}</strong>
                <small>${escapeHtml(strategicRole(player))}</small>
                <em>${player.key ? "Key" : isSignalOnlyRecord(player) ? "Signal" : "Track"}</em>
              </button>
            `
          )
          .join("") || emptyState("No companies match the current map filters.")
      }
    </div>
  `;
  els.mapCompanyPicker.querySelectorAll("[data-map-picker-player]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPlayer(button.dataset.mapPickerPlayer);
      flashElement(els.mapCompanyPicker);
    });
  });
  els.mapCompanyPicker.querySelector("[data-map-full-view]")?.addEventListener("click", () => {
    state.mapFocusMode = "all";
    state.mapZoomMode = "full";
    state.mapRecordLimit = Math.max(1, basePlayers.length);
    renderOverviewMapWorkspace({ revealMap: true, flashSummary: true, deferPicker: true, updateProfile: false });
  });
}

function renderCategoryLandscape() {
  if (!els.categoryLandscape) return;
  const metrics = categoryMetrics();
  const maxCount = Math.max(1, ...metrics.map((item) => item.count));
  const totalVisible = metrics.reduce((sum, item) => sum + item.count, 0);

  els.categoryLandscape.innerHTML = `
    <div class="landscape-head">
      <div>
        <span class="section-kicker">Portfolio landscape</span>
        <h3>Where the ecosystem is dense, hot, and well-evidenced</h3>
      </div>
      <span class="landscape-total">${totalVisible} visible records</span>
    </div>
    <div class="landscape-grid">
      ${metrics
        .map(
          (item) => `
            <article class="landscape-row ${item.count ? "" : "is-empty"}" style="--row-color:${item.color}; --density:${
            (item.count / maxCount) * 100
          }; --pressure:${item.pressure}; --relevance:${item.relevance}; --momentum:${item.momentum}; --ai:${item.ai}; --evidence:${item.evidence}">
              <div class="landscape-name">
                <span class="landscape-swatch"></span>
                <div>
                  <strong>${escapeHtml(item.shortName)}</strong>
                  <small>${item.count} records / ${item.keyCount} key</small>
                </div>
              </div>
              <div class="landscape-density" aria-label="${escapeHtml(item.shortName)} density"><span></span></div>
              <div class="landscape-bars">
                <span title="Average relevance"><i data-label="R"></i></span>
                <span title="Average momentum"><i data-label="M"></i></span>
                <span title="AI pressure"><i data-label="AI"></i></span>
                <span title="Evidence strength"><i data-label="E"></i></span>
              </div>
              <div class="landscape-players">
                ${
                  item.topPlayers.length
                    ? item.topPlayers
                        .map(
                          (player) =>
                            `<button type="button" data-landscape-player="${player.id}" title="${escapeHtml(player.name)}">${companyInlineHtml(player, { compact: 16, logoClassName: "company-inline-logo mini-inline-logo" })}</button>`
                        )
                        .join("")
                    : `<span>No match</span>`
                }
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  els.categoryLandscape.querySelectorAll("[data-landscape-player]").forEach((button) => {
    button.addEventListener("click", () => selectPlayer(button.dataset.landscapePlayer, { revealProfile: true }));
  });
}

function renderPortfolioVisual() {
  if (!els.portfolioVisual) return;
  const filtered = getFilteredPlayers();
  const lenses = [
    {
      label: "Core competition",
      note: "Direct learning and practice players that can take attention, habit, or subscription spend.",
      color: "#00d292",
      matches: (player) => ["learning", "practice"].includes(player.category) && (player.relevance >= 4 || player.key)
    },
    {
      label: "Habit and channels",
      note: "Gear, teachers, schools, and utilities that shape acquisition or trust before the app decision.",
      color: "#ffb84d",
      matches: (player) => ["hardware", "education"].includes(player.category) && (player.relevance >= 3 || player.momentum >= 3)
    },
    {
      label: "Future pressure",
      note: "AI, creation, funding, media, and rights signals that can reshape what learning competes with.",
      color: "#6e5cff",
      matches: (player) => ["ai", "creation", "signals"].includes(player.category) && (player.aiScore >= 3 || player.momentum >= 4 || player.relevance >= 4)
    }
  ];

  els.portfolioVisual.innerHTML = lenses
    .map((lens) => {
      const items = filtered.filter(lens.matches).sort((a, b) => totalPriority(b) - totalPriority(a));
      const pressure = Math.round(
        average(items, (player) => player.relevance) * 8 +
          average(items, (player) => player.momentum) * 6 +
          average(items, (player) => player.aiScore) * 5 +
          Math.min(22, items.filter((player) => player.key).length * 5)
      );
      const value = Math.max(8, Math.min(100, pressure));
      return `
        <article class="portfolio-band" style="--lens-color:${lens.color}; --lens-value:${value}">
          <div class="portfolio-band-head">
            <strong>${escapeHtml(lens.label)}</strong>
            <span>${items.length} players</span>
          </div>
          <div class="portfolio-meter"><span></span></div>
          <p>${escapeHtml(lens.note)}</p>
          <div class="portfolio-player-strip">
            ${
              items.length
                ? items
                    .slice(0, 12)
                    .map(
                      (player) =>
                        `<button type="button" data-portfolio-player="${player.id}" title="${escapeHtml(player.name)}" style="--player-color:${colorFor(player)}">${logoMarkHtml(player, "company-inline-logo mini-inline-logo")}</button>`
                    )
                    .join("")
                : `<span>No current match</span>`
            }
          </div>
        </article>
      `;
    })
    .join("");

  els.portfolioVisual.querySelectorAll("[data-portfolio-player]").forEach((button) => {
    button.addEventListener("click", () => selectPlayer(button.dataset.portfolioPlayer, { revealProfile: true }));
  });
}

function renderStrategicImplications() {
  if (!els.strategicImplications) return;
  const filtered = getFilteredPlayers();
  const coreThreats = filtered
    .filter((player) => ["learning", "practice"].includes(player.category) && (player.relevance >= 4 || player.key))
    .sort((a, b) => totalPriority(b) - totalPriority(a));
  const partnerTargets = filtered
    .filter((player) => /partner|channel|hardware|retail|school|teacher/i.test(`${player.relationship} ${player.type} ${player.subcategory}`))
    .sort((a, b) => totalPriority(b) - totalPriority(a));
  const aiComplement = filtered
    .filter((player) => player.aiScore >= 4 && /practice|stem|chord|transcription|feedback|utility|mastering/i.test(`${player.type} ${player.subcategory} ${player.ai}`))
    .sort((a, b) => totalPriority(b) - totalPriority(a));
  const aiSubstitution = filtered
    .filter((player) => player.aiScore >= 4 && /generation|prompt|creation disruptor|music disruptor/i.test(`${player.type} ${player.subcategory} ${player.relationship}`))
    .sort((a, b) => totalPriority(b) - totalPriority(a));
  const proofDebt = filtered
    .filter((player) => claimIntegrityFor(player).hasHypothesis || hasCriticalEvidenceGap(player))
    .sort((a, b) => sourceUrgency(b) - sourceUrgency(a));

  const implicationCards = [
    {
      label: "Defend the core habit",
      tone: "defend",
      count: coreThreats.length,
      body: "Learning and practice competitors are the closest risk because they compete for onboarding, repertoire, feedback, pricing, and repeat practice.",
      action: "Compare onboarding, retention loops, song catalog moments, and Appfigures trendlines before deciding product priorities.",
      players: coreThreats.slice(0, 5)
    },
    {
      label: "Build partner routes",
      tone: "partner",
      count: partnerTargets.length,
      body: "Hardware, retail, schools, teacher networks, and creator channels shape the learner before Yousician gets chosen.",
      action: "Use the relationship CSV to confirm owner, contact history, commercial sensitivity, and next intro path.",
      players: partnerTargets.slice(0, 5)
    },
    {
      label: "Separate AI helper from AI substitute",
      tone: "ai",
      count: aiComplement.length + aiSubstitution.length,
      body: "Practice AI can strengthen the learning journey; prompt-to-song AI may redefine what casual users mean by making music.",
      action: `${aiComplement.length} complement candidates and ${aiSubstitution.length} substitution signals need separate monitoring language.`,
      players: [...aiComplement.slice(0, 3), ...aiSubstitution.slice(0, 3)].slice(0, 5)
    },
    {
      label: "Close source gaps before board use",
      tone: "proof",
      count: proofDebt.length,
      body: "The dashboard now exposes where size, ownership, AI, and internal relationship claims are still not fully proved.",
      action: "Prioritize Appfigures, Similarweb, Crunchbase/official ownership, and Yousician relationship input.",
      players: proofDebt.slice(0, 5)
    }
  ];

  els.strategicImplications.innerHTML = implicationCards
    .map(
      (item) => `
        <article class="strategy-implication-card implication-${escapeHtml(item.tone)}">
          <header>
            <span>${escapeHtml(item.label)}</span>
            <strong>${item.count}</strong>
          </header>
          <p>${escapeHtml(item.body)}</p>
          <small>${escapeHtml(item.action)}</small>
          <div class="strategy-mini-strip">
            ${
              item.players.length
                ? item.players
                    .map(
                      (player) =>
                        `<button type="button" data-visual-player="${escapeHtml(player.id)}" style="--player-color:${colorFor(player)}">${companyInlineHtml(player, { compact: 16, logoClassName: "company-inline-logo mini-inline-logo" })}</button>`
                    )
                    .join("")
                : `<span>No current match</span>`
            }
          </div>
        </article>
      `
    )
    .join("");
  bindVisualPlayers(els.strategicImplications);
}

const mapCategoryLayouts = {
  discover: { x: 184, y: 184, angle: -142, arcRadius: 318, visibleLimit: 4, rx: 124, ry: 84 },
  start: { x: 304, y: 272, angle: -114, arcRadius: 258, visibleLimit: 5, rx: 132, ry: 88 },
  learn: { x: 442, y: 166, angle: -80, arcRadius: 190, visibleLimit: 6, rx: 148, ry: 98 },
  practice: { x: 598, y: 250, angle: -30, arcRadius: 182, visibleLimit: 6, rx: 158, ry: 102 },
  create: { x: 724, y: 458, angle: 42, arcRadius: 262, visibleLimit: 5, rx: 154, ry: 98 },
  share: { x: 826, y: 278, angle: 84, arcRadius: 318, visibleLimit: 4, rx: 124, ry: 84 },
  identity: { x: 792, y: 518, angle: 126, arcRadius: 328, visibleLimit: 4, rx: 124, ry: 84 },
  broader: { x: 294, y: 532, angle: 168, arcRadius: 326, visibleLimit: 4, rx: 146, ry: 88 }
};

function mapLayoutForCategory(category, index, center) {
  const fallbackAngle = -90 + index * (360 / journeyCategories.length);
  const fallbackRadius = category.orbit === 1 ? 196 : category.orbit === 2 ? 276 : 328;
  const layout = mapCategoryLayouts[category.id] || {
    angle: fallbackAngle,
    arcRadius: fallbackRadius,
    visibleLimit: category.orbit === 1 ? 4 : category.orbit === 2 ? 3 : 2
  };
  const angle = layout.angle ?? fallbackAngle;
  const radians = angle * (Math.PI / 180);
  return {
    ...layout,
    angle,
    x: layout.x ?? center.x + Math.cos(radians) * fallbackRadius,
    y: layout.y ?? center.y + Math.sin(radians) * fallbackRadius,
    arcRadius: layout.arcRadius ?? fallbackRadius,
    visibleLimit: layout.visibleLimit ?? (category.orbit === 1 ? 4 : category.orbit === 2 ? 3 : 2),
    rx: layout.rx ?? (category.orbit === 3 ? 112 : 128),
    ry: layout.ry ?? (category.orbit === 3 ? 74 : 84)
  };
}

function nodeOffsetsForCluster(count, clusterY, centerY) {
  const lowerHalf = clusterY > centerY;
  if (count <= 1) return [[0, 0]];
  if (count === 2) return [[-56, 0], [56, 0]];
  if (count === 3) {
    return lowerHalf
      ? [[0, 38], [-72, -26], [72, -26]]
      : [[0, -38], [-72, 26], [72, 26]];
  }
  if (count === 4) {
    return lowerHalf
      ? [[-74, -34], [74, -34], [-74, 42], [74, 42]]
      : [[-74, -42], [74, -42], [-74, 34], [74, 34]];
  }
  return lowerHalf
    ? [[-90, -40], [0, -46], [90, -40], [-54, 44], [54, 44]]
    : [[-90, 40], [0, 46], [90, 40], [-54, -44], [54, -44]];
}

function clusterPointPosition(index, total, layout) {
  if (total <= 1) return { x: layout.x, y: layout.y };
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const spread = clusterSpreadProfile(total);
  const rank = index + 1.15;
  const radius = Math.min(1.08, Math.sqrt(rank / total) + spread.radialLift);
  const angle = index * goldenAngle + (layout.angle * Math.PI) / 180;
  const x = layout.x + Math.cos(angle) * radius * layout.rx * spread.x;
  const y = layout.y + Math.sin(angle) * radius * layout.ry * spread.y;
  return { x, y };
}

function clusterSpreadProfile(total) {
  const density = Math.max(0, Math.min(1, (total - 8) / 16));
  return {
    x: 0.96 + density * 0.9,
    y: 0.9 + density * 0.74,
    ellipseX: 1.04 + density * 0.54,
    ellipseY: 1.03 + density * 0.44,
    gap: 7 + density * 8,
    radialLift: 0.02 + density * 0.09,
    iterations: 30 + Math.round(density * 30)
  };
}

function clusterVisualSize(layout, total) {
  if (total <= 1) return { rx: 82, ry: 56 };
  const spread = clusterSpreadProfile(total);
  return {
    rx: Math.round(layout.rx * spread.ellipseX),
    ry: Math.round(layout.ry * spread.ellipseY)
  };
}

function clampMapNodePosition(item) {
  const margin = item.radius + 18;
  item.x = Math.max(margin, Math.min(1000 - margin, item.x));
  item.y = Math.max(margin, Math.min(700 - margin, item.y));
}

function pullNodeIntoCluster(item, layout, profile, strength = 0.08) {
  const maxX = Math.max(90, layout.rx * (profile.ellipseX + 0.2));
  const maxY = Math.max(68, layout.ry * (profile.ellipseY + 0.18));
  const dx = item.x - layout.x;
  const dy = item.y - layout.y;
  const norm = Math.max(1, Math.hypot(dx / maxX, dy / maxY));
  if (norm > 1) {
    item.x = layout.x + dx / norm;
    item.y = layout.y + dy / norm;
    return;
  }
  item.x += (layout.x - item.x) * strength;
  item.y += (layout.y - item.y) * strength;
}

function nodeCollisionRadius(item) {
  return item.collisionRadius ?? item.radius;
}

function pushNodePairsApart(items, minGap, weight = 1) {
  for (let a = 0; a < items.length; a += 1) {
    for (let b = a + 1; b < items.length; b += 1) {
      const one = items[a];
      const two = items[b];
      const dx = two.x - one.x;
      const dy = two.y - one.y;
      const distance = Math.max(0.1, Math.hypot(dx, dy));
      const target = nodeCollisionRadius(one) + nodeCollisionRadius(two) + minGap;
      if (distance >= target) continue;
      const push = ((target - distance) / 2) * weight;
      const ux = dx / distance;
      const uy = dy / distance;
      one.x -= ux * push;
      one.y -= uy * push;
      two.x += ux * push;
      two.y += uy * push;
    }
  }
}

function pushNodesAwayFromHub(items, center) {
  items.forEach((item) => {
    const dx = item.x - center.x;
    const dy = item.y - center.y;
    const distance = Math.max(0.1, Math.hypot(dx, dy));
    const target = nodeCollisionRadius(item) + (isDenseFullMapView() ? 120 : 104);
    if (distance >= target) return;
    const push = target - distance;
    item.x += (dx / distance) * push;
    item.y += (dy / distance) * push;
  });
}

function pushNodeAwayFromRect(item, rect, gap = 12, weight = 1) {
  const radius = nodeCollisionRadius(item) + gap;
  const left = rect.x - radius;
  const right = rect.x + rect.width + radius;
  const top = rect.y - radius;
  const bottom = rect.y + rect.height + radius;
  if (item.x < left || item.x > right || item.y < top || item.y > bottom) return;
  if (rect.push === "down") {
    item.y += (bottom - item.y) * weight;
    return;
  }
  if (rect.push === "up") {
    item.y += (top - item.y) * weight;
    return;
  }
  const moves = [
    { dx: left - item.x, dy: 0 },
    { dx: right - item.x, dy: 0 },
    { dx: 0, dy: top - item.y },
    { dx: 0, dy: bottom - item.y }
  ].sort((a, b) => Math.hypot(a.dx, a.dy) - Math.hypot(b.dx, b.dy));
  item.x += moves[0].dx * weight;
  item.y += moves[0].dy * weight;
}

function pushNodesAwayFromProtectedRects(items, protectedRects, weight = 1) {
  if (!protectedRects?.length) return;
  items.forEach((item) => {
    protectedRects.forEach((rect) => pushNodeAwayFromRect(item, rect, 12, weight));
  });
}

function relaxClusterNodePositions(items, layout, center, protectedRects = []) {
  if (!items.length) return;
  const profile = clusterSpreadProfile(items.length);
  for (let iteration = 0; iteration < profile.iterations; iteration += 1) {
    pushNodePairsApart(items, profile.gap);
    pushNodesAwayFromHub(items, center);
    pushNodesAwayFromProtectedRects(items, protectedRects, 0.85);
    items.forEach((item) => {
      pullNodeIntoCluster(item, layout, profile, 0.018);
      clampMapNodePosition(item);
    });
  }
  for (let iteration = 0; iteration < 16; iteration += 1) {
    pushNodePairsApart(items, profile.gap + 5);
    pushNodesAwayFromHub(items, center);
    pushNodesAwayFromProtectedRects(items, protectedRects, 1);
    pushNodePairsApart(items, profile.gap + 7, 0.9);
    items.forEach(clampMapNodePosition);
  }
}

function relaxMapNodePositions(items, center, protectedRects = []) {
  if (items.length <= 1) return;
  for (let iteration = 0; iteration < 30; iteration += 1) {
    pushNodePairsApart(items, 7, 0.76);
    pushNodesAwayFromHub(items, center);
    pushNodesAwayFromProtectedRects(items, protectedRects, 0.7);
    items.forEach((item) => {
      const profile = clusterSpreadProfile(item.categoryPlayers.length);
      pullNodeIntoCluster(item, item.layout, profile, 0.016);
      clampMapNodePosition(item);
    });
  }
  for (let iteration = 0; iteration < 22; iteration += 1) {
    pushNodePairsApart(items, 11, 1);
    pushNodesAwayFromHub(items, center);
    pushNodesAwayFromProtectedRects(items, protectedRects, 1);
    pushNodePairsApart(items, 13, 0.9);
    items.forEach(clampMapNodePosition);
  }
}

function pullMapNodeToward(item, target, strength = 0.6) {
  item.x += (target.x - item.x) * strength;
  item.y += (target.y - item.y) * strength;
  clampMapNodePosition(item);
}

function separateConfusingMapNodes(items, center, protectedRects = []) {
  const fenderPlay = items.find((item) => item.player.id === "fender-play");
  const fender = items.find((item) => item.player.id === "fender");
  if (!fenderPlay || !fender) return;
  const minDistance = isDenseFullMapView() ? 126 : 176;
  const distance = Math.hypot(fenderPlay.x - fender.x, fenderPlay.y - fender.y);
  if (distance >= minDistance) return;
  const strength = isDenseFullMapView() ? 0.34 : 0.72;
  pullMapNodeToward(
    fenderPlay,
    {
      x: fenderPlay.layout.x + fenderPlay.layout.rx * 0.62,
      y: fenderPlay.layout.y - fenderPlay.layout.ry * 0.5
    },
    strength
  );
  pullMapNodeToward(
    fender,
    {
      x: fender.layout.x - fender.layout.rx * 0.58,
      y: fender.layout.y + fender.layout.ry * 0.46
    },
    strength
  );
  const pair = [fenderPlay, fender];
  const pairGap = Math.max(24, minDistance - nodeCollisionRadius(fenderPlay) - nodeCollisionRadius(fender));
  for (let iteration = 0; iteration < 12; iteration += 1) {
    pushNodePairsApart(pair, pairGap, 0.95);
    pushNodesAwayFromProtectedRects(pair, protectedRects, 0.9);
    pair.forEach(clampMapNodePosition);
  }
}

function isDenseFullMapView() {
  return (
    state.mapFocusMode === "all" &&
    state.mapZoomMode === "full" &&
    mapRecordLimitFor(players) >= players.length &&
    state.selectedCategory === "all" &&
    state.selectedProductLens === "all" &&
    state.minRelevance <= 1 &&
    !state.query.trim()
  );
}

function mapNodeRadius(player, focusScale = 1) {
  const radius = bubbleSizeRadius(player);
  const boostedRadius = Math.round(radius * focusScale);
  if (isDenseFullMapView()) {
    if (player.id === state.selectedPlayerId) return Math.min(24, boostedRadius + 3);
    if (player.key) return Math.min(20, Math.max(15, boostedRadius));
    return Math.min(14, Math.max(8, boostedRadius));
  }
  if (player.id === state.selectedPlayerId) return Math.min(34, boostedRadius + Math.round(3 * focusScale));
  return Math.min(31, boostedRadius);
}

function mapNodeCollisionRadius(player, visibleRadius, focusScale = 1, visibleCount = players.length) {
  const dense = visibleCount > 60;
  const selected = player.id === state.selectedPlayerId;
  const ringAllowance = selected ? 13 : player.key ? 9 : player.aiScore >= 4 ? 7 : 4;
  const focusAllowance = focusScale >= 1.18 && visibleCount <= 32 ? 4 : 0;
  return visibleRadius + (dense ? Math.min(5, ringAllowance) : ringAllowance + focusAllowance);
}

function shouldLabelMapNode(player, categoryPlayers, index, layout, visibleCount = Infinity, focusScale = 1) {
  return player.id === state.selectedPlayerId;
}

function mapLabelAnchor(nodeX, nodeY, clusterX, center, focusScale = 1) {
  const rightSide = nodeX >= clusterX;
  const lowerHalf = nodeY > center.y;
  const xOffset = 18 * focusScale;
  const lowerOffset = 22 * focusScale;
  const upperOffset = 16 * focusScale;
  return {
    x: nodeX + (rightSide ? xOffset : -xOffset),
    y: nodeY + (lowerHalf ? lowerOffset : -upperOffset),
    anchor: rightSide ? "start" : "end"
  };
}

function clusterTextPositions(layout, center) {
  const upperHalf = layout.y < center.y;
  const labelY = upperHalf
    ? Math.max(42, layout.y - layout.ry - 22)
    : Math.min(662, layout.y + layout.ry + 26);
  return {
    labelY,
    countY: upperHalf ? labelY + 15 : Math.min(678, labelY + 15)
  };
}

function svgLabelWidth(text, min = 68, max = 148, scale = 1) {
  return Math.max(min, Math.min(max, Math.round((String(text).length * 5.8 + 20) * scale)));
}

function svgLabelX(x, width, anchor) {
  if (anchor === "end") return x - width + 7;
  if (anchor === "start") return x - 7;
  return x - width / 2;
}

function rectsOverlap(a, b, padding = 0) {
  return !(
    a.x + a.width + padding < b.x ||
    b.x + b.width + padding < a.x ||
    a.y + a.height + padding < b.y ||
    b.y + b.height + padding < a.y
  );
}

function mapProtectedLabelRects(categoryGroups, center) {
  return categoryGroups.flatMap(({ category, contextPlayers, layout }) => {
    if (!contextPlayers.length) return [];
    const visualSize = clusterVisualSize(layout, contextPlayers.length);
    const textPositions = clusterTextPositions({ ...layout, ...visualSize }, center);
    const clusterLabel = mapCategoryLabel(category);
    const clusterWidth = svgLabelWidth(clusterLabel, 96, 180);
    return [
      {
        id: category.id,
        x: layout.x - clusterWidth / 2 - 18,
        y: textPositions.labelY - 31,
        width: clusterWidth + 36,
        height: 69,
        push: textPositions.labelY < center.y ? "down" : "up"
      }
    ];
  });
}

function mapLabelPriority(player) {
  return (
    Number(player.id === state.selectedPlayerId) * 10000 +
    Number(player.key) * 2500 +
    totalPriority(player) * 120 +
    player.relevance * 30 +
    player.aiScore * 18
  );
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mapLabelLeaderLine(item, rect) {
  const cardCenterX = rect.x + rect.width / 2;
  const cardCenterY = rect.y + rect.height / 2;
  const endX = clampNumber(item.x, rect.x, rect.x + rect.width);
  const endY = clampNumber(item.y, rect.y, rect.y + rect.height);
  const dx = endX - item.x;
  const dy = endY - item.y;
  const distance = Math.hypot(dx, dy);
  if (distance < item.radius + 9) return null;
  const edgeX = item.x + (dx / distance) * (item.radius + 4);
  const edgeY = item.y + (dy / distance) * (item.radius + 4);
  return {
    x1: Math.round(edgeX * 10) / 10,
    y1: Math.round(edgeY * 10) / 10,
    x2: Math.round((endX || cardCenterX) * 10) / 10,
    y2: Math.round((endY || cardCenterY) * 10) / 10
  };
}

function mapLabelPositions(item, width, height, scale, center) {
  const { player, x, y, clusterX } = item;
  const isSelected = player.id === state.selectedPlayerId;
  const preferredSide = isSelected ? (x >= center.x ? 1 : -1) : x >= clusterX ? 1 : -1;
  const otherSide = preferredSide * -1;
  const gap = Math.round(9 * scale);
  const farGap = gap + (isDenseFullMapView() ? 42 : 28);
  const verticalGap = Math.round(8 * scale);
  const radius = item.radius;
  const horizontal = (side, yOffset = 0) => ({
    x: side > 0 ? x + radius + gap : x - radius - gap - width,
    y: y - height / 2 + yOffset
  });
  const farHorizontal = (side, yOffset = 0) => ({
    x: side > 0 ? x + radius + farGap : x - radius - farGap - width,
    y: y - height / 2 + yOffset
  });
  const centered = (above = false) => ({
    x: x - width / 2,
    y: above ? y - radius - verticalGap - height : y + radius + verticalGap
  });
  const farCentered = (above = false) => ({
    x: x - width / 2,
    y: above ? y - radius - farGap - height : y + radius + farGap
  });
  const diagonal = (side, lower = true) => ({
    x: side > 0 ? x + radius + gap : x - radius - gap - width,
    y: y + (lower ? radius * 0.42 : -radius * 0.42) - height / 2
  });
  const farDiagonal = (side, lower = true) => ({
    x: side > 0 ? x + radius + farGap : x - radius - farGap - width,
    y: y + (lower ? radius + farGap * 0.35 : -radius - farGap * 0.35) - height / 2
  });
  const lowerFirst = y < center.y;
  return [
    horizontal(preferredSide),
    horizontal(otherSide),
    centered(lowerFirst ? false : true),
    centered(lowerFirst ? true : false),
    farHorizontal(preferredSide),
    farHorizontal(otherSide),
    farCentered(lowerFirst ? false : true),
    farCentered(lowerFirst ? true : false),
    farHorizontal(preferredSide, lowerFirst ? farGap * 0.28 : -farGap * 0.28),
    farHorizontal(otherSide, lowerFirst ? farGap * 0.28 : -farGap * 0.28),
    diagonal(preferredSide, lowerFirst),
    diagonal(preferredSide, !lowerFirst),
    diagonal(otherSide, lowerFirst),
    diagonal(otherSide, !lowerFirst),
    farDiagonal(preferredSide, lowerFirst),
    farDiagonal(preferredSide, !lowerFirst),
    farDiagonal(otherSide, lowerFirst),
    farDiagonal(otherSide, !lowerFirst)
  ];
}

function mapLabelCandidates(item, visibleCount, focusScale, center) {
  const { player, categoryPlayers, index, layout, x, y, clusterX } = item;
  if (!shouldLabelMapNode(player, categoryPlayers, index, layout, visibleCount, focusScale)) return null;
  const isSelected = player.id === state.selectedPlayerId;
  const labelText = compactName(player.name, isSelected ? 24 : focusScale >= 1.18 ? 20 : 18);
  const labelFontSize = Math.min(isSelected ? 15.2 : 13.8, 10.4 * focusScale);
  const scale = Math.min(focusScale, 1.42);
  const badgeHeight = Math.round((isSelected ? 30 : 18) * scale);
  const showSubLabel = isSelected && focusScale < 1.18;
  const cardHeight = badgeHeight + (showSubLabel ? Math.round(15 * Math.min(focusScale, 1.35)) : 0);
  const badgeWidth = svgLabelWidth(
    labelText,
    Math.round((player.key || isSelected ? 70 : 56) * scale),
    Math.round((isSelected ? 164 : 132) * scale),
    scale
  );
  const positions = mapLabelPositions(item, badgeWidth, cardHeight, scale, center);
  const seen = new Set();
  return positions
    .map((position, rank) => {
      const cardX = clampNumber(position.x, 24, 976 - badgeWidth);
      const cardY = clampNumber(position.y, 24, 676 - cardHeight);
      const key = `${Math.round(cardX)}:${Math.round(cardY)}`;
      if (seen.has(key)) return null;
      seen.add(key);
      const rect = {
        x: cardX,
        y: cardY,
        width: badgeWidth,
        height: cardHeight
      };
      return {
        badgeHeight,
        badgeWidth,
        cardHeight,
        cardX,
        cardY,
        labelFontSize,
        labelText,
        leader: mapLabelLeaderLine(item, rect),
        priority: mapLabelPriority(player) - rank * 3,
        rect,
        showSubLabel,
        textX: cardX + badgeWidth / 2,
        textY: cardY + badgeHeight / 2 + labelFontSize * 0.34
      };
    })
    .filter(Boolean);
}

function mapLabelCandidate(item, visibleCount, focusScale, center) {
  return mapLabelCandidates(item, visibleCount, focusScale, center)?.[0] || null;
}

function buildMapLabelPlan(nodeItems, visibleCount, focusScale, center, protectedRects = [], forcedSelectedLabel = null) {
  const selectedNode = nodeItems.find((item) => item.player.id === state.selectedPlayerId);
  const selectedBounds = selectedNode
    ? {
        x: selectedNode.x - selectedNode.radius - 8,
        y: selectedNode.y - selectedNode.radius - 8,
        width: selectedNode.radius * 2 + 16,
        height: selectedNode.radius * 2 + 16
      }
    : null;
  const nodeBounds = nodeItems.map((item) => {
    const radius = nodeCollisionRadius(item) + 3;
    return {
      id: item.player.id,
      x: item.x - radius,
      y: item.y - radius,
      width: radius * 2,
      height: radius * 2
    };
  });
  const accepted = [];
  const plan = new Map();
  nodeItems
    .map((item) => ({ item, labels: mapLabelCandidates(item, visibleCount, focusScale, center) }))
    .filter(({ labels }) => labels?.length)
    .sort((a, b) => b.labels[0].priority - a.labels[0].priority)
    .forEach(({ item, labels }) => {
      const isSelected = item.player.id === state.selectedPlayerId;
      const labelIsClear = (label) => {
        const overlapsLabel = accepted.some((rect) => rectsOverlap(label.rect, rect, focusScale >= 1.18 ? 12 : 8));
        const overlapsProtected = protectedRects.some((rect) => rectsOverlap(label.rect, rect, 6));
        const overlapsSelectedNode = selectedBounds && !isSelected && rectsOverlap(label.rect, selectedBounds, 8);
        const overlapsNode =
          nodeBounds.some((rect) => rect.id !== item.player.id && rectsOverlap(label.rect, rect, focusScale >= 1.18 ? 4 : 2));
        return !overlapsLabel && !overlapsProtected && !overlapsSelectedNode && !overlapsNode;
      };
      const chosen = isSelected && forcedSelectedLabel ? forcedSelectedLabel : labels.find((label) => labelIsClear(label)) || (isSelected ? labels[0] : null);
      if (!chosen) return;
      const label = chosen;
      accepted.push(label.rect);
      plan.set(item.player.id, label);
    });
  return plan;
}

function selectedMapLabelReservation(nodeItems, visibleCount, focusScale, center, protectedRects = []) {
  const selectedNode = nodeItems.find((item) => item.player.id === state.selectedPlayerId);
  if (!selectedNode) return null;
  const labels = mapLabelCandidates(selectedNode, visibleCount, focusScale, center);
  if (!labels?.length) return null;
  const nodeBounds = nodeItems
    .filter((item) => item.player.id !== state.selectedPlayerId)
    .map((item) => {
      const radius = nodeCollisionRadius(item) + 7;
      return {
        x: item.x - radius,
        y: item.y - radius,
        width: radius * 2,
        height: radius * 2
      };
    });
  return labels
    .map((label, index) => {
      const protectedHits = protectedRects.filter((rect) => rectsOverlap(label.rect, rect, 7)).length;
      const nodeHits = nodeBounds.filter((rect) => rectsOverlap(label.rect, rect, 5)).length;
      const edgePenalty = label.cardX <= 32 || label.cardX + label.badgeWidth >= 968 ? 1 : 0;
      return {
        label,
        score: protectedHits * 120 + nodeHits * 16 + edgePenalty * 5 + index
      };
    })
    .sort((a, b) => a.score - b.score)[0]?.label;
}

function createSpaceForSelectedMapLabel(nodeItems, visibleCount, focusScale, center, protectedRects = []) {
  const label = selectedMapLabelReservation(nodeItems, visibleCount, focusScale, center, protectedRects);
  if (!label) return null;
  const clearanceRect = {
    x: label.rect.x - 13,
    y: label.rect.y - 10,
    width: label.rect.width + 26,
    height: label.rect.height + 20
  };
  const movableItems = nodeItems.filter((item) => item.player.id !== state.selectedPlayerId);
  for (let iteration = 0; iteration < 18; iteration += 1) {
    movableItems.forEach((item) => {
      pushNodeAwayFromRect(item, clearanceRect, focusScale >= 1.18 ? 16 : 12, 0.88);
      clampMapNodePosition(item);
    });
    pushNodePairsApart(movableItems, isDenseFullMapView() ? 10 : 13, 0.48);
    pushNodesAwayFromProtectedRects(movableItems, protectedRects, 0.55);
    movableItems.forEach(clampMapNodePosition);
  }
  return { label, clearanceRect };
}

function createMapExitGhost(snapshot, center) {
  const ghost = createSvg("g", {
    class: `map-node map-node-exit ${snapshot.tier}`,
    "aria-hidden": "true",
    style: mapWaveStyle(snapshot.x, snapshot.y, center)
  });
  ghost.appendChild(
    createSvg("circle", {
      cx: snapshot.x,
      cy: snapshot.y,
      r: snapshot.radius + 8,
      class: "node-exit-ring",
      fill: "none",
      stroke: snapshot.color
    })
  );
  ghost.appendChild(createSvg("circle", { cx: snapshot.x, cy: snapshot.y, r: snapshot.radius, fill: snapshot.color }));
  if (snapshot.initials) {
    const init = createSvg("text", {
      x: snapshot.x,
      y: snapshot.y + 4,
      class: `node-initial ${snapshot.tier}`
    });
    init.textContent = snapshot.initials;
    ghost.appendChild(init);
  }
  return ghost;
}

function mapWaveMetrics(x, y, center) {
  const distance = Math.hypot(x - center.x, y - center.y);
  return {
    distance,
    delay: Math.min(260, Math.round(distance * 0.36))
  };
}

function mapWaveStyle(x, y, center) {
  const wave = mapWaveMetrics(x, y, center);
  return `--map-node-delay:${wave.delay}ms;--map-node-distance:${Math.round(wave.distance)};`;
}

function mapRenderSignature(basePlayers, filtered) {
  return [
    filtered.map((player) => player.id).join("|"),
    basePlayers.map((player) => player.id).join("|"),
    state.selectedCategory,
    state.selectedProductLens,
    state.minRelevance,
    String(state.query || "").trim().toLowerCase(),
    state.mapFocusMode,
    state.mapZoomMode,
    mapRecordLimitFor(basePlayers),
    state.mapRankMode,
    state.bubbleSizeMode,
    state.selectedPlayerId
  ].join("::");
}

function appendMapClusterLabel(layer, { category, categoryPlayers, contextPlayers, x, layout, visualSize, center }) {
  const contextCount = contextPlayers.length;
  if (!contextCount) return;
  const textPositions = clusterTextPositions({ ...layout, ...visualSize }, center);
  const clusterLabel = mapCategoryLabel(category);
  const clusterWidth = svgLabelWidth(clusterLabel, 96, 180);
  layer.appendChild(
    createSvg("rect", {
      x: x - clusterWidth / 2,
      y: textPositions.labelY - 16,
      width: clusterWidth,
      height: 39,
      rx: 10,
      class: "cluster-label-card",
      fill: category.color,
      style: `--cluster-color:${category.color}`
    })
  );
  const label = createSvg("text", {
    x,
    y: textPositions.labelY,
    class: "cluster-label"
  });
  label.textContent = clusterLabel;
  layer.appendChild(label);

  const count = createSvg("text", { x, y: textPositions.countY, class: "cluster-count" });
  const keyCount = contextPlayers.filter((player) => player.key).length;
  count.textContent =
    categoryPlayers.length === contextCount
      ? `${contextCount} records / ${keyCount} key`
      : `${categoryPlayers.length} shown / ${contextCount} total`;
  layer.appendChild(count);
}

function renderMap() {
  const svg = els.ecosystemMap;
  const fragment = document.createDocumentFragment();
  const compactMap = (svg.clientWidth || window.innerWidth) < 520;
  const center = { x: 500, y: 342 };
  const basePlayers = getFilteredPlayers();
  const filtered = mapVisiblePlayers(basePlayers);
  const focusScale = mapFocusScale(basePlayers, filtered);
  const previousNodePositions = previousMapNodePositions;
  const signature = mapRenderSignature(basePlayers, filtered);
  const mapHasRendered = Boolean(previousMapRenderSignature);
  const mapStateChanged = mapHasRendered && signature !== previousMapRenderSignature;
  document.body.dataset.mapFocusScale = String(Math.round(focusScale * 100));
  const byCategory = journeyCategories.map((category, index) => {
    const layout = mapLayoutForCategory(category, index, center);
    const categoryPlayers = filtered
      .filter((player) => journeyCategoryFor(player).id === category.id)
      .sort(mapRankSort);
    const categoryContextPlayers = basePlayers
      .filter((player) => journeyCategoryFor(player).id === category.id)
      .sort(mapRankSort);
    return {
      category,
      players: categoryPlayers,
      contextPlayers: categoryContextPlayers,
      hiddenCount: 0,
      x: layout.x,
      y: layout.y,
      layout,
      index
    };
  });
  const protectedRects = mapProtectedLabelRects(byCategory, center);
  const nodeItems = [];
  byCategory.forEach(({ players: categoryPlayers, layout }) => {
    const clusterItems = [];
    categoryPlayers.forEach((player, index) => {
      const point = clusterPointPosition(index, categoryPlayers.length, layout);
      const radius = mapNodeRadius(player, focusScale);
      const item = {
        player,
        x: point.x,
        y: point.y,
        radius,
        collisionRadius: mapNodeCollisionRadius(player, radius, focusScale, filtered.length),
        index,
        categoryPlayers,
        layout,
        clusterX: layout.x
      };
      nodeItems.push(item);
      clusterItems.push(item);
    });
    relaxClusterNodePositions(clusterItems, layout, center, protectedRects);
  });
  relaxMapNodePositions(nodeItems, center, protectedRects);
  separateConfusingMapNodes(nodeItems, center, protectedRects);
  const selectedLabelSpace = createSpaceForSelectedMapLabel(nodeItems, filtered.length, focusScale, center, protectedRects);
  const nodePositions = new Map(nodeItems.map((item) => [item.player.id, item]));
  const defaultBox = compactMap ? { x: 96, y: 24, width: 816, height: 584 } : { x: -42, y: -28, width: 1084, height: 759 };
  const viewBox = mapViewBoxFromNodes([...nodeItems, ...mapCategoryBoundsItems(byCategory, center)], basePlayers, filtered, compactMap);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  setMapViewBox(svg, viewBox, defaultBox);
  const metricsByCategory = new Map(categoryMetrics().map((item) => [item.id, item]));
  const labelPlan = buildMapLabelPlan(nodeItems, filtered.length, focusScale, center, protectedRects, selectedLabelSpace?.label);
  const currentNodeIds = new Set(nodeItems.map((item) => item.player.id));
  const exitingNodeSnapshots = [...previousNodePositions.values()].filter((item) => !currentNodeIds.has(item.id));
  const enteringNodeCount = nodeItems.filter((item) => !previousNodePositions.has(item.player.id)).length;
  const shouldShowMapImpact = mapStateChanged || (mapHasRendered && (enteringNodeCount > 0 || exitingNodeSnapshots.length > 0));

  const defs = createSvg("defs");
  const radial = createSvg("radialGradient", { id: "mapGlow", cx: "50%", cy: "50%", r: "60%" });
  radial.appendChild(createSvg("stop", { offset: "0%", "stop-color": "#ffffff", "stop-opacity": "1" }));
  radial.appendChild(createSvg("stop", { offset: "72%", "stop-color": "#f7fbf8", "stop-opacity": "1" }));
  radial.appendChild(createSvg("stop", { offset: "100%", "stop-color": "#edf4ef", "stop-opacity": "1" }));
  defs.appendChild(radial);
  fragment.appendChild(defs);
  fragment.appendChild(createSvg("rect", { x: 16, y: 18, width: 968, height: 664, rx: 28, class: "map-stage" }));

  const lensLayer = createSvg("g", { class: "map-lens-field-layer" });
  [
    {
      className: "learn",
      d: "M92 112 C188 46 392 56 486 132 C432 244 272 324 122 282 C54 263 42 158 92 112Z"
    },
    {
      className: "practice",
      d: "M514 126 C626 50 848 72 910 158 C956 224 902 330 770 354 C636 378 526 276 514 126Z"
    },
    {
      className: "create",
      d: "M176 474 C294 370 484 400 556 514 C642 424 818 392 908 478 C974 540 896 644 676 656 C452 668 230 642 154 570 C124 548 130 514 176 474Z"
    }
  ].forEach((field) => {
    lensLayer.appendChild(createSvg("path", { d: field.d, class: `map-lens-field ${field.className}` }));
  });
  fragment.appendChild(lensLayer);

  [
    [144, "core overlap"],
    [228, "adjacent ecosystem"],
    [306, "market signals"]
  ].forEach(([radius, label], index) => {
    fragment.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: radius, class: "map-ring" }));
    const ringLabel = createSvg("text", { x: center.x + radius - 10, y: center.y - 8 - index * 12, class: "ring-label" });
    ringLabel.textContent = label;
    fragment.appendChild(ringLabel);
  });

  const arcLayer = createSvg("g", { class: "category-arc-layer" });
  fragment.appendChild(arcLayer);
  byCategory.forEach(({ category, layout }) => {
    const metric = metricsByCategory.get(category.id);
    const spread = state.selectedCategory === "all" ? 18 : 24;
    const arc = createSvg("path", {
      d: describeArc(center.x, center.y, layout.arcRadius, layout.angle - spread, layout.angle + spread),
      class: "category-arc",
      stroke: category.color,
      "stroke-width": Math.max(4, Math.round((metric?.pressure || 0) / 14)),
      opacity: 0.18 + (metric?.pressure || 0) / 260
    });
    const arcTitle = createSvg("title");
    arcTitle.textContent = `${category.name} journey lane. This is not a company relationship line.`;
    arc.appendChild(arcTitle);
    arcLayer.appendChild(arc);
  });

  const connectionLayer = createSvg("g", { class: "connection-layer" });
  fragment.appendChild(connectionLayer);

  if (shouldShowMapImpact) {
    const impactLayer = createSvg("g", { class: "map-impact-layer", "aria-hidden": "true" });
    [0, 1, 2].forEach((index) => {
      impactLayer.appendChild(
        createSvg("circle", {
          cx: center.x,
          cy: center.y,
          r: 64,
          class: `map-impact-ring map-impact-ring-${index + 1}`
        })
      );
    });
    fragment.appendChild(impactLayer);
  }

  byCategory.forEach(({ category, players: categoryPlayers, contextPlayers, hiddenCount, x, y, layout }) => {
    const contextCount = contextPlayers.length;
    if (!contextCount && state.selectedCategory !== "all") return;
    if (!contextCount && state.selectedCategory === "all") return;
    const visualCount = Math.max(categoryPlayers.length, contextCount);
    const visualSize = clusterVisualSize(layout, visualCount);

    const cluster = createSvg("g", {
      class: `map-cluster-group ${categoryPlayers.length ? "has-visible-nodes" : "is-context-only"}`
    });
    const ellipse = createSvg("ellipse", {
      cx: x,
      cy: y,
      rx: visualCount > 1 ? visualSize.rx : 82,
      ry: visualCount > 1 ? visualSize.ry : 56,
      class: "map-cluster",
      fill: category.color,
      stroke: category.color,
      opacity: categoryPlayers.length ? 0.16 : 0.09
    });
    cluster.appendChild(ellipse);

    fragment.appendChild(cluster);

    categoryPlayers.forEach((player) => {
      const nodeItem = nodePositions.get(player.id);
      const nodeX = nodeItem?.x ?? layout.x;
      const nodeY = nodeItem?.y ?? layout.y;
      const tier = priorityTier(player);
      const isSelected = player.id === state.selectedPlayerId;
      const isEntering = !previousNodePositions.has(player.id);
      const nodeHasLogoMark = shouldShowMapLogo(player, filtered.length, focusScale, isSelected);
      const nodeLogoUrl = nodeHasLogoMark ? logoUrlForPlayer(player, 128) : "";
      if (player.key || isSelected) {
        const connection = createSvg("line", {
          x1: center.x,
          y1: center.y,
          x2: nodeX,
          y2: nodeY,
          class: `connection ${tier} ${player.relevance >= 5 ? "strong" : ""} ${isSelected ? "selected" : ""}`
        });
        connectionLayer.appendChild(connection);
      }

      const nodeAttrs = {
        class: `map-node map-node-${svgSafeId(player.id)} ${tier} ${isSelected ? "selected" : ""} ${nodeHasLogoMark ? "has-brand-logo" : ""} ${nodeLogoUrl ? "has-brand-image" : "has-brand-fallback"}`,
        tabindex: "0",
        role: "button",
        "aria-label": `${player.name}, ${player.relevance} of 5 relevance`,
        "data-id": player.id
      };
      if (isEntering) {
        nodeAttrs.class += " map-node-enter";
        nodeAttrs.style = mapWaveStyle(nodeX, nodeY, center);
      } else if (mapStateChanged) {
        const previousPosition = previousNodePositions.get(player.id);
        const fromX = previousPosition ? Math.round((previousPosition.x - nodeX) * 10) / 10 : 0;
        const fromY = previousPosition ? Math.round((previousPosition.y - nodeY) * 10) / 10 : 0;
        nodeAttrs.class += " map-node-update";
        nodeAttrs.style = `${mapWaveStyle(nodeX, nodeY, center)}--map-node-from-x:${fromX}px;--map-node-from-y:${fromY}px;`;
      }
      const node = createSvg("g", nodeAttrs);
      const title = createSvg("title");
      title.textContent = `${player.name} / ${strategicRole(player)} / ${bubbleSizeBasis(player)} / R${player.relevance} M${player.momentum} AI${player.aiScore}`;
      node.appendChild(title);
      const radius = nodeItem?.radius ?? mapNodeRadius(player, focusScale);
      node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 16, class: "node-hit" }));
      if (isSelected) {
        node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 15, class: "node-halo", fill: journeyColorFor(player) }));
      }
      const quality = qualityProfile(player);
      if (player.key || isSelected) {
        node.appendChild(
          createSvg("circle", {
            cx: nodeX,
            cy: nodeY,
            r: radius + 6,
            class: `node-evidence-ring evidence-${quality.coverage.status}`,
            fill: "none",
            stroke: journeyColorFor(player),
            "stroke-dasharray": `${Math.max(5, Math.round(quality.score / 8))} 5`
          })
        );
      }
      if ((player.key || isSelected) && player.aiScore >= 4) {
        node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 10, class: "node-ai-ring", fill: "none" }));
      }
      node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius, fill: journeyColorFor(player) }));
      if (nodeHasLogoMark) {
        const logoRadius = Math.max(6, Math.min(radius - 2, Math.max(8, Math.round(radius * (isSelected ? 0.72 : 0.68)))));
        const clipId = `map-logo-clip-${svgSafeId(player.id)}`;
        const clip = createSvg("clipPath", { id: clipId });
        clip.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: logoRadius }));
        defs.appendChild(clip);
        node.appendChild(
          createSvg("circle", {
            cx: nodeX,
            cy: nodeY,
            r: logoRadius + 5,
            class: "node-logo-plate",
            style: `--node-color:${journeyColorFor(player)}`
          })
        );
        node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: logoRadius, class: "node-logo-mask-bg" }));
        const fallbackFontSize = Math.min(isSelected ? 12 : 10.2, logoRadius * 0.92);
        const fallback = createSvg("text", {
          x: nodeX,
          y: nodeY + 3,
          class: "node-initial node-logo-fallback",
          style: `font-size:${fallbackFontSize.toFixed(1)}px`
        });
        fallback.textContent = initials(player.name);
        node.appendChild(fallback);
        if (nodeLogoUrl) {
          node.appendChild(
            createSvg("image", {
              x: nodeX - logoRadius,
              y: nodeY - logoRadius,
              width: logoRadius * 2,
              height: logoRadius * 2,
              href: nodeLogoUrl,
              class: "node-logo-image",
              "clip-path": `url(#${clipId})`,
              "data-logo-domain": logoDomainLabel(player),
              preserveAspectRatio: "xMidYMid meet"
            })
          );
        }
        const subtype = logoSubtypeBadge(player);
        if (subtype) {
          const badgeRadius = Math.max(5.5, Math.min(8, logoRadius * 0.38));
          const badgeX = nodeX + logoRadius * 0.62;
          const badgeY = nodeY + logoRadius * 0.62;
          const badgeInk = player.id === "fender-play" ? "#ffffff" : "#7b2d1d";
          node.appendChild(
            createSvg("circle", {
              cx: badgeX,
              cy: badgeY,
              r: badgeRadius,
              class: "node-logo-subtype-badge",
              style: `--badge-color:${player.id === "fender-play" ? "#10231f" : "#fff3df"}; --badge-ink:${
                badgeInk
              }`
            })
          );
          const subtypeText = createSvg("text", {
            x: badgeX,
            y: badgeY + 2,
            class: "node-logo-subtype-text",
            style: `font-size:${Math.max(3.8, Math.min(5.2, badgeRadius * 0.72)).toFixed(1)}px; fill:${badgeInk}`
          });
          subtypeText.textContent = subtype === "PLAY" ? "P" : "G";
          node.appendChild(subtypeText);
        }
      }
      if (player.key || isSelected || tier === "focus") {
        const initFontSize = Math.min(isSelected ? 15 : 13.5, (tier === "signal" ? 8.6 : 9.4) * focusScale);
        const init = createSvg("text", {
          x: nodeX,
          y: nodeY + (tier === "signal" ? 3 : 4) * focusScale,
          class: `node-initial ${tier} ${nodeHasLogoMark ? "has-node-logo" : ""}`,
          style: `font-size:${initFontSize.toFixed(1)}px`
        });
        init.textContent = initials(player.name);
        node.appendChild(init);
      }
      const labelInfo = labelPlan.get(player.id);
      if (labelInfo) {
        const { badgeHeight, badgeWidth, cardHeight, cardX, cardY, labelFontSize, labelText, textX, textY } = labelInfo;
        if (labelInfo.leader) {
          node.appendChild(
            createSvg("line", {
              x1: labelInfo.leader.x1,
              y1: labelInfo.leader.y1,
              x2: labelInfo.leader.x2,
              y2: labelInfo.leader.y2,
              class: `node-label-link ${isSelected ? "is-selected-label-link" : player.key ? "is-key" : "is-context"}`,
              style: `--label-color:${journeyColorFor(player)}`
            })
          );
        }
        if (isSelected) {
          node.appendChild(
            createSvg("rect", {
              x: cardX - 10,
              y: cardY - 8,
              width: badgeWidth + 20,
              height: (cardHeight || badgeHeight) + 16,
              rx: 12,
              class: "selected-label-space",
              fill: journeyColorFor(player),
              style: `--label-color:${journeyColorFor(player)}`
            })
          );
        }
        node.appendChild(
          createSvg("rect", {
            x: cardX,
            y: cardY,
            width: badgeWidth,
            height: cardHeight || badgeHeight,
            rx: 7,
            class: `node-label-card ${isSelected ? "is-selected-label" : player.key ? "is-key" : "is-context"}`,
            fill: journeyColorFor(player),
            style: `--label-color:${journeyColorFor(player)}`
          })
        );
        const name = createSvg("text", {
          x: textX,
          y: textY,
          class: "node-label key-node-label",
          style: `font-size:${labelFontSize.toFixed(1)}px`,
          "text-anchor": "middle"
        });
        name.textContent = labelText;
        node.appendChild(name);
        if (labelInfo.showSubLabel) {
          const sub = createSvg("text", {
            x: textX,
            y: textY + 13 * Math.min(focusScale, 1.35),
            class: "node-sub selected-node-sub",
            style: `font-size:${Math.min(11.8, 8.4 * focusScale).toFixed(1)}px`,
            "text-anchor": "middle"
          });
          sub.textContent = compactName(strategicRole(player), 24);
          node.appendChild(sub);
        }
      }
      node.addEventListener("click", () => {
        selectPlayer(player.id);
        flashElement(els.mapSummaryStrip);
      });
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectPlayer(player.id);
          flashElement(els.mapSummaryStrip);
        }
      });
      fragment.appendChild(node);
    });
  });

  const clusterLabelLayer = createSvg("g", { class: "cluster-label-layer" });
  byCategory.forEach(({ category, players: categoryPlayers, contextPlayers, x, layout }) => {
    if (!contextPlayers.length) return;
    const visualCount = Math.max(categoryPlayers.length, contextPlayers.length);
    const visualSize = clusterVisualSize(layout, visualCount);
    appendMapClusterLabel(clusterLabelLayer, { category, categoryPlayers, contextPlayers, x, layout, visualSize, center });
  });
  fragment.appendChild(clusterLabelLayer);

  if (exitingNodeSnapshots.length) {
    const exitLayer = createSvg("g", { class: "map-node-exit-layer" });
    exitingNodeSnapshots.slice(0, 80).forEach((snapshot) => {
      exitLayer.appendChild(createMapExitGhost(snapshot, center));
    });
    fragment.appendChild(exitLayer);
  }

  const hub = createSvg("g", {
    class: `map-hub ${state.volosTeaserVisible ? "is-open" : ""}`,
    "aria-label": "Yousician strategic center. Press to briefly reveal the hidden Volos mark.",
    tabindex: "0",
    role: "button",
    "aria-pressed": state.volosTeaserVisible ? "true" : "false"
  });
  const hubTitle = createSvg("title");
  hubTitle.textContent = "Briefly reveal the hidden Volos mark";
  hub.appendChild(hubTitle);
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: 70, class: "hub-glow" }));
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: 52, class: "hub" }));
  const hubClipId = "map-yousician-hub-logo";
  const hubClip = createSvg("clipPath", { id: hubClipId });
  hubClip.appendChild(createSvg("circle", { cx: center.x, cy: center.y - 17, r: 16 }));
  defs.appendChild(hubClip);
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y - 17, r: 20, class: "hub-logo-plate" }));
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y - 17, r: 16, class: "hub-logo-bg" }));
  hub.appendChild(
    createSvg("image", {
      x: center.x - 16,
      y: center.y - 33,
      width: 32,
      height: 32,
      href: yousicianLogoUrl(128),
      class: "hub-logo-image",
      "clip-path": `url(#${hubClipId})`,
      preserveAspectRatio: "xMidYMid meet"
    })
  );
  const hubText = createSvg("text", { x: center.x, y: center.y + 16, class: "hub-label hub-word" });
  hubText.textContent = "Strategic";
  hub.appendChild(hubText);
  const hubSub = createSvg("text", { x: center.x, y: center.y + 31, class: "hub-label hub-sub" });
  hubSub.textContent = "center";
  hub.appendChild(hubSub);
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: 62, class: "hub-hit" }));
  const yousicianLookerLink = createSvg("g", {
    class: "hub-yousician-link",
    "aria-label": "Open Yousician Looker board",
    tabindex: "0",
    role: "link"
  });
  const yousicianLookerTitle = createSvg("title");
  yousicianLookerTitle.textContent = "Open Yousician Looker board";
  yousicianLookerLink.appendChild(yousicianLookerTitle);
  yousicianLookerLink.appendChild(createSvg("circle", { cx: center.x, cy: center.y - 17, r: 25, class: "hub-yousician-hit" }));
  yousicianLookerLink.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openYousicianLookerBoard();
  });
  yousicianLookerLink.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      openYousicianLookerBoard();
    }
  });
  hub.appendChild(yousicianLookerLink);
  hub.addEventListener("click", (event) => {
    event.stopPropagation();
    showVolosTeaser();
  });
  hub.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showVolosTeaser();
    }
  });
  fragment.appendChild(hub);
  svg.replaceChildren(fragment);
  if (exitingNodeSnapshots.length) {
    window.clearTimeout(renderMap.exitCleanupTimer);
    renderMap.exitCleanupTimer = window.setTimeout(() => {
      svg.querySelectorAll(".map-node-exit-layer").forEach((layer) => layer.remove());
    }, 720);
  }
  previousMapNodePositions = new Map(
    nodeItems.map((item) => [
      item.player.id,
      {
        id: item.player.id,
        initials: initials(item.player.name),
        x: item.x,
        y: item.y,
        radius: item.radius,
        color: journeyColorFor(item.player),
        tier: priorityTier(item.player)
      }
    ])
  );
  previousMapRenderSignature = signature;
}

function renderProfile() {
  const player = getSelectedPlayer();
  const category = categoryById(player.category);
  const quality = qualityProfile(player);
  const taxonomy = taxonomyProfile(player);
  const executive = isExecutiveMode();
  const activeRating = ratingForPlayer(player);
  const validation = internalValidationFor(player);
  const posture = executivePostureFor(player, taxonomy, validation);
  els.profilePanel.innerHTML = `
    <div class="profile-top">
      ${logoMarkHtml(player, "avatar", { style: `--avatar-color:${category.color}` })}
      <div>
        <h2>${player.name}</h2>
        <div class="profile-meta">${player.type} / ${category.name}</div>
      </div>
      <div class="profile-score">
        <strong>${escapeHtml(activeRating.display)}</strong>
        <span>${escapeHtml(activeRating.shortLabel)}</span>
      </div>
    </div>
    <div class="badge-row">
      ${player.key ? `<span class="badge key">Key player</span>` : ""}
      <span class="badge">${executive ? escapeHtml(taxonomy.role) : escapeHtml(player.relationship)}</span>
      <span class="badge">Footprint: ${escapeHtml(globalFootprintFor(player))}</span>
    </div>
    <section class="profile-section profile-read">
      <span class="section-kicker">Executive read</span>
      <h3>${escapeHtml(strategicRole(player))}</h3>
      <p>${escapeHtml(player.why)}</p>
      <small>${escapeHtml(player.description)}</small>
    </section>
    ${executiveProfileSnapshot(player, taxonomy)}
    ${executive ? "" : `${factPackSection(player)}${claimIntegritySection(player)}`}
    <section class="profile-section taxonomy-card">
      <span class="section-kicker">Classification</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <div class="taxonomy-grid">
        <div><span>Role</span><strong>${escapeHtml(taxonomy.role)}</strong></div>
        <div><span>Journey step</span><strong>${escapeHtml(taxonomy.journey)}</strong></div>
        <div><span>Proximity</span><strong>${escapeHtml(taxonomy.proximity)}</strong></div>
      </div>
      <p>${escapeHtml(taxonomy.decisionUse)}</p>
    </section>
    ${executive ? "" : `${evidenceSummarySection(player)}${researchAnchorSection(player)}`}
    <section class="profile-section ${executive ? "profile-action-card" : ""}">
      <h3>${executive ? (player.key ? "Key player profile" : "Executive profile") : "Next action"}</h3>
      <p>${
        executive
          ? "Open the structured player brief for role, scale, confidence, Yousician relevance, and the decision this record supports."
          : `${escapeHtml(nextAction(player))}. ${escapeHtml(player.recent)}`
      }</p>
      <div class="profile-actions">
        <button class="primary-button" data-profile-action="one-pager" type="button">Player brief</button>
        <button class="ghost-button" data-profile-action="database" type="button">Market database</button>
      </div>
    </section>
    ${
      executive
        ? `<section class="profile-section executive-triage-card">
      <span class="section-kicker">Triage</span>
      <h3>${escapeHtml(posture.label)}</h3>
      <div class="executive-triage-grid">
        <div><span>Relevance</span><strong>${player.relevance}/5</strong></div>
        <div><span>Yousician relevance</span><strong>${missionScaleScore(player)}/5</strong></div>
        <div><span>Confidence</span><strong>${quality.score}%</strong></div>
        <div><span>App data</span><strong>${appfiguresReadinessScore(player)}/5</strong></div>
      </div>
      <p>${escapeHtml(executiveDecisionQuestion(player, taxonomy))}</p>
    </section>`
        : `<section class="profile-section">
      <h3>Strategic scores</h3>
      <div class="active-rating-callout">
        <span>${escapeHtml(activeRating.label)}</span>
        <strong>${escapeHtml(activeRating.display)}</strong>
        <small>${escapeHtml(activeRating.detail)}</small>
      </div>
      <div class="metric-grid metric-grid-compact">
        ${metricRow("Yousician relevance", player.relevance)}
        ${metricRow("Momentum", player.momentum)}
        ${metricRow("AI relevance", player.aiScore)}
        ${metricRow("Direct scale", directCompanyScaleScore(player) || 0, ratingForPlayer(player, "company").display)}
        ${metricRow("Direct revenue", directRevenueScore(player) || 0, ratingForPlayer(player, "revenue").display)}
        ${metricRow("Direct reach", directReachScore(player) || 0, ratingForPlayer(player, "reach").display)}
        ${metricRow("Source confidence", Math.max(1, Math.round(quality.score / 20)))}
        ${metricRow("Competitive proximity", competitiveProximityScore(player))}
        ${metricRow("App data status", appfiguresReadinessScore(player))}
      </div>
    </section>`
    }
    ${
      executive
        ? ""
        : `<details class="profile-details">
      <summary>
        <span>Research details</span>
        <strong>${escapeHtml(quality.label)} · ${quality.score}%</strong>
      </summary>
      <section class="profile-section">
        <h3>Business snapshot</h3>
        <div class="snapshot-grid">
          <div><span>Reach</span><strong>${escapeHtml(player.reach)}</strong></div>
          <div><span>Model</span><strong>${escapeHtml(player.model)}</strong></div>
          <div><span>Ownership</span><strong>${escapeHtml(displayOwnership(player))}</strong></div>
        </div>
      </section>
      <section class="profile-section">
        <h3>AI signal</h3>
        <p>${escapeHtml(player.ai)}</p>
      </section>
      <section class="profile-section">
        <h3>Source queue</h3>
        <div class="tag-row">
          ${player.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="source-strip">
          <span>${escapeHtml(player.sourceStatus)}</span>
          <span>${escapeHtml(confidenceLabel(player))}</span>
          <span>${escapeHtml(verifiedLabel(player))}</span>
        </div>
      </section>
    </details>`
    }
  `;

  els.profilePanel.querySelectorAll("[data-profile-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.profileAction === "database") {
        switchView("database", { focusSelected: true });
        return;
      }
      switchView("one-pager");
    });
  });
}

function metricRow(label, value, display = `${value}/5`) {
  return `
    <div class="metric">
      <div class="metric-head"><span>${label}</span><span>${escapeHtml(display)}</span></div>
      <div class="bar" style="--value:${value}"><span></span></div>
    </div>
  `;
}

function renderInsights() {
  const filtered = getFilteredPlayers();
  const aiItems = [...filtered]
    .filter((player) => player.aiScore >= 3)
    .sort((a, b) => b.aiScore + b.relevance - (a.aiScore + a.relevance))
    .slice(0, 8);

  els.aiRadar.innerHTML =
    aiItems
      .map(
        (player) => `
          <article class="radar-item">
            <div>
              <h3>${escapeHtml(player.name)}</h3>
              <p>${escapeHtml(player.ai)}</p>
            </div>
            <span class="signal-score">AI ${player.aiScore}</span>
          </article>
        `
      )
      .join("") || emptyState("No AI records in this filter.");

  const filteredIds = new Set(filtered.map((player) => player.id));
  const moveItems = strategicMoves
    .map((move) => ({
      ...move,
      player: players.find((player) => player.id === move.playerId),
      source: sourceById(move.sourceId)
    }))
    .filter((move) => state.selectedCategory === "all" || filteredIds.has(move.playerId))
    .slice(0, 12);

  const moveBadges = {
    "AI rights": "RIGHTS",
    "AI creation": "AI",
    "Discovery data": "DATA",
    Awards: "AWARD",
    "Startup ecosystem": "SCOUT",
    Funding: "FUND",
    "Artist tools": "TOOLS"
  };

  els.recentMoves.innerHTML =
    moveItems
      .map((move) => {
        const badge = moveBadges[move.category] || "MOVE";
        return `
          <article class="timeline-item">
            <div>
              <h3>${escapeHtml(move.date)} / ${escapeHtml(move.title)}</h3>
              <p>${escapeHtml(move.summary)}</p>
              <small class="timeline-impact">${escapeHtml(move.impact)}</small>
              <div class="timeline-meta">
                <span>${escapeHtml(move.player?.name || move.category)}</span>
                ${
                  sourceUrl(move.source)
                    ? `<a href="${escapeHtml(sourceUrl(move.source))}" target="_blank" rel="noopener noreferrer">Source</a>`
                    : ""
                }
              </div>
            </div>
            <span class="signal-score">${escapeHtml(badge)}</span>
          </article>
        `;
      })
      .join("") || emptyState("No strategic moves in this filter.");
}

function renderBriefReadiness() {
  if (!els.briefReadiness) return;
  const librarySources = sourceLibrary();
  const verifiedSources = librarySources.filter((source) => sourceAccessStatus(source) === "verified").length;
  const boardGaps = players.filter(hasCriticalEvidenceGap).length;
  const liveDataQueue = players.filter(requiresCredentialedData).length;
  const keyCount = players.filter((player) => player.key).length;
  const relationshipOverrideCount = Object.keys(liveOverrideContext.relationshipOverrides || {}).length;
  const credentialedRows = credentialedAppfiguresCount();
  const criticalInternalGates = internalGapAreas.filter((area) => area.priority === "Critical").length;
  const items = [
    {
      label: "Priority shortlist",
      value: `${keyCount} players`,
      note: "First profile set; expand only after triage is agreed",
      state: "done",
      action: "key-players"
    },
    {
      label: "Proof gaps",
      value: `${boardGaps} records`,
      note: `${verifiedSources || "..."} checked links; guardrails stay inside detailed briefs`,
      state: boardGaps ? "partial" : "done",
      action: "source-confidence"
    },
    {
      label: "Internal gates",
      value: `${criticalInternalGates} critical`,
      note: "Monetization, retention, rights, catalog and relationship inputs stay explicit",
      state: "partial",
      action: "sources"
    },
    {
      label: "Relationship space",
      value: "Prepared",
      note: relationshipOverrideCount
        ? `${relationshipOverrideCount} internal relationship fields loaded`
        : "Internal status is intentionally not inferred externally",
      state: "done",
      action: "relationships"
    },
    {
      label: "Appfigures",
      value: credentialedRows ? `${credentialedRows} credentialed` : "Pending",
      note: `${liveDataQueue} app based records still require credentialed performance metrics`,
      state: "partial",
      action: "appfigures"
    }
  ];

  els.briefReadiness.innerHTML = `
    <div class="brief-readiness-head">
      <div>
        <span class="section-kicker">Validation gates</span>
        <h3>Only open decisions and proof gaps stay here.</h3>
      </div>
      <span>${players.length} records / ${liveDataQueue} app data gates</span>
    </div>
    <div class="brief-readiness-grid">
      ${items
        .map(
          (item) => `
            <button class="brief-status-item ${item.state}" type="button" data-dashboard-action="${escapeHtml(item.action)}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
              <small>${escapeHtml(item.note)}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function visualPoint(player, options = {}) {
  const quality = qualityProfile(player);
  const seed = player.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const jitter = options.jitter || 0;
  const jitterX = ((seed % 7) - 3) * jitter;
  const jitterY = (((Math.floor(seed / 7) % 7) - 3) * jitter);
  const x = Math.max(13, Math.min(88, quality.score + jitterX));
  const y = Math.max(
    12,
    Math.min(82, Math.round(((player.relevance + player.momentum + player.aiScore) / 15) * 100) + jitterY)
  );
  const label = options.compact ? compactName(player.name, 12) : compactName(player.name, 18);
  const isSelected = player.id === state.selectedPlayerId;
  const showLabel = options.showLabel ?? !options.hideLabel;
  const isBackground = options.density && !player.key && !isSelected && !showLabel;
  const pointScore = player.relevance + player.momentum + player.aiScore + (player.key ? 4 : 0);
  return `
    <button
      class="visual-point ${player.key ? "is-key" : ""} ${isBackground ? "is-background" : ""} ${
        isSelected ? "is-selected" : ""
      } ${pointScore >= 15 ? "is-high-signal" : ""}"
      data-visual-player="${escapeHtml(player.id)}"
      type="button"
      style="--point-x:${x}; --point-y:${y}; --point-color:${colorFor(player)}"
      title="${escapeHtml(player.name)} / evidence ${quality.score}% / R${player.relevance} M${player.momentum} AI${player.aiScore}"
    >
      <span>${isBackground ? escapeHtml(initials(player.name).slice(0, 1)) : escapeHtml(initials(player.name))}</span>
      ${showLabel ? `<strong>${escapeHtml(label)}</strong>` : ""}
    </button>
  `;
}

function databaseMatrixPriorityScore(player) {
  return Math.round(((player.relevance + player.momentum + player.aiScore) / 15) * 100);
}

function databaseMatrixPointRadius(player, showLabel) {
  if (player.id === state.selectedPlayerId) return 4.9;
  if (player.key) return 4.35;
  if (showLabel) return 3.75;
  if (player.relevance >= 5 || player.aiScore >= 5) return 2.85;
  return 1.72;
}

function databaseMatrixBasePoint(player, showLabel, index) {
  const quality = qualityProfile(player);
  const seed = player.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const priority = databaseMatrixPriorityScore(player);
  const jitterX = ((seed % 9) - 4) * 0.72;
  const jitterY = (((Math.floor(seed / 9) % 9) - 4) * 0.58);
  return {
    player,
    quality,
    priority,
    showLabel,
    radius: databaseMatrixPointRadius(player, showLabel),
    x: Math.max(8, Math.min(92, quality.score + jitterX)),
    y: Math.max(10, Math.min(88, priority + jitterY)),
    index
  };
}

function clampDatabaseMatrixPoint(point) {
  const margin = point.radius + 1.8;
  point.x = Math.max(margin, Math.min(100 - margin, point.x));
  point.y = Math.max(margin, Math.min(100 - margin, point.y));
}

function relaxDatabaseMatrixPoints(points) {
  const yScale = 0.46;
  for (let iteration = 0; iteration < 26; iteration += 1) {
    for (let a = 0; a < points.length; a += 1) {
      for (let b = a + 1; b < points.length; b += 1) {
        const one = points[a];
        const two = points[b];
        const dx = two.x - one.x;
        const dy = (two.y - one.y) * yScale;
        const distance = Math.max(0.1, Math.hypot(dx, dy));
        const labelGap = one.showLabel || two.showLabel ? 1.7 : 0.75;
        const target = one.radius + two.radius + labelGap + 1.4;
        if (distance >= target) continue;
        const push = ((target - distance) / 2) * 0.82;
        const ux = dx / distance;
        const uy = dy / distance;
        one.x -= ux * push;
        one.y -= (uy * push) / yScale;
        two.x += ux * push;
        two.y += (uy * push) / yScale;
      }
    }
    points.forEach((point) => {
      const basePull = point.showLabel || point.player.key ? 0.018 : 0.035;
      point.x += (point.quality.score - point.x) * basePull;
      point.y += (point.priority - point.y) * basePull;
      clampDatabaseMatrixPoint(point);
    });
  }
  for (let iteration = 0; iteration < 8; iteration += 1) {
    for (let a = 0; a < points.length; a += 1) {
      for (let b = a + 1; b < points.length; b += 1) {
        const one = points[a];
        const two = points[b];
        const dx = two.x - one.x;
        const dy = (two.y - one.y) * yScale;
        const distance = Math.max(0.1, Math.hypot(dx, dy));
        const target = one.radius + two.radius + 2.1;
        if (distance >= target) continue;
        const push = (target - distance) / 2;
        one.x -= (dx / distance) * push;
        one.y -= ((dy / distance) * push) / yScale;
        two.x += (dx / distance) * push;
        two.y += ((dy / distance) * push) / yScale;
      }
    }
    points.forEach(clampDatabaseMatrixPoint);
  }
  return points;
}

function databaseMatrixPointHtml(point) {
  const { player, quality, showLabel, x, y, radius } = point;
  const isSelected = player.id === state.selectedPlayerId;
  const proofGap = hasCriticalEvidenceGap(player);
  const ready = quality.score >= 68 && !proofGap;
  const highSignal = player.relevance >= 5 || player.aiScore >= 5 || totalPriority(player) >= 40;
  const background = !player.key && !isSelected && !showLabel && !highSignal;
  const label = compactName(player.name, isSelected ? 18 : 13);
  return `
    <button
      class="visual-point database-confidence-point ${player.key ? "is-key" : ""} ${isSelected ? "is-selected" : ""} ${
        highSignal ? "is-high-signal" : ""
      } ${background ? "is-background" : ""} ${proofGap ? "is-proof-gap" : "is-ready"}"
      data-visual-player="${escapeHtml(player.id)}"
      type="button"
      style="--point-x:${x.toFixed(2)}; --point-y:${y.toFixed(2)}; --point-color:${colorFor(player)}; --point-size:${Math.round(radius * 9)}px"
      title="${escapeHtml(player.name)} / source confidence ${quality.score}% / priority ${databaseMatrixPriorityScore(player)} / ${proofGap ? "proof needed" : "ready"}"
    >
      <span>${background ? "" : escapeHtml(initials(player.name))}</span>
      ${showLabel ? `<strong>${escapeHtml(label)}</strong>` : ""}
    </button>
  `;
}

function databaseMatrixLayout(rows, labelIds) {
  const showLabelFor = (player) => labelIds.has(player.id);
  const points = rows.map((player, index) => databaseMatrixBasePoint(player, showLabelFor(player), index));
  return relaxDatabaseMatrixPoints(points);
}

function bindVisualPlayers(container) {
  container?.querySelectorAll("[data-visual-player]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPlayer(button.dataset.visualPlayer);
      switchView("overview", { focusProfile: true });
    });
  });
}

function activitySearchText(player) {
  return [
    player.name,
    player.type,
    player.category,
    player.subcategory,
    player.reach,
    player.model,
    player.ai,
    player.recent,
    player.sourceStatus,
    player.relationship,
    player.tags.join(" ")
  ].join(" ");
}

function monitorSegmentById(id) {
  return monitorSegments.find((segment) => segment.id === id) || monitorSegments[0];
}

function databaseSegmentById(id) {
  return databaseSegments.find((segment) => segment.id === id) || databaseSegments[0];
}

function monitorVisiblePlayers(basePlayers) {
  const segment = monitorSegmentById(state.monitorSegment);
  const query = state.monitorQuery.trim().toLowerCase();
  return basePlayers.filter((player) => {
    if (!segment.matches(player)) return false;
    if (!query) return true;
    return activitySearchText(player).toLowerCase().includes(query);
  });
}

function focusPlayerScore(player) {
  return totalPriority(player) + (player.key ? 4 : 0) + (requiresCredentialedData(player) ? 2 : 0);
}

function monitorSegmentCount(basePlayers, segment) {
  return basePlayers.filter(segment.matches).length;
}

function renderMonitorFocusStrip(filteredPlayers) {
  const focusPlayers = [...filteredPlayers]
    .sort((a, b) => focusPlayerScore(b) - focusPlayerScore(a) || a.name.localeCompare(b.name))
    .slice(0, 10);
  if (!focusPlayers.length) {
    return `<p class="empty-state">No monitor records match the current selection.</p>`;
  }
  return `
    <div class="monitor-focus-strip" aria-label="Highest priority monitor records">
      ${focusPlayers
        .map(
          (player, index) => `
            <button
              type="button"
              data-monitor-player="${escapeHtml(player.id)}"
              data-id="${escapeHtml(player.id)}"
              style="--focus-color:${colorFor(player)}"
              title="${escapeHtml(player.name)} / ${escapeHtml(nextAction(player))}"
            >
              <span>${index + 1}</span>
              <strong>${escapeHtml(player.name)}</strong>
              <small>${escapeHtml(nextAction(player))}</small>
              <em>R${player.relevance} M${player.momentum} AI${player.aiScore}</em>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMonitorCoverageMatrix(filteredPlayers, lanes) {
  const categoryHead = categories
    .map((category) => `<th scope="col" style="--matrix-color:${category.color}">${escapeHtml(category.shortName || category.name)}</th>`)
    .join("");
  const rows = lanes
    .map((lane) => {
      const cells = categories
        .map((category) => {
          const count = filteredPlayers.filter((player) => player.category === category.id && lane.matches(player)).length;
          return `<td><span class="${count ? "has-count" : ""}">${count || ""}</span></td>`;
        })
        .join("");
      return `
        <tr style="--lane-color:${lane.color}">
          <th scope="row"><span></span>${escapeHtml(lane.label)}</th>
          ${cells}
        </tr>
      `;
    })
    .join("");
  return `
    <section class="monitor-coverage-matrix" aria-label="Activity coverage by market group">
      <div class="directory-head">
        <div>
          <span class="section-kicker">Coverage matrix</span>
          <h3>Activity signals by market group</h3>
        </div>
        <span>${lanes.length} lanes</span>
      </div>
      <div class="monitor-matrix-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Activity</th>
              ${categoryHead}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function percentOf(count, total) {
  return Math.round((count / Math.max(1, total)) * 100);
}

function monitorTrendDefinitions() {
  return [
    {
      id: "core-pressure",
      title: "Core habit pressure",
      label: "Direct habit competition",
      color: "#00b884",
      segment: "core",
      matches: (player) => ["learning", "practice"].includes(player.category) || competitiveProximityScore(player) >= 4,
      insight: "Closest to Yousician's learning, practice, song choice, and retention loop."
    },
    {
      id: "ai-pressure",
      title: "AI and creation pressure",
      label: "Substitution or workflow shift",
      color: "#6e5cff",
      segment: "ai",
      matches: (player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category),
      insight: "AI native creation and assisted practice can change what beginners expect from music tools."
    },
    {
      id: "app-gate",
      title: "App performance gate",
      label: "Credentialed data needed",
      color: "#f59a23",
      segment: "appdata",
      matches: requiresCredentialedData,
      insight: "Revenue, download, rank, review velocity, and country mix comparisons need Appfigures or traffic imports."
    },
    {
      id: "proof-debt",
      title: "Proof gaps",
      label: "Not ready for board use",
      color: "#ef5a4f",
      segment: "proof",
      matches: (player) => hasCriticalEvidenceGap(player) || qualityProfile(player).score < 68,
      insight: "These records should not drive decisions until the source or confidence gap is closed."
    },
    {
      id: "partner-surface",
      title: "Partner surface",
      label: "Potential distribution or bundle route",
      color: "#ffb84d",
      segment: "partners",
      matches: (player) => relationForPlayer(player)?.type === "partners" || ["hardware", "education"].includes(player.category),
      insight: "Hardware, schools, teachers, and channels can shape acquisition cost and trusted onboarding."
    },
    {
      id: "market-signals",
      title: "External market signals",
      label: "Timing and capital context",
      color: "#3da5d9",
      segment: "signals",
      matches: (player) => isSignalOnlyRecord(player) || player.momentum >= 5,
      insight: "News, funding, awards, and market intelligence help decide when to deepen research."
    }
  ];
}

function renderTrendActors(players, limit = 3) {
  const actors = [...players].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name)).slice(0, limit);
  if (!actors.length) return `<small>No current match</small>`;
  return actors.map((player) => playerMiniButton(player, "data-monitor-player", 16)).join("");
}

function renderMonitorMetaTrends(filteredPlayers) {
  const total = filteredPlayers.length;
  return monitorTrendDefinitions()
    .map((trend) => {
      const matches = filteredPlayers.filter(trend.matches);
      const percent = percentOf(matches.length, total);
      return `
        <article class="monitor-trend-card" style="--trend-color:${trend.color}">
          <header>
            <div>
              <span>${escapeHtml(trend.label)}</span>
              <strong>${escapeHtml(trend.title)}</strong>
            </div>
            <em>${matches.length}<small>${percent}%</small></em>
          </header>
          <p>${escapeHtml(trend.insight)}</p>
          <span class="monitor-trend-meter" aria-hidden="true"><i style="--trend-score:${percent}"></i></span>
          <div class="monitor-trend-actors">
            ${renderTrendActors(matches)}
          </div>
          <button type="button" data-monitor-trend-segment="${escapeHtml(trend.segment)}">Show segment</button>
        </article>
      `;
    })
    .join("");
}

function averageScore(items, scoreFn) {
  if (!items.length) return 0;
  return Math.round(items.reduce((sum, item) => sum + scoreFn(item), 0) / items.length);
}

function monitorFundingSignalScore(player) {
  const text = activitySearchText(player).toLowerCase();
  let score = 0;
  if (/funding|funded|raise|raised|round|series|seed|venture|capital|investor|accelerator|grant|programme|program/.test(text)) {
    score += 5;
  }
  if (/acquisition|acquired|m&a|ownership|public company|sec|filing|backed|portfolio/.test(text)) {
    score += 4;
  }
  if (/a16z|accel|general catalyst|eic|horizon|creative europe|eit|sxsw/.test(text)) {
    score += 3;
  }
  if (player.category === "signals") score += 2;
  if (sourceCoverageTargetAudit(player).classes.has("ownership_capital")) score += 2;
  return Math.max(0, Math.min(10, score + Math.max(0, player.momentum - 3) + (player.key ? 1 : 0)));
}

function monitorMarketSubcategoryDefinitions() {
  return [
    {
      id: "beginner-learning",
      label: "Beginner learning apps",
      category: "Core learning",
      color: "#00d292",
      matches: (player) =>
        player.category === "learning" ||
        /beginner|lesson|learn|curriculum|feedback|guitar learning|piano learning|drumeo|pianote|guitareo/i.test(activitySearchText(player))
    },
    {
      id: "song-practice",
      label: "Song choice and practice",
      category: "Habit layer",
      color: "#11a5a5",
      matches: (player) =>
        player.category === "practice" ||
        /tab|chord|song|sheet|notation|practice|repertoire|play-along|play along/i.test(activitySearchText(player))
    },
    {
      id: "gear-channel",
      label: "Gear and retail channels",
      category: "Acquisition",
      color: "#ffb84d",
      matches: (player) =>
        player.category === "hardware" ||
        /guitar|instrument|retail|store|gear|amp|pedal|hardware|bundle|channel/i.test(activitySearchText(player))
    },
    {
      id: "creator-workflow",
      label: "Creation workflow",
      category: "Expansion",
      color: "#00b77e",
      matches: (player) =>
        player.category === "creation" ||
        /daw|recording|production|creator|samples|distribution|mastering|artist tools|collaboration/i.test(activitySearchText(player))
    },
    {
      id: "ai-audio",
      label: "AI music and audio",
      category: "Disruption",
      color: "#6e5cff",
      matches: (player) =>
        player.category === "ai" ||
        player.aiScore >= 4 ||
        /ai|generation|stem|transcription|audio|prompt|adaptive|personalization/i.test(activitySearchText(player))
    },
    {
      id: "education-institutions",
      label: "Education and teachers",
      category: "Trust",
      color: "#80a83d",
      matches: (player) =>
        player.category === "education" ||
        /school|teacher|classroom|course|certificate|exam|pedagogy|education/i.test(activitySearchText(player))
    },
    {
      id: "attention-platforms",
      label: "Attention platforms",
      category: "Demand",
      color: "#d94c72",
      matches: (player) =>
        player.category === "platforms" ||
        /streaming|games|platform|netflix|spotify|roblox|nintendo|youtube|tiktok|attention|identity/i.test(activitySearchText(player))
    },
    {
      id: "capital-market-data",
      label: "Capital and market data",
      category: "Timing",
      color: "#3da5d9",
      matches: (player) =>
        player.category === "signals" ||
        monitorFundingSignalScore(player) >= 5 ||
        /funding|investor|market|report|analytics|award|programme|grant|venture|capital|m&a|acquisition/i.test(activitySearchText(player))
    }
  ];
}

function monitorSubcategoryRows(filteredPlayers) {
  const definitions = monitorMarketSubcategoryDefinitions();
  return definitions
    .map((definition) => {
      const players = filteredPlayers.filter(definition.matches);
      const ranked = monitorSortedPlayers(players);
      const keyCount = players.filter((player) => player.key).length;
      const momentumCount = players.filter((player) => player.momentum >= 4).length;
      const fundingCount = players.filter((player) => monitorFundingSignalScore(player) >= 5).length;
      const aiCount = players.filter((player) => player.aiScore >= 4 || player.category === "ai").length;
      const evidence = averageScore(players, (player) => qualityProfile(player).score);
      const priority = averageScore(players, (player) => totalPriority(player));
      return {
        ...definition,
        players,
        ranked,
        count: players.length,
        keyCount,
        momentumCount,
        fundingCount,
        aiCount,
        evidence,
        priority,
        lead: ranked[0]
      };
    })
    .filter((row) => row.count)
    .sort((a, b) => b.priority - a.priority || b.keyCount - a.keyCount || b.count - a.count);
}

function fundingSignalType(player) {
  const text = activitySearchText(player).toLowerCase();
  if (/acquisition|acquired|m&a|merger|definitive agreement/.test(text)) return "M&A";
  if (/public company|sec|annual report|filing|listed/.test(text)) return "Public company";
  if (/grant|programme|program|horizon|creative europe|eic|funding source/.test(text)) return "Public funding";
  if (/series|seed|round|raised|funded|venture|capital|investor|backed|portfolio|a16z|accel|general catalyst/.test(text)) return "Private capital";
  if (/ownership|owner|parent|subsidiary/.test(text)) return "Ownership";
  return "Market signal";
}

function renderMonitorSubcategoryBoard(filteredPlayers) {
  const rows = monitorSubcategoryRows(filteredPlayers);
  if (!rows.length) return "";
  const maxCount = Math.max(1, ...rows.map((row) => row.count));
  const maxPriority = Math.max(1, ...rows.map((row) => row.priority));
  return `
    <section class="monitor-subcategory-board" aria-label="Market subcategory comparison">
      <div class="monitor-compare-head">
        <div>
          <span class="section-kicker">Subcategory landscape</span>
          <h3>Where the market is dense, active, or under sourced</h3>
        </div>
        <p>Subcategories group similar players into decision areas. A player can appear in more than one lane when it matters to multiple questions.</p>
      </div>
      <div class="monitor-subcategory-grid">
        ${rows
          .map((row) => {
            const density = Math.round((row.count / maxCount) * 100);
            const pressure = Math.round((row.priority / maxPriority) * 100);
            const evidenceGap = Math.max(0, 100 - row.evidence);
            return `
              <article
                class="monitor-subcategory-card"
                style="--sub-color:${row.color}; --density:${density}; --pressure:${pressure}; --evidence-gap:${evidenceGap}"
              >
                <header>
                  <span>${escapeHtml(row.category)}</span>
                  <strong>${escapeHtml(row.label)}</strong>
                  <em>${row.count}</em>
                </header>
                <div class="monitor-sub-bars" aria-hidden="true">
                  <span><i></i><b>Density</b></span>
                  <span><i></i><b>Pressure</b></span>
                  <span><i></i><b>Proof gap</b></span>
                </div>
                <footer>
                  <small>${row.keyCount} key / ${row.momentumCount} momentum / ${row.aiCount} AI</small>
                  ${
                    row.lead
                      ? `<button type="button" data-monitor-player="${escapeHtml(row.lead.id)}">${companyInlineHtml(row.lead, { compact: 18, logoClassName: "company-inline-logo monitor-inline-logo" })}</button>`
                      : `<small>No lead</small>`
                  }
                </footer>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMonitorCapitalBoard(filteredPlayers) {
  const capitalPlayers = filteredPlayers
    .map((player) => ({ player, score: monitorFundingSignalScore(player), type: fundingSignalType(player) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || totalPriority(b.player) - totalPriority(a.player) || a.player.name.localeCompare(b.player.name));
  const groups = ["Private capital", "M&A", "Public company", "Public funding", "Ownership", "Market signal"]
    .map((type) => ({
      type,
      rows: capitalPlayers.filter((row) => row.type === type)
    }))
    .filter((group) => group.rows.length);
  if (!capitalPlayers.length) return "";
  const topRows = capitalPlayers.slice(0, 6);
  return `
    <section class="monitor-capital-board" aria-label="Funding ownership and market signal comparison">
      <div class="monitor-compare-head">
        <div>
          <span class="section-kicker">Funding, ownership and timing</span>
          <h3>Capital signals by type, not mixed into product proof</h3>
        </div>
        <p>These are directional market signals unless exact round, filing or ownership values are directly sourced.</p>
      </div>
      <div class="monitor-capital-layout">
        <div class="monitor-capital-leaders">
          ${topRows
            .map(
              ({ player, score, type }) => `
                <button type="button" data-monitor-player="${escapeHtml(player.id)}" style="--capital-color:${colorFor(player)}; --capital-score:${score * 10}">
                  ${companyInlineHtml(player, { compact: 20, logoClassName: "company-inline-logo monitor-inline-logo" })}
                  <span>${escapeHtml(type)}</span>
                  <strong>${score}/10</strong>
                  <i aria-hidden="true"></i>
                </button>
              `
            )
            .join("")}
        </div>
        <div class="monitor-capital-types">
          ${groups
            .map(
              (group) => `
                <article>
                  <span>${escapeHtml(group.type)}</span>
                  <strong>${group.rows.length}</strong>
                  <small>${group.rows.slice(0, 3).map(({ player }) => escapeHtml(compactName(player.name, 18))).join(", ")}</small>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function monitorComparisonDefinitions() {
  return [
    {
      id: "priority",
      label: "Strategic pressure",
      title: "Who matters most right now",
      note: "Composite of Yousician fit, momentum, AI pressure and key status.",
      color: "#00b884",
      sort: "priority",
      score: totalPriority,
      display: (player) => Math.round(totalPriority(player))
    },
    {
      id: "momentum",
      label: "Momentum",
      title: "Who is moving fastest",
      note: "Recent product, market, AI or category signal strength.",
      color: "#11a5a5",
      sort: "momentum",
      score: (player) => player.momentum * 20 + totalPriority(player) / 4,
      display: (player) => `${player.momentum}/5`
    },
    {
      id: "ai",
      label: "AI pressure",
      title: "Where expectations may shift",
      note: "AI native creation, feedback, search, audio and workflow signals.",
      color: "#6e5cff",
      sort: "ai",
      score: (player) => player.aiScore * 20 + totalPriority(player) / 5,
      display: (player) => `${player.aiScore}/5`
    },
    {
      id: "capital",
      label: "Funding and ownership",
      title: "Where capital or M&A matters",
      note: "Funding, investor, ownership, acquisition and programme signals by category.",
      color: "#3da5d9",
      sort: "capital",
      score: monitorFundingSignalScore,
      display: (player) => `${monitorFundingSignalScore(player)}/10`
    },
    {
      id: "reach",
      label: "Reach and channels",
      title: "Who could add audience or trust",
      note: "Directional reach signal, with direct values used first where loaded.",
      color: "#ffb84d",
      sort: "reach",
      score: (player) =>
        directReachScore(player) * 36 +
        directCompanyScaleScore(player) * 20 +
        audienceReachScore(player) * 14 +
        (relationForPlayer(player)?.type === "partners" ? 18 : 0),
      display: (player) => (directReachScore(player) ? ratingForPlayer(player, "reach").display : `${audienceReachScore(player)}/5 signal`)
    }
  ];
}

function monitorPrimaryTrendCounts(filteredPlayers) {
  return monitorTrendDefinitions()
    .filter((trend) => !["proof-debt", "app-gate"].includes(trend.id))
    .map((trend) => ({ ...trend, players: filteredPlayers.filter(trend.matches), count: filteredPlayers.filter(trend.matches).length }))
    .sort((a, b) => b.count - a.count);
}

function renderMonitorComparisonRows(players, dimension, limit = 4) {
  const ranked = [...players]
    .sort((a, b) => dimension.score(b) - dimension.score(a) || totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name))
    .slice(0, limit);
  if (!ranked.length) return `<p>No current match in this view.</p>`;
  const maxScore = Math.max(1, ...ranked.map((player) => dimension.score(player)));
  return ranked
    .map((player) => {
      const percent = Math.max(8, Math.round((dimension.score(player) / maxScore) * 100));
      return `
        <button type="button" data-monitor-player="${escapeHtml(player.id)}" style="--compare-player-color:${colorFor(player)}; --compare-score:${percent}">
          ${companyInlineHtml(player, { compact: 18, logoClassName: "company-inline-logo monitor-inline-logo" })}
          <span class="monitor-compare-value">${escapeHtml(dimension.display(player))}</span>
          <i aria-hidden="true"></i>
        </button>
      `;
    })
    .join("");
}

function renderMonitorComparisonBoard(filteredPlayers) {
  return `
    <div class="monitor-compare-board" aria-label="Market comparison board">
      ${monitorComparisonDefinitions()
        .map((dimension) => {
          const action = dimension.sort
            ? `data-monitor-sort="${escapeHtml(dimension.sort)}"`
            : `data-monitor-trend-segment="${escapeHtml(dimension.segment || "signals")}"`;
          const actionLabel = dimension.sort ? `Sort by ${dimension.label.toLowerCase()}` : "Open capital signals";
          return `
            <article style="--compare-color:${dimension.color}">
              <header>
                <span>${escapeHtml(dimension.label)}</span>
                <strong>${escapeHtml(dimension.title)}</strong>
                <small>${escapeHtml(dimension.note)}</small>
              </header>
              <div class="monitor-compare-list">
                ${renderMonitorComparisonRows(filteredPlayers, dimension)}
              </div>
              <button type="button" class="monitor-compare-action" ${action}>
                ${escapeHtml(actionLabel)}
              </button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMonitorCategoryTrendBoard(filteredPlayers) {
  const rows = categories
    .map((category) => {
      const players = filteredPlayers.filter((player) => player.category === category.id);
      const fundingPlayers = players.filter((player) => monitorFundingSignalScore(player) >= 5);
      const momentumPlayers = players.filter((player) => player.momentum >= 4);
      const aiPlayers = players.filter((player) => player.aiScore >= 4 || player.category === "ai");
      const priority = averageScore(players, (player) => totalPriority(player));
      const topPlayer = monitorSortedPlayers(players)[0];
      return {
        category,
        players,
        count: players.length,
        keyCount: players.filter((player) => player.key).length,
        momentumCount: momentumPlayers.length,
        aiCount: aiPlayers.length,
        fundingCount: fundingPlayers.length,
        priority,
        topPlayer
      };
    })
    .filter((row) => row.count)
    .sort((a, b) => b.priority - a.priority || b.count - a.count);
  const maxCount = Math.max(1, ...rows.map((row) => row.count));
  const maxPriority = Math.max(1, ...rows.map((row) => row.priority));

  return `
    <div class="monitor-category-trends" aria-label="Category trend comparison">
      <div class="monitor-compare-head">
        <div>
          <span class="section-kicker">Category trend board</span>
          <h3>Compare pressure, momentum and capital signals by category</h3>
        </div>
        <p>Funding and ownership are treated as signals unless exact round values are directly sourced.</p>
      </div>
      <div class="monitor-category-trend-list">
        ${rows
          .map((row) => {
            const countShare = Math.round((row.count / maxCount) * 100);
            const priorityShare = Math.round((row.priority / maxPriority) * 100);
            const momentumShare = Math.round((row.momentumCount / Math.max(1, row.count)) * 100);
            const fundingShare = Math.round((row.fundingCount / Math.max(1, row.count)) * 100);
            return `
              <article
                style="--category-color:${row.category.color}; --category-count:${countShare}; --category-priority:${priorityShare}; --category-momentum:${momentumShare}; --category-funding:${fundingShare}"
              >
                <header>
                  <strong>${escapeHtml(row.category.shortName || row.category.name)}</strong>
                  <span>${row.count} records / ${row.keyCount} key</span>
                </header>
                <div class="monitor-category-bars" aria-hidden="true">
                  <span><i></i></span>
                  <span><i></i></span>
                  <span><i></i></span>
                </div>
                <footer>
                  <small>Momentum ${row.momentumCount}</small>
                  <small>AI ${row.aiCount}</small>
                  <small>Funding or ownership ${row.fundingCount}</small>
                  ${
                    row.topPlayer
                      ? `<button type="button" data-monitor-player="${escapeHtml(row.topPlayer.id)}">${companyInlineHtml(row.topPlayer, { compact: 18, logoClassName: "company-inline-logo monitor-inline-logo" })}</button>`
                      : `<small>No lead</small>`
                  }
                </footer>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderMonitorExecutiveSummary(filteredPlayers) {
  const trendCounts = monitorPrimaryTrendCounts(filteredPlayers);
  const topTrend = trendCounts[0];
  const secondTrend = trendCounts[1];
  const currentLeader = monitorSortedPlayers(filteredPlayers)[0];
  const momentumLead = monitorSortedPlayers(filteredPlayers, "momentum")[0];
  const capitalLead = [...filteredPlayers].sort((a, b) => monitorFundingSignalScore(b) - monitorFundingSignalScore(a) || a.name.localeCompare(b.name))[0];
  const readyRecords = filteredPlayers
    .filter(isReadyRecord)
    .sort((a, b) => qualityProfile(b).score + totalPriority(b) / 3 - (qualityProfile(a).score + totalPriority(a) / 3));
  const readyLead = readyRecords[0];
  const sortMode = monitorSortModeById(state.monitorSort);
  const summaryCards = [
    {
      label: "Largest pressure field",
      title: topTrend ? topTrend.title : "No pressure field selected",
      value: topTrend ? `${topTrend.count} records` : "0 records",
      note: topTrend && secondTrend ? `Next cluster: ${secondTrend.title}` : "Use the segment filters to narrow the readout.",
      action: topTrend ? `<button type="button" data-monitor-trend-segment="${escapeHtml(topTrend.segment)}">Open field</button>` : ""
    },
    {
      label: "Current comparison leader",
      title: currentLeader ? currentLeader.name : "No record selected",
      value: sortMode.label,
      note: currentLeader ? strategicRole(currentLeader) : sortMode.note,
      action: currentLeader ? `<button type="button" data-monitor-player="${escapeHtml(currentLeader.id)}">Open brief</button>` : ""
    },
    {
      label: "Decision ready",
      title: readyLead ? readyLead.name : "No ready lead",
      value: `${readyRecords.length} records`,
      note: readyLead ? `${qualityProfile(readyLead).score}% source confidence` : "Most records still need evidence or internal data.",
      action: readyLead ? `<button type="button" data-monitor-player="${escapeHtml(readyLead.id)}">Open brief</button>` : ""
    },
    {
      label: "Fast moving signal",
      title: momentumLead ? momentumLead.name : "No momentum lead",
      value: momentumLead ? `Momentum ${momentumLead.momentum}/5` : "No signal",
      note: momentumLead ? nextAction(momentumLead) : "Use activity lanes for product and market changes.",
      action: momentumLead ? `<button type="button" data-monitor-player="${escapeHtml(momentumLead.id)}">Open brief</button>` : ""
    },
    {
      label: "Capital watch",
      title: capitalLead && monitorFundingSignalScore(capitalLead) > 0 ? capitalLead.name : "No capital signal",
      value: capitalLead ? `${monitorFundingSignalScore(capitalLead)}/10 signal` : "0/10 signal",
      note: "Funding, M&A, investor and ownership signals are tracked separately from product proof.",
      action: `<button type="button" data-monitor-trend-segment="signals">Open capital signals</button>`
    }
  ];

  return `
    <div class="monitor-executive-summary" aria-label="Executive market monitor summary">
      ${summaryCards
        .map(
          (card) => `
            <article>
              <span>${escapeHtml(card.label)}</span>
              <strong>${escapeHtml(card.title)}</strong>
              <em>${escapeHtml(card.value)}</em>
              <p>${escapeHtml(card.note)}</p>
              ${card.action}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function monitorActionList(players, scoreFn, limit = 3) {
  return [...players].sort((a, b) => scoreFn(b) - scoreFn(a) || a.name.localeCompare(b.name)).slice(0, limit);
}

function renderMonitorActionButtons(players) {
  if (!players.length) return `<p>No current match in this view.</p>`;
  return players.map((player) => playerMiniButton(player, "data-monitor-player", 18)).join("");
}

function renderMonitorExecutiveAgenda(filteredPlayers) {
  const readyPlayers = filteredPlayers.filter(isReadyRecord);
  const blockedPlayers = filteredPlayers.filter((player) => hasCriticalEvidenceGap(player) || qualityProfile(player).score < 56);
  const watchPlayers = filteredPlayers.filter((player) => player.momentum >= 4 || player.aiScore >= 4);
  const lowerDetailPlayers = filteredPlayers.filter(
    (player) => !player.key && totalPriority(player) < 29 && qualityProfile(player).score < 68 && !requiresCredentialedData(player)
  );
  const lanes = [
    {
      label: "Use in executive read",
      title: `${readyPlayers.length} decision usable records`,
      detail: "Evidence is sufficient for internal executive discussion with normal caveats.",
      players: monitorActionList(readyPlayers, (player) => totalPriority(player) + qualityProfile(player).score / 8),
      action: "Open brief"
    },
    {
      label: "Validate before board",
      title: `${blockedPlayers.length} records need proof`,
      detail: "Keep these out of hard claims until sources, ownership or internal status are fixed.",
      players: monitorActionList(blockedPlayers, monitorProofGapScore),
      action: "Close gap"
    },
    {
      label: "Watch weekly",
      title: `${watchPlayers.length} active signals`,
      detail: "High momentum or AI pressure. Monitor for product, funding, policy or category changes.",
      players: monitorActionList(watchPlayers, (player) => player.momentum * 14 + player.aiScore * 10 + totalPriority(player) / 3),
      action: "Monitor"
    },
    {
      label: "Move down",
      title: `${lowerDetailPlayers.length} long tail records`,
      detail: "Useful context, but not worth executive attention until priority, proof or internal relevance rises.",
      players: monitorActionList(lowerDetailPlayers, (player) => 100 - totalPriority(player)),
      action: "Appendix"
    }
  ];

  return `
    <div class="monitor-executive-agenda" aria-label="Executive monitor agenda">
      ${lanes
        .map(
          (lane) => `
            <article>
              <header>
                <span>${escapeHtml(lane.label)}</span>
                <strong>${escapeHtml(lane.title)}</strong>
              </header>
              <p>${escapeHtml(lane.detail)}</p>
              <div class="monitor-agenda-actions" aria-label="${escapeHtml(lane.label)} players">
                ${renderMonitorActionButtons(lane.players)}
              </div>
              <em>${escapeHtml(lane.action)}</em>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function monitorLensLead(players, scoreFn = totalPriority) {
  return [...players].sort((a, b) => scoreFn(b) - scoreFn(a) || a.name.localeCompare(b.name))[0];
}

function renderMonitorExecutiveRoleLenses(filteredPlayers) {
  const proofQueue = filteredPlayers.filter((player) => hasCriticalEvidenceGap(player) || qualityProfile(player).score < 68);
  const roleLenses = [
    {
      label: "Board",
      question: "Where should attention go next?",
      keep: "Priority, decision question, confidence, current signal.",
      lower: "Raw source links and long tail records.",
      players: filteredPlayers.filter((player) => player.key || player.relevance >= 5),
      score: (player) => totalPriority(player) + qualityProfile(player).score / 10
    },
    {
      label: "Product and growth",
      question: "What competes with learning habit?",
      keep: "Core pressure, onboarding lens, pricing lens, app data gate.",
      lower: "Ownership detail unless it changes product action.",
      players: filteredPlayers.filter((player) => ["learning", "practice"].includes(player.category) || competitiveProximityScore(player) >= 4),
      score: (player) => competitiveProximityScore(player) * 16 + player.relevance * 8 + player.momentum * 4
    },
    {
      label: "Partnerships",
      question: "Who can add reach, trust or utility?",
      keep: "Partner screen, distribution route, internal owner, sensitivity.",
      lower: "Generic ecosystem context without route to action.",
      players: filteredPlayers.filter(
        (player) =>
          relationForPlayer(player)?.type === "partners" ||
          ["hardware", "education", "platforms"].includes(player.category) ||
          /partner|bundle|channel|retail|school|teacher/i.test(`${player.relationship} ${player.type}`)
      ),
      score: (player) => player.relevance * 10 + player.momentum * 5 + (relationForPlayer(player)?.strength || 0) * 8
    },
    {
      label: "Research ops",
      question: "What blocks a hard claim?",
      keep: "Proof gaps, internal data need, source confidence, next import.",
      lower: "Narrative explanation once evidence is already strong.",
      players: proofQueue,
      score: monitorProofGapScore
    }
  ];

  return `
    <div class="monitor-role-lens-grid" aria-label="Executive role lenses">
      ${roleLenses
        .map((lens) => {
          const lead = monitorLensLead(lens.players, lens.score);
          return `
            <article style="--role-color:${lead ? colorFor(lead) : "var(--brand)"}">
              <header>
                <span>${escapeHtml(lens.label)}</span>
                <strong>${escapeHtml(lens.question)}</strong>
              </header>
              <div class="monitor-role-lens-body">
                <p><b>Show first:</b> ${escapeHtml(lens.keep)}</p>
                <p><b>Move down:</b> ${escapeHtml(lens.lower)}</p>
              </div>
              <footer>
                ${
                  lead
                    ? `${playerMiniButton(lead, "data-monitor-player", 18)}<small>${escapeHtml(nextAction(lead))}</small>`
                    : `<p>No current match in this view.</p>`
                }
              </footer>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function monitorLeaderDefinitions() {
  return [
    { id: "relevance", label: "Yousician fit", note: "Closest mission fit", score: (player) => player.relevance, display: (player) => `${player.relevance}/5` },
    { id: "momentum", label: "Momentum", note: "Most active signal", score: (player) => player.momentum, display: (player) => `${player.momentum}/5` },
    { id: "ai", label: "AI pressure", note: "AI relevance", score: (player) => player.aiScore, display: (player) => `${player.aiScore}/5` },
    { id: "company", label: "Verified scale", note: "Direct data only", score: directCompanyScaleScore, display: (player) => ratingForPlayer(player, "company").display },
    { id: "revenue", label: "Verified revenue", note: "Direct data only", score: directRevenueScore, display: (player) => ratingForPlayer(player, "revenue").display },
    { id: "reach", label: "Verified reach", note: "Direct data only", score: directReachScore, display: (player) => ratingForPlayer(player, "reach").display },
    { id: "capital", label: "Capital signal", note: "Funding and ownership", score: monitorFundingSignalScore, display: (player) => `${monitorFundingSignalScore(player)}/10` },
    { id: "proximity", label: "Proximity", note: "Competitive closeness", score: competitiveProximityScore, display: (player) => `${competitiveProximityScore(player)}/5` },
    { id: "proof", label: "Proof gap", note: "Needs verification", score: monitorProofGapScore, display: (player) => `${Math.round(monitorProofGapScore(player))}` }
  ];
}

function renderMonitorMetricLeaders(filteredPlayers) {
  if (!filteredPlayers.length) return "";
  return `
    <div class="monitor-leader-grid" aria-label="Metric leaders by comparison dimension">
      ${monitorLeaderDefinitions()
        .map((metric) => {
          const leader = [...filteredPlayers].sort((a, b) => metric.score(b) - metric.score(a) || a.name.localeCompare(b.name))[0];
          return `
            <article class="${state.monitorSort === metric.id ? "is-active" : ""}" style="--leader-color:${colorFor(leader)}">
              <button type="button" data-monitor-sort="${escapeHtml(metric.id)}">
                <span>${escapeHtml(metric.label)}</span>
                <strong>${escapeHtml(metric.display(leader))}</strong>
              </button>
              <button type="button" data-monitor-player="${escapeHtml(leader.id)}" title="${escapeHtml(leader.name)}">
                ${companyInlineHtml(leader, { compact: 18, logoClassName: "company-inline-logo monitor-inline-logo" })}
              </button>
              <small>${escapeHtml(metric.note)}</small>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMonitorSortControls(filteredPlayers) {
  return `
    <div class="monitor-sort-panel" aria-label="Benchmark sort controls">
      <div>
        <span class="section-kicker">Sort benchmark by</span>
        <strong>${escapeHtml(monitorSortModeById(state.monitorSort).label)}</strong>
        <small>${escapeHtml(monitorSortModeById(state.monitorSort).note)}</small>
      </div>
      <div>
        ${monitorSortModes
          .map((mode) => {
            const leader = monitorSortedPlayers(filteredPlayers, mode.id)[0];
            const active = state.monitorSort === mode.id;
            return `
              <button type="button" class="${active ? "is-active" : ""}" data-monitor-sort="${escapeHtml(mode.id)}" aria-pressed="${active ? "true" : "false"}">
                <strong>${escapeHtml(mode.label)}</strong>
                <span>${leader ? companyInlineHtml(leader, { compact: 14, logoClassName: "company-inline-logo monitor-inline-logo" }) : "No match"}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderMonitorMarketComposition(filteredPlayers) {
  const rows = categories
    .map((category) => {
      const players = filteredPlayers.filter((player) => player.category === category.id);
      return {
        category,
        players,
        count: players.length,
        keyCount: players.filter((player) => player.key).length,
        priority: averageScore(players, (player) => strategicScoreFive(player)),
        evidence: averageScore(players, (player) => qualityProfile(player).score),
        topPlayer: monitorSortedPlayers(players)[0]
      };
    })
    .filter((row) => row.count)
    .sort((a, b) => b.count - a.count || b.priority - a.priority);
  const maxCount = Math.max(1, ...rows.map((row) => row.count));

  return `
    <div class="monitor-composition-panel" aria-label="Market group composition and confidence comparison">
      <div class="monitor-compare-head">
        <div>
          <span class="section-kicker">Market composition</span>
          <h3>Where attention is concentrated</h3>
        </div>
        <p>Counts show coverage, not market size. Priority and evidence summarize current records in each group.</p>
      </div>
      <div class="monitor-composition-list">
        ${rows
          .map(
            (row) => `
              <article style="--group-color:${row.category.color}; --group-share:${Math.round((row.count / maxCount) * 100)}">
                <header>
                  <strong>${escapeHtml(row.category.shortName || row.category.name)}</strong>
                  <span>${row.count} records / ${row.keyCount} key</span>
                </header>
                <div class="monitor-composition-bar" aria-hidden="true"><i></i></div>
                <footer>
                  <small>Priority ${row.priority || 0}/5</small>
                  <small>Evidence ${row.evidence || 0}%</small>
                  ${
                    row.topPlayer
                      ? `<button type="button" data-monitor-player="${escapeHtml(row.topPlayer.id)}">${companyInlineHtml(row.topPlayer, { compact: 18, logoClassName: "company-inline-logo monitor-inline-logo" })}</button>`
                      : `<small>No top player</small>`
                  }
                </footer>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function monitorBenchmarkRows(filteredPlayers) {
  const ranked = monitorSortedPlayers(filteredPlayers);
  const selected = filteredPlayers.find((player) => player.id === state.selectedPlayerId);
  const rows = ranked.slice(0, 8);
  if (selected && !rows.some((player) => player.id === selected.id)) {
    rows[rows.length ? rows.length - 1 : 0] = selected;
  }
  return rows;
}

function monitorMetricCell(value, display = `${value}/5`, max = 5) {
  const percent = max === 100 ? value : value * (100 / max);
  return `
    <td>
      <span class="monitor-score-cell" style="--score:${clampNumber(percent, 0, 100)}">
        <i></i>
        <strong>${escapeHtml(display)}</strong>
      </span>
    </td>
  `;
}

function monitorSortDisplayValue(player) {
  if (state.monitorSort === "evidence") return `${qualityProfile(player).score}%`;
  if (state.monitorSort === "proof") return `${Math.round(monitorProofGapScore(player))} gap`;
  if (state.monitorSort === "capital") return `${monitorFundingSignalScore(player)}/10`;
  if (state.monitorSort === "company") return ratingForPlayer(player, "company").display;
  if (state.monitorSort === "revenue") return ratingForPlayer(player, "revenue").display;
  if (state.monitorSort === "reach") return ratingForPlayer(player, "reach").display;
  return `${Math.round(monitorSortScore(player))}`;
}

function monitorSortCellValue(player) {
  if (state.monitorSort === "proof") return Math.max(1, Math.min(5, Math.round(monitorProofGapScore(player) / 28)));
  if (state.monitorSort === "capital") return Math.max(1, Math.min(5, Math.round(monitorFundingSignalScore(player) / 2)));
  return Math.max(1, Math.min(5, Math.round(monitorSortScore(player) / 20)));
}

function renderMonitorBenchmark(filteredPlayers) {
  const rows = monitorBenchmarkRows(filteredPlayers);
  if (!rows.length) return emptyState("No records match the current monitor selection.");
  const sortMode = monitorSortModeById(state.monitorSort);
  return `
    <div class="monitor-benchmark-table" aria-label="Direct player comparison">
      <table>
        <caption>Sorted by ${escapeHtml(sortMode.label)}. ${escapeHtml(sortMode.note)}</caption>
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Current sort</th>
            <th scope="col">Yousician fit</th>
            <th scope="col">Momentum</th>
            <th scope="col">AI</th>
            <th scope="col">Direct scale</th>
            <th scope="col">Direct revenue</th>
            <th scope="col">Evidence</th>
            <th scope="col">Next check</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((player) => {
              const quality = qualityProfile(player);
              return `
                <tr class="${player.id === state.selectedPlayerId ? "is-selected" : ""}" style="--row-color:${colorFor(player)}">
                  <th scope="row">
                    <button type="button" data-monitor-player="${escapeHtml(player.id)}" title="${escapeHtml(player.name)}">
                      ${companyInlineHtml(player, { logoClassName: "company-inline-logo monitor-inline-logo" })}
                      <small>${escapeHtml(strategicRole(player))}</small>
                    </button>
                  </th>
                  ${monitorMetricCell(
                    monitorSortCellValue(player),
                    monitorSortDisplayValue(player)
                  )}
                  ${monitorMetricCell(player.relevance)}
                  ${monitorMetricCell(player.momentum)}
                  ${monitorMetricCell(player.aiScore)}
                  ${monitorMetricCell(directCompanyScaleScore(player), ratingForPlayer(player, "company").display)}
                  ${monitorMetricCell(directRevenueScore(player), ratingForPlayer(player, "revenue").display)}
                  ${monitorMetricCell(quality.score, `${quality.score}%`, 100)}
                  <td><small>${escapeHtml(nextAction(player))}</small></td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMonitorInsightReadout(filteredPlayers) {
  const trendCounts = monitorPrimaryTrendCounts(filteredPlayers);
  const topTrend = trendCounts[0];
  return `
    <section class="monitor-insight-readout" aria-label="Market trend and comparison readout">
      <div class="directory-head">
        <div>
          <span class="section-kicker">Market monitor</span>
          <h3>Start with comparison, subcategories and market movement</h3>
        </div>
        <span>${filteredPlayers.length} records / ${topTrend ? `${topTrend.count} in ${topTrend.title}` : "no cluster"}</span>
      </div>
      <div class="monitor-readout-hero">
        ${renderMonitorExecutiveSummary(filteredPlayers)}
        ${renderMonitorComparisonBoard(filteredPlayers)}
      </div>
      ${renderMonitorSubcategoryBoard(filteredPlayers)}
      ${renderMonitorCapitalBoard(filteredPlayers)}
      ${renderMonitorMetricLeaders(filteredPlayers)}
      <div class="monitor-compare-head">
        <div>
          <span class="section-kicker">Direct comparison</span>
          <h3>Top records by ${escapeHtml(monitorSortModeById(state.monitorSort).label.toLowerCase())}</h3>
        </div>
        <p>Revenue, size and reach remain pending unless direct credentialed or official figures are imported.</p>
      </div>
      ${renderMonitorSortControls(filteredPlayers)}
      ${renderMonitorBenchmark(filteredPlayers)}
      ${renderMonitorCategoryTrendBoard(filteredPlayers)}
      ${renderMonitorMarketComposition(filteredPlayers)}
      <div class="monitor-meta-grid monitor-detail-trends" aria-label="Detailed monitor clusters">
        ${renderMonitorMetaTrends(filteredPlayers)}
      </div>
      ${renderMonitorExecutiveAgenda(filteredPlayers)}
      ${renderMonitorExecutiveRoleLenses(filteredPlayers)}
    </section>
  `;
}

function monitoringActivityLanes() {
  return [
    {
      label: "App performance",
      color: "#00d292",
      note: "rankings, traffic, revenue, downloads",
      matches: (player) => /appfigures|app performance|ranking|rank|revenue|download|traffic|subscriber|subscription|pricing/i.test(activitySearchText(player))
    },
    {
      label: "AI disruption",
      color: "#6e5cff",
      note: "generation, tutoring, feedback, audio tools",
      matches: (player) =>
        player.aiScore >= 4 || player.category === "ai" || /prompt|generation|stem|ai tutor|adaptive|feedback/i.test(activitySearchText(player))
    },
    {
      label: "Product moves",
      color: "#11a5a5",
      note: "features, catalog, pricing, bundles",
      matches: (player) => /product|feature|catalog|pricing|bundle|launch|roadmap|course|pathway/i.test(activitySearchText(player))
    },
    {
      label: "Funding & ownership",
      color: "#3da5d9",
      note: "capital, M&A, investors, filings",
      matches: (player) => /funding|investor|venture|capital|m&a|acquisition|ownership|filing|crunchbase/i.test(activitySearchText(player))
    },
    {
      label: "Partners & channels",
      color: "#ffb84d",
      note: "gear, retail, schools, trusted routes",
      matches: (player) => /partner|channel|retail|hardware|school|teacher|education|bundle|store|brand/i.test(activitySearchText(player))
    },
    {
      label: "Creator & community",
      color: "#00b77e",
      note: "songs, creators, sharing, social loops",
      matches: (player) => /creator|community|youtube|song|tabs|sharing|social|marketplace|samples|repertoire/i.test(activitySearchText(player))
    }
  ];
}

function playerMiniButton(player, dataAttribute = "data-monitor-player", maxName = 22) {
  return `
    <button
      type="button"
      ${dataAttribute}="${escapeHtml(player.id)}"
      data-id="${escapeHtml(player.id)}"
      title="${escapeHtml(player.name)}"
      style="--chip-color:${colorFor(player)}"
    >
      ${companyInlineHtml(player, { compact: maxName, logoClassName: "company-inline-logo mini-inline-logo" })}
    </button>
  `;
}

function marketMonitorModel(filteredPlayers, keyPlayers) {
  const companyRecords = filteredPlayers.filter((player) => !isSignalOnlyRecord(player));
  const signalRecords = filteredPlayers.filter(isSignalOnlyRecord);
  const liveDataQueue = filteredPlayers.filter(requiresCredentialedData);
  const highMomentum = filteredPlayers.filter((player) => player.momentum >= 4);
  const aiRecords = filteredPlayers.filter((player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category));
  const categoryCount = categories.filter((category) => filteredPlayers.some((player) => player.category === category.id)).length;
  const kpis = [
    {
      label: "Monitored records",
      value: filteredPlayers.length,
      note: "full ecosystem layer"
    },
    {
      label: "Companies / orgs",
      value: companyRecords.length,
      note: "apps, tools, channels"
    },
    {
      label: "Signal sources",
      value: signalRecords.length,
      note: "capital, media, awards"
    },
    {
      label: "Key players",
      value: keyPlayers.length,
      note: "ranked for player briefs"
    },
    {
      label: "AI / creation",
      value: aiRecords.length,
      note: "disruption surface"
    },
    {
      label: "App / traffic queue",
      value: liveDataQueue.length,
      note: "Appfigures / traffic inputs"
    },
    {
      label: "Coverage groups",
      value: categoryCount,
      note: `${highMomentum.length} strong momentum records`
    }
  ];

  const lanes = monitoringActivityLanes().map((lane) => ({
    ...lane,
    players: filteredPlayers.filter(lane.matches).sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name))
  }));

  return { kpis, lanes, companyRecords, signalRecords, liveDataQueue, highMomentum, aiRecords, categoryCount };
}

function renderOverviewMonitorSnapshot() {
  if (!els.overviewMonitorSnapshot) return;
  const filteredPlayers = getFilteredPlayers();
  const keyPlayers = filteredPlayers
    .filter((player) => player.key)
    .sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name));
  const { kpis, lanes, companyRecords, liveDataQueue, highMomentum, categoryCount } = marketMonitorModel(filteredPlayers, keyPlayers);
  const topCompanies = [...companyRecords]
    .sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name))
    .slice(0, 12);
  const featuredKpis = [kpis[0], kpis[1], kpis[3], kpis[5]];
  const lanePreview = lanes.slice(0, 6);

  els.overviewMonitorSnapshot.innerHTML = `
    <div class="overview-monitor-head">
      <div>
        <span class="section-kicker">Market monitor</span>
        <h2>${filteredPlayers.length} monitored records across ${categoryCount} coverage groups</h2>
        <p>${companyRecords.length} companies and organisations, ${keyPlayers.length} key players, ${highMomentum.length} strong momentum records, and ${liveDataQueue.length} app or traffic inputs queued.</p>
      </div>
      <div class="overview-monitor-actions" aria-label="Market monitor actions">
        <button type="button" data-monitor-jump="key-players">Market monitor</button>
        <button type="button" data-monitor-jump="database">Market database</button>
        <button type="button" data-monitor-jump="relationships">Yousician links</button>
      </div>
    </div>
    <div class="overview-monitor-body">
      <div class="overview-monitor-metrics">
        ${featuredKpis
          .map(
            (item) => `
              <article>
                <span>${escapeHtml(item.label)}</span>
                <strong>${item.value}</strong>
                <small>${escapeHtml(item.note)}</small>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="overview-activity-grid" aria-label="Market activity coverage">
        ${lanePreview
          .map(
            (lane) => `
              <button type="button" data-monitor-jump="key-players" class="overview-activity-card" style="--lane-color:${lane.color}">
                <span>${lane.players.length}</span>
                <strong>${escapeHtml(lane.label)}</strong>
                <small>${lane.players.slice(0, 2).map((player) => escapeHtml(compactName(player.name, 12))).join(" / ") || "No current match"}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="overview-company-ribbon" aria-label="Top monitored companies">
      <span>Companies in focus</span>
      <div>
        ${topCompanies.map((player) => playerMiniButton(player, "data-overview-player", 16)).join("")}
      </div>
    </div>
  `;

  els.overviewMonitorSnapshot.querySelectorAll("[data-monitor-jump]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.monitorJump));
  });
  els.overviewMonitorSnapshot.querySelectorAll("[data-overview-player]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPlayer(button.dataset.overviewPlayer);
      switchView("one-pager");
    });
  });
}

function renderMarketMonitorOverview(filteredPlayers, keyPlayers) {
  if (!els.marketMonitorOverview) return;
  const { kpis, lanes } = marketMonitorModel(filteredPlayers, keyPlayers);

  els.marketMonitorOverview.innerHTML = `
    ${renderMonitorInsightReadout(filteredPlayers)}
    <section class="monitor-dashboard" aria-label="Market monitor coverage summary">
      <div class="monitor-kpis">
        ${kpis
          .map(
            (item) => `
              <article class="monitor-kpi">
                <span>${escapeHtml(item.label)}</span>
                <strong>${item.value}</strong>
                <small>${escapeHtml(item.note)}</small>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="activity-lane-board" aria-label="Market activity lanes">
        ${lanes
          .map(
            (lane) => `
              <article class="activity-monitor-lane" style="--lane-color:${lane.color}">
                <header>
                  <div>
                    <strong>${escapeHtml(lane.label)}</strong>
                    <small>${escapeHtml(lane.note)}</small>
                  </div>
                  <span>${lane.players.length}</span>
                </header>
                <div>
                  ${
                    lane.players.length
                      ? lane.players
                          .slice(0, 4)
                          .map((player) => playerMiniButton(player, "data-monitor-player", 18))
                          .join("")
                      : `<small>No current match</small>`
                  }
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    ${renderMonitorFocusStrip(filteredPlayers)}
    ${renderMonitorCoverageMatrix(filteredPlayers, lanes)}
  `;
  els.marketMonitorOverview.querySelectorAll("[data-monitor-trend-segment]").forEach((button) => {
    button.addEventListener("click", () => {
      state.monitorSegment = button.dataset.monitorTrendSegment;
      renderKeyPlayers();
      renderActiveFilterStrip();
      const target = document.getElementById("marketMonitorOverview");
      target?.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
      flashElement(target);
    });
  });
  els.marketMonitorOverview.querySelectorAll("[data-monitor-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      state.monitorSort = button.dataset.monitorSort;
      renderKeyPlayers();
      renderActiveFilterStrip();
      const target = document.querySelector(".monitor-benchmark-table") || document.getElementById("marketMonitorOverview");
      target?.scrollIntoView({ block: "center", behavior: preferredScrollBehavior() });
      flashElement(target);
    });
  });
}

function renderMonitorControlBar(basePlayers, filteredPlayers, keyPlayers) {
  if (!els.monitorControlBar) return;
  const companyCount = basePlayers.length;
  const laneCount = monitoringActivityLanes().filter((lane) => filteredPlayers.some(lane.matches)).length;
  const activeSegment = monitorSegmentById(state.monitorSegment);
  const items = [
    { target: "marketMonitorOverview", label: "Readout", value: `${filteredPlayers.length}/${companyCount}` },
    { target: "companyDirectory", label: "Companies", value: filteredPlayers.length },
    { target: "activityQueue", label: "Activity", value: laneCount },
    { target: "keyPlayerVisuals", label: "Priority", value: keyPlayers.length },
    { target: "keyPlayerGrid", label: "Profiles", value: keyPlayers.length }
  ];
  const segmentButtons = monitorSegments
    .map((segment) => {
      const active = segment.id === activeSegment.id;
      return `
        <button
          type="button"
          class="${active ? "is-active" : ""}"
          data-monitor-segment="${escapeHtml(segment.id)}"
          aria-pressed="${active ? "true" : "false"}"
        >
          <strong>${escapeHtml(segment.label)}</strong>
          <span>${monitorSegmentCount(basePlayers, segment)}</span>
        </button>
      `;
    })
    .join("");
  const navButtons = items
    .map(
      (item) => `
        <button type="button" data-monitor-section="${escapeHtml(item.target)}">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${item.value}</span>
        </button>
      `
    )
    .join("");
  els.monitorControlBar.innerHTML = `
    <div class="monitor-filter-bar">
      <label class="monitor-search-control">
        <span>Search</span>
        <input
          type="search"
          data-monitor-search
          value="${escapeHtml(state.monitorQuery)}"
          placeholder="Company, signal, source, category"
          autocomplete="off"
        />
      </label>
      <div class="monitor-segment-row" aria-label="Monitor segments">
        ${segmentButtons}
      </div>
    </div>
    <div class="monitor-nav-row" aria-label="Monitor sections">
      ${navButtons}
    </div>
  `;
  const searchInput = els.monitorControlBar.querySelector("[data-monitor-search]");
  searchInput?.addEventListener("input", (event) => {
    state.monitorQuery = event.target.value;
    renderKeyPlayers();
    renderActiveFilterStrip();
    window.requestAnimationFrame(() => {
      const nextInput = els.monitorControlBar.querySelector("[data-monitor-search]");
      if (!nextInput) return;
      nextInput.focus();
      nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
    });
  });
  els.monitorControlBar.querySelectorAll("[data-monitor-segment]").forEach((button) => {
    button.addEventListener("click", () => {
      state.monitorSegment = button.dataset.monitorSegment;
      renderKeyPlayers();
      renderActiveFilterStrip();
      const target = document.getElementById("companyDirectory");
      target?.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
      flashElement(target);
    });
  });
  els.monitorControlBar.querySelectorAll("[data-monitor-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.monitorSection);
      target?.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
      flashElement(target);
    });
  });
}

function laneCheckLabel(label) {
  const labels = {
    "App performance": "Appfigures, rankings, revenue, downloads, traffic",
    "AI disruption": "generation, tutoring, feedback, audio utility shifts",
    "Product moves": "launches, features, catalog, pricing, bundles",
    "Funding & ownership": "capital, ownership, M&A, investor signals",
    "Partners & channels": "hardware, retail, schools, teachers, brand routes",
    "Creator & community": "songs, creators, sharing, social loops"
  };
  return labels[label] || "Monitor changes and verify source strength";
}

function renderActivityQueue(filteredPlayers, keyPlayers) {
  if (!els.activityQueue) return;
  const { lanes } = marketMonitorModel(filteredPlayers, keyPlayers);
  els.activityQueue.innerHTML = `
    <section class="activity-queue-panel">
      <div class="directory-head">
        <div>
          <span class="section-kicker">Market activity queue</span>
          <h3>What is actively monitored</h3>
        </div>
        <span>${lanes.reduce((sum, lane) => sum + lane.players.length, 0)} matches</span>
      </div>
      <div class="activity-queue-grid">
        ${lanes
          .map(
            (lane) => `
              <article class="activity-queue-card" style="--lane-color:${lane.color}">
                <header>
                  <div>
                    <strong>${escapeHtml(lane.label)}</strong>
                    <small>${escapeHtml(laneCheckLabel(lane.label))}</small>
                  </div>
                  <span>${lane.players.length}</span>
                </header>
                <div class="activity-watch-list">
                  ${
                    lane.players.length
                      ? lane.players
                          .slice(0, 5)
                          .map(
                            (player) => `
                              <button type="button" data-monitor-player="${escapeHtml(player.id)}" data-id="${escapeHtml(player.id)}">
                                ${companyInlineHtml(player, { logoClassName: "company-inline-logo monitor-inline-logo" })}
                                <small>${escapeHtml(executiveSignalText(player.recent))}</small>
                              </button>
                            `
                          )
                          .join("")
                      : `<p class="lane-empty">No current match</p>`
                  }
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCompanyDirectory(allPlayers) {
  const groups = categories
    .map((category) => ({
      category,
      players: allPlayers
        .filter((player) => player.category === category.id)
        .sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name))
    }))
    .filter((group) => group.players.length);
  const groupSummary = groups
    .map(
      ({ category, players: categoryPlayers }) => `
        <span style="--group-color:${category.color}">
          <strong>${categoryPlayers.length}</strong>
          ${escapeHtml(category.shortName || category.name)}
        </span>
      `
    )
    .join("");

  return `
    <section class="company-directory-panel">
      <div class="directory-head">
        <div>
          <span class="section-kicker">Company coverage</span>
          <h3>${state.monitorSegment === "all" && !state.monitorQuery.trim() ? "All monitored companies and signal sources" : "Current monitor selection"}</h3>
        </div>
        <span>${allPlayers.length} records</span>
      </div>
      <div class="company-directory-summary" aria-label="Visible records by market group">
        ${groupSummary || `<span><strong>0</strong>No matching group</span>`}
      </div>
      <div class="company-directory-grid">
        ${groups
          .map(
            ({ category, players: categoryPlayers }) => `
              <article class="company-group" style="--group-color:${category.color}">
                <header>
                  <div>
                    <strong>${escapeHtml(category.shortName || category.name)}</strong>
                    <small>${escapeHtml(category.layer)}</small>
                  </div>
                  <span>${categoryPlayers.length}</span>
                </header>
                <div class="company-group-list">
                  ${categoryPlayers
                    .map(
                      (player) => `
                        <button
                          class="company-row ${player.key ? "is-key" : ""}"
                          data-directory-player="${escapeHtml(player.id)}"
                          data-id="${escapeHtml(player.id)}"
                          type="button"
                          style="--company-color:${colorFor(player)}"
                          title="${escapeHtml(player.name)}"
                        >
                          ${logoMarkHtml(player, "company-row-avatar")}
                          <span class="company-row-copy">
                            <strong>${escapeHtml(player.name)}</strong>
                            <small>${escapeHtml(strategicRole(player))}</small>
                            <small class="company-row-source">${escapeHtml(sourceNeeds(player).slice(0, 2).join(" / "))}</small>
                          </span>
                          <span class="company-row-status">
                            <em>${player.key ? "Key" : isSignalOnlyRecord(player) ? "Signal" : "Track"}</em>
                            <small>R${player.relevance} M${player.momentum} AI${player.aiScore}</small>
                          </span>
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function bindMarketMonitorInteractions(container) {
  container?.querySelectorAll("[data-monitor-player], [data-directory-player]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.monitorPlayer || button.dataset.directoryPlayer;
      selectPlayer(id);
      switchView("one-pager");
    });
  });
}

function renderKeyPlayerVisuals(keyPlayers) {
  if (!els.keyPlayerVisuals) return;
  const rankedPlayers = separateConfusingPlayerPairs(
    [...keyPlayers].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name)),
    4
  );
  if (!rankedPlayers.length) {
    els.keyPlayerVisuals.innerHTML = emptyState("No key player visuals match the current filter.");
    return;
  }
  const leadPlayer = rankedPlayers[0];
  const maxPriority = Math.max(1, totalPriority(leadPlayer));
  const priorityPercent = (player) => Math.max(10, Math.round((totalPriority(player) / maxPriority) * 100));
  const scoreText = (player) => `R${player.relevance} M${player.momentum} AI${player.aiScore}`;
  const focusGroups = [
    {
      label: "Core pressure",
      color: "#00d292",
      matches: (player) => ["learning", "practice"].includes(player.category) || relationForPlayer(player)?.type === "competes"
    },
    {
      label: "AI & creation",
      color: "#6e5cff",
      matches: (player) => ["ai", "creation"].includes(player.category) || player.aiScore >= 4
    },
    {
      label: "Partner surface",
      color: "#ffb84d",
      matches: (player) => relationForPlayer(player)?.type === "partners" || ["hardware", "education"].includes(player.category)
    },
    {
      label: "Market signals",
      color: "#2aa7d7",
      matches: (player) => player.category === "signals" || player.momentum >= 4
    }
  ];
  const lanes = [
    {
      label: "Defend core",
      color: "#00d292",
      note: "Direct learning/practice competition and habit risk.",
      matches: (player) => ["learning", "practice"].includes(player.category) || relationForPlayer(player)?.type === "competes"
    },
    {
      label: "Build with",
      color: "#ffb84d",
      note: "Partner, channel, gear, and trusted-learning surfaces.",
      matches: (player) => relationForPlayer(player)?.type === "partners" || ["hardware", "education"].includes(player.category)
    },
    {
      label: "Watch shifts",
      color: "#6e5cff",
      note: "AI, creation, discovery, funding, and market-signal pressure.",
      matches: (player) => ["ai", "creation", "signals"].includes(player.category) || player.aiScore >= 4
    }
  ];

  els.keyPlayerVisuals.innerHTML = `
    <section class="visual-panel key-priority-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Key player focus</span>
          <h3>Priority board</h3>
        </div>
        <p>Highest-signal players first, grouped by strategic use.</p>
      </div>
      <div class="priority-board" aria-label="Ranked key player priority board">
        <button
          class="priority-lead ${leadPlayer.id === state.selectedPlayerId ? "is-selected" : ""}"
          data-visual-player="${escapeHtml(leadPlayer.id)}"
          type="button"
          style="--priority-color:${colorFor(leadPlayer)}; --priority-score:${priorityPercent(leadPlayer)}"
          title="${escapeHtml(leadPlayer.name)} / ${escapeHtml(scoreText(leadPlayer))}"
        >
          <span class="priority-lead-top">
            <span class="priority-rank-label">Top priority</span>
            ${logoMarkHtml(leadPlayer, "priority-avatar")}
          </span>
          <span class="priority-lead-copy">
            <strong>${companyInlineHtml(leadPlayer)}</strong>
            <small>${escapeHtml(strategicRole(leadPlayer))}</small>
          </span>
          <span class="priority-lead-why">${escapeHtml(leadPlayer.why)}</span>
          <span class="priority-meta-row">
            <span>${escapeHtml(productFocusLabel(leadPlayer))}</span>
            <span>${escapeHtml(qualityProfile(leadPlayer).label)}</span>
          </span>
          <span class="priority-score-grid" aria-label="${escapeHtml(scoreText(leadPlayer))}">
            <span><strong>${leadPlayer.relevance}</strong><small>Relevance</small></span>
            <span><strong>${leadPlayer.momentum}</strong><small>Momentum</small></span>
            <span><strong>${leadPlayer.aiScore}</strong><small>AI</small></span>
          </span>
          <span class="priority-meter" aria-hidden="true"><i></i></span>
        </button>
        <div class="priority-stack">
          ${rankedPlayers
            .slice(1, 9)
            .map((player, index) => {
              const quality = qualityProfile(player);
              return `
                <button
                  class="priority-player ${player.id === state.selectedPlayerId ? "is-selected" : ""}"
                  data-visual-player="${escapeHtml(player.id)}"
                  type="button"
                  style="--priority-color:${colorFor(player)}; --priority-score:${priorityPercent(player)}"
                  title="${escapeHtml(player.name)} / ${escapeHtml(scoreText(player))} / ${escapeHtml(quality.label)}"
                >
                  <span class="priority-rank">${index + 2}</span>
                  ${logoMarkHtml(player, "priority-avatar priority-avatar-small")}
                  <span class="priority-player-copy">
                    <strong>${companyInlineHtml(player, { logoClassName: "company-inline-logo priority-inline-logo" })}</strong>
                    <small>${escapeHtml(strategicRole(player))}</small>
                  </span>
                  <span class="priority-score-pill">${escapeHtml(scoreText(player))}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="priority-group-strip" aria-label="Key player priority groups">
        ${focusGroups
          .map((group) => {
            const matches = rankedPlayers.filter(group.matches);
            return `
              <article class="priority-group" style="--group-color:${group.color}">
                <header>
                  <strong>${escapeHtml(group.label)}</strong>
                  <span>${matches.length}</span>
                </header>
                <div>
                  ${
                    matches.length
                      ? matches
                          .slice(0, 4)
                          .map(
                            (player) => `
                              <button type="button" data-visual-player="${escapeHtml(player.id)}" title="${escapeHtml(player.name)}">
                                ${companyInlineHtml(player, { compact: 14, logoClassName: "company-inline-logo priority-inline-logo" })}
                              </button>
                            `
                          )
                          .join("")
                      : `<small>No current match</small>`
                  }
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
    <section class="visual-panel key-lane-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Action lanes</span>
          <h3>How to read the key player set</h3>
        </div>
      </div>
      <div class="key-lanes">
        ${lanes
          .map((lane) => {
            const matches = keyPlayers.filter(lane.matches);
            return `
              <article class="key-lane" style="--lane-color:${lane.color}">
                <header>
                  <strong>${escapeHtml(lane.label)}</strong>
                  <span>${matches.length}</span>
                </header>
                <p>${escapeHtml(lane.note)}</p>
                <div>
                  ${
                    matches.length
                      ? matches
                          .map(
                            (player) => `
                              <button type="button" data-visual-player="${escapeHtml(player.id)}" title="${escapeHtml(player.name)}">
                                ${companyInlineHtml(player, { compact: 16, logoClassName: "company-inline-logo priority-inline-logo" })}
                              </button>
                            `
                          )
                          .join("")
                      : `<small>No current match</small>`
                  }
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
  bindVisualPlayers(els.keyPlayerVisuals);
}

function renderKeyPlayers() {
  const basePlayers = getFilteredPlayers();
  const filteredPlayers = monitorVisiblePlayers(basePlayers);
  const keyPlayers = separateConfusingPlayerPairs(
    filteredPlayers
      .filter((player) => player.key)
      .sort((a, b) => b.relevance + b.momentum + b.aiScore - (a.relevance + a.momentum + a.aiScore)),
    4
  );

  renderMarketMonitorOverview(filteredPlayers, keyPlayers);
  renderMonitorControlBar(basePlayers, filteredPlayers, keyPlayers);
  renderKeyPlayerVisuals(keyPlayers);
  if (els.companyDirectory) {
    els.companyDirectory.innerHTML = renderCompanyDirectory(filteredPlayers);
  }
  renderActivityQueue(filteredPlayers, keyPlayers);

  const profileCards =
    keyPlayers
      .map(
        (player) => `
          <article
            class="player-card ${player.id === state.selectedPlayerId ? "is-selected" : ""}"
            data-id="${player.id}"
            role="button"
            tabindex="0"
            style="--card-color:${colorFor(player)}"
          >
            <div class="player-card-top">
              <div>
                <h3>${player.name}</h3>
                <p>${player.subcategory}</p>
              </div>
              ${logoMarkHtml(player, "avatar")}
            </div>
            <p>${player.why}</p>
            ${factMiniHtml(player, 2)}
            <div>
              ${metricRow("Strategic relevance", player.relevance)}
              <div class="badge-row">
                <span class="badge product-focus-badge">${escapeHtml(productFocusLabel(player))}</span>
                <span class="badge">${escapeHtml(strategicRole(player))}</span>
                <span class="badge">Footprint: ${escapeHtml(globalFootprintFor(player))}</span>
              </div>
              <span class="player-card-link">Open player brief</span>
            </div>
          </article>
        `
      )
      .join("") || emptyState("No key players match the current filter.");

  els.keyPlayerGrid.innerHTML = `
    <section class="priority-profile-section">
      <div class="directory-head">
        <div>
          <span class="section-kicker">Priority profiles</span>
          <h3>Key player brief cards</h3>
        </div>
        <span>${keyPlayers.length} key players</span>
      </div>
      <div class="priority-profile-grid">
        ${profileCards}
      </div>
    </section>
  `;

  bindMarketMonitorInteractions(els.marketMonitorOverview);
  bindMarketMonitorInteractions(els.companyDirectory);
  bindMarketMonitorInteractions(els.activityQueue);
  bindMarketMonitorInteractions(els.keyPlayerGrid);
  els.keyPlayerGrid.querySelectorAll(".player-card").forEach((card) => {
    const openCard = () => {
      selectPlayer(card.dataset.id);
      switchView("one-pager");
    };
    card.addEventListener("click", openCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });
}

function onePagerHostFor(player) {
  const source = playerPrimaryWebsiteSource(player);
  if (!source) return "Evidence loading";
  try {
    return new URL(source.url).hostname.replace(/^www\./, "");
  } catch {
    return "Evidence loading";
  }
}

function onePagerScoreLabel(value) {
  if (value >= 4) return "High";
  if (value >= 3) return "Medium";
  return "Low";
}

function onePagerRank(player, cohort, scoreFn) {
  const ranked = [...cohort].sort((a, b) => scoreFn(b) - scoreFn(a) || a.name.localeCompare(b.name));
  return Math.max(1, ranked.findIndex((candidate) => candidate.id === player.id) + 1);
}

function onePagerPriorityRank(player) {
  const cohort = players.filter((candidate) => !isSignalOnlyRecord(candidate));
  return {
    rank: onePagerRank(player, cohort, totalPriority),
    total: cohort.length
  };
}

function onePagerCategoryRank(player) {
  const cohort = players.filter((candidate) => candidate.category === player.category && !isSignalOnlyRecord(candidate));
  return {
    rank: onePagerRank(player, cohort, totalPriority),
    total: cohort.length
  };
}

function onePagerClosestPeers(player, taxonomy, limit = 5) {
  const peers = players
    .filter((candidate) => candidate.id !== player.id)
    .filter((candidate) => !isSignalOnlyRecord(candidate))
    .map((candidate) => {
      const candidateTaxonomy = taxonomyProfile(candidate);
      let score = 0;
      if (candidate.category === player.category) score += 34;
      if (candidateTaxonomy.journey === taxonomy.journey) score += 24;
      if (candidateTaxonomy.proximity === taxonomy.proximity) score += 16;
      if (candidate.key) score += 8;
      score += Math.max(0, 10 - Math.abs(totalPriority(candidate) - totalPriority(player)) / 4);
      score += Math.max(0, 6 - Math.abs(competitiveProximityScore(candidate) - competitiveProximityScore(player)));
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score || totalPriority(b.candidate) - totalPriority(a.candidate) || a.candidate.name.localeCompare(b.candidate.name))
    .slice(0, limit)
    .map((item) => item.candidate);
  return separateConfusingPlayerPairs(peers, 4);
}

function onePagerMarketContextHtml(player, taxonomy, quality, validation) {
  const priorityRank = onePagerPriorityRank(player);
  const categoryRank = onePagerCategoryRank(player);
  const category = categoryById(player.category);
  const peerSet = onePagerClosestPeers(player, taxonomy);
  const publicNeedCount = sourceNeeds(player).filter((need) => !/appfigures|similarweb|crunchbase/i.test(need)).length;
  const gatedNeedCount = sourceNeeds(player).filter((need) => /appfigures|similarweb|crunchbase/i.test(need)).length + quality.coverage.gatedQuestions.length;
  const relation = relationForPlayer(player);
  const contextCards = [
    {
      label: "Market rank",
      value: `#${priorityRank.rank} of ${priorityRank.total}`,
      detail: "Strategic priority among company and organisation records."
    },
    {
      label: "Category rank",
      value: `#${categoryRank.rank} of ${categoryRank.total}`,
      detail: `${category.shortName || category.name}, sorted by priority.`
    },
    {
      label: "Closest peer set",
      value: `${peerSet.length} comparables`,
      detail: peerSet.slice(0, 3).map((peer) => peer.name).join(", ") || "No close peer set."
    },
    {
      label: "Validation load",
      value: `${publicNeedCount + gatedNeedCount} checks`,
      detail: `${publicNeedCount} public, ${gatedNeedCount} gated or credentialed.`
    }
  ];
  const peerRows = peerSet.map((peer) => {
    const peerQuality = qualityProfile(peer);
    return [
      onePagerCompanyCell(peer),
      taxonomyProfile(peer).journey,
      `${peer.relevance}/5`,
      `${peer.momentum}/5`,
      `${peer.aiScore}/5`,
      `${peerQuality.score}%`
    ];
  });
  const triggerItems = [
    requiresCredentialedData(player)
      ? `Import Appfigures or traffic data before using app performance, revenue, downloads, rank trend, review velocity, or country mix claims.`
      : `No credentialed app data is required for the current executive use case unless the decision shifts to performance benchmarking.`,
    quality.gaps.length
      ? `Close the source gap around ${quality.gaps.slice(0, 2).join(" and ")} before making hard claims.`
      : `Public source coverage is strong enough for source backed discussion, subject to the listed caveats.`,
    /not prioritized|not yet|to be completed|owner confirmation/i.test(`${validation.knownRelationship} ${validation.status}`)
      ? `Ask Yousician to confirm owner, contact history, commercial sensitivity, and whether this belongs in an active pipeline.`
      : `Relationship state is loaded as ${templateRelationshipFor(player)}; validate sensitivity before sharing externally.`,
    relation
      ? `Use the relationship lane as ${relationshipTitle(relation.type).toLowerCase()} evidence, not as proof of an active commercial path.`
      : `No explicit relationship lane is loaded; treat opportunity language as hypothesis until internal owners confirm.`
  ];
  const useCases = [
    ["Board question", executiveDecisionQuestion(player, taxonomy)],
    ["Compare against", peerSet.slice(0, 3).map((peer) => peer.name).join(", ") || "Current category peers"],
    ["Best use today", profileSpecificLens(player, taxonomy, validation).headline],
    ["Worst use today", executiveGuardrailsFor(player, quality, validation)[0] || "Hard claims without stronger source coverage"],
    ["Owner to involve", validation.owner],
    ["Next data import", liveDataFeedsForPlayer(player).join(", ") || "No live feed required yet"]
  ];

  return `
    <section class="one-pager-market-context" aria-label="Market comparison and validation context">
      <div class="one-pager-market-context-head">
        <div>
          <span>Decision context</span>
          <h3>How to use this profile in the market readout</h3>
        </div>
        <strong>${escapeHtml(taxonomy.journey)}</strong>
      </div>
      <div class="one-pager-context-card-grid">
        ${contextCards
          .map(
            (card) => `
              <article>
                <span>${escapeHtml(card.label)}</span>
                <strong>${escapeHtml(card.value)}</strong>
                <small>${escapeHtml(card.detail)}</small>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="one-pager-context-split">
        <article>
          <span>Comparable peer benchmark</span>
          ${onePagerTableHtml(["Peer", "Journey", "Fit", "Momentum", "AI", "Evidence"], peerRows.length ? peerRows : [["To verify", taxonomy.journey, "To verify", "To verify", "To verify", "To verify"]])}
        </article>
        <article>
          <span>What would change the read</span>
          <ul class="one-pager-executive-actions">
            ${triggerItems.map((item) => `<li>${escapeHtml(compactTemplateText(item, 150))}</li>`).join("")}
          </ul>
        </article>
      </div>
      <div class="one-pager-use-case-grid">
        ${useCases
          .map(
            ([label, value]) => `
              <div>
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(nonEmptyString(value) || "To verify")}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function onePagerCompanyCell(player) {
  return {
    text: player.name,
    html: companyInlineHtml(player, {
      compact: 18,
      logoClassName: "company-inline-logo mini-inline-logo"
    })
  };
}

function onePagerTableCellHtml(cell) {
  if (cell && typeof cell === "object" && "html" in cell) return cell.html;
  return escapeHtml(nonEmptyString(cell) || "To verify");
}

function onePagerTableHtml(headers, rows) {
  return `
    <table class="one-pager-table">
      <thead>
        <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>${row.map((cell) => `<td>${onePagerTableCellHtml(cell)}</td>`).join("")}</tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function selfUpdateToneMeta(tone) {
  const meta = {
    safe: {
      label: "Auto public",
      icon: "refresh-cw",
      short: "Updates itself"
    },
    review: {
      label: "Review queue",
      icon: "scan-search",
      short: "Detected first"
    },
    gated: {
      label: "Credentialed",
      icon: "key-round",
      short: "Import only"
    },
    locked: {
      label: "Manual",
      icon: "lock-keyhole",
      short: "Human owned"
    }
  };
  return meta[tone] || meta.review;
}

function onePagerSelfUpdateItems(player, quality, validation) {
  const websiteSource = playerPrimaryWebsiteSource(player);
  const websiteHost = onePagerHostFor(player);
  const publicMetric = publicAppStoreMetricFor(player);
  const hq = headquartersRecordFor(player);
  const founded = foundedRecordFor(player);
  const publicEnrichment = publicEnrichmentFor(player) || {};
  const hasPublicMetadata = Boolean(publicEnrichment.hq || publicEnrichment.founded || publicEnrichment.wikidata);
  const relationshipManual = /not prioritized|not yet|to be completed|owner confirmation|internal/i.test(
    `${validation.knownRelationship} ${validation.status} ${validation.nextStep}`
  );
  return [
    {
      tone: websiteSource ? "safe" : "review",
      label: "Website and source health",
      value: websiteSource ? websiteHost : "Needs public source",
      detail: websiteSource
        ? "Official destination and link health can refresh automatically."
        : "Queue for public source lookup before using the website field."
    },
    {
      tone: hasPublicMetadata || !/to verify/i.test(`${hq.value} ${founded.value}`) ? "safe" : "review",
      label: "HQ and founded",
      value: `${hq.value} / ${founded.value}`,
      detail: hasPublicMetadata
        ? "Public reference metadata can refresh, with conflicts flagged."
        : "Seeded or missing metadata should be checked before external use."
    },
    {
      tone: publicMetric ? "safe" : requiresCredentialedData(player) ? "gated" : "review",
      label: "Public app signal",
      value: publicMetric ? publicAppStoreMetricLabel(player) : "No public app signal loaded",
      detail: publicMetric
        ? "Ratings refresh as public signal only, not revenue or downloads."
        : "Only needed when this player is treated as an app benchmark."
    },
    {
      tone: requiresCredentialedData(player) ? "gated" : "review",
      label: "Revenue, downloads and rank",
      value: requiresCredentialedData(player) ? "Credentialed import required" : "Use only if decision needs it",
      detail: "Needs Appfigures, Similarweb, finance export or filing before it becomes fact."
    },
    {
      tone: "safe",
      label: "Source confidence",
      value: `${quality.score}% ${quality.label}`,
      detail: "Recomputed from linked sources, source classes and contradictions."
    },
    {
      tone: "review",
      label: "Recent market moves",
      value: compactTemplateText(executiveSignalText(player.recent), 54),
      detail: "Changes can be detected automatically, but executive interpretation stays reviewed."
    },
    {
      tone: relationshipManual ? "locked" : "review",
      label: "Yousician relationship",
      value: templateRelationshipFor(player),
      detail: "Owner, sensitivity, history and active path are internal truth."
    },
    {
      tone: "locked",
      label: "Priority and recommendation",
      value: `${player.key ? "Key player" : "Track"} / ${ratingForPlayer(player, "strategic").display}`,
      detail: "Inputs can update, but shortlist status and recommendation should only change in review."
    }
  ];
}

function onePagerSelfUpdateHtml(player, quality, validation) {
  const items = onePagerSelfUpdateItems(player, quality, validation);
  const counts = items.reduce((acc, item) => {
    acc[item.tone] = (acc[item.tone] || 0) + 1;
    return acc;
  }, {});
  return `
    <section class="one-pager-self-update" aria-label="Data freshness contract">
      <header class="one-pager-self-update-head">
        <div>
          <span>Data freshness contract</span>
          <h3>What can stay current without weakening the brief</h3>
          <p>Public facts may refresh automatically. Performance, relationship and recommendation fields stay gated so the profile does not turn public signals into false certainty.</p>
        </div>
        <div class="one-pager-self-update-counts" aria-label="Update mode counts">
          <span><strong>${counts.safe || 0}</strong> auto</span>
          <span><strong>${counts.review || 0}</strong> review</span>
          <span><strong>${counts.gated || 0}</strong> gated</span>
          <span><strong>${counts.locked || 0}</strong> manual</span>
        </div>
      </header>
      <div class="one-pager-self-update-grid">
        ${items
          .map((item) => {
            const meta = selfUpdateToneMeta(item.tone);
            return `
              <article class="one-pager-self-update-item update-${escapeHtml(item.tone)}">
                <i data-lucide="${escapeHtml(meta.icon)}"></i>
                <span>${escapeHtml(meta.label)}</span>
                <strong>${escapeHtml(item.label)}</strong>
                <em>${escapeHtml(item.value)}</em>
                <small>${escapeHtml(item.detail)}</small>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function onePagerFactStripHtml(player, taxonomy, quality) {
  const websiteSource = playerPrimaryWebsiteSource(player);
  const websiteUrl = sourceUrl(websiteSource);
  const websiteHost = onePagerHostFor(player);
  const hq = headquartersRecordFor(player);
  const founded = foundedRecordFor(player);
  const revenueDisplay = directMetricDisplay(player, "revenue");
  const publicMetric = publicAppStoreMetricFor(player);
  const facts = [
    { icon: "map-pin", label: "HQ", value: hq.value, detail: `Global footprint: ${globalFootprintFor(player)}` },
    {
      icon: "calendar",
      label: "Founded",
      value: founded.value,
      detail: founded.detail
    },
    { icon: "network", label: "Ownership", value: displayOwnership(player), detail: "Legal owner first; relationship status is separate." },
    {
      icon: "circle-dollar-sign",
      label: "Revenue evidence",
      value: revenueDisplay === "Pending" ? "Not loaded" : revenueDisplay,
      detail: revenueDisplay === "Pending" ? "Credentialed revenue source required." : "Direct revenue source loaded."
    },
    {
      icon: "users",
      label: publicMetric ? "Public app signal" : "Scale proof",
      value: publicMetric ? publicAppStoreMetricLabel(player) : absoluteFigureSummary(player),
      detail: publicMetric ? "Ratings only, not downloads or revenue." : `Reach signal: ${reachSignalFor(player)}`
    },
    {
      icon: "globe",
      label: "Website",
      value: websiteHost,
      detail: "Primary public destination",
      html: websiteUrl
        ? `<a class="one-pager-fact-link" href="${escapeHtml(websiteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(websiteHost)}</a>`
        : ""
    }
  ];
  return `
    <section class="one-pager-fact-strip" aria-label="Core profile facts">
      ${facts
        .map(
          (fact) => `
              <div class="one-pager-fact">
                <i data-lucide="${escapeHtml(fact.icon)}"></i>
                <span>${escapeHtml(fact.label)}</span>
                <strong>${fact.html || escapeHtml(fact.value)}</strong>
                ${fact.detail ? `<small>${escapeHtml(fact.detail)}</small>` : ""}
            </div>
          `
        )
        .join("")}
      <div class="one-pager-fact one-pager-fact-wide">
        <i data-lucide="badge-check"></i>
        <span>Source confidence</span>
        <strong>${quality.score}% ${escapeHtml(quality.label)}</strong>
        <small>Linked source coverage and claim quality.</small>
      </div>
      <div class="one-pager-fact one-pager-fact-wide">
        <i data-lucide="route"></i>
        <span>Journey step</span>
        <strong>${escapeHtml(taxonomy.journey)}</strong>
        <small>Interpretation: main role in the hobby path.</small>
      </div>
    </section>
  `;
}

function onePagerExecutivePriorityStripHtml(player, taxonomy, validation, quality) {
  const posture = executivePostureFor(player, taxonomy, validation);
  const readiness = executiveReadinessFor(player, quality);
  const internalGate = internalGateSummaryFor(player);
  const needs = sourceNeeds(player);
  const trigger = requiresCredentialedData(player)
    ? "App data import could change scale, rank, growth or sentiment read."
    : quality.gaps.length
      ? `Closing ${quality.gaps.slice(0, 2).join(" and ")} would change confidence.`
      : "A product, funding, partnership or policy signal would change priority.";
  const lowerDetail = needs.length
    ? needs.slice(0, 2).join(", ")
    : internalGate.detail || "No extra data gate for the current brief.";
  const cards = [
    {
      label: "Executive use",
      value: posture.label,
      detail: `${posture.owner}. ${readiness.label}.`
    },
    {
      label: "Decision question",
      value: executiveDecisionQuestion(player, taxonomy),
      detail: profileSpecificLens(player, taxonomy, validation).label
    },
    {
      label: "Watch trigger",
      value: trigger,
      detail: compactTemplateText(executiveSignalText(player.recent), 92)
    },
    {
      label: "Move lower",
      value: lowerDetail,
      detail: "Use in appendix until the next decision needs it."
    }
  ];

  return `
    <section class="one-pager-exec-priority-strip" aria-label="Executive priority strip">
      ${cards
        .map(
          (card) => `
            <article>
              <span>${escapeHtml(card.label)}</span>
              <strong>${escapeHtml(card.value)}</strong>
              <small>${escapeHtml(card.detail)}</small>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function onePagerAudienceHierarchyHtml(player, taxonomy, validation, quality) {
  const posture = executivePostureFor(player, taxonomy, validation);
  const lens = profileSpecificLens(player, taxonomy, validation);
  const coverage = quality.coverage;
  const sourceGap = sourceNeeds(player).join(", ") || "No public source gap for the current brief";
  const appGate = requiresCredentialedData(player)
    ? "App performance, revenue, downloads, rank trend and country mix need credentialed data."
    : "App performance data is not needed for the current executive read.";
  const sections = [
    {
      label: "Read first",
      title: posture.headline,
      body: `${posture.label}. ${executiveDecisionQuestion(player, taxonomy)}`,
      note: `${quality.score}% source confidence`
    },
    {
      label: "Use next",
      title: lens.headline,
      body: lens.body,
      note: `${taxonomy.role}. ${taxonomy.journey}.`
    },
    {
      label: "Validate",
      title: validation.owner,
      body: validation.nextStep,
      note: sourceGap
    },
    {
      label: "Keep in detail",
      title: `${coverage.count} linked sources`,
      body: appGate,
      note: "Source links, raw metrics and relationship history stay below the executive read."
    }
  ];

  return `
    <section class="one-pager-audience-hierarchy" aria-label="Executive reading order">
      <header>
        <span>Reading order</span>
        <h3>What executives need before the detail</h3>
      </header>
      <div>
        ${sections
          .map(
            (section) => `
              <article>
                <span>${escapeHtml(section.label)}</span>
                <strong>${escapeHtml(section.title)}</strong>
                <p>${escapeHtml(section.body)}</p>
                <small>${escapeHtml(section.note)}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function onePagerSectionHtml(index, title, body, modifier = "") {
  return `
    <article class="one-pager-section ${modifier}">
      <header class="one-pager-section-head">
        <span class="one-pager-section-index">${index}</span>
        <h3>${escapeHtml(title)}</h3>
      </header>
      ${body}
    </article>
  `;
}

function onePagerSnapshotRows(player, quality) {
  const coverage = quality.coverage;
  const priorityRank = onePagerPriorityRank(player);
  const categoryRank = onePagerCategoryRank(player);
  const websiteSource = playerPrimaryWebsiteSource(player);
  const websiteUrl = sourceUrl(websiteSource);
  const websiteHost = onePagerHostFor(player);
  const hq = headquartersRecordFor(player);
  const publicMetric = publicAppStoreMetricFor(player);
  const rows = [
    ["Market priority rank", `#${priorityRank.rank} of ${priorityRank.total} company and organisation records`],
    ["Category priority rank", `#${categoryRank.rank} of ${categoryRank.total} records in this category`],
    [
      "Website",
      websiteUrl
        ? {
            html: `<a class="table-link" href="${escapeHtml(websiteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(websiteHost)}</a>`
          }
        : websiteHost
    ],
    ["Strategic relevance", ratingForPlayer(player, "strategic").display],
    ["Direct scale", directMetricDisplay(player, "company")],
    ["Direct revenue", directMetricDisplay(player, "revenue")],
    ["Direct reach", directMetricDisplay(player, "reach")],
    ["HQ", hq.value],
    ["Global footprint", globalFootprintFor(player)],
    ["Reach signal", reachSignalFor(player)],
    ["Business model", player.model],
    ["Ownership", displayOwnership(player)],
    ["Source confidence", `${quality.score}% with ${coverage.count} linked source${coverage.count === 1 ? "" : "s"}`],
    ["Relationship status", templateRelationshipFor(player)],
    ["App data status", executiveAppfiguresNote(player)]
  ];
  if (publicMetric) {
    rows.splice(7, 0, ["Public app rating", publicAppStoreMetricLabel(player)]);
  }
  return rows;
}

function onePagerPortfolioRows(player, taxonomy) {
  const validation = internalValidationFor(player);
  return [
    ["Primary surface", player.description],
    ["Category role", taxonomy.group],
    ["Product lens", productFocusLabel(player)],
    ["Customer model", player.model],
    ["Yousician use", profileSpecificLens(player, taxonomy, validation).headline],
    ["Next data need", nextAction(player)]
  ];
}

function onePagerAiRows(player) {
  const ai = aiClaimStatusFor(player);
  const feeds = liveDataFeedsForPlayer(player);
  return [
    ["AI signal", executiveSignalText(player.ai)],
    ["AI claim status", ai.label],
    ["AI relevance", `${player.aiScore}/5`],
    ["What to verify", ai.note],
    ["Live data inputs", feeds.length ? feeds.join(", ") : "No live feed required yet"],
    ["Safe wording", "Use only where primary product evidence is linked"]
  ];
}

function onePagerRecentRows(player, quality, validation) {
  return [
    ["Current signal", executiveSignalText(player.recent)],
    ["Source status", player.sourceStatus],
    ["Evidence status", `${quality.label}, ${quality.score}%`],
    ["Internal check", validation.nextStep],
    ["Next use", executiveReadinessFor(player, quality).headline]
  ];
}

function onePagerPositionPlayers(player, kind) {
  const directIds = new Set(relations.filter((relation) => relation.type === kind).map((relation) => relation.to));
  const scored = players
    .filter((candidate) => candidate.id !== player.id)
    .filter((candidate) => {
      if (directIds.has(candidate.id)) return true;
      if (kind === "competes") {
        return ["learning", "practice"].includes(candidate.category) && competitiveProximityScore(candidate) >= 4;
      }
      if (kind === "partners") {
        return ["hardware", "education"].includes(candidate.category) || /partner|bundle|licens|channel/i.test(candidate.relationship);
      }
      return ["platforms", "signals", "ai", "creation"].includes(candidate.category) && candidate.relevance >= 3;
    })
    .sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name));
  return separateConfusingPlayerPairs(scored.slice(0, 5), 4);
}

function onePagerPositionHtml(player) {
  const groups = [
    { id: "competes", icon: "shield-alert", label: "Competes with" },
    { id: "partners", icon: "handshake", label: "Partners with" },
    { id: "influences", icon: "megaphone", label: "Influences" }
  ];
  return `
    <div class="one-pager-position-grid">
      ${groups
    .map((group) => {
          const candidates = onePagerPositionPlayers(player, group.id);
          return `
            <div>
              <strong><i data-lucide="${escapeHtml(group.icon)}"></i>${escapeHtml(group.label)}</strong>
              <ul>${
                candidates.length
                  ? candidates
                      .map(
                        (candidate) =>
                          `<li>${companyInlineHtml(candidate, {
                            compact: 18,
                            logoClassName: "company-inline-logo mini-inline-logo"
                          })}</li>`
                      )
                      .join("")
                  : "<li>To verify</li>"
              }</ul>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function onePagerRelationshipRows(player, validation, quality) {
  const guardrails = executiveGuardrailsFor(player, quality, validation);
  return [
    ["Existing relationship", templateRelationshipFor(player)],
    ["Past discussions", "Internal Yousician input only"],
    ["Partnerships", /partner|bundle|channel/i.test(player.relationship) ? player.relationship : "No public partnership claim loaded"],
    ["Licensing", sourceNeeds(player).some((item) => /legal|rights|licensing/i.test(item)) ? "Legal source check required" : "No licensing claim in current profile"],
    ["Shared investors", "No shared-investor claim loaded"],
    ["Strategic opportunities", nextAction(player)],
    ["Strategic risks", guardrails.join("; ")]
  ];
}

function onePagerAssessmentHtml(player, quality) {
  const relation = relationForPlayer(player);
  const partnershipScore =
    relation?.type === "partners"
      ? Math.max(4, relation.strength)
      : ["hardware", "education", "platforms", "creation"].includes(player.category)
        ? 3
        : 2;
  const acquisitionScore = /public|alphabet|google|apple|microsoft|spotify|bytedance|warner|universal|yamaha|duolingo|ubisoft/i.test(
    `${player.ownership} ${player.reach} ${player.type}`
  )
    ? 2
    : player.key
      ? 3
      : 1;
  const scores = [
    { icon: "shield-alert", label: "Competitive threat", value: competitiveProximityScore(player) },
    { icon: "handshake", label: "Partnership potential", value: partnershipScore },
    { icon: "crosshair", label: "Acquisition potential", value: acquisitionScore },
    { icon: "network", label: "Ecosystem influence", value: strategicScoreFive(player) },
    { icon: "brain", label: "AI relevance", value: player.aiScore },
    { icon: "badge-check", label: "Source confidence", value: Math.max(1, Math.round(quality.score / 20)) }
  ];
  return `
    <div class="one-pager-score-card-grid">
      ${scores
        .map(
          (score) => `
            <div class="one-pager-mini-score">
              <i data-lucide="${escapeHtml(score.icon)}"></i>
              <span>${escapeHtml(score.label)}</span>
              <strong>${score.value}</strong>
              <small>${escapeHtml(onePagerScoreLabel(score.value))}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function onePagerSourcesHtml(player, quality) {
  const coverage = quality.coverage;
  const targetAudit = sourceCoverageTargetAudit(player);
  const conflictAudit = claimConflictAudit(player);
  const needs = sourceNeeds(player);
  const publicNeeds = needs.filter((need) => !/appfigures|similarweb|crunchbase/i.test(need));
  const gatedNeeds = [
    ...needs.filter((need) => /appfigures|similarweb|crunchbase/i.test(need)),
    ...coverage.gatedQuestions.slice(0, 3)
  ];
  return `
    <div class="one-pager-source-summary">
      <span><strong>${coverage.count}</strong> linked</span>
      <span><strong>${coverage.verifiedCount}</strong> checked</span>
      <span><strong>${coverage.officialCount}</strong> official</span>
      <span><strong>${targetAudit.score}%</strong> source class fit</span>
      <span><strong>${conflictAudit.score}%</strong> consistency</span>
    </div>
    <div class="source-target-chip-row" aria-label="Required source classes">
      ${sourceCoverageTargetChips(player, 10)}
    </div>
    <div class="claim-conflict-box claim-conflict-${escapeHtml(conflictAudit.status)}">
      <strong>${escapeHtml(conflictAudit.status === "consistent" ? "No contradiction flagged" : conflictAudit.status === "conflict" ? "Conflict review needed" : "Consistency caveat")}</strong>
      <span>${escapeHtml(
        conflictAudit.conflicts[0] ||
          conflictAudit.warnings[0] ||
          conflictAudit.supported[0] ||
          "Loaded sources do not contradict the current profile fields."
      )}</span>
    </div>
    ${sourceLinksHtml(coverage.sources, 5)}
    ${
      publicNeeds.length
        ? `<p class="one-pager-source-needs"><strong>Public source gap:</strong> ${escapeHtml(publicNeeds.slice(0, 4).join(", "))}</p>`
        : `<p class="one-pager-source-needs is-covered"><strong>Public evidence:</strong> Core public profile is covered for this brief.</p>`
    }
    ${
      gatedNeeds.length
        ? `<p class="one-pager-source-needs is-gated"><strong>Gated data, not public evidence:</strong> ${escapeHtml(gatedNeeds.slice(0, 4).join(", "))}</p>`
        : ""
    }
  `;
}

function onePagerExecutiveQuestions(player, quality, validation) {
  const internalProfile = internalGapProfileFor(player);
  const questions = [
    requiresCredentialedData(player)
      ? "Only import Appfigures if the next decision requires app performance, revenue, downloads, rank trend, review velocity, country mix, or growth."
      : "",
    /not prioritized|not yet|to be completed|owner confirmation/i.test(`${validation.knownRelationship} ${validation.status}`)
      ? "Internal only: confirm relationship owner, contact history, sensitivity, and whether this belongs in an active pipeline."
      : "",
    quality.gaps.length ? `Close ${quality.gaps.slice(0, 2).join(" and ")} gap before hard claims.` : "",
    ...internalProfile.questions.slice(0, 2),
    ...quality.coverage.publicOpenQuestions,
    nextAction(player)
  ]
    .filter(Boolean)
    .map((item) => compactTemplateText(item, 150));
  return [...new Set(questions)].slice(0, 4);
}

function onePagerInternalValidationHtml(player) {
  const gate = internalGateSummaryFor(player);
  const profile = gate.profile;
  return `
    <section class="one-pager-internal-validation" aria-label="Internal validation required">
      <header>
        <div>
          <span>Internal validation gate</span>
          <h3>${escapeHtml(profile.headline)}</h3>
        </div>
        <strong>${escapeHtml(gate.label)}</strong>
      </header>
      <div class="internal-validation-grid">
        <article>
          <span>Questions to answer</span>
          <ul>${profile.questions.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
        <article>
          <span>Data areas</span>
          <div class="internal-validation-tags">
            ${profile.areas
              .map(
                (area) => `
                  <em>
                    <strong>${escapeHtml(area.label)}</strong>
                    ${escapeHtml(area.priority)}
                  </em>
                `
              )
              .join("")}
          </div>
          <p><strong>Owner:</strong> ${escapeHtml(profile.owner)}</p>
          <p><strong>Next step:</strong> ${escapeHtml(profile.nextStep)}</p>
        </article>
        <article>
          <span>Do not claim yet</span>
          <ul>${profile.unsafe.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      </div>
    </section>
  `;
}

function onePagerExecutiveBriefHtml(player, taxonomy, validation, quality) {
  const posture = executivePostureFor(player, taxonomy, validation);
  const readiness = executiveReadinessFor(player, quality);
  const lens = profileSpecificLens(player, taxonomy, validation);
  const guardrails = executiveGuardrailsFor(player, quality, validation);
  const relation = relationForPlayer(player);
  const sourceNeedText = sourceNeeds(player).join(", ") || "No public source gap";
  const questions = onePagerExecutiveQuestions(player, quality, validation);
  const internalGate = internalGateSummaryFor(player);
  const gates = [
    {
      label: "Decision posture",
      value: posture.label,
      detail: posture.owner
    },
    {
      label: "Business scale",
      value: absoluteFigureSummary(player),
      detail: ratingForPlayer(player, "revenue").detail
    },
    {
      label: "Evidence confidence",
      value: `${quality.score}%`,
      detail: `${quality.label}, ${quality.coverage.count} linked source${quality.coverage.count === 1 ? "" : "s"}`
    },
    {
      label: "Relationship status",
      value: templateRelationshipFor(player),
      detail: relation ? relationshipTitle(relation.type) : validation.owner
    },
    {
      label: "Internal data gate",
      value: internalGate.label,
      detail: internalGate.detail
    },
    {
      label: "Sentiment input",
      value: sentimentSummary(player),
      detail: requiresCredentialedData(player) ? "Needs app data" : "Use as qualitative signal"
    },
    {
      label: "Next validation",
      value: nextAction(player),
      detail: sourceNeedText
    }
  ];

  return `
    <section class="one-pager-executive-brief" aria-label="Executive decision brief">
      <header class="one-pager-brief-head">
        <div>
          <span>Executive decision brief</span>
          <h3>What matters before the detail</h3>
        </div>
        <strong>${escapeHtml(readiness.label)}</strong>
      </header>

      <div class="one-pager-brief-main">
        <article class="one-pager-brief-card is-primary">
          <span>Board read</span>
          <h4>${escapeHtml(posture.headline)}</h4>
          <p>${escapeHtml(posture.body)}</p>
          <p><strong>Use this profile to decide:</strong> ${escapeHtml(executiveDecisionQuestion(player, taxonomy))}</p>
        </article>

        <article class="one-pager-brief-card">
          <span>Yousician implication</span>
          <h4>${escapeHtml(lens.headline)}</h4>
          <p>${escapeHtml(lens.body)}</p>
          <p><strong>Safe read:</strong> ${escapeHtml(readiness.body)}</p>
        </article>
      </div>

      <div class="one-pager-brief-kpi-grid" aria-label="Decision gates">
        ${gates
          .map(
            (gate) => `
              <div class="one-pager-brief-kpi">
                <span>${escapeHtml(gate.label)}</span>
                <strong>${escapeHtml(gate.value)}</strong>
                <small>${escapeHtml(gate.detail)}</small>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="one-pager-brief-detail-grid">
        <article class="one-pager-brief-card">
          <span>Next checks</span>
          <ul class="one-pager-executive-actions">
            ${questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
        <article class="one-pager-brief-card one-pager-brief-caveats">
          <span>Do not overclaim</span>
          <ul class="one-pager-executive-actions">
            ${guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderOnePager() {
  const player = getSelectedPlayer();
  const category = categoryById(player.category);
  const quality = qualityProfile(player);
  const coverage = quality.coverage;
  const taxonomy = taxonomyProfile(player);
  const validation = internalValidationFor(player);
  const executive = isExecutiveMode();
  const activeRating = ratingForPlayer(player);
  const logoSource = onePagerLogoSourceText(player);

  els.onePager.innerHTML = `
    <article class="one-pager-sheet one-pager-template" style="--onepager-accent:${category.color}">
      <header class="one-pager-template-hero">
        <div class="one-pager-template-brand">
          <div class="one-pager-brand-logo-wrap">
            ${logoMarkHtml(player, "one-pager-template-icon one-pager-brand-logo", {
              size: 256,
              style: `--onepager-accent:${category.color}`
            })}
            <span class="one-pager-brand-logo-source">${escapeHtml(logoSource)}</span>
          </div>
          <div>
            <span class="one-pager-template-label">Strategic player brief</span>
            <h2>${escapeHtml(player.name)}</h2>
            <p>${escapeHtml(player.why)}</p>
          </div>
        </div>
        <div class="one-pager-template-taxonomy">
          <div>
            <span>Category</span>
            <strong>${escapeHtml(category.name)}</strong>
          </div>
          <div>
            <span>Subcategory</span>
            <strong>${escapeHtml(player.subcategory || taxonomy.role)}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>${escapeHtml(taxonomy.role)}</strong>
          </div>
          <div class="one-pager-template-rating">
            <span>${escapeHtml(activeRating.label)}</span>
            <strong>${escapeHtml(activeRating.display)}</strong>
          </div>
        </div>
      </header>

      ${playerExternalLinkRailHtml(player, 6, "one-pager-link-rail")}

      ${onePagerFactStripHtml(player, taxonomy, quality)}

      ${onePagerSelfUpdateHtml(player, quality, validation)}

      ${onePagerExecutivePriorityStripHtml(player, taxonomy, validation, quality)}

      ${onePagerExecutiveBriefHtml(player, taxonomy, validation, quality)}

      ${onePagerAudienceHierarchyHtml(player, taxonomy, validation, quality)}

      ${onePagerMarketContextHtml(player, taxonomy, quality, validation)}

      ${onePagerInternalValidationHtml(player)}

      <section class="one-pager-numbered-grid">
        ${onePagerSectionHtml(
          1,
          "What they are",
          `<p>${escapeHtml(player.description)}</p>`,
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(
          2,
          "Why they matter",
          `<p>${escapeHtml(strategicRole(player))}</p><p>${escapeHtml(executiveDecisionQuestion(player, taxonomy))}</p>`,
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(
          3,
          "Business snapshot",
          onePagerTableHtml(["Metric", "Value"], onePagerSnapshotRows(player, quality)),
          "one-pager-section-full one-pager-section-snapshot"
        )}
        ${onePagerSectionHtml(
          4,
          "Product portfolio",
          onePagerTableHtml(["Surface", "Decision useful detail"], onePagerPortfolioRows(player, taxonomy)),
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(
          5,
          "AI initiatives",
          onePagerTableHtml(["Signal", "Status"], onePagerAiRows(player)),
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(
          6,
          "Recent signals",
          onePagerTableHtml(["Area", "Read"], onePagerRecentRows(player, quality, validation)),
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(7, "Ecosystem position", onePagerPositionHtml(player), "one-pager-section-half")}
        ${onePagerSectionHtml(
          8,
          "Relationship with Yousician",
          onePagerTableHtml(["Area", "Current state"], onePagerRelationshipRows(player, validation, quality)),
          "one-pager-section-half"
        )}
        ${onePagerSectionHtml(9, "Strategic assessment", onePagerAssessmentHtml(player, quality), "one-pager-section-half")}
        ${onePagerSectionHtml(10, "Sources", onePagerSourcesHtml(player, quality), "one-pager-section-full")}
      </section>

      ${
        executive
          ? ""
          : `<details class="one-pager-research-appendix">
        <summary>
          <span>Internal research appendix</span>
          <strong>${escapeHtml(quality.label)} / ${quality.score}%</strong>
        </summary>
        <div class="one-pager-grid">
          ${factPackSection(player, "one-pager")}
          ${claimIntegritySection(player, "one-pager")}
          ${evidenceSummarySection(player, "one-pager")}
          ${researchAnchorSection(player, "one-pager")}
          <article class="one-pager-card research-gate">
            <span>Completion status</span>
            <h3>${escapeHtml(quality.label)} / ${quality.score}%</h3>
            <p>${escapeHtml(quality.verified)}. ${coverage.count} linked source${coverage.count === 1 ? "" : "s"}; ${coverage.openQuestions.length} open question${coverage.openQuestions.length === 1 ? "" : "s"} before leadership use.</p>
            <div class="evidence-mini-grid">
              <span><strong>${coverage.publicCount}</strong> public</span>
              <span><strong>${coverage.internalCount}</strong> internal</span>
              <span><strong>${coverage.officialCount}</strong> official</span>
              <span><strong>${coverage.highCount}</strong> high tier</span>
            </div>
            ${openQuestionsHtml(coverage.openQuestions, 2)}
          </article>
        </div>
      </details>`
      }

      <footer class="one-pager-footer ${executive ? "executive-footer" : "research-footer"}">
        ${
          executive
            ? `<span>Strategic environment profile</span>
        <span>Appfigures pending where relevant</span>
        <span>Relationships to be completed by Yousician</span>`
            : `<span>Internal research view</span>
        <span>${escapeHtml(confidenceLabel(player))}</span>
        <span>${escapeHtml(player.sourceStatus)}</span>`
        }
      </footer>
    </article>
  `;
}

function renderDatabaseStats() {
  const filtered = getFilteredPlayers();
  const evidenceLoading = evidenceContextStatus === "loading";
  const evidenceUnavailable = evidenceContextStatus === "unavailable";
  const backlog = evidenceLoading ? "..." : filtered.filter(hasCriticalEvidenceGap).length;
  const keyCount = filtered.filter((player) => player.key).length;
  const credentialQueueCount = filtered.filter(requiresCredentialedData).length;
  const signalCount = filtered.filter(isSignalOnlyRecord).length;
  const aiCount = filtered.filter((player) => player.aiScore >= 4 || player.category === "ai").length;
  const internalCheckCount = filtered.filter((player) => relationForPlayer(player)).length;
  const avgQuality = evidenceLoading
    ? "..."
    : `${Math.round(filtered.reduce((sum, player) => sum + qualityProfile(player).score, 0) / Math.max(filtered.length, 1))}%`;
  const linkedSourceRefs = filtered.flatMap((player) => evidenceRecordFor(player).sourceIds || []);
  const linkedSourcesByKey = new Map();
  linkedSourceRefs.forEach((sourceId) => {
    const source = sourceById(sourceId);
    if (source) linkedSourcesByKey.set(sourceCanonicalId(source), source);
  });
  const linkedSources = [...linkedSourcesByKey.values()];
  const linkedSourceCount = evidenceLoading
    ? "..."
    : linkedSources.length;
  const verifiedLinkedCount = evidenceLoading
    ? "..."
    : linkedSources.filter((source) => sourceAccessStatus(source) === "verified").length;
  const sourceNote = evidenceLoading ? "loading references" : evidenceUnavailable ? "source file unavailable" : "resolved library sources";
  const gapNote = evidenceLoading ? "waiting for proof map" : "source and ownership completion needs";
  const avgNote = evidenceLoading ? "loading source quality" : "coverage and gaps";
  const appfiguresRows = credentialedAppfiguresCount();
  const valueConflictCount = filtered.filter((player) => claimConflictAudit(player).conflicts.length > 0).length;
  const valueCaveatCount = filtered.filter((player) => claimConflictAudit(player).status !== "consistent").length;
  const sourceClassGapCount = filtered.filter((player) => sourceCoverageTargetAudit(player).missingRequired.length > 0).length;

  const databaseStats = isExecutiveMode()
    ? [
        ["Records in view", filtered.length, "after selected filters", "tracked-records"],
        ["Priority profiles", keyCount, "first players to brief", "key-players"],
        ["Journey steps", journeyCategories.length, "agreed ecosystem structure", "journey-steps"],
        ["Linked sources", linkedSourceCount, sourceNote, "evidence-links"],
        [
          "Appfigures note",
          appfiguresRows ? `${appfiguresRows} credentialed` : "Pending",
          `${credentialQueueCount} app based records require credentialed metrics`,
          "appfigures"
        ],
        ["Yousician links", "Prepared", "internal status not inferred externally", "relationships"],
        ["AI records", aiCount, "high AI signal records", "ai-relevant"],
        ["Market signals", signalCount, "news, media, funding, awards", "market-signals"],
        ["Source coverage", avgQuality, "linked source coverage", "source-confidence"],
        ["Value conflicts", valueConflictCount, "hard contradictions to review", "value-conflicts"]
      ]
    : [
    ["Records in view", filtered.length, "after global filters", "tracked-records"],
    ["Priority profiles", keyCount, "profile candidates", "key-players"],
    ["Linked sources", linkedSourceCount, sourceNote, "evidence-links"],
    ["Link checked", verifiedLinkedCount, "URL health only", "evidence-links"],
    ["Claim caveats", filtered.filter((player) => claimIntegrityFor(player).hasHypothesis).length, "hypotheses visible", "claim-caveats"],
    ["Missing proof", backlog, gapNote, "proof-debt"],
    ["App data needed", credentialQueueCount, "credentials / reports", "appfigures"],
    ["Market signals", signalCount, "monitoring inputs", "market-signals"],
    ["Yousician checks", internalCheckCount, "relationship validation", "relationships"],
    ["AI records", aiCount, "high AI signal", "ai-relevant"],
    ["Avg. source confidence", avgQuality, avgNote, "source-confidence"],
    ["Source class gaps", sourceClassGapCount, "missing source type coverage", "source-targets"],
    ["Value conflicts", valueConflictCount, "hard contradictions", "value-conflicts"],
    ["Consistency notes", valueCaveatCount, "credential or source caveats", "claim-caveats"]
  ];

  els.databaseStats.innerHTML = databaseStats
    .map(
      ([label, value, note, action]) => `
        <button class="database-stat" type="button" data-dashboard-action="${escapeHtml(action)}">
          ${iconHtml(databaseActionIcon(action), "database-stat-icon")}
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </button>
      `
    )
    .join("");
}

function renderDatabaseSegments() {
  const filtered = getFilteredPlayers();
  els.databaseSegments.innerHTML = databaseSegments
    .map((segment) => {
      const count = filtered.filter((player) => segment.matches(player)).length;
      return `
        <button class="segment-button ${state.dbSegment === segment.id ? "active" : ""}" data-segment="${segment.id}" type="button">
          ${iconHtml(segment.icon, "segment-icon")}
          <span>${escapeHtml(segment.label)}</span>
          <small>${count}</small>
        </button>
      `;
    })
    .join("");

  els.databaseSegments.querySelectorAll(".segment-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.dbSegment = button.dataset.segment;
      renderDatabase();
    });
  });
  els.databaseSort.value = state.dbSort;
  if (els.databaseRating) els.databaseRating.value = state.ratingMode;
}

function renderDatabaseVisuals(rows) {
  if (!els.databaseVisuals) return;
  const visibleRows = rows;
  const priorityRows = [...visibleRows].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name));
  const proofDebtRows = priorityRows.filter(hasCriticalEvidenceGap);
  const readyRows = priorityRows.filter(isReadyRecord);
  const labelIds = new Set([
    state.selectedPlayerId,
    ...priorityRows.filter((player) => player.key).slice(0, 5).map((player) => player.id),
    ...proofDebtRows.slice(0, 5).map((player) => player.id),
    ...readyRows.slice(0, 3).map((player) => player.id)
  ]);
  const matrixRows = [...visibleRows].sort((a, b) =>
    Number(hasCriticalEvidenceGap(a)) - Number(hasCriticalEvidenceGap(b)) ||
    Number(a.key) - Number(b.key) ||
    totalPriority(a) - totalPriority(b) ||
    a.name.localeCompare(b.name)
  );
  const matrixPoints = databaseMatrixLayout(matrixRows, labelIds);
  const avgQuality = Math.round(visibleRows.reduce((sum, player) => sum + qualityProfile(player).score, 0) / Math.max(visibleRows.length, 1));
  const keyRecordCount = visibleRows.filter((player) => player.key).length;
  const proofGapCount = proofDebtRows.length;
  const readyCount = readyRows.length;
  const valueConflictCount = visibleRows.filter((player) => claimConflictAudit(player).conflicts.length > 0).length;
  const valueCaveatCount = visibleRows.filter((player) => claimConflictAudit(player).status !== "consistent").length;
  const sourceClassGapCount = visibleRows.filter((player) => sourceCoverageTargetAudit(player).missingRequired.length > 0).length;
  const categoryRows = journeyCategories
    .map((category) => {
      const items = rows.filter((player) => journeyCategoryFor(player).id === category.id);
      const avgCategoryQuality = Math.round(items.reduce((sum, player) => sum + qualityProfile(player).score, 0) / Math.max(items.length, 1));
      const gapCount = items.filter(hasCriticalEvidenceGap).length;
      const pressure = Math.round(average(items, (player) => player.relevance + player.momentum + player.aiScore) * 6.6);
      return { category, items, avgQuality: avgCategoryQuality, gapCount, pressure: Math.max(0, Math.min(100, pressure)) };
    })
    .filter((item) => item.items.length)
    .sort((a, b) => b.items.length - a.items.length || b.pressure - a.pressure);

  els.databaseVisuals.innerHTML = `
    <section class="visual-panel database-matrix-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Ecosystem coverage view</span>
          <h3>Which priority records need better proof?</h3>
        </div>
        <p>Important records sit at the top. Move them right by adding stronger sources.</p>
      </div>
      <div class="database-visual-stats" aria-label="Evidence coverage summary">
        <button type="button" data-dashboard-action="source-confidence"><strong>${avgQuality}%</strong> avg source confidence</button>
        <button type="button" data-dashboard-action="key-players"><strong>${keyRecordCount}</strong> priority records</button>
        <button type="button" data-dashboard-action="ready-records"><strong>${readyCount}</strong> ready for use</button>
        <button type="button" data-dashboard-action="proof-debt"><strong>${proofGapCount}</strong> proof gaps</button>
        <button type="button" data-dashboard-action="source-targets"><strong>${sourceClassGapCount}</strong> source class gaps</button>
        <button type="button" data-dashboard-action="value-conflicts"><strong>${valueConflictCount}</strong> value conflicts</button>
        <button type="button" data-dashboard-action="claim-caveats"><strong>${valueCaveatCount}</strong> consistency notes</button>
      </div>
      <div class="database-confidence-legend" aria-label="Source confidence legend">
        <span><i class="legend-ready"></i> usable evidence</span>
        <span><i class="legend-gap"></i> proof needed</span>
        <span><i class="legend-key"></i> priority record</span>
      </div>
      <div class="visual-matrix database-priority-map ${rows.length > 70 ? "is-dense" : ""}" aria-label="Database evidence priority matrix">
        <span class="matrix-zone zone-invest">High priority, proof needed</span>
        <span class="matrix-zone zone-ready">High priority, ready to use</span>
        <span class="matrix-quadrant quadrant-watch">Lower priority</span>
        <span class="matrix-quadrant quadrant-proof">Good proof, lower priority</span>
        <span class="matrix-axis axis-y">Strategic priority</span>
        <span class="matrix-axis axis-x">Source confidence</span>
        <span class="matrix-threshold threshold-confidence"></span>
        <span class="matrix-threshold threshold-priority"></span>
        ${matrixPoints.map(databaseMatrixPointHtml).join("")}
      </div>
    </section>
    <section class="visual-panel category-proof-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Category proofing</span>
          <h3>Where the database is strongest or thinnest</h3>
        </div>
      </div>
      <div class="category-proof-list">
        ${categoryRows
          .map(
            ({ category, items, avgQuality, gapCount, pressure }) => `
              <button class="category-proof-row" type="button" data-dashboard-journey="${escapeHtml(category.id)}" style="--cat:${category.color}; --quality:${avgQuality}; --pressure:${pressure}">
                <header>
                  <span>${journeyIconHtml(category, "category-proof-icon")}${escapeHtml(category.shortName || category.name)}</span>
                  <strong>${items.length}</strong>
                </header>
                <div class="proof-bars">
                  <span title="Evidence strength"><i></i></span>
                  <span title="Strategic pressure"><i></i></span>
                </div>
                <small>${avgQuality}% source confidence / ${gapCount} completion gap${gapCount === 1 ? "" : "s"}</small>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
  bindVisualPlayers(els.databaseVisuals);
}

function databaseCardHtml(player) {
  const validation = internalValidationFor(player);
  const feeds = liveDataFeedsForPlayer(player);
  const needs = [...new Set([...sourceNeeds(player), ...feeds])].slice(0, 7);
  const category = categoryById(player.category);
  if (isExecutiveMode()) {
    const quality = qualityProfile(player);
    const activeRating = ratingForPlayer(player);
    const completionNeed = requiresCredentialedData(player)
      ? "Credentialed Appfigures metrics required before app performance ranking."
      : relationForPlayer(player)
        ? relationshipCompletionText()
        : nextAction(player);
    return `
      <article
        class="database-record-card executive-record-card ${player.key ? "key-record" : ""} ${
          player.id === state.selectedPlayerId ? "is-selected" : ""
        }"
        data-id="${player.id}"
        role="button"
        tabindex="0"
      >
        <header>
          <div>
            <strong>${companyInlineHtml(player)}</strong>
            <span>${escapeHtml(strategicRole(player))}</span>
          </div>
          ${player.key ? `<em>Key player</em>` : ""}
        </header>
        <p>${escapeHtml(player.description)}</p>
        ${playerExternalLinkRailHtml(player, 4, "record-link-rail")}
        <div class="record-meta-grid executive-record-meta">
          <span>${categoryIconHtml(category, "record-meta-icon")}<strong>Category</strong>${escapeHtml(category?.shortName || player.category)}</span>
          <span>${iconHtml(productLensIconForLabel(productFocusLabel(player)), "record-meta-icon")}<strong>Product lens</strong>${escapeHtml(productFocusLabel(player))}</span>
          <span>${iconHtml("sliders-horizontal", "record-meta-icon")}<strong>${escapeHtml(activeRating.label)}</strong>${escapeHtml(activeRating.display)}</span>
          <span>${iconHtml("shield-check", "record-meta-icon")}<strong>Source confidence</strong>${escapeHtml(quality.label)}</span>
          <span>${iconHtml("git-compare-arrows", "record-meta-icon")}<strong>Consistency</strong>${escapeHtml(quality.conflictAudit.status === "consistent" ? "No conflict flagged" : quality.conflictAudit.status === "conflict" ? "Review conflict" : "Caveat")}</span>
          <span>${iconHtml("lightbulb", "record-meta-icon")}<strong>Why it matters</strong>${escapeHtml(player.why)}</span>
        </div>
        <div class="record-action-row executive-completion-row">
          <strong>Completion note</strong>
          <span>${escapeHtml(completionNeed)}</span>
        </div>
      </article>
    `;
  }
  return `
    <article
      class="database-record-card ${player.key ? "key-record" : ""} ${player.id === state.selectedPlayerId ? "is-selected" : ""}"
      data-id="${player.id}"
      role="button"
      tabindex="0"
    >
      <header>
        <div>
          <strong>${companyInlineHtml(player)}</strong>
          <span>${escapeHtml(strategicRole(player))}</span>
        </div>
        ${player.key ? `<em>Key</em>` : ""}
      </header>
      <p>${escapeHtml(player.description)}</p>
      ${playerExternalLinkRailHtml(player, 4, "record-link-rail")}
      ${activeRatingMini(player)}
      <div class="record-meta-grid">
        <span>${categoryIconHtml(category, "record-meta-icon")}<strong>Category</strong>${escapeHtml(category?.shortName || player.category)}</span>
        <span>${iconHtml(productLensIconForLabel(productFocusLabel(player)), "record-meta-icon")}<strong>Product lens</strong>${escapeHtml(productFocusLabel(player))}</span>
        <span>${iconHtml("shield-check", "record-meta-icon")}<strong>Evidence</strong>${escapeHtml(qualityProfile(player).label)}</span>
        <span>${iconHtml("git-compare-arrows", "record-meta-icon")}<strong>Consistency</strong>${escapeHtml(claimConflictAudit(player).status === "consistent" ? "No conflict flagged" : "Review needed")}</span>
        <span>${iconHtml("sparkles", "record-meta-icon")}<strong>AI / momentum</strong>${escapeHtml(`${player.aiScore}/5 AI, ${player.momentum}/5 momentum`)}</span>
        <span>${iconHtml("user-check", "record-meta-icon")}<strong>Owner</strong>${escapeHtml(researchOwner(player))}</span>
      </div>
      <div class="record-action-row">
        <span>${escapeHtml(nextAction(player))}</span>
        <small>${escapeHtml(validation.status)}</small>
      </div>
      <div class="source-need-row">
        ${needs.map(sourceNeedChipHtml).join("")}
      </div>
      <div class="source-target-chip-row compact">
        ${sourceCoverageTargetChips(player, 6)}
      </div>
    </article>
  `;
}

function activeRatingMini(player) {
  const rating = ratingForPlayer(player);
  return `
    <div class="active-rating-mini">
      <span>${escapeHtml(rating.label)}</span>
      <strong>${escapeHtml(rating.display)}</strong>
      <small>${escapeHtml(rating.detail)}</small>
    </div>
  `;
}

function scoreStack(player) {
  const rating = ratingForPlayer(player);
  return `
    <div class="score-stack" aria-label="Strategic scores">
      <span class="selected-rating"><strong>${escapeHtml(rating.shortLabel)}</strong>${escapeHtml(rating.display)}</span>
      <span><strong>R</strong>${player.relevance}/5</span>
      <span><strong>M</strong>${player.momentum}/5</span>
      <span><strong>AI</strong>${player.aiScore}/5</span>
      <span><strong>Scale</strong>${escapeHtml(ratingForPlayer(player, "company").display)}</span>
      <span><strong>Rev</strong>${escapeHtml(ratingForPlayer(player, "revenue").display)}</span>
    </div>
  `;
}

function sourceNeedTags(player) {
  return sourceNeeds(player).map(sourceNeedChipHtml).join("");
}

function qualityCell(player) {
  const quality = qualityProfile(player);
  const coverage = quality.coverage;
  const claim = claimIntegrityFor(player);
  const conflict = claimConflictAudit(player);
  const gapText = quality.gaps.length ? quality.gaps.join(", ") : "no major gap flagged";
  const typeText = coverage.types.length ? coverage.types.slice(0, 3).join(" / ") : "no linked source type";
  const accessText = `${coverage.verifiedCount} verified, ${coverage.authRequiredCount} auth, ${coverage.restrictedCount} manual`;
  return `
    <div class="quality-cell">
      <div class="quality-head">
        <span class="quality-badge">${escapeHtml(quality.label)}</span>
        <strong>${quality.score}%</strong>
      </div>
      <div class="quality-bar" style="--quality:${quality.score}"><span></span></div>
      <div class="claim-mini-row">
        ${claimPillHtml(claim.evidence)}
        ${claimPillHtml(claim.size)}
        ${claimPillHtml(claim.ai)}
        <span class="claim-pill claim-${escapeHtml(conflict.status === "consistent" ? "verified" : conflict.status === "conflict" ? "hypothesis" : "mixed")}">
          ${escapeHtml(conflict.status === "consistent" ? "No conflict" : conflict.status === "conflict" ? "Conflict" : "Caveat")}
        </span>
      </div>
      <small>${coverage.count} linked / ${escapeHtml(typeText)} / access: ${escapeHtml(accessText)} / gaps: ${escapeHtml(gapText)}</small>
    </div>
  `;
}

function taxonomyCell(player) {
  const taxonomy = taxonomyProfile(player);
  const category = categoryById(player.category) || { color: "#00b884", shortName: "Other", name: "Other" };
  const journey = journeyCategoryFor(player);
  return `
    <div class="taxonomy-cell">
      <span class="category-pill" style="--cat:${category.color}">${categoryIconHtml(category, "chip-icon")}${escapeHtml(category.shortName || category.name)}</span>
      <strong>${journeyIconHtml(journey, "taxonomy-icon")}${escapeHtml(taxonomy.proximity)}</strong>
      <small>${iconHtml("route", "taxonomy-icon muted")}${escapeHtml(taxonomy.journey)}</small>
    </div>
  `;
}

function databaseRowsForCurrentMode(rows) {
  if (!isExecutiveMode()) return rows;
  return rows.slice(0, 36);
}

function compactTemplateText(value, maxLength = 92) {
  const text = nonEmptyString(value) || "No public claim loaded";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trim()}...`;
}

function foundedRecordFor(player) {
  if (nonEmptyString(player.founded)) {
    return {
      value: player.founded,
      detail: "Loaded factual field."
    };
  }
  const enriched = publicEnrichmentFor(player)?.founded;
  if (nonEmptyString(enriched?.value)) {
    return {
      value: enriched.value,
      detail: `${enriched.source || "Public source"} checked ${enriched.lastUpdated || publicEnrichmentFor(player)?.lastUpdated || ""}`.trim()
    };
  }
  return {
    value: "Founded to verify",
    detail: "Not loaded from a direct public source yet."
  };
}

function headquartersRecordFor(player) {
  if (nonEmptyString(player.hq)) {
    return {
      value: player.hq,
      basis: "Loaded HQ field",
      kind: "HQ field",
      caveat: "Footprint and market reach are shown separately."
    };
  }
  const enriched = publicEnrichmentFor(player)?.hq;
  if (nonEmptyString(enriched?.value)) {
    return {
      value: enriched.value,
      basis: enriched.source || "Public enrichment",
      kind: "Public HQ reference",
      caveat: "Public reference loaded automatically. Footprint and reach stay separate."
    };
  }
  const seeded = headquartersByPlayerId[player.id];
  if (seeded?.value) {
    return {
      value: seeded.value,
      basis: seeded.basis || "Public HQ seed",
      kind: "HQ seed",
      caveat: "Fallback value. Use the linked public source before board circulation."
    };
  }
  const entityKind = entityKindFor(player);
  const pendingValue = /individual|creator/i.test(entityKind)
    ? "Creator base to verify"
    : /institution/i.test(entityKind)
      ? "Institution HQ to verify"
      : /signal|media|data/i.test(entityKind)
        ? "Source owner HQ to verify"
        : "Company HQ to verify";
  return {
    value: pendingValue,
    basis: "No explicit HQ field loaded",
    kind: "Pending HQ field",
    caveat: "Do not infer headquarters from global footprint, market reach, or app availability."
  };
}

function templateHqFor(player) {
  return headquartersRecordFor(player).value;
}

function globalFootprintFor(player) {
  return nonEmptyString(player.footprint) || nonEmptyString(player.geography) || "Footprint to verify";
}

function reachSignalFor(player) {
  return nonEmptyString(player.reach) || "Reach signal to verify";
}

function templateRelationshipFor(player) {
  const validation = internalValidationFor(player);
  if (validation.overrideApplied && nonEmptyString(validation.knownRelationship)) {
    return compactTemplateText(validation.knownRelationship, 66);
  }
  if (relationForPlayer(player)) return "Internal owner check";
  if (/not yet captured|to be completed/i.test(player.relationship || "")) return "No public relationship claim";
  return compactTemplateText(player.relationship || validation.status, 66);
}

function templateNotesFor(player) {
  const quality = qualityProfile(player);
  const notes = [];
  if (requiresCredentialedData(player)) notes.push("Needs Appfigures");
  if (/to verify/i.test(player.ownership || "")) notes.push("Ownership check");
  if (/not yet captured|to be completed/i.test(player.relationship || "")) notes.push("Relationship owner needed");
  if (quality.gaps.length) notes.push(`Check ${quality.gaps.slice(0, 2).join(", ")}`);
  if (!notes.length) notes.push("Ready for quarterly review");
  return compactTemplateText([...new Set(notes)].join("; "), 92);
}

function keyPlayerTemplateRows(rows) {
  const preferredIds = new Set(["simply", "ultimate-guitar", "duolingo", "fender-play"]);
  const sorted = [...rows].sort((a, b) => {
    const preferredDelta = Number(preferredIds.has(b.id)) - Number(preferredIds.has(a.id));
    if (preferredDelta) return preferredDelta;
    return Number(b.key) - Number(a.key) || totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name);
  });
  return separateConfusingPlayerPairs(sorted, 4).slice(0, isExecutiveMode() ? 14 : 32);
}

function keyPlayerTemplateRowData(player) {
  const category = categoryById(player.category) || {};
  const journey = journeyCategoryFor(player);
  const strategicRating = ratingForPlayer(player, "strategic");
  const revenueSignal = ratingForPlayer(player, "revenue");
  return {
    color: category.color || journey.color || "#00d292",
    category: category.shortName || category.name || "To classify",
    subcategory: player.subcategory || taxonomyProfile(player).role,
    name: player.name,
    description: compactTemplateText(player.description, 90),
    revenueSize: `${ratingForPlayer(player, "company").display} scale, ${revenueSignal.display} revenue`,
    hq: templateHqFor(player),
    geography: globalFootprintFor(player),
    ownership: compactTemplateText(player.ownership, 74),
    strategicImportance: strategicRating.display,
    relationship: templateRelationshipFor(player),
    notes: templateNotesFor(player)
  };
}

function downloadKeyPlayerTemplateCsv(rows) {
  const header = [
    "Category",
    "Subcategory",
    "Name",
    "Description",
    "Revenue / size",
    "HQ",
    "Global footprint",
    "Ownership / investors",
    "Strategic importance",
    "Existing relationship",
    "Notes / comments"
  ];
  const csvRows = keyPlayerTemplateRows(rows).map((player) => {
    const row = keyPlayerTemplateRowData(player);
    return [
      row.category,
      row.subcategory,
      row.name,
      row.description,
      row.revenueSize,
      row.hq,
      row.geography,
      row.ownership,
      row.strategicImportance,
      row.relationship,
      row.notes
    ];
  });
  downloadTextFile(
    "yousician-key-players-database-template.csv",
    "text/csv;charset=utf-8",
    toCsv([header, ...csvRows]),
    "Key player template exported."
  );
}

function renderKeyPlayerTemplate(rows, totalRows) {
  if (!els.keyPlayerTemplate) return;
  const templateRows = keyPlayerTemplateRows(rows);
  const shownCount = templateRows.length;
  const limited = shownCount < rows.length;
  els.keyPlayerTemplate.innerHTML = `
    <div class="template-panel-head">
      <div>
        <span class="section-kicker">Key players database template</span>
        <h3>Decision fields for the current view</h3>
        <p>Live template from the selected filters. Direct metric fields stay pending until internal or licensed data is added.</p>
      </div>
      <div class="template-panel-actions">
        <button class="ghost-button" type="button" data-template-open-all>Open full table</button>
        <button class="ghost-button" type="button" data-template-export>CSV template</button>
      </div>
    </div>
    <div class="template-table-wrap">
      <table class="template-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Name</th>
            <th>Description</th>
            <th>Revenue / size</th>
            <th>HQ</th>
            <th>Global footprint</th>
            <th>Ownership / investors</th>
            <th>Strategic importance</th>
            <th>Existing relationship</th>
            <th>Notes / comments</th>
          </tr>
        </thead>
        <tbody>
          ${
            templateRows
              .map((player) => {
                const row = keyPlayerTemplateRowData(player);
                const category = categoryById(player.category) || {};
                return `
                  <tr data-template-player="${escapeHtml(player.id)}" style="--cat:${row.color}" tabindex="0">
                    <td>
                      <span class="template-category-pill">
                        <span class="template-category-icon-wrap" aria-hidden="true">${categoryIconHtml(category, "template-category-icon")}</span>
                        <strong>${escapeHtml(row.category)}</strong>
                      </span>
                    </td>
                    <td>${escapeHtml(row.subcategory)}</td>
                    <td><strong>${companyInlineHtml(player)}</strong></td>
                    <td>${escapeHtml(row.description)}</td>
                    <td>${escapeHtml(row.revenueSize)}</td>
                    <td>${escapeHtml(row.hq)}</td>
                    <td>${escapeHtml(row.geography)}</td>
                    <td>${escapeHtml(row.ownership)}</td>
                    <td><span class="template-score">${escapeHtml(row.strategicImportance)}</span></td>
                    <td>${escapeHtml(row.relationship)}</td>
                    <td>${escapeHtml(row.notes)}</td>
                  </tr>
                `;
              })
              .join("") || `<tr><td colspan="11">${emptyState("No database rows match the current filters.")}</td></tr>`
          }
        </tbody>
      </table>
    </div>
    <div class="template-help-strip">
      <span><strong>${shownCount}</strong> of ${rows.length} filtered rows shown${limited ? `, ${totalRows} total records available` : ""}</span>
      <span>1 Populate missing HQ, owner and relationship fields</span>
      <span>2 Add Appfigures and revenue proof where relevant</span>
      <span>3 Keep footprint and interpretation separate from facts</span>
    </div>
  `;

  els.keyPlayerTemplate.querySelector("[data-template-export]")?.addEventListener("click", () => downloadKeyPlayerTemplateCsv(rows));
  els.keyPlayerTemplate.querySelector("[data-template-open-all]")?.addEventListener("click", () => {
    const fullTable = document.querySelector("#databaseView .table-wrap");
    fullTable?.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  els.keyPlayerTemplate.querySelectorAll("[data-template-player]").forEach((rowEl) => {
    const openRow = () => {
      selectPlayer(rowEl.dataset.templatePlayer);
      switchView("overview", { focusProfile: true });
    };
    rowEl.addEventListener("click", openRow);
    rowEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRow();
      }
    });
  });
}

function renderDatabaseLists(rows, totalRows) {
  const cardRows = separateConfusingPlayerPairs(rows, 4);
  const limited = rows.length < totalRows;
  const limitNote = limited
    ? `<article class="database-record-card database-limit-note">
        <header>
          <div>
            <strong>${rows.length} of ${totalRows} shown</strong>
            <span>Executive view is intentionally capped for faster scanning.</span>
          </div>
        </header>
        <p>Use filters, search, or Research mode when the full long tail is needed.</p>
      </article>`
    : "";
  if (els.databaseCards) {
    els.databaseCards.innerHTML =
      cardRows.map(databaseCardHtml).join("") + limitNote || emptyState("No records match the current database segment.");
    els.databaseCards.querySelectorAll("[data-id]").forEach((cardEl) => {
      const openRecord = () => {
        selectPlayer(cardEl.dataset.id);
        switchView("overview", { focusProfile: true });
      };
      cardEl.addEventListener("click", openRecord);
      cardEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openRecord();
        }
      });
    });
    els.databaseCards.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", (event) => event.stopPropagation());
      link.addEventListener("keydown", (event) => event.stopPropagation());
    });
  }
  els.databaseRows.innerHTML =
    rows
      .map((player) => {
        const validation = internalValidationFor(player);
        const feeds = liveDataFeedsForPlayer(player);
        return `
          <tr data-id="${player.id}" class="${player.key ? "key-row" : ""} ${
            player.id === state.selectedPlayerId ? "is-selected" : ""
          }" tabindex="0">
            <td class="entity-col">
              <div class="name-cell">
                <strong>${companyInlineHtml(player)}</strong>
                <span>${escapeHtml(player.description)}</span>
                <div class="mini-tag-row">
                  ${player.key ? `<span class="mini-tag key">Key</span>` : ""}
                  <span class="mini-tag">${iconHtml("building-2", "chip-icon")}${escapeHtml(entityKindFor(player))}</span>
                  <span class="mini-tag">${iconHtml("globe-2", "chip-icon")}Footprint: ${escapeHtml(globalFootprintFor(player))}</span>
                  <span class="mini-tag">${categoryIconHtml(categoryById(player.category), "chip-icon")}${escapeHtml(player.type)}</span>
                </div>
              </div>
            </td>
            <td>
              <strong>${escapeHtml(strategicRole(player))}</strong>
              <p>${escapeHtml(player.subcategory)}</p>
              ${factMiniHtml(player, 2)}
            </td>
            <td>
              ${taxonomyCell(player)}
            </td>
            <td>
              ${productLensChipHtml(player)}
            </td>
            <td>${scoreStack(player)}</td>
            <td>${qualityCell(player)}</td>
            <td>
              <div class="source-need-row">${sourceNeedTags(player)}</div>
              <p>${escapeHtml(player.sourceStatus)}</p>
            </td>
            <td>
              <strong>${escapeHtml(player.relationship)}</strong>
              <p>${escapeHtml(player.why)}</p>
            </td>
            <td>
              <strong>${escapeHtml(nextAction(player))}</strong>
              <p>${escapeHtml(player.recent)}</p>
            </td>
            <td>
              <span class="owner-chip">${escapeHtml(researchOwner(player))}</span>
              <p class="owner-note">${escapeHtml(validation.status)}</p>
              <div class="source-need-row">
                ${feeds.map(sourceNeedChipHtml).join("")}
              </div>
            </td>
          </tr>
        `;
      })
      .join("") ||
    `<tr><td colspan="10">${emptyState("No records match the current database segment.")}</td></tr>`;
  if (limited) {
    els.databaseRows.insertAdjacentHTML(
      "beforeend",
      `<tr class="database-limit-row"><td colspan="10">Showing ${rows.length} of ${totalRows} records in executive mode. Switch to Research mode or narrow the filters for the full database.</td></tr>`
    );
  }

  els.databaseRows.querySelectorAll("tr[data-id]").forEach((row) => {
    const openRow = () => {
      selectPlayer(row.dataset.id);
      switchView("overview", { focusProfile: true });
    };
    row.addEventListener("click", openRow);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRow();
      }
    });
  });
}

function renderDatabase() {
  renderDatabaseStats();
  renderDatabaseSegments();
  const rows = getDatabasePlayers();
  const displayRows = databaseRowsForCurrentMode(rows);
  renderKeyPlayerTemplate(displayRows, rows.length);
  renderDatabaseVisuals(displayRows);
  renderDatabaseLists(displayRows, rows.length);
}

function renderRelationshipValidationPanel() {
  if (!els.relationshipValidationPanel) return;
  const queue = validationQueue();
  const partnerCount = queue.filter((item) => item.relation.type === "partners").length;
  const competeCount = queue.filter((item) => item.relation.type === "competes").length;
  const influenceCount = queue.filter((item) => item.relation.type === "influences").length;
  const relationshipOverrideCount = Object.keys(liveOverrideContext.relationshipOverrides || {}).length;
  if (isExecutiveMode()) {
    const boardItems = [
      {
        label: "Known internally",
        value: relationshipOverrideCount,
        note: "loaded relationship rows",
        tone: "#00d292"
      },
      {
        label: "Needs owner",
        value: queue.length,
        note: "Yousician completion fields",
        tone: "#ffb84d"
      },
      {
        label: "Partner surface",
        value: partnerCount,
        note: "potential partner lanes",
        tone: "#11a5a5"
      },
      {
        label: "Defend / watch",
        value: competeCount + influenceCount,
        note: "competitive and influence lanes",
        tone: "#6e5cff"
      }
    ];
    els.relationshipValidationPanel.innerHTML = `
      <article class="validation-summary-card executive-relationship-summary relationship-completion-hero">
        <div>
          <span class="section-kicker">Relationship completion layer</span>
          <h3>Relationship status is tracked as a completion board.</h3>
          <p>Strategic proximity is mapped now; internal owners, contact history and confirmed relationship status remain explicit Yousician inputs.</p>
        </div>
        <div class="relationship-completion-board">
          ${boardItems
            .map(
              (item) => `
                <span style="--rel:${item.tone}">
                  <strong>${item.value}</strong>
                  <em>${escapeHtml(item.label)}</em>
                  <small>${escapeHtml(item.note)}</small>
                </span>
              `
            )
            .join("")}
        </div>
      </article>
      <div class="validation-queue executive-relationship-list relationship-work-queue">
        ${queue
          .sort((a, b) => b.relation.strength + b.player.relevance - (a.relation.strength + a.player.relevance))
          .slice(0, 8)
          .map(
            ({ relation, player }) => `
              <article style="--rel:${relationshipColor(relation.type)}">
                <header>
                  <strong>${companyInlineHtml(player)}</strong>
                  <span>${escapeHtml(relationshipTitle(relation.type))}</span>
                </header>
                <p>${escapeHtml(player.why)}</p>
                <small>${relation.strength}/5 proximity · needs Yousician owner confirmation</small>
              </article>
            `
          )
          .join("")}
      </div>
    `;
    return;
  }
  els.relationshipValidationPanel.innerHTML = `
    <article class="validation-summary-card">
      <div>
        <span class="section-kicker">Internal validation layer</span>
        <h3>${queue.length} relationship fields reserved for Yousician completion</h3>
        <p>Strategic links are mapped; Yousician owner, history and sensitivity fields still need owner confirmation. ${relationshipOverrideCount} internally completed relationship rows are currently loaded.</p>
        <div class="validation-action-row">
          <button class="ghost-button" data-handoff-action="relationship-template" type="button">Download relationship template</button>
          <button class="ghost-button" data-handoff-action="live-template" type="button">Download completion template</button>
        </div>
      </div>
      <div class="validation-metrics">
        <span><strong>${partnerCount}</strong> partner checks</span>
        <span><strong>${competeCount}</strong> competitive owners</span>
        <span><strong>${influenceCount}</strong> monitor lanes</span>
      </div>
    </article>
    <div class="validation-queue">
      ${queue
        .slice(0, 6)
        .map(
          ({ relation, player, validation }) => `
            <article style="--rel:${relationshipColor(relation.type)}">
              <header>
                <strong>${companyInlineHtml(player)}</strong>
                <span>${escapeHtml(validation.owner)}</span>
              </header>
              <p>${escapeHtml(validation.nextStep)}</p>
              <small>${escapeHtml(relationshipTitle(relation.type))} / strength ${relation.strength}/5</small>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  bindHandoffButtons(els.relationshipValidationPanel);
}

function renderRelationshipGraph() {
  const visibleIds = new Set(getFilteredPlayers().map((player) => player.id));
  const visibleRelations = relations
    .filter((rel) => visibleIds.has(rel.to))
    .map((rel) => ({ ...rel, player: players.find((item) => item.id === rel.to) }))
    .filter((rel) => rel.player)
    .sort((a, b) => b.strength + b.player.relevance - (a.strength + a.player.relevance));

  const lanes = [
    {
      type: "competes",
      title: "Defend",
      description: "Players closest to Yousician's learning and practice surface."
    },
    {
      type: "partners",
      title: "Partner",
      description: "Surfaces where Yousician could gain distribution, content, or utility depth."
    },
    {
      type: "influences",
      title: "Watch",
      description: "Forces that reshape the hobby, user expectations, or strategic options."
    }
  ];

  els.relationshipGraph.innerHTML = `
    <div class="matrix-head">
      <div>
        <span class="section-kicker">Strategic proximity</span>
        <h3>Relationship matrix</h3>
      </div>
      <p>Sorted by strength, relevance, and strategic closeness.</p>
    </div>
    <div class="relationship-lanes">
      ${lanes
        .map((lane) => {
          const laneRelations = visibleRelations.filter((rel) => rel.type === lane.type);
          return `
            <section class="relationship-lane" style="--lane:${relationshipColor(lane.type)}">
              <div class="lane-head">
                <span>${escapeHtml(lane.title)}</span>
                <strong>${laneRelations.length}</strong>
              </div>
              <p>${escapeHtml(lane.description)}</p>
              <div class="lane-stack">
                ${
                  laneRelations
                    .map(
                      (rel) => `
                        <button
                          class="lane-card ${rel.player.id === state.selectedPlayerId ? "is-selected" : ""}"
                          data-id="${escapeHtml(rel.player.id)}"
                          type="button"
                        >
                          ${logoMarkHtml(rel.player, "lane-avatar")}
                          <span>
                            <strong>${escapeHtml(rel.player.name)}</strong>
                            <small>${escapeHtml(rel.note)}</small>
                          </span>
                          <em>${rel.strength}/5</em>
                        </button>
                      `
                    )
                    .join("") || `<div class="lane-empty">No visible records</div>`
                }
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;

  els.relationshipGraph.querySelectorAll(".lane-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectPlayer(card.dataset.id);
      switchView("overview", { focusProfile: true });
    });
  });

  els.relationshipList.innerHTML =
    visibleRelations
      .slice(0, 6)
      .map((rel) => {
        const validation = internalValidationFor(rel.player);
        return `
          <article class="relationship-item" style="--rel:${relationshipColor(rel.type)}">
            <span>${escapeHtml(relationshipTitle(rel.type))}</span>
            <h3>${escapeHtml(rel.from)} to ${companyInlineHtml(rel.player, { logoClassName: "company-inline-logo relationship-inline-logo" })}</h3>
            <p>${escapeHtml(rel.note)}</p>
            <div class="badge-row">
              <span class="badge">${escapeHtml(categoryById(rel.player.category).name)}</span>
              <span class="badge">strength ${rel.strength}/5</span>
            </div>
            <div class="relationship-validation-note">
              <strong>${escapeHtml(validation.status)}</strong>
              <small>${escapeHtml(validation.owner)} · ${escapeHtml(validation.knownRelationship)}${validation.overrideApplied ? ` · ${escapeHtml(validation.source)}` : ""}</small>
            </div>
          </article>
        `;
      })
      .join("") || emptyState("internal relationship status not captureds match the current filter.");
}

function renderSourceStatus() {
  const status = researchContext.status;
  const studies = researchContext.studies || [];
  const principles = researchContext.marketPrinciples || [];
  const evidenceStatus = evidenceContext.status || evidenceContextFallback.status;
  const liveStatus = liveOverrideContext.status || liveOverrideFallback.status;
  const publicStatus = publicEnrichmentContext.status || publicEnrichmentFallback.status;
  els.sourceStatusPanel.innerHTML = `
    <article class="source-status-card ${status.liveAccess === "blocked_by_atlassian_login" ? "blocked" : ""}">
      <div>
        <span class="section-kicker">Research data layer</span>
        <h3>${escapeHtml(status.label)}</h3>
        <p>${escapeHtml(status.note)}</p>
        <div class="source-need-row">
        <span class="source-need">Last checked ${escapeHtml(status.lastChecked)}</span>
        <span class="source-need">${escapeHtml(humanizeStatus(status.liveAccess))}</span>
        <span class="source-need">${escapeHtml(evidenceStatus.label)}</span>
        <span class="source-need">${escapeHtml(liveStatus.label)}</span>
        <span class="source-need">${escapeHtml(publicStatus.label)}${publicStatus.checkedPlayers ? ` · ${escapeHtml(publicStatus.checkedPlayers)} public checks` : ""}</span>
        <span class="source-need">Link health is not claim proof</span>
        <a class="source-need source-link" href="${escapeHtml(status.databaseUrl)}" target="_blank" rel="noopener noreferrer">Open Confluence database</a>
        </div>
      </div>
      <div class="research-source-list">
        <strong>Loaded research anchors</strong>
        ${
          studies
            .map(
              (study) => `
                <a href="${escapeHtml(study.url)}" target="_blank" rel="noopener noreferrer">
                  <span>${escapeHtml(study.title)}</span>
                  <small>${escapeHtml(study.scope)}</small>
                </a>
              `
            )
            .join("") || `<p>${escapeHtml("No study links loaded yet.")}</p>`
        }
      </div>
      <div class="research-principles">
        <strong>Market principles carried into player profiles</strong>
        <ul>
          ${principles.slice(0, 4).map((principle) => `<li>${escapeHtml(principle)}</li>`).join("")}
        </ul>
      </div>
    </article>
    ${renderSelfUpdatingPolicyPanel()}
  `;
}

function renderSelfUpdatingPolicyPanel() {
  const publicStatus = publicEnrichmentContext.status || publicEnrichmentFallback.status;
  const publicEntries = Object.values(publicEnrichmentContext.playerEnrichment || {});
  const publicMetricCount = publicEntries.filter((entry) => entry.publicMetric).length;
  const publicWebsiteCount = publicEntries.filter((entry) => entry.website).length;
  const sourceCount = sourceLibrary().length;
  const credentialedNeeded = players.filter(requiresCredentialedData).length;
  const relationshipNeeded = validationQueue().length;
  const conflictCount = publicEntries.reduce((sum, entry) => sum + (entry.conflicts?.length || 0), 0);
  const stats = [
    { label: "Public profiles checked", value: publicStatus.checkedPlayers || publicEntries.length || 0 },
    { label: "Official websites tracked", value: publicWebsiteCount },
    { label: "Public app ratings", value: publicMetricCount },
    { label: "Evidence links", value: sourceCount },
    { label: "Credentialed gates", value: credentialedNeeded },
    { label: "Relationship checks", value: relationshipNeeded },
    { label: "Value conflicts", value: conflictCount }
  ];
  return `
    <section class="self-update-policy-panel" aria-label="Self updating policy">
      <header class="self-update-policy-head">
        <div>
          <span class="section-kicker">Self updating policy</span>
          <h3>Keep the facts alive, keep the decisions reviewed</h3>
          <p>Automate observable public facts and source health. Queue changed claims for review. Import sensitive metrics only from approved data sources. Keep strategic judgment human owned.</p>
        </div>
        <div class="self-update-status">
          <strong>${escapeHtml(publicStatus.version || publicStatus.label || "Public layer")}</strong>
          <span>${escapeHtml(publicStatus.lastUpdated || "Not refreshed yet")}</span>
        </div>
      </header>
      <div class="self-update-stat-row">
        ${stats
          .map(
            (stat) => `
              <article>
                <strong>${escapeHtml(stat.value)}</strong>
                <span>${escapeHtml(stat.label)}</span>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="self-update-rule-grid">
        ${selfUpdatingPolicy
          .map(
            (rule) => `
              <article class="self-update-rule rule-${escapeHtml(rule.tone)}">
                <header>
                  <span>${escapeHtml(rule.lane)}</span>
                  <strong>${escapeHtml(rule.cadence)}</strong>
                </header>
                <p>${escapeHtml(rule.rule)}</p>
                <ul>
                  ${rule.fields.map((field) => `<li>${escapeHtml(field)}</li>`).join("")}
                </ul>
                <small>${escapeHtml(rule.owner)}</small>
              </article>
            `
          )
          .join("")}
      </div>
      ${renderSelfUpdatingFieldMatrix()}
    </section>
  `;
}

function renderSelfUpdatingFieldMatrix() {
  return `
    <div class="self-update-field-matrix" aria-label="Self updating field matrix">
      <header>
        <div>
          <span class="section-kicker">Field level contract</span>
          <h4>What should stay self updating</h4>
        </div>
        <p>Safe automation is limited to observable source facts. Anything that changes the strategic read is queued, imported from an approved source, or kept manual.</p>
      </header>
      <div class="self-update-field-grid">
        ${selfUpdatingFieldContracts
          .map((contract) => {
            const meta = selfUpdateToneMeta(contract.tone);
            return `
              <article class="self-update-field-card update-${escapeHtml(contract.tone)}">
                <div>
                  <i data-lucide="${escapeHtml(meta.icon)}"></i>
                  <span>${escapeHtml(contract.group)}</span>
                </div>
                <strong>${escapeHtml(contract.field)}</strong>
                <p>${escapeHtml(contract.rule)}</p>
                <small>${escapeHtml(contract.cadence)} · ${escapeHtml(contract.owner)}</small>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderEvidenceLibrary() {
  if (!els.evidenceLibrary) return;
  const sources = sourceLibrary();
  const status = evidenceContext.status || evidenceContextFallback.status;
  const publicStatus = publicEnrichmentContext.status || publicEnrichmentFallback.status;
  const publicEntries = Object.values(publicEnrichmentContext.playerEnrichment || {});
  const publicSourceCount = publicEntries.reduce((sum, entry) => sum + (entry.sources?.length || 0), 0);
  const publicMetricCount = publicEntries.filter((entry) => entry.publicMetric).length;
  const usageBySource = new Map();
  players.forEach((player) => {
    (evidenceRecordFor(player).sourceIds || []).forEach((sourceId) => {
      const source = sourceById(sourceId);
      const usageKey = sourceCanonicalId(source) || sourceId;
      const list = usageBySource.get(usageKey) || [];
      list.push(player.name);
      usageBySource.set(usageKey, list);
    });
  });
  const highCount = sources.filter((source) => source.tier === "High").length;
  const typeGroups = sources.reduce((groups, source) => {
    groups[source.type] = groups[source.type] || [];
    groups[source.type].push(source);
    return groups;
  }, {});
  const groups = Object.entries(typeGroups).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  const avgCoverage = Math.round(players.reduce((sum, player) => sum + evidenceCoverage(player).score, 0) / Math.max(players.length, 1));
  const verifiedCount = sources.filter((source) => sourceAccessStatus(source) === "verified").length;
  const authCount = sources.filter((source) => sourceAccessStatus(source) === "auth-required").length;
  const manualCount = sources.filter((source) => ["access-restricted", "timeout"].includes(sourceAccessStatus(source))).length;
  const repairCount = sources.filter((source) => sourceAccessStatus(source) === "needs-replacement").length;
  const refreshedPostureRows = refreshedSourcePostureIds
    .map((id) => players.find((player) => player.id === id))
    .filter(Boolean)
    .map((player) => {
      const quality = qualityProfile(player);
      const coverage = quality.coverage;
      const nextGate =
        sourceNeeds(player)[0] ||
        coverage.gatedQuestions?.[0] ||
        quality.gaps[0] ||
        "Quarterly refresh only";
      return { player, quality, coverage, nextGate };
    });
  const sourceAuditRows = players
    .map((player) => ({
      player,
      quality: qualityProfile(player),
      targetAudit: sourceCoverageTargetAudit(player),
      conflictAudit: claimConflictAudit(player)
    }))
    .sort(
      (a, b) =>
        Number(b.conflictAudit.status === "conflict") - Number(a.conflictAudit.status === "conflict") ||
        Number(b.conflictAudit.status === "review") - Number(a.conflictAudit.status === "review") ||
        a.targetAudit.score - b.targetAudit.score ||
        a.conflictAudit.score - b.conflictAudit.score ||
        totalPriority(b.player) - totalPriority(a.player)
    );
  const sourceClassCompleteCount = sourceAuditRows.filter((row) => row.targetAudit.missingRequired.length === 0).length;
  const conflictRows = sourceAuditRows.filter((row) => row.conflictAudit.status !== "consistent");
  const hardConflictCount = sourceAuditRows.filter((row) => row.conflictAudit.status === "conflict").length;

  els.evidenceLibrary.innerHTML = `
    <article class="evidence-library-card">
      <div>
        <span class="section-kicker">Evidence library</span>
        <h3>${escapeHtml(status.label)}</h3>
        <p>${escapeHtml(status.method)}</p>
        <small>${escapeHtml(status.caveat)}</small>
      </div>
      <div class="evidence-library-stats">
        <span><strong>${sources.length}</strong> library sources</span>
        <span><strong>${verifiedCount}</strong> links checked</span>
        <span><strong>${authCount + manualCount}</strong> gated/manual</span>
        <span><strong>${avgCoverage}%</strong> avg. coverage</span>
        <span><strong>${sourceClassCompleteCount}/${players.length}</strong> class complete</span>
        <span><strong>${publicSourceCount}</strong> public checks</span>
        <span><strong>${publicMetricCount}</strong> public ratings</span>
        <span><strong>${hardConflictCount}</strong> hard conflicts</span>
      </div>
      <small>${escapeHtml(publicStatus.caveat || "Public enrichment never replaces credentialed app or internal data.")}</small>
    </article>
    <section class="source-consistency-panel">
      <div class="source-consistency-head">
        <div>
          <span class="section-kicker">Cross source consistency</span>
          <h3>Values are checked against source classes before they become claims</h3>
          <p>Each player is tested for missing source types and contradictory value signals such as reach wording versus direct metrics, ownership caveats, broken sources and metric gates.</p>
        </div>
        <div>
          <strong>${conflictRows.length}</strong>
          <span>records with caveats</span>
        </div>
      </div>
      <div class="source-consistency-grid">
        ${sourceAuditRows
          .slice(0, 16)
          .map(({ player, targetAudit, conflictAudit }) => {
            const primaryIssue =
              conflictAudit.conflicts[0] ||
              conflictAudit.warnings[0] ||
              targetAudit.missingRequired[0]?.reason ||
              conflictAudit.supported[0] ||
              "No contradiction flagged.";
            return `
              <button class="source-consistency-card source-consistency-${escapeHtml(conflictAudit.status)}" type="button" data-visual-player="${escapeHtml(player.id)}">
                <strong>${companyInlineHtml(player, { logoClassName: "company-inline-logo source-inline-logo" })}</strong>
                <span>${escapeHtml(conflictAudit.status === "consistent" ? "Consistent" : conflictAudit.status === "conflict" ? "Conflict review" : "Caveat")}</span>
                <small>${escapeHtml(primaryIssue)}</small>
                <em>${targetAudit.score}% source class fit / ${conflictAudit.score}% consistency</em>
                <div class="source-target-chip-row compact">
                  ${sourceCoverageTargetChips(player, 5)}
                </div>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
    ${
      refreshedPostureRows.length
        ? `
          <section class="source-posture-panel">
            <div class="source-posture-head">
              <div>
                <span class="section-kicker">New source posture</span>
                <h3>Close Yousician adjacencies now have explicit proof states</h3>
                <p>Each card shows whether the player is publicly sourced, still needs Appfigures, or needs internal relationship validation.</p>
              </div>
              <strong>${refreshedPostureRows.length} refreshed records</strong>
            </div>
            <div class="source-posture-grid">
              ${refreshedPostureRows
                .map(
                  ({ player, quality, coverage, nextGate }) => `
                    <button class="source-posture-card" type="button" data-visual-player="${escapeHtml(player.id)}" style="--source-color:${colorFor(player)}">
                      <span>
                        <strong>${companyInlineHtml(player, { logoClassName: "company-inline-logo source-inline-logo" })}</strong>
                      </span>
                      <em>${escapeHtml(quality.label)} / ${quality.score}%</em>
                      <small>${coverage.count} sources · ${coverage.highCount} high tier · ${coverage.verifiedCount} checked</small>
                      <small>${escapeHtml(coverage.types.slice(0, 3).join(" / ") || "No source type loaded")}</small>
                      <b>${escapeHtml(nextGate)}</b>
                    </button>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : ""
    }
    <div class="evidence-library-groups">
      ${
        groups
          .map(
            ([type, items], index) => `
              <details class="evidence-source-group" ${index < 4 ? "open" : ""}>
                <summary>
                  <span>${escapeHtml(type)}</span>
                  <strong>${items.length}</strong>
                </summary>
                <div class="source-mini-list">
                  ${items
                    .map((source) => {
                      const usedBy = usageBySource.get(sourceCanonicalId(source)) || [];
                      const url = sourceUrl(source);
                      return `
                        ${
                          url
                            ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">`
                            : `<span class="source-mini-list-item is-unlinked">`
                        }
                          <span>${escapeHtml(source.title)}</span>
                          <small>${escapeHtml(source.scope)}</small>
                          <em>${escapeHtml(source.tier)} tier / ${escapeHtml(sourceAccessLabel(source))} / ${usedBy.length ? `used by ${usedBy.slice(0, 3).join(", ")}` : "not yet mapped to a player"}</em>
                        ${url ? "</a>" : "</span>"}
                      `;
                    })
                    .join("")}
                </div>
              </details>
            `
          )
          .join("") || emptyState("No evidence sources loaded.")
      }
    </div>
  `;
  bindVisualPlayers(els.evidenceLibrary);
}

function renderValidationReadiness() {
  if (!els.validationReadiness) return;
  const credentialQueueCount = players.filter(requiresCredentialedData).length;
  const relationshipChecks = validationQueue().length;
  const readyFeeds = liveDataFeeds.filter((feed) => feed.ready).length;
  const liveMetricOverrideCount = players.filter((player) => directMetricFor(player)).length;
  const relationshipOverrideCount = Object.keys(liveOverrideContext.relationshipOverrides || {}).length;
  const liveStatus = liveOverrideContext.status || liveOverrideFallback.status;
  els.validationReadiness.innerHTML = `
    <article class="validation-readiness-card">
      <div>
        <span class="section-kicker">Operational readiness</span>
        <h3>Prepared for live data and internal validation</h3>
        <p>${escapeHtml(liveStatus.label)}: ${escapeHtml(liveStatus.caveat)}</p>
        <div class="validation-action-row">
          <button class="ghost-button" data-handoff-action="relationship-template" type="button">Download relationship template</button>
          <button class="ghost-button" data-handoff-action="live-template" type="button">Download completion template</button>
        </div>
      </div>
      <div class="validation-metrics">
        <span><strong>${credentialQueueCount}</strong> live-data records</span>
        <span><strong>${relationshipChecks}</strong> relationship checks</span>
        <span><strong>${liveMetricOverrideCount}</strong> direct metrics</span>
        <span><strong>${relationshipOverrideCount}</strong> relationship overrides</span>
        <span><strong>${readyFeeds}/${liveDataFeeds.length}</strong> feeds ready</span>
      </div>
    </article>
    <div class="live-feed-grid">
      ${liveDataFeeds
        .map(
          (feed) => `
            <article class="live-feed-card">
              <header>
                <strong>${escapeHtml(feed.name)}</strong>
                <span>${escapeHtml(feed.status)}</span>
              </header>
              <p>${escapeHtml(feed.unlocks)}</p>
              <small><strong>${escapeHtml(feed.owner)}</strong> · ${escapeHtml(feed.nextStep)}</small>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  bindHandoffButtons(els.validationReadiness);
}

function renderInternalGapAudit() {
  if (!els.internalGapAudit) return;
  const priorityPlayers = players.filter((player) => player.key);
  const playerProfiles = priorityPlayers
    .map((player) => ({ player, profile: internalGapProfileFor(player), gate: internalGateSummaryFor(player) }))
    .sort(
      (a, b) =>
        internalGapPriorityWeight(b.gate.profile.priority) - internalGapPriorityWeight(a.gate.profile.priority) ||
        totalPriority(b.player) - totalPriority(a.player) ||
        a.player.name.localeCompare(b.player.name)
    );
  const criticalAreas = internalGapAreas.filter((area) => area.priority === "Critical").length;
  const owners = new Set(internalDataRequestPack.map((group) => group.owner)).size;
  const requestCount = internalDataRequestPack.reduce((sum, group) => sum + group.asks.length, 0);
  const gapRecordCount = players.filter((player) => internalGapAreasForPlayer(player).some((area) => area.priority === "Critical")).length;

  els.internalGapAudit.innerHTML = `
    <section class="internal-gap-panel">
      <div class="internal-gap-hero">
        <div>
          <span class="section-kicker">Internal data gap audit</span>
          <h3>Decision readiness still depends on Yousician inputs</h3>
          <p>
            Public evidence can describe the ecosystem. Internal monetization, retention, rights, relationship and user research data decide what Yousician should do next.
          </p>
        </div>
        <div class="internal-gap-actions">
          <button class="ghost-button" data-handoff-action="internal-request-pack" type="button">Download request pack</button>
          <button class="ghost-button" data-handoff-action="live-template" type="button">Download override template</button>
        </div>
      </div>

      <div class="internal-gap-metrics" aria-label="Internal data gap summary">
        <article><strong>${criticalAreas}</strong><span>critical gate areas</span></article>
        <article><strong>${owners}</strong><span>internal owner groups</span></article>
        <article><strong>${requestCount}</strong><span>requested inputs</span></article>
        <article><strong>${gapRecordCount}</strong><span>records with critical gates</span></article>
      </div>

      <div class="internal-gap-layout">
        <article class="internal-gap-column">
          <header>
            <span>Gate areas</span>
            <strong>What must be validated before hard claims</strong>
          </header>
          <div class="internal-gap-area-list">
            ${internalGapAreas
              .sort((a, b) => internalGapPriorityWeight(b.priority) - internalGapPriorityWeight(a.priority) || a.label.localeCompare(b.label))
              .map(
                (area) => `
                  <details class="internal-gap-area" ${area.priority === "Critical" ? "open" : ""}>
                    <summary>
                      <span>${escapeHtml(area.label)}</span>
                      <strong>${escapeHtml(area.priority)}</strong>
                    </summary>
                    <p>${escapeHtml(area.why)}</p>
                    <ul>${area.missing.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                    <small><strong>${escapeHtml(area.owner)}</strong> · ${escapeHtml(area.nextStep)}</small>
                  </details>
                `
              )
              .join("")}
          </div>
        </article>

        <article class="internal-gap-column">
          <header>
            <span>Priority player checks</span>
            <strong>The shortlist needs specific internal proof</strong>
          </header>
          <div class="internal-player-gap-list">
            ${playerProfiles
              .map(
                ({ player, profile, gate }) => `
                  <button class="internal-player-gap" type="button" data-player-id="${escapeHtml(player.id)}">
                    <span>${logoMarkHtml(player, "internal-gap-logo")}<strong>${escapeHtml(player.name)}</strong></span>
                    <em>${escapeHtml(gate.label)}</em>
                    <small>${escapeHtml(profile.questions[0] || profile.nextStep)}</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </article>
      </div>

      <div class="internal-request-grid">
        <article class="internal-request-pack">
          <header>
            <span>Minimal data request pack</span>
            <strong>Ask for only what changes a decision</strong>
          </header>
          <div class="internal-owner-grid">
            ${internalDataRequestPack
              .map(
                (group) => `
                  <details class="internal-owner-card">
                    <summary>
                      <span>${escapeHtml(group.owner)}</span>
                      <strong>${group.asks.length}</strong>
                    </summary>
                    <ul>${group.asks.map((ask) => `<li>${escapeHtml(ask)}</li>`).join("")}</ul>
                  </details>
                `
              )
              .join("")}
          </div>
        </article>
        <article class="claim-risk-rules">
          <header>
            <span>Claim risk rules</span>
            <strong>What not to say yet</strong>
          </header>
          ${internalClaimRiskRules
            .map(
              (rule) => `
                <div>
                  <span>${escapeHtml(rule.label)}</span>
                  <p>${escapeHtml(rule.rule)}</p>
                  <small>${escapeHtml(rule.owner)}</small>
                </div>
              `
            )
            .join("")}
        </article>
      </div>
    </section>
  `;
  bindHandoffButtons(els.internalGapAudit);
  bindVisualPlayers(els.internalGapAudit);
}

function renderSourceVisuals() {
  if (!els.sourceVisuals) return;
  const sources = sourceLibrary();
  const usageBySource = new Map();
  players.forEach((player) => {
    (evidenceRecordFor(player).sourceIds || []).forEach((sourceId) => {
      const source = sourceById(sourceId);
      const usageKey = sourceCanonicalId(source) || sourceId;
      const list = usageBySource.get(usageKey) || [];
      list.push(player.id);
      usageBySource.set(usageKey, list);
    });
  });
  const accessCounts = {
    verified: sources.filter((source) => sourceAccessStatus(source) === "verified").length,
    auth: sources.filter((source) => sourceAccessStatus(source) === "auth-required").length,
    manual: sources.filter((source) => ["access-restricted", "timeout"].includes(sourceAccessStatus(source))).length,
    repair: sources.filter((source) => sourceAccessStatus(source) === "needs-replacement").length,
    unchecked: sources.filter((source) => sourceAccessStatus(source) === "not-checked").length
  };
  const accessTotal = Object.values(accessCounts).reduce((sum, count) => sum + count, 0);
  const total = Math.max(1, accessTotal);
  const verifiedDeg = Math.round((accessCounts.verified / total) * 360);
  const authDeg = verifiedDeg + Math.round((accessCounts.auth / total) * 360);
  const manualDeg = authDeg + Math.round((accessCounts.manual / total) * 360);
  const repairDeg = manualDeg + Math.round((accessCounts.repair / total) * 360);
  const donutValue = accessCounts.verified || sources.length;
  const donutLabel = accessCounts.verified ? "links checked" : sources.length ? "sources loaded" : "no sources";
  const donutNote = accessCounts.verified
    ? `${accessCounts.verified} of ${sources.length} source links have a recorded link check.`
    : sources.length
      ? "Sources are loaded, but no link check status is recorded yet."
      : "The evidence library file has not loaded in this view.";
  const typeRows = Object.entries(
    sources.reduce((groups, source) => {
      const group = groups[source.type] || { count: 0, usedPlayers: new Set(), high: 0 };
      group.count += 1;
      (usageBySource.get(sourceCanonicalId(source)) || []).forEach((playerId) => group.usedPlayers.add(playerId));
      group.high += source.tier === "High" ? 1 : 0;
      groups[source.type] = group;
      return groups;
    }, {})
  )
    .map(([type, data]) => [type, { count: data.count, used: data.usedPlayers.size, high: data.high }])
    .sort((a, b) => b[1].count - a[1].count || b[1].used - a[1].used)
    .slice(0, 9);
  const maxTypeCount = Math.max(1, ...typeRows.map(([, data]) => data.count));

  els.sourceVisuals.innerHTML = `
    <section class="visual-panel source-donut-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Source QA map</span>
          <h3>How trustworthy the current library is</h3>
        </div>
        <p>Checked links dominate, while gated/manual items and claim caveats stay explicit instead of being hidden.</p>
      </div>
      <div class="source-donut-wrap">
        <div
          class="source-donut ${accessCounts.verified ? "" : "is-empty"}"
          style="--verified-deg:${verifiedDeg}deg; --auth-deg:${authDeg}deg; --manual-deg:${manualDeg}deg; --repair-deg:${repairDeg}deg"
          aria-label="Source access status distribution"
        >
          <strong>${donutValue}</strong>
          <span>${escapeHtml(donutLabel)}</span>
        </div>
        <div class="source-donut-legend">
          <span><i class="legend-verified"></i>${accessCounts.verified} links checked</span>
          <span><i class="legend-auth"></i>${accessCounts.auth} auth required</span>
          <span><i class="legend-manual"></i>${accessCounts.manual} manual / restricted</span>
          <span><i class="legend-repair"></i>${accessCounts.repair} repair needed</span>
          ${accessCounts.unchecked ? `<span><i class="legend-unchecked"></i>${accessCounts.unchecked} not checked</span>` : ""}
          <p class="source-donut-note">${escapeHtml(donutNote)}</p>
        </div>
      </div>
    </section>
    <section class="visual-panel source-type-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Source mix</span>
          <h3>What kind of proof supports the database</h3>
        </div>
      </div>
      <div class="source-type-bars">
        ${typeRows
          .map(
            ([type, data]) => `
              <article class="source-type-row" style="--bar:${Math.max(7, Math.round((data.count / maxTypeCount) * 100))}">
                <header>
                  <strong>${escapeHtml(type)}</strong>
                  <span>${data.count}</span>
                </header>
                <div><span></span></div>
                <small>${data.used} mapped to players / ${data.high} high tier</small>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

async function backendRequest(path, options = {}) {
  const response = await fetch(path, {
    cache: "no-store",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || `Backend request failed: ${response.status}`);
  }
  return payload;
}

function backendCounts() {
  return backendState.status?.counts || {};
}

function backendStatusLabel() {
  if (backendState.loading) return "Checking";
  if (!backendState.available) return "Static mode";
  if (backendState.busyAction) return "Running";
  return "Live local backend";
}

function dataQualityStatusLabel(status) {
  return {
    pending: "Pending input",
    blocked: "Pending input",
    warning: "Needs review",
    passed: "Passed"
  }[status] || "Needs review";
}

function renderDataQualityCard(disabled) {
  const report = backendState.dataQuality;
  if (!report) {
    return `
      <section class="data-quality-card status-warning">
        <div class="data-quality-head">
          <div>
            <strong>Data Quality Check</strong>
            <span>Waiting for backend diagnostics.</span>
          </div>
          <em>Checking</em>
        </div>
      </section>
    `;
  }
  const checks = report.checks || [];
  const pendingCount = checks.filter((check) => check.status === "pending" || check.status === "blocked").length;
  const warningCount = checks.filter((check) => check.status === "warning").length;
  const passedCount = checks.filter((check) => check.status === "passed").length;
  return `
    <section class="data-quality-card status-${escapeHtml(report.overall_status)}">
      <div class="data-quality-head">
        <div>
          <span class="section-kicker">Data Quality Check</span>
          <strong>${escapeHtml(dataQualityStatusLabel(report.overall_status))}</strong>
          <p>${escapeHtml(report.safe_fix_scope || "Review gates stay visible; no pending statement is auto-promoted.")}</p>
        </div>
        <em>${escapeHtml(report.checked_at || "")}</em>
      </div>
      <div class="data-quality-summary">
        <span><strong>${pendingCount}</strong> pending</span>
        <span><strong>${warningCount}</strong> review</span>
        <span><strong>${passedCount}</strong> passed</span>
        <span><strong>${report.summary?.open_review_rows ?? 0}</strong> open queue</span>
      </div>
      <div class="data-quality-check-grid">
        ${checks
          .map(
            (check) => `
              <article class="quality-check-row status-${escapeHtml(check.status)}">
                <header>
                  <strong>${escapeHtml(check.label)}</strong>
                  <span>${escapeHtml(dataQualityStatusLabel(check.status))}</span>
                </header>
                <p>${escapeHtml(check.detail)}</p>
                <small>${escapeHtml(check.next_action)}</small>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="data-quality-actions">
        <button class="ghost-button" data-backend-action="reload" type="button" ${disabled}>Re-run check</button>
        <button class="primary-button" data-backend-action="data-quality-fix" type="button" ${disabled} ${report.safe_fix_available ? "" : "disabled"}>Fix safe data hygiene</button>
      </div>
    </section>
  `;
}

function renderDirectSourceContract() {
  const directMetricPlayers = getDatabasePlayers().filter((player) => directMetricFor(player)).length;
  const credentialedRows = credentialedAppfiguresCount();
  const appDataNeeded = getDatabasePlayers().filter((player) => requiresCredentialedData(player)).length;
  const sourceTotal = sourceLibrary().length;
  const reviewOpen = backendState.status?.counts?.open_review_queue ?? backendState.reviewRows.length;
  return `
    <section class="direct-source-contract" aria-label="Direct source update contract">
      <div class="backend-section-head">
        <strong>Self updating direct source contract</strong>
        <span>${directMetricPlayers} players with direct metrics</span>
      </div>
      <p>Public sources refresh into a review queue. Revenue, downloads, rank, review velocity, country mix, traffic and relationship fields only update from credentialed or internal inputs.</p>
      <div class="direct-source-grid">
        <article><strong>${sourceTotal}</strong><span>tracked source links</span></article>
        <article><strong>${reviewOpen}</strong><span>open review items</span></article>
        <article><strong>${credentialedRows}</strong><span>credentialed app rows</span></article>
        <article><strong>${appDataNeeded}</strong><span>direct data gaps</span></article>
      </div>
      <ol>
        <li>Refresh public sources and stage changes for review.</li>
        <li>Import credentialed Appfigures, Similarweb, Crunchbase or internal exports.</li>
        <li>Approve source changes before they affect executive copy.</li>
        <li>Keep missing direct metrics as Pending.</li>
      </ol>
    </section>
  `;
}

function renderBackendOps() {
  if (!els.backendOpsPanel) return;
  const counts = backendCounts();
  const disabled = backendState.available && backendState.busyAction ? "disabled" : "";
  const busyText = backendState.busyAction ? `Running ${backendState.busyAction}...` : "Ready for local operations";
  const openReviews = backendState.reviewRows.slice(0, 5);
  const relPending = (backendState.relationships || []).find((row) => !row.confirmed_owner || /not yet captured/i.test(row.relationship_status || ""));
  const appfiguresRows = credentialedAppfiguresCount();
  const scheduler = backendState.status?.scheduler || {};
  const schedulerLabel = scheduler.enabled
    ? `${scheduler.mode === "full_cycle" ? "Full cycle" : "Refresh only"} every ${scheduler.interval_minutes} min`
    : "Manual only";

  if (!backendState.available) {
    els.backendOpsPanel.innerHTML = `
      <article class="backend-shell static">
        <header>
          <div>
            <span class="section-kicker">Local backend</span>
            <h3>${escapeHtml(backendStatusLabel())}</h3>
            <p>The dashboard is currently being served as static files. Start the local backend to enable live review, Appfigures import, refresh and rebuild actions.</p>
          </div>
          <span class="backend-status-pill blocked">${backendState.loading ? "Checking" : "Not connected"}</span>
        </header>
        <div class="backend-command">
          <strong>Start command</strong>
          <code>scripts/start_backend.sh</code>
        </div>
        ${renderDirectSourceContract()}
        <p class="backend-note">${escapeHtml(backendState.error || "Expected API: /api/backend/status")}</p>
      </article>
    `;
    return;
  }

  els.backendOpsPanel.innerHTML = `
    <article class="backend-shell">
      <header>
        <div>
          <span class="section-kicker">Local backend</span>
          <h3>Live review gated backend is connected.</h3>
          <p>CSV source of truth, SQLite operational cache and rebuild actions are available from the dashboard.</p>
        </div>
        <span class="backend-status-pill">${escapeHtml(backendStatusLabel())}</span>
      </header>
      <div class="backend-metrics">
        <article><strong>${counts.open_review_queue ?? "..."}</strong><span>open review items</span></article>
        <article><strong>${appfiguresRows}</strong><span>credentialed Appfigures rows</span></article>
        <article><strong>${counts.relationships_pending ?? "..."}</strong><span>relationships pending</span></article>
        <article><strong>${counts.refresh_checks_logged ?? "..."}</strong><span>refresh checks logged</span></article>
      </div>
      ${renderDirectSourceContract()}
      <div class="backend-action-grid">
        <button class="ghost-button" data-backend-action="reload" type="button" ${disabled}>Reload backend state</button>
        <button class="ghost-button" data-backend-action="refresh" type="button" ${disabled}>Run source refresh</button>
        <button class="ghost-button" data-backend-action="run-cycle" type="button" ${disabled}>Run refresh cycle</button>
        <button class="ghost-button" data-backend-action="rebuild" type="button" ${disabled}>Rebuild outputs</button>
        <button class="ghost-button" data-backend-action="package" type="button" ${disabled}>Repack deliverables</button>
      </div>
      <section class="backend-scheduler-card">
        <div class="backend-section-head">
          <strong>Scheduled refresh</strong>
          <span>${escapeHtml(schedulerLabel)}</span>
        </div>
        <p>Automatic runs detect public source changes and stage them for review; they do not publish new market claims without human approval.</p>
        <div class="backend-action-grid compact">
          <button class="ghost-button" data-backend-action="scheduler-hourly" type="button" ${disabled}>Refresh hourly</button>
          <button class="ghost-button" data-backend-action="scheduler-cycle" type="button" ${disabled}>Full cycle hourly</button>
          <button class="ghost-button" data-backend-action="scheduler-stop" type="button" ${disabled}>Stop schedule</button>
        </div>
        <small>${scheduler.next_run ? `Next run: ${escapeHtml(scheduler.next_run)}` : "No automatic run scheduled."}</small>
      </section>
      <p class="backend-note">${escapeHtml(busyText)}. ${escapeHtml(backendState.status?.appfigures_rule || "")}</p>
      ${renderDataQualityCard(disabled)}
      <section class="backend-import-card">
        <div>
          <strong>Credentialed Appfigures import</strong>
          <span>Upload exported CSV. Rows are marked credentialed only through this import path.</span>
        </div>
        <input id="backendAppfiguresFile" type="file" accept=".csv,text/csv" />
        <button class="primary-button" data-backend-action="import-appfigures" type="button" ${disabled}>Import Appfigures CSV</button>
      </section>
      <section class="backend-review-card">
        <div class="backend-section-head">
          <strong>Open review queue</strong>
          <span>${openReviews.length ? "First five review gated changes" : "No open rows loaded"}</span>
        </div>
        <div class="backend-review-list">
          ${
            openReviews.length
              ? openReviews
                  .map(
                    (row) => `
                      <article>
                        <div>
                          <strong>${escapeHtml(row.source_name || row.watch_id || `Row ${row.row_id}`)}</strong>
                          <span>${escapeHtml(row.claim_area || row.change_type || "Review item")}</span>
                          <p>${escapeHtml(row.suggested_action || row.observed_title || "Review source change.")}</p>
                        </div>
                        <div class="backend-row-actions">
                          <button type="button" data-review-row="${escapeHtml(row.row_id)}" data-review-status="accepted">Accept</button>
                          <button type="button" data-review-row="${escapeHtml(row.row_id)}" data-review-status="rejected">Reject</button>
                        </div>
                      </article>
                    `
                  )
                  .join("")
              : `<p class="empty-state">No open review items from the backend.</p>`
          }
        </div>
      </section>
      <section class="backend-relationship-card">
        <div class="backend-section-head">
          <strong>Relationship completion</strong>
          <span>${relPending ? `Next pending: ${escapeHtml(relPending.player_name || relPending.player_id)}` : "No pending row loaded"}</span>
        </div>
        <div class="backend-relationship-form">
          <label>
            <span>Player ID</span>
            <input id="backendRelationshipPlayer" value="${escapeHtml(relPending?.player_id || "")}" placeholder="simply" />
          </label>
          <label>
            <span>Owner</span>
            <input id="backendRelationshipOwner" placeholder="Yousician owner" />
          </label>
          <label>
            <span>Status</span>
            <select id="backendRelationshipStatus">
              <option value="Internal relationship status not yet captured in this dataset. To be completed by Yousician.">To be completed</option>
              <option value="Confirmed internal relationship exists">Confirmed relationship exists</option>
              <option value="Confirmed no known internal relationship">Confirmed no known relationship</option>
              <option value="Sensitive / restricted internal status">Sensitive / restricted</option>
            </select>
          </label>
          <label class="wide">
            <span>Confirmed relationship note</span>
            <input id="backendRelationshipNote" placeholder="Only write internally confirmed information" />
          </label>
          <button class="primary-button" data-backend-action="save-relationship" type="button" ${disabled}>Save relationship field</button>
        </div>
      </section>
      <section class="backend-log-card">
        <div class="backend-section-head">
          <strong>Last operations</strong>
          <span>Local backend log</span>
        </div>
        <div class="backend-log-list">
          ${
            (backendState.status?.last_operations || [])
              .map((entry) => `<span><strong>${escapeHtml(entry.action)}</strong> ${escapeHtml(entry.status)} / ${escapeHtml(entry.created_at)}</span>`)
              .join("") || `<span>No operations logged yet.</span>`
          }
        </div>
      </section>
    </article>
  `;
  bindBackendOps();
}

async function loadBackendStatus({ silent = false } = {}) {
  backendState = { ...backendState, loading: true, error: "" };
  renderBackendOps();
  try {
    const [statusPayload, reviewPayload, relationshipPayload, appfiguresPayload, dataQualityPayload] = await Promise.all([
      backendRequest("/api/backend/status"),
      backendRequest("/api/backend/review-queue?open=1"),
      backendRequest("/api/backend/relationships"),
      backendRequest("/api/backend/appfigures"),
      backendRequest("/api/backend/data-quality")
    ]);
    backendState = {
      ...backendState,
      available: true,
      loading: false,
      error: "",
      status: statusPayload.status,
      reviewRows: reviewPayload.rows || [],
      relationships: relationshipPayload.rows || [],
      appfiguresRows: appfiguresPayload.rows || [],
      dataQuality: dataQualityPayload.data_quality || null
    };
    if (!silent) showToast("Local backend connected.");
  } catch (error) {
    backendState = {
      ...backendStateFallback,
      loading: false,
      error: error.message || String(error)
    };
  }
  renderBackendOps();
}

async function runBackendAction(action) {
  if (!backendState.available && action !== "reload") {
    showToast("Start the local backend first.");
    return;
  }
  try {
    backendState.busyAction = action;
    renderBackendOps();
    if (action === "reload") {
      await loadBackendStatus({ silent: true });
      showToast("Backend state reloaded.");
      return;
    }
    if (action === "import-appfigures") {
      const file = els.backendOpsPanel.querySelector("#backendAppfiguresFile")?.files?.[0];
      if (!file) {
        showToast("Choose an Appfigures CSV first.");
        return;
      }
      const csvText = await file.text();
      await backendRequest("/api/backend/appfigures/import", {
        method: "POST",
        body: JSON.stringify({ csv_text: csvText, credentialed: true })
      });
      showToast("Credentialed Appfigures CSV imported.");
    } else if (action === "save-relationship") {
      const panel = els.backendOpsPanel;
      await backendRequest("/api/backend/relationships/update", {
        method: "POST",
        body: JSON.stringify({
          player_id: panel.querySelector("#backendRelationshipPlayer")?.value || "",
          confirmed_owner: panel.querySelector("#backendRelationshipOwner")?.value || "",
          relationship_status: panel.querySelector("#backendRelationshipStatus")?.value || "",
          confirmed_relationship: panel.querySelector("#backendRelationshipNote")?.value || "",
          notes: panel.querySelector("#backendRelationshipNote")?.value || ""
        })
      });
      showToast("Relationship field saved.");
    } else {
      const endpoint = {
        refresh: "/api/backend/refresh",
        "run-cycle": "/api/backend/run-cycle",
        rebuild: "/api/backend/rebuild",
        package: "/api/backend/package",
        "data-quality-fix": "/api/backend/data-quality/fix"
      }[action];
      if (action === "scheduler-hourly" || action === "scheduler-cycle" || action === "scheduler-stop") {
        await backendRequest("/api/backend/scheduler", {
          method: "POST",
          body: JSON.stringify({
            enabled: action !== "scheduler-stop",
            interval_minutes: 60,
            mode: action === "scheduler-cycle" ? "full_cycle" : "refresh_only"
          })
        });
        showToast(action === "scheduler-stop" ? "Scheduled refresh stopped." : "Scheduled refresh enabled.");
      } else {
        await backendRequest(endpoint, { method: "POST", body: "{}" });
        showToast(
          action === "refresh"
            ? "Source refresh finished."
            : action === "run-cycle"
              ? "Refresh cycle finished."
              : action === "rebuild"
                ? "Outputs rebuilt."
                : action === "data-quality-fix"
                  ? "Safe data hygiene fixed."
                  : "Deliverables repacked."
        );
      }
    }
    await loadBackendStatus({ silent: true });
    if (action === "rebuild" || action === "import-appfigures" || action === "save-relationship") {
      await loadLiveOverrides();
    }
  } catch (error) {
    backendState.error = error.message || String(error);
    showToast(`Backend action failed: ${backendState.error}`);
  } finally {
    backendState.busyAction = "";
    renderBackendOps();
  }
}

async function updateBackendReview(rowId, reviewStatus) {
  try {
    backendState.busyAction = "review update";
    renderBackendOps();
    await backendRequest("/api/backend/review-queue/status", {
      method: "POST",
      body: JSON.stringify({
        row_id: Number(rowId),
        review_status: reviewStatus,
        notes: reviewStatus === "accepted" ? "Accepted from dashboard backend UI." : "Rejected from dashboard backend UI."
      })
    });
    showToast(`Review item marked ${reviewStatus}.`);
    await loadBackendStatus({ silent: true });
  } catch (error) {
    showToast(`Review update failed: ${error.message || String(error)}`);
  } finally {
    backendState.busyAction = "";
    renderBackendOps();
  }
}

function bindBackendOps() {
  els.backendOpsPanel?.querySelectorAll("[data-backend-action]").forEach((button) => {
    button.addEventListener("click", () => runBackendAction(button.dataset.backendAction));
  });
  els.backendOpsPanel?.querySelectorAll("[data-review-row]").forEach((button) => {
    button.addEventListener("click", () => updateBackendReview(button.dataset.reviewRow, button.dataset.reviewStatus));
  });
}

function renderSources() {
  renderBackendOps();
  renderSourceStatus();
  renderInternalGapAudit();
  renderSourceVisuals();
  renderValidationReadiness();
  renderEvidenceLibrary();
  els.sourceGrid.innerHTML = sourceCards
    .map(
      (source) => {
        const status =
          source.name === "Yousician User Research Database"
            ? `${researchContext.status.label}; ${humanizeStatus(researchContext.status.liveAccess)}`
            : source.status;
        return `
        <article class="source-card">
          <div>
            <h3>${source.name}</h3>
            <p>${source.use}</p>
          </div>
          <p><strong>Cadence:</strong> ${source.cadence}</p>
          <span class="source-status">${escapeHtml(status)}</span>
          ${sourceUrl(source) ? `<a class="source-card-link" href="${escapeHtml(sourceUrl(source))}" target="_blank" rel="noopener noreferrer">Open source</a>` : ""}
        </article>
      `;
      }
    )
    .join("");
}

function emptyState(text) {
  return `<p class="empty-state">${text}</p>`;
}

function isResearchOnlyView(view) {
  return view === "sources";
}

function viewExists(view) {
  return Boolean(document.getElementById(`${view}View`));
}

function requestedWorkspaceView(params, mode) {
  const requestedView = params.get("view") || "overview";
  if (!viewExists(requestedView)) return "overview";
  if (mode === "executive" && isResearchOnlyView(requestedView)) return "overview";
  return requestedView;
}

function applyViewState(view) {
  const nextView = viewExists(view) ? view : "overview";
  if (nextView !== "overview") dismissVolosTeaser({ render: false });
  state.view = nextView;
  document.body.dataset.view = nextView;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.view === nextView;
    button.classList.toggle("active", active);
    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  document.getElementById(`${nextView}View`)?.classList.add("active");
}

function syncWorkspaceUrl(options = {}) {
  if (document.body.dataset.printTarget === "brief-export") return;
  const url = new URL(window.location.href);
  if (state.mode === "research") {
    url.searchParams.set("mode", "research");
  } else {
    url.searchParams.delete("mode");
  }
  if (state.view === "overview") {
    url.searchParams.delete("view");
  } else {
    url.searchParams.set("view", state.view);
  }
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (nextUrl === currentUrl) return;
  const method = options.push ? "pushState" : "replaceState";
  window.history[method]({}, "", nextUrl);
}

function setMode(mode, options = {}) {
  state.mode = mode;
  document.body.dataset.mode = mode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  if (mode === "executive" && isResearchOnlyView(state.view)) {
    applyViewState("overview");
  }
  if (!options.skipUrl) syncWorkspaceUrl();

  renderAll();
  if (!options.silent) {
    showToast(
      mode === "research"
        ? "Research mode enabled: filters, sources, and workbench details are visible."
        : "Executive mode enabled: only executive handoff outputs are visible."
    );
  }
}

function preferredScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function flashElement(element) {
  if (!element) return;
  element.classList.remove("is-flashing");
  void element.offsetWidth;
  element.classList.add("is-flashing");
}

function syncInteractionState() {
  document.body.dataset.hasQuery = state.query.trim() ? "true" : "false";
  document.body.dataset.mapFocusMode = state.mapFocusMode;
  document.body.dataset.mapRecordCount = String(state.mapRecordLimit);
  document.body.dataset.mapRankMode = state.mapRankMode;
  document.body.dataset.bubbleSizeMode = state.bubbleSizeMode;
  document.body.dataset.ecosystemLayer = state.ecosystemLayer;
  document.querySelectorAll("[data-id]").forEach((element) => {
    element.classList.toggle("is-selected", element.dataset.id === state.selectedPlayerId);
  });
}

function selectedElementInView(view = state.view) {
  return [...document.querySelectorAll(`#${view}View [data-id]`)].find(
    (element) => element.dataset.id === state.selectedPlayerId
  );
}

function revealSelectedProfile(options = {}) {
  flashElement(els.profilePanel);
  const shouldScroll = options.forceScroll || window.matchMedia("(max-width: 1180px)").matches;
  if (shouldScroll && state.view === "overview") {
    els.profilePanel?.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
  }
}

function focusSelectedInCurrentView() {
  const selected = selectedElementInView();
  if (!selected) return;
  selected.scrollIntoView({ block: "center", behavior: preferredScrollBehavior() });
  flashElement(selected);
}

function scrollActiveViewIntoPlace(view, options = {}) {
  const target =
    view === "overview" && options.focusProfile ? els.profilePanel : document.getElementById(`${view}View`);
  if (!target) return;
  target.scrollIntoView({ block: "start", behavior: preferredScrollBehavior() });
  if (options.focusProfile) {
    revealSelectedProfile({ forceScroll: true });
  }
  if (options.focusSelected) {
    window.setTimeout(focusSelectedInCurrentView, 140);
  }
}

function setQuickFocus(label) {
  state.quickFocus = label || null;
}

function revealDashboardTarget(selector, options = {}) {
  window.setTimeout(() => {
    const target = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!target) return;
    target.scrollIntoView({ block: options.block || "start", behavior: preferredScrollBehavior() });
    if (options.flash !== false) flashElement(target);
  }, options.delay ?? 260);
}

function focusDatabaseSegment(segment, options = {}) {
  state.dbSegment = segment || "all";
  state.dbSort = options.sort || state.dbSort || "priority";
  setQuickFocus(options.focus || databaseSegmentById(state.dbSegment).label);
  switchView("database", { scroll: false });
  revealDashboardTarget(options.target || "#databaseView", { block: options.block || "start" });
}

function focusJourneyCategory(categoryId) {
  const category = journeyCategoryById(categoryId);
  if (!category) return;
  state.selectedCategory = categoryId;
  state.dbSegment = "all";
  state.dbSort = "priority";
  setQuickFocus(category.shortName || category.name);
  markMapFilterChanged();
  switchView("database", { scroll: false });
  revealDashboardTarget("#databaseView", { block: "start" });
  showToast(`${category.name} records are now visible.`);
}

function handleDashboardAction(action) {
  if (!action) return;
  const actionMap = {
    "tracked-records": () => {
      focusDatabaseSegment("all", { sort: "priority", focus: "All tracked records" });
      showToast("Showing all tracked records in the database.");
    },
    "key-players": () => {
      state.dbSegment = "all";
      state.monitorSegment = "all";
      setQuickFocus("Key players");
      switchView("key-players", { scroll: false });
      revealDashboardTarget("#keyPlayerVisuals", { block: "start" });
      showToast("Showing the priority player set.");
    },
    "ai-relevant": () => {
      focusDatabaseSegment("ai", { sort: "ai", focus: "AI records" });
      showToast("Showing AI records.");
    },
    "evidence-links": () => {
      state.dbSegment = "all";
      setQuickFocus("Linked sources");
      switchView("sources", { scroll: false });
      revealDashboardTarget("#sourceVisuals", { block: "start" });
      showToast("Opening the source evidence view.");
    },
    "ecosystem-map": () => {
      state.dbSegment = "all";
      setQuickFocus("Ecosystem map");
      switchView("overview", { scroll: false });
      renderOverviewMapWorkspace({ revealMap: true, flashSummary: true });
      revealDashboardTarget(".map-panel", { block: "start", delay: 140 });
      showToast("Showing the ecosystem map.");
    },
    "database": () => {
      focusDatabaseSegment("all", { sort: "priority", focus: "Market database" });
      showToast("Opening the market database.");
    },
    "guiding-questions": () => {
      state.dbSegment = "all";
      setQuickFocus("Guiding questions");
      switchView("overview", { scroll: false });
      revealDashboardTarget(".executive-handoff", { block: "start" });
      showToast("Showing the executive questions.");
    },
    "relationships": () => {
      state.dbSegment = "all";
      setQuickFocus("Yousician links");
      switchView("relationships", { scroll: false });
      revealDashboardTarget("#relationshipsView", { block: "start" });
      showToast("Opening Yousician relationship checks.");
    },
    "appfigures": () => {
      focusDatabaseSegment("appdata", { sort: "appdata", focus: "Appfigures queue" });
      showToast("Showing records that still need credentialed app metrics.");
    },
    "journey-steps": () => {
      state.dbSegment = "all";
      setQuickFocus("Journey steps");
      switchView("overview", { scroll: false });
      revealDashboardTarget("#journeyBlueprint", { block: "center" });
      showToast("Showing the journey structure.");
    },
    "market-signals": () => {
      focusDatabaseSegment("signals", { sort: "momentum", focus: "Market signals" });
      showToast("Showing market signal records.");
    },
    "source-confidence": () => {
      focusDatabaseSegment("all", { sort: "evidence", focus: "Source confidence", target: "#databaseVisuals" });
      showToast("Showing source confidence view.");
    },
    "claim-caveats": () => {
      focusDatabaseSegment("claims", { sort: "source", focus: "Claim caveats" });
      showToast("Showing records with claim caveats.");
    },
    "proof-debt": () => {
      focusDatabaseSegment("source", { sort: "source", focus: "Proof debt" });
      showToast("Showing records that still need proof.");
    },
    "source-targets": () => {
      focusDatabaseSegment("sourceclasses", { sort: "source", focus: "Source class gaps" });
      showToast("Showing records missing a required source class.");
    },
    "value-conflicts": () => {
      focusDatabaseSegment("conflicts", { sort: "source", focus: "Value consistency review" });
      showToast("Showing records with hard value conflicts.");
    },
    "ready-records": () => {
      focusDatabaseSegment("ready", { sort: "evidence", focus: "Ready records" });
      showToast("Showing records ready for use.");
    }
  };
  actionMap[action]?.();
}

function scheduleMapRender() {
  window.cancelAnimationFrame(scheduleMapRender.frame);
  scheduleMapRender.frame = window.requestAnimationFrame(() => {
    scheduleMapRender.frame = null;
    renderMap();
    syncInteractionState();
  });
}

function scheduleRenderAll(afterRender) {
  window.cancelAnimationFrame(scheduleRenderAll.frame);
  scheduleRenderAll.afterRender = afterRender;
  scheduleRenderAll.frame = window.requestAnimationFrame(() => {
    scheduleRenderAll.frame = null;
    const callback = scheduleRenderAll.afterRender;
    scheduleRenderAll.afterRender = null;
    renderAll();
    callback?.();
  });
}

function isDeferredRenderView(view) {
  return ["key-players", "database", "relationships", "sources"].includes(view);
}

function completeViewRender(options = {}) {
  renderActiveFilterStrip();
  syncInteractionState();
  refreshLucideIcons();
  scheduleTextDashNormalization(activeViewElement());
  if (options.scroll !== false) {
    window.requestAnimationFrame(() => scrollActiveViewIntoPlace(state.view, options));
  }
}

function scheduleActiveViewRender(options = {}) {
  const target = document.getElementById(`${state.view}View`);
  target?.setAttribute("aria-busy", "true");
  window.clearTimeout(scheduleActiveViewRender.timer);
  scheduleActiveViewRender.timer = window.setTimeout(() => {
    scheduleActiveViewRender.timer = null;
    renderActiveView();
    target?.removeAttribute("aria-busy");
    completeViewRender(options);
  }, 180);
}

function selectPlayer(id, options = {}) {
  if (!players.some((player) => player.id === id)) return;
  if (state.selectedPlayerId === id && !options.force) {
    if (options.revealProfile) window.requestAnimationFrame(() => revealSelectedProfile(options));
    return;
  }
  state.selectedPlayerId = id;
  syncInteractionState();
  if (state.view === "overview") {
    renderMapSummaryStrip();
    renderMapCompanyPicker();
    renderProfile();
    scheduleMapRender();
  } else if (state.view === "one-pager") {
    renderOnePager();
  }
  if (options.revealProfile) {
    window.requestAnimationFrame(() => revealSelectedProfile(options));
  }
}

function switchView(view, options = {}) {
  if (document.body.dataset.printTarget === "brief-export") {
    setReportMode(false);
    clearReportUrlParams();
  }
  if (isResearchOnlyView(view) && state.mode !== "research") {
    setMode("research", { silent: true, skipUrl: true });
  }
  applyViewState(view);
  if (!options.skipUrl) syncWorkspaceUrl({ push: options.pushUrl !== false });
  if (isDeferredRenderView(state.view)) {
    renderActiveFilterStrip();
    syncInteractionState();
    scheduleActiveViewRender(options);
    return;
  }
  renderActiveView();
  completeViewRender(options);
}

function clonedMapMarkup() {
  if (!els.ecosystemMap) return "";
  const clone = els.ecosystemMap.cloneNode(true);
  clone.removeAttribute("id");
  clone.setAttribute("class", "export-map-svg");
  clone.setAttribute("viewBox", "-25 -22 1050 744");
  clone.setAttribute("preserveAspectRatio", "xMidYMid meet");
  clone.querySelectorAll("[tabindex]").forEach((node) => node.removeAttribute("tabindex"));
  clone.querySelectorAll("[role='button']").forEach((node) => node.removeAttribute("role"));
  return clone.outerHTML;
}

function exportCategorySummary() {
  return journeyCategories
    .map((category) => {
      const categoryPlayers = players
        .filter((player) => journeyCategoryFor(player).id === category.id)
        .sort((a, b) => totalPriority(b) - totalPriority(a));
      const keyCount = categoryPlayers.filter((player) => player.key).length;
      return `
        <article style="--export-color:${category.color}">
          <strong>${escapeHtml(category.shortName)}</strong>
          <span>${categoryPlayers.length} records / ${keyCount} key players</span>
          <small>${escapeHtml(categoryPlayers.slice(0, 3).map((player) => player.name).join(", "))}</small>
        </article>
      `;
    })
    .join("");
}

function exportSourceTypes(player) {
  const coverage = evidenceCoverage(player);
  if (!coverage.sources.length) return "Source validation pending";
  return coverage.sources
    .slice(0, 2)
    .map((source) => `${source.type} · ${sourceAccessShort(source)}`)
    .join(" + ");
}

function renderExportSnapshot() {
  if (!els.exportSnapshot) return;
  const keyPlayers = allPlayersByPriority().filter((player) => player.key);
  const librarySources = sourceLibrary();
  const selectedLength = exportLengthOptions.find((option) => option.id === state.exportLength) || exportLengthOptions[1];
  const isShort = selectedLength.id === "short";
  const isStandard = selectedLength.id === "standard";
  const isFull = selectedLength.id === "full";
  document.body.dataset.exportLength = selectedLength.id;
  const sourceQa = {
    verified: librarySources.filter((source) => sourceAccessStatus(source) === "verified").length,
    auth: librarySources.filter((source) => sourceAccessStatus(source) === "auth-required").length,
    manual: librarySources.filter((source) => ["access-restricted", "timeout"].includes(sourceAccessStatus(source))).length,
    repair: librarySources.filter((source) => sourceAccessStatus(source) === "needs-replacement").length
  };
  const counts = backendState?.status?.counts || {};
  const exportMetrics = {
    players: counts.players || players.length,
    keyPlayers: keyPlayers.length,
    boardMoves: strategicMoves.length,
    briefCategories: journeyCategories.length,
    guidingQuestions: 3,
    claimRows: 185,
    appfiguresRequestRows: counts.appfigures_request_rows || 16,
    credentialedAppfiguresRows: credentialedAppfiguresCount(),
    openReviewItems: counts.open_review_queue ?? 16,
    refreshRetryItems: counts.refresh_retry_rows ?? 78,
    relationshipsPending: counts.relationships_pending ?? 28,
    refreshChecks: counts.refresh_checks_logged || 400
  };
  const briefRequirements = [
    ["Discover", "Covered", "Music discovery, artist platforms, media, culture and inspiration sources."],
    ["Start", "Covered", "Instrument brands, hardware, retail channels and beginner access routes."],
    ["Learn", "Covered", "Direct learning apps, curriculum, teachers, schools and education benchmarks."],
    ["Practice", "Covered", "Song choice, tabs, practice utilities, feedback and habit formation."],
    ["Create", "Covered", "Creation tools, AI music systems, DAWs, samples and production workflows."],
    ["Share", "Covered", "Community, artist tools, rights, creator feedback and distribution surfaces."],
    ["Identity", "Covered", "Music as culture, brand, recognition, trust, fandom and personal identity."],
    ["Broader platforms", "Triage", "Spotify, Disney, Epic Games, Roblox, Netflix, Nintendo and major education brands are included as strategic adjacency records."]
  ];
  const successTypes = [
    ["Direct app benchmark", "Simply", "Closest benchmark for onboarding, motivation, subscription learning and beginner conversion. Appfigures still required for performance ranking."],
    ["Repertoire and practice surface", "Ultimate Guitar", "Strong song intent and repertoire ownership around tabs, chords and repeat practice habits."],
    ["Learning mechanics benchmark", "Duolingo", "Useful reference for habit loops, gamification, subscription learning, brand and AI in education."],
    ["Hardware and trust route", "Fender", "Instrument brand reach can influence beginner access, trust, bundles and possible partner routes."],
    ["Classroom engagement benchmark", "Kahoot", "Useful reference for game based learning, teacher channels, classroom distribution and AI assisted content creation."]
  ];
  const completionNotes = [
    ["Appfigures", "Credentialed input", "App-performance fields are prepared for Appfigures import; the report avoids invented revenue, download, ranking or country estimates."],
    ["Yousician links", "Internal input", "Relationship owner/status fields are prepared in the workbook and intentionally left open for Yousician completion."],
    ["Sources", "Traceable", "Market observations retain source context; deeper source audit remains appendix only."]
  ];
  const deliverables = [
    ["Executive deck", "./deliverables/Yousician%20Strategic%20Environment%20Executive%20Summary%20v3.9.pptx", "Primary slide deck"],
    ["Deck PDF reading copy", "./deliverables/Yousician%20Strategic%20Environment%20Executive%20Summary%20v3.9.pdf", "Non-editing read copy"],
    ["Market landscape report", "./deliverables/Yousician%20Strategic%20Environment%20Mapping%20-%20Market%20Landscape%20Report%20v3.9.pdf", "Narrative market report"],
    ["Strategic environment database", "./deliverables/Yousician%20Strategic%20Environment%20Database%20v3.9.xlsx", "Recipient-facing workbook"],
    ["Submission package ZIP", "./deliverables/Yousician%20Strategic%20Environment%20Mapping%20-%20Submission%20Package.zip", "All current files in one package"]
  ];
  const directAnswers = [
    [
      "Who influences the future of music learning? Who is successful?",
      "Start with a small priority set: Simply, Ultimate Guitar, Duolingo, Fender and Kahoot. Use the long tail for context until board and LST feedback confirms the next entities to deepen."
    ],
    [
      "Who influences music as a hobby?",
      "The journey runs from discovery to identity: discovery platforms, instruments, learning apps, practice surfaces, creation tools, sharing loops and broader entertainment platforms all shape motivation."
    ],
    [
      "Who shapes the strategic environment?",
      "The next phase is triage, not more filler: agree categories, rank importance, validate with board and LST, then deepen only the highest priority profiles."
    ]
  ];
  const clipText = (value, limit = 160) => {
    const text = String(value || "").trim();
    if (text.length <= limit) return text;
    return `${text.slice(0, limit - 3).replace(/\s+\S*$/, "")}...`;
  };
  const reportDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const reportNavItems = isShort
    ? [
        ["Overview", "export-overview"],
        ["Answers", "export-answers"],
        ["Priority", "export-priority"],
        ["Completion", "export-completion"],
        ["Files", "export-files"]
      ]
    : [
        ["Overview", "export-overview"],
        ["Answers", "export-answers"],
        ["Priority", "export-priority"],
        ["Players", "export-players"],
        ["Map", "export-map"],
        ["Coverage", "export-coverage"],
        ["Moves", "export-moves"],
        ["Completion", "export-completion"],
        ["Files", "export-files"]
      ];
  if (isFull) {
    reportNavItems.splice(reportNavItems.length - 1, 0, ["Appendix", "export-appendix"]);
  }
  const toolbarLengthLabels = {
    short: ["Short", "Fast"],
    standard: ["Standard", "Default"],
    full: ["Full", "Appendix"]
  };
  const reportToolbar = `
    <nav class="export-report-toolbar" aria-label="Report navigation">
      <span class="export-report-progress" aria-hidden="true"></span>
      <div class="export-report-title">
        <strong>Executive report</strong>
        <span>${escapeHtml(selectedLength.label)} / ${escapeHtml(reportDate)}</span>
      </div>
      <div class="export-report-nav">
        ${reportNavItems
          .map(([label, id]) => `<a href="#${id}">${escapeHtml(label)}</a>`)
          .join("")}
      </div>
      <div class="export-report-length" aria-label="Report length">
        ${exportLengthOptions
          .map((option) => {
            const [label, pages] = toolbarLengthLabels[option.id] || [option.label, option.pages];
            return `
              <button class="${option.id === selectedLength.id ? "active" : ""}" type="button" data-export-length="${escapeHtml(option.id)}">
                <strong>${escapeHtml(label)}</strong>
                <span>${escapeHtml(pages)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="export-report-actions">
        <a href="./index.html?t=dashboard-from-report">Dashboard</a>
        <button type="button" data-export-print>Print / PDF</button>
      </div>
    </nav>
  `;
  const renderReadoutStrip = () => `
    <div class="export-readout-strip">
      <article>
        <strong>Ready first read</strong>
        <span>Deck, landscape report and database are the primary submission files.</span>
      </article>
      <article>
        <strong>Completion layers explicit</strong>
        <span>Appfigures and internal relationships are framed as credentialed/internal inputs.</span>
      </article>
      <article>
        <strong>Brief structure visible</strong>
        <span>Guiding answers, key players, map, categories, moves and files are separated.</span>
      </article>
    </div>
  `;
  const renderDirectAnswers = () => `
    <div class="export-answer-grid">
      ${directAnswers
        .map(
          ([question, answer]) => `
            <article>
              <strong>${escapeHtml(question)}</strong>
              <p>${escapeHtml(answer)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  const renderDeliverables = () => `
    <div class="export-deliverable-grid">
      ${deliverables
        .map(
          ([label, href, note]) => `
            <a href="${href}" download>
              <strong>${escapeHtml(label)}</strong>
              <span>${escapeHtml(note)}</span>
            </a>
          `
        )
        .join("")}
    </div>
    <div class="export-do-dont">
      <article>
        <strong>What it is</strong>
        <p>Executive ecosystem mapping with direct answers, market proof, and clearly qualified data caveats.</p>
      </article>
      <article>
        <strong>Performance caveat</strong>
        <p>App-based performance ranking is not finalized until credentialed Appfigures metrics are imported.</p>
      </article>
      <article>
        <strong>Appendix availability</strong>
        <p>Dashboard and source-audit appendix files are available on request, but are not part of the first read package.</p>
      </article>
    </div>
  `;
  const renderBriefRequirements = () => `
    <div class="export-requirement-grid">
      ${briefRequirements
        .map(
          ([requirement, status, note]) => `
            <article class="${status.toLowerCase()}">
              <strong>${escapeHtml(requirement)}</strong>
              <span>${escapeHtml(status)}</span>
              <p>${escapeHtml(note)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  const renderSuccessTypes = () => `
    <div class="export-slide-map success-type-map">
      ${successTypes
        .map(
          ([type, actor, note]) => `
            <article>
              <span>${escapeHtml(type)}</span>
              <strong>${escapeHtml(actor)}</strong>
              <p>${escapeHtml(note)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  const priorityActorNames = [
    "Simply",
    "Ultimate Guitar",
    "Duolingo",
    "Fender",
    "Kahoot"
  ];
  const priorityActors = priorityActorNames
    .map((name) => players.find((player) => player.name === name))
    .filter(Boolean);
  const completionTagFor = (player) => {
    if (requiresCredentialedData(player)) return "Credentialed data pending";
    if (/app|learning|practice|song|ai/i.test(`${player.type} ${player.description}`)) return "Source-backed profile";
    return "Relationship field open";
  };
  const renderPriorityActors = () => `
    <div class="export-priority-grid">
      ${priorityActors
        .map((player, index) => {
          const category = categoryById(player.category);
          return `
            <article class="export-priority-card" style="--accent:${category?.color || "#00d292"}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(player.name)}</strong>
              <em>${escapeHtml(category?.shortName || player.category)} / ${escapeHtml(productFocusLabel(player))}</em>
              <p>${escapeHtml(clipText(player.why, 142))}</p>
              <small>${escapeHtml(completionTagFor(player))}</small>
            </article>
          `;
        })
        .join("")}
    </div>
    <p class="export-note">These actors are shown first because they best answer the brief's core questions: learning influence, hobby influence, success surfaces, and strategic environment pressure.</p>
  `;
  const renderKeyPlayerCompactMatrix = () => {
    const groups = journeyCategories
      .map((category) => {
        const categoryPlayers = keyPlayers.filter((player) => journeyCategoryFor(player).id === category.id);
        if (!categoryPlayers.length) return "";
        return `
          <article class="export-key-matrix-card" style="--accent:${category.color}">
            <header>
              <strong>${escapeHtml(category.shortName)}</strong>
              <span>${categoryPlayers.length} key ${categoryPlayers.length === 1 ? "player" : "players"}</span>
            </header>
            <p>${categoryPlayers.map((player) => escapeHtml(player.name)).join(" / ")}</p>
            <small>${escapeHtml(category.description)}</small>
          </article>
        `;
      })
      .join("");
    return `
      <div class="export-key-matrix">${groups}</div>
      <p class="export-note">The first read keeps the key player set intentionally small. Add more only after board and LST feedback confirms the next priorities.</p>
    `;
  };
  const renderEcosystemMap = () => `
    <div class="export-map-frame">${clonedMapMarkup()}</div>
    <div class="export-category-grid">${exportCategorySummary()}</div>
  `;
  const renderMarketMoves = () => `
    <div class="export-timeline-list">
      ${strategicMoves
        .slice(-10)
        .reverse()
        .map((move) => `
          <article class="export-timeline-item">
            <time>${escapeHtml(move.date)}</time>
            <div>
              <span>${escapeHtml(move.category)}</span>
              <strong>${escapeHtml(move.title)}</strong>
              <p>${escapeHtml(clipText(move.summary, 185))}</p>
              <small>${escapeHtml(clipText(move.impact, 150))}</small>
            </div>
          </article>
        `)
        .join("")}
    </div>
    <p class="export-note">This first read timeline shows the most recent selected moves. The workbook and full report retain the wider 49 move evidence base; direct app performance still depends more heavily on Appfigures than press volume.</p>
  `;
  const renderDecisionGates = () => `
    <div class="export-gate-grid">
      ${completionNotes
        .map(
          ([item, status, note]) => `
            <article>
              <strong>${escapeHtml(item)}</strong>
              <span>${escapeHtml(status)}</span>
              <p>${escapeHtml(note)}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="export-do-dont">
      <article>
        <strong>What is covered</strong>
        <p>The requested ecosystem map, key players, database, relationship fields, guiding answers, market moves, awards and funding.</p>
      </article>
      <article>
        <strong>What is deliberately not claimed</strong>
        <p>Deep product UX reviews, invented Appfigures estimates, inferred relationships, or app performance winners.</p>
      </article>
    </div>
  `;
  const renderKeyPlayerProof = (fullDetail = false) => {
    if (!fullDetail) return renderKeyPlayerCompactMatrix();
    return `
      <div class="export-key-list is-full-detail">
      ${keyPlayers
        .map((player, index) => {
          const category = categoryById(player.category);
          return `
            <article class="export-key-card">
              <header>
                <div>
                  <strong>${index + 1}. ${escapeHtml(player.name)}</strong>
                  <span>${escapeHtml(player.type)} / ${escapeHtml(category?.shortName || player.category)}</span>
                </div>
                <em>${escapeHtml(recipientConfidenceLabel(player))}</em>
              </header>
              <dl>
                <div><dt>What they are</dt><dd>${escapeHtml(player.description)}</dd></div>
                <div><dt>Size / reach</dt><dd>${escapeHtml(player.reach)}</dd></div>
                <div><dt>Ownership / investors</dt><dd>${escapeHtml(player.ownership)}</dd></div>
                <div><dt>AI / recent initiative</dt><dd>${escapeHtml(executiveSignalText(player.ai || player.recent))}</dd></div>
                <div><dt>Why they matter</dt><dd>${escapeHtml(player.why)}</dd></div>
              </dl>
            </article>
          `;
        })
        .join("")}
      </div>
    `;
  };
  const renderDatabaseProof = () => `
    <div class="export-database-list">
      ${allPlayersByPriority()
        .slice(0, 24)
        .map((player) => {
          const taxonomy = taxonomyProfile(player);
          const quality = qualityProfile(player);
          return `
            <article class="export-database-card">
              <header>
                <strong>${escapeHtml(player.name)}</strong>
                <span>${escapeHtml(productFocusLabel(player))}</span>
              </header>
              <p>${escapeHtml(player.description)}</p>
              <dl>
                <div><dt>Role</dt><dd>${escapeHtml(taxonomy.role)}</dd></div>
                <div><dt>Decision use</dt><dd>${escapeHtml(taxonomy.decisionUse)}</dd></div>
                <div><dt>Evidence</dt><dd>${escapeHtml(quality.label)}</dd></div>
                <div><dt>Next action</dt><dd>${escapeHtml(nextAction(player))}</dd></div>
              </dl>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
  const renderRelationshipProof = () => `
    <div class="export-relationship-list">
      ${validationQueue()
        .slice(0, 16)
        .map(({ relation, player, validation }) => `
          <article class="export-relationship-card">
            <header>
              <strong>${escapeHtml(player.name)}</strong>
              <span>${escapeHtml(relationshipTitle(relation.type))} / strength ${relation.strength}</span>
            </header>
            <p>${escapeHtml(validation.knownRelationship)}</p>
            <div>
              <strong>Next internal completion step</strong>
              <span>${escapeHtml(validation.nextStep)}</span>
            </div>
          </article>
        `)
        .join("")}
    </div>
  `;
  const renderAppendixProof = () => `
    <div class="export-appendix-grid">
      <article>
        <strong>Appfigures status</strong>
        <p>${exportMetrics.appfiguresRequestRows} app rows are prepared for credentialed export/import. ${exportMetrics.credentialedAppfiguresRows} credentialed rows are populated; revenue, downloads, rank trends and country mix remain pending until import.</p>
      </article>
      <article>
        <strong>Source context</strong>
        <p>${exportMetrics.claimRows} statement-source rows keep ownership, funding, AI and size observations traceable in the appendix layer.</p>
      </article>
      <article>
        <strong>Market moves</strong>
        <p>${exportMetrics.boardMoves} news grade market moves are separated from appendix/context items so the main story stays news-led.</p>
      </article>
      <article>
        <strong>Source audit</strong>
        <p>${sourceQa.verified} sources are link checked; ${sourceQa.auth + sourceQa.manual + sourceQa.repair} rows need auth, manual access, or replacement handling.</p>
      </article>
    </div>
  `;
  const sections = [];
  const addSection = (title, intro, body, className = "", id = "") => {
    sections.push({ title, intro, body, className, id });
  };

  if (isShort) {
    addSection("Direct answers to the guiding questions", "Short export for fast executive reading.", renderDirectAnswers(), "", "export-answers");
    addSection("Priority actors", "The strongest signal actors are shown before supporting detail.", renderPriorityActors(), "export-priority-section", "export-priority");
    addSection("Completion notes", "The short version keeps only the caveats that must not be missed.", renderDecisionGates(), "", "export-completion");
    addSection("Package contents", "The deck, report, database and completion templates form the current package.", renderDeliverables(), "export-package-section", "export-files");
  } else {
    addSection("Direct answers to the guiding questions", "The three guiding questions are answered before any supporting detail.", renderDirectAnswers(), "", "export-answers");
    addSection("Priority actors and success surfaces", "Top actors first; success is shown by influence surface, not by unvalidated app performance ranking.", `${renderPriorityActors()}${renderSuccessTypes()}`, "export-priority-section", "export-priority");
    addSection("Key players at a glance", "The key player set is intentionally small before the next triage round.", renderKeyPlayerProof(false), "export-key-matrix-section", "export-players");
    addSection("Ecosystem map and journey coverage", "Visual map plus the agreed journey categories.", renderEcosystemMap(), "export-map-section", "export-map");
    addSection("Journey category coverage", "The agreed journey steps are shown individually, with broader platforms kept as triage records.", renderBriefRequirements(), "", "export-coverage");
    addSection("Last 24 months on the market", "A compact view of who made the news for what.", renderMarketMoves(), "", "export-moves");
    addSection("Completion notes", "Appfigures and relationships remain explicit completion layers without dominating the main story.", renderDecisionGates(), "", "export-completion");
    addSection("Package contents", "The deck, report, database and completion templates form the current package.", renderDeliverables(), "export-package-section", "export-files");
  }

  if (isFull) {
    addSection("Full key player profile appendix", "The full version includes the longer key player profile cards; the standard executive readout keeps this compressed.", renderKeyPlayerProof(true), "export-full-key-section", "export-appendix");
    addSection("Database sample", "The workbook contains the full structured data layer; this export includes the highest-priority records.", renderDatabaseProof(), "", "export-database");
    addSection("Relationship space", "Relationship status remains an internal Yousician field, not an external market claim.", renderRelationshipProof(), "", "export-relationships");
    addSection("Appendix source context", "Supporting proof points and clearly marked data caveats.", renderAppendixProof(), "", "export-source-context");
  }

  els.exportSnapshot.innerHTML = `
    ${reportToolbar}
    <header class="export-cover" id="export-overview">
      <div class="export-cover-grid">
        <div>
          <span class="section-kicker">Brief aligned executive report</span>
          <h1>Strategic Environment Mapping</h1>
          <p class="export-subtitle">Executive readout for Chris' first submission.</p>
          <div class="export-question">
            <strong>Primary answer</strong>
            <p>The strategic environment around Yousician is broader than direct competitors: music learning, hobby discovery, AI, songs, hardware, creators, education, rights, investors, media, awards and funding all shape the market.</p>
          </div>
        </div>
        <aside class="export-cover-card">
          <strong>Report status</strong>
          <span>${escapeHtml(selectedLength.printLabel)}</span>
          <p>Submission ready first read with explicit completion fields for credentialed Appfigures and internal relationship inputs.</p>
        </aside>
      </div>
      ${renderReadoutStrip()}
      <div class="export-stat-row">
        <strong>${exportMetrics.players} tracked records</strong>
        <strong>${exportMetrics.keyPlayers} key players</strong>
        <strong>${exportMetrics.boardMoves} news grade moves</strong>
        <strong>${exportMetrics.briefCategories} journey categories</strong>
        <strong>${exportMetrics.guidingQuestions} guiding questions answered</strong>
      </div>
      <p class="export-note">This report follows the new direction: simpler platform, agreed journey categories, small key player set, triage first, deeper research only where priority is confirmed.</p>
    </header>
    ${sections
      .map(
        (section, index) => `
          <section id="${escapeHtml(section.id || `export-section-${index + 1}`)}" class="export-section ${section.className}">
            <div class="export-section-head">
              <span>${index + 1}</span>
              <div>
                <h2>${escapeHtml(section.title)}</h2>
                <p>${escapeHtml(section.intro)}</p>
              </div>
            </div>
            ${section.body}
          </section>
        `
      )
      .join("")}
  `;
  requestReportNavigationSync();
}

function syncReportNavigationState() {
  const toolbar = document.querySelector(".export-report-toolbar");
  if (!toolbar) return;

  const sections = Array.from(document.querySelectorAll("#export-overview, .export-section")).filter((section) => section.id);
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
  toolbar.style.setProperty("--report-progress", progress.toFixed(4));

  let activeId = "export-overview";
  const activationLine = Math.max(96, Math.min(150, window.innerHeight * 0.22));
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= activationLine) activeId = section.id;
  });

  setReportActiveNav(activeId);
}

function setReportActiveNav(activeId) {
  const toolbar = document.querySelector(".export-report-toolbar");
  if (!toolbar) return;
  const links = Array.from(toolbar.querySelectorAll(".export-report-nav a"));
  links.forEach((link) => {
    const active = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function requestReportNavigationSync() {
  window.cancelAnimationFrame(requestReportNavigationSync.frame || 0);
  requestReportNavigationSync.frame = window.requestAnimationFrame(syncReportNavigationState);
}

let textDashNormalizationQueued = false;

function normalizeTextDashes(root = document.body) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (
      parent &&
      !parent.closest("script, style, textarea, input, select, option, code, pre") &&
      /[-‐‑‒–—]/.test(node.nodeValue || "")
    ) {
      nodes.push(node);
    }
    node = walker.nextNode();
  }
  nodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue.replace(/\s*[-‐‑‒–—]\s*/g, " ");
  });
}

function scheduleTextDashNormalization(root = document.body) {
  if (textDashNormalizationQueued) return;
  textDashNormalizationQueued = true;
  window.requestAnimationFrame(() => {
    textDashNormalizationQueued = false;
    normalizeTextDashes(root);
  });
}

function activeViewElement() {
  return document.getElementById(`${state.view}View`) || document.body;
}

function renderOverviewView() {
  renderJourneyBlueprint();
  renderEcosystemGuide();
  renderMapSummaryStrip();
  renderMapCompanyPicker();
  renderOverviewMonitorSnapshot();
  renderMap();
  renderCategoryLandscape();
  renderProfile();
  renderBriefReadiness();
  renderInsights();
  renderStrategicImplications();
  renderPortfolioVisual();
}

function renderOverviewSecondaryContent() {
  if (state.view !== "overview") return;
  renderEcosystemGuide();
  renderOverviewMonitorSnapshot();
  renderCategoryLandscape();
  renderBriefReadiness();
  renderInsights();
  renderStrategicImplications();
  renderPortfolioVisual();
  scheduleTextDashNormalization(activeViewElement());
}

function scheduleOverviewSecondaryContent() {
  if (state.view !== "overview") return;
  window.clearTimeout(scheduleOverviewSecondaryContent.timer);
  scheduleOverviewSecondaryContent.timer = window.setTimeout(() => {
    scheduleOverviewSecondaryContent.timer = null;
    renderOverviewSecondaryContent();
  }, 620);
}

function scheduleMapCompanyPickerRender() {
  if (state.view !== "overview") return;
  window.clearTimeout(scheduleMapCompanyPickerRender.timer);
  scheduleMapCompanyPickerRender.timer = window.setTimeout(() => {
    scheduleMapCompanyPickerRender.timer = null;
    renderMapCompanyPicker();
    syncInteractionState();
  }, 180);
}

function renderOverviewMapWorkspace(options = {}) {
  if (state.view !== "overview") {
    renderAll();
    return;
  }

  ensureSelectedPlayerVisibleInMap();
  if (options.includeFilters) renderFilters();
  renderActiveFilterStrip();
  if (options.includeFilters || options.refreshJourney) renderJourneyBlueprint();
  renderEcosystemGuide();
  renderMapSummaryStrip();
  if (options.deferPicker) {
    scheduleMapCompanyPickerRender();
  } else {
    renderMapCompanyPicker();
  }
  if (options.updateProfile !== false) renderProfile();
  syncInteractionState();
  if (options.includeFilters || options.refreshJourney) refreshLucideIcons();
  if (options.normalizeText !== false) scheduleTextDashNormalization(activeViewElement());
  scheduleMapRender();

  if (options.refreshSecondary) scheduleOverviewSecondaryContent();
  if (options.revealMap) window.requestAnimationFrame(revealMapForFilteredView);
  if (options.flashSummary) window.requestAnimationFrame(() => flashElement(els.mapSummaryStrip));
}

function renderActiveView() {
  if (state.view === "overview") {
    renderOverviewView();
    return;
  }
  if (state.view === "key-players") {
    renderKeyPlayers();
    return;
  }
  if (state.view === "one-pager") {
    renderOnePager();
    return;
  }
  if (state.view === "database") {
    renderDatabase();
    return;
  }
  if (state.view === "relationships") {
    renderRelationshipValidationPanel();
    renderRelationshipGraph();
    return;
  }
  if (state.view === "sources") {
    renderSources();
  }
}

function renderAll() {
  renderKpis();
  renderFilters();
  renderActiveFilterStrip();
  renderLegend();
  renderActiveView();
  if (document.body.dataset.printTarget === "brief-export") renderExportSnapshot();
  syncInteractionState();
  refreshLucideIcons();
  scheduleTextDashNormalization(activeViewElement());
}

function downloadCsv() {
  const header = [
    "Name",
    "Taxonomy group",
    "Taxonomy role",
    "Product lens",
    "Journey stage",
    "Strategic proximity",
    "Decision use",
    "Strategic role",
    "Entity kind",
    "Type",
    "Subcategory",
    "HQ",
    "Global footprint",
    "Reach signal",
    "Model",
    "Ownership",
    "Research owner",
    "Internal validation owner",
    "Internal validation status",
    "Known Yousician relationship",
    "Internal validation next step",
    "Live data feeds needed",
    "Next action",
    "Evidence status",
    "Quality score",
    "Evidence source count",
    "Evidence summary",
    "Evidence source titles",
    "Evidence source urls",
    "Open evidence questions",
    "Source needs",
    "AI signal",
    "Strategic relevance",
    "Momentum",
    "AI relevance",
    "Direct scale score",
    "Direct revenue score",
    "Direct reach score",
    "Source confidence score",
    "Competitive proximity score",
    "App data status score",
    "Last 24m / next check",
    "Research confidence",
    "Last verified",
    "Source status",
    "Relationship",
    "Why they matter"
  ];
  const rows = getDatabasePlayers().map((player) => {
    const quality = qualityProfile(player);
    const evidence = evidenceRecordFor(player);
    const evidenceSources = evidenceSourcesFor(player);
    const taxonomy = taxonomyProfile(player);
    const validation = internalValidationFor(player);
    const hq = headquartersRecordFor(player);
    return [
      player.name,
      taxonomy.group,
      taxonomy.role,
      productFocusLabel(player),
      taxonomy.journey,
      taxonomy.proximity,
      taxonomy.decisionUse,
      strategicRole(player),
      entityKindFor(player),
      player.type,
      player.subcategory,
      hq.value,
      globalFootprintFor(player),
      reachSignalFor(player),
      player.model,
      player.ownership,
      researchOwner(player),
      validation.owner,
      validation.status,
      validation.knownRelationship,
      validation.nextStep,
      liveDataFeedsForPlayer(player).join(" | "),
      nextAction(player),
      quality.label,
      quality.score,
      evidenceSources.length,
      evidence.summary,
      evidenceSources.map((source) => source.title).join(" | "),
      evidenceSources.map((source) => source.url).join(" | "),
      (evidence.openQuestions || []).join(" | "),
      sourceNeeds(player).join(" | "),
      player.ai,
      player.relevance,
      player.momentum,
      player.aiScore,
      directCompanyScaleScore(player),
      directRevenueScore(player),
      directReachScore(player),
      Math.max(1, Math.round(quality.score / 20)),
      competitiveProximityScore(player),
      appfiguresReadinessScore(player),
      player.recent,
      confidenceLabel(player),
      verifiedLabel(player),
      player.sourceStatus,
      player.relationship,
      player.why
    ];
  });
  downloadTextFile(
    "strategic-environment-database.csv",
    "text/csv;charset=utf-8",
    toCsv([header, ...rows]),
    "CSV exported for the current filtered view."
  );
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("visible");
  }, 2600);
}

function clearReportUrlParams() {
  const url = new URL(window.location.href);
  let changed = false;
  ["export", "length", "report"].forEach((key) => {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });
  if (changed) window.history.replaceState({}, "", url);
}

function setReportMode(active) {
  if (active) {
    document.body.dataset.printTarget = "brief-export";
    document.documentElement.dataset.reportScroll = "auto";
  } else {
    delete document.body.dataset.printTarget;
    delete document.documentElement.dataset.reportScroll;
  }
}

function prepareReportForPrint(options = {}) {
  const params = new URLSearchParams(window.location.search);
  const requestedLength = params.get("length");
  if (exportLengthOptions.some((option) => option.id === requestedLength)) {
    state.exportLength = requestedLength;
  }
  document.body.dataset.exportLength = state.exportLength;
  setReportMode(true);
  if (options.updateUrl !== false) {
    const url = new URL(window.location.href);
    url.searchParams.set("export", "brief");
    url.searchParams.set("length", state.exportLength);
    url.searchParams.set("report", "brief");
    window.history.replaceState({}, "", url);
  }
  renderExportSnapshot();
  window.scrollTo({ top: 0, behavior: "auto" });
  syncReportNavigationState();
}

function launchReportPrint() {
  prepareReportForPrint();
  document.body.dataset.printPending = "true";
  window.requestAnimationFrame(() => {
    window.setTimeout(() => window.print(), 80);
  });
}

function applyUrlExportMode(options = {}) {
  const params = new URLSearchParams(window.location.search);
  const isReportRequest = params.get("export") === "brief" && params.get("report") === "brief";
  const requestedMode = params.get("mode") === "research" && params.get("export") !== "brief" ? "research" : "executive";
  const requestedView = requestedWorkspaceView(params, requestedMode);
  state.mode = requestedMode;
  document.body.dataset.mode = requestedMode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === requestedMode);
  });
  applyViewState(requestedView);
  const requestedLength = params.get("length");
  if (exportLengthOptions.some((option) => option.id === requestedLength)) {
    state.exportLength = requestedLength;
  }
  document.body.dataset.exportLength = state.exportLength;
  if (isReportRequest) {
    setReportMode(true);
  } else {
    setReportMode(false);
    clearReportUrlParams();
    if (options.normalizeUrl !== false) syncWorkspaceUrl();
  }
  if (options.render) {
    renderAll();
    if (state.view === "relationships") renderRelationshipGraph();
    if (state.view === "one-pager") renderOnePager();
    syncInteractionState();
  }
  if (options.scroll) {
    window.requestAnimationFrame(() => scrollActiveViewIntoPlace(state.view, { scroll: true }));
  }
}

function csvEscape(cell) {
  return `"${String(cell ?? "").replace(/"/g, '""')}"`;
}

function toCsv(rows) {
  return rows.map((row) => row.map(csvEscape).join(",")).join("\n");
}

function downloadTextFile(filename, type, content, message) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(message);
}

function downloadRelationshipTemplate() {
  const header = [
    "player_id",
    "player_name",
    "relationship_label",
    "relationship_type",
    "strength",
    "suggested_owner",
    "current_status",
    "known_yousician_relationship",
    "suggested_next_step",
    "sensitivity",
    "last_contact_date",
    "source",
    "confirmed_owner",
    "confirmed_relationship",
    "notes"
  ];
  const rows = validationQueue().map(({ relation, player, validation }) => [
    player.id,
    player.name,
    relationshipTitle(relation.type),
    relation.type,
    relation.strength,
    validation.owner,
    validation.status,
    validation.knownRelationship,
    validation.nextStep,
    validation.sensitivity,
    validation.lastContactDate,
    validation.source,
    "",
    "",
    ""
  ]);
  downloadTextFile(
    "yousician-relationship-validation-template.csv",
    "text/csv;charset=utf-8",
    toCsv([header, ...rows]),
    "Relationship CSV exported."
  );
}

function buildLiveOverrideTemplate() {
  const metricsByPlayer = {};
  players
    .filter(requiresCredentialedData)
    .sort((a, b) => totalPriority(b) - totalPriority(a))
    .forEach((player) => {
      metricsByPlayer[player.id] = {
        name: player.name,
        appfiguresAppId: "",
        downloads: null,
        revenue: null,
        categoryRank: null,
        reviewVelocity: null,
        websiteVisits: null,
        source: "",
        lastUpdated: "",
        notes: ""
      };
    });

  const relationshipOverrides = {};
  validationQueue().forEach(({ player }) => {
    relationshipOverrides[player.id] = {
      name: player.name,
      owner: "",
      status: "",
      knownRelationship: "",
      nextStep: "",
      sensitivity: "",
      lastContactDate: "",
      source: "Yousician internal input",
      notes: ""
    };
  });

  return {
    status: {
      label: "Local override layer ready",
      lastUpdated: new Date().toISOString().slice(0, 10),
      source: "Manual, Appfigures, Similarweb, Airtable, or internal CRM export",
      caveat: "Only filled fields override the seed dashboard. Blank/null fields keep the existing draft values."
    },
    schema: liveOverrideFallback.schema,
    metricsByPlayer,
    relationshipOverrides
  };
}

function downloadLiveOverrideTemplate() {
  downloadTextFile(
    "live-overrides-template.json",
    "application/json;charset=utf-8",
    `${JSON.stringify(buildLiveOverrideTemplate(), null, 2)}\n`,
    "Live override JSON template downloaded."
  );
}

function downloadInternalRequestPack() {
  const header = ["owner", "requested_input", "priority", "source_type"];
  downloadTextFile(
    "yousician-internal-data-request-pack.csv",
    "text/csv;charset=utf-8",
    toCsv([header, ...internalRequestRows()]),
    "Internal data request CSV exported."
  );
}

function bindHandoffButtons(container) {
  container?.querySelectorAll("[data-handoff-action='relationship-template']").forEach((button) => {
    button.addEventListener("click", downloadRelationshipTemplate);
  });
  container?.querySelectorAll("[data-handoff-action='live-template']").forEach((button) => {
    button.addEventListener("click", downloadLiveOverrideTemplate);
  });
  container?.querySelectorAll("[data-handoff-action='internal-request-pack']").forEach((button) => {
    button.addEventListener("click", downloadInternalRequestPack);
  });
}

async function loadResearchContext() {
  try {
    const response = await fetch("./data/research-context.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Research context request failed: ${response.status}`);
    researchContext = await response.json();
    renderAll();
  } catch (error) {
    researchContext = {
      ...researchContextFallback,
      status: {
        ...researchContextFallback.status,
        label: "Research layer unavailable",
        liveAccess: "local_file_not_loaded",
        note: "The local research context file could not be loaded. Keep treating player notes as unsourced draft intelligence."
      }
    };
    renderAll();
  }
}

async function loadEvidenceContext() {
  try {
    const response = await fetch("./data/evidence-library.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Evidence library request failed: ${response.status}`);
    const data = await response.json();
    evidenceContext = {
      ...evidenceContextFallback,
      ...data,
      status: {
        ...evidenceContextFallback.status,
        ...(data.status || {})
      },
      sourceLibrary: Array.isArray(data.sourceLibrary)
        ? data.sourceLibrary.map((source) => ({
            ...source,
            id: source.id || source.source_id,
            source_id: source.source_id || source.id,
            accessStatus: sourceAccessStatus(source),
            lastUrlCheck: source.lastUrlCheck || source.last_url_check,
            qualityNote: source.qualityNote || source.quality_note
          }))
        : [],
      evidenceByPlayer: data.evidenceByPlayer || {}
    };
    evidenceContextStatus = "ready";
    renderAll();
  } catch (error) {
    evidenceContext = {
      ...evidenceContextFallback,
      status: {
        ...evidenceContextFallback.status,
        label: "Evidence library unavailable",
        method: "The local evidence-library.json file could not be loaded.",
        caveat: "Keep using the database as a draft until sources are restored."
      }
    };
    evidenceContextStatus = "unavailable";
    renderAll();
  }
}

async function loadLiveOverrides() {
  try {
    const response = await fetch(`./data/live-overrides.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Live override request failed: ${response.status}`);
    const data = await response.json();
    liveOverrideContext = {
      ...liveOverrideFallback,
      ...data,
      status: {
        ...liveOverrideFallback.status,
        ...(data.status || {})
      },
      schema: {
        ...liveOverrideFallback.schema,
        ...(data.schema || {})
      },
      metricsByPlayer: data.metricsByPlayer || {},
      relationshipOverrides: data.relationshipOverrides || {}
    };
    liveOverrideStatus = "ready";
    renderAll();
  } catch (error) {
    liveOverrideContext = {
      ...liveOverrideFallback,
      status: {
        ...liveOverrideFallback.status,
        label: "Live override layer unavailable",
        caveat: "data/live-overrides.json could not be loaded; the dashboard is using seed records only."
      }
    };
    liveOverrideStatus = "unavailable";
    renderAll();
  }
}

async function loadPublicEnrichment() {
  try {
    const response = await fetch(`./data/public-enrichment.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Public enrichment request failed: ${response.status}`);
    const data = await response.json();
    publicEnrichmentContext = {
      ...publicEnrichmentFallback,
      ...data,
      status: {
        ...publicEnrichmentFallback.status,
        ...(data.status || {})
      },
      playerEnrichment: data.playerEnrichment || {}
    };
    publicEnrichmentStatus = "ready";
    renderAll();
  } catch (error) {
    publicEnrichmentContext = {
      ...publicEnrichmentFallback,
      status: {
        ...publicEnrichmentFallback.status,
        label: "Public enrichment unavailable",
        caveat: "data/public-enrichment.json could not be loaded. Public source checks, ratings and public facts remain hidden."
      }
    };
    publicEnrichmentStatus = "unavailable";
    renderAll();
  }
}

function bindEvents() {
  els.priorityRange.addEventListener("input", (event) => {
    state.minRelevance = Number(event.target.value);
    markMapFilterChanged();
    scheduleRenderAll(revealMapForFilteredView);
  });

  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    markMapFilterChanged();
    scheduleRenderAll(() => {
      if (state.query.trim().length >= 2) revealMapForFilteredView();
    });
  });

  els.clearSearch?.addEventListener("click", () => {
    state.query = "";
    els.searchInput.value = "";
    markMapFilterChanged();
    if (state.view === "overview") {
      renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
    } else {
      renderAll();
    }
    els.searchInput.focus();
  });

  els.searchInput.addEventListener("focus", () => {
    document.body.dataset.searchActive = "true";
  });

  els.searchInput.addEventListener("blur", () => {
    document.body.dataset.searchActive = "false";
  });

  els.clearFilters.addEventListener("click", () => {
    resetWorkspaceFilters();
    if (state.view === "overview") {
      renderOverviewMapWorkspace({ includeFilters: true, refreshSecondary: true, revealMap: true });
      return;
    }
    renderAll();
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelector(".map-panel")?.addEventListener("mouseleave", () => {
    dismissVolosTeaser();
  });

  document.querySelectorAll("[data-jump-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.jumpView));
  });

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setMode(button.dataset.mode);
      els.quietModeMenu?.removeAttribute("open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!els.quietModeMenu || els.quietModeMenu.contains(event.target)) return;
    els.quietModeMenu.removeAttribute("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") els.quietModeMenu?.removeAttribute("open");
  });

  els.databaseSort.addEventListener("change", (event) => {
    state.dbSort = event.target.value;
    renderDatabase();
  });

  els.databaseRating?.addEventListener("change", (event) => {
    state.ratingMode = event.target.value;
    renderProfile();
    renderDatabase();
  });

  els.downloadCsv.addEventListener("click", downloadCsv);
  els.printOnePager.addEventListener("click", () => {
    switchView("one-pager");
    document.body.dataset.printTarget = "one-pager";
    showToast("Opening print dialog for the selected player brief.");
    setTimeout(() => window.print(), 250);
  });

  window.addEventListener("afterprint", () => {
    const params = new URLSearchParams(window.location.search);
    delete document.body.dataset.printPending;
    if (params.get("export") !== "brief") {
      setReportMode(false);
      clearReportUrlParams();
    }
  });

  window.addEventListener("beforeprint", () => {
    const params = new URLSearchParams(window.location.search);
    if (document.body.dataset.printTarget === "brief-export" || (params.get("export") === "brief" && params.get("report") === "brief")) {
      prepareReportForPrint({ updateUrl: false });
    }
  });

  els.exportButton.addEventListener("click", () => {
    renderExportSnapshot();
    const url = new URL(window.location.href);
    url.searchParams.set("export", "brief");
    url.searchParams.set("length", state.exportLength);
    url.searchParams.set("report", "brief");
    window.history.pushState({}, "", url);
    setReportMode(true);
    document.body.dataset.exportLength = state.exportLength;
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestReportNavigationSync();
  });

  document.addEventListener("click", (event) => {
    const dashboardAction = event.target.closest("[data-dashboard-action]");
    if (dashboardAction) {
      event.preventDefault();
      handleDashboardAction(dashboardAction.dataset.dashboardAction);
      return;
    }

    const dashboardJourney = event.target.closest("[data-dashboard-journey]");
    if (dashboardJourney) {
      event.preventDefault();
      focusJourneyCategory(dashboardJourney.dataset.dashboardJourney);
      return;
    }

    const printButton = event.target.closest("[data-export-print]");
    if (printButton) {
      event.preventDefault();
      launchReportPrint();
      return;
    }

    const reportNavLink = event.target.closest(".export-report-nav a[href^='#']");
    if (reportNavLink && document.body.dataset.printTarget === "brief-export") {
      const targetId = reportNavLink.getAttribute("href").slice(1);
      setReportActiveNav(targetId);
      window.setTimeout(requestReportNavigationSync, 40);
    }

    const lengthButton = event.target.closest(".export-report-length button[data-export-length]");
    if (lengthButton) {
      if (document.body.dataset.printTarget !== "brief-export") return;
      state.exportLength = lengthButton.dataset.exportLength;
      document.body.dataset.exportLength = state.exportLength;
      const url = new URL(window.location.href);
      url.searchParams.set("export", "brief");
      url.searchParams.set("length", state.exportLength);
      url.searchParams.set("report", "brief");
      window.history.pushState({}, "", url);
      renderExportSnapshot();
      requestReportNavigationSync();
      return;
    }
  });

  window.addEventListener("resize", () => {
    window.clearTimeout(bindEvents.resizeTimer);
    bindEvents.resizeTimer = window.setTimeout(() => {
      renderMap();
      if (state.view === "relationships") renderRelationshipGraph();
      requestReportNavigationSync();
    }, 140);
  });

  window.addEventListener("scroll", () => {
    if (state.volosTeaserVisible && Math.abs((window.scrollY || 0) - volosTeaserScrollY) > 18) {
      dismissVolosTeaser();
    }
    if (document.body.dataset.printTarget === "brief-export") requestReportNavigationSync();
  }, { passive: true });

  window.addEventListener("popstate", () => {
    applyUrlExportMode({ render: true, scroll: true });
    requestReportNavigationSync();
  });
}

function shouldLoadBackendStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("backend") === "1") return true;
  return false;
}

bindEvents();
applyUrlExportMode();
renderAll();
loadResearchContext();
loadEvidenceContext();
loadLiveOverrides();
loadPublicEnrichment();
if (shouldLoadBackendStatus()) {
  loadBackendStatus({ silent: true });
} else {
  backendState = { ...backendStateFallback, loading: false };
  renderBackendOps();
}
