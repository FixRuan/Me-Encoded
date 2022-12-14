import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
	name: string;
	title: string;
	type?: string;
	register: any;
	message?: boolean;
	error?: any;
}

export function Input({ name, title, type, register, message, error }: InputProps) {
	return (
		<div className="relative flex flex-col">
			{error && <span className="text-xs text-slate-900 dark:text-purple-500 absolute -top-3">
				{error.message}
			</span>}

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
		</div>
	);
}
