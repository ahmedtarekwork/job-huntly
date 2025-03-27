"use client";

// nextjs
import { usePathname } from "next/navigation";
import Link from "next/link";

// react
import { Fragment, type ElementType, type ReactNode } from "react";

// utils
import { cn } from "@/lib/utils";

type Props = {
  path: string;
  children: ReactNode;
  ItemHolder?: ElementType;
};

const Navlink = ({ children, path, ItemHolder }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  const NavItemHolder = ItemHolder || Fragment;

  return (
    <li>
      <NavItemHolder>
        <Link
          className={cn(
            isActive
              ? "text-primary relative active-nav-link"
              : "text-text-2 hover:text-text-1",
            "block py-5 transition duration-200 w-full max-sm:border-b"
          )}
          href={path}
        >
          {children}
        </Link>
      </NavItemHolder>
    </li>
  );
};
export default Navlink;
