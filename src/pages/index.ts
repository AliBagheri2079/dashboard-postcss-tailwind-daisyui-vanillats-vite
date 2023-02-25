import Nav from "@/layouts/private/Nav";
import Header from "@/layouts/private/Header";
import Routes from "./Routes";

const App = document.getElementById("app") as HTMLDivElement;
App.setAttribute(
  "class",
  "grid grid-flow-row-dense grid-cols-layout grid-rows-layout md:m-5"
);
App.append(Nav, Header, Routes);

export default App;
