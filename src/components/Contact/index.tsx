import React from "react";

import { mdiPhone, mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";

import contact_shape from "../../assets/contact-shape.svg";

export function Contact() {
	return (
		<section className="mb-4 px-8 ">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">Contact-me</h1>

			<div className="flex flex-col md:flex-row mt-4 gap-4">
				<div className="bg-white p-8 rounded-md relative md:max-w-[350px] h-[400px] dark:bg-darkSecondary  transition-all duration-700 mb-4">
					<h2 className="text-text text-xl font-nunito font-medium dark:text-white">
						Contact Information
					</h2>

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
						<span className="flex mt-4 gap-1 items-center text-text font-nunito font-medium text-xl  dark:text-secondary">
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


				<form className="flex flex-col flex-1 mb-8">

					<div className="flex items-center gap-2 mb-8">
						<div className="flex flex-col w-1/2">
							<label htmlFor="name" className="text-red font-nunito font-medium">
								First Name
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
								Last Name
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
								Email
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
								Phone
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
								Message
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
					md:w-1/4 self-end items-center justify-center font-nunito font-medium">
						Send Email
					</button>
				</form>
			</div>
		</section>
	);
}
