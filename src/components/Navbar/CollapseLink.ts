import type { NavItem } from "@/types/type/NavItem";
import NavLink from "./Link";

const createNavCollapseLink = (collapse: NavItem[]): string => {
  let itemsCollapseLink: string = ``;
  collapse?.forEach(item => {
    itemsCollapseLink += NavLink(item);
  });
  return itemsCollapseLink;
};

export default createNavCollapseLink;
