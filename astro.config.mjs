import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://dfyz011.github.io",
	outDir: "./docs", // Output to 'docs' folder, which GitHub Pages can use
	base: "/utro-zhizni", // Adjust the base path if necessary
	trailingSlash: "ignore",
	build: {
		// Example: Generate `page.html` instead of `page/index.html` during build.
		format: "file",
	},
});
