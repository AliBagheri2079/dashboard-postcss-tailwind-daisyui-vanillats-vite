import { type CoinsMarketCapOrderEnum } from "../enum/CoinsMarketCapOrder";

export interface CoinsMarketParamsType {
  vs_currency: string;
  ids?: string;
  category?: string;
  order: CoinsMarketCapOrderEnum;
  per_page: number;
  page?: number;
  sparkline: boolean;
  price_change_percentage: string;
}
