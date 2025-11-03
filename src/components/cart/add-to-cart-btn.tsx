"use client";

import { toast } from "sonner";
import { Product } from "@/shopify/types/storefront.types";
import { useSelectedVariant } from "@/hooks/use-selected-variant";
import { Button } from "../ui/button";
import { useCart } from "@/hooks/use-cart";

interface AddToCartButtonProps {
   product: Product;
   variants: Product["variants"]["edges"];
}

export default function AddToCartButton({
   product,
   variants,
}: AddToCartButtonProps) {
   const { addItem, removeItem, items } = useCart();
   const selectedVariant = useSelectedVariant(variants);

   const variantInCart = items.some(
      (item) => item.variant.id === selectedVariant.id,
   );

   return (
      <Button
         onClick={() => {
            if (variantInCart) {
               removeItem(selectedVariant.id);
               toast.success("Removed item from bag!");
            } else {
               addItem(product, selectedVariant);
               toast.success("Added item to bag!");
            }
         }}
         size="lg"
         className="w-full disabled:cursor-not-allowed"
         disabled={!selectedVariant.availableForSale}
      >
         {!selectedVariant.availableForSale
            ? "Out of stock!"
            : variantInCart
              ? "Remove from cart"
              : "Add to cart"}
      </Button>
   );
}
