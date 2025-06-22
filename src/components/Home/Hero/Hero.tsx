import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MouseIcon, NotepadTextIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (!heroRef.current) return;

		const updateScrollPosition = () => {
			const heroSectionHeight = heroRef.current?.clientHeight || 0;
			setScrollPosition(heroSectionHeight);
		};

		// Atualiza imediatamente
		updateScrollPosition();

		// Configura o ResizeObserver para monitorar mudanças
		const resizeObserver = new ResizeObserver(updateScrollPosition);
		resizeObserver.observe(heroRef.current);

		// Configura o listener para redimensionamento da janela
		window.addEventListener("resize", updateScrollPosition);

		// Limpeza
		return () => {
			resizeObserver.disconnect();
			window.removeEventListener("resize", updateScrollPosition);
		};
	}, []);

	const handleScrollToNextSection = () => {
		window.scrollTo({
			top: scrollPosition,
			behavior: "smooth",
		});
	};

	return (
		<section
			ref={heroRef}
			className="min-h-dvh w-full py-10 px-5 flex flex-col justify-center items-center"
		>
			<ContainerLayout className="flex justify-center items-center">
				<div className="max-w-2xl w-full flex flex-col items-center gap-8">
					{/* BADGE */}
					<Badge className="font-light text-foreground uppercase tracking-widest border border-border rounded-full bg-zinc-50/10 backdrop-blur-sm">
						Desenvolvedor Web Front-End
					</Badge>

					{/* HEADLINE */}
					<div className="flex flex-col gap-3">
						<h1 className="font-light text-3xl sm:text-4xl md:text-5xl text-center text-foreground text-balance md:text-pretty uppercase tracking-tight">
							Me chamo Higor Silva e{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
								Desenvolvo interfaces web
							</span>
						</h1>
						<p className="text-base md:text-xl text-center text-muted-foreground text-balance md:text-pretty">
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
							<a
								href="/docs/cv-higorcode.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
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
					<Button
						variant="ghost"
						className="flex flex-col items-center gap-1 w-fit h-fit p-2 mt-10"
						onClick={handleScrollToNextSection}
					>
						<MouseIcon className="text-muted-foreground animate-bounce" />
						<span className="font-light text-xs text-muted-foreground uppercase">
							Ver mais
						</span>
					</Button>
				</div>
			</ContainerLayout>
		</section>
	);
};
