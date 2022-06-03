import type { FCWithLanyard } from "../../lib/types";
import Button from "../Button";
import { Discord } from "../Discord";

export const Navbar: FCWithLanyard = ({ lanyard }) => {
	return (
		<div>
			<div>
				<Button path="/" title="Home" style="string" type="link" />
				<Button path="/about" title="About Me" style="string" type="link" />
				<Button path="/stats" title="Stats" style="string" type="link" />
			</div>
			<Discord lanyard={lanyard} />
		</div>
	);
};
