import { client } from ".";
import { productsQuery } from "./queries/products";

export type Sortkey = "TITLE" | "PRICE" | "CREATED_AT" | "BEST_SELLING"

type GetProductsParams = {
   take: number;
   query?: string;
   sortKey?: Sortkey;
   reverse?: boolean;
};

export async function getProducts({
   take,
   query,
   sortKey,
   reverse,
}: GetProductsParams) {
   const res = await client.request(productsQuery, {
      variables: {
         first: take,
         query,
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         sortKey: sortKey as any,
         reverse,
      },
   });

   return res.data?.products.edges.map((edge) => edge.node);
}
