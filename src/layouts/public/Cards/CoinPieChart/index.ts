import CurrentPriceCard from "./CurrentPrice";
import MarketCapCard from "./MarketCap";
import "./data";

const CoinCards = document.createElement("section");
CoinCards.className = "flex flex-wrap gap-2 items-center justify-evenly";
CoinCards.append(CurrentPriceCard, MarketCapCard);
export default CoinCards;
