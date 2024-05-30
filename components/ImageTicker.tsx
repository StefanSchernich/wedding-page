"use client";
import React, { useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Ticker from "framer-motion-ticker";

export default function ImageTicker({ children }: { children: JSX.Element[] }) {
  const { scrollYProgress } = useScroll();
  const xShift = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const smoothedXShift = useSpring(xShift, { stiffness: 100, damping: 20 });

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  return (
    <motion.div
      style={{ x: smoothedXShift, userSelect: "none" }}
      onHoverStart={() => setIsPlaying(false)}
      onHoverEnd={() => setIsPlaying(true)}
      onTouchStart={(e: React.TouchEvent) => {
        e.preventDefault();
        setIsPlaying(false);
      }}
      onTouchEnd={() => setIsPlaying(true)}
    >
      <Ticker duration={30} isPlaying={isPlaying}>
        {children}
      </Ticker>
    </motion.div>
  );
}
