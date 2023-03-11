import SingleCoinDialogData from "./Data";

const SingleCoinDialogContent = document.createElement("div");
SingleCoinDialogContent.setAttribute(
  "class",
  "dialog-content fixed inset-0 overflow-hidden"
);

const SingleCoinDialogContentChild = document.createElement("div");
SingleCoinDialogContentChild.setAttribute(
  "class",
  "absolute inset-0 overflow-hidden"
);

const SingleCoinDialogContentNestedChild = document.createElement("div");
SingleCoinDialogContentNestedChild.setAttribute(
  "class",
  "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
);

SingleCoinDialogContentNestedChild.appendChild(SingleCoinDialogData);
SingleCoinDialogContentChild.appendChild(SingleCoinDialogContentNestedChild);
SingleCoinDialogContent.appendChild(SingleCoinDialogContentChild);

export default SingleCoinDialogContent;
