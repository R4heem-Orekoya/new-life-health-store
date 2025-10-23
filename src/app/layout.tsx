import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Manrope({
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
            <main>
               {children}
               
            </main>
         </body>
      </html>
   );
}
