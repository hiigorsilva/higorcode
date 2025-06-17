import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { Separator } from "@/components/ui/separator";
import { educations, experiences } from "@/data/home/experience";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";

export const ExperienceSection = () => {
	return (
		<section id="experience" className="w-full h-fit bg-zinc-900 py-36">
			<ContainerLayout className="flex justify-center items-center">
				<div className="grid grid-cols-2 gap-16">
					{/* EXPERIENCE */}
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-3">
							<BriefcaseIcon className="size-8 shrink-0 text-orange-300" />
							<h2 className="font-light text-4xl text-foreground uppercase tracking-tight">
								Experiência
							</h2>
						</div>

						<ul>
							{experiences.map((experience) => (
								<li
									key={experience.title}
									className="flex justify-center items-start gap-2"
								>
									{/* BULLET POINT */}
									<div className="size-6 shrink-0 pt-1">
										<div className="w-full h-full flex justify-center items-center">
											<div className="size-2 rounded-full bg-orange-300 border-2 border-orange-300/5" />
										</div>
									</div>

									{/* ITEM */}
									<div className="flex flex-col gap-3">
										{/* HEADER */}
										<div className="flex justify-between items-center gap-4">
											<h3 className="font-medium text-xl text-foreground uppercase tracking-tight">
												{experience.title}{" "}
												<span className="text-muted-foreground">
													| {experience.company}
												</span>
											</h3>

											<div className="font-medium text-xs text-zinc-950 uppercase rounded-full bg-gradient-to-r from-orange-300 to-orange-400 px-2.5 py-1.5">
												{experience.period}
											</div>
										</div>

										<Separator />

										{/* DESCRIPTION */}
										<p className="text-lg text-muted-foreground texpre">
											{experience.description}
										</p>

										{experience.techs.length > 0 && (
											<>
												<h4 className="text-lg tracking-tight uppercase text-foreground">
													Tecnologias usadas
												</h4>

												<div className="flex items-center gap-2">
													{experience.techs.map((tech) => (
														<div
															key={tech.name}
															className="flex justify-center items-center gap-2 px-2.5 py-1.5 rounded-full bg-muted/25 border border-border"
														>
															<img
																className="size-4"
																src={tech.icon}
																alt="fdssd"
															/>
															<span className="font-light text-xs text-muted-foreground uppercase">
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
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-3">
							<GraduationCapIcon className="size-8 shrink-0 text-orange-300" />
							<h2 className="font-light text-4xl text-foreground uppercase tracking-tight">
								Educação
							</h2>
						</div>

						<ul className="flex flex-col gap-16">
							{educations.map((education) => (
								<li
									key={education.title}
									className="flex justify-center items-start gap-2"
								>
									{/* BULLET POINT */}
									<div className="size-6 shrink-0 pt-1">
										<div className="w-full h-full flex justify-center items-center">
											<div className="size-2 rounded-full bg-orange-300 border-2 border-orange-300/5" />
										</div>
									</div>

									{/* ITEM */}
									<div className="flex flex-col gap-3">
										{/* HEADER */}
										<div className="flex justify-between items-center gap-4">
											<h3 className="font-medium text-xl text-foreground uppercase tracking-tight">
												{education.title}{" "}
												<span className="text-muted-foreground">
													| {education.company}
												</span>
											</h3>

											<div className="font-medium text-xs text-zinc-950 uppercase rounded-full bg-gradient-to-r from-orange-300 to-orange-400 px-2.5 py-1.5">
												{education.period}
											</div>
										</div>

										<Separator />

										{/* DESCRIPTION */}
										<p className="text-lg text-muted-foreground texpre">
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
