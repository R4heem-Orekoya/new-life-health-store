export const productsQuery = `
   #graphql
   query GetProducts(
      $first: Int,
      $after: String,
      $query: String,
      $sortKey: ProductSortKeys,
      $reverse: Boolean
   ) {
      products(
         first: $first, 
         after: $after,
         query: $query,
         sortKey: $sortKey,
         reverse: $reverse
      ) {
         edges { 
            cursor
            node {
               id
               title
               handle
               productType
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
         pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
         }
      }
   }
`;
