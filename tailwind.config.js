/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
            'forest': {
                50: '#f0f4f1',
                100: '#dce5df',
                200: '#b9cbbf',
                300: '#8ea78f',
                400: '#648064',
                500: '#4a6349',
                600: '#3a4f3a',
                700: '#2f3f2f',
                800: '#263226',
                900: '#1f2920',
            },
            'sage': {
                50: '#f4f6f3',
                100: '#e5eae2',
                200: '#cbd5c5',
                300: '#a7b89f',
                400: '#87a07b',
                500: '#688a5c',
                600: '#527049',
                700: '#41583c',
                800: '#364732',
                900: '#2d3a2a',
            },
            'moss': {
                50: '#f3f5f2',
                100: '#e2e8df',
                200: '#c5d1c0',
                300: '#9fb298',
                400: '#7d9572',
                500: '#5f7a53',
                600: '#4b6240',
                700: '#3d4f35',
                800: '#323f2d',
                900: '#293426',
            },
            'emerald': {
                50: '#ecfdf5',
                100: '#d1fae5',
                200: '#a7f3d0',
                300: '#6ee7b7',
                400: '#34d399',
                500: '#10b981',
                600: '#059669',
                700: '#047857',
                800: '#065f46',
                900: '#064e3b',
            },
            'earth': {
                50: '#faf9f7',
                100: '#f3f1ec',
                200: '#e6e0d5',
                300: '#d5c9b6',
                400: '#c2ae95',
                500: '#b19576',
                600: '#a07d5f',
                700: '#856650',
                800: '#6d5445',
                900: '#5a463a',
            }
        },
        fontFamily: {
            'display': ['Playfair Display', 'serif'],
            'body': ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-in-out',
            'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            slideUp: {
                '0%': { transform: 'translateY(20px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            }
        }
    },
  },
  plugins: [],
}
