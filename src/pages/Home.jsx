import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Flame,
} from 'lucide-react';
import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Memoized Components
const StatusBadge = memo(() => (
  <div
    className="inline-block animate-float lg:mx-0"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Flame className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Rendilo divertente, goditi ciò che crei!
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Full Stack
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Developer
        </span>
      </span>
    </h1>
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-gray-200 ${
              text === 'Contact'
                ? 'group-hover:translate-x-1'
                : 'group-hover:rotate-45'
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ['Appassionato di Sviluppo Web', 'Appassionato di AI'];
const SOCIAL_LINKS = [
  { icon: Github, link: 'https://github.com/konnychiwa' },
  { icon: Linkedin, link: 'https://www.linkedin.com/in/pamoda-angelo-konara/' },
  { icon: Instagram, link: 'https://www.instagram.com/angelo.konara/' },
];

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Handle screen resize to determine when to show Spline
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div
      className="min-h-screen bg-[#030014] overflow-hidden relative"
      id="Home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen md:justify-center lg:justify-between gap-6 sm:gap-12 lg:gap-20">
          {/* Left Column */}
          <div
            className="w-full md:w-3/4 lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-2 lg:order-1 lg:mt-0 flex justify-center md:justify-start"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="space-y-4 sm:space-y-6 max-w-lg">
              <MainTitle />

              {/* Typing Effect */}
              <div
                className="h-8 flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <span className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                  {text}
                </span>
                <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
              </div>

              {/* Description */}
              <div
                className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <StatusBadge />
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row gap-3 w-full justify-start"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                <CTAButton
                  href="#Portfolio"
                  text="Progetti"
                  icon={ExternalLink}
                />
                <CTAButton href="#Contact" text="Contattami" icon={Mail} />
              </div>

              {/* Social Links */}
              <div
                className="hidden sm:flex gap-4 justify-start"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render Spline component */}
      {isLargeScreen && (
        <div className="md:flex absolute inset-0 w-full h-full items-center justify-center">
          <Spline
            scene="https://prod.spline.design/eQT6J9da17iRaFP6/scene.splinecode"
            className="w-full h-full max-w-none"
          />
        </div>
      )}
    </div>
  );
};

export default memo(Home);
