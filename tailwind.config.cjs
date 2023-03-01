const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Arial'],
			},
		},
	},

	plugins: [forms, typography, daisyui],
	daisyui: {
		themes: [
			{
				luxury: {
					...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
					primary: '#dca54c',
				},
			},
		],
	},
};

module.exports = config;
