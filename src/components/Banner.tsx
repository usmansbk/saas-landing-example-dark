import Link from "next/link";

export default function Banner() {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FFDBE7,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)]">
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
