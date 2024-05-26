import React from "react";

type CardProps = {
  icon: React.ReactNode;
  text1: string;
  text2: string;
};

export default function Card({ icon, text1, text2 }: CardProps) {
  return (
    <div className="flex w-full min-w-[335px] max-w-[390px] items-center gap-5 rounded-lg border border-strongblush bg-neutralblush p-5 text-xl text-strongblush">
      {icon}
      <div className="flex flex-col gap-1">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
