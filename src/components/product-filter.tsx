"use client";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { filters } from "@/conts";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";

export default function ProductFilter() {
   const searchParams = useSearchParams();
   const [sort, setSort] = useQueryState("sort", {
      defaultValue: searchParams.get("sort") ?? "latest_desc",
      shallow: true,
      history: "push"
   })

   return (
      <Select value={sort} onValueChange={setSort}>
         <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
         </SelectTrigger>
         <SelectContent>
            {filters.map((filter) => (
               <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
}
