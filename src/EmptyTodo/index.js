import React from 'react';
import { motion } from 'framer-motion';
import './EmptyTodo.css';

function EmptyTodo() {
  return (
    <div className="Shield-Wrapper">
      <motion.div 
        className="Medieval-Shield"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
       
        <div className="Shield-Crown">👑</div>
        
        <div className="Shield-Body">
          <motion.div 
            className="Shield-Symbol"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚔️
          </motion.div>
          <h2 className="Shield-Title">Sin Gestas</h2>
          <div className="Shield-Divider"></div>
          <p className="Shield-Text">
            "Vuestro libro de honor está en blanco. <br/> Es hora de empuñar la pluma."
          </p>
        </div>
        
        
        <div className="Rivet top-left"></div>
        <div className="Rivet top-right"></div>
      </motion.div>
    </div>
  );
}

export { EmptyTodo };