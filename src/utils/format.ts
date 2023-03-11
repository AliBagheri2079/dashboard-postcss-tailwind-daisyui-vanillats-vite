export const relativeTimeFormat = new Intl.RelativeTimeFormat("en", {
  style: "narrow",
});

export const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export const percentageFormat = new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
});
