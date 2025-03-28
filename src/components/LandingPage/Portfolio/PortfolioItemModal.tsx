import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { PortfolioType } from "@/data/landing-page/portfolio";
import type { ComponentProps, ReactNode } from "react";

type PortfolioModalProps = ComponentProps<typeof DialogTrigger> & {
	page: PortfolioType;
	children: ReactNode;
	open: boolean;
};

export const PortfolioItemModal = ({
	children,
	page,
	open,
}: PortfolioModalProps) => {
	return (
		<Dialog open={open}>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent
				onClick={(e) => e.stopPropagation()}
				className="min-w-[70vw] max-h-[85dvh] h-fit overflow-y-scroll p-0 border border-foreground/15"
			>
				<DialogHeader className="sr-only">
					<DialogTitle>{page.title}</DialogTitle>
					<DialogDescription>{page.project}</DialogDescription>
				</DialogHeader>

				<div className="flex-1 w-full rounded-md overflow-hidden">
					<img className="w-full" src={page.image} alt={page.title} />
				</div>
			</DialogContent>
		</Dialog>
	);
};
