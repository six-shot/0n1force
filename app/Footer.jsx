import Image from 'next/image';
import React from 'react'
import logo from "@/public/logo.png"

export default function Footer() {
  return (
    <div className="bg-[#171717]">
      <div className="mt-8 py-10 px-8 text-white font-inconsolata ">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center  text-[20px]">
            <h5>Twitter</h5>
            <h5>Instagram</h5>
          </div>
          <h5>Terms & Use</h5>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs">Copyright © 0N1 Force, Inc. 2023</p>
          <Image className="w-[40px] h-[40px]" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
