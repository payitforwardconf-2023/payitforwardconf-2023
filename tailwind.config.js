/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("/public/pay-it-forward-conf-bg-contrast.webp")',
      },
    },
    fontFamily: {
      proxima: ["Proxima Nova", "Poppins", "sans-serif"],
      pretendard: ["Pretendard", "Noto Sans KR", "sans-serif"],
    },
  },
  plugins: [],
};
