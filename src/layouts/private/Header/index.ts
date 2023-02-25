import HeaderContent from "./Content";
import HeaderDivider from "./Divider";

const Header = document.createElement("header");
Header.setAttribute(
  "class",
  "rounded-t-box relative col-start-2 col-end-[-1] bg-base-100"
);
Header.append(HeaderContent, HeaderDivider);

export default Header;
