import Button from "./Button";
import Input from "./Input";

const InputGroup = document.createElement("div");
InputGroup.setAttribute("class", "input-group");
InputGroup.append(Input, Button);

export default InputGroup;
