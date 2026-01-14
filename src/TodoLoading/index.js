import React from 'react';
import { motion } from 'framer-motion';
import './TodoLoading.css';

function TodoLoading() {
  const symbolVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  const auraVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.9, 0.6],
      filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"]
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="Ancestral-Forge-Fullscreen">
      <motion.div 
        className="Stone-Altar"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <motion.div 
          className="Altar-Aura"
          variants={auraVariants}
          initial="hidden"
          animate="animate"
        />
        <svg viewBox="0 0 100 100" className="Creation-Symbol">
          <motion.path
            d="M 50 10 L 90 50 L 50 90 L 10 50 Z M 50 20 L 80 50 L 50 80 L 20 50 Z"
            fill="none"
            stroke="#b8860b" /* Dorado oscuro */
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={symbolVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </motion.div>
      <motion.h2 
        className="Altar-Text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Tejiendo el Hilo del Destino...
      </motion.h2>
    </div>
  );
}

export { TodoLoading };