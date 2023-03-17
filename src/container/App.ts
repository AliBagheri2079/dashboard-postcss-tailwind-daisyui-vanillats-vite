import Nav from "@/layouts/private/Nav";
import Header from "@/layouts/private/Header";
import Pages from "@/pages";
import Dashboard from "@/pages/dashboard";
import SingleCoin from "@/pages/coin";
import Weather from "@/pages/weather";
import Waiting from "@/pages/waiting";
import NotFound from "@/pages/notfound";

const App = document.getElementById("app") as HTMLDivElement;
App.setAttribute(
  "class",
  "grid grid-flow-row-dense grid-cols-layout grid-rows-layout md:m-5"
);

//* Add Multiple Page from Routes
const manageRoutes = (): void => {
  const locationPath = location.pathname;

  switch (locationPath) {
    case "/register": {
      console.log("register page");
      // Pages.append(Dashboard);
      // App.append(Nav, Header, Pages);
      break;
    }
    case "/": {
      Pages.append(Dashboard);
      App.append(Nav, Header, Pages, SingleCoin);
      break;
    }
    default: {
      App.append(NotFound);
      break;
    }
  }
};
//* Change Page Content from Hashes
const manageHashes = (): void => {
  const hash = location.hash ?? history.state;

  switch (hash) {
    case "#weather": {
      Pages.replaceChildren(Dashboard, Weather);
      break;
    }
    default: {
      const existHashes: boolean = hash.includes("#coin-id") || hash === "";
      if (existHashes) break;

      Pages.replaceChildren(Dashboard, Waiting);
      break;
    }
  }
};

addEventListener("load", manageRoutes, false);
addEventListener("hashchange", manageHashes, false);

export default App;
