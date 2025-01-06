import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "http://localhost:3000",
  plugins: [
    react(),
    federation({
      name: "vite-react-mf-ts-template",
      filename: "remoteEntry.js",
      manifest: true,
      // exposes: {
      //   "./button": "./src/components/button",
      // },
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
  ],
});
