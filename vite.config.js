import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://localhost:8080",
      "/api": "https://book-my-book-webapp.onrender.com",
    },
  },
  plugins: [react()],
});
