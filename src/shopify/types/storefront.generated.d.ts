/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  first: StorefrontTypes.Scalars['Int']['input'];
  query?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
}>;


export type GetProductsQuery = { products: { edges: Array<{ node: (
        Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'description'>
        & { images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText'> }> }, variants: { edges: Array<{ node: { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }> } }
      ) }> } };

interface GeneratedQueryTypes {
  "\n   #graphql\n   query GetProducts(\n      $first: Int!,\n      $query: String,\n      $sortKey: ProductSortKeys,\n      $reverse: Boolean\n   ) {\n      products(\n         first: $first,\n         query: $query,\n         sortKey: $sortKey,\n         reverse: $reverse\n      ) {\n         edges {\n         node {\n            id\n            title\n            handle\n            description\n            images(first: 1) {\n               edges {\n                  node {\n                     url\n                     altText\n                  }\n               }\n            }\n            variants(first: 1) {\n               edges {\n               node {\n                  price {\n                     amount\n                     currencyCode\n                  }\n                  compareAtPrice {\n                     amount\n                     currencyCode\n                  }\n               }\n               }\n            }\n         }\n         }\n      }\n   }\n": {return: GetProductsQuery, variables: GetProductsQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
