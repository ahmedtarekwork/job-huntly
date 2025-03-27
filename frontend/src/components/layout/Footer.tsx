// nextjs
import Image from "next/image";
import Link from "next/link";

// components
// shadcn
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

// icons
import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#202430] py-10">
      <div className="container">
        <div className="flex flex-wrap gap-12 [&>*]:flex-1">
          <div>
            <Link href="/" className="flex gap-2 flex-wrap">
              <Image
                src="logo.svg"
                alt="logo"
                width={32}
                height={32}
                className="aspect-[1]"
              />
              <p className="font-bold text-2xl text-white">JobHuntly</p>
            </Link>

            <p className="text-white mt-4">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">About</h3>

            <ul className="text-white/60 text-[16px] space-y-4">
              <li>Companies</li>
              <li>Pricing</li>
              <li>Terms</li>
              <li>Advice</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>

            <ul className="text-white/60 text-[16px] space-y-4">
              <li>Help Docs</li>
              <li>Guide</li>
              <li>Updates</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Get job notifications</h3>

            <p className="text-white/60 text-[16px]">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <form className="flex gap-1 flex-wrap mt-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-none bg-white flex-1 min-w-[130px] grow-[1]"
              />
              <Button className="flex-[0.3]">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-t-white/10 mt-7 pt-7 text-white flex justify-between items-center gap-4 flex-wrap">
          <p className="text-white/50">
            2021 @ JobHuntly. All rights reserved.
          </p>

          <ul className="flex gap-4 flex-wrap">
            <li className="footer-social-icon">
              <Facebook size={18} />
            </li>
            <li className="footer-social-icon">
              <Instagram size={18} />
            </li>
            <li className="footer-social-icon">
              <Dribbble size={18} />
            </li>
            <li className="footer-social-icon">
              <Linkedin size={18} />
            </li>
            <li className="footer-social-icon">
              <Twitter size={18} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
