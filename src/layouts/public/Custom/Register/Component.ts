import template from "./template";

import { handleRegisterUser } from "./register";
import { handleLoginUser } from "./login";
import "./logout";
import "./userState";

class RegisterComponent extends HTMLDivElement {
	constructor() {
		//* Always call super first in constructor
		super();

		// ? Element functionality written in here
		//* Create a shadow root
		const shadowRoot = this.attachShadow({ mode: "open" });

		//* attach the created elements to the shadow DOM
		shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback(): void {
		console.log("Custom square element added to page.");
		handleLoginUser(this);
		handleRegisterUser(this);
	}

	/*
  * Many Useful Methods
  disconnectedCallback(): void {
    console.log("Custom square element removed from page.");
  }

  adoptedCallback(): void {
    console.log("Custom square element moved to new page.");
  }

  attributeChangedCallback(name: any, oldValue: any, newValue: any): void {
    console.log("Custom square element attributes changed.");
  }

  static get observedAttributes(): string[] {
    return ["c", "l"];
  }
  */
}

export default RegisterComponent;
