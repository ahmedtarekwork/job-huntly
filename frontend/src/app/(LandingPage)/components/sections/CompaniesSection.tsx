import Image from "next/image";

const CompaniesSection = () => {
  return (
    <div className="my-[60px] container">
      <p className="text-[#202430] opacity-50 font-[epilogue] mb-8">
        Companies we helped grow
      </p>

      <ul className="flex items-center gap-8 flex-wrap justify-between">
        <li className="relative">
          <Image
            src="companies-logos/vodafone.svg"
            alt="vodafone"
            width={150}
            height={150}
            className="max-w-full"
          />
        </li>

        <li>
          <Image
            src="companies-logos/intel.svg"
            alt="intel"
            width={150}
            height={150}
            className="max-w-full"
          />
        </li>

        <li>
          <Image
            src="companies-logos/tesla.svg"
            alt="tesla"
            width={150}
            height={150}
            className="max-w-full"
          />
        </li>

        <li>
          <Image
            src="companies-logos/amd.svg"
            alt="amd"
            width={150}
            height={150}
            className="max-w-full"
          />
        </li>

        <li>
          <Image
            src="companies-logos/talkit.svg"
            alt="talkit"
            width={150}
            height={150}
            className="max-w-full"
          />
        </li>
      </ul>
    </div>
  );
};
export default CompaniesSection;
