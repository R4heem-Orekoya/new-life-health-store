import { Sortkey } from "./shopify/utils";

type Filter = {
   label: string;
   value: string;
   sortKey: Sortkey;
   reverse: boolean;
};

export const filters: Filter[] = [
   {
      label: "Latest",
      value: "latest_desc",
      sortKey: "CREATED_AT",
      reverse: true,
   },
   {
      label: "Price: Low to High",
      value: "price_asc",
      sortKey: "PRICE",
      reverse: false,
   },
   {
      label: "Price: High to Low",
      value: "price_desc",
      sortKey: "PRICE",
      reverse: true,
   },
];
