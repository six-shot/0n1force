import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import down from "@/public/ChevronUp_24px.svg";
export default function FloatingNav() {
  return (
    <div className="flex justify-between items-center  h-[67px] px-8">
      <div className="flex gap-2 items-center">
        <Image width={20} height={20} src={logo} alt="logo" />
        <h4 className="text-base font-orbitron text-[#FFF] font-bold">
          0N1 FORCE
        </h4>
      </div>
      <nav className="flex items-center gap-6 text-base font-inconsolata font-medium text-white">
        <h5 className="flex gap-1 items-center">
          Buy <Image width={16} height={16} src={down} alt="down" />
        </h5>
        <h5>Gallery</h5>
        <h5>Frames</h5>
        <h5>NanoHUb</h5>
        <h5 className="flex gap-1 items-center">
          Programs <Image width={16} height={16} src={down} alt="down" />
        </h5>
        <h5 className="flex gap-1 items-center">
          More <Image width={16} height={16} src={down} alt="down" />
        </h5>
        <h5 className="flex gap-1 items-center">
          Socials <Image width={16} height={16} src={down} alt="down" />
        </h5>
        <button className="px-6 h-[43px] rounded-[34px] bg-[#ffffff1a]">
          Connect
        </button>
      </nav>
    </div>
  );
}
