import screenshotImage from "@/assets/images/screenshot.png";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Intuitive interface
        </h2>
        <p className="text-xl text-center text-white/70 mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <Image
          src={screenshotImage}
          alt="Screenshot of the app"
          className="mt-14"
        />
      </div>
    </div>
  );
}
