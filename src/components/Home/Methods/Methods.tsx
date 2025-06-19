import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { languages, methods } from "@/data/home/methods";
import { GemIcon, LanguagesIcon } from "lucide-react";

export const MethodsSection = () => {
	return (
		<section id="experience" className="w-full h-fit px-5 py-36">
			<ContainerLayout className="flex justify-center items-center">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
					{/* METHODS */}
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-3">
							<GemIcon className="size-8 shrink-0 text-orange-300" />
							<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
								Métodos Ágeis
							</h2>
						</div>

						{/* METHOD ITEMS */}
						<ul className="flex justify-start items-center gap-4">
							{methods.map((method) => (
								<li
									key={method.title}
									className="w-fit h-fit flex items-center font-light text-base text-orange-300 uppercase leading-none bg-gradient-to-r from-orange-300/15 to-orange-400/15 py-2.5 px-4 rounded-full"
								>
									{method.title}
								</li>
							))}
						</ul>
					</div>

					{/* LANGUAGES */}
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-3">
							<LanguagesIcon className="size-8 shrink-0 text-orange-300" />
							<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
								Idiomas
							</h2>
						</div>

						{/* LANGUAGE ITEMS */}
						<ul className="flex flex-col gap-6">
							{languages.map((language) => (
								<li
									key={language.title}
									className="flex justify-start items-center gap-3"
								>
									<div className="hidden md:block relative size-2 shrink-0 rounded-full bg-orange-400 border-2 border-orange-300" />

									<div className=" flex flex-wrap justify-start items-center gap-3">
										<h3 className="w-fit font-light text-lg text-nowrap uppercase">
											{language.title}
										</h3>

										<span className="w-fit h-fit flex items-center font-light text-base text-orange-300 text-nowrap uppercase leading-none bg-gradient-to-r from-orange-300/15 to-orange-400/15 py-2.5 px-4 rounded-full">
											{language.level}
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</ContainerLayout>
		</section>
	);
};
