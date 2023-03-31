import { signOut } from "firebase/auth";
import { firebaseAuth } from "@/vendors/initialFirebase";
import { isLoggedOutUser } from "./userState";

export const logout = async (): Promise<void> => {
	await signOut(firebaseAuth);
};

setTimeout(() => {
	const avatarAction = document.querySelector(
		"#avatar-action",
	) as HTMLButtonElement;

	avatarAction.addEventListener("click", () => {
		logout()
			.then(() => {
				isLoggedOutUser();
			})
			.catch((error) => {
				console.error(error);
			});
	});
}, 100);
