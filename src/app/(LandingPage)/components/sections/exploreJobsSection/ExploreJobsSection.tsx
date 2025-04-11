// components
import JobCategoryCard from "./JobCategoryCard";
import SectionHeading from "../../SectionHeading";

// utils
import { nanoid } from "nanoid";

// types
import type { TCategory } from "@/lib/types";

const cateogries: TCategory[] = [
  {
    name: "Design",
    available: 235,
    icon: "design-icon.svg",
  },
  {
    name: "Sales",
    available: 756,
    icon: "sales-icon.svg",
  },
  {
    name: "Marketing",
    available: 140,
    icon: "marketing-icon.svg",
  },
  {
    name: "Finance",
    available: 325,
    icon: "finance-icon.svg",
  },
  {
    name: "Technology",
    available: 436,
    icon: "technology-icon.svg",
  },
  {
    name: "Engineering",
    available: 542,
    icon: "engineering-icon.svg",
  },
  {
    name: "Business",
    available: 211,
    icon: "business-icon.svg",
  },
  {
    name: "Human Resource",
    available: 346,
    icon: "human-resource-icon.svg",
  },
].map((cat: Omit<TCategory, "id">) => ({
  ...cat,
  id: nanoid(),
}));

const ExploreJobsSection = () => {
  return (
    <div className="my-[60px] relative container">
      <SectionHeading mainText="Explore by " specialText="category" />

      <ul
        className="grid justify-center gap-4 max-[600px]:!grid-cols-1"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(275px, 0.7fr))",
        }}
      >
        {cateogries.map(({ id, ...cat }) => (
          <JobCategoryCard key={id} {...cat} />
        ))}
      </ul>
    </div>
  );
};
export default ExploreJobsSection;
