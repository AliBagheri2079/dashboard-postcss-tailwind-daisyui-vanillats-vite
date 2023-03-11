import CoinCards from "@/layouts/public/Cards/CoinPieChart";
import CoinData from "@/layouts/public/Table/Coin/CoinData";

const Dashboard = document.createDocumentFragment();
Dashboard.append(CoinCards, CoinData);

export default Dashboard;
