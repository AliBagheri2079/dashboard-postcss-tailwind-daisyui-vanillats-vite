export type RateLimitingFCType = (
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	fn: (args: any) => any,
	delay: number,
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
) => (...args: any) => void;
