"use client";

import { Button } from "../ui/button";
import NumberFlow from "@number-flow/react";
import { CartItem, useCart } from "@/hooks/use-cart";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";

interface QuantityButtonsProps {
   item: CartItem;
}

export default function QuantityButtons({ item }: QuantityButtonsProps) {
   const { increaseItem, decreaseItem } = useCart();

   return (
      <div className="h-8 bg-secondary flex items-center gap-1 rounded-3xl">
         <Button
            size="icon"
            variant="ghost"
            className="size-8"
            onClick={() => decreaseItem(item.variant.id)}
         >
            <HugeiconsIcon icon={PlusSignIcon} className="size-3" strokeWidth={1.8} />
         </Button>

         <NumberFlow
            value={item.quantity}
            className="text-xs"
            transformTiming={{ duration: 300 }}
            spinTiming={{ duration: 300 }}
            opacityTiming={{ duration: 350, easing: "ease-out" }}
         />

         <Button
            size="icon"
            variant="ghost"
            className="size-8"
            onClick={() => increaseItem(item.variant.id)}
         >
            <HugeiconsIcon icon={MinusSignIcon} className="size-3" strokeWidth={1.8} />
         </Button>
      </div>
   );
}