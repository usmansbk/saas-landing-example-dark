import helixImage from "@/assets/images/helix.png";
import graphImage from "@/assets/images/graph.png";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="bg-black text-white  py-[72px] sm:py-24 overflow-x-clip">
      <div className="container max-w-xl relative">
        <Image
          src={helixImage}
          alt=""
          width={225}
          height={225}
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={graphImage}
          alt=""
          width={234}
          height={234}
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-center text-white/70 mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="name@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
}
