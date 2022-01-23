import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess(),
    ],
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter(),
        vite: {
            optimizeDeps: {
                exclude: ['broth-css']
            },
            resolve: {
                alias: {
                    '$static': path.resolve('/static'),
                    '$components': path.resolve('src/components'),
                    '$engine': path.resolve('../engine')
                }
            },
            server: {
                host: '0.0.0.0',
                watch: {
                    followSymlinks: true
                },
                fs: {
                    allow: ['.yalc']
                }
            }

        }
    },
}

export default config