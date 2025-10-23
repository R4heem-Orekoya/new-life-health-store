import { Button } from "@/components/ui/button";
import {
   ArrowReloadHorizontalIcon,
   CheckmarkBadge01Icon,
   ContainerTruck02Icon,
   SavingsIcon,
   ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "~/public/fullmotionproduct.png";
import Aloevera from "~/public/aloe-vera.jpg";
import Zic from "~/public/zic.jpg";
import Heral from "~/public/heral.jpg";
import Formula from "~/public/formula.jpg";
import { Product } from "@/types";
import ProductCard from "@/components/product-card";

const bestSellingProducts: Product[] = [
   {
      id: "aloe-vera",
      image: Aloevera,
      name: "Gnld Neolife Aloe Vera Plus Orange – 1 Litre (Single)",
      description: "High-strength antioxidant formula for immune support.",
      excerpt: "Boost your immune system naturally with our premium Vitamin C.",
      price: { original: 9500, sale: 7500 },
      ratings: 4.8,
   },
   {
      id: "omega-3",
      image: Zic,
      name: "Gnld Neolife Chelated Zinc – 100 Tablets (Single)",
      description: "Supports heart, brain, and joint health.",
      excerpt: "Optimises immune function and minimises the severity and duration of the adverse effects of seasonal challenges.",
      price: { original: 12500, sale: 9800 },
      ratings: 4.6,
   },
   {
      id: "multivitamin",
      image: Heral,
      name: "Gnld Neolife Feminine Herbal Complex – 60 Tablets (Single)",
      description: "Complete nutrition for energy and vitality.",
      excerpt: "Supports calmness, boosts spirits, and promotes a positive mental attitude.",
      price: { original: 11000, sale: 9200 },
      ratings: 4.7,
   },
   {
      id: "collagen",
      image: Formula,
      name: "Gnld Neolife Formula IV Plus – 30 Sachets (Single)",
      description: "Promotes skin elasticity, hair growth, and joint health.",
      excerpt: "Broad spectrum of nutrients for optimal wellbeing and vitality in an iron-free formula.",
      price: { original: 15500, sale: 12900 },
      ratings: 4.9,
   },
];

export default function Home() {
   return (
      <>
         <section className="relative pt-12 xl:pt-12 grid grid-cols-1 lg:grid-cols-5 items-center md:min-h-[calc(100vh-64px)] gap-12 overflow-hidden">
            <div className="col-span-3 space-y-6 max-md:text-center">
               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
                  Challenge Yourself <br />
                  <span className="text-primary">To Live Better.</span>
               </h1>

               <h2 className="text-lg md:text-xl font-semibold text-foreground/90">
                  Backed by science. Trusted by thousands.
               </h2>

               <p className="text-muted-foreground max-w-md text-lg font-medium max-md:mx-auto">
                  We create safe, effective supplements and pharmaceutical-grade
                  solutions that help you feel stronger, think clearer, and live
                  healthier — every day.
               </p>

               <div>
                  <Button asChild size="lg" className="w-fit mt-2">
                     <Link href="/products" className="flex items-center gap-2">
                        Explore Our Products
                        <HugeiconsIcon
                           icon={ShoppingCart01Icon}
                           strokeWidth={1.8}
                           className="size-5"
                        />
                     </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium mt-4">
                     FDA-approved · Clinically tested · Trusted by professionals
                  </p>
               </div>
            </div>

            <div className="col-span-1 lg:col-span-2 aspect-square relative max-md:hidden">
               <div className="absolute -z-10 inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
               <div className="relative">
                  <Image
                     src={HeroImage}
                     alt="Health and wellness supplements"
                     width={600}
                     height={600}
                     className="object-contain mx-auto"
                  />
               </div>
            </div>
         </section>

         <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="max-sm:text-center">
               <div className="flex max-sm:flex-col items-center gap-2">
                  <div className="grid place-items-center bg-primary/10 size-10 text-primary rounded-full">
                     <HugeiconsIcon
                        icon={ContainerTruck02Icon}
                        strokeWidth={1.8}
                     />
                  </div>
                  <h4 className="font-semibold text-base">
                     Fast & Reliable Delivery
                  </h4>
               </div>
               <p className="text-sm text-muted-foreground mt-2">
                  Get your health essentials delivered safely to your door
                  within 2–4 business days.
               </p>
            </div>

            <div className="max-sm:text-center">
               <div className="flex max-sm:flex-col items-center gap-2">
                  <div className="grid place-items-center bg-primary/10 size-10 text-primary rounded-full">
                     <HugeiconsIcon
                        icon={CheckmarkBadge01Icon}
                        strokeWidth={1.8}
                     />
                  </div>
                  <h4 className="font-semibold text-base">
                     Clinically Approved Quality
                  </h4>
               </div>
               <p className="text-sm text-muted-foreground mt-2">
                  Every product is tested and certified to meet the highest
                  health and safety standards.
               </p>
            </div>

            <div className="max-sm:text-center">
               <div className="flex max-sm:flex-col items-center gap-2">
                  <div className="grid place-items-center bg-primary/10 size-10 text-primary rounded-full">
                     <HugeiconsIcon icon={SavingsIcon} strokeWidth={1.8} />
                  </div>
                  <h4 className="font-semibold text-base">
                     Affordable Wellness
                  </h4>
               </div>
               <p className="text-sm text-muted-foreground mt-2">
                  Premium supplements at honest prices — so better health stays
                  within reach.
               </p>
            </div>

            <div className="max-sm:text-center">
               <div className="flex max-sm:flex-col items-center gap-2">
                  <div className="grid place-items-center bg-primary/10 size-10 text-primary rounded-full">
                     <HugeiconsIcon
                        icon={ArrowReloadHorizontalIcon}
                        strokeWidth={1.8}
                     />
                  </div>
                  <h4 className="font-semibold text-base">
                     Hassle-Free Returns
                  </h4>
               </div>
               <p className="text-sm text-muted-foreground mt-2">
                  Not satisfied? Easily return unopened products within 14 days
                  for a full refund.
               </p>
            </div>
         </div>

         <section className="py-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-tight ">
               Best Selling Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
               {bestSellingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </div>
         </section>
      </>
   );
}
