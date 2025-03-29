import { linkWhatsapp } from "@/data/landing-page/link-cta";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, HourglassIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "../ui/button";

type ButtonCTAProps = ComponentProps<"button"> & {
	theme?: "light" | "dark";
};

export const ButtonCTA = ({ className, theme = "dark" }: ButtonCTAProps) => {
	const textColor = theme === "dark" ? "text-muted-foreground" : "text-muted";

	return (
		<div className="w-full flex flex-col items-center gap-3">
			<Button
				className={cn(
					"w-full sm:w-fit font-semibold h-14 text-background px-8 has-[>svg]:px-8 uppercase bg-gradient-to-r from-orange-300 to-orange-400 transition hover:from-orange-400 hover:to-orange-300 hover:scale-95 shadow-xl hover:shadow-none shadow-black/25",
					className,
				)}
				asChild
			>
				<a href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
					Quero minha página
					<ArrowRightIcon className="size-5 shrink-0" />
				</a>
			</Button>

			<p
				className={`flex items-center gap-1 text-sm ${textColor} leading-none`}
			>
				<HourglassIcon className="block size-4 shrink-0" />
				Vagas limitadas. Garanta a sua agora!
			</p>
		</div>
	);
};
