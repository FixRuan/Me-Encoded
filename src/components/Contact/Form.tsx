import React from "react";


import * as Yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EmailFormSchema = Yup.object().shape({
	name: Yup.string().required("Nome Obrigatório"),
	lastName: Yup.string(),
	email: Yup.string().email("Informe um email válido"),
	cel: Yup.string().required("Informe o número de telefone"),
	message: Yup.string().min(8).required("Informe uma mensagem"),
});

export function Form() {
	const form = useForm({
		resolver: yupResolver(EmailFormSchema)
	});


	function sendEmail() {
		event?.preventDefault();
		console.log("submit");
	}


	return (
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

			<button type="submit" className="submitButton" onClick={sendEmail}>
				Enviar e-mail
			</button>
		</form>
	);
}
