import Link from "next/link";
import ArrowRight from "@/assets/icons/arrow-right.svg";

export default function Hero() {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="container">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white border-opacity-30"
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
        <h1>One Task at a Time</h1>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <button>Get for free</button>
      </div>
    </div>
  );
}
