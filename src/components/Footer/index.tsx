import React from "react";
import { FooterWidget } from "./FooterWidget";

export function Footer() {
	return (
		<section className="h-16 w-full flex items-center justify-center mt-12 relative overflow-hidden" id="footer">
			<h2 className="font-nunito font-medium text-darkSecondary dark:text-white mr-3">
				© 2022 Ruan Pablo Gomes Rocha. All Rights Reserved.
			</h2>

			<FooterWidget />
		</section>
	);
}
