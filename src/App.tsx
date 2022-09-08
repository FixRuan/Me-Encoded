import React from "react";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import { WidgetConfigProvider } from "./context/WidgetContext";



export function App() {
	return (
		<WidgetConfigProvider>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</WidgetConfigProvider>
	);
}
