import React, { useEffect, useRef } from "react";
import loadCursor from "../lib/cursor";

const Cursor = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined" || !ref.current) return;
		return loadCursor(ref.current);
	}, []);

	return (
		<div
			ref={ref}
			className="ball-transitions pointer-events-none fixed z-50 h-6 w-6 rounded-full border border-black bg-transparent opacity-0 shadow-md duration-200 dark:border-white"
		/>
	);
};

export default Cursor;
