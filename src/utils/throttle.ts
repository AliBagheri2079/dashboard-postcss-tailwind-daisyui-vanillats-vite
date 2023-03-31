// Throttling
import { type RateLimitingFCType } from "@/global/types/RateLimitingFC";

const throttle: RateLimitingFCType = (fn, delay) => {
	let shouldWait: boolean = false;

	return (...args) => {
		if (shouldWait) return;

		fn(args);
		shouldWait = true;

		setTimeout(() => {
			shouldWait = false;
		}, delay);
	};
};

export default throttle;
