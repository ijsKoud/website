import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import DarkModeBlobs from "./DarkModeBlobs";
import LightModeBlobs from "./LightModeBlobs";

const BackgroundLayout = ({ children }: React.PropsWithChildren) => {
	const { theme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	useEffect(() => setIsDark(theme === "dark"), [theme]);

	return (
		<div className="w-screen h-screen">
			{isDark ? <DarkModeBlobs /> : <LightModeBlobs />}
			<div className="w-screen h-screen bg-gradient-to-br from-white-100 to-white-300 backdrop-blur-bg-light dark:from-background-700 dark:via-background-600 dark:to-background-400 dark:backdrop-blur-bg-dark fixed z-10 transition-colors">
				{children}
			</div>
		</div>
	);
};

export default BackgroundLayout;
