// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://enviosmacionales.com/',
	integrations: [sitemap()],
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
