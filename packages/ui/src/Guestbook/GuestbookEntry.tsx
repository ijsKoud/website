import type { GuestbookDocument, QueryDocumentSnapshot, UserCredential } from "@website/firebase";
import React from "react";
import { SlideFade } from "../Animations";
import Markdown from "@website/markdown";
import { Button } from "@website/buttons";

type Document = QueryDocumentSnapshot<GuestbookDocument>;

interface Props {
	user: UserCredential | undefined;
	doc: Document;
	index: number;

	deleteMessage: (ref: Document["ref"]) => void;
}

export const GuestbookEntry: React.FC<Props> = ({ doc, user, index, deleteMessage }) => {
	const data = doc.data();
	const date = new Date(data.date.seconds * 1e3);

	return (
		<SlideFade key={doc.id} delay={0.2 * index}>
			<section data-doc-id={doc.id}>
				<div className="flex items-center justify-center gap-x-8">
					<h1 className="text-6 font-semibold">{data.username}</h1>
					<h2 className="text-4 font-light translate-y-0.5">{date.toLocaleString()}</h2>
					{data.uid === user?.user.uid && (
						<Button type="button" onClick={() => deleteMessage(doc.ref)}>
							<i className="fa-solid fa-times" />
						</Button>
					)}
				</div>
				<div role="main" className="text-5">
					<Markdown components={{ a: ({ children }) => <span>{children}</span> }}>{data.message}</Markdown>
				</div>
			</section>
		</SlideFade>
	);
};
