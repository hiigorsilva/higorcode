import { v4 as uuid } from "uuid";

export const projects = [
	{
		id: uuid(),
		title: "Micro SaaS Barbershop",
		tag: "FSW FullStack",
		description:
			"Criação de um sistema de agendamento de barbearia para o cliente usando Next.js, TypeScript, Prisma, PostgreSQL.",
		cover: "/images/home-page/projects/cover-barbershop.webp",
		links: {
			repository: "https://github.com/hiigorsilva/barber-app",
			preview: "https://barber-app-rust.vercel.app/",
		},
	},
	{
		id: uuid(),
		title: "Micro SaaS Finance AI",
		tag: "FSW FullStack",
		description:
			"Criação de gerenciador de finanças com IA usando Next.js, Typescript, Prisma, PostgreSQL e ChatGPT.",
		cover: "/images/home-page/projects/cover-finance-ai.webp",
		links: {
			repository: "https://github.com/hiigorsilva/finance-ai",
			preview: "https://finance-ai-theta-rosy.vercel.app",
		},
	},
	{
		id: uuid(),
		title: "Sistema de Indicação e Ranking",
		tag: "NLW Connect Front-End",
		description:
			"Criação de um sistema de indicação com ranking de pontuação usando Next.js, Zod, TypeScript, Orval.",
		cover: "/images/home-page/projects/cover-devstage.webp",
		links: {
			repository: "https://github.com/hiigorsilva/connect-web",
			preview: null,
		},
	},
	{
		id: uuid(),
		title: "Controle de Metas Pessoais",
		tag: "NLW Pocket FullStack",
		description:
			"Criação de um app de controle de metas pessoais usando React.js, Typescript, Node.js, API REST, Fastify, Docker.",
		cover: "/images/home-page/projects/cover-goals-control.webp",
		links: {
			repository: "https://github.com/hiigorsilva/app-inorbit-web",
			preview: null,
		},
	},
];
