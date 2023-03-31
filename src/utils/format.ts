export const relativeTimeFormat: Intl.RelativeTimeFormat =
	new Intl.RelativeTimeFormat("en", {
		style: "narrow",
	});

export const currencyFormat: Intl.NumberFormat = new Intl.NumberFormat(
	"en-US",
	{
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 2,
	},
);

export const percentageFormat: Intl.NumberFormat = new Intl.NumberFormat(
	"en-US",
	{
		style: "percent",
		signDisplay: "exceptZero",
	},
);

export const degreesFormat: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
	style: "unit",
	unit: "celsius",
	notation: "compact",
	maximumFractionDigits: 0,
});

export const speedFormat: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
	style: "unit",
	unit: "kilometer-per-hour",
});
