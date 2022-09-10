import React from "react";

interface InputProps {
	name: string;
	title: string;
	type?: string;
	register: any;
	message?: boolean;
}

export function Input({ name, title, type, register, message }: InputProps) {
	return (
		<>
			<label htmlFor={name} className="text-red font-nunito font-medium">
				{title}
			</label>
			{message ? (
				<textarea
					id={name}
					className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
								text-text dark:text-white dark:border-white"
					maxLength={80}
					cols={1}
					minLength={10}
					{...register(name)}
				/>)
				: (
					<input
						type={type}
						id={name}
						className="h-10 border-b-2 border-darkSecondary bg-transparent outline-none 
										text-text dark:text-white dark:border-white"
						{...register(name)}
					/>
				)
			}
		</>
	);
}
