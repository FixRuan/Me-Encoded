import React, { useState } from "react";

import Icon from "@mdi/react";
import { mdiMenu, mdiGit, mdiCardsClubOutline, mdiClose, } from "@mdi/js";

import lineSVG from "../../assets/line.svg";
import { Widget } from "./Widget";
import { useDarkMode } from "../../context/DarkModeContext";


export function Header() {
	const [nav, setNav] = useState(false);
	const { darkMode } = useDarkMode();

	console.log(darkMode);

	return (
		<div>
			<div className='flex w-full h-16 bg-secondary fixed items-center justify-between px-24 dark:bg-darkSecondary transition-colors duration-700'>
				<Widget />
				<div className="flex items-center gap-1 group cursor-pointer">
					<Icon
						className="group-hover:-rotate-12 transition-all group-hover:scale-125"
						path={mdiCardsClubOutline}
						size={1}
						color={`${darkMode ? "#F0E7DB" : "#0F1111"}`}
					/>
					<span className="font-nunito font-bold text-text dark:text-primary">Ruan Pablo</span>
					<img src={lineSVG} alt="line" className="absolute left-0 -bottom-[2px]" />
				</div>
				<div className="sm:hidden md:flex">
					<ul className="flex gap-8 dark:text-primary">
						<li className="font-nunito"><a className="hover:underline" href="#">Contact</a></li>
						<li className="font-nunito"><a className="hover:underline" href="#">Project</a></li>
						<li className="font-nunito">
							<a className="flex items-center gap-1 hover:underline" href="#">
								Source
								<Icon
									path={mdiGit}
									size={0.8}
									color="#D04164"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div className="sm:flex md:hidden">
					<button onClick={() => setNav(true)} className="cursor-pointer">
						<Icon
							className="transition-all hover:scale-125 ease-in-out duration-500"
							path={mdiMenu}
							size={1}
							color="#D04164"
						/>
					</button>

				</div>
			</div>

			<div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
				<div className={
					nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary dark:bg-darkPrimary p-10 ease-in duration-500"
						: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
				}>
					<div className="flex flex-col">
						<button onClick={() => setNav(false)} className="flex items-center justify-center bg-red w-6 h-6 rounded-full self-end">
							<Icon
								className="cursor-pointer"
								path={mdiClose}
								size={0.6}
								color="#F4EDE4"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
