"use client";

import { toast } from "sonner";
import { Product } from "@/shopify/types/storefront.types";
import { useSelectedVariant } from "@/hooks/use-selected-variant";
import { Button } from "./ui/button";

interface AddToCartButtonProps {
   product: Product;
   variants: Product["variants"]["edges"];
}

export default function AddToCartButton({
   product,
   variants,
}: AddToCartButtonProps) {
   const selectedVariant = useSelectedVariant(variants);


   return (
      <Button
         onClick={() => {
            
         }}
         size="lg"
         className="w-full disabled:cursor-not-allowed"
         disabled={!selectedVariant.availableForSale}
      >
         {"Add to Bag"}
      </Button>
   );
}