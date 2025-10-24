import { Button } from "@/components/ui/button";
import { ShoppingCart01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Hero from "@/components/section/hero";
import BestSelling from "@/components/section/best-selling";
import Footer from "@/components/section/footer";
import Testimonials from "@/components/section/testimonials";

export default function Home() {
   return (
      <>
         <div className="w-[min(1200px,90%)] mx-auto">
            <Hero />
            <BestSelling />
         </div>

         <section className="py-24 bg-foreground text-white">
            <div className="w-[90%] max-w-4xl mx-auto">
               <div className="grid grid-cols-1 gap-8">
                  <p className="col-span-3 text-2xl sm:text-2xl md:text-4xl text-balance tracking-tight font-semibold">
                     Nourish your body and mind with science-backed, whole-food
                     supplements designed to help you live stronger, feel
                     better, and thrive every day.
                  </p>
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
               </div>
            </div>
         </section>

         <Testimonials />
         <Footer />
      </>
   );
}
