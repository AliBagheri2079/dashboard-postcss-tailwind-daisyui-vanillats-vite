/* eslint-disable @typescript-eslint/naming-convention */
import { type CoinsMarketType } from "@/global/interface/CoinsMarket";
import {
	currencyFormat,
	percentageFormat,
	relativeTimeFormat,
} from "@/utils/format";

const createCoinDataBodyContent = ({
	current_price,
	id,
	image,
	last_updated,
	market_cap,
	market_cap_rank,
	name,
	symbol,
	price_change_percentage_24h,
}: CoinsMarketType): string => {
	const lastTime = new Date(last_updated).getSeconds();
	const newTime = new Date(Date.now()).getSeconds();
	// console.assert(newTime - lastTime, 'error');

	return `
  <tr id=${id} class="hover">
    <th>${market_cap_rank ?? ""}</th>
    <td>
      <div class="flex items-center max-w-[10rem]">
        <img 
          src=${image} 
          alt=${name} 
          class="w-10 h-10" 
          loading="lazy" 
        />
        <a 
          href="#coin-id=${id}" 
          class="btn btn-active btn-link"
        >
          ${name}
        </a>
      </div>
    </td>
    <td>${symbol}</td>
    <td>${currencyFormat.format(current_price)}</td>
    <td>${market_cap}</td>
    <td 
      class=${
				(price_change_percentage_24h ?? 0) > 0
					? "text-success"
					: (price_change_percentage_24h ?? 0) < 0
					? "text-error"
					: ""
			}
    >
      ${percentageFormat.format(price_change_percentage_24h ?? 0)}
    </td>
    <td>${relativeTimeFormat.format(lastTime - newTime, "second")}</td>
  </tr>
`;
};

export default createCoinDataBodyContent;
