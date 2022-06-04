import type { FCWithLanyard } from "../../lib/types";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar: FCWithLanyard = ({ lanyard }) => {
	return <DesktopNavbar lanyard={lanyard} />;
};
