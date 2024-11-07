import React from "react";
import one from "@/public/seven.png";
import two from "@/public/eight.png";
import Image from "next/image";
import three from "@/public/nine.png";
import four from "@/public/four.png";
import five from "@/public/five.png";
import person1 from "@/public/person1.png";
import person2 from "@/public/person2.png";
import person3 from "@/public/person3.png";
import person4 from "@/public/person4.png";
import person5 from "@/public/person5.png";
import person6 from "@/public/person6.png";
import person7 from "@/public/person7.png";
import person8 from "@/public/person8.png";
import person9 from "@/public/person9.png";
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
            Enter The 0N1VERSE
          </button>
        </div>
        <div className="col-span-6">
          <Image src={one} className="h-full" alt="one" />
        </div>
      </div>

      <div className=" pt-4">
        <div className="grid grid-cols-11 gap-4">
          {/* First column - container for first and third items */}
          <div className="flex flex-col gap-4 col-span-5">
            {/* First item - shorter height */}
            <div className="bg-[#222]  w-full rounded-[16px]">
              <Image src={two} className="w-full h-[355px]" alt="eight" />
              <div className="py-8 text-white">
                <h4 className="text-[40px] font-medium font-orbitron px-8">
                  Marketplace
                </h4>
                <p className="text-[20px] font-inconsolata font-medium px-8 ">
                  0N1 FORCE and Origin Protocol are rewarding <br /> active
                  community members
                </p>

                <div className="px-8">
                  {" "}
                  <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
                    Go to Marketplace
                  </button>
                </div>
              </div>
            </div>

            {/* Third item - medium-long height */}
            <div className=" rounded-[16px]">
              <div className="bg-[#171717]">
                <Image src={four} className="w-full h-[369px]" alt="eight" />
              </div>
              <div className="py-8 text-white bg-[#222]  rounded-b-[16px]">
                <h4 className="text-[40px] font-medium font-orbitron px-8">
                  COMIC
                </h4>
                <p className="text-[20px] font-inconsolata font-medium px-8  ">
                  <span className="text-primary">Cromagnus</span>, an in-house
                  illustrator for the 0N1 <br /> Force project, is currently
                  working with{" "}
                  <span className="text-primary">Josh</span> <br />
                  <span className="text-primary">Blaylock</span> to bring this
                  world to life through <br /> an exclusive digital comic.
                </p>
              </div>
            </div>
          </div>

          {/* Second column - container for second and fourth items */}
          <div className="flex flex-col gap-4 col-span-6 ">
            {/* Second item - medium height */}
            <div className="bg-[#222] rounded-[16px]">
              <Image src={three} className="w-full h-[376px]" alt="eight" />
              <div className=" text-white py-8">
                <h4 className="text-[40px] font-medium font-orbitron px-8">
                  THE 0N1VERSE
                </h4>
                <p className="text-[20px] font-inconsolata font-medium  px-8">
                  0N1 Force sees the future of NFT ownership as cross-
                  <br />
                  platform. We envision a digital social network with no <br />{" "}
                  boundaries.The Ethereal Enclave, within the 0N1VERSE, is an{" "}
                  <br /> endless city, and it is the place where the 0N1 call
                  home.
                </p>
                <div className="px-8">
                  {" "}
                  <button className="bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
                    See Lore
                  </button>
                </div>
              </div>
            </div>

            {/* Fourth item - much longer height */}
            <div className="bg-[#222]  w-full rounded-[16px]">
              <Image src={five} className="w-full h-[225px]" alt="eight" />
              <div className="w-full py-8 text-white">
                <h4 className="text-[40px] font-medium font-orbitron px-8">
                  0N1 FRAMES
                </h4>
                <p className="text-[20px] font-inconsolata font-medium  px-8 mt-2">
                  THE ORIGINAL 0N1 FORCE NFTS ARE THE KEY:As long as you own{" "}
                  <br /> an original 0N1, the 0N1 FRAMES are free to claim + gas.
                </p>
                <div className="px-8 mt-1">
                  {" "}
                  <button className=" mb-1 bg-primary px-8 h-[56px] font-inconsolata text-[20px] rounded-[61px] font-medium mt-8">
                    Know more
                  </button>
                </div>
              </div>
            </div>
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
                src={person2}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person3}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person4}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person5}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person6}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person7}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person8}
                className="w-full h-full rounded-[8px]"
                alt="person"
              />
            </div>
            <div className="w-full h-[258px] rounded-[8px]">
              <Image
                src={person9}
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
