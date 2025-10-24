export const productsQuery = `
   #graphql
   query GetProducts(
      $first: Int!,
      $query: String,
      $sortKey: ProductSortKeys,
      $reverse: Boolean
   ) {
      products(
         first: $first,
         query: $query,
         sortKey: $sortKey,
         reverse: $reverse
      ) {
         edges {
         node {
            id
            title
            handle
            description
            images(first: 1) {
               edges {
                  node {
                     url
                     altText
                  }
               }
            }
            variants(first: 1) {
               edges {
               node {
                  price {
                     amount
                     currencyCode
                  }
                  compareAtPrice {
                     amount
                     currencyCode
                  }
               }
               }
            }
         }
         }
      }
   }
`;
