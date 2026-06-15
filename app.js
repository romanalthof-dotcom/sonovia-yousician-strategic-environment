const categories = [
  {
    id: "learning",
    name: "Learning apps & curricula",
    shortName: "Learning apps",
    color: "#00d292",
    orbit: 1,
    layer: "Core market",
    description: "Direct music-learning products, curricula, feedback loops, and subscription benchmarks."
  },
  {
    id: "practice",
    name: "Song & practice ecosystems",
    shortName: "Practice habits",
    color: "#11a5a5",
    orbit: 1,
    layer: "Core habit layer",
    description: "Song discovery, tabs, play-along utilities, creators, and repeat-practice habits."
  },
  {
    id: "hardware",
    name: "Hardware & retail channels",
    shortName: "Gear channels",
    color: "#ffb84d",
    orbit: 2,
    layer: "Acquisition layer",
    description: "Instrument brands and retailers that shape gear access, beginner bundles, and partner routes."
  },
  {
    id: "creation",
    name: "Creation & production tools",
    shortName: "Creation tools",
    color: "#00b77e",
    orbit: 2,
    layer: "Hobby expansion",
    description: "Tools that move people from learning and practice into making, arranging, producing, and sharing."
  },
  {
    id: "ai",
    name: "AI music & audio technology",
    shortName: "AI music tech",
    color: "#6e5cff",
    orbit: 1,
    layer: "Disruption layer",
    description: "AI-native generation, audio utilities, practice augmentation, and licensing/rights shifts."
  },
  {
    id: "education",
    name: "Education & pedagogy benchmarks",
    shortName: "Education benchmarks",
    color: "#80a83d",
    orbit: 3,
    layer: "Learning model layer",
    description: "Non-music learning products, formal music education, teacher networks, and pedagogy references."
  },
  {
    id: "signals",
    name: "Capital, media & opportunity signals",
    shortName: "Market signals",
    color: "#3da5d9",
    orbit: 3,
    layer: "Strategic signal layer",
    description: "Investors, news, awards, funding programmes, and external indicators to monitor."
  }
];

const productLenses = [
  {
    id: "all",
    label: "All products",
    shortLabel: "All",
    description: "Full ecosystem"
  },
  {
    id: "yousician",
    label: "Yousician",
    shortLabel: "Yousician",
    description: "Learning app, curriculum, feedback, teachers, schools and beginner progression"
  },
  {
    id: "guitartuna",
    label: "GuitarTuna",
    shortLabel: "GuitarTuna",
    description: "Tuning, chords, tabs, guitar practice, song utilities, gear and guitar creators"
  },
  {
    id: "shared",
    label: "Shared",
    shortLabel: "Shared",
    description: "Records that matter to both product surfaces"
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
    sourceStatus: "Public product/developer sources linked; needs Appfigures",
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
    sourceStatus: "Needs traffic + app data check",
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
    geography: "To verify",
    reach: "Emerging",
    model: "To verify",
    ownership: "To verify",
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
    sourceStatus: "Public company/product sources linked; needs market validation",
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
    sourceStatus: "Needs public filings + product source",
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
    ownership: "Private",
    ai: "Research content generation and classroom AI",
    description: "Game-based learning platform with broad teacher and classroom reach.",
    why: "Useful benchmark for learning engagement, classroom channels, and education buyers.",
    relevance: 3,
    momentum: 3,
    aiScore: 3,
    sourceStatus: "Public company/product sources linked; needs market validation",
    relationship: "Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
    key: false,
    recent: "Track AI content and school distribution moves.",
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
    sourceStatus: "Public app/support sources linked; needs traffic data",
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
  }
];

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
  { from: "Yousician", to: "chartmetric", type: "influences", strength: 3, note: "Music trend analytics can inform what learners want to play next." }
];

const strategicMoves = [
  {
    date: "2024-06",
    title: "Suno / Udio - Record companies filed copyright cases against Suno and Ud",
    playerId: "suno-udio",
    category: "AI rights",
    sourceId: "riaa_suno_udio_2024",
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
    sourceId: "spotify_campaign_kit_2025",
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
    sourceId: "google_play_best_2025_official",
    summary: "Google Play Best of 2025 continued as a platform-recognition benchmark.",
    impact: "Useful for Android app-quality and editorial recognition planning."
  },
  {
    date: "2025-12",
    title: "UMG / Splice - UMG and Splice announced collaboration on next-generation ",
    playerId: "umg-splice",
    category: "AI creator tools",
    sourceId: "umg_splice_ai_2025",
    summary: "UMG and Splice announced collaboration on next-generation AI-powered music creation tools.",
    impact: "Rights-secure AI creation is becoming a label-backed product lane."
  },
  {
    date: "2026-01",
    title: "EIC Accelerator - EIC Accelerator remained an EU route for high-risk, game-c",
    playerId: "eic-accelerator",
    category: "Funding / EU",
    sourceId: "eic_accelerator_2026_official",
    summary: "EIC Accelerator remained an EU route for high-risk, game-changing innovation.",
    impact: "Potential public-funding route for AI/learning/creative-tech initiatives."
  },
  {
    date: "2026-04",
    title: "TikTok Add to Music App - TikTok said Add to Music App had generated more than 6B tr",
    playerId: "tiktok-add-to-music-app",
    category: "Discovery data",
    sourceId: "tiktok_add_music_6b_2026",
    summary: "TikTok said Add to Music App had generated more than 6B track saves over the prior twelve months.",
    impact: "Discovery platforms influence what people want to listen to, save and eventually learn."
  },
  {
    date: "2026-05",
    title: "Splice / ElevenLabs - Splice announced a partnership with ElevenLabs to build AI",
    playerId: "splice-elevenlabs",
    category: "AI creator tools",
    sourceId: "splice_elevenlabs_2026",
    summary: "Splice announced a partnership with ElevenLabs to build AI-powered creation tools.",
    impact: "Human-made licensed sample catalogs are being combined with generative AI workflows."
  },
  {
    date: "2026-06",
    title: "Apple Design Awards - Apple announced 2026 Design Award winners and finalists.",
    playerId: "apple-design-awards",
    category: "Awards / iOS",
    sourceId: "apple_design_awards_2026_official",
    summary: "Apple announced 2026 Design Award winners and finalists.",
    impact: "Clear benchmark for app craft, interaction, accessibility and award submission readiness."
  },
  {
    date: "2026-06",
    title: "Fender Studio Pro / Moises - Fender Studio Pro update was reported to integrate Moises ",
    playerId: "fender-studio-pro-moises",
    category: "Hardware + AI",
    sourceId: "fender_studio_pro_moises_2026",
    summary: "Fender Studio Pro update was reported to integrate Moises stem separation and an AI assistant.",
    impact: "Instrument brands are moving further into app + DAW + AI utility territory."
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
    use: "No cache JSON layer for Appfigures metrics, traffic estimates, and Yousician relationship confirmations.",
    cadence: "Whenever credentialed exports or internal notes are refreshed",
    status: "Implemented as data/live-overrides.json"
  },
  {
    name: "Appfigures",
    use: "App downloads, revenue estimates, rankings, reviews, and historical app performance.",
    cadence: "Weekly or monthly refresh",
    status: "Requires plan and API access"
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
    use: "Snapshot PDFs, board slides, player one pagers, and research appendices.",
    cadence: "On demand",
    status: "Can be automated later"
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
    unlocks: "Downloads, revenue estimates, category rank, review velocity, market trend history",
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

const state = {
  mode: "executive",
  selectedCategory: "all",
  selectedProductLens: "all",
  minRelevance: 1,
  query: "",
  selectedPlayerId: "simply",
  view: "overview",
  dbSegment: "all",
  dbSort: "priority",
  exportLength: "standard",
  monitorSegment: "all",
  monitorQuery: "",
  mapFocusMode: "all",
  mapZoomMode: "auto"
};

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
  databaseVisuals: document.getElementById("databaseVisuals"),
  databaseSegments: document.getElementById("databaseSegments"),
  databaseSort: document.getElementById("databaseSort"),
  databaseCards: document.getElementById("databaseCards"),
  databaseRows: document.getElementById("databaseRows"),
  relationshipGraph: document.getElementById("relationshipGraph"),
  relationshipList: document.getElementById("relationshipList"),
  relationshipValidationPanel: document.getElementById("relationshipValidationPanel"),
  backendOpsPanel: document.getElementById("backendOpsPanel"),
  sourceStatusPanel: document.getElementById("sourceStatusPanel"),
  sourceVisuals: document.getElementById("sourceVisuals"),
  validationReadiness: document.getElementById("validationReadiness"),
  evidenceLibrary: document.getElementById("evidenceLibrary"),
  sourceGrid: document.getElementById("sourceGrid"),
  toast: document.getElementById("toast"),
  downloadCsv: document.getElementById("downloadCsv"),
  clearSearch: document.getElementById("clearSearch"),
  exportButton: document.getElementById("exportButton"),
  exportSnapshot: document.getElementById("exportSnapshot")
};

const databaseSegments = [
  { id: "all", label: "All records", matches: () => true },
  { id: "key", label: "Key players", matches: (player) => player.key },
  { id: "actors", label: "Actors only", matches: (player) => !isSignalOnlyRecord(player) },
  { id: "claims", label: "Hypotheses", matches: (player) => claimIntegrityFor(player).hasHypothesis },
  { id: "source", label: "Open data fields", matches: (player) => hasCriticalEvidenceGap(player) },
  { id: "appdata", label: "Live data queue", matches: (player) => requiresCredentialedData(player) },
  { id: "signals", label: "Signal sources", matches: (player) => isSignalOnlyRecord(player) },
  { id: "internal", label: "Internal needed", matches: (player) => Boolean(relationForPlayer(player)) },
  { id: "ai", label: "AI / disruption", matches: (player) => player.aiScore >= 4 || player.category === "ai" },
  { id: "partner", label: "Partner candidates", matches: (player) => /partner|channel|funding|recognition/i.test(player.relationship) }
];

const monitorSegments = [
  { id: "all", label: "All", matches: () => true },
  { id: "key", label: "Key", matches: (player) => player.key },
  { id: "core", label: "Core", matches: (player) => ["learning", "practice"].includes(player.category) },
  { id: "appdata", label: "App data", matches: (player) => requiresCredentialedData(player) },
  { id: "ai", label: "AI", matches: (player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category) },
  {
    id: "partners",
    label: "Partners",
    matches: (player) => relationForPlayer(player)?.type === "partners" || ["hardware", "education"].includes(player.category)
  },
  { id: "signals", label: "Signals", matches: (player) => isSignalOnlyRecord(player) }
];

const mapFocusModes = [
  { id: "all", label: "All", matches: () => true },
  { id: "key", label: "Key", matches: (player) => player.key },
  { id: "ai", label: "AI", matches: (player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category) },
  { id: "appdata", label: "App data", matches: (player) => requiresCredentialedData(player) }
];

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function colorFor(player) {
  return categoryById(player.category)?.color || "#17191a";
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
  if (needs.includes("Appfigures")) return "Pull app performance";
  if (needs.includes("Crunchbase")) return "Verify ownership / funding";
  if (needs.includes("Similarweb")) return "Check web traffic";
  if (needs.includes("Audience source")) return "Validate audience reach";
  if (needs.includes("Legal/news")) return "Monitor legal and news signal";
  if (needs.includes("Award source")) return "Check award relevance";
  if (needs.includes("Programme source")) return "Review eligibility window";
  if (needs.includes("Company source")) return "Verify company claims";
  return "Manual research pass";
}

function sourceNeeds(player) {
  const text = `${player.sourceStatus} ${player.recent} ${player.type}`.toLowerCase();
  const needs = [];
  if (/appfigures|app|download|rank|revenue/.test(text)) needs.push("Appfigures");
  if (/traffic|web/.test(text)) needs.push("Similarweb");
  if (/funding|investor|private|capital|ownership/.test(text)) needs.push("Crunchbase");
  if (/youtube|creator|media/.test(text)) needs.push("Audience source");
  if (/legal|litigation|rights|copyright/.test(text)) needs.push("Legal/news");
  if (/award|bett/.test(text)) needs.push("Award source");
  if (/eligibility|programme|funding source|grant/.test(text)) needs.push("Programme source");
  if (/company|product|source|verify/.test(text)) needs.push("Company source");
  if (!needs.length) needs.push("Manual research");
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

function relationshipOverrideFor(player) {
  return liveOverrideContext.relationshipOverrides?.[player.id] || null;
}

function liveMetricClaimFor(player) {
  const metric = liveMetricFor(player);
  if (!metric) return null;
  const parts = [
    metric.downloads != null ? `Downloads: ${metric.downloads}` : "",
    metric.revenue != null ? `Revenue: ${metric.revenue}` : "",
    metric.categoryRank != null ? `Rank: ${metric.categoryRank}` : "",
    metric.reviewVelocity != null ? `Review velocity: ${metric.reviewVelocity}` : "",
    metric.websiteVisits != null ? `Web visits: ${metric.websiteVisits}` : "",
    nonEmptyString(metric.notes)
  ].filter(Boolean);
  if (!parts.length) return null;
  const source = nonEmptyString(metric.source) || liveOverrideContext.status?.source || "Live override file";
  const updated = nonEmptyString(metric.lastUpdated) || liveOverrideContext.status?.lastUpdated || "";
  return {
    label: "Live metric override",
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
  if (needs.includes("Appfigures")) feeds.push("Appfigures");
  if (needs.includes("Similarweb")) feeds.push("Similarweb");
  if (needs.includes("Crunchbase")) feeds.push("Crunchbase");
  if (needs.includes("Audience source")) feeds.push("YouTube / audience analytics");
  if (needs.includes("Legal/news")) feeds.push("News / legal monitoring");
  if (needs.includes("Company source")) feeds.push("Company website / press");
  if (!feeds.length) feeds.push("Manual research");
  return feeds.slice(0, 3);
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
      <a href="${escapeHtml(anchor.url)}" target="_blank" rel="noreferrer">${escapeHtml(anchor.studyTitle)}</a>
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

function sourceById(id) {
  return sourceLibrary().find((source) => source.id === id);
}

function evidenceRecordFor(player) {
  return (
    evidenceContext.evidenceByPlayer?.[player.id] || {
      summary: "No structured evidence record loaded yet. Keep this player in the research backlog.",
      sourceIds: [],
      openQuestions: sourceNeeds(player)
    }
  );
}

function evidenceSourcesFor(player) {
  const record = evidenceRecordFor(player);
  return (record.sourceIds || []).map(sourceById).filter(Boolean);
}

function sourceAccessStatus(source) {
  return source.accessStatus || "not-checked";
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
    Math.max(0, openQuestions.length - 1) * 4;
  const score = sources.length ? Math.max(24, Math.min(96, rawScore)) : 12;
  const label =
    replacementCount
      ? "Needs source repair"
      : score >= 76 && sources.length >= 3 && restrictedCount <= 1
      ? "Evidence-backed"
      : score >= 56 && sources.length >= 2
        ? "Sourced draft"
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
    types,
    score,
    label,
    status
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
      note: "Relevant product capability is visible, but this artifact should not overclaim AI strategy."
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
  const metric = liveMetricFor(player);
  const hasMetric =
    metric &&
    [metric.downloads, metric.revenue, metric.categoryRank, metric.reviewVelocity, metric.websiteVisits].some((value) => value != null && value !== "");
  if (hasMetric) {
    return {
      label: "Metric-backed size",
      tone: "verified",
      note: "A live/manual metric override is loaded for this record."
    };
  }
  if (/large|major|massive|very large|high-profile|high visibility|broad|established/i.test(player.reach)) {
    return {
      label: "Directional size claim",
      tone: "mixed",
      note: "Reach wording is useful for prioritization, but Appfigures, Similarweb, filings, or reports are still needed."
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
    label: "External-only record",
    tone: "neutral",
    note: "Internal relationship review is not prioritized for this record in the current visible set."
  };
}

function claimIntegrityFor(player) {
  const coverage = evidenceCoverage(player);
  const ai = aiClaimStatusFor(player);
  const size = sizeClaimStatusFor(player);
  const relationship = relationshipClaimStatusFor(player);
  const interpretation = {
    label: "Strategic interpretation",
    tone: "interpretation",
    note: "\"Why it matters\" is a reasoned assessment, not a primary-source fact."
  };
  const evidenceLabel =
    coverage.score >= 76 && coverage.officialCount
      ? "Primary-source backed"
      : coverage.score >= 56
        ? "Sourced draft"
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
  const hasHypothesis = [ai, size, relationship, evidence].some((item) => item.tone === "hypothesis");
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
        ${[claim.evidence, claim.size, claim.ai, claim.relationship]
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
  if (!sources.length) {
    return `<p class="evidence-empty">No linked evidence yet.</p>`;
  }
  const visible = sources.slice(0, limit);
  const hidden = Math.max(0, sources.length - visible.length);
  return `
    <div class="evidence-link-list">
      ${visible
        .map(
          (source) => `
            <a class="evidence-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
              <span>${escapeHtml(source.title)}</span>
              <small>${escapeHtml(source.type)} / ${escapeHtml(source.tier)} / ${escapeHtml(sourceAccessLabel(source))}</small>
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
      label: "Reach / geography",
      text: `${player.reach}; ${player.geography}`,
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
      text: player.ownership,
      basis: "Ownership field",
      kind: /to verify|monitor/i.test(player.ownership) ? "Needs verification" : "Ownership claim",
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
      label: "Evidence-backed note",
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
      <small class="fact-caveat">Strategic interpretation is separated from these factual fields and source-backed notes.</small>
    </section>
  `;
}

function executiveAppfiguresNote(player) {
  return requiresCredentialedData(player)
    ? "Credentialed Appfigures metrics are pending for app based revenue, downloads, rank trend, review velocity, country mix, and 12 month performance. This profile should not be used as an app performance ranking until those metrics are imported."
    : "This profile is read primarily for ecosystem role, influence, and strategic relevance. Quantified performance should still be checked in the database before external use.";
}

function executiveSignalText(text) {
  const normalized = String(text || "").trim();
  if (!normalized) return "Current market signal should be validated from current company, product, or news sources.";
  return normalized
    .replace(/No board[- ]grade recent[- ]news item is used for this profile; source monitoring remains active\./gi, "No recent market move is prioritized in this profile; keep official product and news sources monitored.")
    .replace(/Track rankings, revenue estimates, product launches, and funding or ownership signals\./gi, "App performance ranking and growth claims remain pending credentialed Appfigures validation.")
    .replace(/Potential personalization and practice feedback signal to monitor/gi, "Personalization and practice feedback capabilities are relevant to watch.")
    .replace(/\bresearch target\b/gi, "signal to monitor")
    .replace(/\bresearch\b/gi, "monitor");
}

function executiveProfileSnapshot(player, taxonomy) {
  return `
    <section class="profile-section executive-snapshot-card">
      <span class="section-kicker">Market profile</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <div class="executive-snapshot-grid">
        <div><span>Role</span><strong>${escapeHtml(taxonomy.role)}</strong></div>
        <div><span>Reach</span><strong>${escapeHtml(player.reach)}</strong></div>
        <div><span>Ownership</span><strong>${escapeHtml(player.ownership)}</strong></div>
        <div><span>Recent signal</span><strong>${escapeHtml(executiveSignalText(player.recent))}</strong></div>
      </div>
    </section>
  `;
}

function executiveOnePagerCards(player, taxonomy, validation) {
  return `
    <article class="one-pager-card">
      <span>What they are</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <p>${escapeHtml(player.description)}</p>
    </article>

    <article class="one-pager-card">
      <span>Scale and reach</span>
      <h3>${escapeHtml(player.reach)}</h3>
      <p>${escapeHtml(player.geography)} / ${escapeHtml(player.model)}</p>
    </article>

    <article class="one-pager-card">
      <span>Ownership / investors</span>
      <h3>${escapeHtml(player.ownership)}</h3>
      <p>Ownership should be checked against cited source fields before broader circulation.</p>
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
        <div><span>Journey</span><strong>${escapeHtml(taxonomy.journey)}</strong></div>
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
  const signalOnly = isSignalOnlyRecord(player);
  const gaps = [];
  if ((!signalOnly && coverage.count < 2) || coverage.score < 44 || (/not verified/i.test(verifiedLabel(player)) && coverage.count < 2)) gaps.push("source");
  if (!signalOnly && coverage.score < 56 && coverage.count < 3) gaps.push("evidence depth");
  if (coverage.replacementCount > 0) gaps.push("broken source");
  if (coverage.restrictedCount > 0 && coverage.verifiedCount < 2) gaps.push("manual link check");
  if (/to verify/i.test(player.ownership)) gaps.push(player.key ? "ownership" : "ownership check");
  if (/to verify|emerging/i.test(`${player.geography} ${player.reach} ${player.model}`)) gaps.push("metadata");
  if (requiresCredentialedData(player)) gaps.push("credentialed data");
  if (/funding|investor|ownership|to verify/i.test(player.sourceStatus) || /to verify/i.test(player.ownership)) gaps.push("capital");
  if (coverage.openQuestions.length >= 3) gaps.push("open questions");
  const sourcePenalty = gaps.filter((gap) => ["source", "broken source", "manual link check", "ownership"].includes(gap)).length * 6;
  const credentialPenalty = gaps.filter((gap) => ["credentialed data", "capital", "open questions", "metadata", "ownership check", "evidence depth"].includes(gap)).length * 3;
  const score = Math.max(18, Math.min(94, coverage.score - sourcePenalty - credentialPenalty - coverage.restrictedCount * 2 - (player.key && coverage.count < 3 ? 4 : 0)));
  const label = score >= 76 ? "Evidence-backed" : score >= 56 ? "Sourced draft" : "Research backlog";
  return {
    gaps: [...new Set(gaps)],
    score,
    label,
    coverage,
    confidence: confidenceLabel(player),
    verified: verifiedLabel(player)
  };
}

function sourceUrgency(player) {
  const quality = qualityProfile(player);
  return player.relevance * 3 + player.momentum * 2 + player.aiScore * 2 + quality.gaps.length * 4 + (player.key ? 6 : 0);
}

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
    if (state.dbSort === "relevance") return b.relevance - a.relevance || a.name.localeCompare(b.name);
    if (state.dbSort === "ai") return b.aiScore - a.aiScore || b.relevance - a.relevance || a.name.localeCompare(b.name);
    if (state.dbSort === "momentum") return b.momentum - a.momentum || b.relevance - a.relevance || a.name.localeCompare(b.name);
    if (state.dbSort === "source") return sourceUrgency(b) - sourceUrgency(a) || a.name.localeCompare(b.name);
    return totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name);
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

function getFilteredPlayers() {
  return players.filter((player) => {
    const categoryMatch = state.selectedCategory === "all" || player.category === state.selectedCategory;
    return categoryMatch && productLensMatches(player) && player.relevance >= state.minRelevance && matchesQuery(player);
  });
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
  return categories.map((category) => {
    const items = filtered.filter((player) => player.category === category.id);
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
        renderAll();
        revealMapForFilteredView();
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
        <a href="${escapeHtml(researchNote.study.url)}" target="_blank" rel="noreferrer">${escapeHtml(researchNote.study.title)}</a>
        <small>${escapeHtml(researchNote.accessLabel)}</small>
      </article>
    `;
  }

  const counts = players.reduce(
    (acc, player) => {
      if (!productLensMatches(player)) return acc;
      acc[player.category] = (acc[player.category] || 0) + 1;
      acc.all += 1;
      return acc;
    },
    { all: 0 }
  );

  const filterRows = [{ id: "all", name: "All categories", color: "#17191a" }, ...categories];
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
      renderAll();
      revealMapForFilteredView();
    });
    els.categoryFilters.appendChild(button);
  });

  els.priorityRange.value = state.minRelevance;
  els.priorityValue.textContent = `${state.minRelevance}+`;
}

function resetWorkspaceFilters() {
  state.selectedCategory = "all";
  state.selectedProductLens = "all";
  state.minRelevance = 1;
  state.query = "";
  state.monitorSegment = "all";
  state.monitorQuery = "";
  state.dbSegment = "all";
  state.mapFocusMode = "all";
  state.mapZoomMode = "auto";
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
  if (filterId === "product") state.selectedProductLens = "all";
  if (filterId === "relevance") state.minRelevance = 1;
  if (filterId === "monitorSegment") state.monitorSegment = "all";
  if (filterId === "monitorQuery") state.monitorQuery = "";
  if (filterId === "database") state.dbSegment = "all";
  if (filterId === "mapFocus") state.mapFocusMode = "all";
  if (filterId === "mapZoom") state.mapZoomMode = "auto";
  if (filterId === "query" && els.searchInput) els.searchInput.value = "";
  markMapFilterChanged();
  renderAll();
}

function renderActiveFilterStrip() {
  if (!els.activeFilterStrip) return;
  const chips = [];
  if (state.query.trim()) chips.push({ id: "query", label: "Search", value: state.query.trim() });
  if (state.selectedCategory !== "all") {
    chips.push({ id: "category", label: "Category", value: categoryById(state.selectedCategory)?.shortName || state.selectedCategory });
  }
  if (state.selectedProductLens !== "all") {
    chips.push({
      id: "product",
      label: "Product",
      value: productLenses.find((lens) => lens.id === state.selectedProductLens)?.shortLabel || state.selectedProductLens
    });
  }
  if (state.minRelevance > 1) chips.push({ id: "relevance", label: "Relevance", value: `${state.minRelevance}+` });
  if (state.mapFocusMode !== "all") chips.push({ id: "mapFocus", label: "Map", value: mapFocusModeById(state.mapFocusMode).label });
  if (state.mapZoomMode !== "auto") chips.push({ id: "mapZoom", label: "View", value: mapZoomLabel() });
  if (state.monitorSegment !== "all") {
    chips.push({ id: "monitorSegment", label: "Monitor", value: monitorSegmentById(state.monitorSegment).label });
  }
  if (state.monitorQuery.trim()) chips.push({ id: "monitorQuery", label: "Monitor search", value: state.monitorQuery.trim() });
  if (state.dbSegment !== "all") chips.push({ id: "database", label: "Database", value: databaseSegmentById(state.dbSegment).label });

  const basePlayers = getFilteredPlayers();
  const mapPlayers = mapVisiblePlayers(basePlayers);
  const activeCount = chips.length;
  els.activeFilterStrip.innerHTML = `
    <div class="filter-status-pill" aria-label="Current visible records">
      <strong>${mapPlayers.length}</strong>
      <span>${state.view === "overview" ? "on map" : `${basePlayers.length} records`}</span>
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
          : `<span class="filter-chip-empty">All market records</span>`
      }
    </div>
    <button class="filter-clear-all" data-filter-clear-all type="button" ${activeCount ? "" : "disabled"}>Clear all</button>
  `;
  els.activeFilterStrip.querySelectorAll("[data-filter-clear]").forEach((button) => {
    button.addEventListener("click", () => clearFilterById(button.dataset.filterClear));
  });
  els.activeFilterStrip.querySelector("[data-filter-clear-all]")?.addEventListener("click", () => {
    resetWorkspaceFilters();
    renderAll();
  });
}

function renderLegend() {
  els.mapLegend.innerHTML = categories
    .map(
      (category) =>
        `<span class="legend-chip"><span class="legend-swatch" style="--chip:${category.color}"></span>${category.name}</span>`
    )
    .join("");
}

function mapFocusModeById(id) {
  return mapFocusModes.find((mode) => mode.id === id) || mapFocusModes[0];
}

function mapVisiblePlayers(basePlayers) {
  const mode = mapFocusModeById(state.mapFocusMode);
  return basePlayers.filter(mode.matches);
}

function mapZoomLabel() {
  return {
    auto: "Auto fit",
    fit: "Fit view",
    selected: "Selected",
    full: "Full map"
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
    ? { x: 120, y: 42, width: 760, height: 610 }
    : { x: 0, y: 0, width: 1000, height: 700 };
  if (!nodeItems.length || state.mapZoomMode === "full") return defaultBox;
  const selectedNode = nodeItems.find((item) => item.player.id === state.selectedPlayerId);
  const shouldFit =
    state.mapZoomMode === "fit" ||
    state.mapZoomMode === "selected" ||
    (state.mapZoomMode === "auto" && mapHasActiveFilter(basePlayers, visiblePlayers));
  if (!shouldFit) return defaultBox;
  const focusNodes = state.mapZoomMode === "selected" && selectedNode ? [selectedNode] : nodeItems;
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
    padding: focusNodes.length <= 2 ? 190 : focusNodes.length <= 8 ? 150 : 118,
    minWidth: state.mapZoomMode === "selected" ? 360 : focusNodes.length <= 3 ? 420 : 520,
    minHeight: state.mapZoomMode === "selected" ? 250 : focusNodes.length <= 3 ? 294 : 364
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
  const keyPlayers = filtered.filter((player) => player.key);
  const aiRelevant = filtered.filter((player) => player.aiScore >= 4 || ["ai", "creation"].includes(player.category));
  const appQueue = filtered.filter(requiresCredentialedData);
  const selectedPlayer = getSelectedPlayer();
  const zoomButtons = [
    { id: "fit", label: "Fit" },
    { id: "selected", label: "Selected" },
    { id: "full", label: "Full map" }
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
  const modeButtons = mapFocusModes
    .map((mode) => {
      const active = state.mapFocusMode === mode.id;
      return `
        <button
          type="button"
          class="${active ? "is-active" : ""}"
          data-map-mode="${escapeHtml(mode.id)}"
          aria-pressed="${active ? "true" : "false"}"
        >
          <span>${escapeHtml(mode.label)}</span>
          <strong>${basePlayers.filter(mode.matches).length}</strong>
        </button>
      `;
    })
    .join("");
  const categoryChips = categories
    .map((category) => {
      const count = filtered.filter((player) => player.category === category.id).length;
      if (!count) return "";
      return `
        <button
          type="button"
          data-map-category="${escapeHtml(category.id)}"
          class="${state.selectedCategory === category.id ? "is-active" : ""}"
          style="--category-color:${category.color}"
        >
          <span>${escapeHtml(category.shortName || category.name)}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");

  els.mapSummaryStrip.innerHTML = `
    <div class="map-mode-row" aria-label="Map focus">
      ${modeButtons}
    </div>
    <div class="map-zoom-row" aria-label="Map view controls">
      ${zoomButtons}
      <button type="button" class="map-reset-button" data-map-reset>Reset</button>
    </div>
    <div class="map-selected-card" aria-label="Selected player">
      <span>Selected</span>
      <strong>${escapeHtml(selectedPlayer.name)}</strong>
      <small>${escapeHtml(strategicRole(selectedPlayer))}</small>
      <div>
        <button type="button" data-map-selected-action="profile">Profile</button>
        <button type="button" data-map-selected-action="one-pager">One pager</button>
      </div>
    </div>
    <div class="map-summary-metrics" aria-label="Map summary metrics">
      <article><strong>${filtered.length}</strong><span>visible records</span></article>
      <article><strong>${keyPlayers.length}</strong><span>key players</span></article>
      <article><strong>${aiRelevant.length}</strong><span>AI / creation</span></article>
      <article><strong>${appQueue.length}</strong><span>app data queue</span></article>
    </div>
    <div class="map-category-rail" aria-label="Visible market groups">
      ${categoryChips}
    </div>
  `;

  els.mapSummaryStrip.querySelectorAll("[data-map-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapFocusMode = button.dataset.mapMode;
      markMapFilterChanged();
      ensureSelectedPlayerVisibleInMap();
      renderAll();
      revealMapForFilteredView();
      flashElement(els.mapSummaryStrip);
    });
  });
  els.mapSummaryStrip.querySelectorAll("[data-map-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = state.selectedCategory === button.dataset.mapCategory ? "all" : button.dataset.mapCategory;
      markMapFilterChanged();
      ensureSelectedPlayerVisibleInMap();
      renderAll();
      revealMapForFilteredView();
      flashElement(els.mapSummaryStrip);
    });
  });
  els.mapSummaryStrip.querySelectorAll("[data-map-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapZoomMode = button.dataset.mapZoom;
      renderAll();
      revealMapForFilteredView();
      flashElement(els.mapSummaryStrip);
    });
  });
  els.mapSummaryStrip.querySelector("[data-map-reset]")?.addEventListener("click", () => {
    resetWorkspaceFilters();
    renderAll();
    flashElement(els.mapSummaryStrip);
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
    Number(b.key) - Number(a.key) ||
    totalPriority(b) - totalPriority(a) ||
    a.name.localeCompare(b.name);
}

function renderMapCompanyPicker() {
  if (!els.mapCompanyPicker) return;
  ensureSelectedPlayerVisibleInMap();
  const basePlayers = getFilteredPlayers();
  const visiblePlayers = mapVisiblePlayers(basePlayers).sort(mapPickerSort);
  const selectedPlayer = getSelectedPlayer();
  els.mapCompanyPicker.innerHTML = `
    <div class="map-picker-head">
      <div>
        <span>Company index</span>
        <strong>${visiblePlayers.length} in view</strong>
      </div>
      <button type="button" data-map-full-view ${state.mapZoomMode === "full" && state.mapFocusMode === "all" ? "disabled" : ""}>Full map</button>
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
                <span>${escapeHtml(initials(player.name))}</span>
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
    renderAll();
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
                            `<button type="button" data-landscape-player="${player.id}" title="${escapeHtml(player.name)}">${escapeHtml(compactName(player.name, 16))}</button>`
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
                        `<button type="button" data-portfolio-player="${player.id}" title="${escapeHtml(player.name)}" style="--player-color:${colorFor(player)}">${escapeHtml(
                          initials(player.name)
                        )}</button>`
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
      label: "Close proof debt before board use",
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
                        `<button type="button" data-visual-player="${escapeHtml(player.id)}" style="--player-color:${colorFor(player)}">${escapeHtml(
                          compactName(player.name, 16)
                        )}</button>`
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
  learning: { x: 500, y: 144, angle: -90, arcRadius: 205, visibleLimit: 6, rx: 178, ry: 112 },
  practice: { x: 772, y: 222, angle: -36, arcRadius: 292, visibleLimit: 6, rx: 182, ry: 112 },
  hardware: { x: 842, y: 430, angle: 18, arcRadius: 344, visibleLimit: 5, rx: 158, ry: 104 },
  creation: { x: 690, y: 562, angle: 62, arcRadius: 292, visibleLimit: 5, rx: 176, ry: 108 },
  ai: { x: 398, y: 562, angle: 116, arcRadius: 278, visibleLimit: 6, rx: 176, ry: 112 },
  education: { x: 190, y: 430, angle: 166, arcRadius: 336, visibleLimit: 4, rx: 146, ry: 98 },
  signals: { x: 248, y: 206, angle: -144, arcRadius: 326, visibleLimit: 4, rx: 150, ry: 96 }
};

function mapLayoutForCategory(category, index, center) {
  const fallbackAngle = -90 + index * (360 / categories.length);
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
  const rank = index + 1.15;
  const radius = Math.sqrt(rank / total);
  const angle = index * goldenAngle + (layout.angle * Math.PI) / 180;
  const spreadX = total > 10 ? 0.9 : 0.8;
  const spreadY = total > 10 ? 0.84 : 0.76;
  const x = layout.x + Math.cos(angle) * radius * layout.rx * spreadX;
  const y = layout.y + Math.sin(angle) * radius * layout.ry * spreadY;
  return { x, y };
}

function mapNodeRadius(player) {
  const tier = priorityTier(player);
  if (player.id === state.selectedPlayerId) return 24;
  if (tier === "primary") return 21;
  if (player.key) return 17;
  if (tier === "focus") return 11;
  return 7;
}

function shouldLabelMapNode(player, categoryPlayers, index, layout, visibleCount = Infinity) {
  if (player.id === state.selectedPlayerId) return true;
  if (visibleCount <= 8) return true;
  if (visibleCount <= 18 && (player.key || player.relevance >= 3 || player.aiScore >= 3)) return true;
  if (!player.key) return index < 2 && (player.relevance >= 4 || player.aiScore >= 4);
  const keyPlayersInCategory = categoryPlayers.filter((item) => item.key);
  const keyIndex = keyPlayersInCategory.findIndex((item) => item.id === player.id);
  return keyIndex >= 0 && keyIndex < Math.min(layout.visibleLimit || 4, 5);
}

function mapLabelAnchor(nodeX, nodeY, clusterX, center) {
  const rightSide = nodeX >= clusterX;
  const lowerHalf = nodeY > center.y;
  return {
    x: nodeX + (rightSide ? 18 : -18),
    y: nodeY + (lowerHalf ? 22 : -16),
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

function svgLabelWidth(text, min = 68, max = 148) {
  return Math.max(min, Math.min(max, Math.round(String(text).length * 5.8 + 20)));
}

function svgLabelX(x, width, anchor) {
  if (anchor === "end") return x - width + 7;
  if (anchor === "start") return x - 7;
  return x - width / 2;
}

function renderMap() {
  const svg = els.ecosystemMap;
  svg.innerHTML = "";
  const compactMap = (svg.clientWidth || window.innerWidth) < 520;
  const center = { x: 500, y: 342 };
  const basePlayers = getFilteredPlayers();
  const filtered = mapVisiblePlayers(basePlayers);
  const byCategory = categories.map((category, index) => {
    const layout = mapLayoutForCategory(category, index, center);
    const categoryPlayers = filtered
      .filter((player) => player.category === category.id)
      .sort((a, b) => strategicWeight(b) - strategicWeight(a));
    return {
      category,
      players: categoryPlayers,
      hiddenCount: 0,
      x: layout.x,
      y: layout.y,
      layout,
      index
    };
  });
  const nodeItems = [];
  byCategory.forEach(({ players: categoryPlayers, layout }) => {
    categoryPlayers.forEach((player, index) => {
      const point = clusterPointPosition(index, categoryPlayers.length, layout);
      nodeItems.push({
        player,
        x: point.x,
        y: point.y,
        radius: mapNodeRadius(player),
        index
      });
    });
  });
  const nodePositions = new Map(nodeItems.map((item) => [item.player.id, item]));
  const defaultBox = compactMap ? { x: 120, y: 42, width: 760, height: 610 } : { x: 0, y: 0, width: 1000, height: 700 };
  const viewBox = mapViewBoxFromNodes(nodeItems, basePlayers, filtered, compactMap);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  setMapViewBox(svg, viewBox, defaultBox);
  const metricsByCategory = new Map(categoryMetrics().map((item) => [item.id, item]));

  const defs = createSvg("defs");
  const radial = createSvg("radialGradient", { id: "mapGlow", cx: "50%", cy: "50%", r: "60%" });
  radial.appendChild(createSvg("stop", { offset: "0%", "stop-color": "#ffffff", "stop-opacity": "1" }));
  radial.appendChild(createSvg("stop", { offset: "72%", "stop-color": "#f7fbf8", "stop-opacity": "1" }));
  radial.appendChild(createSvg("stop", { offset: "100%", "stop-color": "#edf4ef", "stop-opacity": "1" }));
  defs.appendChild(radial);
  svg.appendChild(defs);
  svg.appendChild(createSvg("rect", { x: 16, y: 18, width: 968, height: 664, rx: 28, class: "map-stage" }));

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
  svg.appendChild(lensLayer);

  [
    [144, "core overlap"],
    [228, "adjacent ecosystem"],
    [306, "market signals"]
  ].forEach(([radius, label], index) => {
    svg.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: radius, class: "map-ring" }));
    const ringLabel = createSvg("text", { x: center.x + radius - 10, y: center.y - 8 - index * 12, class: "ring-label" });
    ringLabel.textContent = label;
    svg.appendChild(ringLabel);
  });

  ["learn", "practice", "create + signal"].forEach((label, index) => {
    const axis = createSvg("text", {
      x: 182 + index * 318,
      y: 650,
      class: "map-axis-label"
    });
    axis.textContent = label;
    svg.appendChild(axis);
  });

  const arcLayer = createSvg("g", { class: "category-arc-layer" });
  svg.appendChild(arcLayer);
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
    arcLayer.appendChild(arc);
  });

  const connectionLayer = createSvg("g", { class: "connection-layer" });
  svg.appendChild(connectionLayer);

  byCategory.forEach(({ category, players: categoryPlayers, hiddenCount, x, y, layout }) => {
    if (!categoryPlayers.length && state.selectedCategory !== "all") return;

    const cluster = createSvg("g");
    const ellipse = createSvg("ellipse", {
      cx: x,
      cy: y,
      rx: categoryPlayers.length > 1 ? layout.rx : 82,
      ry: categoryPlayers.length > 1 ? layout.ry : 56,
      class: "map-cluster",
      fill: category.color,
      stroke: category.color,
      opacity: categoryPlayers.length ? 0.16 : 0.05
    });
    cluster.appendChild(ellipse);

    const textPositions = clusterTextPositions(layout, center);
    const clusterLabel = mapCategoryLabel(category);
    const clusterWidth = svgLabelWidth(clusterLabel, 88, 172);
    cluster.appendChild(
      createSvg("rect", {
        x: x - clusterWidth / 2,
        y: textPositions.labelY - 14,
        width: clusterWidth,
        height: 36,
        rx: 10,
        class: "cluster-label-card",
        fill: category.color
      })
    );
    const label = createSvg("text", {
      x,
      y: textPositions.labelY,
      class: "cluster-label"
    });
    label.textContent = clusterLabel;
    cluster.appendChild(label);

    const count = createSvg("text", { x, y: textPositions.countY, class: "cluster-count" });
    const keyCount = categoryPlayers.filter((player) => player.key).length;
    count.textContent = `${categoryPlayers.length} records / ${keyCount} key`;
    cluster.appendChild(count);

    svg.appendChild(cluster);

    categoryPlayers.forEach((player, idx) => {
      const nodeItem = nodePositions.get(player.id);
      const nodeX = nodeItem?.x ?? layout.x;
      const nodeY = nodeItem?.y ?? layout.y;
      const tier = priorityTier(player);
      const isSelected = player.id === state.selectedPlayerId;
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

      const node = createSvg("g", {
        class: `map-node ${tier} ${isSelected ? "selected" : ""}`,
        tabindex: "0",
        role: "button",
        "aria-label": `${player.name}, ${player.relevance} of 5 relevance`,
        "data-id": player.id
      });
      const title = createSvg("title");
      title.textContent = `${player.name} / ${strategicRole(player)} / R${player.relevance} M${player.momentum} AI${player.aiScore}`;
      node.appendChild(title);
      const radius = nodeItem?.radius ?? mapNodeRadius(player);
      node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 16, class: "node-hit" }));
      if (isSelected) {
        node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 15, class: "node-halo", fill: colorFor(player) }));
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
            stroke: colorFor(player),
            "stroke-dasharray": `${Math.max(5, Math.round(quality.score / 8))} 5`
          })
        );
      }
      if ((player.key || isSelected) && player.aiScore >= 4) {
        node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius + 10, class: "node-ai-ring", fill: "none" }));
      }
      node.appendChild(createSvg("circle", { cx: nodeX, cy: nodeY, r: radius, fill: colorFor(player) }));
      if (player.key || isSelected || tier === "focus") {
        const init = createSvg("text", { x: nodeX, y: nodeY + (tier === "signal" ? 3 : 4), class: `node-initial ${tier}` });
        init.textContent = initials(player.name);
        node.appendChild(init);
      }
      if (shouldLabelMapNode(player, categoryPlayers, idx, layout, filtered.length)) {
        const anchor = mapLabelAnchor(nodeX, nodeY, x, center);
        const labelText = compactName(player.name, isSelected ? 22 : 18);
        const badgeWidth = svgLabelWidth(labelText, player.key || isSelected ? 70 : 56, isSelected ? 164 : 132);
        node.appendChild(
          createSvg("rect", {
            x: svgLabelX(anchor.x, badgeWidth, anchor.anchor),
            y: anchor.y - 12,
            width: badgeWidth,
            height: isSelected ? 30 : 18,
            rx: 7,
            class: `node-label-card ${player.key || isSelected ? "is-key" : "is-context"}`,
            fill: colorFor(player)
          })
        );
        const name = createSvg("text", {
          x: anchor.x,
          y: anchor.y,
          class: "node-label key-node-label",
          "text-anchor": anchor.anchor
        });
        name.textContent = labelText;
        node.appendChild(name);
        if (isSelected) {
          const sub = createSvg("text", {
            x: anchor.x,
            y: anchor.y + 13,
            class: "node-sub selected-node-sub",
            "text-anchor": anchor.anchor
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
      svg.appendChild(node);
    });
  });

  const hub = createSvg("g");
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: 70, class: "hub-glow" }));
  hub.appendChild(createSvg("circle", { cx: center.x, cy: center.y, r: 52, class: "hub" }));
  const hubText = createSvg("text", { x: center.x, y: center.y - 5, class: "hub-label" });
  hubText.textContent = "Yousician";
  hub.appendChild(hubText);
  const hubSub = createSvg("text", { x: center.x, y: center.y + 16, class: "hub-label hub-sub", opacity: 0.8 });
  hubSub.textContent = "strategic center";
  hub.appendChild(hubSub);
  svg.appendChild(hub);
}

function renderProfile() {
  const player = getSelectedPlayer();
  const category = categoryById(player.category);
  const quality = qualityProfile(player);
  const taxonomy = taxonomyProfile(player);
  const executive = isExecutiveMode();
  els.profilePanel.innerHTML = `
    <div class="profile-top">
      <div class="avatar" style="--avatar-color:${category.color}">${initials(player.name)}</div>
      <div>
        <h2>${player.name}</h2>
        <div class="profile-meta">${player.type} / ${category.name}</div>
      </div>
      <div class="profile-score">
        <strong>${player.relevance}</strong>
        <span>relevance</span>
      </div>
    </div>
    <div class="badge-row">
      ${player.key ? `<span class="badge key">Key player</span>` : ""}
      <span class="badge">${executive ? escapeHtml(taxonomy.role) : escapeHtml(player.relationship)}</span>
      <span class="badge">${escapeHtml(player.geography)}</span>
    </div>
    <section class="profile-section profile-read">
      <span class="section-kicker">Executive read</span>
      <h3>${escapeHtml(strategicRole(player))}</h3>
      <p>${escapeHtml(player.why)}</p>
      <small>${escapeHtml(player.description)}</small>
    </section>
    ${executive ? executiveProfileSnapshot(player, taxonomy) : `${factPackSection(player)}${claimIntegritySection(player)}`}
    <section class="profile-section taxonomy-card">
      <span class="section-kicker">Classification</span>
      <h3>${escapeHtml(taxonomy.group)}</h3>
      <div class="taxonomy-grid">
        <div><span>Role</span><strong>${escapeHtml(taxonomy.role)}</strong></div>
        <div><span>Journey</span><strong>${escapeHtml(taxonomy.journey)}</strong></div>
        <div><span>Proximity</span><strong>${escapeHtml(taxonomy.proximity)}</strong></div>
      </div>
      <p>${escapeHtml(taxonomy.decisionUse)}</p>
    </section>
    ${executive ? "" : `${evidenceSummarySection(player)}${researchAnchorSection(player)}`}
    <section class="profile-section ${executive ? "profile-action-card" : ""}">
      <h3>${executive ? "Key-player profile" : "Next action"}</h3>
      <p>${
        executive
          ? "Open the structured one pager for role, scale, recent signal, Yousician relevance, and why this player matters."
          : `${escapeHtml(nextAction(player))}. ${escapeHtml(player.recent)}`
      }</p>
      <div class="profile-actions">
        <button class="primary-button" data-profile-action="one-pager" type="button">One pager</button>
        <button class="ghost-button" data-profile-action="database" type="button">Database</button>
      </div>
    </section>
    <section class="profile-section">
      <h3>Strategic scores</h3>
      <div class="metric-grid metric-grid-compact">
        ${metricRow("Relevance", player.relevance)}
        ${metricRow("Momentum", player.momentum)}
        ${metricRow("AI relevance", player.aiScore)}
      </div>
    </section>
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
          <div><span>Ownership</span><strong>${escapeHtml(player.ownership)}</strong></div>
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

function metricRow(label, value) {
  return `
    <div class="metric">
      <div class="metric-head"><span>${label}</span><span>${value}/5</span></div>
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
      .join("") || emptyState("No AI relevant players in this filter.");

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
                  move.source?.url
                    ? `<a href="${escapeHtml(move.source.url)}" target="_blank" rel="noreferrer">Source</a>`
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
  const claimCaveats = players.filter((player) => claimIntegrityFor(player).hasHypothesis).length;
  const liveDataQueue = players.filter(requiresCredentialedData).length;
  const keyCount = players.filter((player) => player.key).length;
  const relationshipChecks = validationQueue().length;
  const relationshipOverrideCount = Object.keys(liveOverrideContext.relationshipOverrides || {}).length;
  const credentialedRows = credentialedAppfiguresCount();
  const categoryCount = categories.length;
  const items = [
    {
      label: "Ecosystem map",
      value: "Covered",
      note: `${categoryCount} groups, ${players.length} tracked records`,
      state: "done"
    },
    {
      label: "Key players",
      value: `${keyCount} profiled`,
      note: "Priority players/clusters are covered with role and relevance",
      state: "done"
    },
    {
      label: "Database",
      value: `${librarySources.length || "..."} sources`,
      note: "Structured player, signal, and source fields are available",
      state: "done"
    },
    {
      label: "Guiding questions",
      value: "Answered",
      note: "The three guiding questions are surfaced before detail",
      state: "done"
    },
    {
      label: "Relationship space",
      value: "Prepared",
      note: relationshipOverrideCount
        ? `${relationshipOverrideCount} internal relationship fields loaded`
        : "Internal status is intentionally not inferred externally",
      state: "done"
    },
    {
      label: "Appfigures",
      value: credentialedRows ? `${credentialedRows} credentialed` : "Pending",
      note: `${liveDataQueue} app based records still require credentialed performance metrics`,
      state: "partial"
    }
  ];

  els.briefReadiness.innerHTML = `
    <div class="brief-readiness-head">
      <div>
        <span class="section-kicker">Brief category coverage</span>
        <h3>The requested output areas are represented.</h3>
      </div>
      <span>${players.length} records / ${keyCount} key players</span>
    </div>
    <div class="brief-readiness-grid">
      ${items
        .map(
          (item) => `
            <article class="brief-status-item ${item.state}">
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
              <small>${escapeHtml(item.note)}</small>
            </article>
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
      <span>${escapeHtml(initials(player.name))}</span>
      <strong>${escapeHtml(compactName(player.name, maxName))}</strong>
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
      note: "ranked for one pagers"
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
      note: `${highMomentum.length} high-momentum records`
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
        <p>${companyRecords.length} companies and organisations, ${keyPlayers.length} key players, ${highMomentum.length} high-momentum records, and ${liveDataQueue.length} app or traffic inputs queued.</p>
      </div>
      <div class="overview-monitor-actions" aria-label="Market monitor actions">
        <button type="button" data-monitor-jump="key-players">Monitor</button>
        <button type="button" data-monitor-jump="database">Database</button>
        <button type="button" data-monitor-jump="relationships">Relationships</button>
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
}

function renderMonitorControlBar(basePlayers, filteredPlayers, keyPlayers) {
  if (!els.monitorControlBar) return;
  const companyCount = basePlayers.length;
  const laneCount = monitoringActivityLanes().filter((lane) => filteredPlayers.some(lane.matches)).length;
  const activeSegment = monitorSegmentById(state.monitorSegment);
  const items = [
    { target: "marketMonitorOverview", label: "Coverage", value: `${filteredPlayers.length}/${companyCount}` },
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
                                <span style="--chip-color:${colorFor(player)}">${escapeHtml(initials(player.name))}</span>
                                <strong>${escapeHtml(player.name)}</strong>
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
                          <span class="company-row-avatar">${escapeHtml(initials(player.name))}</span>
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
  const rankedPlayers = [...keyPlayers].sort((a, b) => totalPriority(b) - totalPriority(a) || a.name.localeCompare(b.name));
  if (!rankedPlayers.length) {
    els.keyPlayerVisuals.innerHTML = emptyState("No key-player visuals match the current filter.");
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
          <span class="section-kicker">Key-player focus</span>
          <h3>Priority board</h3>
        </div>
        <p>Highest-signal players first, grouped by strategic use.</p>
      </div>
      <div class="priority-board" aria-label="Ranked key-player priority board">
        <button
          class="priority-lead ${leadPlayer.id === state.selectedPlayerId ? "is-selected" : ""}"
          data-visual-player="${escapeHtml(leadPlayer.id)}"
          type="button"
          style="--priority-color:${colorFor(leadPlayer)}; --priority-score:${priorityPercent(leadPlayer)}"
          title="${escapeHtml(leadPlayer.name)} / ${escapeHtml(scoreText(leadPlayer))}"
        >
          <span class="priority-lead-top">
            <span class="priority-rank-label">Top priority</span>
            <span class="priority-avatar" style="--avatar-color:${colorFor(leadPlayer)}">${escapeHtml(initials(leadPlayer.name))}</span>
          </span>
          <span class="priority-lead-copy">
            <strong>${escapeHtml(leadPlayer.name)}</strong>
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
                  <span class="priority-avatar priority-avatar-small" style="--avatar-color:${colorFor(player)}">${escapeHtml(initials(player.name))}</span>
                  <span class="priority-player-copy">
                    <strong>${escapeHtml(player.name)}</strong>
                    <small>${escapeHtml(strategicRole(player))}</small>
                  </span>
                  <span class="priority-score-pill">${escapeHtml(scoreText(player))}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="priority-group-strip" aria-label="Key-player priority groups">
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
                                <span style="--chip-color:${colorFor(player)}">${escapeHtml(initials(player.name))}</span>
                                <strong>${escapeHtml(compactName(player.name, 14))}</strong>
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
          <h3>How to read the key-player set</h3>
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
                                <span style="--chip-color:${colorFor(player)}">${escapeHtml(initials(player.name))}</span>
                                <strong>${escapeHtml(compactName(player.name, 16))}</strong>
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
  const keyPlayers = filteredPlayers
    .filter((player) => player.key)
    .sort((a, b) => b.relevance + b.momentum + b.aiScore - (a.relevance + a.momentum + a.aiScore));

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
              <div class="avatar" style="--avatar-color:${colorFor(player)}">${initials(player.name)}</div>
            </div>
            <p>${player.why}</p>
            ${factMiniHtml(player, 2)}
            <div>
              ${metricRow("Strategic relevance", player.relevance)}
              <div class="badge-row">
                <span class="badge product-focus-badge">${escapeHtml(productFocusLabel(player))}</span>
                <span class="badge">${escapeHtml(strategicRole(player))}</span>
                <span class="badge">${escapeHtml(player.geography)}</span>
              </div>
              <span class="player-card-link">Open one pager</span>
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
          <h3>Key player one pager cards</h3>
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

function renderOnePager() {
  const player = getSelectedPlayer();
  const category = categoryById(player.category);
  const quality = qualityProfile(player);
  const coverage = quality.coverage;
  const taxonomy = taxonomyProfile(player);
  const validation = internalValidationFor(player);
  const executive = isExecutiveMode();

  els.onePager.innerHTML = `
    <article class="one-pager-sheet" style="--onepager-accent:${category.color}">
      <header class="one-pager-hero">
        <div>
          <span class="section-kicker">Key player one pager</span>
          <h2>${escapeHtml(player.name)}</h2>
          <p>${escapeHtml(player.description)}</p>
          <div class="badge-row">
            ${player.key ? `<span class="badge key">Key player</span>` : ""}
            <span class="badge">${escapeHtml(category.name)}</span>
            <span class="badge">${escapeHtml(executive ? taxonomy.role : player.relationship)}</span>
            <span class="badge">${escapeHtml(player.geography)}</span>
          </div>
        </div>
        <div class="one-pager-score">
          <strong>${player.relevance}</strong>
          <span>Strategic relevance</span>
        </div>
      </header>

      <section class="one-pager-grid">
        <article class="one-pager-card one-pager-card-large">
          <span>Why they matter</span>
          <h3>${escapeHtml(strategicRole(player))}</h3>
          <p>${escapeHtml(player.why)}</p>
        </article>

        ${executiveOnePagerCards(player, taxonomy, validation)}
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
  const linkedSourceIds = new Set(filtered.flatMap((player) => evidenceRecordFor(player).sourceIds || []));
  const linkedSources = [...linkedSourceIds].map(sourceById).filter(Boolean);
  const linkedSourceCount = evidenceLoading
    ? "..."
    : linkedSourceIds.size;
  const verifiedLinkedCount = evidenceLoading
    ? "..."
    : linkedSources.filter((source) => sourceAccessStatus(source) === "verified").length;
  const sourceNote = evidenceLoading ? "loading references" : evidenceUnavailable ? "source file unavailable" : "unique references";
  const gapNote = evidenceLoading ? "waiting for proof map" : "source and ownership completion needs";
  const avgNote = evidenceLoading ? "loading source quality" : "coverage and gaps";
  const appfiguresRows = credentialedAppfiguresCount();

  const databaseStats = isExecutiveMode()
    ? [
        ["Records in view", filtered.length, "after selected filters"],
        ["Key players", keyCount, "priority profiles"],
        ["Brief categories", 12, "brief requested categories"],
        ["Linked sources", linkedSourceCount, sourceNote],
        [
          "Appfigures note",
          appfiguresRows ? `${appfiguresRows} credentialed` : "Pending",
          `${credentialQueueCount} app based records require credentialed metrics`
        ],
        ["Relationship space", "Prepared", "internal status not inferred externally"],
        ["AI relevant", aiCount, "high AI signal records"],
        ["Market signals", signalCount, "news, media, funding, awards"],
        ["Evidence coverage", avgQuality, "linked source coverage"]
      ]
    : [
    ["Records in view", filtered.length, "after global filters"],
    ["Key players", keyCount, "profile candidates"],
    ["Linked sources", linkedSourceCount, sourceNote],
    ["Link checked", verifiedLinkedCount, "URL health only"],
    ["Claim caveats", filtered.filter((player) => claimIntegrityFor(player).hasHypothesis).length, "hypotheses visible"],
    ["Completion gaps", backlog, gapNote],
    ["Live data queue", credentialQueueCount, "credentials / reports"],
    ["Signal sources", signalCount, "monitoring inputs"],
    ["Internal checks", internalCheckCount, "relationship validation"],
    ["AI-critical", aiCount, "high AI signal"],
    ["Avg. evidence", avgQuality, avgNote]
  ];

  els.databaseStats.innerHTML = databaseStats
    .map(
      ([label, value, note]) => `
        <article class="database-stat">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </article>
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
}

function renderDatabaseVisuals(rows) {
  if (!els.databaseVisuals) return;
  const visibleRows = rows;
  const categoryRows = categories
    .map((category) => {
      const items = rows.filter((player) => player.category === category.id);
      const avgQuality = Math.round(items.reduce((sum, player) => sum + qualityProfile(player).score, 0) / Math.max(items.length, 1));
      const gapCount = items.filter(hasCriticalEvidenceGap).length;
      const pressure = Math.round(average(items, (player) => player.relevance + player.momentum + player.aiScore) * 6.6);
      return { category, items, avgQuality, gapCount, pressure: Math.max(0, Math.min(100, pressure)) };
    })
    .filter((item) => item.items.length)
    .sort((a, b) => b.items.length - a.items.length || b.pressure - a.pressure);

  els.databaseVisuals.innerHTML = `
    <section class="visual-panel database-matrix-panel">
      <div class="visual-head">
        <div>
          <span class="section-kicker">Ecosystem coverage view</span>
          <h3>Source confidence versus strategic priority</h3>
        </div>
        <p>${rows.length} records are represented without forcing a raw table into the executive view.</p>
      </div>
      <div class="visual-matrix database-priority-map ${rows.length > 70 ? "is-dense" : ""}" aria-label="Database evidence priority matrix">
        <span class="matrix-zone zone-invest">Priority / qualified</span>
        <span class="matrix-zone zone-ready">Higher confidence</span>
        <span class="matrix-axis axis-y">Strategic priority</span>
        <span class="matrix-axis axis-x">Evidence confidence</span>
        ${visibleRows
          .map((player, index) =>
            visualPoint(player, {
              compact: true,
              jitter: 8.4,
              showLabel: index < 6 || player.id === state.selectedPlayerId,
              density: true
            })
          )
          .join("")}
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
              <article class="category-proof-row" style="--cat:${category.color}; --quality:${avgQuality}; --pressure:${pressure}">
                <header>
                  <span>${escapeHtml(category.shortName || category.name)}</span>
                  <strong>${items.length}</strong>
                </header>
                <div class="proof-bars">
                  <span title="Evidence strength"><i></i></span>
                  <span title="Strategic pressure"><i></i></span>
                </div>
                <small>${avgQuality}% source confidence / ${gapCount} completion gap${gapCount === 1 ? "" : "s"}</small>
              </article>
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
  if (isExecutiveMode()) {
    const category = categoryById(player.category);
    const quality = qualityProfile(player);
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
            <strong>${escapeHtml(player.name)}</strong>
            <span>${escapeHtml(strategicRole(player))}</span>
          </div>
          ${player.key ? `<em>Key player</em>` : ""}
        </header>
        <p>${escapeHtml(player.description)}</p>
        <div class="record-meta-grid executive-record-meta">
          <span><strong>Category</strong>${escapeHtml(category?.shortName || player.category)}</span>
          <span><strong>Product lens</strong>${escapeHtml(productFocusLabel(player))}</span>
          <span><strong>Source confidence</strong>${escapeHtml(quality.label)}</span>
          <span><strong>Why it matters</strong>${escapeHtml(player.why)}</span>
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
          <strong>${escapeHtml(player.name)}</strong>
          <span>${escapeHtml(strategicRole(player))}</span>
        </div>
        ${player.key ? `<em>Key</em>` : ""}
      </header>
      <p>${escapeHtml(player.description)}</p>
      <div class="record-meta-grid">
        <span><strong>Category</strong>${escapeHtml(categoryById(player.category)?.shortName || player.category)}</span>
        <span><strong>Product lens</strong>${escapeHtml(productFocusLabel(player))}</span>
        <span><strong>Evidence</strong>${escapeHtml(qualityProfile(player).label)}</span>
        <span><strong>AI / momentum</strong>${escapeHtml(`${player.aiScore}/5 AI, ${player.momentum}/5 momentum`)}</span>
        <span><strong>Owner</strong>${escapeHtml(researchOwner(player))}</span>
      </div>
      <div class="record-action-row">
        <span>${escapeHtml(nextAction(player))}</span>
        <small>${escapeHtml(validation.status)}</small>
      </div>
      <div class="source-need-row">
        ${needs.map((need) => `<span class="source-need">${escapeHtml(need)}</span>`).join("")}
      </div>
    </article>
  `;
}

function scoreStack(player) {
  return `
    <div class="score-stack" aria-label="Strategic scores">
      <span><strong>R</strong>${player.relevance}/5</span>
      <span><strong>M</strong>${player.momentum}/5</span>
      <span><strong>AI</strong>${player.aiScore}/5</span>
    </div>
  `;
}

function sourceNeedTags(player) {
  return sourceNeeds(player).map((need) => `<span class="source-need">${escapeHtml(need)}</span>`).join("");
}

function qualityCell(player) {
  const quality = qualityProfile(player);
  const coverage = quality.coverage;
  const claim = claimIntegrityFor(player);
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
      </div>
      <small>${coverage.count} linked / ${escapeHtml(typeText)} / access: ${escapeHtml(accessText)} / gaps: ${escapeHtml(gapText)}</small>
    </div>
  `;
}

function taxonomyCell(player) {
  const taxonomy = taxonomyProfile(player);
  const category = categoryById(player.category);
  return `
    <div class="taxonomy-cell">
      <span class="category-pill" style="--cat:${category.color}">${escapeHtml(category.shortName || category.name)}</span>
      <strong>${escapeHtml(taxonomy.proximity)}</strong>
      <small>${escapeHtml(taxonomy.journey)}</small>
    </div>
  `;
}

function renderDatabase() {
  renderDatabaseStats();
  renderDatabaseSegments();
  const rows = getDatabasePlayers();
  renderDatabaseVisuals(rows);
  if (els.databaseCards) {
    els.databaseCards.innerHTML =
      rows.map(databaseCardHtml).join("") || emptyState("No records match the current database segment.");
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
                <strong>${escapeHtml(player.name)}</strong>
                <span>${escapeHtml(player.description)}</span>
                <div class="mini-tag-row">
                  ${player.key ? `<span class="mini-tag key">Key</span>` : ""}
                  <span class="mini-tag">${escapeHtml(entityKindFor(player))}</span>
                  <span class="mini-tag">${escapeHtml(player.geography)}</span>
                  <span class="mini-tag">${escapeHtml(player.type)}</span>
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
              <span class="product-lens-table-chip">${escapeHtml(productFocusLabel(player))}</span>
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
                ${feeds.map((feed) => `<span class="source-need">${escapeHtml(feed)}</span>`).join("")}
              </div>
            </td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="10">${emptyState("No records match the current database segment.")}</td></tr>`;

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
                  <strong>${escapeHtml(player.name)}</strong>
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
                <strong>${escapeHtml(player.name)}</strong>
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
                          <span class="lane-avatar" style="--avatar-color:${colorFor(rel.player)}">${initials(rel.player.name)}</span>
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
            <h3>${escapeHtml(rel.from)} -> ${escapeHtml(rel.player.name)}</h3>
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
        <span class="source-need">Link health is not claim proof</span>
        <a class="source-need source-link" href="${escapeHtml(status.databaseUrl)}" target="_blank" rel="noreferrer">Open Confluence database</a>
        </div>
      </div>
      <div class="research-source-list">
        <strong>Loaded research anchors</strong>
        ${
          studies
            .map(
              (study) => `
                <a href="${escapeHtml(study.url)}" target="_blank" rel="noreferrer">
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
  `;
}

function renderEvidenceLibrary() {
  if (!els.evidenceLibrary) return;
  const sources = sourceLibrary();
  const status = evidenceContext.status || evidenceContextFallback.status;
  const usageBySource = new Map();
  players.forEach((player) => {
    (evidenceRecordFor(player).sourceIds || []).forEach((sourceId) => {
      const list = usageBySource.get(sourceId) || [];
      list.push(player.name);
      usageBySource.set(sourceId, list);
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
      </div>
    </article>
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
                      const usedBy = usageBySource.get(source.id) || [];
                      return `
                        <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
                          <span>${escapeHtml(source.title)}</span>
                          <small>${escapeHtml(source.scope)}</small>
                          <em>${escapeHtml(source.tier)} tier / ${escapeHtml(sourceAccessLabel(source))} / ${usedBy.length ? `used by ${usedBy.slice(0, 3).join(", ")}` : "not yet mapped to a player"}</em>
                        </a>
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
}

function renderValidationReadiness() {
  if (!els.validationReadiness) return;
  const credentialQueueCount = players.filter(requiresCredentialedData).length;
  const relationshipChecks = validationQueue().length;
  const readyFeeds = liveDataFeeds.filter((feed) => feed.ready).length;
  const liveMetricOverrideCount = Object.keys(liveOverrideContext.metricsByPlayer || {}).length;
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
        <span><strong>${liveMetricOverrideCount}</strong> metric overrides</span>
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

function renderSourceVisuals() {
  if (!els.sourceVisuals) return;
  const sources = sourceLibrary();
  const usageBySource = new Map();
  players.forEach((player) => {
    (evidenceRecordFor(player).sourceIds || []).forEach((sourceId) => {
      const list = usageBySource.get(sourceId) || [];
      list.push(player.id);
      usageBySource.set(sourceId, list);
    });
  });
  const accessCounts = {
    verified: sources.filter((source) => sourceAccessStatus(source) === "verified").length,
    auth: sources.filter((source) => sourceAccessStatus(source) === "auth-required").length,
    manual: sources.filter((source) => ["access-restricted", "timeout"].includes(sourceAccessStatus(source))).length,
    repair: sources.filter((source) => sourceAccessStatus(source) === "needs-replacement").length
  };
  const total = Math.max(1, sources.length);
  const verifiedDeg = Math.round((accessCounts.verified / total) * 360);
  const authDeg = verifiedDeg + Math.round((accessCounts.auth / total) * 360);
  const manualDeg = authDeg + Math.round((accessCounts.manual / total) * 360);
  const typeRows = Object.entries(
    sources.reduce((groups, source) => {
      const group = groups[source.type] || { count: 0, used: 0, high: 0 };
      group.count += 1;
      group.used += usageBySource.has(source.id) ? 1 : 0;
      group.high += source.tier === "High" ? 1 : 0;
      groups[source.type] = group;
      return groups;
    }, {})
  )
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
          class="source-donut"
          style="--verified-deg:${verifiedDeg}deg; --auth-deg:${authDeg}deg; --manual-deg:${manualDeg}deg"
          aria-label="Source access status distribution"
        >
          <strong>${accessCounts.verified}</strong>
          <span>verified</span>
        </div>
        <div class="source-donut-legend">
          <span><i class="legend-verified"></i>${accessCounts.verified} links checked</span>
          <span><i class="legend-auth"></i>${accessCounts.auth} auth-required</span>
          <span><i class="legend-manual"></i>${accessCounts.manual} manual / restricted</span>
          <span><i class="legend-repair"></i>${accessCounts.repair} repair-needed</span>
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
          ${source.url ? `<a class="source-card-link" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">Open source</a>` : ""}
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

function setMode(mode, options = {}) {
  state.mode = mode;
  document.body.dataset.mode = mode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  if (mode === "executive" && isResearchOnlyView(state.view)) {
    switchView("overview");
    return;
  }

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

function selectPlayer(id, options = {}) {
  state.selectedPlayerId = id;
  renderMapSummaryStrip();
  renderMapCompanyPicker();
  renderMap();
  renderProfile();
  renderOnePager();
  syncInteractionState();
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
    setMode("research", { silent: true });
  }
  state.view = view;
  document.body.dataset.view = view;
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll(".overview-shortcut-card").forEach((button) => {
    const active = button.dataset.jumpView === view;
    button.classList.toggle("active", active);
    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  if (view === "relationships") renderRelationshipGraph();
  if (view === "one-pager") renderOnePager();
  syncInteractionState();
  if (options.scroll !== false) {
    window.requestAnimationFrame(() => scrollActiveViewIntoPlace(view, options));
  }
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
  return categories
    .map((category) => {
      const categoryPlayers = players
        .filter((player) => player.category === category.id)
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
    keyPlayers: counts.key_players || keyPlayers.length,
    boardMoves: 49,
    briefCategories: 12,
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
    ["Music learning apps and platforms", "Covered", "Simply, Flowkey, Skoove, Fender Play, Gibson App, Rocksmith+ and related app benchmarks."],
    ["Instrument brands, manufacturers and distributors", "Covered", "Fender, Gibson, Yamaha, Positive Grid, retailers and beginner hardware funnels."],
    ["Teachers, schools and music education organizations", "Covered", "ABRSM, Trinity, RSL/Rockschool, School of Rock, Berklee Online and teacher networks."],
    ["Music hobby software ecosystem", "Covered", "Ultimate Guitar, MuseScore, Songsterr, BandLab, Splice and creation/practice tools."],
    ["Wider education and self-improvement ecosystem", "Covered", "Duolingo, online learning platforms and education benchmarks are represented."],
    ["Investors active in the space", "Covered", "VC, growth, strategic and corporate capital signals are included."],
    ["Influencers, creators and educators", "Covered", "Creator educators are treated as trust and demand-shaping actors."],
    ["Media, publishers and cultural drivers", "Covered", "TikTok, YouTube, Spotify, specialist media and cultural moments are mapped."],
    ["AI companies and AI initiatives", "Covered", "Suno, Music.AI/Moises, Udio, ElevenLabs and rights infrastructure are visible."],
    ["Awards", "Covered", "Award opportunities are tracked separately from funding."],
    ["Funding", "Covered", "Public, EU/Finnish and innovation funding options are tracked separately from investors."],
    ["Last 24 months on the market", "Covered", `${exportMetrics.boardMoves} news grade moves capture funding, AI, rights, partnerships and platform shifts.`]
  ];
  const successTypes = [
    ["Direct app benchmark", "Simply / JoyTunes", "Closest benchmark for onboarding, motivation, subscription learning and beginner conversion. Appfigures still required for performance ranking."],
    ["Repertoire / practice surface", "Ultimate Guitar / Muse Group", "Strong song-intent and repertoire ownership around tabs, chords and practice habits."],
    ["AI practice utility", "Music.AI / Moises", "Stems, isolation, transcription and creator-practice workflows connect AI to actual playing."],
    ["AI creation signal", "Suno", "Funding, rights debate and product visibility make AI music creation a market-structure force."],
    ["Hobby creation / community", "BandLab / Splice", "Creator workflows and communities shape participation beyond formal learning."],
    ["Trust and curriculum", "ABRSM / Trinity / School of Rock", "Certification, teacher trust and education infrastructure shape confidence."],
    ["Hardware funnel", "Fender / Gibson / Yamaha", "Brands and retailers influence instrument access, bundles and beginner pathways."]
  ];
  const completionNotes = [
    ["Appfigures", "Credentialed input", "App-performance fields are prepared for Appfigures import; the report avoids invented revenue, download, ranking or country estimates."],
    ["Relationships", "Internal input", "Relationship owner/status fields are prepared in the workbook and intentionally left open for Yousician completion."],
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
      "Learning is shaped by direct apps, song/practice systems, AI practice utilities, teacher/creator educators, education benchmarks and hardware funnels. Success is clearest by type: Simply for direct-app benchmarking, Ultimate Guitar for repertoire, Moises for AI practice utility, Suno for AI creation, BandLab/Splice for hobby creation, ABRSM/Trinity/School of Rock for trust, and Fender/Gibson/Yamaha for hardware funnels."
    ],
    [
      "Who influences music as a hobby?",
      "TikTok, YouTube, Spotify, creator tools, tabs and notation, artists, cultural moments, instrument brands, retailers, and AI generation tools."
    ],
    [
      "Who shapes the strategic environment?",
      "AI companies, rights owners, app based learning competitors, hardware brands, creator platforms, publishers, investors, funding bodies, awards, media, and education benchmarks."
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
    "Moises",
    "Suno",
    "BandLab",
    "Fender",
    "YouTube",
    "Spotify for Artists",
    "TikTok for Artists",
    "Duolingo"
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
    const groups = categories
      .map((category) => {
        const categoryPlayers = keyPlayers.filter((player) => player.category === category.id);
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
      <p class="export-note">Detailed one-player evidence remains in the full appendix and workbook. The first read version keeps all 28 key players visible without turning the executive report into a database dump.</p>
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
    addSection("Priority actors", "The highest-signal actors are shown before supporting detail.", renderPriorityActors(), "export-priority-section", "export-priority");
    addSection("Completion notes", "The short version keeps only the caveats that must not be missed.", renderDecisionGates(), "", "export-completion");
    addSection("Package contents", "The deck, report, database and completion templates form the current package.", renderDeliverables(), "export-package-section", "export-files");
  } else {
    addSection("Direct answers to the guiding questions", "The three guiding questions are answered before any supporting detail.", renderDirectAnswers(), "", "export-answers");
    addSection("Priority actors and success surfaces", "Top actors first; success is shown by influence surface, not by unvalidated app performance ranking.", `${renderPriorityActors()}${renderSuccessTypes()}`, "export-priority-section", "export-priority");
    addSection("All 28 key players at a glance", "Every key player is visible without turning the first read export into a long database appendix.", renderKeyPlayerProof(false), "export-key-matrix-section", "export-players");
    addSection("Ecosystem map and category coverage", "Visual map plus the requested brief categories.", renderEcosystemMap(), "export-map-section", "export-map");
    addSection("Brief category coverage", "The requested categories are shown individually, not collapsed into broad buckets.", renderBriefRequirements(), "", "export-coverage");
    addSection("Last 24 months on the market", "A compact view of who made the news for what.", renderMarketMoves(), "", "export-moves");
    addSection("Completion notes", "Appfigures and relationships remain explicit completion layers without dominating the main story.", renderDecisionGates(), "", "export-completion");
    addSection("Package contents", "The deck, report, database and completion templates form the current package.", renderDeliverables(), "export-package-section", "export-files");
  }

  if (isFull) {
    addSection("Full key-player profile appendix", "The full version includes the longer key-player profile cards; the standard executive readout keeps this compressed.", renderKeyPlayerProof(true), "export-full-key-section", "export-appendix");
    addSection("Database sample", "The workbook contains the full structured data layer; this export includes the highest-priority records.", renderDatabaseProof(), "", "export-database");
    addSection("Relationship space", "Relationship status remains an internal Yousician field, not an external market claim.", renderRelationshipProof(), "", "export-relationships");
    addSection("Appendix source context", "Supporting proof points and clearly marked data caveats.", renderAppendixProof(), "", "export-source-context");
  }

  els.exportSnapshot.innerHTML = `
    ${reportToolbar}
    <header class="export-cover" id="export-overview">
      <div class="export-cover-grid">
        <div>
          <span class="section-kicker">Brief-aligned executive report</span>
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
        <strong>${exportMetrics.briefCategories} brief categories</strong>
        <strong>${exportMetrics.guidingQuestions} guiding questions answered</strong>
      </div>
      <p class="export-note">This report follows the requested structure: ecosystem map, key players, database, relationship fields, guiding answers and last 24 month market moves. Appfigures and internal relationship inputs remain explicit completion layers.</p>
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
let textDashObserverInstalled = false;

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

function installTextDashNormalizer() {
  if (textDashObserverInstalled || !document.body) return;
  textDashObserverInstalled = true;
  const observer = new MutationObserver(() => scheduleTextDashNormalization());
  observer.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });
}

function renderAll() {
  renderKpis();
  renderFilters();
  renderActiveFilterStrip();
  renderLegend();
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
  renderKeyPlayers();
  renderOnePager();
  renderDatabase();
  renderRelationshipValidationPanel();
  renderRelationshipGraph();
  renderSources();
  renderExportSnapshot();
  syncInteractionState();
  scheduleTextDashNormalization();
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
    "Geography",
    "Reach",
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
      player.geography,
      player.reach,
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

function applyUrlExportMode() {
  const params = new URLSearchParams(window.location.search);
  const isReportRequest = params.get("export") === "brief" && params.get("report") === "brief";
  const requestedMode = params.get("mode") === "research" && params.get("export") !== "brief" ? "research" : "executive";
  state.mode = requestedMode;
  document.body.dataset.mode = requestedMode;
  els.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === requestedMode);
  });
  if (requestedMode === "executive" && isResearchOnlyView(state.view)) {
    state.view = "overview";
    document.body.dataset.view = "overview";
  }
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

function bindHandoffButtons(container) {
  container?.querySelectorAll("[data-handoff-action='relationship-template']").forEach((button) => {
    button.addEventListener("click", downloadRelationshipTemplate);
  });
  container?.querySelectorAll("[data-handoff-action='live-template']").forEach((button) => {
    button.addEventListener("click", downloadLiveOverrideTemplate);
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
      sourceLibrary: Array.isArray(data.sourceLibrary) ? data.sourceLibrary : [],
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

function bindEvents() {
  els.priorityRange.addEventListener("input", (event) => {
    state.minRelevance = Number(event.target.value);
    markMapFilterChanged();
    renderAll();
    revealMapForFilteredView();
  });

  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    markMapFilterChanged();
    renderAll();
    if (state.query.trim().length >= 2) revealMapForFilteredView();
  });

  els.clearSearch?.addEventListener("click", () => {
    state.query = "";
    els.searchInput.value = "";
    markMapFilterChanged();
    renderAll();
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
    renderAll();
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump-view]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.jumpView));
  });

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  els.databaseSort.addEventListener("change", (event) => {
    state.dbSort = event.target.value;
    renderDatabase();
  });

  els.downloadCsv.addEventListener("click", downloadCsv);
  els.printOnePager.addEventListener("click", () => {
    switchView("one-pager");
    document.body.dataset.printTarget = "one-pager";
    showToast("Opening print dialog for the selected one-pager.");
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
    if (document.body.dataset.printTarget === "brief-export") requestReportNavigationSync();
  }, { passive: true });
}

function shouldLoadBackendStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("backend") === "1") return true;
  return false;
}

installTextDashNormalizer();
bindEvents();
applyUrlExportMode();
renderAll();
loadResearchContext();
loadEvidenceContext();
loadLiveOverrides();
if (shouldLoadBackendStatus()) {
  loadBackendStatus({ silent: true });
} else {
  backendState = { ...backendStateFallback, loading: false };
  renderBackendOps();
}
