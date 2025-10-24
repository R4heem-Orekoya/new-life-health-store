import { HugeiconsIcon } from "@hugeicons/react"; 
import {
   Facebook01Icon,
   SmartPhone01Icon,
   Mail01Icon,
   YoutubeIcon,
   TwitterIcon,
   InstagramIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function Footer() {
   return (
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
                     <Link href="/testimonials" className="hover:text-primary">
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
            © {new Date().getFullYear()} NeoLife Wellness. All rights reserved.
         </div>
      </footer>
   );
}
