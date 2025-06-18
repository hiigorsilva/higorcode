import { Button } from "@/components/ui/button";

const languages = [
	{
		icon: "/icons/techs/typescript.svg",
		name: "TypeScript",
	},
	{
		icon: "/icons/techs/javascript.svg",
		name: "JavaScript",
	},
	{
		icon: "/icons/techs/html5.svg",
		name: "HTML5",
	},
	{
		icon: "/icons/techs/css3.svg",
		name: "CSS3",
	},
];

const frameworks = [
	{
		icon: "/icons/techs/react.svg",
		name: "React.JS",
	},
	{
		icon: "/icons/techs/next.svg",
		name: "Next.JS",
	},
	{
		icon: "/icons/techs/astro.svg",
		name: "Astro.JS",
	},
	{
		icon: "/icons/techs/node.svg",
		name: "Node.JS",
	},
];

const styles = [
	{
		icon: "/icons/techs/tailwind.svg",
		name: "Tailwind CSS",
	},
	{
		icon: "/icons/techs/sass.svg",
		name: "SASS",
	},
	{
		icon: "/icons/techs/shadcn.svg",
		name: "Shadcn UI",
	},
];

const tools = [
	{
		icon: "/icons/techs/figma.svg",
		name: "Figma",
	},
	{
		icon: "/icons/techs/git.svg",
		name: "Git",
	},
	{
		icon: "/icons/techs/prisma.svg",
		name: "Prisma ORM",
	},
	{
		icon: "/icons/techs/docker.svg",
		name: "Docker",
	},
	{
		icon: "/icons/techs/postgresql.svg",
		name: "PostgreSQL",
	},
];

export const techs = [
	{
		title: "Linguagens",
		content: (
			<>
				{languages.map((language) => (
					<Button
						key={language.name}
						variant="secondary"
						className="h-fit min-w-52 w-fit justify-start py-2 px-6 border border-border"
						asChild
					>
						<li>
							<div className="relative flex justify-center items-center size-6 shrink-0 rounded-[2px] overflow-hidden">
								<img
									className="w-full h-full object-contain"
									src={language.icon}
									alt={language.name}
								/>
							</div>

							<span className="font-light text-lg tracking-tight">
								{language.name}
							</span>
						</li>
					</Button>
				))}
			</>
		),
	},
	{
		title: "Frameworks",
		content: (
			<>
				{frameworks.map((framework) => (
					<Button
						key={framework.name}
						variant="secondary"
						className="h-fit min-w-52 w-fit justify-start py-2 px-6 border border-border"
						asChild
					>
						<li>
							<div className="relative flex justify-center items-center size-6 shrink-0 rounded-[2px] overflow-hidden">
								<img
									className="w-full h-full object-contain"
									src={framework.icon}
									alt={framework.name}
								/>
							</div>

							<span className="font-light text-lg tracking-tight">
								{framework.name}
							</span>
						</li>
					</Button>
				))}
			</>
		),
	},
	{
		title: "Estilização e UI",
		content: (
			<>
				{styles.map((style) => (
					<Button
						key={style.name}
						variant="secondary"
						className="h-fit min-w-52 w-fit justify-start py-2 px-6 border border-border"
						asChild
					>
						<li>
							<div className="relative flex justify-center items-center size-6 shrink-0 rounded-[2px] overflow-hidden">
								<img
									className="w-full h-full object-contain"
									src={style.icon}
									alt={style.name}
								/>
							</div>

							<span className="font-light text-lg tracking-tight">
								{style.name}
							</span>
						</li>
					</Button>
				))}
			</>
		),
	},
	{
		title: "Ferramentas e outros",
		content: (
			<>
				{tools.map((tool) => (
					<Button
						key={tool.name}
						variant="secondary"
						className="h-fit min-w-52 w-fit justify-start py-2 px-6 border border-border"
						asChild
					>
						<li>
							<div className="relative flex justify-center items-center size-6 shrink-0 rounded-[2px] overflow-hidden">
								<img
									className="w-full h-full object-contain"
									src={tool.icon}
									alt={tool.name}
								/>
							</div>

							<span className="font-light text-lg tracking-tight">
								{tool.name}
							</span>
						</li>
					</Button>
				))}
			</>
		),
	},
];
