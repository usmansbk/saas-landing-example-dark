"use client";
import acmeLogo from "@/assets/images/acme.png";
import apexLogo from "@/assets/images/apex.png";
import celestiaLogo from "@/assets/images/celestia.png";
import echoLogo from "@/assets/images/echo.png";
import pulseLogo from "@/assets/images/pulse.png";
import quantumLogo from "@/assets/images/quantum.png";
import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    src: acmeLogo,
    alt: "Acme logo",
  },
  {
    src: apexLogo,
    alt: "Apex logo",
  },
  {
    src: celestiaLogo,
    alt: "Celestia logo",
  },
  {
    src: echoLogo,
    alt: "Echo logo",
  },
  {
    src: pulseLogo,
    alt: "Pulse logo",
  },
  {
    src: quantumLogo,
    alt: "Quantum logo",
  },
];

export default function LogoTicker() {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute before:z-10 after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map((logo) => (
              <Image
                src={logo.src}
                alt={logo.alt}
                key={logo.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map((logo) => (
              <Image
                src={logo.src}
                alt={logo.alt}
                key={logo.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
