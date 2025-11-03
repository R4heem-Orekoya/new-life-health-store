"use client";

import { useState } from "react";
import Cart from "./cart/cart";
import Logo from "./logo";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

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
   const [isOpen, setIsOpen] = useState(false);

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
                           rel={
                              item.href.startsWith("https")
                                 ? "noopener noreferrer"
                                 : undefined
                           }
                        >
                           {item.label}
                        </Link>
                     </li>
                  ))}
               </ul>

               <div className="flex items-center gap-4">
                  <Cart />
                  <Button
                     className="cursor-pointer sm:hidden"
                     size="icon"
                     onClick={() => setIsOpen(!isOpen)}
                  >
                     {isOpen ? (
                        <HugeiconsIcon icon={Cancel01Icon} />
                     ) : (
                        <HugeiconsIcon icon={Menu01Icon} />
                     )}
                  </Button>
               </div>
            </div>

            {isOpen && (
               <ul className="absolute top-16 left-0 z-9999 w-full bg-white border-y flex flex-col gap-4 p-6 sm:hidden">
                  {Navlinks.map((item) => (
                     <li key={item.href} className="text-center font-medium">
                        <Link href={item.href}>{item.label}</Link>
                     </li>
                  ))}
               </ul>
            )}
         </nav>
      </header>
   );
}
