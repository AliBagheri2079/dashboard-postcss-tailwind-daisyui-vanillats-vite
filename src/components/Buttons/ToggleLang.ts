const ToggleLangButton = document.createElement("label");
ToggleLangButton.setAttribute("class", "swap btn-ghost btn-circle btn");

ToggleLangButton.innerHTML = `
  <input type="checkbox" />
  <div class="swap-off">EN</div>
  <div class="swap-on">FA</div>
`;

export default ToggleLangButton;
