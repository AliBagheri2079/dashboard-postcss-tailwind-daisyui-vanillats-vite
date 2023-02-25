import Brand from "@/components/Navbar/Brand";
import Menu from "../Menu";

const Nav = document.createElement("nav");
Nav.setAttribute("id", "navbar");
Nav.setAttribute("class", "relative col-span-1 row-span-full text-base-100");
Nav.append(Brand, Menu);

export default Nav;
