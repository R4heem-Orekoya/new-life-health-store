"use client";

import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { filters } from "@/conts";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
   const searchParams = useSearchParams();

   const router = useRouter();

   return (
      <Select
         defaultValue={searchParams.get("sort") ?? "latest_desc"}
         onValueChange={(value) => router.push(`/products?sort=${value}`)}
      >
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
