"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const getMotionStyles = (scrollYProgress, start, end) => ({
  opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
  scale: useTransform(scrollYProgress, [start, end], [0.5, 1.5]),
  translateY: useTransform(scrollYProgress, [start, end], [120, 90]),
});

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Header text fade animation
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const subHeaderOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="h-[300vh] fixed inset-0 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden"
    >
      {/* Header Section */}
      <div className="relative h-screen flex flex-col items-center justify-center">
        <motion.h1
          style={{ opacity: headerOpacity }}
          className="text-6xl font-bold text-green-800 mb-4 text-center"
        >
          Experience South Indian Cuisine
        </motion.h1>
        <motion.p
          style={{ opacity: subHeaderOpacity }}
          className="text-2xl text-green-600 text-center max-w-2xl px-4"
        >
          Discover the authentic flavors of traditional South Indian dishes, 
          carefully crafted and served on a banana leaf
        </motion.p>
      </div>

      {/* Thali Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* For testing, let's use placeholder images first */}
        {/* Banana Leaf */}
        <motion.div
          className="absolute z-10"
          style={getMotionStyles(scrollYProgress, 0.3, 0.4)}
        >
          <div className="w-[600px] h-[300px] bg-green-200 rounded-lg flex items-center justify-center">
            Banana Leaf
          </div>
        </motion.div>

        {/* Dosa */}
        <motion.div
          className="absolute z-20"
          style={{
            ...getMotionStyles(scrollYProgress, 0.4, 0.5),
            transform: "translateX(150px)"
          }}
        >
          <div className="w-[250px] h-[390px] bg-yellow-200 rounded-lg flex items-center justify-center">
            Dosa
          </div>
        </motion.div>

        {/* Idli */}
        <motion.div
          className="absolute z-30"
          style={getMotionStyles(scrollYProgress, 0.45, 0.55)}
        >
          <div className="w-[350px] h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
            Idli
          </div>
        </motion.div>

        {/* Sambar */}
        <motion.div
          className="absolute z-40"
          style={getMotionStyles(scrollYProgress, 0.5, 0.6)}
        >
          <div className="w-[600px] h-[250px] bg-orange-200 rounded-lg flex items-center justify-center">
            Sambar
          </div>
        </motion.div>

        {/* Chutney */}
        <motion.div
          className="absolute z-50"
          style={getMotionStyles(scrollYProgress, 0.55, 0.65)}
        >
          <div className="w-[600px] h-[250px] bg-green-300 rounded-lg flex items-center justify-center">
            Chutney
          </div>
        </motion.div>

        {/* Vada */}
        <motion.div
          className="absolute z-60"
          style={{
            ...getMotionStyles(scrollYProgress, 0.6, 0.7),
            transform: "translateX(50px)"
          }}
        >
          <div className="w-[700px] h-[300px] bg-brown-200 rounded-lg flex items-center justify-center">
            Vada
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;