import Button from "./Button";

const ThemeButton = document.createElement("div");
ThemeButton.setAttribute("class", "dropdown dropdown-end");

const LightBtn = Button({
  classes: "btn-dark btn-outline",
  theme: "light",
});
const DarkBtn = Button({
  classes: "text-white",
  theme: "dark",
});
const LightYellowBtn = Button({
  classes: "btn-warning btn-outline",
  theme: "bumblebee",
});
const DarkYellowBtn = Button({
  classes: "btn-warning",
  theme: "halloween",
});
const LightGreenBtn = Button({
  classes: "btn-success btn-outline",
  theme: "emerald",
});
const DarkGreenBtn = Button({
  classes: "btn-success",
  theme: "forest",
});

ThemeButton.innerHTML = `
  <label tabindex="0" class="btn-ghost btn-circle btn">
    <i class="fa-solid fa-tags h-5 w-5"></i>
  </label>

  <ul
    tabindex="0"
    class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
  >
    <li>${LightBtn}</li>
    <li>${DarkBtn}</li>
    <li>${LightYellowBtn}</li>
    <li>${DarkYellowBtn}</li>
    <li>${LightGreenBtn}</li>
    <li>${DarkGreenBtn}</li>
  </ul>
`;

export default ThemeButton;
