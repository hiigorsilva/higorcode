import { LabelIcon } from "@/components/Globals/LabelIcon";
import { LabelSection } from "@/components/Globals/LabelSection";
import { portfolio } from "@/data/landing-page/portfolio";
import { MousePointer2Icon } from "lucide-react";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioSection = () => {
	return (
		<section className="relative w-full py-[7.5rem]">
			<div className="space-y-4">
				<div className="flex justify-start sm:justify-center lg:justify-start">
					<LabelSection>
						<LabelIcon className="text-muted-foreground" />
						<span className="leading-none">Portfólio</span>
					</LabelSection>
				</div>

				{/* HEADER */}
				<div className="flex flex-col lg:flex-row justify-between items-start sm:items-center lg:items-end gap-6">
					{/* TITILE */}
					<div className="max-w-lg w-full">
						<h2 className="font-medium text-3xl text-start sm:text-center lg:text-start text-foreground text-pretty sm:text-balance">
							Veja algumas páginas criadas com{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
								foco na conversão
							</span>
						</h2>
						<p className="text-lg text-start sm:text-center lg:text-start text-muted-foreground text-pretty sm:text-balance">
							Insistir nisso vai fazer você queimar dinheiro.
						</p>
					</div>

					{/* INFO AUXILIAR */}
					<div className="flex items-center gap-1">
						<MousePointer2Icon className="size-5 shrink-0 text-muted-foreground -rotate-[10deg] animate-pulse" />
						<span className="text-sm text-muted-foreground">
							Clique para visualizar a projeto
						</span>
					</div>
				</div>

				{/* CONTENT */}
				{portfolio.length > 0 && (
					<ul className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 place-items-center">
						{portfolio.map((page) => (
							<PortfolioItem key={page.id} page={page} />
						))}
					</ul>
				)}
			</div>
		</section>
	);
};
