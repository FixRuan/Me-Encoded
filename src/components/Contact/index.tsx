import React from "react";

import { mdiPhone, mdiEmail, mdiGithub, mdiLinkedin, mdiMapMarker } from "@mdi/js";
import Icon from "@mdi/react";

import contact_shape from "../../assets/contact-shape.svg";

export function Contact() {
	return (
		<section className="mb-4 px-8" id="contact">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">Contato</h1>

			<div className="flex flex-col md:flex-row mt-4 gap-4" data-aos="fade-left" data-aos-once="true">
				<div className="bg-white p-8 rounded-md relative md:max-w-[350px] h-[400px] dark:bg-darkSecondary  transition-all duration-700 mb-4">
					<h2 className="text-text text-xl font-nunito font-medium dark:text-white">
						Informações de contato
					</h2>

					<p className="font-nunito text-md dark:text-primary">
						Preencha o formulário e retornarei em até 24 horas
					</p>

					<div className="flex flex-col mt-8 mb-16">
						<span className="flex gap-2 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
							<Icon
								path={mdiPhone}
								size={1}
							/>
							(44) 99833-4877
						</span>
						<span className="flex mt-4 gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
							<Icon
								path={mdiEmail}
								size={1}
							/>
							ruangoio01@gmail.com
						</span>
						<span className="flex mt-4 gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
							<Icon
								path={mdiMapMarker}
								size={1}
							/>
							Goioerê PR
						</span>
					</div>

					<div className="flex items-center gap-2 md:mt-16">
						<a target="_blank" href="https://github.com/fixruan" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
							<Icon
								path={mdiGithub}
								size={0.8}
								color="#F0E7DB"
							/>
						</a>

						<a target="_blank" href="https://www.linkedin.com/in/fixruan/" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
							<Icon
								path={mdiLinkedin}
								size={0.8}
								color="#F0E7DB"
							/>
						</a>
					</div>

					<img src={contact_shape} alt="" className="absolute right-0 bottom-0" />
				</div>


				<form className="flex flex-col flex-1 mb-8"
					data-aos="fade-up"
					data-aos-once="true"
				>

					<div className="flex items-center gap-2 mb-8">
						<div className="flex flex-col w-1/2">
							<label htmlFor="name" className="text-red font-nunito font-medium">
								Nome
							</label>
							<input
								type="text"
								id="name"
								className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
							/>
						</div>

						<div className="flex flex-col w-1/2">
							<label htmlFor="lastName" className="text-red font-nunito font-medium">
								Sobrenome
							</label>
							<input
								type="text"
								id="lastName"
								className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
							/>
						</div>
					</div>

					<div className="flex items-center gap-2 mb-8">
						<div className="flex flex-col w-1/2">
							<label htmlFor="email" className="text-red font-nunito font-medium">
								E-mail
							</label>
							<input
								type="text"
								id="email"
								className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
							/>
						</div>

						<div className="flex flex-col w-1/2">
							<label htmlFor="phone" className="text-red font-nunito font-medium">
								Telefone
							</label>
							<input
								type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
							/>
						</div>
					</div>

					<div className="flex">
						<div className="flex flex-col w-full">
							<label htmlFor="message" className="text-red font-nunito font-medium">
								Mensagem
							</label>
							<textarea
								id="message"
								className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
								maxLength={10}
								cols={1}
								minLength={10}
							/>
						</div>
					</div>

					<button type="submit" className="bg-red rounded-md text-white p-3 mt-6 flex w-full 
					md:w-[200px] self-end items-center justify-center font-nunito font-medium opacity-80 hover:opacity-100 transition-all duration-300">
						Enviar e-mail
					</button>
				</form>
			</div>
		</section>
	);
}
