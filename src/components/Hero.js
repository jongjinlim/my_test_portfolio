import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Frontend Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Static background instead of animated */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main content - minimal animations */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            안녕하세요! 👋
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            저는 <span className="text-white">김개발</span>입니다
          </h2>

          <div className="text-xl md:text-2xl text-blue-200 mb-8 h-8">
            <span className="typewriter">{texts[currentText]}</span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            사용자 경험을 중시하며, 창의적이고 혁신적인 웹 솔루션을 만들어가는 개발자입니다.
            최신 기술 트렌드를 따라가며 끊임없이 학습하고 성장하고 있습니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            프로젝트 보기
          </button>
          
          <button className="px-8 py-4 glass text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
            이력서 다운로드
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: FaGithub, href: "#", label: "GitHub" },
            { icon: FaLinkedin, href: "#", label: "LinkedIn" },
            { icon: FaTwitter, href: "#", label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-blue-300 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-white hover:text-blue-300 transition-colors duration-300"
          >
            <FaArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 