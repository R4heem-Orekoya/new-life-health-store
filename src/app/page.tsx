import { Button } from "@/components/ui/button";
import {
   ArrowReloadHorizontalIcon,
   CheckmarkBadge01Icon,
   ContainerTruck02Icon,
   QuotesIcon,
   SavingsIcon,
   ShoppingCart01Icon,
   Facebook01Icon,
   SmartPhone01Icon,
   Mail01Icon,
   YoutubeIcon,
   TwitterIcon,
   InstagramIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "~/public/fullmotionproduct.png";
import Aloevera from "~/public/aloe-vera.jpg";
import Zic from "~/public/zic.jpg";
import Heral from "~/public/heral.jpg";
import Formula from "~/public/formula.jpg";
import Family from "~/public/family.png";
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
      excerpt:
         "Optimises immune function and minimises the severity of seasonal challenges.",
      price: { original: 12500, sale: 9800 },
      ratings: 4.6,
   },
   {
      id: "multivitamin",
      image: Heral,
      name: "Gnld Neolife Feminine Herbal Complex – 60 Tablets (Single)",
      description: "Complete nutrition for energy and vitality.",
      excerpt:
         "Supports calmness, boosts spirits, and promotes a positive mental attitude.",
      price: { original: 11000, sale: 9200 },
      ratings: 4.7,
   },
   {
      id: "collagen",
      image: Formula,
      name: "Gnld Neolife Formula IV Plus – 30 Sachets (Single)",
      description: "Promotes skin elasticity, hair growth, and joint health.",
      excerpt:
         "Broad spectrum of nutrients for optimal wellbeing and vitality.",
      price: { original: 15500, sale: 12900 },
      ratings: 4.9,
   },
];

const testimonials = [
   {
      id: 1,
      name: "Dr. Tunde Adebayo",
      role: "Nutrition Expert, Lagos",
      message:
         "NeoLife products have consistently impressed me. Their supplements are high-quality and deliver real, noticeable results for my clients’ overall wellness.",
      image: Family,
   },
   {
      id: 2,
      name: "Ngozi Eze",
      role: "Satisfied Customer",
      message:
         "After trying NeoLife’s Aloe Vera Plus, I feel more energetic and my digestion has improved tremendously. Highly recommend to anyone serious about health.",
      image: Family,
   },
   {
      id: 3,
      name: "Ifeanyi Okoro",
      role: "Fitness Coach",
      message:
         "The Formula IV Plus is a game changer. My recovery time after workouts has improved, and I feel sharper mentally too. This is quality nutrition.",
      image: Family,
   },
];

export default function Home() {
   return (
      <>
         <div className="w-[min(1200px,90%)] mx-auto">
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
                     We create safe, effective supplements and
                     pharmaceutical-grade solutions that help you feel stronger,
                     think clearer, and live healthier — every day.
                  </p>

                  <div>
                     <Button asChild size="lg" className="w-fit mt-2">
                        <Link
                           href="/products"
                           className="flex items-center gap-2"
                        >
                           Explore Our Products
                           <HugeiconsIcon
                              icon={ShoppingCart01Icon}
                              strokeWidth={1.8}
                              className="size-5"
                           />
                        </Link>
                     </Button>
                     <p className="text-sm text-muted-foreground font-medium mt-4">
                        FDA-approved · Clinically tested · Trusted by
                        professionals
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

            <section className="py-24">
               <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                     Best Selling Products
                  </h2>
                  <p className="text-muted-foreground mt-2">
                     Our customers’ most-loved supplements for lasting health
                     and vitality.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {bestSellingProducts.map((product) => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>

               <div className="flex justify-center mt-12">
                  <Button asChild size="lg">
                     <Link href="/products">
                        View All Products{" "}
                        <HugeiconsIcon
                           icon={ShoppingCart01Icon}
                           strokeWidth={1.8}
                           className="size-5"
                        />
                     </Link>
                  </Button>
               </div>
            </section>
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

         <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  What Our Customers Say
               </h2>
               <p className="text-muted-foreground mt-2 mb-12 max-w-2xl mx-auto">
                  Real stories from real people whose lives have been
                  transformed by NeoLife nutrition.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((t) => (
                     <div
                        key={t.id}
                        className="bg-background border rounded-xl p-6 flex flex-col items-center text-center"
                     >
                        <HugeiconsIcon
                           icon={QuotesIcon}
                           strokeWidth={1.5}
                           className="size-8 text-primary mb-4"
                        />
                        <p className="font-semibold text-muted-foreground italic">
                           “{t.message}”
                        </p>
                        <div className="flex flex-col items-center mt-6">
                           <Image
                              src={t.image}
                              alt={t.name}
                              width={56}
                              height={56}
                              className="rounded-full object-cover"
                           />
                           <h4 className="font-semibold mt-3">{t.name}</h4>
                           <span className="text-xs font-medium text-muted-foreground">
                              {t.role}
                           </span>
                        </div>
                     </div>
                  ))} 
                                    {testimonials.map((t) => (
                     <div
                        key={t.id}
                        className="bg-background border rounded-xl p-6 flex flex-col items-center text-center"
                     >
                        <HugeiconsIcon
                           icon={QuotesIcon}
                           strokeWidth={1.5}
                           className="size-8 text-primary mb-4"
                        />
                        <p className="font-semibold text-muted-foreground italic">
                           “{t.message}”
                        </p>
                        <div className="flex flex-col items-center mt-6">
                           <Image
                              src={t.image}
                              alt={t.name}
                              width={56}
                              height={56}
                              className="rounded-full object-cover"
                           />
                           <h4 className="font-semibold mt-3">{t.name}</h4>
                           <span className="text-xs font-medium text-muted-foreground">
                              {t.role}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <footer className="bg-foreground text-white">
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
               <div>
                  <h3 className="text-xl font-semibold tracking-tight text-primary">
                     NeoLife Wellness
                  </h3>
                  <p className="text-muted/60 font-medium text-sm mt-3 leading-relaxed">
                     Empowering healthier, happier lives through science-backed,
                     whole-food nutrition and natural supplements.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                     <Link
                        href="#"
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition"
                     >
                        <HugeiconsIcon
                           icon={Facebook01Icon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                     </Link>
                     <Link
                        href="#"
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition"
                     >
                        <HugeiconsIcon
                           icon={InstagramIcon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                     </Link>
                     <Link
                        href="#"
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition"
                     >
                        <HugeiconsIcon
                           icon={TwitterIcon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                     </Link>
                     <Link
                        href="#"
                        className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition"
                     >
                        <HugeiconsIcon
                           icon={YoutubeIcon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                     </Link>
                  </div>
               </div>

               <div>
                  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-muted/60 font-medium">
                     <li>
                        <Link href="/products" className="hover:text-primary">
                           Shop Products
                        </Link>
                     </li>
                     <li>
                        <Link href="/about" className="hover:text-primary">
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/testimonials"
                           className="hover:text-primary"
                        >
                           Testimonials
                        </Link>
                     </li>
                     <li>
                        <Link href="/blog" className="hover:text-primary">
                           Health Blog
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-semibold text-lg mb-4">Support</h4>
                  <ul className="space-y-2 text-sm text-muted/60 font-medium">
                     <li>
                        <Link href="/contact" className="hover:text-primary">
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link href="/faq" className="hover:text-primary">
                           FAQs
                        </Link>
                     </li>
                     <li>
                        <Link href="/shipping" className="hover:text-primary">
                           Shipping & Delivery
                        </Link>
                     </li>
                     <li>
                        <Link href="/returns" className="hover:text-primary">
                           Returns & Refunds
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
                  <ul className="space-y-3 text-sm text-muted/60">
                     <li className="flex items-center gap-2">
                        <HugeiconsIcon
                           icon={Mail01Icon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                        <a href="mailto:support@neolife.com">
                           support@neolife.com
                        </a>
                     </li>
                     <li className="flex items-center gap-2">
                        <HugeiconsIcon
                           icon={SmartPhone01Icon}
                           strokeWidth={1.8}
                           className="size-4 text-primary"
                        />
                        <a href="tel:+2348000000000">+234 800 000 0000</a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="py-6 text-center text-sm text-muted/50 font-medium">
               © {new Date().getFullYear()} NeoLife Wellness. All rights
               reserved.
            </div>
         </footer>
      </>
   );
}
