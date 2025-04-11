// react
import type { ComponentProps, ElementType } from "react";

// components
import Navlink from "./Navlink";

type Props = { ItemHolder?: ElementType } & ComponentProps<"nav">;

const Nav = ({ ItemHolder, ...props }: Props) => {
  return (
    <nav {...props}>
      <ul className="flex max-sm:flex-col gap-2 item">
        <Navlink path="/find-jobs" ItemHolder={ItemHolder}>
          Find Jobs
        </Navlink>
        <Navlink ItemHolder={ItemHolder} path="/find-companies">
          Browse Companies
        </Navlink>
      </ul>
    </nav>
  );
};
export default Nav;
