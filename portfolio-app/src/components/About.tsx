'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import SkillsVisualization from './SkillsVisualization';

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };    const itemVariants = {
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

    const highlights = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and efficient code using AI"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating beautiful and intuitive user interfaces using AI"
        },
        {
            icon: Rocket,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency using AI"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working effectively in team environments"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I'm a passionate full-stack developer with a love for creating digital experiences 
                        that are not only functional but also beautiful and user-friendly using AI.
                    </p>
                </motion.div>                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                I started my journey in web development 2 years ago, driven by curiosity and 
                                a passion for technology. What began as a hobby quickly evolved into a career 
                                as I discovered the endless possibilities of creating digital solutions using AI.
                            </p>
                            <p>
                                Today, I specialize in modern web technologies like React, Next.js, and TypeScript, 
                                focusing on building applications that provide exceptional user experiences while 
                                maintaining clean, efficient code.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to 
                                open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Bring</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <highlight.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div><motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Technical Skills</h3>
                    <SkillsVisualization />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;