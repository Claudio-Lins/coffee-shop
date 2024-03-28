"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SearchInput() {
  return (
    <Popover>
      <PopoverTrigger>
        <Search className="w-4 h-4 text-white" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full flex items-center border rounded-md px-2">
          <Search className="w-4 h-4" />
          <Input className="border-none ring-0 focus:ring-0 focus:border-none focus-visible:ring-0 focus-visible:border-none" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
