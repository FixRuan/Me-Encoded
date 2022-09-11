import React, { useState } from "react";

import lightLineSVG from "../../assets/LightLine.svg";
import darkLineSVG from "../../assets/DarkLine.svg";

import { Widget } from "./Widget";
import { useConfig } from "../../context/WidgetContext";

import ReactHowler from "react-howler";
import musicMp3 from "../../assets/music.mp3";

export function Header() {
	const [nav, setNav] = useState(false);
	const { darkMode, audio } = useConfig();

	return (
		<div className="fixed top-0 left-0 z-50" id="header">

			<ReactHowler
				src={musicMp3}
				playing={audio}
				loop
				volume={0.05}
			/>

			<div className='flex w-full h-16 bg-secondary fixed items-center justify-between px-8 dark:bg-darkSecondary transition-colors duration-700'>
				<Widget />

				<div className="flex items-center gap-1 group cursor-pointer ml-12 transition-all duration-700">
					{/* Icon in name - group-hover:-rotate-12 transition-all group-hover:scale-125
					color={`${darkMode ? "#FFFFFF" : "#0F1111"}`} */}

					<a href="/#about">
						<span className="font-nunito font-bold text-text dark:text-white text-sm md:text-base">Ruan Pablo</span>
					</a>
					<img src={darkMode ? darkLineSVG : lightLineSVG} alt="line" className="absolute left-0 -bottom-[2px] -z-50" />
				</div>
				<div className="hidden md:flex">
					<ul className="flex gap-8 dark:text-primary">
						<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#projects">Projetos</a></li>
						<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#skills">Habilidades</a></li>
						<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#contact">Contato</a></li>
						<li className="font-nunito">
							<a target="_blank" className="flex items-center gap-1 hover:underline" href="https://github.com/FixRuan/Me-Encoded" rel="noreferrer">
								Source
								{/* git source icon  color="#D04164"*/}
							</a>
						</li>
					</ul>
				</div>
				<div className="sm:flex md:hidden">
					<button onClick={() => setNav(true)} className="cursor-pointer">
						{/* Menu icon  color="#D04164 - transition-all hover:scale-125 ease-in-out duration-500"*/}
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
							{/* close Icon color="#F4EDE4" - cursor-pointer*/}
						</button>

						<h2 className="text-xl font-MPlus font-bold mb-6 text-red">Navegação</h2>
						<ul className="flex flex-col gap-8 dark:text-primary">
							<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#projects">Projetos</a></li>
							<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#skills">Habilidades</a></li>
							<li className="font-nunito"><a onClick={() => setNav(false)} className="hover:underline" href="/#contact">Contato</a></li>
							<li className="font-nunito">
								<a target="_blank"
									href="https://github.com/FixRuan/Me-Encoded"
									rel="noreferrer"
									className="flex items-center gap-1 hover:underline"
								>
									Source
									{/* git source icon  color="#D04164"*/}
								</a>
							</li>
						</ul>

						<div className="mt-20">
							<h2 className="text-xl font-MPlus font-bold text-red">Links</h2>

							<div className="flex gap-4 mt-4">
								<a target="_blank" href="https://github.com/fixruan" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
									{/* github icon  color="#F0E7DB"*/}
								</a>

								<a target="_blank" href="https://www.linkedin.com/in/fixruan/" className="w-8 h-8 rounded-full text-primary flex items-center justify-center bg-red hover:scale-105 transition-all duration-400" rel="noreferrer">
									{/* linkedin icon  color="#F0E7DB"*/}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
