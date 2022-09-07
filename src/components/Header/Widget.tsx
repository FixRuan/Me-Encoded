import React from "react";

import Icon from "@mdi/react";
import { mdiWeatherNight, mdiVolumeHigh } from "@mdi/js";


export function Widget() {
	return (
		<div className="absolute -left-10 -top-10 w-[100px] h-[100px] rounded-full bg-red flex items-center justify-center">
			<Icon
				className="mt-4 ml-4 cursor-pointer hover:scale-105 transition-all"
				path={mdiWeatherNight}
				size={1.2}
				color="#F0E7DB"
			/>
			<div className="w-[25px] h-[60px] bg-red mt-[120px] rounded-full absolute">
				<Icon
					className="ml-[3px] mt-[30px] cursor-pointer"
					path={mdiVolumeHigh}
					size={0.8}
					color="#F0E7DB"
				/>
			</div>
		</div>
	);
}
