interface TechGridProps {
	title: string;
	content: React.ReactNode;
}

export const TechGrid = ({ data }: { data: TechGridProps[] }) => {
	return (
		<div className="max-w-3xl w-full flex flex-col">
			{data.map((tech) => (
				<>
					{/* ITEM */}
					<div
						key={tech.title}
						className="relative flex justify-between items-start not-last:pb-24 not-last:border-l not-last:border-border"
					>
						{/* TITLE */}
						<div className="sticky top-20 flex justify-start items-center gap-4 -ml-3">
							<div className="w-fit h-fit rounded-full p-2 bg-orange-300">
								<div className="relative size-2 shrink-0 rounded-full bg-orange-400" />
							</div>
							<h3 className="font-light text-xl text-muted-foreground tracking-tight uppercase">
								{tech.title}
							</h3>
						</div>

						<ul className="flex flex-col gap-3">{tech.content}</ul>
					</div>
				</>
			))}
		</div>
	);
};
