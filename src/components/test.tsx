"use client";
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, world!</h1>
    </motion.div>
    <h1>test</h1>
    </div>
  );
};

export default MyComponent;
