import { ReCaptchaV3Provider, initializeAppCheck, type AppCheck } from "firebase/app-check";
import { AppCheckProvider, useFirebaseApp } from "reactfire";
import type React from "react";
import { useEffect, useState } from "react";

/**
 * Handles API protection with firebase AppCheck
 */
export const FirebaseAppCheckProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	/** Attaches debug token to window which allows dev-mode to bypass app-check */
	const attachAppCheckDebugToken = () => {
		const token = process.env.NEXT_PUBLIC_APP_CHECK_DEBUG_KEY as string;
		Object.assign(window, {
			FIREBASE_APPCHECK_DEBUG_TOKEN: token
		});
	};

	const siteKey = process.env.NEXT_PUBLIC_APP_CHECK_KEY as string;
	const app = useFirebaseApp();

	if (!siteKey) return <>{children}</>;

	const [sdk, setSdk] = useState<AppCheck>();

	useEffect(() => {
		if (process.env.NODE_ENV === "development") attachAppCheckDebugToken();
		const provider = new ReCaptchaV3Provider(siteKey);
		const sdk = initializeAppCheck(app, {
			provider,
			isTokenAutoRefreshEnabled: true
		});

		setSdk(sdk);
	}, []);

	return sdk ? <AppCheckProvider sdk={sdk}>{children}</AppCheckProvider> : <></>;
};
