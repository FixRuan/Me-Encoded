import React from "react";

import reactPng from "../../assets/skills/react.png";


export function Skills() {
	return (
		<section className="px-8 mb-12">
			<h1 className="font-bold font-nunito text-DarkRed dark:text-red">Skills</h1>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">

				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-darkSecondary">
					<div className="grid grid-cols-2 gap-4 justify-center items-center">
						<div className="m-auto">
							<img src={reactPng} alt="/" width="64px" height="64px" />
						</div>
						<div className="flex flex-col items-center justify-center font-nunito font-bold text-xl dark:text-primary ">
							<h3>React</h3>
						</div>
					</div>
				</div>

				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-darkSecondary">
					<div className="grid grid-cols-2 gap-4 justify-center items-center">
						<div className="m-auto">
							<img src={reactPng} alt="/" width="64px" height="64px" />
						</div>
						<div className="flex flex-col items-center justify-center font-nunito font-bold text-xl dark:text-primary ">
							<h3>React</h3>
						</div>
					</div>
				</div>

				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-darkSecondary">
					<div className="grid grid-cols-2 gap-4 justify-center items-center">
						<div className="m-auto">
							<img src={reactPng} alt="/" width="64px" height="64px" />
						</div>
						<div className="flex flex-col items-center justify-center font-nunito font-bold text-xl dark:text-primary ">
							<h3>React</h3>
						</div>
					</div>
				</div>

				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-darkSecondary">
					<div className="grid grid-cols-2 gap-4 justify-center items-center">
						<div className="m-auto">
							<img src={reactPng} alt="/" width="64px" height="64px" />
						</div>
						<div className="flex flex-col items-center justify-center font-nunito font-bold text-xl dark:text-primary ">
							<h3>React</h3>
						</div>
					</div>
				</div>

				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white dark:bg-darkSecondary">
					<div className="grid grid-cols-2 gap-4 justify-center items-center">
						<div className="m-auto">
							<img src={reactPng} alt="/" width="64px" height="64px" />
						</div>
						<div className="flex flex-col items-center justify-center font-nunito font-bold text-xl dark:text-primary ">
							<h3>React</h3>
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
