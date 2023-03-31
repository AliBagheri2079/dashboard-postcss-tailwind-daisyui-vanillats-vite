import {
	signInWithEmailAndPassword,
	type Auth,
	type User,
	type UserCredential,
} from "firebase/auth";

import { firebaseAuth } from "@/vendors/initialFirebase";
import { showError } from "./showError";
import { isRegisteredUser } from "./userState";

export const loginEmailPassword = async (
	auth: Auth,
	email: string,
	password: string,
): Promise<User> => {
	const userCredential: UserCredential = await signInWithEmailAndPassword(
		auth,
		email,
		password,
	);
	return userCredential.user;
};

export const handleLoginUser = (elem: HTMLElement): void => {
	const shadow = elem.shadowRoot;
	const email = shadow?.getElementById("register-email") as HTMLInputElement;
	const password = shadow?.getElementById(
		"register-password",
	) as HTMLInputElement;
	const errorElm = shadow?.getElementById("register-error") as HTMLSpanElement;

	const loginAction = shadow?.querySelector(
		"#login-action",
	) as HTMLButtonElement;

	loginAction.addEventListener("click", () => {
		loginEmailPassword(firebaseAuth, email.value, password.value)
			.then(() => {
				isRegisteredUser();
			})
			.catch((error) => {
				showError(error, errorElm);
			});
	});
};
