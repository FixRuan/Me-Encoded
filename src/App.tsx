import React from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";

import { DarkmodeProvider } from "./context/DarkModeContext";

export function App() {
	return (
		<DarkmodeProvider>
			<Header />
			<About />
			<Projects />
		</DarkmodeProvider>
	);
}
