// nextjs
import Image from "next/image";
import Link from "next/link";

// components
import Navlink from "./Navlink";

// shadcn
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="container flex items-center justify-between gap-4 flex-wrap bg-white">
      <div className="flex items-center gap-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="aspect-[1]"
          />
          <p className="font-bold text-2xl text-secondary">JobHuntly</p>
        </Link>

        <nav>
          <ul className="flex gap-2 item">
            <Navlink path="/find-jobs">Find Jobs</Navlink>
            <Navlink path="/find-companies">Browse Companies</Navlink>
          </ul>
        </nav>
      </div>

      <div className="flex">
        <Button variant="link" asChild className="btn-with-outer-border">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
};
export default Header;
