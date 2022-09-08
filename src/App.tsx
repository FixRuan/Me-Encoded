import React from "react";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import { DarkmodeProvider } from "./context/DarkModeContext";

export function App() {
	return (
		<DarkmodeProvider>
			<Header />
			<About />
			<Projects />
			<Skills />
		</DarkmodeProvider>
	);
}
