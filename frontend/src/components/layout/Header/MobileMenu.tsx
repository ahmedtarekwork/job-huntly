// nextjs
import Image from "next/image";

// components
import Nav from "./Nav";
import AuthBtns from "./AuthBtns";

// shadcn
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileMenu = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <Button
          variant="outline"
          className="rounded-full size-[40px] p-0 flex"
          asChild
        >
          <DropdownMenuTrigger>
            <Image
              src="burger-menu.svg"
              alt="open menu"
              width={16.5}
              height={10}
            />
          </DropdownMenuTrigger>
        </Button>

        <DropdownMenuContent>
          <Nav ItemHolder={DropdownMenuItem} />
          <AuthBtns ItemHolder={DropdownMenuItem} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MobileMenu;
