const colors = require('tailwindcss/colors')
const theme = require('broth-css/dist/tailwind.theme.cjs')
module.exports = {
    content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
    theme: {
        ...theme,
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}