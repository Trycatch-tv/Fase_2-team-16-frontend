/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

			colors: {
				primary: '#EE6C4D',
				secondary: '#6D5BD0',
				input_auth: '#2C3E5E',
				error: '#FF0000',
				success: '#00FF00',
				warning: '#FFA500',
				info: '#00FFFF',
				state: '#1D232A',
			},
			transform: {
				'rotate-y-180': 'rotateY(180deg)',
			},
		},
	},
	plugins: [require('daisyui')],
};
