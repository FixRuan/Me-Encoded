import React, { createContext, ReactNode, useContext, useState } from "react";


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
	const [darkMode, setDarkMode] = useState(false);
	const html = document.getElementsByTagName("html")[0];

	function handleDarkMode() {
		setDarkMode(!darkMode);

		if (!darkMode) {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}

	function handleAudio() {
		setAudio(!audio);
	}

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
