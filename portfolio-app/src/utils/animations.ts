// Framer Motion animation variants

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', duration = 0.6) => {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return {
    hidden: {
      opacity: 0,
      ...directionOffset[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut'
      }
    }
  };
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left', duration = 0.6, delay = 0) => {
  const directionOffset = {
    left: { x: '-100%' },
    right: { x: '100%' },
    up: { y: '-100%' },
    down: { y: '100%' }
  };

  return {
    hidden: {
      ...directionOffset[direction],
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.3) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

export const staggerItem = (duration = 0.6) => {
  return {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut'
      }
    }
  };
};