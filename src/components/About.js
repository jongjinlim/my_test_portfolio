import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'AWS', level: 65 },
  ];

  const experiences = [
    {
      year: '2023 - 현재',
      title: '시니어 프론트엔드 개발자',
      company: '테크 스타트업',
      description: 'React와 TypeScript를 활용한 대규모 웹 애플리케이션 개발 및 팀 리드 역할'
    },
    {
      year: '2021 - 2023',
      title: '프론트엔드 개발자',
      company: 'IT 서비스 회사',
      description: '사용자 경험을 중시한 반응형 웹 애플리케이션 개발'
    },
    {
      year: '2019 - 2021',
      title: '주니어 개발자',
      company: '소프트웨어 개발사',
      description: '다양한 웹 프로젝트 참여 및 기술 스택 확장'
    }
  ];

  const values = [
    {
      icon: FaCode,
      title: '깔끔한 코드',
      description: '가독성과 유지보수성을 중시하는 깔끔한 코드 작성을 지향합니다.'
    },
    {
      icon: FaPalette,
      title: '창의적 디자인',
      description: '사용자 경험을 최우선으로 하는 직관적이고 아름다운 인터페이스를 만듭니다.'
    },
    {
      icon: FaLightbulb,
      title: '혁신적 사고',
      description: '새로운 기술과 방법론을 적극적으로 도입하여 더 나은 솔루션을 찾습니다.'
    },
    {
      icon: FaUsers,
      title: '팀워크',
      description: '협업을 통해 더 큰 가치를 만들어내는 것을 믿습니다.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            끊임없이 학습하고 성장하는 개발자로서, 사용자 중심의 혁신적인 솔루션을 만들어갑니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">개인 정보</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">이름:</span>
                  <span className="text-white font-medium">김개발</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">나이:</span>
                  <span className="text-white font-medium">28세</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">위치:</span>
                  <span className="text-white font-medium">서울, 대한민국</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">경력:</span>
                  <span className="text-white font-medium">5년</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">이메일:</span>
                  <span className="text-white font-medium">dev@example.com</span>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">주요 기술</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">경력</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <div className="text-blue-300 text-sm font-medium">{exp.year}</div>
                    <h4 className="text-white font-semibold text-lg">{exp.title}</h4>
                    <div className="text-purple-300 text-sm mb-2">{exp.company}</div>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">가치관</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  >
                    <value.icon className="text-3xl text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 