import type { NavItemList } from "../interface/NavItemList";

//  TODO: must rename to NavItemType
export type NavItem = Omit<NavItemList, "collapse">;
