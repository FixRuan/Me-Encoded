import React, { useState } from "react";

import Icon from "@mdi/react";
import {
	mdiWeatherNight,
	mdiVolumeHigh,
	mdiVolumeOff,
	mdiWhiteBalanceSunny
} from "@mdi/js";

import { useConfig } from "../../context/WidgetContext";
import ReactHowler from "react-howler";

import theme_switch_audio from "../../assets/theme-switch.wav";
import music_switch_audio from "../../assets/audio-switch.wav";

export function Widget() {
	const [themeTap, setThemeTap] = useState(false);
	const [musicTap, setMusicTap] = useState(false);

	const {
		audio,
		darkMode,
		handleDarkMode,
		handleAudio
	} = useConfig();

	function onSwitchTheme() {
		setThemeTap(true);
		handleDarkMode();
	}

	function onSwitchAudio() {
		setMusicTap(true);
		handleAudio();
	}

	return (
		<div className="absolute -left-10 -top-10 w-[100px] h-[100px] rounded-full bg-red flex items-center justify-center">
			<ReactHowler
				src={theme_switch_audio}
				playing={themeTap}
				onEnd={() => setThemeTap(false)}
				volume={0.05}
			/>

			<ReactHowler
				src={music_switch_audio}
				playing={musicTap}
				onEnd={() => setMusicTap(false)}
				volume={0.05}
			/>

			<button onClick={onSwitchTheme} disabled={themeTap} className="disabled:opacity-50">
				{darkMode ? (
					<Icon
						className="mt-4 ml-4 cursor-pointer hover:scale-105 transition-all"
						path={mdiWhiteBalanceSunny}
						size={1.2}
						color="#F0E7DB"
					/>
				) : (
					<Icon
						className="mt-4 ml-4 cursor-pointer hover:scale-105 transition-all"
						path={mdiWeatherNight}
						size={1.2}
						color="#F0E7DB"
					/>
				)}
			</button>

			<div className="w-[25px] h-[60px] bg-red mt-[120px] rounded-full absolute">
				<button onClick={onSwitchAudio} disabled={musicTap} className="disabled:opacity-50">
					{audio ? (
						<Icon
							className="ml-[3px] mt-[30px] cursor-pointer"
							path={mdiVolumeHigh}
							size={0.8}
							color="#F0E7DB"
						/>
					) : (
						<Icon
							className="ml-[3px] mt-[30px] cursor-pointer"
							path={mdiVolumeOff}
							size={0.8}
							color="#F0E7DB"
						/>
					)}
				</button>
			</div>
		</div>
	);
}
