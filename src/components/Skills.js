import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
  FaAws, FaDocker, FaGitAlt, FaFigma, FaDatabase
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
        { name: "Python", icon: FaPython, color: "#3776AB", level: 75 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 70 },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 65 },
        { name: "Database", icon: FaDatabase, color: "#FFD700", level: 75 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "AWS", icon: FaAws, color: "#FF9900", level: 70 },
        { name: "Docker", icon: FaDocker, color: "#2496ED", level: 65 },
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 85 },
        { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 75 },
      ]
    }
  ];

  const softSkills = [
    { name: "문제 해결", level: 90 },
    { name: "팀워크", level: 85 },
    { name: "커뮤니케이션", level: 80 },
    { name: "리더십", level: 75 },
    { name: "적응력", level: 90 },
    { name: "창의성", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 혁신적인 솔루션을 만들어갑니다.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon 
                            size={20} 
                            style={{ color: skill.color }}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-300 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{skill.level}%</span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{skill.name}</h4>
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
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              현재 학습 중인 기술
            </h3>
            <p className="text-gray-300 mb-6">
              새로운 기술을 배우는 것을 좋아합니다. 현재 다음 기술들을 학습하고 있습니다:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'GraphQL', 'Machine Learning', 'Blockchain', 'Flutter'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 