const colors = require('tailwindcss/colors')
const theme = require('broth-css/dist/tailwind.theme.cjs')
module.exports = {
    content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}',
        '../engine/**/*.{svelte,js,ts,jsx,tsx,html}'],
    theme: {
        ...theme,
        extend: {
            borderWidth: {
                '3': '3px',
            },
            colors: {
                shade: {
                    code: colors.stone['800']
                }
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ]
}