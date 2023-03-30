// Debouncing
import { type RateLimitingFCType } from "@/global/types/RateLimitingFC";

const debounce: RateLimitingFCType = (fn, delay) => {
  let timeout: any;

  return (...args) => {
    if (typeof timeout !== "number") clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(args);
    }, delay);
  };
};

export default debounce;
