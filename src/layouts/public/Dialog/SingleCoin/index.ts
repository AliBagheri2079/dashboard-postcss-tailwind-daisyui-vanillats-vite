import SingleCoinDialogBackdrop from "./Backdrop";
import SingleCoinDialogContent from "./Content";

//* better rename to 'CoinDialog'
const SingleCoinDialog = document.createElement("section");
SingleCoinDialog.setAttribute("class", "dialog relative -z-20");
SingleCoinDialog.setAttribute("aria-labelledby", "slide-over-title");
SingleCoinDialog.setAttribute("role", "dialog");
SingleCoinDialog.setAttribute("aria-modal", "true");

SingleCoinDialog.append(SingleCoinDialogBackdrop, SingleCoinDialogContent);

const changeDialogState = (event: HashChangeEvent): void => {
	const isCoinDialogURL = event.newURL.includes("#coin-id");

	if (isCoinDialogURL) {
		SingleCoinDialog.classList.replace("-z-20", "z-20");
	} else {
		SingleCoinDialog.classList.replace("z-20", "-z-20");
	}
};
addEventListener(
	"hashchange",
	(event: HashChangeEvent) => {
		changeDialogState(event);
	},
	false,
);

export default SingleCoinDialog;
