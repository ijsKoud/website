import React, { useEffect } from "react";
import { type HTMLMotionProps, motion, type Variants, type MotionProps, useAnimation } from "framer-motion";
import { TRANSITION_EASINGS } from "@website/constants";
import { useInView } from "react-intersection-observer";

export interface SlideFadeProps {
	delay?: number;
	duration?: number;
	useInView?: boolean;
}

type Props = SlideFadeProps & Omit<HTMLMotionProps<"div">, keyof MotionProps>;

export const SlideFade: React.FC<React.PropsWithChildren<Props>> = ({ children, ...props }) => {
	const { delay = 0, duration = 0.5, useInView: UseInViewBool = false, ...divProps } = props;
	const [inViewRef, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

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
		if (UseInViewBool) {
			if (isInView) void animate.start("animate");
		} else void animate.start("animate");
	}, [animate, isInView]);

	return (
		<motion.div
			{...divProps}
			ref={inViewRef}
			variants={variants}
			animate={animate}
			initial="initial"
			transition={{ delay, duration, ease: TRANSITION_EASINGS.easeOut }}
		>
			{children}
		</motion.div>
	);
};
