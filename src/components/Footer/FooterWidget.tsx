import React from "react";

import { CaretDoubleUp } from "phosphor-react";

export function FooterWidget() {
	return (
		<a href="/#about" className="absolute -right-5 -bottom-5 w-16 h-16 bg-red rounded-full flex items-center justify-center">
			<CaretDoubleUp size={24} color="#F0E7DB" className="mb-3 mr-2" />
		</a>
	);
}
