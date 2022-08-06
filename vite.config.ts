import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
import libCss from 'vite-plugin-libcss'

// vite.config.js
export default defineConfig({
  //静态资源服务的文件夹
  publicDir: 'public',
  base: './',
  //静态资源处理
  assetsInclude: '',
  //控制台输出的级别 info 、warn、error、silent
  logLevel: 'info',
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  plugins: [
    splitVendorChunkPlugin,
    libCss()
  ],
  build: {
    target: "modules",
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'GridSystem',
      // the proper extensions will be added
      fileName: (format) => `grid-system.${format}.js`, // 打包后的文件名
      formats: [ "es", "umd", 'iife' ],
    },
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      input: {
        main: resolve(__dirname, '/example/demo.ts'),
      },
      external: [ 'vue' ],
      output: {
        dir: "./dist/example",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
    watch: {
      // https://rollupjs.org/guide/en/#watch-options
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions: [ '.vue', '.js', '.jsx', '.tsx', '.json' ]
  },
})
