import type { NavItemList } from "@/types/interface/NavItemList";

export const navItems: Readonly<NavItemList[]> = [
  {
    title: "dashboard",
    icon: `<i class="fa-solid fa-house"></i>`,
    collapse: [
      {
        title: "item 1",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 2",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 3",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
    ],
  },
  {
    title: "menu layout",
    icon: `<i class="fa-solid fa-cube"></i>`,
  },
  {
    title: "inbox",
    icon: `<i class="fa-solid fa-inbox"></i>`,
  },
  {
    title: "file manager",
    icon: `<i class="fa-solid fa-file"></i>`,
  },
  {
    title: "point of sale",
    icon: `<i class="fa-brands fa-salesforce"></i>`,
  },
  {
    title: "chat",
    icon: `<i class="fa-solid fa-comment"></i>`,
  },
  {
    title: "post",
    icon: `<i class="fa-solid fa-copy"></i>`,
  },
  {
    title: "crud",
    icon: `<i class="fa-solid fa-pen-to-square"></i>`,
  },
  {
    title: "users",
    icon: `<i class="fa-solid fa-user-group"></i>`,
  },
  {
    title: "profile",
    icon: `<i class="fa-solid fa-address-card"></i>`,
  },
  {
    title: "pages",
    icon: `<i class="fa-solid fa-table-columns"></i>`,
  },
  {
    title: "components",
    icon: `<i class="fa-solid fa-list"></i>`,
    collapse: [
      {
        title: "item 1",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 2",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 3",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
    ],
  },
  {
    title: "forms",
    icon: `<i class="fa-brands fa-wpforms"></i>`,
    collapse: [
      {
        title: "item 1",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 2",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 3",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
    ],
  },
  {
    title: "widgets",
    icon: `<i class="fa-solid fa-bell"></i>`,
    collapse: [
      {
        title: "item 1",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 2",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
      {
        title: "item 3",
        icon: `<i class="fa-solid fa-arrow-trend-up"></i>`,
      },
    ],
  },
];
