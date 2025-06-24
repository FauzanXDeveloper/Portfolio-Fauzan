'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.div
                className="relative z-10 text-center max-w-4xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Hi, I'm Your Name
                    </h1>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <p className="text-xl md:text-2xl mb-4 text-gray-300">
                        Full Stack Developer & UI/UX Designer
                    </p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                    <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
                        I create beautiful, interactive web experiences with modern technologies like React, Next.js, and TypeScript.
                    </p>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <motion.a 
                        href="#projects" 
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-semibold"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.a>
                    <motion.a 
                        href="#contact" 
                        className="px-8 py-4 border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="flex justify-center space-x-6"
                >
                    {[
                        { icon: Github, href: "https://github.com", label: "GitHub" },
                        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:your@email.com", label: "Email" }
                    ].map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={floatingAnimation}
            >
                <motion.a 
                    href="#about"
                    className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;