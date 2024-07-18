"use client";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="flex justify-center font-azeret text-[82px] font-thin text-[#B13535]">
        photography
      </div>
      <div className="flex justify-center font-azeret mt-10">coming soon!</div>
    </motion.div>
  );
}
