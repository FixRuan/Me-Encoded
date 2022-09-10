import React from "react";


import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";

const EmailFormSchema = Yup.object().shape({
	name: Yup.string().required("Nome Obrigatório"),
	lastName: Yup.string(),
	email: Yup.string().email("Informe um email válido").required("E-mail obrigatório"),
	phone: Yup.string().required("Informe o número de telefone"),
	mess: Yup.string().min(8, "Mínimo de 8 caracteres").required("Informe uma mensagem"),
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
						error={errors.name}
					/>
				</div>

				<div className="flex flex-col w-1/2">
					<Input
						name="lastName"
						register={register}
						title="Sobrenome"
						type="text"
						error={errors.lastName}
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
						error={errors.email}
					/>
				</div>

				<div className="flex flex-col w-1/2">
					<Input
						name="phone"
						register={register}
						title="Telefone"
						type="text"
						error={errors.phone}
					/>
				</div>
			</div>

			<div className="flex">
				<div className="flex flex-col w-full">
					<Input
						name="mess"
						register={register}
						title="Mensagem"
						message={true}
						error={errors.mess}
					/>
				</div>
			</div>

			<button type="submit" className="submitButton">
				Enviar e-mail
			</button>
		</form>
	);
}
