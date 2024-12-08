"use client";
import screenshotImage from "@/assets/images/screenshot.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ProductShowcase() {
  const scrollTargetRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <div className="text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Intuitive interface
        </h2>
        <p className="text-xl text-center text-white/70 mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
          animate={{}}
        >
          <Image
            ref={scrollTargetRef}
            src={screenshotImage}
            alt="Screenshot of the app"
            className="mt-14"
          />
        </motion.div>
      </div>
    </div>
  );
}
