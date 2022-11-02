import React from "react";
import BackgroundLayout from "./background/BackgroundLayout";
import Navbar from "./navbar";

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<BackgroundLayout>
			<Navbar />
			<div className="mt-[70px] w-screen h-screen z-10 overflow-y-auto">{children}</div>
		</BackgroundLayout>
	);
};

export default Layout;
