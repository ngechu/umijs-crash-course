import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/products/:id", component: "@/pages/products/ViewProduct" },

  ],

  npmClient: "yarn",
  define: { BASE_URL: "https://fakestoreapi.com" },
  tailwindcss: {},
  // plugins: ["@umijs/plugins/dist/tailwindcss"],
  plugins: [
    '@umijs/plugins/dist/model',
    "@umijs/plugins/dist/tailwindcss"
  ],
  model: {}

});
