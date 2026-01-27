import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', 'ui-sans-serif', 'system-ui'],
        google: ['"Google Sans Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
});
