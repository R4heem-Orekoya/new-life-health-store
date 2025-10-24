import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset";

export default {
   schema: `${process.env.SHOPIFY_STORE_DOMAIN}/storefront-graphql-direct-proxy`,
   documents: ["*.ts", "!node_modules"],
   projects: {
      default: shopifyApiProject({
         apiType: ApiType.Storefront,
         apiVersion: "2025-10",
         outputDir: "./src/shopify/types",
      }),
   },
};