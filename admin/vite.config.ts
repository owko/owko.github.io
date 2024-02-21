import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { Plugin as viteCDNImport } from 'vite-plugin-cdn-import'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true, // 输出压缩成功
      disable: false, // 是否禁用
      threshold: 10240, // 体积大于阈值会被压缩，单位是b
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 生成的压缩包后缀
      deleteOriginFile: true, // 是否删除原文件
    }),
    viteCDNImport({
      modules: [
        {
          name: 'echarts',
          var: 'echarts',
          path: 'https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js',
        }
      ]
    }),
    visualizer() as any,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/adminapi': {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  build:{
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js', // 代码分割导致的额外的构建产物的文件名
        entryFileNames: 'static/js/[name]-[hash].js', // 打包入口生成的构建结果
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 重命名构建后生成产物的名字
        manualChunks: (id: string | string[]) => { // 对node_modules中的依赖进行分包
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }


})
