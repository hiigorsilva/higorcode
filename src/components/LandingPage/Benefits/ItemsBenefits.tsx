import { LabelSection } from "@/components/Globals/LabelSection";

const benefits = [
	{ label: "Design moderno" },
	{ label: "Responsividade" },
	{ label: "Persuasão" },
	{ label: "Carregamento rápido" },
	{ label: "+Leads" },
	{ label: "+Conversão" },
	{ label: "+Vendas" },
];

export const ItemsBenefits = () => {
	return (
		<div className="w-full flex flex-wrap justify-start sm:justify-center lg:justify-start items-center gap-2">
			{benefits.map((benefit) => (
				<LabelSection
					key={benefit.label}
					className="font-medium text-xs px-2 py-1"
				>
					{benefit.label}
				</LabelSection>
			))}
		</div>
	);
};
