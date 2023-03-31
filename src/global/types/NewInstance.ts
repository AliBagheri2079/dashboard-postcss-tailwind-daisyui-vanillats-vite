import { type AxiosInstance, type CreateAxiosDefaults } from "axios";

export type NewInstanceType = (
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	config: CreateAxiosDefaults<any>,
) => AxiosInstance;
