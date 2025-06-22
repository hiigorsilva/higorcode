import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type ContainerLayoutProps = ComponentProps<"div"> & {};

export const ContainerLayout = ({
	children,
	className,
}: ContainerLayoutProps) => {
	return (
		<div className={cn("max-w-7xl w-full mx-auto", className)}>{children}</div>
	);
};
