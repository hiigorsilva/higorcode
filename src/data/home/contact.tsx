import { EmailIcon } from "@/components/Home/icons/Email";
import { GithubIcon } from "@/components/Home/icons/Github";
import { InstagramIcon } from "@/components/Home/icons/Instagram";
import { LinkedinIcon } from "@/components/Home/icons/Linkedin";
import { WhatsAppIcon } from "@/components/Home/icons/Whatsapp";

export const contacts = [
	{
		icon: <WhatsAppIcon />,
		title: "WhatsApp",
		value: "+55 (62) 9 9815-2434",
		link: "https://api.whatsapp.com/send/?phone=62998152434",
	},
	{
		icon: <GithubIcon />,
		title: "Github",
		value: "@hiigorsilva",
		link: "https://github.com/hiigorsilva",
	},
	{
		icon: <LinkedinIcon />,
		title: "Linkedin",
		value: "@hiigorsilva",
		link: "https://www.linkedin.com/in/hiigorsilva",
	},
	{
		icon: <InstagramIcon />,
		title: "Instagram",
		value: "@hiigorcode",
		link: "https://www.instagram.com/higorcode",
	},
	{
		icon: <EmailIcon />,
		title: "E-mail",
		value: "higorscontato@gmail.com",
		link: "mailto:higorscontato@gmail.com",
	},
];
