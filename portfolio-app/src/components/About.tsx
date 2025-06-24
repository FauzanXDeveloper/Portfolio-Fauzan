'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';

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

    const skills = [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "Node.js", level: 75, color: "bg-green-500" },
    ];

    const highlights = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and efficient code"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating beautiful and intuitive user interfaces"
        },
        {
            icon: Rocket,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working effectively in team environments"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        I'm a passionate full-stack developer with a love for creating digital experiences 
                        that are not only functional but also beautiful and user-friendly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                I started my journey in web development 3 years ago, driven by curiosity and 
                                a passion for technology. What began as a hobby quickly evolved into a career 
                                as I discovered the endless possibilities of creating digital solutions.
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-gray-600">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full ${skill.color}`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What I Bring</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <highlight.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                                <p className="text-gray-600">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;