import ProductCard from "../product-card";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { getProducts } from "@/shopify/utils";
import { Product } from "@/shopify/types/storefront.types";

export default async function BestSelling() { 
   const bestSellingProducts = (await getProducts({ 
      take: 4
   })) as Product[]
   
   return (
      <section className="py-24">
         <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
               Best Selling Products
            </h2>
            <p className="text-muted-foreground mt-2">
               Our customers’ most-loved supplements for lasting health and
               vitality.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bestSellingProducts && bestSellingProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>

         <div className="flex justify-center mt-12">
            <Button asChild size="lg">
               <Link href="/products">
                  View All Products
                  <HugeiconsIcon
                     icon={ShoppingCart01Icon}
                     strokeWidth={1.8}
                     className="size-5"
                  />
               </Link>
            </Button>
         </div>
      </section>
   );
}
