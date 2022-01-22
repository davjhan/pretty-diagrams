import adapter from '@sveltejs/adapter-static'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess(),
    ],
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter({
            fallback: '404.html'
        }),
        vite: {
            optimizeDeps: {
                exclude: ['reefjs']
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
                }
            }

        }
    },
}

export default config