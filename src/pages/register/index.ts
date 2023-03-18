export const Register = document.getElementById("register") as HTMLDivElement;
if (location.pathname !== "/") {
  Register.remove();
}
