import React from "react";

import Icon from "@mdi/react";
import { mdiInformationVariant } from "@mdi/js";


export function About() {
	return (
		<div className="mt-16 w-full grid h-[680px] grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
			<div className="mt-12 h-[360px] mx-8 bg-transparent flex">
				<h2 className="text-red font-MPlus font-bold">3d HERE</h2>
			</div>
			<div className="mt-12 h-[360px] mx-8 flex justify-end">
				<header className="flex gap-4 h-40">
					<div className="flex flex-col">
						<h2 className="font-nunito font-bold text-text text-right dark:text-white">Ruan Pablo Gomes Rocha</h2>
						<span className="font-nunito font-medium text-subText text-right dark:text-secondary">Junior FrontEnd and Mobile Developer</span>

						<div className="flex mt-auto mb-4">
							<span className="flex items-center justify-center px-4 py-1 rounded-lg text-lg font-nunito font-medium bg-white text-red dark:bg-darkSecondary transition-all duration-500">
								<Icon
									path={mdiInformationVariant}
									size={1}
								/>
								About ME
							</span>
						</div>
					</div>
					<img
						className="w-[100px] h-[100px] rounded-full"
						src="https://i.pinimg.com/564x/0b/02/d0/0b02d0f8910069b921ba9fb041ca27be.jpg"
						alt="Perfil Image"
					/>
				</header>
			</div>
		</div>
	);
}
