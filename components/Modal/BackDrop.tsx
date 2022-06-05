import { motion } from "framer-motion";
import React from "react";
import type { FC } from "../../lib/types";

const BackDrop: FC<{ onClick: () => void }> = ({ onClick, children }) => {
	return (
		<motion.div className="modal-backdrop" onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
};

export default BackDrop;
