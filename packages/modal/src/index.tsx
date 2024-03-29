import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";

interface Props {
	onClick: () => void;
	isOpen: boolean;
}

const Modal: React.FC<React.PropsWithChildren<Props>> = ({ children, onClick, isOpen }) => {
	const [BodyEl, setBodyEl] = useState<HTMLElement>();
	const ChildEl = <AnimatePresence mode="wait">{isOpen && <ModalItem onClick={onClick}>{children}</ModalItem>}</AnimatePresence>;

	useEffect(() => {
		setBodyEl(document.getElementById("__next") ?? undefined);
	}, []);

	useEffect(() => {
		if (isOpen && BodyEl) BodyEl.ariaHidden = "true";
		else if (BodyEl) BodyEl.ariaHidden = "false";
	}, [isOpen]);

	return BodyEl ? ReactDOM.createPortal(ChildEl, BodyEl) : <></>;
};

export default Modal;
