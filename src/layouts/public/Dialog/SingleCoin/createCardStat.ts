import { type CardStatType } from "@/global/interface/CardStat";

const createCardStat = ({
	icon,
	title,
	value,
	desc,
	status = "",
}: CardStatType): string => {
	return `
    <div class="stat">
      <div class="stat-figure ${status}">
        <span>${icon}</span>
      </div>

      <div class="stat-title capitalize">${title}</div>
      <div class="stat-value lowercase ${status}">${value}</div>
      <div class="stat-desc lowercase">${desc}</div>
    </div>
  `;
};
export default createCardStat;
