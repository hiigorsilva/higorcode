export type ProjectType = {
	id: string;
	title: string;
	tag: string;
	description: string;
	cover: string;
	links: {
		repository: string;
		preview: string | null;
	};
};
