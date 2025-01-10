"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const WelcomeText = () => {
    const { scrollYProgress } = useScroll();
  
  // Fade out text completely by 30% scroll
  const mainTextOpacity = useTransform(scrollYProgress, [0, 0.50], [1, 0]);
  const subTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  

  
//   // Create smooth fade-out animations for different text elements
//   const mainTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const subTextOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none">
    <motion.div
      style={{ 
        opacity: mainTextOpacity,
        scale: textScale,
        y: textY
      }}
      className="flex flex-col items-center"
    >
     <Image
              src="/header.png"
              alt="logo"
              width={700}
              height={500}
              className="object-contain"
              style={{marginBottom:"0px"}}
            />
      <br></br>
    </motion.div>
  </div>
  );
};

export default WelcomeText;