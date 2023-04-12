import React from "react";
import ReactMarkdown from "react-markdown";
import type { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

interface Props {
	children: string;
}

const Markdown: React.FC<Props & ReactMarkdownOptions> = ({ children, ...props }) => {
	return (
		<ReactMarkdown
			skipHtml
			components={{
				strong: ({ children }) => <span className="dark:text-white text-[#000]">{children}</span>,
				code: ({ children }) => <span className="text-primary">{children}</span>,
				a: ({ children, node, ...props }) => (
					<a {...props} className="text-primary hover:text-primary-500 transition-colors">
						{children}
					</a>
				),
				...props.components
			}}
			{...props}
		>
			{children}
		</ReactMarkdown>
	);
};

export default Markdown;
