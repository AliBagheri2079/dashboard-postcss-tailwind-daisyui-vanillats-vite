import type { NavItemList } from "../interface/NavItemList";

export type NavItem = Omit<NavItemList, "collapse">;
