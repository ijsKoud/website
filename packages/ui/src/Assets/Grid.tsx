import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Props = Omit<React.HTMLAttributes<HTMLImageElement>, "src" | "alt" | "aria-hidden">;

export const GridIllustration: React.FC<Props> = ({ className, ...props }) => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	return (
		<img
			aria-hidden
			src={theme === "light" ? "/grid/light.svg" : "/grid/dark.svg"}
			alt="Grid illustration"
			className={`absolute -z-10 ${className ?? ""}`}
			{...props}
		/>
	);
};
