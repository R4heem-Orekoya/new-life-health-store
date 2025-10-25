"use client";

import { PageInfo } from "@/shopify/types/storefront.types";
import { useRouter } from "next/navigation";

interface PaginationBtnProps {
   pageInfo: Pick<
      PageInfo,
      "hasNextPage" | "hasPreviousPage" | "endCursor" | "startCursor"
   >;
}

export default function PaginationBtn({ pageInfo }: PaginationBtnProps) {
   const router = useRouter();

   return (
      <div className="flex justify-center items-center gap-4 mt-10">
         <button
            disabled={!pageInfo.hasPreviousPage}
            className="px-4 py-2 text-sm border rounded disabled:opacity-50"
            onClick={() =>
               router.push(
                  `/products?after=${pageInfo.startCursor}&direction=prev`
               )
            }
         >
            Previous
         </button>

         <button
            disabled={!pageInfo.hasNextPage}
            className="px-4 py-2 text-sm border rounded disabled:opacity-50"
            onClick={() =>
               router.push(
                  `/products?after=${pageInfo.endCursor}&direction=next`
               )
            }
         >
            Next
         </button>
      </div>
   );
}
