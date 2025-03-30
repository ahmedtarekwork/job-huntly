// sections
import SearchSection from "./components/sections/searchSection/SearchSection";
import CompaniesSection from "./components/sections/CompaniesSection";
import ExploreJobsSection from "./components/sections/exploreJobsSection/ExploreJobsSection";
import StartPositionSection from "./components/sections/StartPositionSection";
import FeaturedJobsSection from "./components/sections/FeaturedJobsSection";
import LatestJobsSection from "./components/sections/LatestJobsSection";

export default function Home() {
  return (
    <>
      <SearchSection />
      <CompaniesSection />
      <ExploreJobsSection />
      <StartPositionSection />
      <FeaturedJobsSection />
      <LatestJobsSection />
    </>
  );
}
