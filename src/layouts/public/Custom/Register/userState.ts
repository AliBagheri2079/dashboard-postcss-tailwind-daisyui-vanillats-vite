export const isRegisteredUser = (): void => {
  location.replace("/dashboard");
};

export const isLoggedOutUser = (): void => {
  location.replace("/");
};
