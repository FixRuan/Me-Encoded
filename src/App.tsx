import React from "react";
import { Header } from "./components/Header";

import { DarkmodeProvider } from "./context/DarkModeContext";

export function App() {
	return (
		<DarkmodeProvider>
			<Header />
		</DarkmodeProvider>
	);
}
