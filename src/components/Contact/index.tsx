import React from "react";

import { Form } from "./Form";
import { Info } from "./Info";

export function Contact() {
	return (
		<section className="mb-4 px-8" id="contact">
			<h1 className="font-bold font-nunito text-2xl text-DarkRed dark:text-red">Contato</h1>

			<div className="flex flex-col md:flex-row mt-4 gap-4" data-aos="fade-left" data-aos-once="true">
				<Info />
				<Form />
			</div>
		</section>
	);
}
