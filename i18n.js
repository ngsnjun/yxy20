/* ============================================================
   社团分类 · English translations
   Club "official" Chinese names are kept as-is (proper nouns);
   everything else — flavour text, UI chrome, quiz copy — is
   translated. Structure mirrors data.js exactly (same ids,
   same option order/scores) so app.js can switch arrays freely
   mid-quiz without breaking the scoring.
   ============================================================ */

const STRINGS = {
  "nav-directory": { zh: "浏览全部社团", en: "Browse All Clubs" },
  "brand-sub": { zh: "社团人格测试", en: "Club Personality Quiz" },

  "hero-eyebrow": { zh: "博大中华文化学会 · 社团人格测试", en: "UPM Chinese Cultural Society · Club Personality Quiz" },
  "hero-h1": {
    zh: "在十一个社团里，<br>遇见<span class=\"accent\">最像你</span>的那一个。",
    en: "Meet the club, out of eleven,<br>that feels most <span class=\"accent\">like you</span>.",
    html: true
  },
  "hero-lede": {
    zh: "12 道关于日常选择的小问题，没有标准答案。答完之后，我们会从 11 个社团里，找到与你气质最接近的一个——顺便，多认识一点自己。",
    en: "12 quick questions about everyday choices — there's no right answer. At the end, we'll match you with the club whose vibe fits you best, and maybe you'll learn a little about yourself along the way."
  },
  "meta-q": { zh: "12 道日常选择", en: "12 quick questions" },
  "meta-clubs": { zh: "11 个社团", en: "11 clubs" },
  "cta-start": { zh: "开始测试 →", en: "Start the Quiz →" },

  "step1-title": { zh: "跟着直觉选", en: "Follow Your Gut" },
  "step1-text": { zh: "没有标准答案，选择更像你的那一个。", en: "There's no right answer — just pick what feels like you." },
  "step2-title": { zh: "遇见你的社团", en: "Meet Your Club" },
  "step2-text": { zh: "12 道选择，找到与你气质最接近的社团。", en: "12 choices to find the club that matches your vibe." },
  "step3-title": { zh: "找到你的舞台", en: "Find Your Stage" },
  "step3-text": { zh: "看看适合你的地方，也欢迎实际来体验看看。", en: "See where you might belong — and come try it out in person." },

  "about-h2": { zh: "关于这次测试", en: "About This Quiz" },
  "about-p1": {
    zh: "12 道关于日常习惯和喜好的小问题，不需要去想「哪个答案更好」，只需要选择更接近真实自己的那一个。",
    en: "12 small questions about everyday habits and preferences. Don't overthink which answer is “better” — just pick the one closer to the real you."
  },
  "about-p2": {
    zh: "最后，我们会从 11 个社团中，找到与你性格倾向最接近的一个。它不是能力测验，也不是硬性分配，更像是借一个熟悉的问题，重新认识一下自己，也顺便认识博大中华文化学会属下的社团们。",
    en: "At the end, we'll match you with the club whose personality is closest to yours. It's not a skills test or a fixed assignment — more a fun excuse to reflect on yourself, while getting to know the clubs under UPM Chinese Cultural Society."
  },
  "disclaimer1": { zh: "娱乐向测试 · 结果仅供参考，不代表唯一适合你的社团", en: "For fun only · Results are a reference, not the one “correct” club for you" },
  "disclaimer2": { zh: "欢迎在迎新营现场，实际体验每一个社团", en: "Come try every club in person at orientation camp" },

  "quiz-title": { zh: "社团人格探索", en: "Club Personality Quest" },
  "quiz-hint-default": { zh: "选择最接近你的那一项。", en: "Pick whichever feels closest to you." },
  "quiz-prev": { zh: "← 上一题", en: "← Previous" },
  "quiz-nav-hint": { zh: "点击选项，进入下一题", en: "Tap an option to continue" },

  "match-label": { zh: "匹配度", en: "Match" },
  "r-kicker-matched": { zh: "与你相配的社团", en: "Your matched club" },
  "r-kicker-browse": { zh: "社团档案", en: "Club Profile" },
  "scroll-cue": { zh: "往下看，认识更完整的这个社团 ↓", en: "Scroll down for the full profile ↓" },

  "axes-card-kicker": { zh: "这个社团的气质光谱", en: "This club's personality spectrum" },
  "axes-card-h2": { zh: "四维气质倾向", en: "Four-Axis Profile" },
  "axes-note": {
    zh: "光谱反映的是社团整体的活动气质，不是绝对的评价标准——每个社团里，都容得下不同性格的人。",
    en: "These spectrums reflect the club's overall vibe, not a strict rule — every club has room for different personalities."
  },

  "why-card-kicker": { zh: "为什么你们合适", en: "Why you match" },
  "why-card-h2": { zh: "为什么推荐这个社团", en: "Why we recommend this club" },
  "amplified-kicker": { zh: "当这种气质被放大时", en: "When this trait goes into overdrive" },

  "about-card-kicker": { zh: "社团档案", en: "Club Profile" },
  "about-label-activities": { zh: "活动内容：", en: "Activities: " },
  "about-label-forwho": { zh: "适合对象：", en: "Best for: " },
  "about-label-line": { zh: "一句话：", en: "In one line: " },
  "about-name-suffix": { zh: " 社团档案", en: " — Club Profile" },

  "cta-retake": { zh: "再测一次", en: "Retake the Quiz" },
  "cta-browse": { zh: "看看其他社团 →", en: "Browse Other Clubs →" },
  "cta-note": {
    zh: "匹配度为答题倾向的相似程度，不是能力或优劣的评价。",
    en: "Match % reflects how closely your answers align — it's not a measure of skill or worth."
  },

  "dir-h2": { zh: "博大中华文化学会 · 全部社团", en: "UPM Chinese Cultural Society · All Clubs" },
  "dir-p": {
    zh: "点击任一社团，查看完整档案；或返回做一次测试，让我们帮你推荐。",
    en: "Click any club to see its full profile, or take the quiz and let us match you."
  },
  "dir-cta": { zh: "做个测试，帮我推荐 →", en: "Take the Quiz, Get Matched →" },

  "footer": {
    zh: "博大中华文化学会 Persatuan Senibudaya Zhong Hua UPM · 非官方娱乐向测试，仅供迎新营参考使用",
    en: "UPM Chinese Cultural Society (Persatuan Senibudaya Zhong Hua UPM) · Unofficial fun quiz, for orientation camp reference only"
  },

  "page-title": { zh: "缘·华韵相逢 | 社团人格测试", en: "Yuan · Where Splendor Begins | Club Personality Quiz" }
};

const AXES_EN = [
  { key: "energy", label: "Energy", lo: "Calm & Grounded", hi: "High Energy" },
  { key: "stage", label: "Spotlight", lo: "Backstage Specialist", hi: "Front & Center" },
  { key: "style", label: "Style", lo: "Traditional Roots", hi: "Modern & Trendy" },
  { key: "team", label: "Teamwork", lo: "Solo Craft", hi: "Team Synergy" }
];

const CLUBS_EN = [
  {
    id: "wumen",
    name: "Wu Men Wushu",
    archetype: "The Blazing Warrior",
    image: "assets/clubs/wumen.png",
    tags: ["#SharpMoves", "#PromiseKeeper", "#FightsHarderEachTime"],
    quote: "You believe real confidence is trained, not shouted.",
    why: "You're not big on talking things over endlessly — you trust what a punch and a stance can prove. Under pressure, your first instinct is to plant your feet and act, not back away.",
    bright: { title: "Bright Side", text: "Your willpower and grit are the envy of the room. Once you commit to something, you'll grind until it's done." },
    shadow: { title: "Growth Edge", text: "When you're hardest on yourself, you forget rest is part of training too — pushing through an injury is your biggest risk." },
    amplified: "Friend: “You look wiped, take a break.” You: “One more set.” (Trains until the hall closes.)",
    axes: { energy: 85, stage: 60, style: 45, team: 50 },
    about: {
      activities: "Northern & Southern fist forms, weapons routines, conditioning and sparring",
      forWho: "Anyone who wants to build real strength and learn genuine martial arts",
      line: "Here, you'll sweat — but you'll actually get stronger."
    }
  },
  {
    id: "yueyuan",
    name: "Chinese Orchestra",
    archetype: "The Elegant Strings",
    image: "assets/clubs/yueyuan.png",
    tags: ["#PitchPerfectionist", "#SlowAndSteadyWins", "#EnsembleMindset"],
    quote: "You'd rather be part of a whole piece coming together than shine alone.",
    why: "You like doing things properly, and you'll repeat a single passage until the pitch is right. You trust solid fundamentals more than winging it on the night.",
    bright: { title: "Bright Side", text: "Your patience and steadiness are the anchor of the ensemble. When everyone else rushes or drifts off-key, you're the one holding the melody together." },
    shadow: { title: "Growth Edge", text: "Chasing perfection too hard, you can get stuck on tiny details and forget an ensemble needs room to breathe too." },
    amplified: "The conductor hasn't even counted in yet, and you've already run that one phrase eight times.",
    axes: { energy: 35, stage: 50, style: 15, team: 75 },
    about: {
      activities: "Chinese ensemble playing, sectional practice, regular public performances",
      forWho: "Whether you already play an instrument or want to start from zero",
      line: "Here, your instrument is no longer a solo voice."
    }
  },
  {
    id: "cheling",
    name: "Diabolo Club",
    archetype: "The Finger Sorcerer",
    image: "assets/clubs/cheling.png",
    tags: ["#FeelInYourHands", "#TheHarderTheBetter", "#LaserFocus"],
    quote: "Others see the trick — you're chasing that half-second of perfect feel and timing.",
    why: "You love the thrill of “ninety-nine tries, then it finally clicks.” What looks like a simple move, you'll break down to the smallest detail and drill it.",
    bright: { title: "Bright Side", text: "Your focus and hand-eye coordination are real, hard-earned skill. The harder the trick, the more it fires you up." },
    shadow: { title: "Growth Edge", text: "When you're stuck, you can fixate — one failed attempt and you just want to go again, forgetting your wrists need rest too." },
    amplified: "Your hands are already calloused, and you're still thinking “one more try and I've got it.”",
    axes: { energy: 70, stage: 65, style: 55, team: 35 },
    about: {
      activities: "Diabolo tricks, throw-and-catch stunts, group routine choreography",
      forWho: "Anyone who wants a genuinely impressive, hard-earned skill",
      line: "Every trick you see is built on countless drops."
    }
  },
  {
    id: "wenyi",
    name: "Literary & Arts Club",
    archetype: "The Quiet Ink Wanderer",
    image: "assets/clubs/wenyi.png",
    tags: ["#SlowPace", "#DetailPerson", "#DeepFeeler"],
    quote: "You'd rather spend time alone with pen, ink and paper than be out in the noise.",
    why: "You notice things others miss, and you're used to holding feelings in before slowly turning them into words or images. Quiet, for you, isn't loneliness — it's how you recharge.",
    bright: { title: "Bright Side", text: "Your sensitivity and eye for beauty often catch what others overlook. Your work tends to “speak” louder than you do." },
    shadow: { title: "Growth Edge", text: "You're so used to processing things alone that sometimes, when you should ask for help or speak up, you go quiet instead." },
    amplified: "A friend asks if you're okay. You say “yeah, fine” — then go write a full page about how you actually feel.",
    axes: { energy: 20, stage: 30, style: 30, team: 30 },
    about: {
      activities: "Calligraphy, painting, creative design, creative writing",
      forWho: "Anyone who loves quiet creation and wants to slow down and reflect",
      line: "Here, slow is a pace you're allowed to keep."
    }
  },
  {
    id: "xuanwu",
    name: "Flow Dance Troupe",
    archetype: "The Flowing Light Dancer",
    image: "assets/clubs/xuanwu.png",
    tags: ["#RhythmMaxed", "#SharpYetGraceful", "#NaturalFocalPoint"],
    quote: "Your body understands, before words do, how to turn music into a story.",
    why: "You're tuned in to rhythm and space, and you'd rather express through movement than talk it out. You enjoy being seen, but you love that moment of being fully “in it” even more.",
    bright: { title: "Bright Side", text: "Your expressiveness and coordination make you hard to miss in a crowd. You know how to tell a story with your body." },
    shadow: { title: "Growth Edge", text: "When you care too much about how it looks, you can pile pressure on yourself over tiny slips no one else even notices." },
    amplified: "The music hasn't even ended, and you've already choreographed three new transitions in your head.",
    axes: { energy: 65, stage: 70, style: 60, team: 55 },
    about: {
      activities: "Prop choreography, formation design, stage performances",
      forWho: "Anyone who loves expressing themselves through movement",
      line: "The moment the lights come up, that's your stage."
    }
  },
  {
    id: "langchao",
    name: "Drama Workshop",
    archetype: "The Wave Storyteller",
    image: "assets/clubs/langchao.png",
    tags: ["#PreciseEmotionalRange", "#NaturalPresence", "#DeeplyEmpathetic"],
    quote: "You believe everyone carries more than one character inside — they're just missing a stage.",
    why: "You're highly attuned to emotion, and skilled at amplifying it, reining it back in, and delivering it precisely. You enjoy becoming someone else, and it helps you understand yourself better too.",
    bright: { title: "Bright Side", text: "Your charisma and empathy can make an audience laugh and cry right along with you. You're a natural at the center of a story." },
    shadow: { title: "Growth Edge", text: "When you go too deep into a role, you can lose the line between “the character's feelings” and “your own”, and get pulled along by the plot." },
    amplified: "Rehearsal ended half an hour ago and you still haven't quite shaken the character's mood.",
    axes: { energy: 60, stage: 85, style: 55, team: 65 },
    about: {
      activities: "Stage play production, improv, voice and physical training",
      forWho: "Anyone who wants to tell stories and try on different characters",
      line: "Here, there's no “not like you” — only a role you haven't played yet."
    }
  },
  {
    id: "yujia",
    name: "Yoga Club",
    archetype: "The Still Breather",
    image: "assets/clubs/yujia.png",
    tags: ["#EmotionalAnchor", "#SlowIsFast", "#InnerStrength"],
    quote: "Before proving anything to anyone else, you want to get yourself settled first.",
    why: "You understand that real strength is often quiet. You're not racing to compare yourself to others — you care more about being a little looser, a little steadier, than you were yesterday.",
    bright: { title: "Bright Side", text: "Your steadiness and self-awareness often make you the first person a friend thinks of when they're low. You bring a sense of calm wherever you go." },
    shadow: { title: "Growth Edge", text: "You're so used to processing things internally that emotions you should release sometimes just turn into quiet physical tension instead." },
    amplified: "Everyone around you is losing it, and you just take a breath and say, “let's stay calm.”",
    axes: { energy: 15, stage: 20, style: 45, team: 20 },
    about: {
      activities: "Basic postures, breathing practice, stretching and relaxation",
      forWho: "Anyone looking to restore balance and release stress",
      line: "That one hour on the mat is time just for you."
    }
  },
  {
    id: "jingqi",
    name: "Chess & Strategy Club",
    archetype: "The Quiet Strategist",
    image: "assets/clubs/jingqi.png",
    tags: ["#LogicBrain", "#TenMovesAhead", "#GoodWinnerGoodLoser"],
    quote: "Others see one move. You've already worked out the next ten in your head.",
    why: "You like challenges with clear rules and logic, and you get real satisfaction from winning “by out-thinking” someone. A quiet match appeals to you more than a loud crowd.",
    bright: { title: "Bright Side", text: "Your logic and patience mean you stay level-headed at the key moment. You don't act on impulse, but when you do move, it usually counts." },
    shadow: { title: "Growth Edge", text: "When you're too locked into “calculating,” you can forget your opponent is also a friend, and take every game a little too seriously." },
    amplified: "It's just a casual game of Connect Four with a friend, and you've already run three opening strategies in your head.",
    axes: { energy: 25, stage: 25, style: 40, team: 35 },
    about: {
      activities: "Chinese chess, Go, strategy board game tournaments",
      forWho: "Anyone who loves thinking hard and enjoys the game of outwitting",
      line: "Every move is a small exercise in discipline."
    }
  },
  {
    id: "tengshi",
    name: "Lion Dance Troupe",
    archetype: "The Leaping Lion Spirit",
    image: "assets/clubs/tengshi.png",
    tags: ["#TeamSpiritMaxed", "#BigPresence", "#TrustedPartner"],
    quote: "You know a lion's roar was never about just one person.",
    why: "You value chemistry with your team, and you'll rehearse the same rhythm over and over until it clicks. What you love isn't just the applause — it's the trust built with your partner along the way.",
    bright: { title: "Bright Side", text: "Your team spirit and explosive power make you someone the group can truly rely on. When the drum hits, you already know where to go." },
    shadow: { title: "Growth Edge", text: "Loyalty runs deep — sometimes too deep. You'll push through pain so you “don't drag the team down,” instead of speaking up when you're hurt." },
    amplified: "Your legs are already shaking, but the drumbeat shifts, and you still land the move first, ask questions later.",
    axes: { energy: 90, stage: 75, style: 20, team: 85 },
    about: {
      activities: "Lion dance fundamentals, plum-blossom poles, drum & gong training, tours",
      forWho: "Anyone who loves team performance and wants to carry on tradition",
      line: "Every beat and step carries generations of shared rhythm."
    }
  },
  {
    id: "wujixian",
    name: "Street Dance Crew",
    archetype: "The Rhythm Breaker",
    image: "assets/clubs/wujixian.png",
    tags: ["#CantStopTheGroove", "#StrongPersonalStyle", "#BattleReady"],
    quote: "When the music drops, your body reacts before your brain does.",
    why: "You like interpreting rhythm your own way, and you don't love being boxed into a fixed routine. The stage, for you, is a place to release and express yourself.",
    bright: { title: "Bright Side", text: "Your explosiveness and personal style are hard to copy. You're not afraid to move differently from the crowd — that's exactly your appeal." },
    shadow: { title: "Growth Edge", text: "When you're chasing your own flavor too hard, you can occasionally lose the group's overall shape in a routine." },
    amplified: "The choreographer yells “keep it tight!” — and your body still, very honestly, throws in one more freestyle move.",
    axes: { energy: 88, stage: 80, style: 85, team: 60 },
    about: {
      activities: "Hip-hop / freestyle, group choreography and battles",
      forWho: "Anyone who wants to express themselves through dance and isn't afraid to stand out",
      line: "There's no right answer here — only your own rhythm."
    }
  },
  {
    id: "yinzi",
    name: "Music Workshop",
    archetype: "The Note Catcher",
    image: "assets/clubs/yinzi.png",
    tags: ["#SharpEars", "#EmotionalCreator", "#BornForLive"],
    quote: "For you, hitting the right note says more than a hundred sentences ever could.",
    why: "You're sensitive to melody and lyrics, and you use music to record how you're feeling. Rather than just enjoying it alone, you want to sing it, play it, and let people actually hear it.",
    bright: { title: "Bright Side", text: "Your musical instinct and stage presence make you easy to remember in a crowd. The moment you open your mouth, everyone knows it's you." },
    shadow: { title: "Growth Edge", text: "When you're deep in the emotion and the melody, you can miss how the audience is reacting in the moment — worth practicing a bit more “pulling back.”" },
    amplified: "You just hummed a random line under your breath, and you've already quietly written the harmony for it.",
    axes: { energy: 55, stage: 60, style: 70, team: 45 },
    about: {
      activities: "Vocal / instrument training, cover arrangements, orientation opening performance",
      forWho: "Anyone who loves singing or playing an instrument and wants to get on stage",
      line: "Your voice deserves to be heard by more people."
    }
  }
];

/* Mirrors QUESTIONS in data.js exactly — same order, same option
   index, same scores. Only the label text is translated. */
const QUESTIONS_EN = [
  {
    q: "You suddenly have a completely free weekend — you're most likely to:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Get friends together to work out and sweat it all out", scores: { wumen: 2, tengshi: 2, wujixian: 1 } },
      { label: "Sit quietly by yourself, writing, drawing, or reading", scores: { wenyi: 2, yujia: 1 } },
      { label: "Team up with friends for games or a board game, exercise the brain", scores: { jingqi: 2, cheling: 1 } },
      { label: "Rehearse a performance, and enjoy shining on stage", scores: { langchao: 2, xuanwu: 1, wujixian: 1 } }
    ]
  },
  {
    q: "Friends' first impression of you is usually:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Strong and grounded — reliable and reassuring", scores: { wumen: 2, tengshi: 1 } },
      { label: "Full of rhythm — every move looks good", scores: { xuanwu: 2, wujixian: 1 } },
      { label: "Quiet and gentle, with a distinct vibe", scores: { wenyi: 2, yujia: 2 } },
      { label: "Great at working a room — things liven up when you're there", scores: { langchao: 2, tengshi: 1, yinzi: 1 } }
    ]
  },
  {
    q: "If you had to pick a role in a performance, you'd choose:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Front and center, carrying a solo skill act", scores: { cheling: 2, langchao: 1 } },
      { label: "In sync with a partner, pulling off a hard move together", scores: { tengshi: 2, wumen: 1 } },
      { label: "In the band/orchestra, steadily holding the melody down", scores: { yueyuan: 2, yinzi: 1 } },
      { label: "Backstage, calming your breathing and getting into the zone", scores: { yujia: 2, wenyi: 1 } }
    ]
  },
  {
    q: "Which kind of “impressive” do you enjoy more?",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "A jaw-dropping solo skill you built up yourself", scores: { cheling: 2, wumen: 1 } },
      { label: "A whole group, perfectly in sync, full of presence", scores: { tengshi: 2, yueyuan: 1 } },
      { label: "A melody or a voice that makes people remember the moment", scores: { yinzi: 2, yueyuan: 1 } },
      { label: "A story or character that makes people feel something", scores: { langchao: 2, wenyi: 1 } }
    ]
  },
  {
    q: "Which description sounds more like you?",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Steady, precise, powerful", scores: { wumen: 2, tengshi: 1 } },
      { label: "Adaptable, creative, full of ideas", scores: { cheling: 2, xuanwu: 1 } },
      { label: "Gentle, patient, sensitive", scores: { wenyi: 2, yujia: 1 } },
      { label: "Warm, outgoing, magnetic", scores: { langchao: 2, wujixian: 1 } }
    ]
  },
  {
    q: "When practicing, which kind can you actually stick with?",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Drilling the same move over and over until it's mastered", scores: { cheling: 2, xuanwu: 1 } },
      { label: "Practicing to the beat until it's muscle memory", scores: { wujixian: 2, yueyuan: 1 } },
      { label: "Settling in alone — practice doubles as relaxation", scores: { yujia: 2, wenyi: 1 } },
      { label: "Drilling with a team, correcting each other", scores: { wumen: 1, tengshi: 2 } }
    ]
  },
  {
    q: "On a day off, you'd rather:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Hit the gym or the training hall and really sweat", scores: { wumen: 2 } },
      { label: "Sit in a quiet café, writing or drawing", scores: { wenyi: 2 } },
      { label: "Go to a livehouse for music and a live show", scores: { yinzi: 2, wujixian: 1 } },
      { label: "Hang out at a chess or board game spot for a good match", scores: { jingqi: 2 } }
    ]
  },
  {
    q: "In group activities, you usually end up as:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "The one leading from the front, setting the pace", scores: { wujixian: 2, langchao: 1 } },
      { label: "The steady, dependable pillar holding things together", scores: { tengshi: 2, wumen: 1 } },
      { label: "The one keeping the mood and energy up", scores: { langchao: 2, yinzi: 1 } },
      { label: "The quiet observer who steps in at the key moment", scores: { jingqi: 2, cheling: 1 } }
    ]
  },
  {
    q: "Music, to you, feels more like:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "The character of a traditional instrument — it settles you instantly", scores: { yueyuan: 2 } },
      { label: "Singing along to the melody — that's the satisfying part", scores: { yinzi: 2 } },
      { label: "Something with a strong beat that makes you want to move", scores: { wujixian: 2, xuanwu: 1 } },
      { label: "Just background noise — not really my main thing", scores: { jingqi: 1, wenyi: 1 } }
    ]
  },
  {
    q: "If you had to try something you've never done, you'd pick:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Learn a beautiful set of martial arts forms", scores: { wumen: 2 } },
      { label: "Learn a slick set of prop tricks", scores: { cheling: 2, xuanwu: 1 } },
      { label: "Play a character completely unlike yourself", scores: { langchao: 2 } },
      { label: "Train a softer, steadier body and mind", scores: { yujia: 2 } }
    ]
  },
  {
    q: "Which kind of team relationship do you value most?",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Comrades who sweat and get stronger together", scores: { wumen: 2, tengshi: 1 } },
      { label: "Friends who get every joke and clown around with you", scores: { langchao: 1, yinzi: 1, wujixian: 1 } },
      { label: "A quiet companion you don't need many words with", scores: { wenyi: 2, yujia: 1 } },
      { label: "A worthy rival you can go head-to-head with", scores: { jingqi: 2 } }
    ]
  },
  {
    q: "The moment the stage lights come up, you want everyone to see:",
    hint: "Pick whichever feels closest to you.",
    options: [
      { label: "Perfect unison and presence, unforgettable at a glance", scores: { tengshi: 2, yueyuan: 1 } },
      { label: "Clean, sharp technique that leaves the crowd stunned", scores: { cheling: 2, xuanwu: 1 } },
      { label: "Controlled, honest emotion that people connect with", scores: { langchao: 2, wenyi: 1 } },
      { label: "A beat that won't quit, with the whole crowd moving to it", scores: { wujixian: 2, yinzi: 1 } }
    ]
  }
];
