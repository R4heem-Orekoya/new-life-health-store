import { getProducts } from "@/shopify/utils";
import ProductCard from "./product-card";
import { Product } from "@/shopify/types/storefront.types";

interface RelatedProductsProps {
   type: string;
   productId: string;
}

export default async function RelatedProducts({
   type,
   productId,
}: RelatedProductsProps) {
   const { products: productsData } = (await getProducts({
      take: 6,
      query: type,
      sortKey: "CREATED_AT",
      reverse: true,
   }));  
    
   const products = productsData as Product[] | undefined
    
   const relatedProducts = products?.filter((p) => p.id !== productId);
    

   if (!products) {
      return (
         <div className="text-center text-muted-foreground text-sm">
            No related products found.
         </div>
      );
   }

   return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 max-w-6xl mx-auto">
         {relatedProducts &&
            relatedProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
      </div>
   );
}
