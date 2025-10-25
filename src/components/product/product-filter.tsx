"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { filters } from "@/conts";
import { Search } from "lucide-react";

export default function ProductFilter() {
   const router = useRouter();
   const searchParams = useSearchParams();

   const [search, setSearch] = useState(searchParams.get("q") ?? "");
   const sort = searchParams.get("sort") ?? "latest_desc";

   useEffect(() => {
      const delay = setTimeout(() => {
         const params = new URLSearchParams(searchParams.toString());
         if (search) params.set("q", search);
         else params.delete("q");

         router.push(`/products?${params.toString()}`);
      }, 500);

      return () => clearTimeout(delay);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [search]);

   const handleSortChange = (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", value);
      router.push(`/products?${params.toString()}`);
   };

   return (
      <div className="flex flex-wrap items-center gap-3">
         <div className="relative w-[250px]">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 size-4 pointer-events-none" />
            <Input
               type="text"
               placeholder="Search products..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-9"
            />
         </div>

         <Select defaultValue={sort} onValueChange={handleSortChange}>
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
      </div>
   );
}
