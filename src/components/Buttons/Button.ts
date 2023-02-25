import type { ButtonOptions } from "@/types/interface/ButtonOptions";

const Button = ({ classes, theme }: ButtonOptions): string => {
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
