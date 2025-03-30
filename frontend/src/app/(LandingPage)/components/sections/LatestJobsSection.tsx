// nextjs
import Image from "next/image";

// components
import SectionHeading from "../SectionHeading";
import HorizontalJobCard from "@/components/HorizontalJobCard";

// types
import type { TJob } from "@/lib/types";

// utils
import { nanoid } from "nanoid";

const jobs: Omit<TJob, "description">[] = Array.from({ length: 8 }).map(() => ({
  company: {
    icon: "company-logo-2.svg",
    location: "Hamburg, Germany",
    name: "Udacity",
  },
  title: "Interactive Developer",
  type: "Full-Time",
  categories: ["Marketing", "Design"],
  id: nanoid(),
}));

const LatestJobsSection = () => {
  return (
    <div className="relative">
      <Image
        src="/landing-page/latest-jobs-bg.png"
        fill
        alt="background"
        className="-z-[1]"
      />
      <div className="container py-[80px]">
        <SectionHeading mainText="Latest " specialText="jobs open" />

        <ul className="grid justify-center gap-4 grid-cols-2 max-lg:grid-cols-1">
          {jobs.map(({ id, ...job }) => (
            <HorizontalJobCard key={id} {...job} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LatestJobsSection;
