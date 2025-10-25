"use client";

import { useSelectedVariant } from "@/hooks/use-selected-variant";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/shopify/types/storefront.types";

interface ProductPriceProps {
   variants: Product["variants"]["edges"];
}

export default function ProductPrice({ variants }: ProductPriceProps) {
   const selectedVariant = useSelectedVariant(variants);
   const price = parseFloat(selectedVariant?.price.amount ?? "0");
   const compareAtPrice = parseFloat(
      selectedVariant.compareAtPrice?.amount ?? "0"
   );
   const isOnSale = compareAtPrice > price;

   return (
      <p className="flex items-center gap-2">
         {isOnSale && (
            <span className="text-muted-foreground line-through font-medium">
               {formatPrice({
                  amount: selectedVariant.compareAtPrice?.amount,
                  currency:
                     selectedVariant.compareAtPrice?.currencyCode ?? "NGN",
               })}
            </span>
         )}
         <span className="text-2xl md:text-3xl font-semibold text-primary">
            {formatPrice({
               amount: selectedVariant.price.amount,
               currency: selectedVariant.price.currencyCode,
            })}
         </span>
      </p>
   );
}
