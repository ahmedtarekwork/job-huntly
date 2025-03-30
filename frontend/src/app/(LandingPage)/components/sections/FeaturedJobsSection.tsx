// components
import SectionHeading from "../SectionHeading";
import JobCard from "@/components/JobCard";

// types
import type { TJob } from "@/lib/types";

// utils
import { nanoid } from "nanoid";

const jobs: TJob[] = Array.from({ length: 8 }).map(() => ({
  company: {
    icon: "company-logo.svg",
    location: "Manchester, UK",
    name: "ClassPass",
  },
  title: "Email Marketing",
  description: "Revolut is looking for Email Marketing to help team ma ...",
  type: "Full Time",
  categories: ["Marketing", "Design"],
  id: nanoid(),
}));

const FeaturedJobsSection = () => {
  return (
    <div className="container mb-20">
      <SectionHeading mainText="Featured " specialText="jobs" />

      <ul
        className="grid justify-center gap-4 max-[600px]:!grid-cols-1"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(275px, 0.7fr))",
        }}
      >
        {jobs.map(({ id, ...job }) => (
          <JobCard key={id} {...job} />
        ))}
      </ul>
    </div>
  );
};
export default FeaturedJobsSection;
