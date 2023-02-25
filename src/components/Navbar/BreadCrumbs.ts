const BreadCrumbs = document.createElement("div");
BreadCrumbs.setAttribute("class", "breadcrumbs text-sm");
BreadCrumbs.innerHTML = `
  <ul>
    <li>
      <a href="#" class="capitalize text-primary">home</a>
    </li>
    <li>
      <a href="#" class="capitalize">dashboard</a>
    </li>
  </ul>
`;

export default BreadCrumbs;
