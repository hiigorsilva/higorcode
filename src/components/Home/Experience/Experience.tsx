import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { Separator } from "@/components/ui/separator";
import { educations, experiences } from "@/data/home/experience";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

export const ExperienceSection = () => {
	return (
		<section
			id="experience"
			className="w-full h-fit bg-secondary dark:bg-zinc-900 py-20 md:py-36 px-5"
		>
			<ContainerLayout className="flex justify-center items-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-16">
					{/* EXPERIENCE */}
					<div className="flex flex-col items-start gap-8">
						<div className="flex justify-start items-center gap-3">
							<BriefcaseIcon className="size-8 shrink-0 text-orange-500 dark:text-orange-300" />
							<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
								Experiência
							</h2>
						</div>

						<ul className="w-full flex flex-col items-start gap-16">
							{experiences.map((experience) => (
								<li
									key={experience.title}
									className="w-full flex justify-center items-start gap-2"
								>
									{/* BULLET POINT */}
									<div className="size-6 shrink-0 pt-1">
										<div className="w-full h-full flex justify-center items-center">
											<div className="size-2 rounded-full bg-orange-300 border-2 border-orange-300/5" />
										</div>
									</div>

									{/* ITEM */}
									<div className="w-full flex flex-col gap-3">
										{/* HEADER */}
										<div className="flex flex-wrap flex-col md:flex-row justify-between items-start md:items-center gap-2">
											<h3 className="font-medium text-lg sm:text-xl text-foreground text-nowrap uppercase tracking-tight">
												{experience.title}{" "}
												<span className="text-muted-foreground">
													| {experience.company}
												</span>
											</h3>

											<div className="font-medium text-xs text-orange-500 dark:text-orange-300 text-nowrap uppercase rounded-full bg-gradient-to-r from-orange-300/15 to-orange-400/15 px-2.5 py-1.5">
												{experience.period}
											</div>
										</div>

										<Separator />

										{/* DESCRIPTION */}
										<p className="text-lg text-muted-foreground text-pretty">
											{experience.description}
										</p>

										{experience.techs.length > 0 && (
											<>
												<h4 className="text-lg tracking-tight uppercase text-foreground">
													Tecnologias usadas
												</h4>

												<div className="flex flex-wrap items-center gap-2">
													{experience.techs.map((tech) => (
														<div
															key={tech.name}
															className="flex flex-nowrap justify-center items-center gap-2 px-2.5 py-1.5 rounded-full bg-background/50 dark:bg-background/50 border border-border"
														>
															<img
																className="size-4"
																src={tech.icon}
																alt="fdssd"
															/>
															<span className="font-light text-xs text-foreground/75 text-nowrap uppercase">
																{tech.name}
															</span>
														</div>
													))}
												</div>
											</>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* EDUCATION */}
					<div className="flex flex-col items-start gap-8">
						<div className="flex justify-start items-center gap-3">
							<GraduationCapIcon className="size-8 shrink-0 text-orange-500 dark:text-orange-300" />
							<h2 className="font-light text-3xl md:text-4xl text-foreground uppercase tracking-tight">
								Educação
							</h2>
						</div>

						<ul className="w-full flex flex-col items-start gap-16">
							{educations.map((education) => (
								<li
									key={education.title}
									className="w-full flex justify-center items-start gap-2"
								>
									{/* BULLET POINT */}
									<div className="size-6 shrink-0 pt-1">
										<div className="w-full h-full flex justify-center items-center">
											<div className="size-2 rounded-full bg-orange-300 border-2 border-orange-300/5" />
										</div>
									</div>

									{/* ITEM */}
									<div className="w-full flex flex-col gap-3">
										{/* HEADER */}
										<div className="flex flex-wrap flex-col md:flex-row justify-between items-start md:items-center gap-2">
											<h3 className="font-medium text-lg sm:text-xl text-foreground text-nowrap uppercase tracking-tight">
												{education.title}{" "}
												<span className="text-muted-foreground">
													| {education.company}
												</span>
											</h3>

											<div className="font-medium text-xs text-orange-500 dark:text-orange-300 text-nowrap uppercase rounded-full bg-gradient-to-r from-orange-300/15 to-orange-400/15 px-2.5 py-1.5">
												{education.period}
											</div>
										</div>

										<Separator />

										{/* DESCRIPTION */}
										<p className="text-lg text-muted-foreground text-pretty">
											{education.description}
										</p>
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
