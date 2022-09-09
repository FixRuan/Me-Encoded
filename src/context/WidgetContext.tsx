import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface WidgetConfigContextProps {
	handleAudio: () => void;
	handleDarkMode: () => void;
	darkMode: boolean;
	audio: boolean;
}

const WidgetConfigContext = createContext({} as WidgetConfigContextProps);

interface WidgetConfigProviderProps {
	children: ReactNode;
}

function WidgetConfigProvider({ children }: WidgetConfigProviderProps) {
	const [audio, setAudio] = useState(false);
	const [darkMode, setDarkMode] = useState(() => {
		if (localStorage) {
			const theme = localStorage.getItem("theme");

			if (theme === "dark") {
				return true;
			}
		}
		return false;
	});
	const html = document.getElementsByTagName("html")[0];

	function handleDarkMode() {
		setDarkMode(!darkMode);

		if (!darkMode) {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}

	function handleAudio() {
		setAudio(!audio);
	}

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		console.log(theme);

		if (theme === "dark") {
			setDarkMode(true);
			html.classList.add("dark");
		} else {
			setDarkMode(false);
			html.classList.remove("dark");
		}
		console.log(darkMode);
	}, []);

	return (
		<WidgetConfigContext.Provider value={{
			handleDarkMode,
			handleAudio,
			audio,
			darkMode
		}}>
			{children}
		</WidgetConfigContext.Provider>
	);
}

function useConfig() {
	const context = useContext(WidgetConfigContext);
	return context;
}

export { WidgetConfigProvider, useConfig };
