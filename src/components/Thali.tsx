"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/assets/banana_leaf.svg", alt: "Banana Leaf" },
  { src: "/assets/dosa_vector.svg", alt: "Dosa" },
  { src: "/assets/idli.svg", alt: "Idli" },
  { src: "/assets/sambar.svg", alt: "Sambar" },
  { src: "/assets/chutney.svg", alt: "Chutney" },
  { src: "/assets/vada.svg", alt: "Vada" },
];

const Thali = () => {
  return (
    <div className="thali-container">
      {/* Welcome Text Area */}
      <motion.div
        className="welcome-text"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <h1>Welcome to the South Indian Platter</h1>
      </motion.div>

      {/* Images fade-in with smooth scroll effect */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="thali-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.3, // Staggered fade-in
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={250} // Larger size for better aesthetics
            height={250}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Thali;
