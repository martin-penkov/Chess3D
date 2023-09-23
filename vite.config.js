import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    },
    plugins: [
        createHtmlPlugin({
        entry: 'index.js',
        template: 'index.html',
        inject: {
            data: {
            title: 'index',
            injectScript: `<script src="./inject.js"></script>`,
            },    
        }
        }),
        viteStaticCopy({
            targets: [
            {
                src: 'bin/example.wasm',
                dest: 'wasm-files'
            }
            ]
        })
    ]
})