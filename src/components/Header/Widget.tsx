import React, { useState } from "react";

import { useConfig } from "../../context/WidgetContext";
import ReactHowler from "react-howler";

import theme_switch_audio from "../../assets/theme-switch.wav";
import music_switch_audio from "../../assets/audio-switch.wav";

import {
	SunDim,
	MoonStars,
	SpeakerHigh,
	SpeakerSlash
} from "phosphor-react";

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
					<SunDim
						size={28}
						className="mt-6 ml-5 cursor-pointer hover:scale-105 transition-all"
						color="#F0E7DB"
					/>
				) : (
					<MoonStars
						size={28}
						className="mt-6 ml-5 cursor-pointer hover:scale-105 transition-all"
						color="#F0E7DB"
					/>
				)}
			</button>

			<div className="w-[25px] h-[60px] bg-red mt-[120px] rounded-full absolute">
				<button onClick={onSwitchAudio} disabled={musicTap} className="disabled:opacity-50">
					{audio ? (

						<SpeakerHigh
							size={18}
							className="ml-[4px] mt-[32px] cursor-pointer"
							color="#F0E7DB"
						/>
					) : (

						<SpeakerSlash
							size={18}
							className="ml-[4px] mt-[32px] cursor-pointer"
							color="#F0E7DB"
						/>
					)}
				</button>
			</div>
		</div>
	);
}
