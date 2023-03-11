import { type AxiosInstance, type CreateAxiosDefaults } from "axios";

export type NewInstanceType = (
  config: CreateAxiosDefaults<any>
) => AxiosInstance;
