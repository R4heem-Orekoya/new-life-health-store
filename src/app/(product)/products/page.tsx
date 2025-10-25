import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import ProductFilter from "@/components/product/product-filter";
import { getProducts } from "@/shopify/utils";
import { Product } from "@/shopify/types/storefront.types";
import ProductCard from "@/components/product/product-card";
import { filters } from "@/conts";
import { PackageSearch01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import PaginationBtn from "@/components/product/pagination-btn";

export default async function ProductsPage({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
   const params = await searchParams;
   const sort = params.sort as string | undefined;
   const searchQuery = params.q as string | undefined;
   const after = params.after as string | undefined;

   const activeFilter =
      filters.find((f) => f.value === sort) ??
      filters.find((f) => f.value === "latest_desc")!;

   const { products: productsData, pageInfo } = await getProducts({
      take: 2,
      after,
      query: searchQuery,
      sortKey: activeFilter.sortKey,
      reverse: activeFilter.reverse,
   });

   const products = productsData as Product[] | undefined;

   return (
      <section className="py-16 container">
         <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
               Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">Products</span>
         </nav>

         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
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
         <div className="grid gap-8">
            {searchQuery && (
               <p className="text-sm font-medium">
                  Search Results for:{" "}
                  <span className="text-primary font-semibold italic">
                     {searchQuery}
                  </span>
               </p>
            )}
            {!products || products.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted text-muted-foreground mb-4">
                     <HugeiconsIcon
                        icon={PackageSearch01Icon}
                        className="size-8"
                     />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                     No products found
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                     Try adjusting your filters or search terms to find what
                     you’re looking for.
                  </p>
               </div>
            ) : (
               <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8">
                  {products &&
                     products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                     ))}
               </div>
            )}
         </div>

         {/* {pageInfo && <PaginationBtn pageInfo={pageInfo} />} */}
      </section>
   );
}
