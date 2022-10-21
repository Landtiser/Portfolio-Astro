import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import storyblok from "@storyblok/astro";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://landtiser.com',
	integrations: [
		mdx(),
		sitemap(),
		storyblok({
			accessToken: "ZtzlWPFXkDLC0DoS5gpisgtt",
			apiOptions: {
				region: 'us'
			},
			components: {
				page: 'storyblok/Page',
				feature: 'storyblok/Feature',
				grid: 'storyblok/Grid',
				teaser: 'storyblok/Teaser',
				embed: 'storyblok/Embed',
				TextContent: 'storyblok/TextContent'
			}
		  }),
	],
	
});
