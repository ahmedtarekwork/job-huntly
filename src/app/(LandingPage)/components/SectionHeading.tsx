// nextjs
import Link from "next/link";

// icons
import { MoveRight } from "lucide-react";

const SectionHeading = ({
  mainText,
  specialText,
}: Record<"mainText" | "specialText", string>) => {
  return (
    <div className="flex justify-between items-center gap-4 flex-wrap mb-10">
      <h2
        className="text-[48px] text-secondary max-[405px]:text-[50px] max-[260px]:text-[30px] font-[ClashDisplay-Semibold]"
        style={{
          lineHeight: "110.00000000000001%",
        }}
      >
        {mainText}
        <span className="text-accent-1">{specialText}</span>
      </h2>

      <Link
        className="text-primary flex gap-3 items-center flex-wrap font-[epilogue]"
        href="/find-jobs"
      >
        Show all jobs <MoveRight />
      </Link>
    </div>
  );
};
export default SectionHeading;
