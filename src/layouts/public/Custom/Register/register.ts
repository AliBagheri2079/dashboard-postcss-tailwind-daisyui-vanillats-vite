import {
	createUserWithEmailAndPassword,
	type Auth,
	type User,
	type UserCredential,
} from "firebase/auth";

import { firebaseAuth } from "@/vendors/initialFirebase";
import { showError } from "./showError";
import { isRegisteredUser } from "./userState";

export const createAccount = async (
	auth: Auth,
	email: string,
	password: string,
): Promise<User> => {
	const userCredential: UserCredential = await createUserWithEmailAndPassword(
		auth,
		email,
		password,
	);
	return userCredential.user;
};

export const handleRegisterUser = (elem: HTMLElement): void => {
	const shadow = elem.shadowRoot;
	const email = shadow?.getElementById("register-email") as HTMLInputElement;
	const password = shadow?.getElementById(
		"register-password",
	) as HTMLInputElement;
	const errorElm = shadow?.getElementById("register-error") as HTMLSpanElement;

	const registerAction = shadow?.querySelector(
		"#register-action",
	) as HTMLButtonElement;
	const registerForm = shadow?.querySelector(
		"#register-form",
	) as HTMLFormElement;

	registerForm.addEventListener("submit", (event: Event) => {
		event.preventDefault();
	});
	registerAction.addEventListener("click", () => {
		createAccount(firebaseAuth, email.value, password.value)
			.then(() => {
				isRegisteredUser();
			})
			.catch((error) => {
				showError(error, errorElm);
			});
	});
};
