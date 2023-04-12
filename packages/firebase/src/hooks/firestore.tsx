import { firestore } from "../lib/firebase";
import { CollectionReference, DocumentReference, collection } from "firebase/firestore";
import { useFirestoreCollection } from "reactfire";

export interface GuestbookDocument {
	username: string;
	uid: string;
	message: string;
	date: { seconds: number; nanoseconds: number };
}

export type GuestBookReference = DocumentReference<GuestbookDocument>;
export const GuestBookCollection = collection(firestore, "guestbook") as CollectionReference<GuestbookDocument>;

/**
 * Returns an instance of `useCollection` for "guestbook"
 */
export const useGuestbookCollection = () => {
	return useFirestoreCollection(GuestBookCollection);
};
