export const productQuery = `
   #graphql
   query productSlug($handle: String!) {
      product(handle: $handle) {
         id
         title 
         productType
         descriptionHtml
         images(first: 5) {
            edges {
               node {
                  url
                  altText
               }
            }
         }
         variants(first: 10) {
            edges {
               node {
                  id
                  title
                  quantityAvailable 
                  price {
                     amount
                     currencyCode
                  }
                  compareAtPrice {
                     amount
                     currencyCode
                  }
                  availableForSale
                  selectedOptions {
                     name
                     value
                  }
               }
            }
         }
      }
   }
`;