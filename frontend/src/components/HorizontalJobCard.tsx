// nextjs
import Image from "next/image";

// types
import type { TJob } from "@/lib/types";

// utils
import { colorOpacity } from "@/lib/utils";

const HorizontalJobCard = ({
  company: { icon, name, location },
  title,
  categories,
  type,
}: Omit<TJob, "id" | "description">) => {
  const catsColors = ["#FFB836", "#56CDAD"];

  return (
    <li className="flex gap-4 flex-wrap bg-white py-4 px-8 items-start">
      <Image
        src={icon}
        alt={`${name} icon`}
        width={64}
        height={64}
        className="aspect-[1]"
      />

      <div>
        <p className="font-bold font-[epilogue] text-secondary">{title}</p>

        <p className="text-text-2 flex items-center gap-3 font-[epilogue] mt-2 mb-2">
          {name}{" "}
          <span className="inline-block size-1 bg bg-text-2 rounded-full" />{" "}
          {location}
        </p>

        <div className="flex items-center mt-2 flex-wrap gap-2">
          <div className="border-y-0 border-l-0 border-r pr-2">
            <p
              className="font-[epilogue] py-1 px-3.5 rounded-[100vh] font-[600] min-w-max"
              style={{
                background: colorOpacity("#56CDAD"),
                color: "#56CDAD",
              }}
            >
              {type}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 items-start">
            {categories.map((cat, i) => {
              return (
                <li
                  key={cat}
                  className="font-[epilogue] py-1 px-3.5 rounded-[100vh] font-[600]"
                  style={{
                    border: `1px solid ${catsColors[i]}`,
                    color: catsColors[i],
                  }}
                >
                  {cat}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default HorizontalJobCard;
