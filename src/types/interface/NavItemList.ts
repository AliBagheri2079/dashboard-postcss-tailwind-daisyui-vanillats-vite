import type { NavItem } from "../type/NavItem";

export interface NavItemList {
  title: string;
  icon: string;
  collapse?: NavItem[];
}
