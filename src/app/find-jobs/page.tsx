"use client";

// react
import { useEffect } from "react";

// components
import FindJobsFiltersHolder from "./components/filtersList/FindJobsFiltersHolder";
import JobsList from "./components/JobsList";

const FindJobsPage = () => {
  useEffect(() => {
    const mainEl = document.querySelector("main");

    if (mainEl) {
      mainEl.style.cssText = `display: flex; flex-direction: column;`;

      return () => {
        ["display", "flex-direction"].forEach((prop) =>
          mainEl.style.removeProperty(prop)
        );
      };
    }
  }, []);

  return (
    <div className="container flex-1 my-4 max-sm:flex-col flex gap-4 relative">
      <FindJobsFiltersHolder />
      <JobsList />
    </div>
  );
};
export default FindJobsPage;
