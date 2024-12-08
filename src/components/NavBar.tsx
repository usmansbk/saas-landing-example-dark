import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Updates",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
];

export default function NavBar() {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur" />
            <Image
              src={logoImage}
              alt="SaaS logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 w-10 h-10 inline-flex justify-center items-center rounded-lg sm:hidden ">
            <MenuIcon className="w-5 h-5" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                {link.title}
              </Link>
            ))}
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
