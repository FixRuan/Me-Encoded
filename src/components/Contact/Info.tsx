import React from "react";

import contact_shape from "../../assets/contact-shape.svg";

import {
	Phone,
	EnvelopeSimple,
	MapPin,
	GithubLogo,
	LinkedinLogo,
} from "phosphor-react";

export function Info() {
	return (
		<div className="bg-white p-8 rounded-md relative md:max-w-[350px] h-[400px] dark:bg-darkSecondary  transition-all duration-700 mb-4">
			<h2 className="text-text text-xl font-nunito font-medium dark:text-white">
				Informações de contato
			</h2>

			<p className="font-nunito text-md dark:text-primary">
				Preencha o formulário e retornarei em até 24 horas
			</p>

			<div className="flex flex-col mt-8 mb-16">
				<span className="flex gap-2 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
					<Phone size={26} />
					(44) 99833-4877
				</span>
				<span className="flex mt-4 gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
					<EnvelopeSimple size={26} />
					ruangoio01@gmail.com
				</span>
				<span className="flex mt-4 gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
					<MapPin size={26} />
					Goioerê PR
				</span>
			</div>

			<div className="flex items-center gap-2 md:mt-16">
				<a target="_blank" href="https://github.com/fixruan" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
					<GithubLogo size={18} color="#F0E7DB" />
				</a>

				<a target="_blank" href="https://www.linkedin.com/in/fixruan/" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
					<LinkedinLogo size={18} color="#F0E7DB" />
				</a>
			</div>

			<img src={contact_shape} alt="" className="absolute right-0 bottom-0" />
		</div>
	);
}
