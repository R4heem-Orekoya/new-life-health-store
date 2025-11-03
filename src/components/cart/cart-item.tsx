"use client";

import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import QuantityButtons from "./quantity-button";
import RemoveFromCartButton from "./remove-from-cart-button";
import { CartItem as TCartItem } from "@/hooks/use-cart";

interface CartItemProps {
   item: TCartItem;
}

export default function CartItem({ item }: CartItemProps) {
   return (
      <div className="flex items-center gap-4 pb-4">
         <div className="relative w-24 aspect-3/4 rounded border overflow-hidden">
            <Image
               src={item.product.images.edges[0].node.url}
               alt={item.product.title}
               fill
               className="object-contain"
            />
         </div>
         <div className="flex-1 flex flex-col gap-2">
               <div className="text-sm text-muted-foreground font-medium">
                  <p className="line-clamp-2">{item.product.title}</p>
               </div>
               <p className="font-medium text-primary">
                  {formatPrice({
                     amount: item.variant.price.amount * item.quantity,
                     currency: item.variant.price.currencyCode,
                  })}
               </p>

            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <QuantityButtons item={item} />
                  <p className="text-xs font-medium">
                  {formatPrice({
                     amount: item.variant.price.amount,
                     currency: item.variant.price.currencyCode,
                  })}
               </p>
               </div>
               <RemoveFromCartButton variantId={item.variant.id} />
            </div>
         </div>
      </div>
   );
}
