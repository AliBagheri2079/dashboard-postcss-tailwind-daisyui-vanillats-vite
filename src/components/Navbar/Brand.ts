const Brand = document.createElement("div");
Brand.setAttribute("class", "text-xl p-4 border-b border-slate-500");
Brand.innerHTML = `
  <span><i class="fa-solid fa-layer-group"></i></span>
  <span class="capitalize px-2 hidden md:inline">midone</span>
`;

export default Brand;
