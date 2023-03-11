import type { NavItem } from "../types/NavItem";

export interface NavItemList {
  title: string;
  icon: string;
  collapse?: NavItem[];
}
