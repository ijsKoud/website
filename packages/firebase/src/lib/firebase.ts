import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// REPLACE THESE CREDENTAILS WITH YOUR OWN CREDENTIALS!
const firebaseConfig = {
	apiKey: "AIzaSyCzdkTdHF_b4LLB53P2jVNa-nrQVKkfXDk",
	authDomain: "personal-website-69cde.firebaseapp.com",
	projectId: "personal-website-69cde",
	storageBucket: "personal-website-69cde.appspot.com",
	messagingSenderId: "553053228220",
	appId: "1:553053228220:web:4c9c3e3d3669c6df1ed4b9",
	measurementId: "G-WTP63DHLNL"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
