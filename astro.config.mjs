import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";
const baseFromEnv = process.env.PUBLIC_BASE_PATH;

export default defineConfig({
  site: "https://polyg.dev/",
  base: isProd ? (baseFromEnv || "/Projects/") : "/",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-light",
    },
  },
});
