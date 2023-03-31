//* App Components
import "./container/App";

//* Theme Change Module
import "./vendors/themeChange";

//* Main Styles
import "./style/main.css";

//* Web Components
import RegisterComponent from "./layouts/public/Custom/Register/Component";
customElements.define("register-component", RegisterComponent, {
	extends: "div",
});
