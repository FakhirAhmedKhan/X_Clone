import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // eslint-disable-next-line no-undef
  base: process.env.ViteBase || "/X_Clone/",
});
