import Image from "next/image";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
   product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
   const { id, name, excerpt, price, ratings, image } = product;

   return (
      <div className="group col-span-1 duration-300">
         <div className="relative w-full aspect-square border rounded-xl overflow-hidden">
            <Image
               src={image}
               alt={name}
               fill
               className="object-contain scale-90"
            />
         </div>

         <div className="mt-4">
            <h3 className="text-base font-semibold leading-tight line-clamp-2">
               {name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
               {excerpt}
            </p>

            <div className="flex items-center gap-2 mt-4">
               <span className="text-lg font-bold text-primary">
                  ₦{price.sale.toLocaleString()}
               </span>
               {price.original > price.sale && (
                  <span className="text-sm text-muted-foreground line-through">
                     ₦{price.original.toLocaleString()}
                  </span>
               )}
            </div>

            <div className="flex items-center gap-1 text-amber-500 mt-3">
               {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                     key={i}
                     size={14}
                     fill={i < Math.round(ratings) ? "currentColor" : "none"}
                     strokeWidth={1.5}
                  />
               ))}
               <span className="text-xs text-muted-foreground ml-1">
                  ({ratings.toFixed(1)})
               </span>
            </div>

            <Button asChild variant="outline" className="w-full mt-4">
               <Link href={`/products/${id}`}>View Details</Link>
            </Button>
         </div>
      </div>
   );
}
