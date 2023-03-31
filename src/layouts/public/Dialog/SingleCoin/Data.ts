import SingleCoinDialogCard from "./Card";
import SingleCoinDialogClosePanel from "./ClosePanel";

const SingleCoinDialogData = document.createElement("div");
SingleCoinDialogData.setAttribute(
	"class",
	"dialog-data pointer-events-auto relative w-screen max-w-xl transition-transform duration-500 ease-in-out sm:duration-700 translate-x-full",
);
SingleCoinDialogData.append(SingleCoinDialogClosePanel, SingleCoinDialogCard);

const changeDialogState = (event: HashChangeEvent): void => {
	const isCoinDialogURL = event.newURL.includes("#coin-id");

	if (isCoinDialogURL) {
		SingleCoinDialogData.classList.replace("translate-x-full", "translate-x-0");
	} else {
		SingleCoinDialogData.classList.replace("translate-x-0", "translate-x-full");
	}
};

addEventListener(
	"hashchange",
	(event: HashChangeEvent) => {
		changeDialogState(event);
	},
	false,
);

export default SingleCoinDialogData;
