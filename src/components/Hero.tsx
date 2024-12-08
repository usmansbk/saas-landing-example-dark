"use client";
import Link from "next/link";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#b48cde]  bg-[radial-gradient(closest-side,#000000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-3 border py-1 px-2 rounded-lg border-white border-opacity-30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br />
              at a Time
            </h1>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            >
              <Image
                draggable={false}
                src={cursorImage}
                alt=""
                width={200}
                height={200}
                className="max-w-none"
              />
            </motion.div>
            <motion.div
              drag
              dragSnapToOrigin
              className="absolute top-[56px] left-[498px] hidden sm:inline"
            >
              <Image
                draggable={false}
                src={messageImage}
                alt=""
                width={200}
                height={200}
                className="max-w-none"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
}
