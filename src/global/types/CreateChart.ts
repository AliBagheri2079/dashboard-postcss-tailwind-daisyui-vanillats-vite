import {
  type ChartTypeRegistry,
  type ChartComponent,
  type ChartData,
  type ChartItem,
  type ChartOptions,
} from "chart.js";

export type CreateChartType = (
  ctx: ChartItem,
  type: keyof ChartTypeRegistry,
  data: ChartData,
  option?: ChartOptions
) => ChartComponent;
