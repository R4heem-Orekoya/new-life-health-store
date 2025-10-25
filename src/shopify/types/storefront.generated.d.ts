/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ProductSlugQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type ProductSlugQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'title' | 'productType' | 'descriptionHtml'>
    & { images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText'> }> }, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable' | 'availableForSale'>
          & { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
        ) }> } }
  )> };

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  first?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Int']['input']>;
  after?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  query?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  sortKey?: StorefrontTypes.InputMaybe<StorefrontTypes.ProductSortKeys>;
  reverse?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Boolean']['input']>;
}>;


export type GetProductsQuery = { products: { edges: Array<(
      Pick<StorefrontTypes.ProductEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle' | 'productType' | 'description'>
        & { images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText'> }> }, variants: { edges: Array<{ node: { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, compareAtPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> } }> } }
      ) }
    )>, pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'> } };

interface GeneratedQueryTypes {
  "\n   #graphql\n   query productSlug($handle: String!) {\n      product(handle: $handle) {\n         id\n         title \n         productType\n         descriptionHtml\n         images(first: 5) {\n            edges {\n               node {\n                  url\n                  altText\n               }\n            }\n         }\n         variants(first: 10) {\n            edges {\n               node {\n                  id\n                  title\n                  quantityAvailable \n                  price {\n                     amount\n                     currencyCode\n                  }\n                  compareAtPrice {\n                     amount\n                     currencyCode\n                  }\n                  availableForSale\n                  selectedOptions {\n                     name\n                     value\n                  }\n               }\n            }\n         }\n      }\n   }\n": {return: ProductSlugQuery, variables: ProductSlugQueryVariables},
  "\n   #graphql\n   query GetProducts(\n      $first: Int,\n      $after: String,\n      $query: String,\n      $sortKey: ProductSortKeys,\n      $reverse: Boolean\n   ) {\n      products(\n         first: $first, \n         after: $after,\n         query: $query,\n         sortKey: $sortKey,\n         reverse: $reverse\n      ) {\n         edges { \n            cursor\n            node {\n               id\n               title\n               handle\n               productType\n               description\n               images(first: 1) {\n                  edges {\n                     node {\n                        url\n                        altText\n                     }\n                  }\n               }\n               variants(first: 1) {\n                  edges {\n                  node {\n                     price {\n                        amount\n                        currencyCode\n                     }\n                     compareAtPrice {\n                        amount\n                        currencyCode\n                     }\n                  }\n                  }\n               }\n            }\n         } \n         pageInfo {\n            hasNextPage\n            hasPreviousPage\n            endCursor\n            startCursor\n         }\n      }\n   }\n": {return: GetProductsQuery, variables: GetProductsQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
