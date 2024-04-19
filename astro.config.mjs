import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://dfyz011.github.io",
	// outDir: "./docs", // Output to 'docs' folder, which GitHub Pages can use
	base: "/", // Adjust the base path if necessary
	trailingSlash: "ignore",
	build: {
		// Example: Generate `page.html` instead of `page/index.html` during build.
		format: "file",
	},
	image: {
		// Example: Enable the Sharp-based image service with a custom config
		service: {
			entrypoint: "astro/assets/services/sharp",
			config: {
				limitInputPixels: false,
			},
		},
	},
});
