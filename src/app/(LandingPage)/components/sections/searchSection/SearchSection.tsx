// nextjs
import Image from "next/image";

// components
import SearchJobInput from "./SearchJobInput";

const SearchSection = () => {
  return (
    <div className="relative py-[90px] container">
      <h1
        className="text-[72px] text-secondary max-[405px]:text-[50px] max-[260px]:text-[30px] font-[ClashDisplay-Semibold]"
        style={{
          lineHeight: "110.00000000000001%",
        }}
      >
        Discover <br /> more than <br />{" "}
        <span className="text-accent-1">5000+ Jobs</span>
        <Image
          src="landing-page/landing-page-search-section-scratches.svg"
          alt="scratches"
          width={455}
          height={32}
        />
      </h1>

      <p className="text-text-2 my-4 font-[epilogue]">
        Great platform for the job seeker that searching for <br />
        new career heights and passionate about startups.
      </p>

      <SearchJobInput />

      <p className="text-[#202430] mt-2 font-[epilogue]">
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
    </div>
  );
};
export default SearchSection;
