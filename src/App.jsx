import { useEffect, useRef, useState } from "react";

const education = [
  {
    index: "01",
    period: "2015 — 2018",
    school: "西乡县第五中学",
    stage: "初中",
    copy: "在陕南的山水之间完成最初的知识启蒙，也在持续向前的过程中，建立起对自我与世界的朴素判断。",
    mediaType: "gallery",
    media: [
      "education/middle-01.webp",
      "education/middle-02.webp",
      "education/middle-03.webp",
      "education/middle-04.webp",
    ],
  },
  {
    index: "02",
    period: "2018 — 2021",
    school: "西乡县第一中学",
    stage: "高中",
    copy: "三年积累、选择与坚持。高考并不是故事的终点，而是第一次真正理解成长、责任与远方。",
    mediaType: "video",
    videos: [
      {
        label: "青春纪念",
        video: "gaosan-jinian.mp4",
        poster: "gaosan-jinian-poster.webp",
        credit: "来源同学",
      },
      {
        label: "高中回忆",
        video: "gaosan-memory.mp4",
        poster: "gaosan-memory-poster.webp",
      },
      {
        label: "同窗记忆",
        video: "gaosan-classmate.mp4",
        poster: "gaosan-classmate-poster.webp",
        credit: "来源同学",
      },
    ],
  },
  {
    index: "03",
    period: "2021 — 2025",
    school: "天津财经大学",
    stage: "法学本科",
    copy: "系统学习法学，在课堂、支教、志愿服务与校友走访中理解规则如何进入社会，也找到继续深造的方向。",
    mediaType: "video",
    videos: [
      {
        label: "照片回忆",
        video: "education/education-university-memory.mp4",
        poster: "education/education-university-memory-poster.webp",
      },
      {
        label: "珍藏片段",
        video: "education/education-university-original.mp4",
        poster: "education/education-university-original-poster.webp",
      },
    ],
  },
];

const practices = [
  {
    no: "01",
    title: "赴新疆和田实习支教",
    period: "2023.09 — 2023.12",
    tag: "教育 · 公益",
    copy: "深入民族地区教育一线，承担教学工作。在真实课堂中练习表达、倾听与协作，积累跨文化沟通和基层实践经验。",
    images: Array.from(
      { length: 8 },
      (_, index) => `practice-zhijiao-${String(index + 1).padStart(2, "0")}.webp`,
    ),
  },
  {
    no: "02",
    title: "华南校友行",
    period: "2024.07",
    tag: "走访 · 连接",
    copy: "参与校友走访与深度交流，在城市、行业与个体经验的交汇中拓展认知，并重新理解大学共同体的意义。",
    images: Array.from(
      { length: 11 },
      (_, index) => `practice-huanan-${String(index + 1).padStart(2, "0")}.webp`,
    ),
  },
];

const lifeTabs = [
  {
    key: "记录",
    en: "RECORD",
    title: "让此刻，成为可被返回的现场。",
    copy: "记录城市、山野与普通生活。镜头不是答案，它只是提醒我认真观看，并保留那些无法复刻的瞬间。",
    image: "record_3.webp",
    note: "山川 / 城市 / 日常",
  },
  {
    key: "时政",
    en: "CURRENT AFFAIRS",
    title: "在时代议题中，保持清醒的判断。",
    copy: "关注公共政策、社会治理与现实议题。拒绝简单结论，在事实、立场和制度之间寻找更可靠的理解。",
    image: "politics_3.webp",
    note: "公共议题 / 制度观察",
  },
  {
    key: "札记",
    en: "NOTES",
    title: "以文字回应生活，也校准自己。",
    copy: "关于成长、故乡、选择与人的关系。写作并非为了给生活定论，而是让复杂的经验获得被看见的形状。",
    image: "photo_1.webp",
    note: "成长 / 故乡 / 思考",
  },
];

const politicsMedia = [
  {
    type: "video",
    src: "politics-video.mp4",
    poster: "politics-video-poster.webp",
    title: "时政影像",
    meta: "VIDEO · 03:11",
  },
  {
    type: "image",
    src: "politics-new-1.webp",
    title: "公共议题摘录",
    meta: "IMAGE · ARCHIVE 01",
  },
  {
    type: "image",
    src: "politics-new-2.webp",
    title: "时代现场",
    meta: "IMAGE · ARCHIVE 02",
  },
];

const themes = [
  { key: "dark", label: "暗色", short: "暗" },
  { key: "ios", label: "极简 iOS", short: "简" },
  { key: "business", label: "商务正式", short: "商" },
];

const notes = [
  {
    title: "三个多月",
    date: "2023.12.30",
    source: "华为备忘录提交",
    cover: "note-cover-1.webp",
    excerpt: "三个月，有点恍惚，有点迷离。时间很慢，慢在与孩子们相处的每一天；时间也很快，快在记忆还来不及收藏。",
    body: [
      "今天最后一次去往一幼，最后一次与老师相处半下午，最后一次为小朋友们服务。三个月，有点恍惚，有点迷离。",
      "三个月，时间很慢，慢在与孩子们相处的每一天。时间也很快，快在记忆还来不及收藏。选择支教，选择去祖国需要的地方，用脚步丈量祖国大地，用行动践行铮铮誓言。总体来说，做到了，但还可以做得更好，惭愧无愧党旗，无愧信仰。虽不能事事顺人心，但行动没拉下，使命没忘记，信仰没动摇。",
      "回想三个月前，凌晨五点坐上大巴，天未见明，坐上大巴驶往机场，看见灰蒙的公寓与大道，自己内心充满忐忑。下午，飞机到达和田前往策勒县，一路上有惊喜，也有不安。大漠中的高速公路、课本里的草方格与沙丘，点亮了希望的开始。",
      "三个月，在一幼工作的同时，我们也领略了大漠的无垠、昆仑的神界、胡杨的坚韧。这是一次田野调查，也是一场青春之约。",
      "三个月，在一幼从与孩子们的生疏到热情，从初上课堂的手足无措到最后的得心应手，从与主班老师的试探沟通到话唠聊天。这里充满希望、笑脸、乐趣，以及我们与孩子的相互成长。一幼的生活，是自己人生一场难得的修行。",
      "在幼儿眼里老师是万能的，他们每天干得最多的事可能就是告诉老师。在孩子眼里老师是万能的，没有解决不了的事。长大的我们少了孩子们眼中的依靠，渐渐明白老师不是万能的，父母也不是万能的，生活的路还得自己走，但并不妨碍我们在这条路上相遇、相识、相知乃至相心。三个月成长的不仅是孩子们，还有我们自己。",
      "三个月与孩子们相处是充满感动的，用爱托起孩子们的美好明天不是空话，而是实实在在的行动。她们会选择拥抱你、拉着你、跟着你，也会跑向你说“老师我喜欢你”“老师你辛苦了”“谢谢老师”。三个月，我在有爱中感动他们，他们也在用行动爱我。双向奔赴的爱才有意义，值得回忆。",
      "三个月的支教生活，相遇相逢太多人，一路上得到的帮助也很多。感谢带队老师的辛勤付出，感谢支教团兄弟姐妹们的通力合作，感谢一幼领导老师的关心与陪伴，感谢孩子们在我二十一岁的青春上留下绚丽多彩的一笔。",
      "要走了，要离开这片土地了。当初踏上这段征程，从未想过归途如此之快。再见，孩子们；再见，策勒；再见，二十一岁青春的自己；再见，这片土地。青山不改，绿水长流，我们江湖再见。",
    ],
  },
  {
    title: "托举",
    date: "2026.06.08",
    source: "华为备忘录提交",
    cover: "note-cover-2.webp",
    excerpt: "一代人有一代人的长征。父母最大的托举，不在于资源的丰厚，而是他们的健康与家境的优渥。",
    body: [
      "回想成长的二十年，回望父辈的四十年，回首长辈的六十年。爷爷奶奶的一代人在三面红旗的指导下，走在社会主义的大道上，他们朝气又热血。父母的一代在改革的春风下，摆脱了对土地的依赖，走向了城市和工业。二十岁的他们或许也在想自己的“托举”在哪里。他们在自身的努力下，带着时代的浪花一步步走到了现在。对于父母而言，他们已经实现了相对于其父辈的质变。时来天地皆同力，英雄远去不自由。",
      "一代人有一代人的长征。父母的他们已经在时代和自身局限性下完成了他们的跳跃。当接力棒落在我的手中时，我要的不是父母包办式的稳定性安排，也不是金钱运作下的稠密网。我选择了少有人走的路，不为他人眼中的优秀而活。这是我的自由，也是我的洒脱。",
      "相对我而言，父母祖父母最大的托举不在于资源的丰厚、家境的优渥，而是他们的健康。因为这是他们看到自己远方的本钱，更是体验生命的根本。",
      "一代人有一代人的使命。毛主席教导“自己动手，丰衣足食”。现在的自己，也不过是在有限的时空环境下，基于对自己发展所作出的、自己能承担责任的选择。很幸运，我有选择权。很幸运，我能再出发。很感激支持自己的父母、婆爷、至亲，以及走向社会四方的兄弟朋友。",
      "一个人最好的状态就是，不指望谁，不羡慕谁，不小看谁，不嘲笑谁，只盯着自己的目标默默努力，活成自己喜欢的样子。不要浪费时间活成别人的样子，别让外界的喧嚣盖过你心底真实的声音。勇敢且真诚，自由而热烈。",
    ],
  },
  {
    title: "重构",
    date: "2026.06.08",
    source: "华为备忘录提交",
    cover: "note-cover-3.webp",
    excerpt: "人生不要东张西望。直面是最好的解脱，爱与支持的人终会在你需要的时候喝彩。",
    body: [
      "与高中和大学两位挚友交流。朋友说到：人生不要东张西望。同时问到：你还记得高中期间的成绩吗？",
      "看到的瞬间我并非想起高中，而是初中的第一次月考成绩，班级二十九名，年级二百二十多。现在兄弟名列班级前五，谁又敢想当时的自己？回想高中，高考考前四月的模样，班级三十五名。那一段时间，看什么都是黑暗的，各科老师的嘱托安慰。我又怎敢想未来呢？",
      "成绩出来不理想，自己深感歉意，对自己、对老师、对父母的歉意。跟初中挚友谈论其成绩，复读便成了话题。最后的最后我们没有勇气。大一大二期间，一度跟高中好友决定退学再考，最后的最后我们没有勇气。",
      "大三努力耗费时间和精力勉强通过六级，在大学朋友中也有无需努力随便五百多的，有时候想想自己也很搞笑。八月如期而至，因为六级的通过，保研名额给到了自己，但我决定放弃保研。这一次有了勇气，但失败了。直面是最好的解脱。区区三万天，试试又能怎。",
      "我不是自己人生的看客，何必在乎人生经历是否耀眼夺目呢。看笑话的人终究在任何时候找到笑料，爱与支持的人终会在你所需要的时候喝彩。",
      "历史的指针再次来到这一刻，我又该如何抉择？毕业回到家中的三个月，心情是沉重的，氛围是微妙的，父母极力地维护着自己。自己对于失败，或者说自己的好高骛远，心高气傲，难以面对亲戚和朋友。",
      "但是，面对未来，你做了所有的应该，就会成功，就会过好这一生吗？我也很想要答案，但其实根本就没有答案。左右脑总是在打架，左脑告诉自己年轻人应该担起一份责任，要有闯进和干劲；右脑告诉自己安安稳稳，差不多就挺好。",
      "时代的风口也罢，时代的泥潭也罢，我们都是历史中的个体。如今的自己如此痛苦也罢，难受也罢，那时因为还有改变的希望。当一切永固，再多的努力也将在时代机器下压得粉碎。",
      "当命运的轮盘再次转起，希望自己还有勇气，勇敢抉择。既怕又何必想，既想又何必怕。现在的自己是当初最好的样子，未来的自己是现在最好的样子。人生需要一次勇气可嘉的抉择，需要一场酣畅淋漓的战斗。",
    ],
  },
  {
    title: "2024 过年感",
    date: "2024.02.20",
    source: "华为备忘录提交",
    cover: "note-cover-4.webp",
    excerpt: "年味的淡去并不直接导致人情刻薄。沟通与理解里，仍有亲人间难得且珍贵的温情与欢乐。",
    body: [
      "时至今日，高中毕业已经两年有余。从高考结束时的舒畅，到查成绩时的紧张，再到录取的释怀，再到学酒的畅饮。进入大学的新鲜感、大城市的冲击感、同学生活的差异感，这都使得大学生活与高中生活、换句话说与十八岁以前的所有生活环境，都存在巨大的差异。",
      "随着开始的陌生，让我更倾向于向高中初中同学表达情意。每学期结束，对回家充满期待与渴望。我们比较着放假日期、放假长短、收假日期，无非都是希望更了解彼此的状态，与之更好安排娱乐。随着一个假期接着一个假期的回来又离开，我们以及我们的生活都在发生不同的变化。虽然细微、微不足道，但也是深刻、审慎的。",
      "关于过年。高中毕业至今的三个年期，对于我个人来说变化是深刻的，影响是深远的。过年由从小时候的期待变成现在的忙碌与吵斥。高中毕业前的十八年由于处在学业状态下，父母乃至亲戚将某种生活压力消化于自身而不扩及自身。高考后，仿佛有种推力，社会在法治角度下承认了个人的完全民事行为能力。家庭家族也在某种社会认知下自然而然地认为自己成长了，因而各种矛盾琐事都无所不入。",
      "对于个别事是无力的无奈的，个人的努力终将不会掀起多大波浪，我只是尽自己所谓维护维系着处于质裂的平衡。年期，刻薄与情浓并存，家庭与家族对立而共生，断亲与择亲并驱。对于以上，基于朴素价值观念和家常人情，我相信我有自己的独立判断。",
      "年味已不再如往年浓味，这是物质发展的必然结果，也是工业化社会对传统农耕文化的冲击。但这都是物质的，而年味的淡之并不直接导致人情的刻薄。在沟通与理解中，每年也有姑姨爷奶外公间的温情与欢乐，这是难得的，也是弥之珍贵的。",
      "这种某种程度反应着零零后在过往的被动认识亲戚，正在转向自我辨别、双向选择亲戚的社会模式。在过往的经历中，我相信着亲而家乐，因亲而结，以亲而助。但不可否认的是，个人独立性下的家庭独立性，会让联系冷却乃至断裂。终将相信，留下的、眼前的，就是最美的风景，最正确的选择，最大的团圆。",
      "关于人生。年味的淡去又将是新一轮的奔波。不仅是父母，也包括你我。在工业化分工下，在社会大流趋势的催促下，我们也将在大学生活之余不断思考、不断选择、不断决定。某种程度来看，高考结束的我们并不意味着解脱，而是对比自由下社会原有制度文化枷锁的再分配。",
      "高考结束后，自己恍然间接受并乃至实现原有家庭认知下的成家立业。任何选择好像都有对赌的成分，我们处于并将一直处于不确定性的社会以及认知下。因而跟随大流也罢，坚定理想也好，选择所热爱的，努力向前就行。二零二四，为自己的理想再搏一次。",
      "关于朋友。毕业时间不长，但也会感受到身边的人在变也没变。这是双向的，但对于个人来说，变与不变每个人心里自有定数。我对于兄弟朋友唯一能做的就是真心、真挚、真诚。我的选择有价值，你的离去也有判断。终归，来日方长，未来可期。",
      "关于离家。又一次，列车从黑夜驶向黎明。不知何时起，比起快我宁愿选择直达，比起高铁开始选择火车。我不知道是自己的懂事还是那本就是自己的生活状态。我也在一次次前往大学、返回家的途中，似乎理解了游子的心绪，理解了理想与生活，理解了家国与忠孝。万家灯火并无个人栖身之处，高楼大厦并非个人所盼，车水马龙并非个人所需。我也在黑暗中，如列车一样寻找黎明。",
      "洋洋洒洒写了很多，胡思乱想，随便写点。祝愿我与我爱的所有人：龙行龘龘，生活䲜䲜，前途朤朤，事业燚燚。",
    ],
  },
];

function App() {
  const [activeEducation, setActiveEducation] = useState(2);
  const [educationPlaying, setEducationPlaying] = useState(false);
  const [activeEducationVideo, setActiveEducationVideo] = useState(0);
  const [middleSlide, setMiddleSlide] = useState(0);
  const [activeLife, setActiveLife] = useState(0);
  const [activeArticle, setActiveArticle] = useState(null);
  const [privacyShield, setPrivacyShield] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("site-theme") || "dark");
  const educationVideoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (educationVideoRef.current) {
      educationVideoRef.current.pause();
      educationVideoRef.current.currentTime = 0;
    }
    setEducationPlaying(false);
    setActiveEducationVideo(0);
    setMiddleSlide(0);
  }, [activeEducation]);

  useEffect(() => {
    if (!activeArticle) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveArticle(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeArticle]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  useEffect(() => {
    let shieldTimer;
    const showShield = () => {
      setPrivacyShield(true);
      window.clearTimeout(shieldTimer);
      shieldTimer = window.setTimeout(() => setPrivacyShield(false), 1400);
    };
    const protectShortcut = (event) => {
      const key = event.key.toLowerCase();
      const blockedSave = (event.ctrlKey || event.metaKey) && (key === "s" || key === "p");
      if (event.key === "PrintScreen" || blockedSave) {
        event.preventDefault();
        showShield();
      }
    };
    const blockMediaAction = (event) => {
      if (event.target.closest("img, video")) event.preventDefault();
    };

    document.addEventListener("contextmenu", blockMediaAction);
    document.addEventListener("dragstart", blockMediaAction);
    window.addEventListener("keydown", protectShortcut, true);
    window.addEventListener("keyup", protectShortcut, true);
    return () => {
      window.clearTimeout(shieldTimer);
      document.removeEventListener("contextmenu", blockMediaAction);
      document.removeEventListener("dragstart", blockMediaAction);
      window.removeEventListener("keydown", protectShortcut, true);
      window.removeEventListener("keyup", protectShortcut, true);
    };
  }, []);

  const playEducationVideo = async () => {
    if (!educationVideoRef.current) return;
    educationVideoRef.current.muted = false;
    educationVideoRef.current.volume = 1;
    await educationVideoRef.current.play();
    setEducationPlaying(true);
  };

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="返回首页">
          <span>H</span>
          <span className="brand-name">HUA ZHIMING</span>
        </a>
        <nav aria-label="主导航">
          <a href="#education">教育</a>
          <a href="#practice">实践</a>
          <a href="#life">生活</a>
        </nav>
        <div className="header-actions">
          <div className="theme-switcher" role="group" aria-label="网站风格">
            {themes.map((item) => (
              <button
                type="button"
                className={theme === item.key ? "active" : ""}
                aria-pressed={theme === item.key}
                aria-label={`切换为${item.label}风格`}
                title={item.label}
                onClick={() => setTheme(item.key)}
                key={item.key}
              >
                <span>{item.short}</span>
                <small>{item.label}</small>
              </button>
            ))}
          </div>
          <a className="nav-contact" href="#contact">
            联系我 <span>↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-visual">
          <span className="hero-glow hero-glow-one" />
          <span className="hero-glow hero-glow-two" />
          <span className="hero-arc hero-arc-one" />
          <span className="hero-arc hero-arc-two" />
          <span className="hero-beam" />
          <span className="hero-pulse hero-pulse-one" />
          <span className="hero-pulse hero-pulse-two" />
        </div>
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-content shell">
          <p className="eyebrow">LAW · PUBLIC AFFAIRS · HUMANITY</p>
          <h1>
            <span>在规则与现实之间</span>
            <br />
            <em>保持追问。</em>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>
                我与我，周旋久，<em>宁作我。</em>
              </p>
              <span>往前看 · 向上走 · 在路上</span>
            </div>
            <a className="circle-link" href="#education" aria-label="继续浏览">
              <span>向下</span>
              <b>↓</b>
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <span>SHAANXI / CHINA</span>
          <span>SCROLL TO EXPLORE · ↓</span>
        </div>
      </section>

      <section className="section education" id="education">
        <div className="shell">
          <SectionHeading
            number="01"
            label="EDUCATION"
            title="求学不是抵达，"
            accent="而是持续形成。"
          />
          <div className="education-layout">
            <div className="education-list">
              {education.map((item, index) => (
                <button
                  className={`education-row ${activeEducation === index ? "active" : ""}`}
                  key={item.school}
                  onClick={() => setActiveEducation(index)}
                  type="button"
                >
                  <span className="row-index">{item.index}</span>
                  <span className="row-period">{item.period}</span>
                  <span className="row-school">{item.school}</span>
                  <span className="row-stage">{item.stage}</span>
                  <span className="row-arrow">↗</span>
                </button>
              ))}
            </div>
            <div className="education-detail">
              <EducationMedia
                item={education[activeEducation]}
                isPlaying={educationPlaying}
                activeVideo={activeEducationVideo}
                middleSlide={middleSlide}
                onPlay={playEducationVideo}
                onEnded={() => setEducationPlaying(false)}
                onVideoChange={setActiveEducationVideo}
                onSlideChange={setMiddleSlide}
                videoRef={educationVideoRef}
              />
              <div className="education-copy">
                <span>{education[activeEducation].stage}</span>
                <p>{education[activeEducation].copy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section practice" id="practice">
        <div className="shell">
          <SectionHeading
            number="02"
            label="SOCIAL PRACTICE"
            title="走进现场，"
            accent="理解真实的社会。"
          />
          <div className="practice-grid">
            {practices.map((item) => (
              <article className="practice-card" key={item.title}>
                <div className="practice-image">
                  {item.images ? (
                    <PracticeCarousel images={item.images} title={item.title} />
                  ) : (
                    <img src={item.image} alt={item.title} draggable="false" />
                  )}
                  <span>{item.tag}</span>
                </div>
                <div className="practice-info">
                  <div className="practice-top">
                    <span>{item.no}</span>
                    <time>{item.period}</time>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section life" id="life">
        <div className="shell">
          <SectionHeading
            number="03"
            label="PERSONAL INDEX"
            title="生活之外，"
            accent="也是生活之内。"
          />
          <div className="life-tabs" role="tablist" aria-label="生活标签">
            {lifeTabs.map((tab, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeLife === index}
                className={activeLife === index ? "active" : ""}
                onClick={() => setActiveLife(index)}
                key={tab.key}
              >
                <span>0{index + 1}</span>
                <strong>{tab.key}</strong>
                <small>{tab.en}</small>
              </button>
            ))}
          </div>
          {activeLife === 0 && (
            <div className="life-feature life-record">
              <div className="life-media-frame">
                <video
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  playsInline
                  preload="metadata"
                  poster="record_3.webp"
                  src="life-record-silent.mp4"
                  muted
                />
                <span className="media-kicker">13 FRAMES · 31 SECONDS</span>
              </div>
              <div className="life-feature-copy">
                <span className="quote-mark">“</span>
                <p className="life-overline">RECORD / 2026 SPRING</p>
                <h3>{lifeTabs[0].title}</h3>
                <p>{lifeTabs[0].copy}</p>
                <div className="life-line" />
                <small>静音影像 · 推拉镜头 · 复合转场</small>
              </div>
            </div>
          )}

          {activeLife === 1 && (
            <div className="politics-gallery">
              <div className="gallery-heading">
                <div>
                  <p className="life-overline">CURRENT AFFAIRS / MEDIA ARCHIVE</p>
                  <h3>{lifeTabs[1].title}</h3>
                </div>
                <p>{lifeTabs[1].copy}</p>
              </div>
              <div className="politics-grid">
                {politicsMedia.map((item, index) => (
                  <figure className={index === 0 ? "politics-item featured" : "politics-item"} key={item.src}>
                    {item.type === "video" ? (
                      <video
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        playsInline
                        preload="metadata"
                        poster={item.poster}
                        src={item.src}
                      />
                    ) : (
                      <img src={item.src} alt={item.title} draggable="false" />
                    )}
                    <figcaption>
                      <span>{item.meta}</span>
                      <strong>{item.title}</strong>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {activeLife === 2 && (
            <div className="notes-panel">
              <div className="gallery-heading">
                <div>
                  <p className="life-overline">NOTES / TEXT ARCHIVE</p>
                  <h3>{lifeTabs[2].title}</h3>
                </div>
                <p>{lifeTabs[2].copy}</p>
              </div>
              <div className="notes-grid">
                {notes.map((note, index) => (
                  <article className="note-card" key={note.title}>
                    <button type="button" onClick={() => setActiveArticle(note)}>
                      <div className="note-cover">
                        <img src={note.cover} alt={`${note.title}原稿`} draggable="false" />
                        <span>0{index + 1}</span>
                      </div>
                      <div className="note-info">
                        <div className="note-meta">
                          <time>{note.date}</time>
                          <span>{note.source}</span>
                        </div>
                        <h4>{note.title}</h4>
                        <p>{note.excerpt}</p>
                        <strong>阅读全文 <span>↗</span></strong>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit orbit-one" />
        <div className="contact-orbit orbit-two" />
        <div className="shell contact-inner">
          <p className="eyebrow">LET'S CONNECT · 04</p>
          <h2>
            保持联系，
            <br />
            <em>让想法继续发生。</em>
          </h2>
          <div className="contact-actions">
            <a href="mailto:2290617364@qq.com">
              <span>主要邮箱</span>
              <strong>2290617364@qq.com</strong>
              <b>↗</b>
            </a>
            <a href="mailto:zh2149@hotmail.com">
              <span>备用邮箱</span>
              <strong>zh2149@hotmail.com</strong>
              <b>↗</b>
            </a>
          </div>
          <footer>
            <span>© 2026 HUA ZHIMING</span>
            <span>往前看，向上走，在路上</span>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </div>
      </section>

      {activeArticle && (
        <div className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title">
          <button
            className="article-backdrop"
            type="button"
            aria-label="关闭文章"
            onClick={() => setActiveArticle(null)}
          />
          <article className="article-reader">
            <button className="article-close" type="button" onClick={() => setActiveArticle(null)}>
              关闭 <span>×</span>
            </button>
            <header>
              <p>HUA ZHIMING / NOTES</p>
              <h2 id="article-title">{activeArticle.title}</h2>
              <div>
                <time>{activeArticle.date}</time>
                <span>{activeArticle.source}</span>
              </div>
            </header>
            <div className="article-body">
              {activeArticle.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <footer>
              <span>文字由原始图片提取并整理</span>
              <button type="button" onClick={() => setActiveArticle(null)}>返回札记</button>
            </footer>
          </article>
        </div>
      )}

      {privacyShield && (
        <div className="privacy-shield" role="alert">
          <strong>媒体内容已受保护</strong>
          <span>本页面不提供下载、保存或截图权限</span>
        </div>
      )}
    </main>
  );
}

function PracticeCarousel({ images, title }) {
  const loopImages = [...images, ...images];

  return (
    <div className="practice-carousel" aria-label={`${title}照片滚动展示`}>
      <div className="practice-carousel-track">
        {loopImages.map((image, index) => (
          <img
            src={image}
            alt={`${title}照片 ${(index % images.length) + 1}`}
            draggable="false"
            loading="lazy"
            key={`${image}-${index}`}
          />
        ))}
      </div>
      <span className="practice-count">{String(images.length).padStart(2, "0")} PHOTOS</span>
    </div>
  );
}

function EducationMedia({
  item,
  isPlaying,
  activeVideo,
  middleSlide,
  onPlay,
  onEnded,
  onVideoChange,
  onSlideChange,
  videoRef,
}) {
  if (item.mediaType === "gallery") {
    const previous = () =>
      onSlideChange((middleSlide - 1 + item.media.length) % item.media.length);
    const next = () => onSlideChange((middleSlide + 1) % item.media.length);

    return (
      <div className="education-media education-gallery">
        <img
          key={item.media[middleSlide]}
          src={item.media[middleSlide]}
          alt={`${item.school}回忆 ${middleSlide + 1}`}
          draggable="false"
        />
        <div className="gallery-controls">
          <button type="button" onClick={previous} aria-label="上一张照片">
            ←
          </button>
          <span>
            {String(middleSlide + 1).padStart(2, "0")} /{" "}
            {String(item.media.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={next} aria-label="下一张照片">
            →
          </button>
        </div>
      </div>
    );
  }

  const selectedVideo = item.videos[activeVideo];
  const changeVideo = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onEnded();
    onVideoChange(index);
  };

  return (
    <div className={`education-media education-video ${isPlaying ? "is-playing" : ""}`}>
      <video
        ref={videoRef}
        key={selectedVideo.video}
        src={selectedVideo.video}
        poster={selectedVideo.poster}
        playsInline
        controls={isPlaying}
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        preload="metadata"
        onEnded={onEnded}
      />
      {!isPlaying && (
        <button className="memory-play" type="button" onClick={onPlay}>
          <span>▶</span>
          <strong>播放回忆</strong>
          <small>点击开启声音</small>
        </button>
      )}
      <div className="video-switcher" aria-label={`${item.school}视频列表`}>
        {item.videos.map((video, index) => (
          <button
            type="button"
            className={activeVideo === index ? "active" : ""}
            onClick={() => changeVideo(index)}
            key={video.video}
          >
            <span className="video-switcher-index">0{index + 1}</span>
            <span className="video-switcher-copy">
              <strong>{video.label}</strong>
              {video.credit && <small>{video.credit}</small>}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ number, label, title, accent }) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{number}</span>
        <i />
        <span>{label}</span>
      </div>
      <h2>
        {title}
        <br />
        <em>{accent}</em>
      </h2>
    </div>
  );
}

export default App;
