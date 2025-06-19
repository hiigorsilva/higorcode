import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { ProjectType } from "@/types/project";
import { EyeIcon, Link2Icon } from "lucide-react";
import { type ReactNode, useState } from "react";

type ProjectItemProps = {
	project: ProjectType;
};

export const ProjectItem = ({ project }: ProjectItemProps) => {
	return (
		<li className="group w-full flex flex-col gap-3">
			<div className="relative w-full max-h-80 h-auto rounded overflow-hidden">
				<img
					className="group-hover:scale-110 transition w-full h-full object-cover"
					src={project.cover}
					alt={project.title}
				/>
			</div>

			<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
				<h3 className="font-medium text-lg text-foreground text-start tracking-tight uppercase">
					{project.title}
				</h3>
				<div className="font-normal text-xs text-muted-foreground uppercase px-3 py-1.5 rounded-full bg-secondary border border-border">
					{project.tag}
				</div>
			</div>
			<p className="text-sm text-muted-foreground text-start text-pretty">
				{project.description}
			</p>

			<div className="flex flex-col md:flex-row justify-between items-center gap-3">
				{project.links.preview && (
					<Button
						variant="outline"
						className="w-full flex-1 text-muted-foreground rounded"
						asChild
					>
						<a
							href={project.links.preview}
							target="_blank"
							rel="noopener noreferrer"
						>
							<EyeIcon className="size-5 shrink-0" />
							Ver Projeto
						</a>
					</Button>
				)}

				<Button
					variant="outline"
					className="w-full flex-1 text-muted-foreground rounded"
					asChild
				>
					<a
						href={project.links.repository}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Link2Icon className="size-5 shrink-0" />
						Ver Repositório
					</a>
				</Button>
			</div>
		</li>
	);
};

type ProjectItemModalProps = {
	project: ProjectType;
	children: ReactNode;
	openModal: boolean;
};
export const ProjectItemModal = ({
	openModal,
	project,
	children,
}: ProjectItemModalProps) => {
	return (
		<Dialog open={openModal}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<div className="flex justify-center items-center gap-3">
					<Button asChild>
						<a
							href={project.links.preview || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<EyeIcon className="size-5 shrink-0" />
							Ver Projeto
						</a>
					</Button>

					<Button variant="secondary" asChild>
						<a
							href={project.links.repository || ""}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Link2Icon className="size-5 shrink-0" />
							Ver Repositório
						</a>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
