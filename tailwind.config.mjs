/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#1E3A8A',
        'padel-blue': '#1E40AF',
        'padel-light': '#3B82F6'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      spacing: {
        'section-padding': '5rem 0',
        'container-max': 'max-w-7xl mx-auto px-4'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'padel-blue-gradient': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)'
      }
    },
  },
  plugins: [],
} 