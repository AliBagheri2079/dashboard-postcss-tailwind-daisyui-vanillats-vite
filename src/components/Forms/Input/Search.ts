const SearchInput = document.createElement("div");
SearchInput.setAttribute("class", "form-control hidden md:inline");

const Input = document.createElement("input");
Input.setAttribute("type", "text");
Input.setAttribute("placeholder", "Search");
Input.setAttribute("class", "input rounded-full bg-slate-200");
SearchInput.appendChild(Input);

export default SearchInput;
