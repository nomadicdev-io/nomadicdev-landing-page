import { defineConfig } from 'vite'

const ogImagePlugin = new OgImagePlugin({
    destDir: "/public",
  });

export default defineConfig({
    buildEnd(siteConfig) {
        ogImagePlugin.buildEnd(siteConfig);
    },
})