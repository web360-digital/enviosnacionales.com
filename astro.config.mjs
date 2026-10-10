// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--font-inter',
			styles: ['normal'],
			weights: ['100 900'],
			fallbacks: ['Arial', 'sans-serif'],
		},
	],
});
