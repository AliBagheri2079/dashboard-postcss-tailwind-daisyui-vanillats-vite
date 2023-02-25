import BreadCrumbs from "@/components/Navbar/BreadCrumbs";
import SearchInput from "@/components/Forms/Input/Search";
import ThemeButton from "@/components/Buttons/Theme";
import Avatar from "@/components/Buttons/Avatar";
import ToggleLangButton from "@/components/Buttons/ToggleLang";

const HeaderContent = document.createElement("div");
HeaderContent.setAttribute("class", "navbar px-6 py-3");

const HeaderContentStart = document.createElement("div");
HeaderContentStart.setAttribute("class", "navbar-start flex-1");
HeaderContentStart.appendChild(BreadCrumbs);

const HeaderContentEnd = document.createElement("div");
HeaderContentEnd.setAttribute("class", "navbar-end flex-none");
HeaderContentEnd.append(SearchInput, ToggleLangButton, ThemeButton, Avatar);

HeaderContent.append(HeaderContentStart, HeaderContentEnd);
export default HeaderContent;
