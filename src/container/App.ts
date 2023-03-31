import Nav from "@/layouts/private/Nav";
import Header from "@/layouts/private/Header";

import Pages from "@/pages";
import Dashboard from "@/pages/dashboard";
import SingleCoin from "@/pages/coin";
import Weather from "@/pages/weather";
import Waiting from "@/pages/waiting";
import NotFound from "@/pages/notfound";
import "@/pages/register";

import setDocumentTitle from "@/utils/documentTitle";

const App = document.getElementById("app") as HTMLDivElement;
App.setAttribute(
	"class",
	"grid grid-flow-row-dense grid-cols-layout grid-rows-layout md:m-5",
);

//* Add Multiple Page from Routes
const manageRoutes = (): void => {
	const locationPath = location.pathname;

	switch (locationPath) {
		case "/dashboard": {
			Pages.append(Dashboard);
			App.append(Nav, Header, Pages, SingleCoin);
			setDocumentTitle("Dashboard Page");
			break;
		}
		case "/": {
			//* handle on register page file
			setDocumentTitle("Register Page");
			break;
		}
		default: {
			App.append(NotFound);
			setDocumentTitle("Not Found");
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
			setDocumentTitle("Weather Page");
			break;
		}
		default: {
			const existHashes: boolean = hash.includes("#coin-id") || hash === "";
			if (existHashes) break;

			Pages.replaceChildren(Dashboard, Waiting);
			setDocumentTitle("Comming Soon");
			break;
		}
	}
};

addEventListener("load", manageRoutes, false);
addEventListener("hashchange", manageHashes, false);

export default App;
