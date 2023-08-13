/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        leftLine: {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        rightLine: {
          '0%, 100%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        skillIcons: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        footerSocialIcons: {
          '0%, 100%': { transform: 'translateY(-7px)', },
          '50%': { transform: 'translateY(7px)', },
        }
      },
      colors: {
        overlay: 'rgba(0,0,0,0.5)'
      },
    
    },
    screens: {
      'mobile': '340px',
    }
  },
  plugins: [],
}