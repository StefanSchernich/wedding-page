"use client";
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  icon: React.ReactNode;
  text1: string;
  text2: string;
};

export default function Card({ icon, text1, text2 }: CardProps) {
  const variants = {
    offscreen: {
      opacity: 0,
      y: 100,
      scale: 0.1,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "linear",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="flex w-full min-w-[335px] max-w-[390px] items-center gap-5 rounded-lg border border-strongblush bg-neutralblush p-5 text-xl text-strongblush"
    >
      {icon}
      <div className="flex flex-col gap-1">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </motion.div>
  );
}
