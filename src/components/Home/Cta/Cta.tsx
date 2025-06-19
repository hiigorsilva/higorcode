import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { WhatsAppIcon } from "@/components/Globals/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { contacts } from "@/data/home/contact";
import { StarsIcon } from "lucide-react";

export const CtaSection = () => {
	const whatsAppLink = contacts.find(
		(contact) => contact.title === "WhatsApp",
	)?.link;

	return (
		<section className="w-full h-fit flex justify-center items-center px-5">
			<ContainerLayout className="flex flex-col gap-8 py-20 px-5 bg-foreground rounded-2xl">
				<h2 className="font-light text-3xl md:text-4xl text-center text-background uppercase tracking-tight">
					Vamos conversar?
				</h2>
				<div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 items-start gap-16 mx-auto">
					{/* TITLE */}
					<div className="flex flex-col gap-3">
						<p className="text-lg text-center md:text-start text-background/75 text-balance md:text-pretty">
							Estou aberto a novas oportunidades. Clique no botão e me mande uma
							mensagem.
						</p>
					</div>

					{/* BUTTON */}
					<div className="flex flex-col items-center gap-1">
						<Button
							className="w-full min-h-10 h-fit text-black bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-300 hover:scale-[98%] shadow shadow-black/25 hover:shadow-none"
							asChild
						>
							<a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
								<WhatsAppIcon />
								Entrar em contato
							</a>
						</Button>

						<span className="flex justify-start items-center gap-1.5 text-sm text-background/75">
							<StarsIcon className="size-4 shrink-0 text-background/75" />
							Respondo rapidamente
						</span>
					</div>
				</div>
			</ContainerLayout>
		</section>
	);
};
