import type { FCWithLanyard } from "../../../lib/types";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar: FCWithLanyard = ({ lanyard }) => {
	return (
		<>
			{/* Created to block items from moving under navbar */}
			<div className="fake-navbar" />
			<MobileNavbar lanyard={lanyard} />
			<DesktopNavbar lanyard={lanyard} />
		</>
	);
};

export default Navbar;
