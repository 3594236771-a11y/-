import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Send, Heart, BookOpen, PenTool, Plane,
  Trophy, Award, Star, Mail, ExternalLink,
  ChevronDown, MessageCircle, ArrowRight
} from 'lucide-react';
import heroImg from './assets/hero.png';
import digitalAvatarImg from './assets/digital-avatar.png';
import wechatQrImg from './assets/wechat-qr.jpg';
import wechatIconImg from './assets/wechat-icon.png';
import emailLogoImg from './assets/email-logo.png';
import xiaohongshuImg from './assets/xiaohongshu.jpg';
import yiliLogo from './assets/company-logos/伊利.png';
import niukelogo from './assets/company-logos/牛客网.png';
import iqiyiLogo from './assets/company-logos/爱奇艺.jpg';
import photo1 from './assets/photos/5bc7cdfd08bbb8f3ab165daa59716bcc.jpg';
import photo2 from './assets/photos/694e3877-a016-4620-9592-12096b9a4e2e.png';
import photo3 from './assets/photos/9965b509-89c8-4c43-88b7-1df08c04809f.png';
import photo4 from './assets/photos/d322538272b76d492b6050d80f5bee9f.jpg';
import photo5 from './assets/photos/IMG_0182.JPG';
import photo6 from './assets/photos/IMG_0982.JPG';
import photo7 from './assets/photos/IMG_1348.JPG';
import photo8 from './assets/photos/IMG_4580.JPG';
import photo9 from './assets/photos/IMG_5075.JPG';
import photo10 from './assets/photos/IMG_7214.JPG';

/* ====== 滚动动画 Hook ====== */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) ref.current.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ============================================
   HEADER - 固定导航栏
   ============================================ */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '首页', href: '#home' },
    { label: '关于我', href: '#about' },
    { label: '项目经历', href: '#projects' },
    { label: '联系我', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <nav className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          <a href="#home" className="text-xl font-extrabold gradient-text tracking-tight">欢迎来到我的世界</a>
          {/* PC 导航链接 */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="relative text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors duration-300 group 
                         after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2.5px] 
                         after:bg-gradient-to-r after:from-pink-400 after:to-blue-400 after:rounded-full 
                         after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </a>
            ))}
          </div>
          {/* 移动端汉堡按钮 */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/70 backdrop-blur-sm border border-pink-100/50 
                       hover:bg-pink-50 transition-all duration-300 shadow-sm">
            {isMobileMenuOpen ? <X size={22} className="text-gray-600" /> : <Menu size={22} className="text-gray-600" />}
          </button>
        </div>
        {/* 移动端菜单下拉 */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 animate-fade-up origin-top">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl shadow-pink-100/30 p-4 space-y-1 border border-gray-100/80">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3.5 px-4 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 font-medium text-sm transition-all duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ============================================
   HERO - 首屏展示区
   ============================================ */
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[70px] relative overflow-hidden"
             style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 35%, #fafbff 70%, #f7f9ff 100%)' }}>
      
      {/* 背景装饰球体 */}
      <div className="absolute top-16 left-[-10%] w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] rounded-full opacity-[0.14]"
           style={{ background: 'radial-gradient(circle, #FFD1DC 0%, transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-20 right-[-8%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full opacity-[0.12]"
           style={{ background: 'radial-gradient(circle, #B3E5FC 0%, transparent 65%)', filter: 'blur(70px)' }} />
      <div className="absolute top-[30%] right-[20%] w-[280px] h-[280px] rounded-full opacity-[0.05]"
           style={{ background: 'radial-gradient(circle, #e8c5e0 0%, transparent 65%)', filter: 'blur(50px)' }} />

      <div className="w-full max-w-[900px] mx-auto text-center px-6 relative z-10">
        
        {/* 头像 */}
        <div className="mb-10 fade-up visible">
          <div className="relative inline-block group">
            {/* 粉蓝渐变发光光晕 - 平时低调，hover 增强 */}
            <div className="absolute inset-[-8px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                 style={{
                   background: 'radial-gradient(circle, rgba(255,209,220,0.8) 0%, rgba(179,229,250,0.6) 50%, transparent 70%)',
                   filter: 'blur(15px)',
                   transform: 'scale(1.1)',
                 }} />
            {/* 多层柔和外阴影 + 粉蓝渐变细边框 */}
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full
                            shadow-[0_8px_30px_rgba(255,182,193,0.4),0_4px_12px_rgba(179,229,250,0.3),inset_0_2px_6px_rgba(255,255,255,0.8)]
                            ring-[2px] ring-transparent
                            bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200
                            p-[3px]
                            group-hover:shadow-[0_12px_40px_rgba(255,182,193,0.5),0_6px_16px_rgba(179,229,250,0.4),inset_0_2px_8px_rgba(255,255,255,0.9)]
                            transition-all duration-300">
              <img src={heroImg} alt="朱昊姝"
                className="w-full h-full rounded-full object-cover object-top ring-[3px] ring-white/90" />
            </div>
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-9 fade-up visible leading-tight tracking-tight">
          <span className="gradient-text block">你好，我是</span>
          <span className="gradient-text block mt-2">朱昊姝</span>
        </h1>

        {/* 副标题 */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-5 fade-up visible font-semibold tracking-wide leading-relaxed">
          数字经济研究生 &nbsp;·&nbsp; 产品经理 &nbsp;·&nbsp; 探索大模型应用
        </p>

        <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-md mx-auto fade-up visible leading-relaxed">
          致力于用数据分析与产品思维解决实际问题 ✨
        </p>

        {/* 和我聊天按钮 */}
        <div className="mb-10 fade-up visible">
          <a href="#ai-chat"
            className="inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#FFD1DC] via-[#E8D5F0] to-[#B3E5FC]
                       text-gray-700 font-bold rounded-full shadow-lg shadow-pink-200/30 text-base tracking-wide
                       hover:shadow-xl hover:shadow-pink-200/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            <MessageCircle size={20} />
            和我聊天
          </a>
        </div>

        {/* CTA 按钮 */}
        <div className="flex flex-wrap justify-center gap-5 fade-up visible">
          <a href="#projects"
            className="group inline-flex items-center gap-3 px-11 py-5 bg-gradient-to-r from-[#FFE4EC] via-[#FFD1DC] to-[#D4F1FA]
                       text-gray-700 font-bold rounded-full shadow-lg shadow-pink-200/40 text-base tracking-wide
                       hover:shadow-xl hover:shadow-pink-200/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            查看项目
            <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-3 px-11 py-5 border-2 border-dashed border-[#FFD1DC]/70 
                       text-gray-600 font-bold rounded-full hover:border-solid hover:bg-pink-50/60 
                       hover:shadow-md hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-base tracking-wide">
            联系我
          </a>
        </div>

        {/* Scroll 提示 */}
        <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2.5">
          <span className="text-xs text-gray-300 tracking-[0.25em] uppercase font-medium">Scroll Down</span>
          <ChevronDown size={24} className="text-pink-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ============================================
   照片数据 & 瀑布流相册
   ============================================ */
const realPhotos = [
  { id: 1, src: photo1, alt: '生活照 1', height: 'aspect-[4/5]' },
  { id: 2, src: photo2, alt: '生活照 2', height: 'aspect-square' },
  { id: 3, src: photo3, alt: '生活照 3', height: 'aspect-[3/4]' },
  { id: 4, src: photo4, alt: '生活照 4', height: 'aspect-[5/6]' },
  { id: 5, src: photo5, alt: '生活照 5', height: 'aspect-square' },
  { id: 6, src: photo6, alt: '生活照 6', height: 'aspect-[4/5]' },
  { id: 7, src: photo7, alt: '生活照 7', height: 'aspect-[3/4]' },
  { id: 8, src: photo8, alt: '生活照 8', height: 'aspect-[5/6]' },
  { id: 9, src: photo9, alt: '生活照 9', height: 'aspect-square' },
  { id: 10, src: photo10, alt: '生活照 10', height: 'aspect-[4/5]' },
];

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={src} alt="预览" className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
    </div>
  );
}

function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  return (
    <div className="mt-16 lg:mt-20">
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-3 gradient-text section-title">
        日常相册 📸
      </h3>
      <div className="masonry-grid mt-10">
        {realPhotos.map((photo) => (
          <div key={photo.id}
               className={`masonry-item ${photo.height} cursor-pointer hover-scale`}
               onClick={() => { setLightboxSrc(photo.src); setLightboxOpen(true); }}>
            <img src={photo.src} alt={photo.alt}
              className="w-full rounded-2xl overflow-hidden shadow-md border border-white/70 object-cover min-h-[165px] lg:min-h-[190px]" />
          </div>
        ))}
      </div>
      {lightboxOpen && <Lightbox src={lightboxSrc} onClose={() => setLightboxOpen(false)} />}
    </div>
  );
}

/* ============================================
   AI 数字人聊天
   ============================================ */
const API_KEY = 'sk-180601a69ffe40bfa40f24d5155a7ad7';
const API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
const MODEL_NAME = 'qwen3.5-flash';

async function callQwenAPI(userMessage: string): Promise<string> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      messages: [
        { role: 'system', content: '你是昊姝的数字分身，一个友好、知识渊博的 AI 助手。你可以回答关于产品经理、实习经历、兴趣爱好等问题。请用亲切、口语化的方式回答。' },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 512,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`API 请求失败: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

function AIAvatarChat() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: '你好！我是昊姝的数字分身🤖。想了解她的产品实习经历，还是聊聊大模型应用？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    // 添加用户消息
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // 添加 AI 思考中的提示
    setMessages(prev => [...prev, { role: 'ai', content: '思考中...' }]);

    try {
      const aiResponse = await callQwenAPI(userMessage);
      // 移除思考中提示，添加真实回复
      setMessages(prev => {
        const newMessages = prev.filter((_, i) => i !== prev.length - 1);
        return [...newMessages, { role: 'ai', content: aiResponse }];
      });
    } catch (error) {
      // 移除思考中提示，添加错误消息
      setMessages(prev => {
        const newMessages = prev.filter((_, i) => i !== prev.length - 1);
        return [...newMessages, { role: 'ai', content: '抱歉，出了点小问题，请稍后再试～ 😅' }];
      });
      console.error('API 调用失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-chat" className="mt-16 lg:mt-20 flex justify-center">
      <div className="w-full max-w-[720px]">
        <h3 className="text-2xl lg:text-3xl font-bold text-center mb-3 gradient-text section-title flex items-center justify-center gap-3">
          <MessageCircle size={27} /> 和我聊天
        </h3>

        <div className="mt-10 bg-white rounded-3xl shadow-xl card-shadow overflow-hidden border border-gray-100/80">
          {/* 头像栏 */}
          <div className="flex items-center gap-5 px-8 py-6 bg-gradient-to-r from-pink-50/80 to-blue-50/60 border-b border-gray-100/80">
            <div className="relative shrink-0">
              <img src={digitalAvatarImg} alt="AI 数字人" 
                className="w-14 h-14 rounded-full object-cover shadow-lg ring-4 ring-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-[3px] border-white shadow-sm" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">AI 昊姝</p>
              <p className="text-xs text-emerald-500 font-medium flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse shadow-sm" />
                在线 · 通常秒回
              </p>
            </div>
          </div>

          {/* 消息区 */}
          <div className="space-y-4 min-h-[240px] max-h-[380px] overflow-y-auto p-8">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[82%] px-6 py-4 ${msg.role === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'} 
                              text-sm leading-relaxed text-gray-700`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* 输入框 */}
          <div className="px-8 pb-7">
            <div className="flex items-center gap-3 bg-gray-50/90 rounded-2xl p-2 border border-gray-100 
                           focus-within:border-pink-200 focus-within:ring-2 focus-within:ring-pink-100/50 focus-within:bg-white 
                           transition-all duration-300">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                     placeholder="向我的 AI 分身提问..."
                     className="flex-1 bg-transparent outline-none px-5 py-4 text-sm text-gray-700 placeholder-gray-400" />
              <button onClick={handleSend}
                      disabled={!inputValue.trim() || isLoading}
                      className={`p-3.5 rounded-xl transition-all duration-300 ${
                        inputValue.trim() && !isLoading
                          ? 'bg-gradient-to-br from-[#FFD1DC] to-[#B3E5FC] hover:scale-105 active:scale-95 shadow-md'
                          : 'bg-gray-200 cursor-not-allowed'
                      }`}>
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={19} className={`${inputValue.trim() ? 'text-gray-700' : 'text-gray-400'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   SKILLS TAGS - 技能标签（居中）
   ============================================ */
const skills = [
  '英语 CET6', 'Excel', 'SQL', 'Python',
  'Axure / 墨刀', '秀米', 'PS', '剪映',
  'ACCA 六门', 'Coze', 'n8n', '大模型应用',
];

function SkillsTags() {
  return (
    <div className="mt-14 lg:mt-16 flex justify-center">
      <div className="w-full max-w-[900px]">
        <h3 className="text-xl lg:text-2xl font-bold mb-6 text-gray-700">💡 技能清单</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <span key={i}
                  className="px-6 py-3 bg-gradient-to-br from-[#FFF0F5] to-[#F0F9FF] text-gray-700 text-sm font-semibold 
                             rounded-full border border-pink-100/80 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 
                             transition-all duration-300 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   HONORS LIST - 荣誉清单（居中）
   ============================================ */
const honors = [
  { icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50/80', title: '沃尔玛未来零售创想大赛 中国区总冠军 🏆' },
  { icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50/80', title: '"尖烽时刻" 全国大学生商业模拟大赛 全国季军 🥉' },
  { icon: Award, color: 'text-blue-500', bg: 'bg-blue-50/80', title: '百威校园挑战赛 全国十强' },
  { icon: Award, color: 'text-blue-500', bg: 'bg-blue-50/80', title: '"工行杯" 金融创新大赛 广东省优秀奖' },
  { icon: Star, color: 'text-rose-400', bg: 'bg-rose-50/80', title: '校级三等奖学金' },
  { icon: Star, color: 'text-rose-400', bg: 'bg-rose-50/80', title: '绿芽服务队 优秀干事' },
  { icon: Star, color: 'text-rose-400', bg: 'bg-rose-50/80', title: '最美学长' },
];

function HonorsList() {
  return (
    <div className="mt-14 lg:mt-16 flex justify-center">
      <div className="w-full max-w-[900px]">
        <h3 className="text-xl lg:text-2xl font-bold mb-6 text-gray-700">🏅 荣誉清单</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {honors.map((honor, i) => (
            <div key={i}
                 className={`flex items-center gap-4 p-5 ${honor.bg} rounded-2xl hover:translate-x-2 hover:shadow-md 
                            transition-all duration-300 cursor-default border border-transparent hover:border-gray-100`}>
              <div className={`shrink-0 w-10 h-10 rounded-xl ${honor.bg} flex items-center justify-center`}>
                <honor.icon size={20} className={honor.color} />
              </div>
              <span className="text-gray-700 font-semibold text-sm leading-snug">{honor.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   BRAND WALL - 品牌墙（居中）
   ============================================ */
const brands = [
  { name: 'TCL', role: '校园大使', emoji: '📺' },
  { name: '联想 Lenovo', role: '校园大使', emoji: '💻' },
  { name: '招商银行 CMB', role: '校园大使', emoji: '🏦' },
  { name: '无印良品 MUJI', role: '服装导购员', emoji: '🛍️' },
];

function BrandWall() {
  return (
    <div className="mt-14 lg:mt-16 flex justify-center">
      <div className="w-full max-w-[800px]">
        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-700">🤝 兼职身份</h3>
        <p className="text-xs text-gray-400 mb-6 tracking-wide text-center">合作品牌 · Trusted by</p>
        <div className="flex flex-wrap justify-center gap-5">
          {brands.map((brand, i) => (
            <div key={i}
                 className="group relative px-8 py-5 bg-white rounded-2xl card-shadow border border-gray-100/80
                            hover:-translate-y-1.5 transition-all duration-350 cursor-default overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{brand.emoji}</span>
                <span className="font-bold text-gray-700 whitespace-nowrap text-sm">{brand.name}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 
                              transition-transform duration-300 ease-out bg-gradient-to-r from-[#FFF0F5] to-[#F0F9FF] py-3 border-t border-gray-100/50">
                <span className="text-sm text-gray-600 font-semibold">{brand.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   BENTO BOX - 广泛爱好（居中）
   ============================================ */
const hobbies = [
  {
    icon: Heart, title: '做志愿', subtitle: '动物保护协会志愿者、蓝信封通信志愿者',
    color: 'from-rose-50 to-pink-50', borderColor: 'border-rose-100/60', iconColor: 'text-rose-400', iconBg: 'bg-rose-100/70'
  },
  {
    icon: BookOpen, title: '阅读', subtitle: '最爱中国乡土文学、韩女文学',
    color: 'from-sky-50 to-blue-50', borderColor: 'border-sky-100/60', iconColor: 'text-sky-500', iconBg: 'bg-sky-100/70',
    books: ['简爱', '基督山伯爵', '昆虫记', '沧浪之水', '命运', '明亮的夜晚', 
             '一句顶一万句', '雾都孤儿', '认知觉醒', '被讨厌的勇气', 
             '相信', '蛤蟆先生去看心理医生', '置身事内']
  },
  { 
    icon: PenTool, title: '写作', subtitle: '用文字记录生活与思考',
    color: 'from-violet-50 to-purple-50', borderColor: 'border-violet-100/60', iconColor: 'text-violet-500', iconBg: 'bg-violet-100/70'
  },
  { 
    icon: Plane, title: '旅行', subtitle: '探索世界的美好',
    color: 'from-cyan-50 to-teal-50', borderColor: 'border-cyan-100/60', iconColor: 'text-cyan-500', iconBg: 'bg-cyan-100/70'
  },
];

function HobbyBentoBox() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-16 lg:mt-20 flex justify-center">
      <div className="w-full max-w-[700px]">
        <h3 className="text-xl lg:text-2xl font-bold mb-7 text-gray-700">✨ 广泛爱好</h3>
        <div className="grid grid-cols-2 gap-5 justify-items-center">
          {hobbies.map((hobby, i) => (
            <div key={i}
                 onMouseEnter={() => setHoveredIndex(i)}
                 onMouseLeave={() => setHoveredIndex(null)}
                 className={`relative p-7 bg-gradient-to-br ${hobby.color} rounded-2xl border ${hobby.borderColor}
                           hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300
                           min-h-[165px] flex flex-col justify-between w-full cursor-default`}>

              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-11 h-11 ${hobby.iconBg} rounded-xl flex items-center justify-center`}>
                    <hobby.icon size={23} className={hobby.iconColor} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">{hobby.title}</h4>
                </div>
                <p className="text-xs text-gray-500 ml-14 leading-relaxed">{hobby.subtitle}</p>

                {/* 书单 - 嵌入在阅读框内，hover 显示在 subtitle 下方 */}
                {hobby.books && hoveredIndex === i && (
                  <div className="mt-4 animate-fade-up">
                    <p className="text-xs font-semibold text-pink-400 mb-2.5 tracking-wide">📚 推荐书单</p>
                    <div className="flex flex-wrap gap-1.5">
                      {hobby.books.map((book, j) => (
                        <span key={j}
                              className="px-2.5 py-1.5 bg-gradient-to-br from-[#FFF0F5] to-[#F0F9FF] text-xs text-gray-600 font-medium rounded-full shadow-sm
                                        border border-pink-100/60">
                          📖 {book}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!hobby.books && (
                <div className="self-end mt-4 opacity-15 text-2xl select-none">
                  {i === 0 ? '❤️' : i === 2 ? '✒️' : '✈️'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================
   SECTION 2: 关于我
   ============================================ */
function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAFBFD]" ref={sectionRef}>
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* 标题 - 居中 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 gradient-text section-title fade-up">关于我</h2>
        
        {/* 简介卡片 - 居中 */}
        <div className="bg-white rounded-3xl p-10 lg:p-12 card-shadow border border-gray-100/60 mb-16 lg:mb-20 fade-up max-w-3xl mx-auto">
          <div className="flex items-start gap-5">
            <span className="text-4xl mt-0.5 shrink-0">👋</span>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              暨南大学国际商务本科，东北财经大学硕士在读，探索 AI 大模型应用。
              日常爱好阅读写作、拼豆、旅行、追剧，
              动保协会成员、蓝信封通信志愿者！
            </p>
          </div>
        </div>

        {/* 所有子组件 - 全部自带居中容器 */}
        <AIAvatarChat />
        <PhotoGallery />
        <SkillsTags />
        <HonorsList />
        <BrandWall />
        <HobbyBentoBox />
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3: 经历与项目（3列居中）
   ============================================ */
const internships = [
  { company: '伊利集团', position: '小程序产品经理', logo: yiliLogo, desc: '负责小程序功能规划与迭代优化' },
  { company: '牛客 Nowcoder', position: 'AI 产品经理', logo: niukelogo, desc: '探索 AI 在招聘场景的产品落地' },
  { company: '爱奇艺 iQIYI', position: '会员产品经理', logo: iqiyiLogo, desc: '会员体系与权益产品设计' },
];

const projects = [
  { name: '每周 AI 行业资讯智能体「每周 AI 情报官」', link: 'https://www.coze.cn/space/7585128977082892303/bot/7617790665498050579', desc: '基于 Coze 平台搭建的 AI 智能体，自动追踪并推送每周 AI 行业热点资讯，帮助用户高效获取行业动态' },
  { name: '个人网页 - Cursor 搭建智能化网站', desc: '使用 AI 编程工具 Cursor 从零搭建的个人展示网站，实现响应式布局与精美交互体验' },
];

function ProjectsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white" ref={sectionRef}>
      <div className="w-full max-w-[1150px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 gradient-text section-title fade-up">经历与项目</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-16 lg:mt-20">
          
          {/* 实习经历 */}
          <div className="bg-white rounded-3xl p-8 card-shadow border border-gray-100/80 hover:scale-[1.02] transition-all duration-300 fade-up">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center text-2xl">
                💼
              </div>
              <h3 className="text-lg font-bold text-gray-800">实习经历</h3>
            </div>
            <div className="space-y-3.5">
              {internships.map((item, i) => (
                <div key={i} className="group p-4.5 rounded-2xl bg-gray-50/80 hover:bg-gradient-to-br hover:from-pink-50/80 hover:to-blue-50/60 
                              transition-all duration-300 border border-transparent hover:border-pink-100/50">
                  <div className="flex items-start gap-3.5">
                    <img src={item.logo} alt={item.company} 
                      className="w-12 h-12 rounded-xl object-contain bg-white shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300 shrink-0" />
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm">{item.company}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.position}</p>
                      <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 项目经历 */}
          <div className="bg-white rounded-3xl p-8 card-shadow border border-gray-100/80 hover:scale-[1.02] transition-all duration-300 fade-up">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-lg font-bold text-gray-800">项目经历</h3>
            </div>
            <div className="space-y-5">
              {projects.map((project, i) => (
                <div key={i} className="p-5.5 rounded-2xl bg-gradient-to-br from-pink-50/70 via-white to-blue-50/70 
                                      border border-pink-100/50 hover:shadow-md transition-all duration-300 group">
                  <p className="font-bold text-gray-800 text-sm mb-2 leading-relaxed">{project.name}</p>
                  <p className="text-xs text-gray-500 mb-3.5 leading-relaxed">{project.desc}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-600 font-medium group/link">
                      访问项目 <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* 自媒体运营 */}
          <div className="bg-white rounded-3xl p-8 card-shadow border border-gray-100/80 hover:scale-[1.02] transition-all duration-300 fade-up">
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center text-2xl">
                📱
              </div>
              <h3 className="text-lg font-bold text-gray-800">自媒体运营</h3>
            </div>
            <p className="text-xs text-gray-500 mb-5 font-medium">小红书自媒体博主</p>
            <div className="rounded-2xl border border-red-100/60 overflow-hidden hover-scale relative">
              <img src={xiaohongshuImg} alt="小红书主页" className="w-full object-cover" style={{ maxHeight: '400px' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 4: 联系方式（居中）
   ============================================ */
function ContactSection() {
  const sectionRef = useScrollAnimation();
  const [showWechatQR, setShowWechatQR] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAFBFD]" ref={sectionRef}>
      <div className="w-full max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 gradient-text section-title fade-up">联系我</h2>
        <p className="text-gray-500 mb-14 lg:mb-16 text-lg fade-up">对我的经历或项目感兴趣？欢迎探讨交流！</p>
        
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-7 fade-up">
          
          {/* 邮箱 */}
          <a href="mailto:zhsshu@yeah.net"
             className="group flex items-center gap-5 p-8 bg-white rounded-3xl card-shadow border border-gray-100/80 
                        hover:scale-[1.03] transition-all duration-300 flex-1 text-left no-underline">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center 
                          group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-sm overflow-hidden">
              <img src={emailLogoImg} alt="邮箱" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">邮箱 Email</p>
              <p className="text-sm text-gray-400 mt-1 group-hover:text-pink-400 transition-colors">zhsshu@yeah.net</p>
            </div>
          </a>
          
          {/* 微信 */}
          <div className="relative group flex-1"
               onMouseEnter={() => setShowWechatQR(true)}
               onMouseLeave={() => setShowWechatQR(false)}>
            <div className="flex items-center gap-5 p-8 bg-white rounded-3xl card-shadow border border-gray-100/80 
                          hover:scale-[1.03] transition-all duration-300 cursor-pointer h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center 
                            group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-sm overflow-hidden">
                <img src={wechatIconImg} alt="微信" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">微信 WeChat</p>
                <p className="text-sm text-gray-400 mt-1 group-hover:text-emerald-500 transition-colors">扫码添加好友</p>
              </div>
            </div>
            
            {showWechatQR && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 p-8 bg-white rounded-3xl shadow-2xl
                              animate-fade-up border border-gray-100 z-20 min-w-[320px]">
                <img src={wechatQrImg} alt="微信二维码" className="w-72 h-72 object-contain rounded-2xl" />
                <p className="text-base text-gray-500 mt-4 font-medium text-center">打开微信扫一扫</p>
              </div>
            )}
          </div>
          
          {/* 小红书 */}
          <a href="https://xhslink.com/m/5TGKlx2ZYDj" target="_blank" rel="noopener noreferrer"
             className="group flex items-center gap-5 p-8 bg-white rounded-3xl card-shadow border border-gray-100/80 
                        hover:scale-[1.03] transition-all duration-300 flex-1 text-left no-underline">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center 
                          group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0 shadow-sm overflow-hidden">
              <svg viewBox="0 0 1024 1024" width="28" height="28" fill="#FE2C55">
                <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m245.6 699.4c-13.2 31-37.4 53.2-69.8 63.8-32.4 10.6-67.6 8.4-99.4-6.2L512 712l-76.4 45.2c-21.6 10.2-44.8 15.6-68.2 15.6-10.8 0-21.6-1.4-32.2-4.2-33.2-8.8-59-29.8-73.2-58.8-14.2-29-15.4-62.2-3.4-92.2l34.4-85.6L192 430V208c0-61.8 50.2-112 112-112h128l80 48 80-48h128c61.8 0 112 50.2 112 112v222l-101.2 103-34.4 85.6c-4.6 11.6-11.4 22-19.8 30.8z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-lg">小红书 Xiaohongshu</p>
              <p className="text-sm text-gray-400 mt-1 group-hover:text-red-400 transition-colors">访问主页 →</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-200/80">
          <div className="flex items-center justify-center gap-2.5 text-sm text-gray-400">
            <span>Made with</span> ❤️ <span>by 朱昊姝 · 2024</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

/* ============================================
   APP - 主入口
   ============================================ */
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
