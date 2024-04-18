import { z, defineCollection } from "astro:content";
const filmsCollectioon = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			videoUrl: z.string(),
			title: z.string(),
			text: z.string(),
			previewImg: image(),
			gifUrl: z.string(),
		}),
});

export const collections = {
	films: filmsCollectioon,
};
