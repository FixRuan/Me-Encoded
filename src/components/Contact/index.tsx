import React from "react";

import { mdiPhone, mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

import contact_shape from "../../assets/contact-shape.svg";

export function Contact() {
	return (
		<section className="mb-4 px-8 ">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">Contact-me</h1>

			<div className="grid md:grid-cols-2 mt-4">
				<div className="bg-white p-8 rounded-md relative md:max-w-[350px] h-[400px] dark:bg-darkSecondary  transition-all duration-700">
					<h2 className="text-text text-xl font-nunito font-medium dark:text-white">Contact Information</h2>
					<p className="font-nunito text-md dark:text-primary">
						Fill  up the form and I will get back to you within 24 hours
					</p>

					<div className="flex flex-col mt-8 mb-16">
						<span className="flex gap-2 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
							<Icon
								path={mdiPhone}
								size={1}
							/>
							(xx) xxxxx-xxxx
						</span>
						<span className="flex gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
							<Icon
								path={mdiEmail}
								size={1}
							/>
							ruangoio01@gmail.com
						</span>
					</div>

					<div className="flex items-center gap-2 md:mt-16">
						<a href="#" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400">
							<Icon
								path={mdiGithub}
								size={0.8}
								color="#F0E7DB"
							/>
						</a>

						<a href="#" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400">
							<Icon
								path={mdiLinkedin}
								size={0.8}
								color="#F0E7DB"
							/>
						</a>
					</div>

					<img src={contact_shape} alt="" className="absolute right-0 bottom-0" />
				</div>


				<div></div>
			</div>
		</section>
	);
}
