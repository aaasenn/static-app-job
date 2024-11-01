import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      shared: "/src/shared",
      entities: "/src/entities",
      features: "/src/features",
      widgets: "/src/widgets",
      pages: "/src/pages",
    },
  },
})
