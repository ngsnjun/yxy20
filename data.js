/* ============================================================
   社团分类 · Data
   All copy is in Chinese to match the source association's
   own materials. Club "archetype" flavour text is entertainment
   only — see disclaimer in index.html.
   ============================================================ */

const CLUBS = [
  {
    id: "wumen",
    name: "全武门",
    archetype: "烈焰武者",
    image: "assets/clubs/wumen.png",
    tags: ["#身法凌厉", "#一诺千金", "#越战越勇"],
    quote: "你相信真正的底气，是练出来的，不是喊出来的。",
    why: "你不太喜欢纸上谈兵，更相信一拳一脚累积出来的确定感。面对压力，你的第一反应是站稳、出手，而不是后退。",
    bright: {
      title: "高光面",
      text: "你的意志力和抗压能力，是很多人羡慕的。答应了的事，你会咬牙练到做到。"
    },
    shadow: {
      title: "阴暗面",
      text: "对自己太狠的时候，你会忘记休息也是训练的一部分——受伤了还硬撑，是你最大的隐患。"
    },
    amplified: "别人：「今天状态不好，休息一下吧。」你：「再练最后一组。」（结果练到关门）",
    axes: { energy: 85, stage: 60, style: 45, team: 50 },
    about: {
      activities: "南北拳、器械套路、基本功与实战训练",
      forWho: "想锻炼体魄、学一身真功夫的你",
      line: "在这里，你会流汗，但也会真正变强。"
    }
  },
  {
    id: "yueyuan",
    name: "华乐团",
    archetype: "执弦雅士",
    image: "assets/clubs/yueyuan.png",
    tags: ["#音准控", "#慢工出细活", "#合奏型人格"],
    quote: "你享受的不是一个人闪耀，而是和大家一起，把一首曲子完整地呈现出来。",
    why: "你做事讲究章法，愿意为了一个音准反复练习。比起临场发挥，你更相信扎实的基本功。",
    bright: {
      title: "高光面",
      text: "你的耐心和稳定，是乐团里最珍贵的定海神针。别人抢拍走音，你永远是那个稳住旋律的人。"
    },
    shadow: {
      title: "阴暗面",
      text: "太追求完美，容易在小细节上钻牛角尖，忘了合奏本来就该有留白和呼吸感。"
    },
    amplified: "指挥都还没数拍，你已经默默练了八遍同一个乐句。",
    axes: { energy: 35, stage: 50, style: 15, team: 75 },
    about: {
      activities: "中乐合奏、乐器分部训练、定期公演",
      forWho: "会乐器或想从零学起的你，都欢迎",
      line: "在这里，你的乐器不再是一个人的独白。"
    }
  },
  {
    id: "cheling",
    name: "扯铃班",
    archetype: "指尖魔术师",
    image: "assets/clubs/cheling.png",
    tags: ["#手感型人格", "#越难越想挑战", "#专注力爆表"],
    quote: "别人看到的是花式，你在意的是那零点几秒的手感和节奏。",
    why: "你喜欢那种「练一百次终于成功一次」的爽感。看似简单的动作，你会拆解到最细的地方去打磨。",
    bright: {
      title: "高光面",
      text: "你的专注力和手眼协调，是练出来的硬实力。越是高难度的花式，越能激发你的斗志。"
    },
    shadow: {
      title: "阴暗面",
      text: "卡关的时候容易钻牛角尖，一次不成功就想一直重来，忘了适时让手腕休息。"
    },
    amplified: "手都练到起茧了，还在想「再试一次说不定就成了」。",
    axes: { energy: 70, stage: 65, style: 55, team: 35 },
    about: {
      activities: "花式扯铃、抛接特技、团体表演编排",
      forWho: "想练一身「反应式」绝活的你",
      line: "每一个花式，都是无数次失手换来的。"
    }
  },
  {
    id: "wenyi",
    name: "文艺班",
    archetype: "静墨行者",
    image: "assets/clubs/wenyi.png",
    tags: ["#慢节奏", "#细节控", "#情绪细腻"],
    quote: "比起热闹，你更享受一个人和笔墨相处的时间。",
    why: "你善于观察，也习惯把感受先收进心里，再慢慢转化成文字或画面。安静，对你来说不是孤单，而是充电。",
    bright: {
      title: "高光面",
      text: "你的细腻和审美，常常能发现别人忽略的美。你的作品，往往比你本人更会「说话」。"
    },
    shadow: {
      title: "阴暗面",
      text: "太习惯自己消化情绪，有时候该求助、该表达的时候，你选择了沉默。"
    },
    amplified: "朋友问你怎么了，你说「没事」，转头写了一整页的心情小记。",
    axes: { energy: 20, stage: 30, style: 30, team: 30 },
    about: {
      activities: "书法、绘画、文创设计、文字创作",
      forWho: "喜欢安静创作、想沉淀自己的你",
      line: "在这里，慢，是一种被允许的节奏。"
    }
  },
  {
    id: "xuanwu",
    name: "旋舞团",
    archetype: "流光旋者",
    image: "assets/clubs/xuanwu.png",
    tags: ["#节奏感拉满", "#优雅又利落", "#人群焦点体质"],
    quote: "你的身体比语言更早知道，怎么把一段音乐变成一段故事。",
    why: "你对节奏和空间很敏感，习惯用动作而不是言语来表达情绪。你享受被看见，但更享受那个「完全进入状态」的瞬间。",
    bright: {
      title: "高光面",
      text: "你的表现力和协调性，让你在人群中很难不被注意到。你懂得如何用身体讲故事。"
    },
    shadow: {
      title: "阴暗面",
      text: "太在意呈现效果的时候，容易忽略过程中的小失误，给自己不必要的压力。"
    },
    amplified: "音乐还没放完，你已经在脑内编好三个新的转场动作。",
    axes: { energy: 65, stage: 70, style: 60, team: 55 },
    about: {
      activities: "道具编舞、队形设计、舞台表演",
      forWho: "喜欢用肢体表达自己的你",
      line: "舞台亮起的瞬间，就是你的主场。"
    }
  },
  {
    id: "langchao",
    name: "浪潮剧坊",
    archetype: "浪潮叙事者",
    image: "assets/clubs/langchao.png",
    tags: ["#情绪拿捏精准", "#天生自带气场", "#共情力强"],
    quote: "你相信，每个人心里都藏着不止一个角色，只是缺一个舞台。",
    why: "你对情绪很敏感，也很擅长把它放大、收回、再准确地传递出去。你享受成为别人，也借此更了解自己。",
    bright: {
      title: "高光面",
      text: "你的感染力和共情能力，能让观众跟着你哭、跟着你笑。你天生适合站在故事的中心。"
    },
    shadow: {
      title: "阴暗面",
      text: "情绪投入太深的时候，容易分不清「角色的情绪」和「自己的情绪」，容易被剧情拖着走。"
    },
    amplified: "排练结束半小时了，你还没从角色的情绪里走出来。",
    axes: { energy: 60, stage: 85, style: 55, team: 65 },
    about: {
      activities: "舞台剧编排、即兴表演、声音与肢体训练",
      forWho: "想说故事、想挑战不同角色的你",
      line: "这里没有「不像你」，只有「还没被你演过」。"
    }
  },
  {
    id: "yujia",
    name: "瑜伽班",
    archetype: "静息行者",
    image: "assets/clubs/yujia.png",
    tags: ["#情绪稳定器", "#慢就是快", "#内在力量派"],
    quote: "比起向外证明，你更想先把自己安顿好。",
    why: "你懂得，真正的力量常常是安静的。你不急着跟别人比较，更在意自己有没有比昨天更松、更稳一点。",
    bright: {
      title: "高光面",
      text: "你的稳定和自我觉察，常常是朋友低落时第一个想到的依靠。你带给身边人一种「不慌」的安全感。"
    },
    shadow: {
      title: "阴暗面",
      text: "太习惯往内消化，有时候该释放的情绪，被你悄悄压成了身体的紧绷。"
    },
    amplified: "所有人都在崩溃尖叫，你深呼吸了一下，说「先冷静」。",
    axes: { energy: 15, stage: 20, style: 45, team: 20 },
    about: {
      activities: "基础体位、呼吸练习、伸展与放松",
      forWho: "想找回身心平衡、释放压力的你",
      line: "垫子上的一小时，是留给自己的时间。"
    }
  },
  {
    id: "jingqi",
    name: "竞棋社",
    archetype: "沉思棋者",
    image: "assets/clubs/jingqi.png",
    tags: ["#逻辑控", "#三步之后都算好了", "#输得起也赢得起"],
    quote: "别人看到一步棋，你已经在心里推演了后面十步。",
    why: "你喜欢有规则、有逻辑的挑战，享受那种「靠脑子赢回来」的成就感。安静的对局，对你来说比喧闹的场合更有吸引力。",
    bright: {
      title: "高光面",
      text: "你的逻辑思维和耐心，让你在关键时刻总能冷静判断。你不轻易冲动，但一旦出手往往很准。"
    },
    shadow: {
      title: "阴暗面",
      text: "太专注在「算计」的时候，容易忘了对手也是朋友，把每一局都看得太重。"
    },
    amplified: "只是朋友间的一局五子棋，你已经在脑内跑了三种开局套路。",
    axes: { energy: 25, stage: 25, style: 40, team: 35 },
    about: {
      activities: "象棋、围棋、桌游策略赛",
      forWho: "喜欢动脑、享受博弈过程的你",
      line: "每一步，都是一次小小的修行。"
    }
  },
  {
    id: "tengshi",
    name: "腾狮阁",
    archetype: "腾跃醒狮魂",
    image: "assets/clubs/tengshi.png",
    tags: ["#团魂爆棚", "#气势感拉满", "#信任型搭档"],
    quote: "你知道，一头狮子威不威风，从来不是一个人的事。",
    why: "你重视团队默契，愿意为了共同的节奏反复磨合。你享受的不只是掌声，更是和搭档一起扛下来的那份信任。",
    bright: {
      title: "高光面",
      text: "你的团队意识和爆发力，让你成为队伍里值得托付的那一个。鼓声一响，你就知道该往哪去。"
    },
    shadow: {
      title: "阴暗面",
      text: "太重情义的时候，容易为了「不能拖累队友」而硬撑，忘了受伤要先说出来。"
    },
    amplified: "腿已经在抖了，鼓点一变化，你还是先把动作接住再说。",
    axes: { energy: 90, stage: 75, style: 20, team: 85 },
    about: {
      activities: "醒狮基本功、梅花桩、锣鼓训练与巡演",
      forWho: "喜欢团队作战、想传承传统文化的你",
      line: "一鼓一步，都是几代人传下来的默契。"
    }
  },
  {
    id: "wujixian",
    name: "舞极限",
    archetype: "律动破格者",
    image: "assets/clubs/wujixian.png",
    tags: ["#停不下来的节奏感", "#自我风格强", "#battle型人格"],
    quote: "音乐一响，你的身体比脑袋反应得更快。",
    why: "你喜欢用自己的方式诠释节奏，不太想被固定的套路框住。舞台对你来说，是释放和表达自我的地方。",
    bright: {
      title: "高光面",
      text: "你的爆发力和个人风格很难被模仿。你不怕在人群里跳得不一样，因为那正是你的魅力所在。"
    },
    shadow: {
      title: "阴暗面",
      text: "太想秀出自我风格的时候，偶尔会忽略团队编排的整体感。"
    },
    amplified: "编舞老师喊「整齐一点」，你的身体还是很诚实地加了一个即兴动作。",
    axes: { energy: 88, stage: 80, style: 85, team: 60 },
    about: {
      activities: "Hip-hop / Freestyle / 团体编舞与 battle",
      forWho: "想用舞蹈表达自己、敢于展现个性的你",
      line: "这里没有标准答案，只有你的节奏。"
    }
  },
  {
    id: "yinzi",
    name: "音子工作坊",
    archetype: "音符捕手",
    image: "assets/clubs/yinzi.png",
    tags: ["#耳朵很敏锐", "#情感型创作者", "#live型人格"],
    quote: "对你来说，一首歌唱对了，比说一百句话更能表达心情。",
    why: "你对旋律和歌词很敏感，习惯用音乐记录自己的状态。比起独自欣赏，你更想把这份感受唱出来、弹出来，让人听见。",
    bright: {
      title: "高光面",
      text: "你的音乐感受力和表现欲，让你很容易在人群中被记住。一开口，大家就知道那是你。"
    },
    shadow: {
      title: "阴暗面",
      text: "太沉浸在情绪和旋律里的时候，容易忽略台下观众的即时反应，需要多一点「收」的练习。"
    },
    amplified: "只是随口哼了一句，你已经默默编好了和声。",
    axes: { energy: 55, stage: 60, style: 70, team: 45 },
    about: {
      activities: "主唱／乐器训练、翻唱编曲、迎新营开幕演出",
      forWho: "喜欢唱歌、玩乐器，想站上舞台的你",
      line: "你的声音，值得被更多人听见。"
    }
  }
];

/* Each option carries small point deltas per club id.
   Only clubs actually referenced need to be listed. */
const QUESTIONS = [
  {
    q: "突然有一整个空闲的周末，你更想：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "约朋友一起运动，酣畅淋漓地流汗", scores: { wumen: 2, tengshi: 2, wujixian: 1 } },
      { label: "一个人静静地练字、画画或读书", scores: { wenyi: 2, yujia: 1 } },
      { label: "和朋友组队打游戏或下棋，动动脑", scores: { jingqi: 2, cheling: 1 } },
      { label: "排练一段表演，享受在台上发光的感觉", scores: { langchao: 2, xuanwu: 1, wujixian: 1 } }
    ]
  },
  {
    q: "朋友对你的第一印象通常是：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "很有力量感，让人感觉靠谱又安心", scores: { wumen: 2, tengshi: 1 } },
      { label: "很有节奏感，一举一动都很好看", scores: { xuanwu: 2, wujixian: 1 } },
      { label: "很安静温柔，气质很特别", scores: { wenyi: 2, yujia: 2 } },
      { label: "很会来事，气氛都因为你变热闹", scores: { langchao: 2, tengshi: 1, yinzi: 1 } }
    ]
  },
  {
    q: "如果要在表演里选一个位置，你会选：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "站在最前面，独挑大梁的绝活", scores: { cheling: 2, langchao: 1 } },
      { label: "和搭档默契配合，一起完成高难度动作", scores: { tengshi: 2, wumen: 1 } },
      { label: "在乐队／乐团里，负责稳稳撑住旋律", scores: { yueyuan: 2, yinzi: 1 } },
      { label: "在后台调整呼吸，把状态准备到最好", scores: { yujia: 2, wenyi: 1 } }
    ]
  },
  {
    q: "你更享受哪一种「厉害」：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "一个人练出让人惊叹的手上绝活", scores: { cheling: 2, wumen: 1 } },
      { label: "一群人整整齐齐、气势十足", scores: { tengshi: 2, yueyuan: 1 } },
      { label: "用旋律或歌声，让人记住那一刻", scores: { yinzi: 2, yueyuan: 1 } },
      { label: "用一段故事或角色，让人有共鸣", scores: { langchao: 2, wenyi: 1 } }
    ]
  },
  {
    q: "别人形容你，比较接近哪一种？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "稳、准、有力量", scores: { wumen: 2, tengshi: 1 } },
      { label: "灵活、有创意、点子多", scores: { cheling: 2, xuanwu: 1 } },
      { label: "温和、耐心、细腻", scores: { wenyi: 2, yujia: 1 } },
      { label: "热情、外放、感染力强", scores: { langchao: 2, wujixian: 1 } }
    ]
  },
  {
    q: "练习的时候，你比较能坚持哪一种？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "反复打磨同一个动作，直到完全掌握", scores: { cheling: 2, xuanwu: 1 } },
      { label: "跟着节拍练到肌肉记忆", scores: { wujixian: 2, yueyuan: 1 } },
      { label: "一个人慢慢沉下心，练习也是放松", scores: { yujia: 2, wenyi: 1 } },
      { label: "和团队一起对练，互相纠正", scores: { wumen: 1, tengshi: 2 } }
    ]
  },
  {
    q: "假日你更想去：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "健身房／武馆，好好流一身汗", scores: { wumen: 2 } },
      { label: "安静的咖啡馆，写写画画", scores: { wenyi: 2 } },
      { label: "livehouse 听歌、看现场表演", scores: { yinzi: 2, wujixian: 1 } },
      { label: "棋室或桌游店，动动脑较量一下", scores: { jingqi: 2 } }
    ]
  },
  {
    q: "团体活动里，你通常扮演：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "冲在前面带节奏的人", scores: { wujixian: 2, langchao: 1 } },
      { label: "稳住大局、值得信赖的支柱", scores: { tengshi: 2, wumen: 1 } },
      { label: "负责氛围和情绪的人", scores: { langchao: 2, yinzi: 1 } },
      { label: "安静观察、关键时刻出手的人", scores: { jingqi: 2, cheling: 1 } }
    ]
  },
  {
    q: "音乐对你来说更像：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "传统乐器的韵味，一听就静下来", scores: { yueyuan: 2 } },
      { label: "跟着旋律唱出来，才痛快", scores: { yinzi: 2 } },
      { label: "节奏感强的音乐，会忍不住想动起来", scores: { wujixian: 2, xuanwu: 1 } },
      { label: "背景音就好，不是我的主场", scores: { jingqi: 1, wenyi: 1 } }
    ]
  },
  {
    q: "如果要挑战一件没做过的事，你会选：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "学一套漂亮的武术套路", scores: { wumen: 2 } },
      { label: "学会一套很飒的道具花式", scores: { cheling: 2, xuanwu: 1 } },
      { label: "演一个和自己完全不同的角色", scores: { langchao: 2 } },
      { label: "练出更柔软、更稳的身体和心", scores: { yujia: 2 } }
    ]
  },
  {
    q: "你最珍惜团队里的哪一种关系？",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "一起流汗、一起变强的战友", scores: { wumen: 2, tengshi: 1 } },
      { label: "懂你所有梗、一起搞怪的伙伴", scores: { langchao: 1, yinzi: 1, wujixian: 1 } },
      { label: "安静陪伴、不需要多说话的知己", scores: { wenyi: 2, yujia: 1 } },
      { label: "棋逢对手、互相较量的对手", scores: { jingqi: 2 } }
    ]
  },
  {
    q: "舞台灯光亮起的瞬间，你希望大家看到：",
    hint: "选择最接近你的那一项。",
    options: [
      { label: "整齐划一的气势，一眼难忘", scores: { tengshi: 2, yueyuan: 1 } },
      { label: "干净利落的技巧，全场惊叹", scores: { cheling: 2, xuanwu: 1 } },
      { label: "收放自如的情绪，让人共情", scores: { langchao: 2, wenyi: 1 } },
      { label: "停不下来的节奏，全场跟着律动", scores: { wujixian: 2, yinzi: 1 } }
    ]
  }
];

function getClub(id) {
  return CLUBS.find(c => c.id === id);
}
