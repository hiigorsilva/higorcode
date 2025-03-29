import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export const FooterSection = () => {
	const currentYear = new Date().getFullYear();

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="relative w-full pt-[7.5rem] pb-8">
			<div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
				<span className="text-sm text-muted-foreground">
					© Higor Code {currentYear}. Todos os direitos reservados.
				</span>

				<div className="flex items-center gap-2">
					<span className="text-sm text-muted-foreground">Voltar ao topo</span>
					<Button onClick={handleScrollTop} size="icon" variant="secondary">
						<ArrowUpIcon className="size-5 shrink-0 text-muted-foreground" />
					</Button>
				</div>
			</div>
		</footer>
	);
};
