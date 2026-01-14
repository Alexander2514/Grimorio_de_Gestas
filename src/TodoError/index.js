import React from 'react';
import { motion } from 'framer-motion';
import './TodoError.css';

function TodoError() {
  const parchmentVariants = {
    hidden: { scale: 0.7, opacity: 0, rotate: -10 },
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 120, damping: 8 } }
  };

  const runeGlowVariants = {
    animate: {
      boxShadow: [
        '0 0 10px rgba(255,0,0,0.5)', 
        '0 0 25px rgba(255,0,0,0.8)', 
        '0 0 10px rgba(255,0,0,0.5)'
      ],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      className="Error-scroll-container"
      variants={parchmentVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="Error-scroll-top"></div>
      <div className="Error-scroll-body">
        <motion.div 
          className="Error-rune"
          variants={runeGlowVariants}
        ></motion.div>
        <p className="Error-text-main">¡UNA MALDICIÓN!</p>
        <p className="Error-text-sub">El ritual ha fallado. Las tareas no se revelan.</p>
        <div className="Error-crack-top"></div>
        <div className="Error-crack-bottom"></div>
      </div>
      <div className="Error-scroll-bottom"></div>
    </motion.div>
  );
}

export { TodoError };