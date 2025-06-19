import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { projects } from "@/data/home/projects";
import { MonitorIcon } from "lucide-react";
import { ProjectItem } from "./ProjectItem";

export const ProjectsSection = () => {
	return (
		<section id="experience" className="w-full h-fit py-36 px-5">
			<ContainerLayout className="flex flex-col justify-center items-center gap-16">
				{/* TITLE */}
				<div className="flex items-center gap-3">
					<MonitorIcon className="size-8 shrink-0 text-orange-300" />
					<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
						Projetos recentes
					</h2>
				</div>

				{projects.length > 0 && (
					<ul className="max-w-[1060px] w-full grid grid-cols-1 md:grid-cols-2 gap-16">
						{projects.map((project) => (
							<ProjectItem key={project.id} project={project} />
						))}
					</ul>
				)}
			</ContainerLayout>
		</section>
	);
};
