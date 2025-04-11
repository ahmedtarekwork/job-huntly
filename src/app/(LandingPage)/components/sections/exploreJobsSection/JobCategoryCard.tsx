// nextjs
import Image from "next/image";
import Link from "next/link";

// icons
import { FaArrowRightLong  } from "react-icons/fa6";

// types
import type { TCategory } from "@/lib/types";

const JobCategoryCard = ({ icon, name, available }: Omit<TCategory, "id">) => {
  return (
    <li className="border p-4 transition duration-200 hover:bg-primary group ">
      <Image
        src={`icons/jobsCategories/${icon}`}
        alt={`${name} icon`}
        width={36}
        height={36}
        className="group-hover:mix-blend-color-dodge group-hover:invert-100 transition-[filter] duration-200"
      />
      <p className="truncate mt-7 mb-1 text-secondary font-bold font-[ClashDisplay-Semibold] text-[24px] group-hover:text-white transition duration-200">
        {name}
      </p>
      <Link
        href="/find-jobs"
        className="pl-0 p-1.5 w-fit flex gap-4 text-text-1 flex-wrap group-hover:text-white transition duration-200"
      >
        {available} jobs available <FaArrowRightLong />
      </Link>
    </li>
  );
};
export default JobCategoryCard;
