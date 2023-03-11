import { type CreateChartType } from "@/global/types/CreateChart";
const {
  Chart,
  Colors,
  BarController,
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  PieController,
  ArcElement,
  Tooltip,
} = await import("chart.js");

Chart.register(
  Colors,
  BarController,
  LineController,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  PieController,
  ArcElement,
  Tooltip
);

//* better way use object parameter
const createChart: CreateChartType = (ctx, type, data, options) => {
  return new Chart(ctx, {
    type,
    data,
    options,
  });
};

export default createChart;
