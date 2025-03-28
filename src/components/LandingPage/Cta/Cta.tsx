import { ButtonCTA } from "@/components/Globals/ButtonCTA";
import { LabelIcon } from "@/components/Globals/LabelIcon";
import { LabelSection } from "@/components/Globals/LabelSection";
import { MoreContentIcon } from "./MoreContentIcon";

export const CtaSection = () => {
	return (
		<section className="relative w-full rounded-2xl bg-foreground overflow-hidden shadow-2xl shadow-zinc-950/25">
			{/* ICON MORE CONTENT */}
			<MoreContentIcon className="absolute -top-px left-1/2 z-10 -translate-x-1/2 w-[108px] h-[32px] md:w-[135px] md:h-[40px]" />

			{/* IMAGE */}
			<LabelIcon className="hidden sm:block absolute -top-12 -right-20 z-0 size-[280px] md:size-[430px] text-muted-foreground/20" />

			<div className="relative z-10 w-full flex flex-col items-center gap-8 pt-16 pb-10 px-8 md:px-16">
				{/* LABEL */}
				<LabelSection className="bg-background/10">
					<LabelIcon className="text-background" />
					<span className="text-background leading-none">
						Impulsione suas vendas
					</span>
				</LabelSection>

				{/* TITLE */}
				<div>
					<h2 className="font-medium text-3xl text-center text-pretty text-background tracking-tight">
						Eaí, vamos aumentar suas conversões?
					</h2>
					<p className="text-lg text-center text-pretty text-muted">
						Clique no botão abaixo e tome a decisão correta.
					</p>
				</div>

				{/* CTA */}
				<ButtonCTA theme="light" />
			</div>
		</section>
	);
};
