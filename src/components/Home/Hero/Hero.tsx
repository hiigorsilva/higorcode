import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MouseIcon, NotepadTextIcon } from "lucide-react";

export const HeroSection = () => {
	return (
		<section className="min-h-dvh w-full py-10 px-5 flex flex-col justify-center items-center">
			<ContainerLayout className="flex justify-center items-center">
				<div className="max-w-2xl w-full flex flex-col items-center gap-8">
					{/* BADGE */}
					<Badge className="font-light text-foreground uppercase tracking-widest border border-border rounded-full bg-zinc-50/10 backdrop-blur-sm">
						Desenvolvedor Web Front-End
					</Badge>

					{/* HEADLINE */}
					<div className="flex flex-col gap-3">
						<h1 className="font-light text-5xl text-center text-foreground uppercase tracking-tight">
							Me chamo Higor Silva e{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
								Desenvolvo interfaces web
							</span>
						</h1>
						<p className="text-xl text-center text-muted-foreground">
							Busco oportunidade como Dev Front-End, focado em{" "}
							<strong className="font-medium text-foreground">
								ReactJS, NextJS e TypeScript
							</strong>{" "}
							para colaborar em projetos desafiadores.
						</p>
					</div>

					{/* CTA */}
					<div className="flex justify-center items-center gap-3">
						<Button className="h-fit font-medium tracking-tight py-3" asChild>
							<a href="/">
								<NotepadTextIcon />
								Download CV
							</a>
						</Button>

						<Button
							className="h-fit font-medium tracking-tight py-3 border border-border"
							variant="secondary"
							asChild
						>
							<a href="/#contact">Entrar em contato</a>
						</Button>
					</div>

					{/* MORE CONTENT ICON */}
					<a
						href="/#experience"
						className="flex flex-col items-center gap-1 pt-10"
					>
						<MouseIcon className="text-muted-foreground animate-bounce" />
						<span className="font-light text-xs text-muted-foreground uppercase">
							Ver mais
						</span>
					</a>
				</div>
			</ContainerLayout>
		</section>
	);
};
