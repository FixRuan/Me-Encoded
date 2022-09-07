import React, { createContext, ReactNode, useContext, useState } from "react";


interface DarkModeContextProps {
	handleDarkMode: () => void;
	darkMode: boolean;
}

const DarkModeContext = createContext({} as DarkModeContextProps);

interface DarkModeProviderProps {
	children: ReactNode;
}

function DarkmodeProvider({ children }: DarkModeProviderProps) {
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

	return (
		<DarkModeContext.Provider value={{
			handleDarkMode,
			darkMode
		}}>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	return context;
}

export { DarkmodeProvider, useDarkMode };
