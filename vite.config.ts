import { defineConfig } from "vite";
import { vitePlugin as malinaPlugin } from "malinajs-unplugin";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      malinaPlugin({
        css: mode === 'development',
      }),
    ],
  };
});
