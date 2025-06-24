'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 25,
                y: (e.clientY - window.innerHeight / 2) / 25,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    };

    const floatingAnimation = {
        y: [-8, 8, -8],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const socialLinks = [
        { 
            icon: Github, 
            href: "https://github.com", 
            label: "GitHub",
            color: "hover:bg-gray-800 hover:text-white"
        },
        { 
            icon: Linkedin, 
            href: "https://linkedin.com", 
            label: "LinkedIn",
            color: "hover:bg-blue-600 hover:text-white"
        },
        { 
            icon: Mail, 
            href: "mailto:your@email.com", 
            label: "Email",
            color: "hover:bg-red-500 hover:text-white"
        }
    ];

    return (
        <section 
            id="hero" 
            className="relative flex items-center justify-center h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
        >
            {/* Enhanced Particle Background */}
            <ParticleBackground />
            
            {/* Dynamic background orbs with mouse interaction */}
            <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        x: mousePosition.x,
                        y: mousePosition.y
                    }}
                    transition={{ 
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        x: { duration: 0.5 },
                        y: { duration: 0.5 }
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        x: -mousePosition.x * 0.5,
                        y: -mousePosition.y * 0.5
                    }}
                    transition={{ 
                        scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        x: { duration: 0.8 },
                        y: { duration: 0.8 }
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"
                    animate={{ 
                        scale: [1, 1.4, 1],
                        x: mousePosition.x * 0.3,
                        y: mousePosition.y * 0.3
                    }}
                    transition={{ 
                        scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                        x: { duration: 0.6 },
                        y: { duration: 0.6 }
                    }}
                />
                
                {/* Additional full-screen background elements */}
                <motion.div
                    className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-600/10 via-transparent to-transparent"
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        duration: 15, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent"
                    animate={{ 
                        opacity: [0.1, 0.25, 0.1],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ 
                        duration: 18, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Main content with parallax effect */}
            <motion.div
                className="relative z-10 text-center max-w-5xl mx-auto px-6 h-full flex flex-col justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ y, opacity, zIndex: 10 }}
            >
                {/* Badge */}
                <motion.div 
                    variants={itemVariants}
                    className="mb-6"
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium">Available for new opportunities</span>
                    </motion.div>
                </motion.div>

                {/* Main heading with enhanced typography */}
                <motion.div variants={itemVariants}>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Hi, I'm
                        </span>
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Ahmad Fauzan
                        </span>
                    </h1>
                </motion.div>
                
                {/* Enhanced subtitle */}
                <motion.div variants={itemVariants}>
                    <p className="text-2xl md:text-3xl lg:text-4xl mb-6 font-light">
                        <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Full Stack Developer & UI/UX Designer
                        </span>
                    </p>
                </motion.div>
                
                {/* Description with better spacing */}
                <motion.div variants={itemVariants}>
                    <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        I craft beautiful, interactive web experiences using cutting-edge technologies like 
                        <span className="text-purple-400 font-semibold"> React</span>, 
                        <span className="text-blue-400 font-semibold"> Next.js</span>, and 
                        <span className="text-green-400 font-semibold"> TypeScript</span>, 
                        enhanced with AI-powered solutions.
                    </p>
                </motion.div>

                {/* Enhanced CTA buttons */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <motion.a 
                        href="#projects" 
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </motion.a>
                    
                    <motion.a 
                        href="#contact" 
                        className="px-8 py-4 border-2 border-white/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold text-lg"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Enhanced social links */}
                <motion.div 
                    variants={itemVariants}
                    className="flex justify-center space-x-6"
                >
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${color}`}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + socialLinks.findIndex(link => link.label === label) * 0.1 }}
                        >
                            <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                            <motion.div
                                className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            >
                                {label}
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Enhanced scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                animate={floatingAnimation}
                style={{ opacity }}
            >
                <motion.a 
                    href="#about"
                    className="group flex flex-col items-center text-white/60 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <span className="text-sm mb-3 font-medium tracking-wider uppercase">Scroll Down</span>
                    <div className="relative">
                        <motion.div
                            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                            whileHover={{ borderColor: "rgba(255, 255, 255, 0.8)" }}
                        >
                            <motion.div
                                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.a>
            </motion.div>

            {/* Floating elements for visual interest - positioned for full screen */}
            <motion.div 
                className="absolute top-[10vh] right-[10vw] w-2 h-2 bg-purple-400 rounded-full opacity-60"
                animate={{ 
                    y: [-20, 20, -20],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-[15vh] left-[8vw] w-3 h-3 bg-pink-400 rounded-full opacity-40"
                animate={{ 
                    y: [20, -20, 20],
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
                className="absolute top-[30vh] left-[5vw] w-1 h-1 bg-cyan-400 rounded-full opacity-50"
                animate={{ 
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
                className="absolute top-[20vh] right-[20vw] w-2 h-2 bg-yellow-400 rounded-full opacity-40"
                animate={{ 
                    x: [15, -15, 15],
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
            <motion.div 
                className="absolute bottom-[25vh] right-[15vw] w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-50"
                animate={{ 
                    y: [25, -25, 25],
                    x: [-8, 8, -8],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
        </section>
    );
};

export default Hero;