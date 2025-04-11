// icons
import { FaChevronUp } from "react-icons/fa";

// components
import Checkbox from "./Checkbox";

type Props = {
  title: string;
};

const FiltersCategory = ({ title }: Props) => {
  return (
    <div className="space-y-2">
      <h2>
        <button className="flex font-semibold justify-between gap-2 flex-wrap items-center">
          {title}

          <FaChevronUp />
        </button>
      </h2>

      <ul>
        <li>
          <Checkbox id="Full-time">Full-time (3)</Checkbox>
        </li>
        <li>
          <Checkbox id="Full-time">Part-Time (5)</Checkbox>
        </li>
        <li>
          <Checkbox id="Full-time">Remote (2)</Checkbox>
        </li>
        <li>
          <Checkbox id="Full-time">Internship (24)</Checkbox>
        </li>
        <li>
          <Checkbox id="Full-time">Contract (3)</Checkbox>
        </li>
      </ul>
    </div>
  );
};

export default FiltersCategory;
