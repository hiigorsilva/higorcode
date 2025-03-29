import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type LabelSectionProps = ComponentProps<"h3"> & {};

export const LabelSection = ({ children, className }: LabelSectionProps) => {
	return (
		<h3
			className={cn(
				"max-w-fit w-fit flex items-center gap-1 font-medium text-sm text-muted-foreground uppercase leading-none tracking-widest bg-foreground/5 px-4 py-1.5 rounded-full border border-foreground/10",
				className,
			)}
		>
			{children}
		</h3>
	);
};
