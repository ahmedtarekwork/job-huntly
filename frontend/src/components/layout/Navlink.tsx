"use client";

// nextjs
import { usePathname } from "next/navigation";
import Link from "next/link";

// react
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  path: string;
  children: ReactNode;
};

const Navlink = ({ children, path }: Props) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  return (
    <li>
      <Link
        className={cn(
          isActive
            ? "text-primary relative active-nav-link"
            : "text-text-2 hover:text-text-1",
          "block py-5 transition duration-200"
        )}
        href={path}
      >
        {children}
      </Link>
    </li>
  );
};
export default Navlink;
