import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    "./node_modules/preline/preline.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Lexend',
        'sans-serif',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      colors: {
        primary: '#676d74',
        info: '#217ce5',
        success: '#00ad6e',
        warning: '#f5a623',
        danger: '#ff4b4b',
        steel: {
          50: '#7a838c',
          100: '#22272d',
          200: '#161b22',
          300: '#0d1117',
        },
      },
      keyframes: {
        flash: {
          '0%': { opacity: '0.2' },
          '1%': { scale: '2' },
          '20%': { opacity: '1' },
          '21%': { scale: '1' },
          '100%': { opacity: '0.2' },
        },
      },
      animation: {
        flash: 'flash 0.8s infinite linear',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-elevation'),
    require('tailwind-capitalize-first-letter'),
    require('preline/plugin'),
  ],
}


