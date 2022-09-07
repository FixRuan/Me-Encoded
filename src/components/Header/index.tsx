import React from "react";

import Icon from "@mdi/react";
import { mdiGhostOutline, mdiGit } from "@mdi/js";

export function Header() {

	return (
		<div className='flex w-full h-16 bg-secondary fixed items-center justify-between px-[180px]'>
			<div className="flex items-center gap-1">
				<Icon
					path={mdiGhostOutline}
					size={1}
					color="#0F1111"
				/>
				<span className="font-nunito font-semibold text-text">Ruan Pablo</span>
			</div>
			<div>
				<ul className="flex gap-8">
					<li className="font-nunito"><a href="#">Contact</a></li>
					<li className="font-nunito"><a href="#">Project</a></li>
					<li className="font-nunito">
						<a className="flex items-center gap-1" href="#">
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
