import React from "react";
import BackgroundLayout from "./background/BackgroundLayout";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<BackgroundLayout>
			<Navbar />
			<div id="content" className="mt-[70px] w-screen h-screen z-10 overflow-y-auto">
				{children}
				<Footer />
			</div>
		</BackgroundLayout>
	);
};

export default Layout;
