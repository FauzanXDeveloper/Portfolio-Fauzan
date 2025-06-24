'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Calendar, Users, Star, Construction } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  category: string;
  featured?: boolean;
  date?: string;
  teamSize?: number;
  stars?: number;
  isPortfolio?: boolean; // Add this to identify portfolio projects
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if this is a portfolio project or under development
  const isUnderDevelopment = !project.isPortfolio;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: isUnderDevelopment ? 0 : -10,
      scale: isUnderDevelopment ? 1 : 1.02,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  return (
    <motion.div
      className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 ${
        project.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
      } ${isUnderDevelopment ? 'cursor-not-allowed' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => !isUnderDevelopment && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Blur overlay for under development projects */}
      {isUnderDevelopment && (
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 z-20 pointer-events-none" />
      )}

      {/* Under Development Badge */}
      {isUnderDevelopment && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl border-2 border-white"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center space-x-2">
            <Construction className="w-5 h-5" />
            <span className="font-bold text-sm">Under Development</span>
          </div>
        </motion.div>
      )}

      {/* Featured Badge */}
      {project.featured && !isUnderDevelopment && (
        <motion.div
          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        >
          ⭐ Featured
        </motion.div>
      )}

      {/* Project Image/Preview */}
      <div className={`relative aspect-video overflow-hidden ${isUnderDevelopment ? 'filter blur-[2px]' : ''}`}>
        <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
          <motion.span 
            className="text-white font-bold text-xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.span>
        </div>
        
        {/* Overlay with actions - only for portfolio projects */}
        <AnimatePresence>
          {isHovered && !isUnderDevelopment && (
            <motion.div
              className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Content */}
      <div className={`p-6 ${isUnderDevelopment ? 'filter blur-[1px]' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isUnderDevelopment 
                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
            }`}>
              {isUnderDevelopment ? 'Coming Soon' : project.category}
            </span>
            {project.stars && !isUnderDevelopment && (
              <div className="flex items-center space-x-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{project.stars}</span>
              </div>
            )}
          </div>
        </div>
        
        <h3 className={`text-xl font-bold mb-3 transition-colors ${
          isUnderDevelopment 
            ? 'text-gray-500 dark:text-gray-400'
            : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'
        }`}>
          {project.title}
        </h3>
        
        <p className={`mb-4 line-clamp-2 ${
          isUnderDevelopment 
            ? 'text-gray-400 dark:text-gray-500'
            : 'text-gray-600 dark:text-gray-300'
        }`}>
          {isUnderDevelopment 
            ? 'This project is currently under development. Stay tuned for updates!' 
            : project.description
          }
        </p>

        {/* Metadata - only for portfolio projects */}
        {!isUnderDevelopment && (
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            {project.date && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.teamSize} {project.teamSize === 1 ? 'member' : 'members'}</span>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(isUnderDevelopment ? ['React', 'TypeScript', 'Node.js'] : project.technologies.slice(0, 4)).map((tech) => (
            <motion.span
              key={tech}
              className={`px-2 py-1 rounded text-xs font-medium ${
                isUnderDevelopment 
                  ? 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
              whileHover={!isUnderDevelopment ? { scale: 1.05, backgroundColor: "#e0e7ff" } : {}}
            >
              {tech}
            </motion.span>
          ))}
          {!isUnderDevelopment && project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
          {isUnderDevelopment && (
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded text-xs font-medium">
              +more
            </span>
          )}
        </div>

        {/* Expanded Content - only for portfolio projects */}
        <AnimatePresence>
          {isExpanded && !isUnderDevelopment && (
            <motion.div
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.longDescription}
                </p>
                
                {/* All Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-4">
          {isUnderDevelopment ? (
            <>
              <motion.div
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
              >
                <Construction className="w-4 h-4 mr-2" />
                Coming Soon
              </motion.div>
              <motion.div
                className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium"
              >
                <Code className="w-4 h-4" />
              </motion.div>
            </>
          ) : (
            <>
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code className="w-4 h-4" />
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;