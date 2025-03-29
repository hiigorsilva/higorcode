import { ButtonCTA } from "../../Globals/ButtonCTA";
import { LabelSection } from "../../Globals/LabelSection";
import { Headline } from "./Headline";

export const HeroSection = () => {
	return (
		<section className="relative min-h-[90dvh] h-fit w-full grid place-content-center py-[7.5rem]">
			<div className="flex flex-col items-start sm:items-center gap-8">
				{/* BADGE */}
				<LabelSection>Landing Pages para Infoprodutores</LabelSection>

				{/* HEADLINE */}
				<Headline />

				{/* CTA */}
				<ButtonCTA />
			</div>
		</section>
	);
};
