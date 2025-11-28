import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',  // 用户名.github.io 项目使用根路径
  build: {
    outDir: 'dist'
  }
})
