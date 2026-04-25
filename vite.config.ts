import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { viteSingleFile } from "vite-plugin-singlefile"; // ← Comment out or remove

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()], // ← Remove viteSingleFile()
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: '/', // ← Add this for Cloudflare/Vercel compatibility
});