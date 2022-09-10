import React from "react";


import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";

const EmailFormSchema = Yup.object().shape({
	name: Yup.string().required("Nome Obrigatório"),
	lastName: Yup.string(),
	email: Yup.string().email("Informe um email válido"),
	phone: Yup.string().required("Informe o número de telefone"),
	message: Yup.string().min(8).required("Informe uma mensagem"),
});


export function Form() {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		resolver: yupResolver(EmailFormSchema)
	});


	function sendEmail(data: unknown) {
		event?.preventDefault();
		console.log(data);
		reset();
	}

	return (
		<form className="flex flex-col flex-1 mb-8"
			data-aos="fade-up"
			data-aos-once="true"
			onSubmit={handleSubmit(sendEmail)}
		>

			<div className="flex items-center gap-2 mb-8">
				<div className="flex flex-col w-1/2">
					<Input
						name="name"
						register={register}
						title="Nome"
						type="text"
					/>
				</div>

				<div className="flex flex-col w-1/2">
					<Input
						name="lastName"
						register={register}
						title="Sobrenome"
						type="text"
					/>
				</div>
			</div>

			<div className="flex items-center gap-2 mb-8">
				<div className="flex flex-col w-1/2">
					<Input
						name="email"
						register={register}
						title="E-mail"
						type="email"
					/>
				</div>

				<div className="flex flex-col w-1/2">
					<Input
						name="phone"
						register={register}
						title="Telefone"
						type="text"
					/>
				</div>
			</div>

			<div className="flex">
				<div className="flex flex-col w-full">
					<Input
						name="message"
						register={register}
						title="Mensagem"
						message={true}
					/>
				</div>
			</div>

			<button type="submit" className="submitButton">
				Enviar e-mail
			</button>
		</form>
	);
}