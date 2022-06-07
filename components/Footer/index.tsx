import type { FCWithLanyard } from "../../lib/types";
import Button from "../Button";
import IconButton from "../IconButton";
import Page from "../Page";

export const Footer: FCWithLanyard = ({ lanyard }) => {
	return (
		<Page className="footer-container-wrapper">
			<div className="footer-container">
				<div className="footer-top">
					{lanyard.status?.spotify ? (
						<IconButton
							type="link"
							path={`https://open.spotify.com/track/${lanyard.status.spotify.track_id}`}
							icon="fa-brands fa-spotify"
							style="string"
							title={lanyard.status.spotify.song}
						/>
					) : (
						<p>
							<i className="fa-brands fa-spotify" /> Not listening to anything.
						</p>
					)}
					<IconButton path="/github/website" icon="fa-solid fa-code-fork" title="Fork It" style="string" type="link" />
				</div>
				<div className="footer-links">
					<ul>
						<li>
							<Button path="/" title="Home" style="string" type="link" />
						</li>
						<li>
							<Button path="/about" title="About Me" style="string" type="link" />
						</li>
						<li>
							<Button path="/stats" title="Stats" style="string" type="link" />
						</li>
					</ul>
					<ul>
						<li>
							<Button path="/github" title="GitHub" style="string" type="link" external />
						</li>
						<li>
							<Button path="/discord" title="Discord" style="string" type="link" external />
						</li>
						<li>
							<Button path="mailto:daan@daangamesdg.xyz" title="Contact" style="string" type="link" />
						</li>
					</ul>
					<ul>
						<li>
							<Button path="/paypal" title="PayPal" style="string" type="link" external />
						</li>
						<li>
							<Button path="/kofi" title="Ko-Fi" style="string" type="link" external />
						</li>
					</ul>
				</div>
				<p className="footer-credits">
					<i className="fa-solid fa-code" /> with <i className="fa-solid fa-heart" /> by{" "}
					<Button type="link" path="https://daangamesdg.xyz/" title="DaanGamesDG" style="string" />
				</p>
			</div>
		</Page>
	);
};
