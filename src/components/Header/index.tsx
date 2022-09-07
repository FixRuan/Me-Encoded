import React from "react";

import Icon from "@mdi/react";
import { mdiGhostOutline, mdiGhost, mdiGit, mdiCardsClubOutline } from "@mdi/js";

import lineSVG from "../../assets/line.svg";
import { Widget } from "./Widget";


export function Header() {

	return (
		<div className='flex w-full h-16 bg-secondary fixed items-center justify-between px-[180px]'>
			<Widget />
			<div className="flex items-center gap-1 group cursor-pointer">
				<Icon
					className="group-hover:-rotate-12 transition-all group-hover:scale-125"
					path={mdiCardsClubOutline}
					size={1}
					color="#0F1111"
				/>
				<span className="font-nunito font-bold text-text">Ruan Pablo</span>
				<img src={lineSVG} alt="line" className="absolute left-[86px] -bottom-[2px]" />
			</div>
			<div>
				<ul className="flex gap-8">
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
		</div>
	);
}
