'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
        longDescription: 'This comprehensive e-commerce platform includes features like product catalog, shopping cart, secure checkout, user profiles, order tracking, and a complete admin panel for inventory management.',
        image: '/api/placeholder/400/250',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind CSS'],
        liveLink: 'https://example-ecommerce.com',
        githubLink: 'https://github.com/username/ecommerce',
        category: 'Full Stack'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        longDescription: 'Built for teams to manage projects efficiently with features like kanban boards, real-time collaboration, file sharing, time tracking, and detailed analytics.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI'],
        liveLink: 'https://example-taskmanager.com',
        githubLink: 'https://github.com/username/taskmanager',
        category: 'Web App'
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with modern animations, dark mode, and smooth scrolling effects.',
        longDescription: 'A showcase of my work featuring interactive animations, responsive design, performance optimization, and modern web technologies.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
        liveLink: 'https://example-portfolio.com',
        githubLink: 'https://github.com/username/portfolio',
        category: 'Frontend'
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
        longDescription: 'Comprehensive weather application featuring current conditions, 7-day forecasts, weather maps, historical data, and customizable dashboard widgets.',
        image: '/api/placeholder/400/250',
        technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
        liveLink: 'https://example-weather.com',
        githubLink: 'https://github.com/username/weather-app',
        category: 'Web App'
    },
    {
        id: 5,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
        longDescription: 'Professional dashboard for managing multiple social media accounts with analytics, post scheduling, engagement tracking, and automated report generation.',
        image: '/api/placeholder/400/250',
        technologies: ['Angular', 'D3.js', 'Express.js', 'PostgreSQL'],
        liveLink: 'https://example-social-dashboard.com',
        githubLink: 'https://github.com/username/social-dashboard',
        category: 'Full Stack'
    },
    {
        id: 6,
        title: 'Cryptocurrency Tracker',
        description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
        longDescription: 'Advanced crypto tracking platform with real-time price updates, portfolio management, price alerts, market analysis, and trading insights.',
        image: '/api/placeholder/400/250',
        technologies: ['React Native', 'Redux', 'CoinGecko API', 'Firebase'],
        liveLink: 'https://example-crypto-tracker.com',
        githubLink: 'https://github.com/username/crypto-tracker',
        category: 'Mobile'
    }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App', 'Mobile'];

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section id="projects" className="py-20 bg-white">
            <motion.div
                className="max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for creating 
                        innovative digital solutions.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                                whileHover={{ y: -8 }}
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg">{project.title}</span>
                                    </div>
                                    
                                    {/* Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Eye className="w-5 h-5 text-white" />
                                        </motion.a>
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github className="w-5 h-5 text-white" />
                                        </motion.a>
                                    </motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
                                        >
                                            <Code className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;