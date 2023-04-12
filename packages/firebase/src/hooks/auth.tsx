import { useSignInWithGithub, useSignOut as SignOutHook } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

/**
 * Returns an instance of `useSignInWithGitHub`
 */
export const useGitHubAuth = () => {
	return useSignInWithGithub(auth);
};

/**
 * Returns an instance of `useSignOut`
 */
export const useSignOut = () => {
	return SignOutHook(auth);
};
