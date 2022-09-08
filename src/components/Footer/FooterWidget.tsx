import React from "react";

import Icon from "@mdi/react";
import { mdiChevronDoubleUp } from "@mdi/js";

export function FooterWidget() {
	return (
		<button className="absolute -right-5 -bottom-5 w-16 h-16 bg-red rounded-full flex items-center justify-center">
			<Icon
				className="mb-2 mr-2"
				path={mdiChevronDoubleUp}
				size={1}
				color="#F0E7DB"
			/>
		</button>
	);
}
