import { PageLayout, PageSection, SlideFade, GridIllustration, inter, GuestbookEntry, GuestbookTextarea, GuestbookTextAreaProps } from "@website/ui";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import {
	GuestBookCollection,
	GuestBookReference,
	addDoc,
	deleteDoc,
	useGitHubAuth,
	useGuestbookCollection,
	useSignOut,
	Timestamp
} from "@website/firebase";
import { PrimaryButton, Button } from "@website/buttons";
import { toast } from "react-toastify";

const Guestbook: NextPage = () => {
	const [signInWithGithub, user, loading, error] = useGitHubAuth();
	const [signOut, , signOutError] = useSignOut();
	const { data: CollectionData, error: CollectionError } = useGuestbookCollection();

	useEffect(() => {
		let err: Error | undefined;

		if (error) err = error;
		else if (signOutError) err = signOutError;
		else if (CollectionError) err = CollectionError;

		if (err) {
			const { name, message } = err;
			console.error(`[${name.toUpperCase()}]: `, error);
			toast.error(`[${name}]: ${message}`);
		}
	}, [signOutError, CollectionError, error]);

	/** Logs out the user and reloads the window to reset the states */
	const signOutHandler = async () => {
		await signOut();
		location.reload();
	};

	const deleteMessage = (ref: GuestBookReference) => {
		toast
			.promise(deleteDoc(ref), {
				error: "Unable to delete guestbook message",
				pending: "Deleting guestbook message...",
				success: "Guestbook message deleted"
			})
			.catch(() => void 0);
	};

	const createMessage: GuestbookTextAreaProps["onSubmit"] = async (values, helpers) => {
		if (!user) {
			toast.error("To add a message, login first.");
			return;
		}

		await toast
			.promise(
				addDoc(GuestBookCollection, {
					uid: user.user.uid,
					username: user.user.displayName || user.user.uid,
					date: Timestamp.fromDate(new Date()),
					message: values.message
				}),
				{
					error: "Unable to create guestbook message",
					pending: "Creating guestbook message...",
					success: "Guestbook message created"
				}
			)
			.catch(() => void 0);

		helpers.resetForm();
	};

	return (
		<PageLayout className="min-h-screen flex flex-col gap-y-52 pt-28">
			<NextSeo title="Guestbook" />
			<PageSection className="items-center">
				<div className="flex flex-col gap-y-4 relative w-full">
					<SlideFade useInView className="w-full flex flex-col items-center justify-center">
						<GridIllustration className="top-0 left-1/2 -translate-x-52 -translate-y-11 h-28" />
						<h1 className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10" style={inter.style}>
							Guestbook
						</h1>
						{user ? (
							<div className="flex flex-col items-center gap-y-2">
								<Button
									type="button"
									about="Sign out"
									aria-label="Sign out"
									className="text-5 mt-4 hover:line-through"
									onClick={signOutHandler}
								>
									Signed in as <b>{user.user.displayName}</b>
								</Button>
								<GuestbookTextarea onSubmit={createMessage} />
							</div>
						) : (
							<PrimaryButton type="button" className="mt-5" onClick={() => signInWithGithub(["read:user"])} disabled={loading}>
								Sign in With GitHub
							</PrimaryButton>
						)}
					</SlideFade>
				</div>
				<div className="flex flex-col gap-y-4 mt-8">
					{CollectionData &&
						CollectionData.docs
							.sort((a, b) => b.data().date.seconds - a.data().date.seconds)
							.map((doc, index) => <GuestbookEntry deleteMessage={deleteMessage} doc={doc} index={index} user={user} key={index} />)}
				</div>
			</PageSection>
		</PageLayout>
	);
};

export default Guestbook;
