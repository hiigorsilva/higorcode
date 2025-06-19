import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { Button } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";

export const FooterSection = () => {
	const currentYear = new Date().getFullYear();

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="w-full h-fit px-5">
			<ContainerLayout className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-border py-8">
				{/* COPYRIGHT */}
				<div className="flex justify-start items-center gap-2">
					<span className="font-light text-sm text-muted-foreground text-nowrap">
						© Higor Code {currentYear}.
					</span>
					<span className="font-light text-sm text-muted-foreground text-nowrap">
						Todos os direitos reservados.
					</span>
				</div>

				{/* BUTTON */}
				<div className="w-fit flex items-center gap-4">
					<Button
						className="group min-h-10 h-fit w-fit text-sm text-muted-foreground group-hover:text-foreground rounded-md bg-transparent hover:bg-transparent"
						onClick={handleScrollToTop}
						variant="ghost"
					>
						Voltar ao topo
						<ChevronUpIcon className="size-5 shrink-0 text-muted-foreground group-hover:text-foreground" />
					</Button>
				</div>
			</ContainerLayout>
		</footer>
	);
};
