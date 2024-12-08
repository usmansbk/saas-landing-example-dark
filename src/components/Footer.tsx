import XIcon from "@/assets/icons/x.svg";
import InstaIcon from "@/assets/icons/instagram.svg";
import PinterestIcon from "@/assets/icons/pinterest.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YouTubeIcon from "@/assets/icons/youtube.svg";

const icons = [
  {
    Icon: XIcon,
    url: "https://www.x.com/",
  },
  {
    Icon: InstaIcon,
    url: "https://www.instagram.com/",
  },
  {
    Icon: PinterestIcon,
    url: "https://www.pinterest.com/",
  },
  {
    Icon: LinkedInIcon,
    url: "https://www.linkedin.com/",
  },
  {
    Icon: TikTokIcon,
    url: "https://www.tiktok.com/",
  },
  {
    Icon: YouTubeIcon,
    url: "https://www.youtube.com/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            @{new Date().getFullYear()} Babakolo, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5 ">
            {icons.map(({ Icon, url }) => (
              <li key={url}>
                <Icon className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
