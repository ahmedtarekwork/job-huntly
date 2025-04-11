// components
import FindJobsFilters from "./FindJobsFilters";

// shadcn
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// hooks
import useIsMediaQuery from "@/hooks/useIsMediaQuery";

// icons
import { IoFilterOutline } from "react-icons/io5";

const FindJobsFiltersHolder = () => {
  const isMobile = useIsMediaQuery(640);

  if (!isMobile) return <FindJobsFilters />;

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer flex items-center gap-3 justify-center flex-wrap bg-white border p-3">
        <IoFilterOutline /> More Filters
      </DialogTrigger>
      <DialogContent aria-describedby="filters list">
        <VisuallyHidden>
          <DialogTitle>Jobs Filters List</DialogTitle>
          <DialogDescription>Jobs Filters List</DialogDescription>
        </VisuallyHidden>

        <FindJobsFilters />
      </DialogContent>
    </Dialog>
  );
};

export default FindJobsFiltersHolder;
