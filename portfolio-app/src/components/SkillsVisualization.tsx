'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette, LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    level: 95,
    category: 'Frontend',
    icon: Code,
    color: 'from-blue-400 to-blue-600',
    description: 'Building dynamic user interfaces with hooks and modern patterns'
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'Frontend',
    icon: Globe,
    color: 'from-gray-700 to-gray-900',
    description: 'Full-stack React framework with SSR and API routes'
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'Language',
    icon: Code,
    color: 'from-blue-500 to-blue-700',
    description: 'Type-safe JavaScript development with advanced typing'
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'Backend',
    icon: Server,
    color: 'from-green-400 to-green-600',
    description: 'Server-side JavaScript runtime and API development'
  },
  {
    name: 'Mysql/PhpMyAdmin',
    level: 80,
    category: 'Database',
    icon: Database,
    color: 'from-green-500 to-green-700',
    description: 'NoSQL database design and optimization'
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    category: 'Styling',
    icon: Palette,
    color: 'from-cyan-400 to-cyan-600',
    description: 'Utility-first CSS framework for rapid UI development'
  },
  {
    name: 'React Native',
    level: 75,
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-400 to-purple-600',
    description: 'Cross-platform mobile app development'
  },
  {
    name: 'Python',
    level: 82,
    category: 'Language',
    icon: Code,
    color: 'from-yellow-400 to-yellow-600',
    description: 'Backend development and data processing'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Styling', 'Mobile'];

const SkillsVisualization: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Category Filter */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </p>
                  </div>
                </div>
                <motion.span
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Description */}
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-300 text-sm"
                  >
                    {skill.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SkillsVisualization;
