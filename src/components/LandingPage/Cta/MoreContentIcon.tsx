import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type MoreContentIconProps = ComponentProps<"svg"> & {};

export const MoreContentIcon = ({ className }: MoreContentIconProps) => {
	return (
		<svg
			className={cn("relative block z-10 w-[135px] h-[40px]", className)}
			viewBox="0 0 135 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>More Content</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M100.556 20C82.5384 39.9998 67.037 40 67.037 40C67.037 40 51.5358 40 33.5185 20C15.5012 0 0 0 0 0H134.074C134.074 0 118.573 0.000180845 100.556 20ZM52.8294 9.22013C52.2146 8.68028 51.2785 8.74106 50.7387 9.35589C50.1988 9.97072 50.2596 10.9068 50.8744 11.4466L65.0821 23.9217C66.2005 24.9036 67.8737 24.9036 68.9921 23.9217L83.1998 11.4466C83.8146 10.9068 83.8754 9.97072 83.3355 9.35589C82.7957 8.74106 81.8596 8.68028 81.2448 9.22013L67.0371 21.6952L52.8294 9.22013Z"
				fill="#09090B"
			/>
		</svg>
	);
};
