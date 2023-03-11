const SingleCoinDialogClosePanel = document.createElement("div");
SingleCoinDialogClosePanel.setAttribute(
  "class",
  "dialog-close absolute top-0 left-0 -ml-12 flex pt-4 pr-2 sm:-ml-14 sm:pr-4 ease-in-out duration-500 opacity-0"
);
const SingleCoinDialogClosePanelBtn = document.createElement("button");
SingleCoinDialogClosePanelBtn.setAttribute("type", "button");
SingleCoinDialogClosePanelBtn.setAttribute("class", "btn-ghost btn-circle btn");
SingleCoinDialogClosePanelBtn.innerHTML = `
  <span class="sr-only">Close panel</span>
  <span><i class="fa-solid fa-xmark text-2xl"></i></span>
`;
SingleCoinDialogClosePanelBtn.addEventListener("click", () => {
  history.back();
});

SingleCoinDialogClosePanel.appendChild(SingleCoinDialogClosePanelBtn);

const changeDialogState = (event: HashChangeEvent): void => {
  const isCoinDialogURL = event.newURL.includes("#coin-id");

  if (isCoinDialogURL) {
    SingleCoinDialogClosePanel.classList.replace("opacity-0", "opacity-100");
  } else {
    SingleCoinDialogClosePanel.classList.replace("opacity-100", "opacity-0");
  }
};

addEventListener(
  "hashchange",
  (event: HashChangeEvent) => {
    changeDialogState(event);
  },
  false
);

export default SingleCoinDialogClosePanel;
