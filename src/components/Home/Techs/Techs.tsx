import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { TechGrid } from "@/components/Home/Techs/TechGrid";
import { techs } from "@/data/home/techs";
import { DatabaseIcon } from "lucide-react";

export const TechsSection = () => {
	return (
		<section className="w-full h-fit bg-secondary dark:bg-zinc-900 py-20 md:py-36 px-5">
			<ContainerLayout className="flex flex-col justify-center items-center gap-16">
				{/* TITLE */}
				<div className="flex items-center gap-3">
					<DatabaseIcon className="size-8 shrink-0 text-orange-500 dark:text-orange-300" />
					<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
						Tecnologias
					</h2>
				</div>

				<TechGrid data={techs} />
			</ContainerLayout>
		</section>
	);
};
