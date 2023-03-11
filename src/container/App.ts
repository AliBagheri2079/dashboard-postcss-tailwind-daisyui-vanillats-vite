import Nav from "@/layouts/private/Nav";
import Header from "@/layouts/private/Header";
import Pages from "@/pages";
import Dashboard from "@/pages/dashboard";
import SingleCoin from "@/pages/coin";

const App = document.getElementById("app") as HTMLDivElement;
App.setAttribute(
  "class",
  "grid grid-flow-row-dense grid-cols-layout grid-rows-layout md:m-5"
);

//* Add Multiple Page from Routes
const manageRoutes = (): void => {
  const locationPath = location.pathname;

  switch (locationPath) {
    case "/": {
      Pages.append(Dashboard);
      App.append(Nav, Header, Pages, SingleCoin);
      break;
    }
    case "/register": {
      console.log("register page");
      // Pages.append(Dashboard);
      // App.append(Nav, Header, Pages);
      break;
    }
    default: {
      console.log("404 page");
      break;
    }
  }
};
//* Change Page Content from Hashes
const manageHashes = (): void => {
  const hash = location.hash ?? history.state;

  switch (hash) {
    case "#crud": {
      // Pages.replaceChildren(Dashboard, li);
      console.log("crud");
      break;
    }
    default: {
      break;
    }
  }
};

addEventListener("load", manageRoutes, false);
addEventListener("hashchange", manageHashes, false);

export default App;
