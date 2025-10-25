import { Product, ProductVariantEdge } from "@/shopify/types/storefront.types";
import { getProduct, getProducts } from "@/shopify/utils";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { customRender } from "@/lib/react-html-parser";
import ProductPrice from "@/components/product/product-price";
import VariantSelector from "@/components/product/variant-selector";
import Image from "next/image";
import AddToCartButton from "@/components/add-to-cart-btn";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
   FavouriteIcon,
   ShieldUserIcon,
   TruckDeliveryIcon,
} from "@hugeicons/core-free-icons";
import RelatedProducts from "@/components/product/related-products"; 
 
export async function generateStaticParams() {
   const data = await getProducts({ 
      take: 200
   });

   return data.products?.map((product) => ({
      handle: product.handle,
   }))  ?? [];
}

export default async function Page({
   params,
}: {
   params: Promise<{ handle: string }>;
}) { 
   const handle = (await params).handle;
   const product = (await getProduct({ handle })) as Product;

   if (!product) {
      notFound();
   }  
   
   return (
      <section className="container py-16">
         <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
               Home
            </Link>
            <ChevronRight size={14} />
            <Link
               href="/products"
               className="hover:text-foreground transition-colors"
            >
               Products
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium shrink-0">
               {product.title}
            </span>
         </nav>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative aspect-square border rounded-xl overflow-hidden">
               <Image
                  src={product.images.edges[0].node.url}
                  alt={product.title}
                  fill
                  className="object-contain p-6"
               />
            </div>

            <div className="flex flex-col gap-6 md:py-4">
               <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                  {product.title}
               </h1>

               <ProductPrice
                  variants={product.variants.edges as ProductVariantEdge[]}
               />

               {product.variants.edges.length > 1 && (
                  <div className="flex flex-col gap-2">
                     <span className="text-sm font-medium text-zinc-500">
                        Select Option
                     </span>
                     <VariantSelector
                        variants={
                           product.variants.edges as ProductVariantEdge[]
                        }
                     />
                  </div>
               )}

               <AddToCartButton
                  product={product}
                  variants={product.variants.edges as ProductVariantEdge[]}
               />
               <p className="text-muted-foreground font-medium">
                  Category:{" "}
                  <span className="text-primary font-semibold">
                     {product.productType
                        ? product.productType
                        : "Uncategorized"}
                  </span>
               </p>

               <hr className="border-zinc-200 my-4" />

               <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                     <HugeiconsIcon icon={ShieldUserIcon} className="size-4" />
                     100% Authentic & Verified Products
                  </li>
                  <li className="flex items-center gap-2">
                     <HugeiconsIcon
                        icon={TruckDeliveryIcon}
                        className="size-4"
                     />
                     Nationwide Delivery (1–3 Days)
                  </li>
                  <li className="flex items-center gap-2">
                     <HugeiconsIcon icon={FavouriteIcon} className="size-4" />
                     Recommended by Customers
                  </li>
               </ul>
            </div>
         </div>

         <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-8">
               Product Description
            </h2>
            <div className="text-muted-foreground text-sm leading-relaxed">
               {parse(product.descriptionHtml, customRender)}
            </div>
         </section>
                        
         <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-xl md:text-2xl font-semibold mb-8">Related Products</h3>
            <div className="mt-6">
               <RelatedProducts
                  type={product.productType}
                  productId={product.id}
               />
            </div>
         </div>
      </section>
   );
}
