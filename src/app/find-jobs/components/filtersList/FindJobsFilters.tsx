// react
import { memo } from "react";

// components
import FiltersCategory from "@/components/FiltersCategory";

const FindJobsFilters = () => {
  return (
    <ul className="sm:flex-[0.3] space-y-4 sm:sticky sm:top-0 sm:left-o sm:max-h-screen sm:overflow-y-auto">
      <FiltersCategory title="Type of Employment" />
      <FiltersCategory title="Categories" />
      <FiltersCategory title="Job Level" />
      <FiltersCategory title="Salary Range" />
    </ul>
  );
};

export default memo(FindJobsFilters);
