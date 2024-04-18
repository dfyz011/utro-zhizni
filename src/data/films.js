export const FILMS = [
	{
		name: "moon-sun",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		name: "fisher",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		name: "school",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		name: "smell",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		name: "untitled1",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		name: "untitled2",
		videoUrl:
			"https://youtu.be/YL4wsaUL8As?list=PLly3uA76BhVAMKY9StnEkC0SgrL6XiQSk",
		title: "LONG TITLE",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];

export const FILMS_WITH_MEDIA = FILMS.map((film) => {
	return {
		...film,
		previewImgUrl: `/${film.name}/preview.jpg`,
		gifUrl: `/${film.name}/gif.gif`,
		imgUrl: `/${film.name}/image.jpg`,
	};
});