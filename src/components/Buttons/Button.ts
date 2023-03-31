import { type ButtonOptions } from "@/global/interface/ButtonOptions";

const Button = ({ classes, theme }: ButtonOptions): string => {
	setTimeout(() => {
		const html = document.querySelector("html") as HTMLHtmlElement;
		const elms = document.querySelectorAll("[data-set-theme]") as NodeList;

		elms.forEach((elm: Node) => {
			elm.addEventListener("click", (event: Event) => {
				const { attributes } = event.target as HTMLButtonElement;
				const theme = attributes.getNamedItem("data-set-theme")?.value;

				html.setAttribute("data-theme", theme ?? "");
			});
		});
	}, 100);

	return `
    <button
      class="btn my-1 ${classes}"
      data-set-theme="${theme}"
      data-act-class="ACTIVECLASS"
    >
      ${theme}
    </button>
  `;
};

export default Button;
