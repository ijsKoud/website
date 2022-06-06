import type { FCWithLanyard } from "../../lib/types";
import Button from "../Button";
import IconButton from "../IconButton";

export const Footer: FCWithLanyard = ({ lanyard }) => {
	return (
		<div>
			<p>Listening to {lanyard.status?.spotify?.song}</p>
			<IconButton path="/github/website" icon="fa-solid fa-code-fork" title="Fork It" style="string" type="link" />
			<div>
				<div>
					<Button path="/" title="Home" style="string" type="link" />
					<Button path="/about" title="About Me" style="string" type="link" />
					<Button path="/stats" title="Stats" style="string" type="link" />
				</div>
				<div>
					<Button path="/github" title="GitHub" style="string" type="link" external />
					<Button path="/discord" title="Discord" style="string" type="link" external />
					<Button path="email:daan@daangamesdg.xyz" title="Contact" style="string" type="link" />
				</div>
				<div>
					<Button path="/paypal" title="PayPal" style="string" type="link" external />
					<Button path="/kofi" title="Ko-Fi" style="string" type="link" external />
				</div>
			</div>
		</div>
	);
};
