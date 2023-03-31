import NavLink from "@/components/Navbar/Link";
import createNavCollapseLink from "@/components/Navbar/CollapseLink";
import { navItems } from "@/components/Navbar/data";

const Menu = document.createElement("ul");
Menu.setAttribute(
	"class",
	"menu rounded-box menu-compact p-2 px-0 lg:menu-normal",
);

navItems.forEach((item) => {
	if (typeof item.collapse === "object") {
		const NavCollapseLink = createNavCollapseLink(item.collapse);

		Menu.innerHTML += `
      <div
        tabindex="0"
        class="collapse collapse-arrow rounded-box cursor-pointer"
      >
        <input type="checkbox" />
  
        <div class="collapse-title p-0">
          <li class="nav-item gap-2">
            ${NavLink(item)}
          </li>
        </div>
  
        <ul class="collapse-content rounded-box">
          <li class="gap-2">
            ${NavCollapseLink}
          </li>
        </ul>
      </div>
    `;
	} else {
		Menu.innerHTML += `
      <li class="nav-item gap-2">
        ${NavLink(item)}
      </li>
    `;
	}
});

export default Menu;
