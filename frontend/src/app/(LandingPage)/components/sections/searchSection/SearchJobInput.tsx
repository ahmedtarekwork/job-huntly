// components
// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// icons
import { MapPin, Search } from "lucide-react";

const SearchJobInput = () => {
  return (
    <form
      className="w-fit flex gap-4 flex-wrap p-4 bg-white max-[480px]:flex-col max-[480px]:w-full"
      style={{
        boxShadow:
          "0px 79px 128px rgba(192, 192, 192, 0.09), 0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508), 0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723), 0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675), 0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615)",
      }}
    >
      <div className="flex items-center flex-1 gap-2">
        <Search size={18} className="stroke-secondary" />
        <Input
          placeholder="Job title or keyword"
          className="border-t-0 border-x-0 rounded-b-none rounded-t-md shadow-none"
        />
      </div>

      <div className="flex items-center flex-1 gap-2">
        <MapPin size={18} className="stroke-secondary" />
        <Select>
          <SelectTrigger className="w-full border-t-0 border-x-0 shadow-none rounded-b-none rounded-t-md cursor-pointer">
            <SelectValue placeholder="Place" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="flex-[0.3]">Search my job</Button>
    </form>
  );
};
export default SearchJobInput;
