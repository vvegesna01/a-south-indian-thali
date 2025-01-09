"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  { src: "/assets/banana_leaf.svg", alt: "Banana Leaf" },
  { src: "/assets/dosa_vector.svg", alt: "Dosa" },
  { src: "/assets/idli.svg", alt: "Idli" },
  { src: "/assets/sambar.svg", alt: "Sambar" },
  { src: "/assets/chutney.svg", alt: "Chutney" },
  { src: "/assets/vada.svg", alt: "Vada" },
];

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <motion.h1 
        className="text-4xl font-bold text-center text-green-800 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        South Indian Platter
      </motion.h1>

      <div 
        ref={containerRef} 
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {images.map((image, index) => {
            const opacity = useTransform(
              scrollYProgress,
              [index * 0.15, (index + 1) * 0.15],
              [0, 1]
            );

            const scale = useTransform(
              scrollYProgress,
              [index * 0.15, (index + 1) * 0.15],
              [0.8, 1]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, scale }}
                className="absolute"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;