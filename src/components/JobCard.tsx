// nextjs
import Image from "next/image";

// types
import type { TJob } from "@/lib/types";
import { colorOpacity } from "@/lib/utils";

const JobCard = ({
  company: { icon, name, location },
  type,
  title,
  description,
  categories,
}: Omit<TJob, "id">) => {
  const catsColors = ["#FFB836", "#56CDAD"];

  return (
    <li className="border p-4">
      <div className="flex justify-between gap-4 flex-wrap items-center">
        <Image
          src={icon}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="aspect-[1]"
        />
        <p className="p-2.5 text-primary border border-primary">{type}</p>
      </div>

      <p className="font-bold font-[epilogue] text-secondary mt-5 mb-1">
        {title}
      </p>

      <p className="text-text-2 flex items-center gap-2 font-[epilogue] mt-4 mb-2.5">
        {name}{" "}
        <span className="inline-block size-1 bg bg-text-2/30 rounded-full" />{" "}
        {location}
      </p>

      <p className="text-text-1">{description}</p>

      <ul className="flex flex-wrap gap-2 items-center mt-2">
        {categories.map((cat, i) => {
          return (
            <li
              key={cat}
              className="font-[epilogue] py-1 px-3.5 rounded-[100vh] font-[600]"
              style={{
                background: colorOpacity(catsColors[i]),
                color: catsColors[i],
              }}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
export default JobCard;
