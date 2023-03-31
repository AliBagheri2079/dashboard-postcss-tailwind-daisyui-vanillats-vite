import InputGroup from "./Group";

const SearchForm = document.createElement("form");
SearchForm.setAttribute("class", "form-control");
SearchForm.appendChild(InputGroup);

SearchForm.addEventListener(
	"submit",
	(event: Event) => {
		event.preventDefault();
	},
	false,
);

export default SearchForm;
