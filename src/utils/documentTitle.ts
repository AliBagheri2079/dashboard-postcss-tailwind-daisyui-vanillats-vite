const setDocumentTitle = (newTitle: string): void => {
	if (document.title !== newTitle) document.title = newTitle;
};

export default setDocumentTitle;
