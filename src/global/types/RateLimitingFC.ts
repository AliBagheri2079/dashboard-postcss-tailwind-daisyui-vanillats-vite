export type RateLimitingFCType = (
  fn: (args: any) => any,
  delay: number
) => (...args: any) => void;
