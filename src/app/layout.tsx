import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
   variable: "--font-sans",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "New Life Health Store",
   description: "",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${inter.variable} antialiased`}
         >
            <Navbar />
            <main className="w-[min(1200px,90%)] mx-auto">
               {children}
               
            </main>
         </body>
      </html>
   );
}
