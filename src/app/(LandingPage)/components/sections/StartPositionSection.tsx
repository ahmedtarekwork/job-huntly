// nextjs
import Image from "next/image";
import Link from "next/link";

// components
// shadcn
import { Button } from "@/components/ui/button";

const StartPositionSection = () => {
  return (
    <div className="my-[100px] container">
      <div className="relative items-center flex justify-between pb-3 max-md:px-2.5 max-md:py-4 p-[70px] gap-4 max-md:flex-col flex-wrap">
        <Image
          src="/landing-page/start-position-bg.png"
          alt="background"
          layout="fill"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="absolute inset-0 -z-[1]"
        />
        <div className="flex-1 max-md:text-center">
          <p
            style={{
              lineHeight: "110.00000000000001%",
            }}
            className="text-white font-[ClashDisplay-Semibold] text-[48px] max-[275px]:text-2xl"
          >
            Start posting <br /> jobs today
          </p>

          <p className="font-[epilogue] text-white my-4">
            Start posting jobs for only $10.
          </p>
          <Button asChild className="bg-white text-primary max-md:w-full">
            <Link href="/login">Sign Up For Free</Link>
          </Button>
        </div>
        <div className="flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="max-w-full"
            src="/landing-page/dashboard-screenshot.webp"
            alt="dashboard screenshot"
          />
        </div>
      </div>
    </div>
  );
};
export default StartPositionSection;
