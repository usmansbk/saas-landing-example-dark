"use client";

import EcosystemIcon from "@/assets/icons/leaf.svg";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export default function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (borderRef.current === null) return;

      const rect = borderRef.current.getBoundingClientRect();

      offsetX.set(e.x - rect.left);
      offsetY.set(e.y - rect.top);
    };

    addEventListener("mousemove", listener);

    return () => removeEventListener("mousemove", listener);
  }, []);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  return (
    <div
      key={title}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon className="w-5 h-5" />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
}
