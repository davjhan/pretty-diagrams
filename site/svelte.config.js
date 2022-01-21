import adapter from '@sveltejs/adapter-static'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter({
            fallback: '404.html'
        }),
        vite: {
            optimizeDeps: {
            },
            resolve: {
                alias: {
                    $static: path.resolve('/static'),
                    $views: path.resolve('src/lib/views')
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