import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert(), svgr()],
  server: {
    https: true,
    host: true, // permite acesso via IP local (ex: 192.168.X.X)
  },
});
