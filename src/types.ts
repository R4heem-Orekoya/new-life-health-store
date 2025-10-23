import { StaticImageData } from "next/image";

export interface Product {
   id: string;
   image: StaticImageData,
   name: string;
   description: string;
   excerpt: string;
   price: {
      original: number;
      sale: number
   };
   ratings: number;
}