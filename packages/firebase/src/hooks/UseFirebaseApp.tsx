import React from "react";
import { FirebaseAppProvider } from "reactfire";
import { FirebaseAppCheckProvider } from "./AppCheck";
import { app } from "../lib/firebase";

export const FirebaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<FirebaseAppProvider firebaseApp={app}>
			<FirebaseAppCheckProvider>{children}</FirebaseAppCheckProvider>
		</FirebaseAppProvider>
	);
};
