import React from "react";

import Icon from "@mdi/react";
import { mdiInformationVariant } from "@mdi/js";


export function About() {
	return (
		<div className="mt-16 w-full grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-2">
			<div className="mt-12 h-[360px] mx-8 bg-transparent flex">
				<h2 className="text-red font-MPlus font-bold">3d HERE</h2>
			</div>
			<div className="mt-12 h-[360px] mx-8 flex flex-col">
				<header className="flex gap-4 justify-end">

					<div className="flex flex-col">
						<h2 className="font-nunito font-bold text-text text-right dark:text-white">
							Ruan Pablo Gomes Rocha
						</h2>
						<span className="font-nunito font-medium text-subText text-right dark:text-secondary">
							Junior FrontEnd and Mobile Developer
						</span>
					</div>

					<img
						className="w-[100px] h-[100px] rounded-full"
						src="https://i.pinimg.com/564x/0b/02/d0/0b02d0f8910069b921ba9fb041ca27be.jpg"
						alt="Perfil Image"
					/>

				</header>

				<span className="flex w-[140px] mb-4 items-center justify-center px-4 py-1 rounded-lg text-lg font-nunito font-medium bg-white text-red dark:bg-darkSecondary transition-all duration-500">
					<Icon
						path={mdiInformationVariant}
						size={1}
					/>
					About ME
				</span>
				<span className="text-justify font-nunito text-subText dark:text-primary h-auto">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industrys
					standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages.
				</span>
			</div>
		</div>
	);
}
