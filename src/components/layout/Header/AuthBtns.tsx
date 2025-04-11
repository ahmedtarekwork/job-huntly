// nextjs
import Link from "next/link";

// react
import { Fragment, type ComponentProps, type ElementType } from "react";

// shadcn
import { Button } from "../../ui/button";

// utils
import { cn } from "@/lib/utils";

type Props = { ItemHolder?: ElementType } & ComponentProps<"div">;

const AuthBtns = ({ ItemHolder, ...props }: Props) => {
  const BtnItemHolder = ItemHolder || Fragment;

  return (
    <div
      {...props}
      className={cn("flex max-sm:flex-col", props.className || "")}
    >
      <BtnItemHolder>
        <Button
          variant="link"
          asChild
          className="btn-with-outer-border max-sm:w-full"
        >
          <Link href="/login">Login</Link>
        </Button>
      </BtnItemHolder>

      <BtnItemHolder>
        <Button asChild className="max-sm:w-full">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </BtnItemHolder>
    </div>
  );
};
export default AuthBtns;
