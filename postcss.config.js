// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
	plugins: [
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};