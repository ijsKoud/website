import { useTheme } from "next-themes";
import React from "react";
import DarkMode from "./background/DarkMode";
import LightMode from "./background/LightMode";

const Layout = ({ children }: React.PropsWithChildren) => {
	const { theme } = useTheme();

	return <>{theme === "dark" ? <DarkMode>{children}</DarkMode> : <LightMode>{children}</LightMode>}</>;
};

export default Layout;
