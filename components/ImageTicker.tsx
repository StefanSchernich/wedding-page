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
      // onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
    >
      <Ticker duration={30} isPlaying={isPlaying}>
        {/* Mapping over children and creating clones is necessary to add the event listener modifications to the Image components to prevent the context menu from popping up when touching&pressing the Image children
        otherwise the context menu will break the Ticker pausing/running when touching the images */}
        {/* {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onTouchStart: (e: React.TouchEvent) => {
              e.preventDefault();
              setIsPlaying(false);
            },
            onTouchEnd: (e: React.TouchEvent) => {
              setIsPlaying(true);
            },
            onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
          }),
        )} */}
        {children}
      </Ticker>
    </motion.div>
  );
}
