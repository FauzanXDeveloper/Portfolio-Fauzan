'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fabActions = [
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:fauzansahmad1@email.com'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      action: () => window.open('https://github.com/FauzanXDeveloper', '_blank'),
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      action: () => window.open('https://www.linkedin.com/in/ahmad-fauzan-abu-aini-955b7034b/', '_blank'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: MessageCircle,
      label: 'Contact',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Action buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-col space-y-3 mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {fabActions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    className={`w-12 h-12 ${action.color} text-white rounded-full shadow-lg flex items-center justify-center group relative`}
                    onClick={action.action}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <action.icon className="w-5 h-5" />
                    
                    {/* Tooltip */}
                    <span className="absolute right-14 bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center relative overflow-hidden"
            onClick={() => setIsExpanded(!isExpanded)}
            onDoubleClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ✕
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUp className="w-6 h-6" />
                </motion.div>
              )}
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.button>

          {/* Tooltip for main button */}
          <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Double-click to scroll to top
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
