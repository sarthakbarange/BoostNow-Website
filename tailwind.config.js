/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure it includes all necessary file extensions
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 10s linear infinite",
        marquee: 'marquee 30s linear infinite', // Defines the animation with duration and infinite repeat
        blink: 'blink 1.3s infinite',
        
          rotate10: 'rotate10 3s ease-in-out infinite',
        
      },
      fontFamily: {
        serif:["Roboto Slab", "serif"],
        times: ['Times New Roman', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(10%)' }, // Start outside the container
          '100%': { transform: 'translateX(-100%)' }, // End outside the container on the opposite side
        },
        rotate10: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [], // No changes unless additional plugins are needed
};


