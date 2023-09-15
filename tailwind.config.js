/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'proxima': ['Proxima Nova', 'Poppins', 'sans-serif'],
      'pretendard': ['Pretendard', 'Noto Sans KR', 'sans-serif'],
    }
  },
  plugins: [],
}

