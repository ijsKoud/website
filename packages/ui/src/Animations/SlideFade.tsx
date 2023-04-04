import React, { useEffect } from "react";
import { HTMLMotionProps, motion, Variants, MotionProps, useAnimation } from "framer-motion";
import { TRANSITION_EASINGS } from "@website/constants";

export interface SlideFadeProps {
	delay?: number;
	duration?: number;
}

type Props = SlideFadeProps & Omit<HTMLMotionProps<"div">, keyof MotionProps>;

export const SlideFade: React.FC<React.PropsWithChildren<Props>> = ({ children, ...props }) => {
	const { delay = 0, duration = 0.5, ...divProps } = props;

	const animate = useAnimation();
	const variants: Variants = {
		initial: {
			opacity: 0,
			transform: "translateY(8px)"
		},
		animate: {
			opacity: 1,
			transform: "translateY(0px)"
		}
	};

	useEffect(() => {
		void animate.start("animate");
	}, []);

	return (
		<motion.div
			{...divProps}
			variants={variants}
			animate={animate}
			initial="initial"
			transition={{ delay, duration, ease: TRANSITION_EASINGS.easeOut }}
		>
			{children}
		</motion.div>
	);
};
