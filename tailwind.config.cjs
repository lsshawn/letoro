const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'background-light': '#121212',
				'background-dark': '#0A0A0A'
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				body: ['Josefin Sans', 'sans-serif'],
				sans: ['Josefin Sans', 'sans-serif']
			}
		}
	},

	plugins: [forms, typography, daisyui],
	daisyui: {
		themes: [
			{
				luxury: {
					...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
					primary: '#D4AF37'
				}
			}
		]
	}
};

module.exports = config;
