import { AnimatePresence } from "framer-motion";
import React from "react";
import ModalItem from "./ModalItem";
import ReactDOM from "react-dom";

interface Props {
	onClick: () => void;
	isOpen: boolean;
}

const Modal: React.FC<React.PropsWithChildren<Props>> = ({ children, onClick, isOpen }) => {
	const BodyEl = document?.getElementById("__next");
	const ChildEl = <AnimatePresence mode="wait">{isOpen && <ModalItem onClick={onClick}>{children}</ModalItem>}</AnimatePresence>;

	return BodyEl ? ReactDOM.createPortal(ChildEl, BodyEl) : <div></div>;
};

export default Modal;
