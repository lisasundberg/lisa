// export type SplitType = 'char' | 'word';

// export interface TextSplitterParams {
//     type?: SplitType;
//     className?: string;
// }

// function splitTextNode(
//     node: Text,
//     type: SplitType,
//     className: string
// ): DocumentFragment {
//     if (typeof document === 'undefined') {
//         throw new Error('splitTextNode can only be used in a browser environment.');
//     }

//     const frag = document.createDocumentFragment();
//     const text = node.textContent ?? '';
//     if (type === 'char') {
//         const words = text.split(' ');
//         words.forEach((word, wordIndex) => {
//             const wordSpan = document.createElement('span');
//             wordSpan.className = 'split-word'; // Add a class to group letters of a word
//             Array.from(word).forEach((char, charIndex) => {
//                 const span = document.createElement('span');
//                 span.textContent = char;
//                 if (className) span.className = className;
//                 span.dataset.index = `${wordIndex}-${charIndex}`;
//                 wordSpan.appendChild(span);
//             });
//             frag.appendChild(wordSpan);
//             frag.appendChild(document.createTextNode(' ')); // Add space between words
//         });
//     } else {
//         const parts = text.split(' ');
//         parts.forEach((part, i) => {
//             if (i > 0) frag.append(' ');
//             const span = document.createElement('span');
//             span.textContent = part;
//             if (className) span.className = className;
//             span.dataset.index = i.toString();
//             frag.appendChild(span);
//         });
//     }
//     return frag;
// }

// function processNode(
//     node: Node,
//     type: SplitType,
//     className: string
// ): Node | DocumentFragment {
//     if (typeof document === 'undefined') {
//         throw new Error('processNode can only be used in a browser environment.');
//     }

//     if (node.nodeType === Node.TEXT_NODE) {
//         return splitTextNode(node as Text, type, className);
//     } else if (node.nodeType === Node.ELEMENT_NODE) {
//         const el = node as HTMLElement;

//         // Skip processing if the element has the class "images"
//         if (el.classList.contains('images')) {
//             return el.cloneNode(true); // Clone the element as-is
//         }

//         const clonedElement = el.cloneNode(false) as Element;
//         node.childNodes.forEach(child => {
//             clonedElement.appendChild(processNode(child, type, className));
//         });
//         return clonedElement;
//     } else {
//         return node.cloneNode();
//     }
// }

// export function split(
//     node: HTMLElement,
//     { type = 'word', className = '' }: TextSplitterParams = {}
// ) {
//     if (typeof document === 'undefined') {
//         throw new Error('split can only be used in a browser environment.');
//     }

//     const original = node.cloneNode(true);

//     function split() {
//         node.innerHTML = '';
//         original.childNodes.forEach(child => {
//             node.appendChild(processNode(child, type, className));
//         });
//     }

//     split();

//     return {
//         update(params: TextSplitterParams) {
//             type = params.type ?? 'word';
//             className = params.className ?? '';
//             split();
//         },
//         destroy() {
//             node.innerHTML = '';
//             node.appendChild(original);
//         }
//     };
// }
