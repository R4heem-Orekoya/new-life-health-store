"use client";

import { ShoppingCart02Icon } from "@hugeicons/core-free-icons";
import Logo from "./logo";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const Navlinks = [
   {
      label: "About Us",
      href: "/about",
   },
   {
      label: "Blog",
      href: "/blog",
   },
   {
      label: "Products",
      href: "/products",
   },
];

export default function Navbar() {
   return (
      <header className="w-full justify-center">
         <nav className="flex items-center justify-between w-[min(1200px,90%)] mx-auto h-16">
            <Logo />

            <div className="flex items-center gap-16">
               <ul className="flex items-center gap-6">
                  {Navlinks.map((item) => (
                     <li className="text-muted-foreground font-medium tracking-tight hover:text-primary transition">
                        <Link href={item.href}>{item.label}</Link>
                     </li>
                     
                  ))}
               </ul>

               <button className="relative text-primary cursor-pointer">
                  <HugeiconsIcon
                     icon={ShoppingCart02Icon}
                     strokeWidth={1.8}
                     className="size-8  opacity-70 hover:opacity-100"
                  />
                  <span className="grid place-items-center absolute top-0 -right-1 size-4 text-[10px] font-semibold rounded-full bg-rose-500 text-white">
                     0
                  </span>
               </button>
            </div>
         </nav>
      </header>
   );
}
