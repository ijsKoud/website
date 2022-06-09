import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { FCWithLanyard } from "../../../lib/types";
import Button from "../../general/Button";
import Discord from "../Discord";
import MenuButton from "./MenuButton";

const MobileNavbar: FCWithLanyard = ({ lanyard }) => {
	const [enabled, setEnabled] = useState(false);
	const mobileNavbarController = useAnimation();

	useEffect(() => {
		if (enabled)
			void mobileNavbarController.start({
				height: "calc(100vh - 80px)",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});
		else
			void mobileNavbarController.start({
				height: "0vh",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});

		return () => mobileNavbarController.stop();
	}, [enabled]);

	const onClick = () => setEnabled(!enabled);
	const closeDropdown = () => setEnabled(false);

	return (
		<>
			<div className="navbar-container-wrapper mobile">
				<div className="navbar-container">
					<div className="navbar-links">
						<Link href="/">
							<img tabIndex={0} className="navbar-logo" src="/assets/svg/logo_website.svg" alt="logo" />
						</Link>
					</div>
					<MenuButton onClick={onClick} isOpen={enabled} />
				</div>
				<motion.ul initial={{ height: 0 }} animate={mobileNavbarController} className={`navbar-mobile ${enabled ? "enabled" : ""}`}>
					<li className="navbar-buttons-mobile">
						<Button onClick={closeDropdown} path="/about" title="About Me" style="string" type="link" />
						<Button onClick={closeDropdown} path="/stats" title="Stats" style="string" type="link" />
					</li>
					<li className="navbar-discord">
						<Discord lanyard={lanyard} />
					</li>
				</motion.ul>
			</div>
		</>
	);
};

export default MobileNavbar;
