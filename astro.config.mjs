import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://atikou.github.io",
  base: isProd ? "/Projects/" : "/",
});
