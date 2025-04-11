import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

const Checkbox = ({ children, id }: Props) => {
  return (
    <>
      <input type="checkbox" className="hidden checkbox-input" id={id} />
      <label
        htmlFor={id}
        className="flex gap-2 items-center flex-wrap checkbox-label"
      >
        <div className="size-4 border border-black rounded-[4px] transition duration-200" />
        {children}
      </label>
    </>
  );
};

export default Checkbox;
