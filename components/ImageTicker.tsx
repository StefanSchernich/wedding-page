"use client";
import React from "react";
import Ticker from "framer-motion-ticker";

export default function ImageTicker({ children }: { children: JSX.Element[] }) {
  return <Ticker duration={40}>{children}</Ticker>;
}
