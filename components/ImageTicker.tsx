"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Ticker from "framer-motion-ticker";

import wadirum from "@/images/wadirum.jpg";
import bamboo_train from "@/images/bamboo_train.jpg";
import petra from "@/images/petra.jpg";
import singapore from "@/images/singapore.jpg";
import battambang from "@/images/battambang.jpg";
import ijen from "@/images/ijen.jpg";

const images = [
  <Image
    key="battambang"
    sizes="(max-width: 600px) 100vw, 600px"
    src={battambang}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan in Battambang"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
  <Image
    key="bamboo_train"
    sizes="(max-width: 600px) 100vw, 600px"
    src={bamboo_train}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan auf dem Bamboo Train in Battambang, Kambodscha"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
  <Image
    key="petra"
    sizes="(max-width: 600px) 100vw, 600px"
    src={petra}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan in Petra, Jordanien"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
  <Image
    sizes="(max-width: 600px) 100vw, 600px"
    key="wadirum"
    src={wadirum}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan beim Sonnenuntergang in Wadi Rum, Jordanien"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
  <Image
    key="singapore"
    sizes="(max-width: 600px) 100vw, 600px"
    src={singapore}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan in Singapur"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
  <Image
    key="ijen"
    sizes="(max-width: 600px) 100vw, 600px"
    src={ijen}
    className="mx-2 max-h-[200px] max-w-[300px] rounded-lg object-cover md:max-h-[400px] md:max-w-[600px] lg:mx-4"
    alt="Veronika und Stefan auf dem Ijen, Indonesien"
    onContextMenu={(e: React.MouseEvent) => e.preventDefault()}
  />,
];

export default function ImageTicker() {
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
        {images}
      </Ticker>
    </motion.div>
  );
}
