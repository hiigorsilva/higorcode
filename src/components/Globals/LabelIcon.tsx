import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type LabelIconProps = ComponentProps<"svg">;

export const LabelIcon = ({ className }: LabelIconProps) => {
	return (
		<svg
			className={cn("block size-3.5 shrink-0", className)}
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Label Icon</title>
			<path
				d="M12.6624 11.4032L8.11465 8.35484V5.64516L12.6624 2.59677L14 4.79839L10.1062 6.40726V7.59274L14 9.20161L12.6624 11.4032ZM8.0552 0L7.54989 5.27823L5.05308 6.63306L0 4.40323L1.33758 2.22984L4.75584 4.60081L5.85563 4.00807L5.38004 0.0282254L8.0552 0ZM0 9.59678L5.05308 7.36694L7.54989 8.72177L8.0552 14L5.38004 13.9718L5.85563 9.99194L4.75584 9.39919L1.33758 11.7702L0 9.59678Z"
				fill="currentColor"
			/>
		</svg>
	);
};
