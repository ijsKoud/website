import { useEffect, useState } from "react";
import type { FCWithLanyard } from "../../../lib/types";
import Button from "../../general/Button";
import Discord from "../Discord";
import { motion, useAnimation, Variants } from "framer-motion";
import Link from "next/link";

const DesktopNavbar: FCWithLanyard = ({ lanyard }) => {
	const controller = useAnimation();
	const [discordVisible, setDiscordVisible] = useState(false);
	const [discordVisibleOverride, setDiscordVisibleOverride] = useState(false);
	const [stateTimeout, setStateTimeout] = useState<NodeJS.Timeout>();

	const variants: Variants = {
		hidden: {
			pointerEvents: "none",
			opacity: 0,
			transform: "translateY(0px)",
			transition: {
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1]
			}
		},
		visible: {
			pointerEvents: "all",
			opacity: 1,
			transform: "translateY(10px)",
			transition: {
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1]
			}
		}
	};

	useEffect(() => {
		if (discordVisibleOverride) {
			if (stateTimeout) clearTimeout(stateTimeout);
			void controller.start("visible");
		} else if (discordVisible) {
			if (stateTimeout) clearTimeout(stateTimeout);
			void controller.start("visible");
		} else {
			const timeout = setTimeout(() => void controller.start("hidden"), 1e2);
			setStateTimeout(timeout);
		}

		return () => {
			controller.stop();
			if (stateTimeout) clearTimeout(stateTimeout);
		};
	}, [discordVisible]);

	return (
		<div className="navbar-container-wrapper">
			<div className="navbar-container">
				<div className="navbar-links">
					<Link href="/">
						<img tabIndex={0} className="navbar-logo" src="/assets/svg/logo_website.svg" alt="logo" />
					</Link>
					<Button path="/about" title="About Me" style="string" type="link" />
					<Button path="/stats" title="Stats" style="string" type="link" />
				</div>
				<div className="discord-component-container">
					<button
						onClick={() => setDiscordVisibleOverride(!discordVisibleOverride)}
						onMouseEnter={() => setDiscordVisible(true)}
						onMouseLeave={() => setDiscordVisible(false)}
						className="discord-profile-button"
					>
						{lanyard.status?.discord_status === "offline" ? "OFFLINE" : "ONLINE"}
						<p className={lanyard.status?.discord_status === "offline" ? "offline" : "online"} />
					</button>
					<motion.div
						className="discord-component"
						onMouseEnter={() => setDiscordVisible(true)}
						onMouseLeave={() => setDiscordVisible(false)}
						animate={controller}
						variants={variants}
					>
						<Discord lanyard={lanyard} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;
