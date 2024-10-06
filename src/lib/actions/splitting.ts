const { matches: motionOK } = window.matchMedia('(prefers-reduced-motion: no-preference)');
// if (motionOK) {}

const span = (text: string, index: number): HTMLSpanElement => {
	const node = document.createElement('span');

	node.textContent = text;
	node.style.setProperty('--index', index.toString());
	node.classList.add('char');

	if (text == ' ') {
		node.classList.add('whitespace');
	}

	return node;
};

export const byLetter = (text: string): HTMLSpanElement[] => [...text].map(span);

// TO DO: fix spaces
export const byWord = (text: string): HTMLSpanElement[] => text.split(' ').map(span);

export const split = (node: HTMLElement) => {
	let nodes = null;
	nodes = byLetter(node.innerText);

	if (nodes) {
		node?.firstChild?.replaceWith(...nodes);
	}
};

export const wrapElements = (
	elems: NodeListOf<Element>,
	wrapType: 'span' | 'div',
	wrapClass: string
) => {
	elems.forEach((char) => {
		const wrapEl = document.createElement(wrapType);
		wrapEl.classList = wrapClass;
		char?.parentNode?.appendChild(wrapEl);
		wrapEl.appendChild(char);
	});
};
