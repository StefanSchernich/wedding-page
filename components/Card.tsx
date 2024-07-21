"use client";
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  itemNum: string;
  icon1: React.ReactNode;
  text1a: string;
  text1b: string;
  icon2: React.ReactNode;
  text2a: string;
  text2b: string;
  text2c: string;
};

export default function Card({
  itemNum,
  icon1,
  text1a,
  text1b,
  icon2,
  text2a,
  text2b,
  text2c,
}: CardProps) {
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
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="relative flex w-full min-w-[335px] max-w-[390px] flex-col rounded-lg border border-strongblush bg-neutralblush p-5 text-xl text-strongblush"
    >
      <div className="font-playfair absolute right-3 text-[128px] font-bold opacity-20">
        {itemNum}
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-5">
          {icon1}
          <div className="flex flex-col gap-1">
            <p>{text1a}</p>
            <p>{text1b}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {icon2}
          <div className="flex flex-col gap-1">
            <p className="font-bold">{text2a}</p>
            <p>
              {text2b} <br /> {text2c}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
