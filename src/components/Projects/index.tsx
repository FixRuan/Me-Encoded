import React from "react";


import devlandiaImg from "../../assets/devlandia.png";

export function Projects() {
	return (
		<section className="flex flex-col px-8 mt-24 mb-12" id="projects">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">My Projects</h1>

			<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">
				<div className="flex flex-col mb-4">
					<span className="text-center font-nunito font-bold dark:text-white">
						Devlândia
					</span>

					<div className="flex p-2 items-center justify-center">
						<img className="rounded-md" src={devlandiaImg} alt="project image" />
					</div>

					<p className="text-center md:text-base text-sm font-nunito font-medium dark:text-primary">
						Aplicativo gratuito para aprender programação.
					</p>
				</div>

				<div className="flex flex-col mb-4">
					<span className="text-center font-nunito font-bold dark:text-white">
						Devlândia
					</span>

					<div className="flex p-2 items-center justify-center">
						<img className="rounded-md" src={devlandiaImg} alt="project image" />
					</div>

					<p className="text-center md:text-base text-sm font-nunito font-medium dark:text-primary">
						Aplicativo gratuito para aprender programação.
					</p>
				</div>

				<div className="flex flex-col mb-4">
					<span className="text-center font-nunito font-bold dark:text-white">
						Devlândia
					</span>

					<div className="flex p-2 items-center justify-center">
						<img className="rounded-md" src={devlandiaImg} alt="project image" />
					</div>

					<p className="text-center md:text-base text-sm font-nunito font-medium dark:text-primary">
						Aplicativo gratuito para aprender programação.
					</p>
				</div>

				<div className="flex flex-col mb-4">
					<span className="text-center font-nunito font-bold dark:text-white">
						Devlândia
					</span>

					<div className="flex p-2 items-center justify-center">
						<img className="rounded-md" src={devlandiaImg} alt="project image" />
					</div>

					<p className="text-center md:text-base text-sm font-nunito font-medium dark:text-primary">
						Aplicativo gratuito para aprender programação.
					</p>
				</div>



			</div>
		</section>
	);
}
