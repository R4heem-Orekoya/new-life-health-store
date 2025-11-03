"use client";

import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { ShoppingBasket01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import Link from "next/link";
import CheckoutButton from "./checkout-button";
import ClearBagButton from "./clear-cart-button";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./cart-item";

export default function Cart() {
   const { items } = useCart();

   const cartTotal = items.reduce(
      (total, item) =>
         total + Number(item.variant.price.amount) * item.quantity,
      0,
   );

   return (
      <Sheet>
         <SheetTrigger asChild>
            <button className="flex items-center gap-1 relative text-primary cursor-pointer">
               <HugeiconsIcon
                  icon={ShoppingBasket01Icon}
                  strokeWidth={1.8}
                  className="size-6 opacity-70 hover:opacity-100"
               />
               <span className="mt-1 text-sm font-semibold">({items.length})</span>
            </button>
         </SheetTrigger>
         <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
               <SheetTitle className="text-2xl font-bold">
                  Cart ({items.length})
               </SheetTitle>
            </SheetHeader>

            <div className="flex-1 px-4">
               {items.length === 0 ? (
                  <div>
                     <h2 className="text-2xl font-semibold">
                        Don&apos;t miss out on the best deals!
                     </h2>
                     <p className="text-muted-foreground text-sm mt-2">
                        Your cart may be empty now, but let us help you fill it
                        up with amazing products.
                     </p>
                  </div>
               ) : (
                  <ScrollArea className="h-[calc(100vh-300px)] grid gap-4 pr-4">
                     {items.map((item) => (
                        <CartItem item={item} key={item.variant.id} />
                     ))}
                  </ScrollArea>
               )}
            </div>

            <SheetFooter>
               {items.length === 0 ? (
                  <Button asChild size="lg">
                     <Link href="/products">
                        <SheetClose>Explore Products</SheetClose>
                     </Link>
                  </Button>
               ) : (
                  <div className="grid gap-4">
                     <div className="grid gap-2">
                        <div className="flex justify-between items-center border-y py-2">
                           <span className="text-sm font-medium">
                              Subtotal:
                           </span>
                           <span className="text-xs font-medium">
                              {formatPrice({
                                 amount: cartTotal,
                                 currency: "NGN",
                              })}
                           </span>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2 mt-2">
                        <CheckoutButton />
                        <ClearBagButton />
                     </div>
                  </div>
               )}
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
}
