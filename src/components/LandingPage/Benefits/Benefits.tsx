import { LabelIcon } from "@/components/Globals/LabelIcon";
import { LabelSection } from "@/components/Globals/LabelSection";
import { ItemsBenefits } from "./ItemsBenefits";

export const BenefitsSection = () => {
	return (
		<section className="relative w-full z-10">
			<div className="relative flex flex-col items-start sm:items-center lg:items-start gap-6 bg-foreground/5 backdrop-blur-2xl border border-foreground/25 py-10 sm:py-[5rem] px-8 sm:px-16 rounded-3xl overflow-hidden">
				{/* IMAGE */}
				<LabelIcon className="absolute -top-4 -left-16 -z-[1] size-[430px] text-background/15" />

				{/* LABEL */}
				<div>
					<LabelSection>
						<LabelIcon className="text-muted-foreground" />
						<span className="leading-none">Benefícios</span>
					</LabelSection>
				</div>

				{/* CONTENT */}
				<div className="w-full sm:max-w-lg lg:max-w-none flex flex-col lg:flex-row justify-between items-start sm:items-center lg:items-start gap-6">
					<div className="space-y-1">
						<h2 className="font-medium text-3xl text-start sm:text-center lg:text-start text-pretty sm:text-balance text-foreground">
							Pare de{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
								perder vendas
							</span>{" "}
							por causa de páginas mal feitas!
						</h2>
						<p className="text-lg text-start sm:text-center lg:text-start text-muted-foreground text-pretty sm:text-balance">
							Insistir nisso vai fazer você queimar dinheiro.
						</p>
					</div>

					<div className="max-w-none lg:max-w-[480px] w-full space-y-4">
						<p className="text-lg text-start sm:text-center lg:text-start text-muted-foreground text-pretty sm:text-balance">
							Se sua página foca mais em visual do que na estratégia, você está{" "}
							<strong className="font-medium text-foreground">
								deixando dinheiro na mesa.
							</strong>
						</p>

						<p className="text-lg text-start sm:text-center lg:text-start text-muted-foreground text-pretty sm:text-balance">
							Minhas páginas seguem uma metodologia estratégica e eficiente para
							te entregar
						</p>

						<ItemsBenefits />
					</div>
				</div>
			</div>
		</section>
	);
};
