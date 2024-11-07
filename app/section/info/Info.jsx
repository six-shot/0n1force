import React from "react";
import one from "@/public/seven.png";
import two from "@/public/eight.png";
import Image from "next/image";
import three from "@/public/nine.png";
import four from "@/public/four.png";
import five from "@/public/five.png";
import person1 from "@/public/person1.png";

export default function Info() {
  return (
    <div className="px-8">
      <div className="grid grid-cols-12 gap-4 bg-[#222] mt-[48px] rounded-[16px]">
        <div className="col-span-6 p-10 text-white ">
          <h4 className="text-[48px] font-medium font-orbitron">0N1 FORCE</h4>
          <p className="text-[20px] font-inconsolata font-medium w-[451px]">
            The original collection, 0N1 Force are 7,777 citizens that had once
            lived for eternity in the Ethereal Enclave. That all suddenly
            changed when the Emperor died and the Enclave was flung into
            chaos...Now the collection grows with the addition of Nano Suits,
            comic, and future Metaverse utility.
          </p>
          <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
            Enter The 0N1VERSE{" "}
          </button>
        </div>
        <div className="col-span-6">
          <Image src={one} alt="one" />
        </div>
      </div>
      <div className="grid grid-cols-11 items-start gap-4 mt-4">
        <div className="col-span-5 bg-[#222] w-full rounded-[16px]">
          <Image src={two} className="w-full h-[355px]" alt="eight" />
          <div className="p-8 text-white">
            <h4 className="text-[40px] font-medium font-orbitron">
              Marketplace
            </h4>
            <p className="text-[20px] font-inconsolata font-medium ">
              0N1 FORCE and Origin Protocol are rewarding active community
              members
            </p>
            <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
              Go to Marketplace
            </button>
          </div>
        </div>
        <div className="col-span-6 bg-[#222] rounded-[16px]">
          <Image src={three} className="w-full h-[376px]" alt="eight" />
          <div className="p-8 text-white">
            <h4 className="text-[40px] font-medium font-orbitron">
              THE 0N1VERSE
            </h4>
            <p className="text-[20px] font-inconsolata font-medium w-[604px]">
              0N1 Force sees the future of NFT ownership as cross-platform. We
              envision a digital social network with no boundaries.The Ethereal
              Enclave, within the 0N1VERSE, is an endless city, and it is the
              place where the 0N1 call home.
            </p>
            <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
              See Lore
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-11 items-start gap-4 mt-4">
        <div className="col-span-5  w-full rounded-[16px]">
          <div className="bg-[#171717]">
            <Image src={four} className="w-full h-[369px]" alt="eight" />
          </div>

          <div className="p-8 text-white bg-[#222] ">
            <h4 className="text-[40px] font-medium font-orbitron">COMIC</h4>
            <p className="text-[20px] font-inconsolata font-medium ">
              Cromagnus, an in-house illustrator for the 0N1 Force project, is
              currently working with Josh Blaylock to bring this world to life
              through an exclusive digital comic.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#222] rounded-[16px]">
          <Image src={five} className="w-full h-[223px]" alt="eight" />
          <div className="p-8 text-white">
            <h4 className="text-[40px] font-medium font-orbitron">
              0N1 FRAMES
            </h4>
            <p className="text-[20px] font-inconsolata font-medium w-[604px]">
              THE ORIGINAL 0N1 FORCE NFTS ARE THE KEY:As long as you own an
              original 0N1, the 0N1 FRAMES are free to claim + gas.
            </p>
            <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-[64px]">
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person1}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 p-8 bg-[#222] rounded-[16px]">
          <div className="text-white">
            <h4 className="text-[40px] font-medium font-orbitron">
              JOIN THE 0N1 FORCE
            </h4>
            <p className="text-[20px] font-inconsolata font-medium ">
              The 0N1 Force are 7,777 generative side-profile characters with
              over 100 hand-drawn features fighting for their existence.
              Strength, spirit, and style are what you’ll need to survive in The
              Ethereal Enclave.
            </p>
            <button className="bg-primary w-full h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
              Buy on OpenSea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
