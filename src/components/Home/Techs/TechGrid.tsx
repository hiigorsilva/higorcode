import { techs } from "@/data/home/techs";

export const TechGrid = () => {
	return (
		<div className="max-w-3xl w-full flex flex-col">
			{techs.map((tech) => (
				<div
					key={tech.title}
					className="relative flex flex-col md:flex-row justify-between items-start gap-6 not-last:pb-24 not-last:border-l not-last:border-border"
				>
					{/* TITLE */}
					<div className="static md:sticky w-full top-20 flex justify-start items-center gap-4 -ml-1.5 md:-ml-3 -mt-2">
						<div className="w-fit h-fit rounded-full p-1 md:p-2 bg-orange-300">
							<div className="relative size-1 md:size-2 shrink-0 rounded-full bg-orange-400" />
						</div>
						<h3 className="font-light text-xl text-muted-foreground tracking-tight uppercase">
							{tech.title}
						</h3>
					</div>

					<ul className="w-full flex flex-col gap-3 ml-5 md:ml-0 pr-5">
						{tech.content}
					</ul>
				</div>
			))}
		</div>
	);
};
