import type { FCWithLanyard } from "../../lib/types";
import Button from "../Button";
import { Discord } from "../Discord";
import ToolTip from "../Tooltip";

export const Navbar: FCWithLanyard = ({ lanyard }) => {
	return (
		<div className="navbar-container">
			<div>
				<Button path="/" title="Home" style="string" type="link" />
				<Button path="/about" title="About Me" style="string" type="link" />
				<Button path="/stats" title="Stats" style="string" type="link" />
			</div>
			<ToolTip content="Click for more info!">
				<button className="discord-profile-button">
					{lanyard.status?.discord_status === "offline" ? "OFFLINE" : "ONLINE"}
					<p className={lanyard.status?.discord_status === "offline" ? "offline" : "online"} />
				</button>
			</ToolTip>
			<Discord lanyard={lanyard} />
		</div>
	);
};
