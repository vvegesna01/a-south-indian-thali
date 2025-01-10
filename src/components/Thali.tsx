"use client";
import { transcode } from "buffer";
import { motion, useScroll, useTransform } from "framer-motion";
import { transform } from "next/dist/build/swc/generated-native";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Utility function to generate motion styles
const getMotionStyles = (
  scrollYProgress: any,
  start: number,
  end: number
) => ({
  opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
  scale: useTransform(scrollYProgress, [start, end], [0.5, 1.2]),
  translateY: useTransform(scrollYProgress, [start, end], [120, 50]),
  translateX: useTransform(scrollYProgress, [start, end], ["10vh", "-15vw"]),
});


const Thali = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll after unmount
    };
  }, []);

  
 // Fade out text completely by 30% scroll
 const mainTextOpacity = useTransform(scrollYProgress, [0.90, 0.80], [1, 0]);
 const subTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
 const textScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
 const textY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-green-50 to-green-100"
    >
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-1 sm:p-4">
        <div ref={containerRef} className="relative h-[100vh]">
          <div className="absolute inset-0 flex flex-wrap justify-center gap-8 sm:gap-4">
            {/* Banana Leaf */}
            <motion.div
              className="motion-image absolute z-10"
              style={{
                ...getMotionStyles(scrollYProgress, 0.20, 0.30),
                transform: "translateX(-55%)",
              }}
            >
              <Image
                src="/assets/banana_leaf.png"
                alt="Banana Leaf"
                width={700}
                height={600}
                className="object-contain sm:w-[300px] sm:h-[200px]"
              />
            </motion.div>

            {/* Dosa */}
            <motion.div
              className="motion-image absolute z-30"
              style={getMotionStyles(scrollYProgress, 0.50, 0.70)}
              whileHover={{
                rotate: 15,
                transition: { duration: 0.8 },
              }}
            >
              <Image
                src="/assets/dosa.png"
                alt="Dosa"
                width={450}
                height={500}
                className="object-contain sm:w-[200px] sm:h-[150px]"
                style={{ transform: "translateX(30%) translateY(20%)" }}
              />
            </motion.div>
            
            {/* Idli */}
            <motion.div
              className="motion-image absolute z-30"
              style={getMotionStyles(scrollYProgress, 0.50, 0.70)}
              whileHover={{rotate:"5deg"}}
            >
              <Image
                src="/assets/idli.png"
                alt="Idli"
                width={350}
                height={400}
                className="object-contain sm:w-[200px] sm:h-[150px]"
                style={{transform:"translateX(5%) translateY(-5%)"}}
              />
            </motion.div>

            {/* Sambar */}
            <motion.div
              className="motion-image absolute z-40"
              style={getMotionStyles(scrollYProgress, 0.50, 0.70)}
              whileHover={{rotate:"5deg"}}
            >
              <Image
                src="/assets/sambar.png"
                alt="Sambar"
                width={120}
                height={250}
                className="object-contain sm:w-[300px] sm:h-[200px]"
                style={{transform:"translateX(250%) translateY(20%)"}}
              />
            </motion.div>

            {/* Chutney */}
            <motion.div
              className="motion-image absolute z-50"
              style={getMotionStyles(scrollYProgress, 0.55, 0.75)}
              whileHover={{rotate:"-7deg"}}
            >
              <Image
                src="/assets/chutney.png"
                alt="Chutney"
                width={120}
                height={250}
                className="object-contain sm:w-[300px] sm:h-[200px]"
                style={{transform:"translateX(150%) translateY(45%)"}}
              />
            </motion.div>

            {/* Vada */}
            <motion.div
              className="motion-image absolute z-60"
              style={{
                ...getMotionStyles(scrollYProgress, 0.55, 0.75),
                transform: "translateX(40%) translateY(55%)",
                
              }}
              whileHover={{ rotate: 5}}
      
            >
              <Image
                src="/assets/vada.png"
                alt="Vada"
                width={100}
                height={400}
                className="object-contain sm:w-[250px] sm:h-[200px]"
                style={{transform:"translateX(55%) translateY(45%)"}}
              />
            </motion.div>
          </div>
        </div>

      <motion.div
      style={{ 
        opacity: mainTextOpacity,
        scale: textScale,
        y: textY
      }}
      className="flex flex-col items-center"
    >
        <Image
              src="/assets/south_indian_breakfast.png"
              alt="south_indian_breakfast_text"
              width={700}
              height={500}
              className="object-contain"
              style={{marginBottom:"0px", transform:"translateX(60vh) translateY(45vh)"}}
            />
             </motion.div>
      </div>
     
    </motion.div>
  );
};

export default Thali;
