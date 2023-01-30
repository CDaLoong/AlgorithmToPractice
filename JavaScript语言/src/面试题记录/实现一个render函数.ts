
interface DomTree {
    tag: string,
    children: string | Array<object> | void
}

const domObj: DomTree = {
    tag: 'div',
    children: [
        { tag: 'span', children: 'hello world!'}
    ],
}

function Render(domObj: DomTree, root) {
    const el = document.createElement(domObj.tag);
    if (typeof domObj.children === 'string') {
        const text = document.createTextNode(domObj.children);
        el.appendChild(text);
    } else if (domObj.children) {
        domObj.children.forEach(child => Render(child as DomTree, el))
    }
    root.appendChild(el);
}