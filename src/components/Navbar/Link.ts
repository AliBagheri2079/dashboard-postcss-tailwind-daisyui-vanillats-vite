import { type NavItem } from "@/global/types/NavItem";

const handleActiveLink = (item: Element): void => {
  item.addEventListener("click", event => {
    event.preventDefault();
    history.replaceState(
      { id: item.getAttribute("data-id") },
      "",
      `#${item.getAttribute("data-id") ?? ""}`
    );

    // const justNavItem: boolean =
    //   item.parentElement?.classList.contains("nav-item") === true;
    // const currentPath: boolean = history.state.id === item.id;

    // if (justNavItem && currentPath) item.classList.add("active");
  });
  // item.addEventListener("blur", () => {
  //   item.classList.remove("active");
  // });
};

window.addEventListener("DOMContentLoaded", () => {
  const listofLinks = document.querySelectorAll(".nav-link");
  // console.table([listofLinks]);

  listofLinks.forEach(item => {
    // initialActiveLink(item);
    handleActiveLink(item);
  });
});

const NavLink = ({ title, icon }: NavItem): string => {
  const itemLink: string = title.replaceAll(" ", "-");

  return `
    <a
      class="nav-link"
      href="#${itemLink}"
      data-id="${itemLink}"
    >
      <span class="text-2xl tooltip tooltip-right" data-tip="${title}">
        ${icon}
      </span>
      <span class="!text-sm capitalize hidden md:inline">
        ${title}
      </span>
    </a>
  `;
};

export default NavLink;
