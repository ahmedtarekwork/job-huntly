// nextjs
import Image from "next/image";
import Link from "next/link";

// components
import AuthBtns from "./AuthBtns";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white max-sm:py-4">
      <div className="container flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2 flex-wrap">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="aspect-[1]"
            />
            <p className="font-bold text-2xl text-secondary">JobHuntly</p>
          </Link>

          <Nav className="max-sm:hidden" />
        </div>

        <MobileMenu />
        <AuthBtns className="max-sm:!hidden" />
      </div>
    </header>
  );
};
export default Header;
