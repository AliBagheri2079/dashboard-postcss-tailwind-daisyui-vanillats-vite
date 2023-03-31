const SingleCoinDialogBackdrop = document.createElement("div");
SingleCoinDialogBackdrop.setAttribute(
	"class",
	"dialog-backdrop fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out opacity-0",
);

const changeDialogState = (event: HashChangeEvent): void => {
	const isCoinDialogURL = event.newURL.includes("#coin-id");

	if (isCoinDialogURL) {
		SingleCoinDialogBackdrop.classList.replace("opacity-0", "opacity-100");
	} else {
		SingleCoinDialogBackdrop.classList.replace("opacity-100", "opacity-0");
	}
};

addEventListener(
	"hashchange",
	(event: HashChangeEvent) => {
		changeDialogState(event);
	},
	false,
);

export default SingleCoinDialogBackdrop;
