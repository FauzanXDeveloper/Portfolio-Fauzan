'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, staggerItem } from '../utils/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  stagger?: boolean;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  stagger = false,
  viewport = { once: true, amount: 0.3 }
}) => {
  const variants = stagger ? staggerContainer() : fadeIn(direction, duration);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {stagger
        ? React.Children.map(children, (child, index) => (
            <motion.div key={index} variants={staggerItem(duration)}>
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
};

export default AnimatedSection;