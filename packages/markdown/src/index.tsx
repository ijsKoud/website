import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
	children: string;
}

const Markdown: React.FC<Props> = ({ children }) => {
	return (
		<ReactMarkdown
			skipHtml
			allowedElements={["strong", "code", "p"]}
			components={{
				strong: ({ children }) => <span className="text-white">{children}</span>,
				code: ({ children }) => <span className="text-primary">{children}</span>
			}}
		>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
