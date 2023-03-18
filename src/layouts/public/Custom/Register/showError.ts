import { type FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";

export const showError = (error: FirebaseError, elm: HTMLElement): void => {
  // console.info({ error });

  switch (error.code) {
    case AuthErrorCodes.INVALID_EMAIL: {
      elm.textContent = "Please Write Valid Email";
      break;
    }
    case AuthErrorCodes.INVALID_PASSWORD: {
      elm.textContent = "Please Write Valid Password";
      break;
    }
    case AuthErrorCodes.INTERNAL_ERROR: {
      elm.textContent = "Please Write Valid Data";
      break;
    }
    case AuthErrorCodes.EMAIL_EXISTS: {
      elm.textContent = "User Already Exist, Please Login";
      break;
    }
    case AuthErrorCodes.USER_DELETED: {
      elm.textContent = "User Not Found, Please Register";
      break;
    }
    default: {
      elm.textContent = "Please Complete Inputs";
      break;
    }
  }
};
