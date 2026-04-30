import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import node from '@sveltejs/adapter-static';

export default {
	kit: { 
		adapter: node()
	},

	preprocess: [vitePreprocess({})]
};
