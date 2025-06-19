import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type EmailIconProps = ComponentProps<"svg">;

export const EmailIcon = ({ className }: EmailIconProps) => {
	return (
		<svg
			className={cn(
				"size-5 shrink-0 text-orange-500 dark:text-orange-300",
				className,
			)}
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Email</title>
			<path
				d="M17.5 4.25H2.5C2.33424 4.25 2.17527 4.31585 2.05806 4.43306C1.94085 4.55027 1.875 4.70924 1.875 4.875V15.5C1.875 15.8315 2.0067 16.1495 2.24112 16.3839C2.47554 16.6183 2.79348 16.75 3.125 16.75H16.875C17.2065 16.75 17.5245 16.6183 17.7589 16.3839C17.9933 16.1495 18.125 15.8315 18.125 15.5V4.875C18.125 4.70924 18.0592 4.55027 17.9419 4.43306C17.8247 4.31585 17.6658 4.25 17.5 4.25ZM15.893 5.5L10 10.9023L4.10703 5.5H15.893ZM16.875 15.5H3.125V6.29609L9.57734 12.2109C9.69265 12.3168 9.84348 12.3755 10 12.3755C10.1565 12.3755 10.3074 12.3168 10.4227 12.2109L16.875 6.29609V15.5Z"
				fill="currentColor"
			/>
		</svg>
	);
};
