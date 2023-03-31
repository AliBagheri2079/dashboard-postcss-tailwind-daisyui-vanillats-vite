// Debouncing
import { type RateLimitingFCType } from "@/global/types/RateLimitingFC";

const debounce: RateLimitingFCType = (fn, delay) => {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	let timeout: any;

	return (...args) => {
		if (typeof timeout !== "number") clearTimeout(timeout);

		timeout = setTimeout(() => {
			fn(args);
		}, delay);
	};
};

export default debounce;
