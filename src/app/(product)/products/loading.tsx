import ProductFilter from "@/components/product/product-filter";
import ProductsSkeleton from "@/components/product/product-skeleton";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Loading() {
   return (
      <section className="py-16 container animate-in fade-in-50">
         <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
               Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">Products</span>
         </nav>

         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
            <div>
               <h1 className="text-3xl font-bold tracking-tight">
                  Explore Our Products
               </h1>
               <p className="text-muted-foreground mt-1">
                  Shop supplements that fit your lifestyle and health goals.
               </p>
            </div>
            <Suspense>
               <ProductFilter />
            </Suspense>
         </div>

         <ProductsSkeleton />
      </section>
   );
}
