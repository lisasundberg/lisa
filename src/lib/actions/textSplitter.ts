export type SplitType = 'char' | 'word';

export interface TextSplitterParams {
    type?: SplitType;
    className?: string;
}

function splitTextNode(
    node: Text,
    type: SplitType,
    className: string
): DocumentFragment {
    const frag = document.createDocumentFragment();
    const text = node.textContent ?? '';
    if (type === 'char') {
        Array.from(text).forEach((char, i) => {
            const span = document.createElement('span');
            // Use non-breaking space for normal spaces to preserve layout
            span.textContent = char === ' ' ? '\u00A0' : char;
            if (className) span.className = className;
            span.dataset.index = i.toString();
            frag.appendChild(span);
        });
    } else {
        const parts = text.split(' ');
        parts.forEach((part, i) => {
            if (i > 0) frag.append(' ');
            const span = document.createElement('span');
            span.textContent = part;
            if (className) span.className = className;
            span.dataset.index = i.toString();
            frag.appendChild(span);
        });
    }
    return frag;
}

function processNode(
    node: Node,
    type: SplitType,
    className: string
): Node | DocumentFragment {
    if (node.nodeType === Node.TEXT_NODE) {
        return splitTextNode(node as Text, type, className);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node.cloneNode(false) as Element;
        node.childNodes.forEach(child => {
            el.appendChild(processNode(child, type, className));
        });
        return el;
    } else {
        return node.cloneNode();
    }
}

export function split(
    node: HTMLElement,
    { type = 'word', className = '' }: TextSplitterParams = {}
) {
    const original = node.cloneNode(true);

    function split() {
        node.innerHTML = '';
        original.childNodes.forEach(child => {
            node.appendChild(processNode(child, type, className));
        });
    }

    split();

    return {
        update(params: TextSplitterParams) {
            type = params.type ?? 'word';
            className = params.className ?? '';
            split();
        },
        destroy() {
            node.innerHTML = '';
            node.appendChild(original);
        }
    };
}
