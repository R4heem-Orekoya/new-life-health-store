import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Product } from "@/shopify/types/storefront.types";

interface ProductCardProps {
   product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
   const { images, handle, variants, title, description } = product;

   const firstVariant = variants.edges[0]?.node;
   const price = parseFloat(firstVariant?.price.amount || "0");
   const compareAtPrice = parseFloat(
      firstVariant?.compareAtPrice?.amount || "0"
   );
   const isOnSale = compareAtPrice > price;

   const imageUrl = images.edges[0]?.node.url || "/placeholder.png";

   return (
      <div className="group col-span-1 duration-300">
         <div className="relative w-full aspect-square border rounded-xl overflow-hidden">
            <Image
               src={images.edges[0].node.url}
               alt={title}
               fill
               className="object-contain scale-90"
            />
         </div>

         <div className="mt-4">
            <h3 className="text-base font-semibold leading-tight line-clamp-2">
               {title}
            </h3>

            <div className="flex items-center gap-2 mt-4">
               <span className="text-lg font-bold text-primary">
                  ₦{price.toLocaleString()}
               </span>
               {isOnSale && (
                  <span className="text-sm text-muted-foreground line-through">
                     ₦{compareAtPrice.toLocaleString()}
                  </span>
               )}
            </div>

            <div className="flex items-center gap-1 text-amber-500 mt-3">
               {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                     key={i}
                     size={14}
                     fill={i < 4 ? "currentColor" : "none"}
                     strokeWidth={1.5}
                  />
               ))}
               <span className="text-xs text-muted-foreground ml-1">(4.0)</span>
            </div>

            <Button asChild variant="outline" className="w-full mt-4">
               <Link href={`/products/${handle}`}>View Details</Link>
            </Button>
         </div>
      </div>
   );
}
