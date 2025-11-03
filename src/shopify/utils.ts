import { CartItem } from "@/hooks/use-cart";
import { client } from ".";
import { productQuery } from "./queries/product";
import { productsQuery } from "./queries/products";
import { checkout } from "./queries/checkout";

export type Sortkey = "TITLE" | "PRICE" | "CREATED_AT" | "BEST_SELLING";

type GetProductsParams = {
   take: number;
   after?: string;
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

   const products = res.data?.products.edges.map((edge) => ({
      ...edge.node,
      cursor: edge.cursor,
   }));

   return {
      products,
      pageInfo: res.data?.products.pageInfo,
   };
}

export async function getProduct({ handle }: { handle: string }) {
   const res = await client.request(productQuery, {
      variables: {
         handle,
      },
   });

   return res.data?.product;
}

export async function createCheckout(items: CartItem[]) {
   const lines = items.map((item) => ({
      merchandiseId: item.variant.id,
      quantity: item.quantity,
   }));

   const res = await client.request(checkout, {
      variables: {
         input: { lines },
      },
   });

   if (res.errors) {
      throw new Error(res.errors.message ?? "Something went wrong!");
   }

   return res.data?.cartCreate;
}
