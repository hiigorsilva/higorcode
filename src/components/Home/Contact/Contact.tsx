import { ContainerLayout } from "@/components/Globals/ContainerLayout";
import { InstagramIcon } from "@/components/Home/icons/Instagram";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contacts } from "@/data/home/contact";
import { Users2Icon } from "lucide-react";

export const ContactSection = () => {
	return (
		<section id="experience" className="w-full h-fit py-36">
			<ContainerLayout className="flex flex-col gap-6">
				{/* TITLE */}
				<div className="flex items-center gap-3">
					<Users2Icon className="size-8 shrink-0 text-orange-300" />
					<h2 className="font-light text-4xl text-foreground uppercase tracking-tight">
						Contatos
					</h2>
				</div>

				<div className="grid grid-cols-2 items-start gap-16">
					{/* SUBTITLE */}
					<div>
						<p className="max-w-lg w-full text-lg text-muted-foreground">
							Interessado em trabalhar juntos? Tem uma proposta de trabalho ou
							projeto? Ficarei feliz em conversar com você!
						</p>
					</div>

					{/* CARD CONTACT */}
					<Card className="w-full">
						<CardContent className="flex flex-col gap-4">
							{contacts.map((contact) => (
								<Button
									key={contact.title}
									variant="ghost"
									className="w-fit h-fit justify-start text-start"
									asChild
								>
									<a
										href={contact.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="grid place-content-center size-8 shrink-0 rounded-lg bg-gradient-to-r from-orange-300/15 to-orange-400/15">
											{contact.icon}
										</div>

										<div className="flex flex-col gap-0.5">
											<h4 className="font-normal text-sm text-foreground uppercase leading-none">
												{contact.title}
											</h4>
											<strong className="font-light text-xs text-muted-foreground tracking-tight leading-none">
												{contact.value}
											</strong>
										</div>
									</a>
								</Button>
							))}
						</CardContent>
					</Card>
				</div>
			</ContainerLayout>
		</section>
	);
};
