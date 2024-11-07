import Image from "next/image";
import React from "react";
import hero from "@/public/hero3.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden w-full  px-8 mt-4">
      {/* Image and overlay container */}
      <div className="relative w-full h-full">
        <Image src={hero} alt="Hero image" className="w-full" />

      
      </div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col text-white items-center justify-center z-10">
        <h1 className="text-white text-[120px] font-bold font-orbitron">
          0N1 FORCE
        </h1>
        <p className="font-inconsolata text-[32px] mt-4 font-bold">
          New day, new team
        </p>
      </div>
    </div>
  );
}
