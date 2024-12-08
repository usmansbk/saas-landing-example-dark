import Link from "next/link";

export default function Banner() {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FEECFF,#FECAFF_12%,#FEB5FF_27%,#FFDBE7_40%,#FFF4D6_49%,#F3FCD7_59%,#D2F5EE_71%,#C3EFFF_84%,#FBEFFF)]">
      <div className="container ">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducting a completely redesigned interface -{" "}
          </span>
          <Link href="#" className="underline underline-offset-4">
            Explore the demo
          </Link>
        </p>
      </div>
    </div>
  );
}
