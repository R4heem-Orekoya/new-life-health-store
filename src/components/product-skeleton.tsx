import { Skeleton } from "./ui/skeleton";

interface ProductsSkeletonProps {
   length?: number
}

export default function ProductsSkeleton({ length = 8 }: ProductsSkeletonProps) {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
         {Array.from({ length }).map((_, i) => (
            <div key={i} className="col-span-1">
               <div className="relative w-full aspect-square border border-border/40 rounded-xl overflow-hidden">
                  <Skeleton className="absolute inset-0" />
               </div>

               <div className="mt-4 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <div className="flex items-center gap-2">
                     <Skeleton className="h-4 w-16" />
                     <Skeleton className="h-4 w-12" />
                  </div>
                  <Skeleton className="h-9 w-full rounded-md" />
               </div>
            </div>
         ))}
      </div>
   );
}
