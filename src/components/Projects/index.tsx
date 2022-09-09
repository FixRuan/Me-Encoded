import React from "react";

import { projectsArray } from "../../utils/projects";

export function Projects() {
	return (
		<section className="flex flex-col px-8 mt-24 mb-12" id="projects">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">Meus Projetos</h1>

			<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-12">

				{projectsArray.map(project => (
					<a target="_blank" href={project.link} key={project.name} className="flex flex-col mb-4 group" rel="noreferrer">
						<span className="text-center font-nunito font-bold dark:text-white">
							{project.name}
						</span>

						<div className="flex p-2 items-center justify-center">
							<img className="rounded-md group-hover:scale-105 transition-all duration-500" src={project.image} alt="project image" />
						</div>

						<p className="text-center md:text-base text-sm font-nunito font-medium dark:text-primary">
							{project.description}
						</p>
					</a>
				))}

			</div>
		</section>
	);
}
