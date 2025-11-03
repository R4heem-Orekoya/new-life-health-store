"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { createCheckoutAction } from "@/actions/create-checkout";
import { useState } from "react";

export default function CheckoutButton() {
   const { items } = useCart();
   const [isLoading, setIsLoading] = useState(false);

   async function checkout() {
      setIsLoading(true);
      try {
         if (items.length === 0) return;

         const res = await createCheckoutAction(items);

         if (res?.userErrors[0]) {
            toast.error(res?.userErrors[0].message);
            setIsLoading(false);
            return;
         }

         console.log(res);
         setIsLoading(false);
         window.location.href = res?.cart?.checkoutUrl;
      } catch (error) {
         toast.error("Checkout failed.");
         console.error(error);
         setIsLoading(false);
      }
   }

   return (
      <Button disabled={isLoading} type="button" onClick={async () => await checkout()}>
         Go To Checkout
         {isLoading && (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
            >
               <circle cx="4" cy="12" r="0" fill="currentColor">
                  <animate
                     fill="freeze"
                     attributeName="r"
                     begin="0;SVGUppsBdVN.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="0;3"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVGqCgsydxJ.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="4;12"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG3PwDNd6F.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="12;20"
                  />
                  <animate
                     id="SVG3V8yEdYE"
                     fill="freeze"
                     attributeName="r"
                     begin="SVG6wCQhd9Q.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="3;0"
                  />
                  <animate
                     id="SVGUppsBdVN"
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG3V8yEdYE.end"
                     dur="0.001s"
                     values="20;4"
                  />
               </circle>
               <circle cx="4" cy="12" r="3" fill="currentColor">
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="0;SVGUppsBdVN.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="4;12"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVGqCgsydxJ.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="12;20"
                  />
                  <animate
                     id="SVG4PgJdbds"
                     fill="freeze"
                     attributeName="r"
                     begin="SVG3PwDNd6F.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="3;0"
                  />
                  <animate
                     id="SVG6wCQhd9Q"
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG4PgJdbds.end"
                     dur="0.001s"
                     values="20;4"
                  />
                  <animate
                     fill="freeze"
                     attributeName="r"
                     begin="SVG6wCQhd9Q.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="0;3"
                  />
               </circle>
               <circle cx="12" cy="12" r="3" fill="currentColor">
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="0;SVGUppsBdVN.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="12;20"
                  />
                  <animate
                     id="SVG38aCdcdI"
                     fill="freeze"
                     attributeName="r"
                     begin="SVGqCgsydxJ.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="3;0"
                  />
                  <animate
                     id="SVG3PwDNd6F"
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG38aCdcdI.end"
                     dur="0.001s"
                     values="20;4"
                  />
                  <animate
                     fill="freeze"
                     attributeName="r"
                     begin="SVG3PwDNd6F.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="0;3"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG6wCQhd9Q.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="4;12"
                  />
               </circle>
               <circle cx="20" cy="12" r="3" fill="currentColor">
                  <animate
                     id="SVGwaWzveSq"
                     fill="freeze"
                     attributeName="r"
                     begin="0;SVGUppsBdVN.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="3;0"
                  />
                  <animate
                     id="SVGqCgsydxJ"
                     fill="freeze"
                     attributeName="cx"
                     begin="SVGwaWzveSq.end"
                     dur="0.001s"
                     values="20;4"
                  />
                  <animate
                     fill="freeze"
                     attributeName="r"
                     begin="SVGqCgsydxJ.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="0;3"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG3PwDNd6F.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="4;12"
                  />
                  <animate
                     fill="freeze"
                     attributeName="cx"
                     begin="SVG6wCQhd9Q.end"
                     calcMode="spline"
                     dur="0.5s"
                     keySplines=".36,.6,.31,1"
                     values="12;20"
                  />
               </circle>
            </svg>
         )}
      </Button>
   );
}
