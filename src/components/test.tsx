"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface GridItem {
  src: string;
  alt: string;
  text: string;
}

const items: GridItem[] = [
  { src: "/assets/dosa.png", alt: "Dosa", text: "A delicious dosa." },
  { src: "/assets/vada.svg", alt: "Vada", text: "Crispy and savory vada." },
  // Add more items as needed
];

const ModernGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative group flex justify-center items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image Container */}
          <motion.div
            className="relative w-[300px] h-[200px] bg-gray-100 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              className="object-cover"
            />
          </motion.div>

          {/* Popup Box */}
          <motion.div
            className="absolute top-full left-0 w-full h-[120px] bg-white border border-gray-300 rounded-lg shadow-md p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20px] transition-all duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-gray-800">{item.alt}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ModernGrid;
