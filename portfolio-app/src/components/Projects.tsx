'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
        longDescription: 'This comprehensive e-commerce platform includes features like product catalog, shopping cart, secure checkout, user profiles, order tracking, and a complete admin panel for inventory management.',
        image: '/api/placeholder/400/250',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
        liveLink: 'https://example-ecommerce.com',
        githubLink: 'https://github.com/username/ecommerce',
        category: 'Full Stack',
        featured: true,
        date: '2024',
        teamSize: 3,
        stars: 42,
        isPortfolio: false // Under development
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        longDescription: 'Built for teams to manage projects efficiently with features like kanban boards, real-time collaboration, file sharing, time tracking, and detailed analytics.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Material-UI', 'Express.js'],
        liveLink: 'https://example-taskmanager.com',
        githubLink: 'https://github.com/username/taskmanager',
        category: 'Web App',
        date: '2024',
        teamSize: 2,
        stars: 28,
        isPortfolio: false // Under development
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with modern animations, dark mode, and smooth scrolling effects.',
        longDescription: 'A showcase of my work featuring interactive animations, responsive design, performance optimization, and modern web technologies.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Next.js', 'TypeScript'],
        liveLink: 'https://example-portfolio.com',
        githubLink: 'https://github.com/username/portfolio',
        category: 'Frontend',
        featured: true,
        date: '2024',
        teamSize: 1,
        stars: 35,
        isPortfolio: true // This is a portfolio project
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
        longDescription: 'Comprehensive weather application featuring current conditions, 7-day forecasts, weather maps, historical data, and customizable dashboard widgets.',
        image: '/api/placeholder/400/250',
        technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA', 'Vuex'],
        liveLink: 'https://example-weather.com',
        githubLink: 'https://github.com/username/weather-app',
        category: 'Web App',
        date: '2023',
        teamSize: 1,
        stars: 19,
        isPortfolio: false // Under development
    },
    {
        id: 5,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
        longDescription: 'Professional dashboard for managing multiple social media accounts with analytics, post scheduling, engagement tracking, and automated report generation.',
        image: '/api/placeholder/400/250',
        technologies: ['Angular', 'D3.js', 'Express.js', 'PostgreSQL', 'Docker'],
        liveLink: 'https://example-social-dashboard.com',
        githubLink: 'https://github.com/username/social-dashboard',
        category: 'Full Stack',
        date: '2023',
        teamSize: 4,
        stars: 51,
        isPortfolio: false // Under development
    },
    {
        id: 6,
        title: 'Cryptocurrency Tracker',
        description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
        longDescription: 'Advanced crypto tracking platform with real-time price updates, portfolio management, price alerts, market analysis, and trading insights.',
        image: '/api/placeholder/400/250',
        technologies: ['React Native', 'Redux', 'CoinGecko API', 'Firebase', 'AsyncStorage'],
        liveLink: 'https://example-crypto-tracker.com',
        githubLink: 'https://github.com/username/crypto-tracker',
        category: 'Mobile',
        date: '2023',
        teamSize: 2,
        stars: 33,
        isPortfolio: false // Under development
    }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App', 'Mobile'];

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

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

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <motion.div
                className="max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid using ProjectCard component */}
                <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Additional Info Section */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            More Projects Coming Soon!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I'm constantly working on new and exciting projects. Stay tuned for updates!
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Work Together
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;