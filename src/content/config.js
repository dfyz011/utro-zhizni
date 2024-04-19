import { z, defineCollection } from "astro:content";
const filmsCollectioon = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			youtubeVideoId: z.string(),
			previewImg: image(),
			trailerGif: image(),
		}),
});

export const collections = {
	films: filmsCollectioon,
};
