/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
			colors: {
				custom: {
						DEFAULT: '#F4AB0A',
						thumbScroll: "rgb(244,171,10, 0.4)",
						trackScroll: "rgb(24, 24, 27, 0.4)",
				}
		}
		},
  },
  plugins: [
		require('tailwindcss-scrollbar')
],
variants: {
	scrollbar: ['rounded']
}
	
}
