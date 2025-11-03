"use client";

import Cart from "./cart/cart";
import Logo from "./logo";
import Link from "next/link";

const Navlinks = [
   {
      label: "About Us",
      href: "/about",
   },
   {
      label: "Products",
      href: "/products",
   },
   {
      label: "Join Neolife",
      href: "https://shopneolife.com/olanikebello/enrollment/enrollmentconfiguration",
   },
];

export default function Navbar() {
   return (
      <header className="w-full justify-center">
         <nav className="flex items-center justify-between w-[min(1200px,90%)] mx-auto h-16">
            <Link href="/">
               <Logo />
            </Link>

            <div className="flex items-center gap-12">
               <ul className="flex items-center gap-6 max-sm:hidden">
                  {Navlinks.map((item) => (
                     <li
                        key={item.href}
                        className="text-muted-foreground font-medium tracking-tight hover:text-primary transition"
                     >
                        <Link
                           href={item.href}
                           target={
                              item.href.startsWith("https")
                                 ? "_blank"
                                 : undefined
                           }
                        >
                           {item.label}
                        </Link>
                     </li>
                  ))}
               </ul>

               <Cart />
            </div>
         </nav>
      </header>
   );
}
