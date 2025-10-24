import Link from "next/link";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
   ArrowReloadHorizontalIcon,
   CheckmarkBadge01Icon,
   ContainerTruck02Icon,
   SavingsIcon,
   ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import HeroImage from "~/public/fullmotionproduct.png";

export default function Hero() {
   return (
      <>
         <section className="relative pt-16 grid grid-cols-1 lg:grid-cols-5 items-center md:min-h-[calc(100dvh-64px)] gap-12 overflow-hidden">
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
               <Image
                  src={HeroImage}
                  alt="Health and wellness supplements"
                  width={600}
                  height={600}
                  className="object-contain mx-auto"
               />
            </div>
         </section>

         <section className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
               {
                  title: "Fast & Reliable Delivery",
                  desc: "Get your health essentials delivered safely to your door within 2–4 business days.",
                  icon: ContainerTruck02Icon,
               },
               {
                  title: "Clinically Approved Quality",
                  desc: "Every product is tested and certified to meet the highest health and safety standards.",
                  icon: CheckmarkBadge01Icon,
               },
               {
                  title: "Affordable Wellness",
                  desc: "Premium supplements at honest prices — so better health stays within reach.",
                  icon: SavingsIcon,
               },
               {
                  title: "Hassle-Free Returns",
                  desc: "Not satisfied? Easily return unopened products within 14 days for a full refund.",
                  icon: ArrowReloadHorizontalIcon,
               },
            ].map(({ title, desc, icon: Icon }, idx) => (
               <div key={idx} className="max-sm:text-center space-y-2">
                  <div className="flex max-sm:flex-col items-center gap-2">
                     <div className="grid place-items-center bg-primary/10 size-10 text-primary rounded-full">
                        <HugeiconsIcon icon={Icon} strokeWidth={1.8} />
                     </div>
                     <h4 className="font-semibold text-base">{title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{desc}</p>
               </div>
            ))}
         </section>
      </>
   );
}
