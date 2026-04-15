import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://polyg.dev/",
  base: "/",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-light",
    },
  },
});
