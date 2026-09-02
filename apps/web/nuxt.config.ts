import { THEME_BOOT_SCRIPT } from "./app/utils/theme";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-02",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      script: [{ innerHTML: THEME_BOOT_SCRIPT, tagPosition: "head" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
