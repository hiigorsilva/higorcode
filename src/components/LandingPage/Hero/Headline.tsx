export const Headline = () => {
	return (
		<div className="max-w-2xl w-full flex flex-col gap-4">
			<h1 className="font-medium text-4xl sm:text-5xl text-start sm:text-center text-pretty sm:text-balance text-foreground tracking-tight">
				Aumente as vendas do seu infoproduto com páginas
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
					{" "}
					otimizadas para conversão
				</span>
			</h1>

			<p className="text-xl text-start sm:text-center text-pretty sm:text-balance  text-muted-foreground">
				Design moderno, responsivo, carregamento rápido e persuasivo.
			</p>
		</div>
	);
};
