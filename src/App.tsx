import React from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";

import { DarkmodeProvider } from "./context/DarkModeContext";

export function App() {
	return (
		<DarkmodeProvider>
			<Header />
			<About />
		</DarkmodeProvider>
	);
}
