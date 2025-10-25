import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import ProductFilter from "@/components/product-filter";
import { getProducts } from "@/shopify/utils";
import { Product } from "@/shopify/types/storefront.types";
import ProductCard from "@/components/product-card";
import { filters } from "@/conts";
import ProductsSkeleton from "@/components/product-skeleton";

export default async function ProductsPage({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
   const params = await searchParams;
   const sort = params.sort as string | undefined

   const activeFilter =
      filters.find((f) => f.value === sort) ??
      filters.find((f) => f.value === "latest_desc")!;

   const products = (await getProducts({
      take: 16,
      sortKey: activeFilter.sortKey,
      reverse: activeFilter.reverse,
   })) as Product[];

   return (
      <section className="py-16 container">
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

            <ProductFilter />
         </div>

         <Suspense fallback={<ProductsSkeleton />}>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8">
               {products &&
                  products.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
            </div>
         </Suspense>
      </section>
   );
}
