import { Button } from "@/components/ui/button";
import type { PortfolioType } from "@/data/landing-page/portfolio";
import { type ComponentProps, type MouseEventHandler, useState } from "react";
import { PortfolioItemModal } from "./PortfolioItemModal";

type PortfolioItemProps = ComponentProps<"div"> & {
	page: PortfolioType;
};

export const PortfolioItem = ({ page }: PortfolioItemProps) => {
	const [openModal, setOpenModal] = useState(false);

	const handleClick = () => {
		setOpenModal((prev) => !prev);
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<li
			onClick={handleClick}
			className="max-w-xl lg:max-w-none w-full rounded-xl border border-foreground/25 cursor-pointer transition duration-200 hover:scale-[99%] overflow-hidden"
		>
			<div className="relative min-w-80 w-full aspect-square overflow-hidden">
				<img
					className="absolute left-0 top-0 block w-full object-cover"
					src={page.thumb}
					alt={page.title}
				/>
			</div>

			<div className="w-full h-px bg-foreground/25" />

			<div className="flex justify-between items-center gap-4 bg-foreground/5 backdrop-blur-md px-4 py-3">
				<div>
					<h3 className="font-medium uppercase text-foreground text-base">
						{page.title}
					</h3>
					<p className="text-sm text-muted-foreground">{page.project}</p>
				</div>

				<div>
					<PortfolioItemModal page={page} open={openModal}>
						<Button variant="outline" size="sm">
							Ver Página
						</Button>
					</PortfolioItemModal>
				</div>
			</div>
		</li>
	);
};
