import React from "react";

type CardProps = {
  icon: React.ReactNode;
  text1: string;
  text2: string;
};

export default function Card({ icon, text1, text2 }: CardProps) {
  return (
    <div className="border-strongblush text-strongblush bg-neutralblush flex items-center gap-5 rounded-lg border p-5 text-xl">
      {icon}
      <div className="flex flex-col gap-1">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
