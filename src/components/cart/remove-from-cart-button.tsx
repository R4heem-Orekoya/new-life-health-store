"use client"

import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon } from "@hugeicons/core-free-icons";

interface RemoveFromCartButtonProps {
   variantId: string;
}

export default function RemoveFromCartButton({ variantId }: RemoveFromCartButtonProps) {
   const { removeItem } = useCart()
   
   return (
      <Button 
         size="icon" 
         variant="ghost"
         className="size-8 hover:bg-destructive/10 hover:text-destructive text-destructive"
         onClick={() => {
            removeItem(variantId)
            toast.success("Item removed from bag!")
         }}
      >
         <HugeiconsIcon icon={Delete02Icon} />
      </Button>
   );
}