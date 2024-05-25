"use client";
import React from "react";
import Ticker from "framer-motion-ticker";

import Image from "next/image";

import wadirum from "@/images/wadirum.jpg";
import bamboo_train from "@/images/bamboo_train.jpg";
import petra from "@/images/petra.jpg";
import singapore from "@/images/singapore.jpg";
import battambang from "@/images/battambang.jpg";

export default function ImageTicker() {
  return (
    <Ticker duration={40}>
      <Image
        priority
        src={wadirum}
        className="max-h-[400px] max-w-[600px] rounded-lg object-cover lg:mx-4"
        alt="Veronika und Stefan beim Sonnenuntergang in Wadi Rum, Jordanien"
      />
      <Image
        src={bamboo_train}
        alt="Veronika und Stefan auf dem Bamboo Train in Battambang, Kambodscha"
        className="hidden max-h-[400px] max-w-[600px] rounded-lg object-cover lg:mx-4 lg:block"
      />
      <Image
        src={petra}
        className="hidden max-h-[400px] max-w-[600px] rounded-lg object-cover lg:mx-4 lg:block"
        alt="Veronika und Stefan in Petra, Jordanien"
      />
      <Image
        src={singapore}
        className="hidden max-h-[400px] max-w-[600px] rounded-lg object-cover lg:mx-4 lg:block"
        alt="Veronika und Stefan in Singapur"
      />
      <Image
        src={battambang}
        className="hidden max-h-[400px] max-w-[600px] rounded-lg object-cover lg:mx-4 lg:block"
        alt="Veronika und Stefan in Battambang"
      />
    </Ticker>
  );
}
