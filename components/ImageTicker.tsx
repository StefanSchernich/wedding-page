"use client";
import React from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Ticker from "framer-motion-ticker";

export default function ImageTicker({ children }: { children: JSX.Element[] }) {
  const { scrollYProgress } = useScroll();
  const xShift = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const smoothedXShift = useSpring(xShift, { stiffness: 100, damping: 20 });
  return (
    <motion.div style={{ x: smoothedXShift }} className="">
      <Ticker duration={30}>{children}</Ticker>
    </motion.div>
  );
}
