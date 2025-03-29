import { v4 as uuid } from "uuid";

export type PortfolioType = {
	id: string;
	title: string;
	project: string;
	thumb: string;
	image: string;
};

export const portfolio: PortfolioType[] = [
	{
		id: uuid(),
		title: "Samuel Pereira",
		project: "Página de vendas",
		thumb: "/images/landing-page/portfolio/thumb-samuel-pereira.webp",
		image: "/images/landing-page/portfolio/lp-samuel-pereira.webp",
	},
	{
		id: uuid(),
		title: "Isabella Manzatti",
		project: "Página de captura",
		thumb: "/images/landing-page/portfolio/thumb-isabella-manzatti.webp",
		image: "/images/landing-page/portfolio/lp-isabella-manzatti.webp",
	},
	{
		id: uuid(),
		title: "Paulo Medeiros",
		project: "Página de vendas",
		thumb: "/images/landing-page/portfolio/thumb-paulo-medeiros.webp",
		image: "/images/landing-page/portfolio/lp-paulo-medeiros.webp",
	},
	{
		id: uuid(),
		title: "Legacy Mentoria",
		project: "Página de vendas",
		thumb: "/images/landing-page/portfolio/thumb-legacy-mentoria.webp",
		image: "/images/landing-page/portfolio/lp-legacy-mentoria.webp",
	},
];
