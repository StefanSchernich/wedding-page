"use client";
import React from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Ticker from "framer-motion-ticker";

// the window resize hook is required to properly hide/show the ticker on smaller/larger screens. If it is just "hidden" via CSS on smaller screens, it is still rendered due to its implementation by the creator and will cause an RangeError.
// The hook moves the screen-size check to the client and thus ensures that it is only rendered on larger screens
import useWindowSize from "@/customHooks/useWindowSize";

export default function ImageTicker({ children }: { children: JSX.Element[] }) {
  const { scrollYProgress } = useScroll();
  const xShift = useTransform(scrollYProgress, [0, 1], [-250, 250]);
  const smoothedXShift = useSpring(xShift, { stiffness: 100, damping: 20 });
  const { width } = useWindowSize();
  const isLargeScreen = width && width >= 1024;
  return (
    isLargeScreen && (
      <motion.div style={{ x: smoothedXShift }}>
        <Ticker duration={30}>{children}</Ticker>
      </motion.div>
    )
  );
}
