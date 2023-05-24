/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'sm': '640px',       // Small phones and below
        'md': '768px',       // Tablets and small laptops
        'lg': '1024px',      // Laptops and desktops
        'xl': '1280px',      // Large desktops
        '2xl': '1536px',     // 2K monitors and above
        '3xl': '1920px',     // Full HD monitors and above
        '4xl': '2560px',     // 2.5K monitors and above
        '5xl': '3840px',     // 4K monitors and above
        '6xl': '4096px'      // Large 4K monitors and above
      },
      boxShadow: {
        'glow': '0 0 15px #3fe0d0', // replace #3fe0d0 with your chosen color
      }
    },
  },
  plugins: [],
}

